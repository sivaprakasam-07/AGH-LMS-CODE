import styled from "styled-components";

export const DraggerWrapper = styled.div`
  cursor: ew-resize;
  background-color: #d4d4d8; /* zinc-300 */
  transition: background-color 0.2s ease;
  width: 8px;
  height: 100%;
  flex-shrink: 0;
  position: relative;
  z-index: 10;
  min-width: 8px;
  max-width: 8px;

  &:hover {
    background-color: #a1a1aa; /* zinc-400 */
  }
`;

export const DraggerHandle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 4px;
  height: 64px; /* h-16 */
  background-color: #a1a1aa; /* zinc-400 */
  border-radius: 9999px;
`;
