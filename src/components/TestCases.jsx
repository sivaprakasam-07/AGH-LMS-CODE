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
    <div className="bg-white rounded-lg shadow p-0 mt-2 flex flex-col relative h-full" style={{ height }}>
      <div
        className="flex items-center justify-center cursor-ns-resize py-1 border-b bg-gray-700 rounded-t-lg"
        onMouseDown={handleMouseDown}
      >
        <div className="w-8 h-1 bg-gray-400 rounded-full" />
      </div>
      <div className="flex gap-0 border-b px-4 py-2 items-center">
        <button
          className={`font-semibold px-2 pb-1 ${activeTab === "Test Cases" ? "text-gray-700 border-b-2 border-gray-700" : "text-gray-400"}`}
          onClick={() => setActiveTab("Test Cases")}
        >
          Test Cases
        </button>
        <span className="mx-2 text-gray-700">|</span>
        <button
          className={`font-semibold px-2 pb-1 ${activeTab === "Compilation Result" ? "text-gray-700 border-b-2 border-gray-700" : "text-gray-400"}`}
          onClick={() => setActiveTab("Compilation Result")}
        >
          Compilation Result
        </button>
        <span className="mx-2 text-gray-700">|</span>
        <button
          className={`font-semibold px-2 pb-1 ${activeTab === "Custom Input" ? "text-gray-700 border-b-2 border-gray-700" : "text-gray-400"}`}
          onClick={() => setActiveTab("Custom Input")}
        >
          Custom Input
        </button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 pb-0">
        {activeTab === "Test Cases" && (
          EXAMPLES.map((ex, idx) => (
            <div key={idx} className="bg-gray-100 rounded p-3 mb-3">
              <div className="font-medium">Input :</div>
              <div>{ex.input}</div>
              <div className="font-medium mt-2">Output :</div>
              <div>{ex.output}</div>
              <div className="font-medium mt-2">Explanation :</div>
              <div>{ex.explanation}</div>
            </div>
          ))
        )}
        {activeTab === "Compilation Result" && (
          <div className="text-gray-500 flex items-center justify-center h-full">No compilation result yet.</div>
        )}
        {activeTab === "Custom Input" && (
          <div className="flex flex-col gap-2">
            <label className="font-medium">Custom Input:</label>
            <textarea className="bg-gray-100 rounded p-2 min-h-[80px] resize-none" placeholder="Enter your custom input here..." />
            <button className="self-end bg-emerald-500 text-white px-4 py-1 rounded font-semibold mt-2">Run</button>
          </div>
        )}
      </div>
    </div>
    
  );
};  

export default TestCases;