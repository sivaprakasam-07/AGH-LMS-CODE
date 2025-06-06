import React from 'react';

const QuestionPanel = () => {
  return (
    <div className="flex-1 max-w-xl bg-white rounded-lg shadow p-6 border overflow-y-auto h-full">
      <h2 className="text-2xl font-bold mb-2">Newline Output</h2>
      <p className="mb-4 text-gray-700">
        You’re already comfortable with producing output to the console. In this task, your job is to print three specific words — Aptitude, Guru, and Hem — each on a new line. Sounds simple, right? But make sure each word appears on a separate line exactly in the given order
      </p>
      <div className="mb-4">
        <div className="font-semibold mb-1">Example 1:</div>
        <div className="bg-gray-100 rounded p-3 mb-2">
          <div className="font-medium">Input :</div>
          <div>Geeks for Geeks</div>
          <div className="font-medium mt-2">Output :</div>
          <div>Geeks \n for \n Geeks</div>
          <div className="font-medium mt-2">Explanation :</div>
          <div>First word of the statment is in first line, next word is in next line, and last is in last line.</div>
        </div>
      </div>
      <div>
        <div className="font-semibold mb-1">Example 2:</div>
        <div className="bg-gray-100 rounded p-3 mb-2">
          <div className="font-medium">Input :</div>
          <div>Geeks for Geeks</div>
          <div className="font-medium mt-2">Output :</div>
          <div>Geeks \n for \n Geeks</div>
          <div className="font-medium mt-2">Explanation :</div>
          <div>Geeks \n for \n Geeks</div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPanel;