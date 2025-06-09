// TestCases.styles.jsx
import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: var(--tw-shadow);
  padding: 0;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const DragBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ns-resize;
  padding: 0.25rem 0;
  border-bottom: 1px solid #e5e7eb;
  background-color: #374151;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const DragHandle = styled.div`
  width: 2rem;
  height: 0.25rem;
  background-color: #9ca3af;
  border-radius: 9999px;
`;

export const TabsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  border-bottom: 1px solid #e5e7eb;
  padding: 0.5rem 1rem;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
  }
`;

export const TabButton = styled.button`
  font-weight: 600;
  padding: 0 0.5rem 0.25rem;
  border-bottom: ${(props) => (props.active ? "2px solid #374151" : "none")};
  color: ${(props) => (props.active ? "#374151" : "#9ca3af")};
  display: ${(props) => (props.hideOnMobile ? "none" : "inline")};

  @media (min-width: 768px) {
    display: inline;
  }
`;

export const TabDivider = styled.span`
  margin: 0 0.5rem;
  color: #374151;
  display: none;

  @media (min-width: 768px) {
    display: inline;
  }
`;

export const MobileExtraTabButton = styled.button`
  width: 2rem;
  height: 2rem;
  background: #f43f5e;
  color: white;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--tw-shadow);
  font-size: 1.25rem;
  margin-left: auto;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 50;
  display: flex;
  align-items: flex-end;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ModalContent = styled.div`
  background: white;
  width: 100%;
  max-height: 90vh;
  min-height: 60vh;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  box-shadow: var(--tw-shadow-lg);
  padding: 1rem;
  overflow-y: auto;
`;

export const ModalTab = styled.button`
  font-weight: 600;
  padding: 0 0.5rem 0.25rem;
  text-align: left;
  color: ${(props) => (props.active ? "#374151" : "#9ca3af")};
  border-bottom: ${(props) => (props.active ? "2px solid #374151" : "none")};
`;

export const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 0 0.5rem 0;

  @media (min-width: 768px) {
    padding: 0 1rem 0;
  }
`;

export const TestCaseBox = styled.div`
  background: #f3f4f6;
  border-radius: 0.5rem;
  padding: 0.75rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    padding: 1.25rem;
  }
`;

export const Label = styled.div`
  font-weight: 500;
  font-size: 0.875rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Text = styled.div`
  font-size: 0.875rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const TextArea = styled.textarea`
  background: #f3f4f6;
  border-radius: 0.5rem;
  padding: 0.75rem;
  font-size: 1rem;
  color: #374151;
  resize: none;
  min-height: 90px;
  margin-bottom: 1.5rem;
`;

export const AddCaseButton = styled.button`
  border: 1px solid #f87171;
  color: #ef4444;
  background: white;
  padding: 0.5rem 1.5rem;
  font-weight: 600;
  border-radius: 0.375rem;
  font-size: 1.1rem;
  box-shadow: var(--tw-shadow-sm);
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #fef2f2;
  }

  @media (min-width: 768px) {
    padding: 0.5rem 2rem;
  }
`;
