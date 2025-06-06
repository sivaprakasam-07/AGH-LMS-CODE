import HeaderBar from "./components/HeaderBar";
import SideNav from "./components/Sidebar";
import QuestionPanel from "./components/QuestionPanel";
import CodeEditorPanel from "./components/CodeEditorPanel";
import TestCases from "./components/TestCases";

const App = () => {
  return (
    <div className="flex min-h-screen">
      <SideNav activeQuestion={1} totalQuestions={3} />
      <div className="flex-1 flex flex-col bg-gray-50">
        <HeaderBar />
        <div className="flex flex-1 overflow-hidden p-4 gap-4">
          {/* Left: Scrollable QuestionPanel */}
          <div className="flex-1 min-w-[350px] max-w-xl h-full overflow-y-auto">
            <QuestionPanel />
          </div>
          {/* Right: Code Editor and Test Cases stacked */}
          <div className="flex-1 flex flex-col h-full min-w-[350px]">
            <CodeEditorPanel />
            <TestCases />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
