import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #e5e7eb; /* gray-200 */
  border-bottom: 1px solid #d1d5db; /* border-b gray-300 */
  padding: 1rem 1.5rem; /* px-6 py-4 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem; /* text-xl */
  font-weight: 500; /* font-medium */
  color: #1f2937; /* text-gray-800 */
`;

export const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem; /* gap-1 */
  cursor: pointer;
  user-select: none;
`;

export const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem; /* gap-1 */
  color: #1f2937; /* text-gray-800 */
  user-select: none;
`;
