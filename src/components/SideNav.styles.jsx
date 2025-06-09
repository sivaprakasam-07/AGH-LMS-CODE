import styled from "styled-components";

export const SideBarWrapper = styled.div`
  width: 5rem; /* w-20 */
  height: 100vh;
  background-color: #27272a; /* bg-zinc-800 */
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; /* gap-4 */
  margin-top: 6.5rem; /* mt-26 ≈ 104px */
`;

export const QuestionNumber = styled.div`
  width: 2.5rem; /* w-10 */
  height: 2.5rem; /* h-10 */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  font-weight: ${(props) => (props.active ? "500" : "normal")};
  background-color: ${(props) => (props.active ? "#3f3f46" : "transparent")}; /* bg-zinc-700 */
`;

export const NextButton = styled.div`
  width: 3rem; /* w-12 */
  height: 3rem; /* h-12 */
  border-radius: 9999px;
  background-color: #3f3f46; /* bg-zinc-700 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem; /* mb-8 */
  cursor: pointer;
`;
