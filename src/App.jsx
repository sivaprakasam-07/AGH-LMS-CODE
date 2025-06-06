import HeaderBar from "./components/HeaderBar";
import SideNav from "./components/Sidebar";
import QuestionPanel from "./components/QuestionPanel";
import CodeEditorPanel from "./components/CodeEditorPanel";
import TestCases from "./components/TestCases";
import React, { useState } from "react";

const LANGUAGE_TEMPLATES = {
  Java: `#include <iostream>\nusing namespace std;\n\nvoid printNewLine() {\n    \n}`,
  Python: `def print_new_line():\n    pass`,
  "C++": `#include <iostream>\nusing namespace std;\n\nvoid printNewLine() {\n    \n}`
};

const TOTAL_QUESTIONS = 3;
const MIN_TEST_CASE_HEIGHT = 120;
const MIN_EDITOR_HEIGHT = 120;

const App = () => {
  const [code, setCode] = useState(LANGUAGE_TEMPLATES["Java"]);
  const [language, setLanguage] = useState("Java");
  const [testCaseHeight, setTestCaseHeight] = useState(260);
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [containerHeight, setContainerHeight] = useState(window.innerHeight - 120); // 120px header/spacing approx

  React.useEffect(() => {
    const handleResize = () => {
      setContainerHeight(window.innerHeight - 120);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update code template when language changes
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setCode(LANGUAGE_TEMPLATES[lang]);
  };

  // Drag handler for resizing test case area
  const handleTestCaseDrag = (diff) => {
    setTestCaseHeight((h) => {
      const newHeight = Math.max(MIN_TEST_CASE_HEIGHT, h - diff);
      return Math.min(newHeight, containerHeight - MIN_EDITOR_HEIGHT);
    });
  };

  const handleRun = () => {
    // Placeholder for run logic
    alert("Run code!\n\n" + code);
  };

  // Question navigation handlers
  const goToPrev = () => {
    setActiveQuestion((prev) => (prev > 1 ? prev - 1 : prev));
  };
  const goToNext = () => {
    setActiveQuestion((prev) => (prev < TOTAL_QUESTIONS ? prev + 1 : prev));
  };

  // Calculate editor height based on container and test case height
  const editorHeight = containerHeight - testCaseHeight;

  return (
    <div className="flex min-h-screen">
      <SideNav activeQuestion={activeQuestion} totalQuestions={TOTAL_QUESTIONS} onNext={goToNext} />
      <div className="flex-1 flex flex-col bg-gray-50">
        <HeaderBar onPrev={goToPrev} onNext={goToNext} />
        <div className="flex flex-1 overflow-hidden p-4 gap-4">
          {/* Left: Scrollable QuestionPanel */}
          <div className="flex-1 min-w-[350px] max-w-xl h-full overflow-y-auto">
            <QuestionPanel />
          </div>
          {/* Right: Code Editor and Test Cases stacked */}
          <div className="flex-1 flex flex-col h-full min-w-[350px]">
            <CodeEditorPanel
              code={code}
              setCode={setCode}
              language={language}
              setLanguage={handleLanguageChange}
              onRun={handleRun}
              editorHeight={editorHeight}
            />
            <TestCases height={testCaseHeight} onDrag={handleTestCaseDrag} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
