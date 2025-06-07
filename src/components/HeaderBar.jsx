import { ChevronLeft, ChevronRight, Timer } from "lucide-react";

const HeaderBar = ({ onPrev, onNext }) => {
  return (
    <div className="w-full bg-gray-200 border-b px-6 py-4 flex justify-between items-center text-xl font-medium">
      {/* Prev Button */}
      <div className="flex items-center gap-1 text-gray-800 cursor-pointer" onClick={onPrev}>
        <ChevronLeft size={32} />
        <span>Prev</span>
      </div>

      {/* Timer */}
      <div className="flex items-center gap-1 text-gray-800">
        <Timer size={16} />
        <span>00H : 14M : 13S</span>
      </div>

      {/* Next Button */}
      <div className="flex items-center gap-1 text-gray-800 cursor-pointer" onClick={onNext}>
        <span>Next</span>
        <ChevronRight size={32} />
      </div>
    </div>
  );
};

export default HeaderBar;