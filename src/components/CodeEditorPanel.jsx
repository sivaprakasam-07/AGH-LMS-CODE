import React, { useState } from "react";
import { Play, RotateCcw, Settings } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const LANGUAGE_TEMPLATES = {
  Java: `#include <iostream>\nusing namespace std;\n\nvoid printNewLine() {\n    \n}`,
  Python: `def print_new_line():\n    pass`,
  "C++": `#include <iostream>\nusing namespace std;\n\nvoid printNewLine() {\n    \n}`
};

const CodeEditorPanel = ({ code, setCode, language, setLanguage, onRun, onSubmit, editorHeight, showSubmitButton }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempCode, setTempCode] = useState(code);

  React.useEffect(() => {
    setTempCode(code);
  }, [code]);

  const handleEditorClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    setCode(tempCode);
  };

  const handleChange = (e) => {
    setTempCode(e.target.value);
  };

  const handleReset = () => {
    setCode(LANGUAGE_TEMPLATES[language]);
    setTempCode(LANGUAGE_TEMPLATES[language]);
  };

  return (
    <div
      className="bg-zinc-900 rounded-lg shadow p-0 flex flex-col min-h-[120px] overflow-hidden w-full h-72 md:h-auto md:flex-1"
      style={{ height: editorHeight || 'auto', transition: 'height 0.1s' }}
    >
      {/* Header row: Code logo, Reset, Settings */}
      <div className="flex items-center justify-between px-3 md:px-4 py-2 border-b border-zinc-800">
        <span className="text-gray-300 font-semibold flex items-center gap-2 text-base md:text-lg">&lt;/&gt; Code</span>
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-gray-200" title="Reset" onClick={handleReset}>
            <RotateCcw size={18} />
          </button>
          <button className="text-gray-400 hover:text-gray-200" title="Settings">
            <Settings size={18} />
          </button>
        </div>
      </div>
      {/* Language selector and buttons below header */}
      <div className="px-3 md:px-4 py-2 border-b border-zinc-800 bg-zinc-900 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
        <select
          className="bg-zinc-800 text-white rounded px-2 py-1 text-sm w-full md:w-auto"
          value={language}
          onChange={e => setLanguage(e.target.value)}
        >
          {Object.keys(LANGUAGE_TEMPLATES).map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
        <div className="flex gap-2 mt-2 md:mt-0 w-full md:w-auto">
          <button
            className="bg-green-500 hover:bg-green-600 text-white rounded px-3 py-1 flex items-center gap-1 text-sm font-semibold shadow w-1/2 md:w-auto justify-center"
            onClick={onRun}
            title="Run Code"
          >
            <FontAwesomeIcon icon={faPlay} />
            <span className="hidden md:inline">Run</span>
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white rounded px-3 py-1 flex items-center gap-1 text-sm font-semibold shadow w-1/2 md:w-auto justify-center"
            onClick={onSubmit}
            title="Submit Code"
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            <span className="hidden md:inline">Submit</span>
          </button>
        </div>
      </div>
      {/* Code editor with syntax highlighting always visible */}
      <div className="relative flex-1 min-h-[80px] max-h-full overflow-auto w-full" onClick={handleEditorClick}>
        <SyntaxHighlighter
          language={language.toLowerCase() === 'c++' ? 'cpp' : language.toLowerCase()}
          style={vscDarkPlus}
          customStyle={{ margin: 0, padding: 16, minHeight: '80px', fontSize: 15, background: 'transparent', width: '100%' }}
        >
          {isEditing ? tempCode : code}
        </SyntaxHighlighter>
        {isEditing && (
          <textarea
            className="absolute inset-0 w-full h-full bg-transparent text-transparent caret-white font-mono p-4 outline-none resize-none z-10"
            value={tempCode}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
            spellCheck={false}
            style={{ fontSize: 15 }}
          />
        )}
      </div>
    </div>
  );
};

export default CodeEditorPanel;