import { ChevronRight } from "lucide-react";

const SideNav = ({ activeQuestion = 1, totalQuestions = 3, onNext }) => {
  return (
    <div className="w-20 h-screen bg-zinc-800 text-white flex flex-col justify-between items-center">
      {/* Question Numbers */}
      <div className="flex flex-col items-center gap-4 mt-26">
        {[...Array(totalQuestions)].map((_, idx) => {
          const q = idx + 1;
          const isActive = q === activeQuestion;
          return (
            <div
              key={q}
              className={`w-10 h-10 flex items-center justify-center rounded ${
                isActive ? "bg-zinc-700 font-medium" : ""
              }`}
            >
              {q}
            </div>
          );
        })}
      </div>

      {/* Bottom Button */}
      <div
        className="w-12 h-12 rounded-full bg-zinc-700 flex items-center justify-center mb-8 cursor-pointer"
        onClick={onNext}
      >
        <ChevronRight size={24} />
      </div>
    </div>
  );
};

export default SideNav;