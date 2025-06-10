import HeaderBar from "./components/HeaderBar";
import SideNav from "./components/Sidebar";
import QuestionPanel from "./components/QuestionPanel";
import CodeEditorPanel from "./components/CodeEditorPanel";
import TestCases from "./components/TestCases";
import VerticalDragger from "./components/VerticalDragger";
import React, { useState } from "react";
import { Toaster, toast } from 'react-hot-toast';

const LANGUAGE_TEMPLATES = {
  Java: `#include <iostream>\nusing namespace std;\n\nvoid printNewLine() {\n    \n}`,
  Python: `def print_new_line():\n    pass`,
  "C++": `#include <iostream>\nusing namespace std;\n\nvoid printNewLine() {\n    \n}`
};

const TOTAL_QUESTIONS = 3;
const MIN_TEST_CASE_HEIGHT = 120;
const MIN_EDITOR_HEIGHT = 120;
const MIN_QUESTION_PANEL_WIDTH = 320; // Minimum width for question panel
const MIN_CODE_PANEL_WIDTH = 350; // Minimum width for code editor panel

const App = () => {
  const [code, setCode] = useState(LANGUAGE_TEMPLATES["Java"]);
  const [language, setLanguage] = useState("Java");
  const [testCaseHeight, setTestCaseHeight] = useState(260);
  const [activeQuestion, setActiveQuestion] = useState(1);
  const [containerHeight, setContainerHeight] = useState(window.innerHeight - 120); // 120px header/spacing approx
  const [questionPanelWidth, setQuestionPanelWidth] = useState(450); // default width for question panel

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

  // Vertical dragger for resizing question panel
  const handleVerticalDrag = (diff) => {
    setQuestionPanelWidth((w) => {
      const newWidth = Math.max(MIN_QUESTION_PANEL_WIDTH, w + diff);
      const maxWidth = window.innerWidth - MIN_CODE_PANEL_WIDTH - 100; // 100px buffer for right panel
      return Math.min(newWidth, maxWidth);
    });
  };

  const handleRun = () => {
    // Placeholder for run logic
    toast.success('Code Running', { position: 'top-right' });
  };

  const handleSubmit = () => {
    toast.success('Code submitted successfully!', { position: 'top-right' });
    // Placeholder for submit logic
    // alert("Submit code!\\n\\n" + code);
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
    <div className="flex min-h-screen h-screen max-h-screen overflow-hidden relative flex-col md:flex-row">
      {/* Sidebar: hidden on mobile */}
      <div className="hidden md:block">
        <SideNav activeQuestion={activeQuestion} totalQuestions={TOTAL_QUESTIONS} onNext={goToNext} />
      </div>
      <div className="flex-1 flex flex-col bg-gray-50 w-full h-full max-h-screen overflow-hidden">
        <HeaderBar onPrev={goToPrev} onNext={goToNext} />
        <div className="flex flex-1 overflow-hidden p-0 md:p-4 gap-0 md:gap-4 pb-20 flex-col md:flex-row">
          <div className="flex-1 flex gap-0 h-full overflow-y-auto flex-col md:flex-row">
            {/* Left: Scrollable QuestionPanel with resizable width */}
            <div style={{ width: questionPanelWidth, minWidth: MIN_QUESTION_PANEL_WIDTH, maxWidth: '100%' }} className="h-full flex flex-col w-full md:w-auto">
              <div className="flex-1 overflow-y-auto">
                <QuestionPanel />
              </div>
            </div>
            {/* Vertical dragger between panels: hidden on mobile */}
            <div className="hidden md:block">
              <VerticalDragger onDrag={handleVerticalDrag} />
            </div>
            {/* Right: Code Editor and Test Cases stacked */}
            <div style={{ minWidth: MIN_CODE_PANEL_WIDTH, flex: 1 }} className="flex flex-col h-full w-full md:w-auto">
              <CodeEditorPanel
                code={code}
                setCode={setCode}
                language={language}
                setLanguage={handleLanguageChange}
                onRun={handleRun}
                onSubmit={handleSubmit}
                editorHeight={editorHeight}
                showSubmitButton={false} // Hide submit button in editor
              />
              <div className="flex flex-col" style={{ height: testCaseHeight }}>
                <TestCases height={testCaseHeight} onDrag={handleTestCaseDrag} />
              </div>
            </div>
          </div>
        </div>
        {/* Submit/Review Buttons Footer */}
        <div className="w-full bg-white border-t border-gray-200 flex justify-between gap-2 px-4 py-2 fixed md:static left-0 bottom-0 z-50">
          <button
            className="flex-1 md:flex-none md:max-w-xs bg-red-500 text-white px-5 py-2 rounded-none md:rounded font-semibold shadow-lg order-1"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="flex-1 md:flex-none md:max-w-xs bg-pink-100 text-rose-500 border border-rose-400 px-5 py-2 rounded-none md:rounded font-semibold shadow-lg order-2 md:ml-auto"
            onClick={() => toast.success('Marked for review!', { position: 'top-right' })}
          >
            Mark for Review
          </button>
        </div>
        <Toaster />
      </div>
    </div>
  );
};

export default App;