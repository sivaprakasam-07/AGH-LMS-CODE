import React from 'react';

const TestCases = () => {
  return (
    <div className="bg-white rounded-lg shadow p-4 mt-4">
      <div className="flex gap-4 border-b mb-2">
        <button className="font-semibold text-gray-700 border-b-2 border-gray-700 pb-1">Test Cases</button>
        <button className="text-gray-400">Compilation Result</button>
        <button className="text-gray-400">Custom Input</button>
      </div>
      <div className="bg-gray-100 rounded p-3">
        <div className="font-medium">Input :</div>
        <div>Geeks for Geeks</div>
        <div className="font-medium mt-2">Output :</div>
        <div>Geeks \n for \n Geeks</div>
      </div>
    </div>
  );
};

export default TestCases;