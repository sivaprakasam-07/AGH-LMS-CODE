import React, { useRef, useState, useEffect } from "react";
import {
  Wrapper,
  DragBar,
  DragHandle,
  TabsContainer,
  TabButton,
  TabDivider,
  MobileExtraTabButton,
  ModalOverlay,
  ModalContent,
  ModalTab,
  ScrollArea,
  TestCaseBox,
  Label,
  Text,
  TextArea,
  AddCaseButton
} from "./TestCases.styles";

const EXAMPLES = [
  {
    input: "Geeks for Geeks",
    output: "Geeks \\n for \\n Geeks",
    explanation: "First word of the statment is in first line, next word is in next line, and last is in last line."
  },
  ...Array(8).fill(0).map((_, i) => ({
    input: `Input ${i + 2}`,
    output: `Output ${i + 2}`,
    explanation: `Explanation ${i + 2}`
  }))
];

const TestCases = ({ height, onDrag }) => {
  const dragRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [activeTab, setActiveTab] = useState("Test Cases");
  const [customInputs, setCustomInputs] = useState([]);
  const [customInputValue, setCustomInputValue] = useState("");
  const [showExtraTabs, setShowExtraTabs] = useState(false);

  const handleMouseDown = (e) => {
    setDragging(true);
    dragRef.current = e.clientY;
    document.body.style.cursor = "ns-resize";
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const diff = e.clientY - dragRef.current;
    dragRef.current = e.clientY;
    onDrag(diff);
  };

  const handleMouseUp = () => {
    setDragging(false);
    document.body.style.cursor = "";
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <Wrapper>
      <DragBar onMouseDown={handleMouseDown}>
        <DragHandle />
      </DragBar>

      <TabsContainer>
        <TabButton active={activeTab === "Test Cases"} onClick={() => setActiveTab("Test Cases")}>
          Test Cases
        </TabButton>

        <div className="flex-1 flex justify-end md:hidden">
          <MobileExtraTabButton onClick={() => setShowExtraTabs(true)}>+</MobileExtraTabButton>
        </div>

        <TabDivider>|</TabDivider>

        <TabButton active={activeTab === "Compilation Result"} onClick={() => setActiveTab("Compilation Result")} hideOnMobile>
          Compilation Result
        </TabButton>

        <TabDivider>|</TabDivider>

        <TabButton active={activeTab === "Custom Input"} onClick={() => setActiveTab("Custom Input")} hideOnMobile>
          Custom Input
        </TabButton>
      </TabsContainer>

      {showExtraTabs && (
        <ModalOverlay onClick={() => setShowExtraTabs(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-base">More</span>
              <button className="text-2xl text-gray-400" onClick={() => setShowExtraTabs(false)}>&times;</button>
            </div>
            <div className="flex flex-col gap-2">
              <ModalTab active={activeTab === "Compilation Result"} onClick={() => { setActiveTab("Compilation Result"); setShowExtraTabs(false); }}>
                Compilation Result
              </ModalTab>
              <ModalTab active={activeTab === "Custom Input"} onClick={() => { setActiveTab("Custom Input"); setShowExtraTabs(false); }}>
                Custom Input
              </ModalTab>
            </div>
          </ModalContent>
        </ModalOverlay>
      )}

      <ScrollArea>
        {activeTab === "Test Cases" && (
          EXAMPLES.map((ex, idx) => (
            <TestCaseBox key={idx}>
              <Label>Input :</Label>
              <Text>{ex.input}</Text>
              <Label>Output :</Label>
              <Text>{ex.output}</Text>
            </TestCaseBox>
          ))
        )}

        {activeTab === "Compilation Result" && (
          <div className="flex flex-col gap-4 p-2 md:p-4">
            <div className="font-semibold text-base md:text-lg mb-2">
              Result : <span className="font-bold text-black">Wrong Answer</span>
            </div>
            <TestCaseBox>
              <Label>Input :</Label>
              <Text>Geeks for Geeks</Text>
              <Label>Your Output :</Label>
              <Text>Geeks for Geeks</Text>
              <Label>Expected Output :</Label>
              <Text>Geeks \n for \n Geeks</Text>
            </TestCaseBox>
          </div>
        )}

        {activeTab === "Custom Input" && (
          <div className="flex flex-col gap-2 h-full justify-start">
            {customInputs.map((input, idx) => (
              <TestCaseBox key={idx}>
                <Label>Input :</Label>
                <Text>{input}</Text>
              </TestCaseBox>
            ))}
            <TextArea
              placeholder="Enter Custom Input"
              value={customInputValue}
              onChange={e => setCustomInputValue(e.target.value)}
            />
            <div className="flex justify-end w-full">
              <AddCaseButton
                onClick={() => {
                  if (customInputValue.trim()) {
                    setCustomInputs([...customInputs, customInputValue]);
                    setCustomInputValue("");
                  }
                }}
              >
                Add Case +
              </AddCaseButton>
            </div>
          </div>
        )}
      </ScrollArea>
    </Wrapper>
  );
};

export default TestCases;
