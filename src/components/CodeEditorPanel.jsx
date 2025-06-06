import React from 'react';

const CodeEditorPanel = () => {
  return (
    <div className="bg-zinc-900 rounded-lg shadow p-4 flex-1 min-h-[300px] flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-300 font-semibold">&lt;/&gt; Code</span>
        <select className="bg-zinc-800 text-white rounded px-2 py-1 text-sm">
          <option>Java</option>
          <option>Python</option>
          <option>C++</option>
        </select>
      </div>
      <pre className="bg-zinc-800 text-gray-100 rounded p-3 min-h-[180px] overflow-x-auto flex-1">
        <code>{`#include <iostream>\nusing namespace std;\n\nvoid printNewLine() {\n    \n}`}</code>
      </pre>
      <div className="flex justify-end mt-2">
        <button className="bg-emerald-500 text-white px-6 py-2 rounded font-semibold flex items-center gap-2">
          <span>Submit</span>
        </button>
      </div>
    </div>
  );
};

export default CodeEditorPanel;