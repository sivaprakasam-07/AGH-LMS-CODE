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

  return (
    <div
      className="bg-zinc-900 rounded-lg shadow p-0 flex flex-col min-h-[120px] overflow-hidden flex-1"
      style={{ height: editorHeight || 'auto', transition: 'height 0.1s' }}
    >
      {/* Header row: Code logo, Reset, Settings */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800">
        <span className="text-gray-300 font-semibold flex items-center gap-2">&lt;/&gt; Code</span>
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-gray-200" title="Reset">
            <RotateCcw size={18} />
          </button>
          <button className="text-gray-400 hover:text-gray-200" title="Settings">
            <Settings size={18} />
          </button>
        </div>
      </div>
      {/* Language selector below header */}
      <div className="px-4 py-2 border-b border-zinc-800 bg-zinc-900 flex items-center justify-between">
        <select
          className="bg-zinc-800 text-white rounded px-2 py-1 text-sm"
          value={language}
          onChange={e => setLanguage(e.target.value)}
        >
          {Object.keys(LANGUAGE_TEMPLATES).map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
        
      </div>
      {/* Code editor with syntax highlighting */}
      <div
        className="relative flex-1 min-h-[80px] max-h-full overflow-auto"
        onClick={handleEditorClick}
        style={{ cursor: isEditing ? 'text' : 'pointer' }}
      >
        {isEditing ? (
          <textarea
            className="bg-zinc-800 text-gray-100 font-mono rounded-none p-4 w-full h-full min-h-[80px] max-h-full resize-none outline-none absolute inset-0 z-10"
            value={tempCode}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
            spellCheck={false}
            style={{ fontSize: 15 }}
          />
        ) : (
          <SyntaxHighlighter
            language={language.toLowerCase() === 'c++' ? 'cpp' : language.toLowerCase()}
            style={vscDarkPlus}
            customStyle={{ margin: 0, padding: 16, minHeight: '80px', fontSize: 15, background: 'transparent' }}
          >
            {tempCode}
          </SyntaxHighlighter>
        )}
      </div>
      <div className="flex flex-row justify-end gap-3 mr-4 mb-3">
          <button
            className="bg-green-500 hover:bg-green-600 text-white rounded px-3 py-1 flex items-center gap-1 text-sm font-semibold shadow"
            onClick={onRun}
            title="Run Code"
          >
            <FontAwesomeIcon icon={faPlay} />
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white rounded px-3 py-1 flex items-center gap-1 text-sm font-semibold shadow"
            onClick={onSubmit}
            title="Submit Code"
          >
            {/* <FontAwesomeIcon icon={faPaperPlane} /> */}
            Submit
          </button>
        </div>
    </div>
  );
};

export default CodeEditorPanel;