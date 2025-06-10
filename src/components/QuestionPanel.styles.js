import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const Container = styled.div`
  flex: 1;
  width: 100%;
  max-width: 36rem; /* md:max-w-xl ≈ 576px */
  background-color: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 0.75rem; /* p-3 */
  border: 1px solid #e5e7eb; /* light gray border */
  overflow-y: auto;

  @media (min-width: 768px) {
    padding: 1.5rem; /* md:p-6 */
  }
`;

export const Title = styled.h2`
  font-size: 1.25rem; /* text-xl */
  font-weight: 700;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.5rem; /* md:text-2xl */
  }
`;

export const Description = styled.p`
  margin-bottom: 1rem;
  color: #374151; /* text-gray-700 */
  font-size: 0.875rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const ExampleBlock = styled.div`
  margin-bottom: 1rem;
`;

export const ExampleTitle = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const ExampleCard = styled.div`
  background-color: #f3f4f6; /* bg-gray-100 */
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
`;

export const SubTitle = styled.div`
  font-weight: 500;
  margin-top: 0.5rem;
`;

export const OutputText = styled.div``;
