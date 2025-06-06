import React, { useState } from "react";
import { Play, RotateCcw, Settings, Send } from "lucide-react";

const LANGUAGE_TEMPLATES = {
  Java: `#include <iostream>\nusing namespace std;\n\nvoid printNewLine() {\n    \n}`,
  Python: `def print_new_line():\n    pass`,
  "C++": `#include <iostream>\nusing namespace std;\n\nvoid printNewLine() {\n    \n}`
};

const CodeEditorPanel = ({ code, setCode, language, setLanguage, onRun, onSubmit, editorHeight, showSubmitButton }) => {
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
      <div className="px-4 py-2 border-b border-zinc-800 bg-zinc-900">
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
      {/* Code editor */}
      <textarea
        className="bg-zinc-800 text-gray-100 font-mono rounded-none p-4 flex-1 resize-none outline-none overflow-auto min-h-[80px] max-h-full"
        value={code}
        onChange={e => setCode(e.target.value)}
        spellCheck={false}
        style={{ fontSize: 15 }}
      />
    </div>
  );
};

export default CodeEditorPanel;