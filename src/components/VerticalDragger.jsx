import React, { useRef } from "react";

const VerticalDragger = ({ onDrag }) => {
  const dragRef = useRef(null);
  const dragging = useRef(false);

  const handleMouseDown = (e) => {
    dragging.current = true;
    dragRef.current = e.clientX;
    document.body.style.cursor = "ew-resize";
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    if (!dragging.current) return;
    const diff = e.clientX - dragRef.current;
    dragRef.current = e.clientX;
    onDrag(diff);
  };

  const handleMouseUp = () => {
    dragging.current = false;
    document.body.style.cursor = "";
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div
      className="cursor-ew-resize bg-zinc-300 hover:bg-zinc-400 transition w-2 h-full flex-shrink-0 relative z-10"
      style={{ minWidth: 8, maxWidth: 8 }}
      onMouseDown={handleMouseDown}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-16 bg-zinc-400 rounded-full" />
    </div>
  );
};

export default VerticalDragger;