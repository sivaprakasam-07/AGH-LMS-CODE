import React, { useRef } from "react";
import { DraggerWrapper, DraggerHandle } from "./VerticalDragger.styles.js";

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
    <DraggerWrapper onMouseDown={handleMouseDown}>
      <DraggerHandle />
    </DraggerWrapper>
  );
};

export default VerticalDragger;


