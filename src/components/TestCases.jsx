import React, { useRef, useState } from "react";

const EXAMPLES = [
  {
    input: "Geeks for Geeks",
    output: "Geeks \\n for \\n Geeks",
    explanation: "First word of the statment is in first line, next word is in next line, and last is in last line."
  },
  // Add more test cases for scroll demonstration
  ...Array(8).fill(0).map((_, i) => ({
    input: `Input ${i+2}`,
    output: `Output ${i+2}`,
    explanation: `Explanation ${i+2}`
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

  React.useEffect(() => {
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
    <div className="bg-white rounded-lg shadow p-0 mt-2 flex flex-col relative h-full w-full">
      <div
        className="flex items-center justify-center cursor-ns-resize py-1 border-b bg-gray-700 rounded-t-lg"
        onMouseDown={handleMouseDown}
      >
        <div className="w-8 h-1 bg-gray-400 rounded-full" />
      </div>
      <div className="flex gap-0 border-b px-2 md:px-4 py-2 items-center text-sm md:text-base">
        <button
          className={`font-semibold px-2 pb-1 ${activeTab === "Test Cases" ? "text-gray-700 border-b-2 border-gray-700" : "text-gray-400"}`}
          onClick={() => setActiveTab("Test Cases")}
        >
          Test Cases
        </button>
        {/* Only show plus button on mobile */}
        <div className="flex-1 flex justify-end md:hidden">
          <button
            className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg text-xl"
            onClick={() => setShowExtraTabs(true)}
            aria-label="Show More Tabs"
          >
            +
          </button>
        </div>
        {/* On desktop, show all tabs as before */}
        <span className="mx-2 text-gray-700 hidden md:inline">|</span>
        <button
          className={`font-semibold px-2 pb-1 hidden md:inline ${activeTab === "Compilation Result" ? "text-gray-700 border-b-2 border-gray-700" : "text-gray-400"}`}
          onClick={() => setActiveTab("Compilation Result")}
        >
          Compilation Result
        </button>
        <span className="mx-2 text-gray-700 hidden md:inline">|</span>
        <button
          className={`font-semibold px-2 pb-1 hidden md:inline ${activeTab === "Custom Input" ? "text-gray-700 border-b-2 border-gray-700" : "text-gray-400"}`}
          onClick={() => setActiveTab("Custom Input")}
        >
          Custom Input
        </button>
      </div>
      {/* Modal for extra tabs on mobile */}
      {showExtraTabs && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-end md:hidden" onClick={() => setShowExtraTabs(false)}>
          <div className="bg-white w-full max-h-[90vh] rounded-t-lg shadow-lg p-4 overflow-y-auto" style={{ minHeight: '60vh' }} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-base">More</span>
              <button className="text-2xl text-gray-400" onClick={() => setShowExtraTabs(false)}>&times;</button>
            </div>
            <div className="flex flex-col gap-2">
              <button
                className={`font-semibold px-2 pb-1 text-left ${activeTab === "Compilation Result" ? "text-gray-700 border-b-2 border-gray-700" : "text-gray-400"}`}
                onClick={() => { setActiveTab("Compilation Result"); setShowExtraTabs(false); }}
              >
                Compilation Result
              </button>
              <button
                className={`font-semibold px-2 pb-1 text-left ${activeTab === "Custom Input" ? "text-gray-700 border-b-2 border-gray-700" : "text-gray-400"}`}
                onClick={() => { setActiveTab("Custom Input"); setShowExtraTabs(false); }}
              >
                Custom Input
              </button>
            </div>
            {/* Render the selected tab content inside the modal for mobile */}
            <div className="mt-4">
              {activeTab === "Compilation Result" && (
                <div className="flex flex-col gap-4 p-2">
                  <div className="font-semibold text-base mb-2">Result : <span className="font-bold text-black">Wrong Answer</span></div>
                  <div className="bg-gray-100 rounded p-3">
                    <div className="font-medium text-sm">Input :</div>
                    <div className="mb-2 text-sm">Geeks for Geeks</div>
                    <div className="font-medium mt-2 text-sm">Your Output :</div>
                    <div className="mb-2 text-sm">Geeks for Geeks</div>
                    <div className="font-medium mt-2 text-sm">Expected Output :</div>
                    <div className="text-sm">Geeks \n for \n Geeks</div>
                  </div>
                </div>
              )}
              {activeTab === "Custom Input" && (
                <div className="flex flex-col gap-2 h-full justify-start">
                  {customInputs.map((input, idx) => (
                    <div key={idx} className="bg-gray-100 rounded p-3 mb-3">
                      <div className="font-medium text-sm">Input :</div>
                      <div className="text-sm">{input}</div>
                    </div>
                  ))}
                  <textarea
                    className="bg-gray-100 rounded p-3 min-h-[80px] resize-none text-base text-gray-700 mb-6 mt-2"
                    placeholder="Enter Custom Input"
                    style={{ minHeight: 90 }}
                    value={customInputValue}
                    onChange={e => setCustomInputValue(e.target.value)}
                  />
                  <div className="flex justify-end w-full">
                    <button
                      className="border border-red-400 text-red-500 bg-white px-6 py-2 rounded font-semibold shadow-sm hover:bg-red-50 transition-all text-sm"
                      style={{ fontSize: '1.1rem' }}
                      onClick={() => {
                        if (customInputValue.trim()) {
                          setCustomInputs([...customInputs, customInputValue]);
                          setCustomInputValue("");
                        }
                      }}
                    >
                      Add Case +
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="flex-1 overflow-y-auto px-2 md:px-4 pb-0">        {activeTab === "Test Cases" && (
          EXAMPLES.map((ex, idx) => (
            <div key={idx} className="bg-gray-100 rounded p-3 md:p-5 mb-4 mt-2">
              <div className="font-medium text-sm md:text-base">Input :</div>
              <div className="mb-2 text-sm md:text-base">{ex.input}</div>
              <div className="font-medium mt-2 text-sm md:text-base">Output :</div>
              <div className="text-sm md:text-base">{ex.output}</div>
            </div>
          ))
        )}
        {activeTab === "Compilation Result" && (
          <div className="flex flex-col gap-4 p-2 md:p-4">
            <div className="font-semibold text-base md:text-lg mb-2">Result : <span className="font-bold text-black">Wrong Answer</span></div>
            <div className="bg-gray-100 rounded p-3 md:p-5">
              <div className="font-medium text-sm md:text-base">Input :</div>
              <div className="mb-2 text-sm md:text-base">Geeks for Geeks</div>
              <div className="font-medium mt-2 text-sm md:text-base">Your Output :</div>
              <div className="mb-2 text-sm md:text-base">Geeks for Geeks</div>
              <div className="font-medium mt-2 text-sm md:text-base">Expected Output :</div>
              <div className="text-sm md:text-base">Geeks \n for \n Geeks</div>
            </div>
          </div>
        )}
        {activeTab === "Custom Input" && (
          <div className="flex flex-col gap-2 h-full justify-start">
            {customInputs.map((input, idx) => (
              <div key={idx} className="bg-gray-100 rounded p-3 md:p-4 mb-3">
                <div className="font-medium text-sm md:text-base">Input :</div>
                <div className="text-sm md:text-base">{input}</div>
              </div>
            ))}
            <textarea
              className="bg-gray-100 rounded p-3 md:p-4 min-h-[80px] resize-none text-base text-gray-700 mb-6 mt-2"
              placeholder="Enter Custom Input"
              style={{ minHeight: 90 }}
              value={customInputValue}
              onChange={e => setCustomInputValue(e.target.value)}
            />
            <div className="flex justify-end w-full">
              <button
                className="border border-red-400 text-red-500 bg-white px-6 md:px-8 py-2 rounded font-semibold shadow-sm hover:bg-red-50 transition-all text-sm md:text-base"
                style={{ fontSize: '1.1rem' }}
                onClick={() => {
                  if (customInputValue.trim()) {
                    setCustomInputs([...customInputs, customInputValue]);
                    setCustomInputValue("");
                  }
                }}
              >
                Add Case +
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    
  );
};  

export default TestCases;