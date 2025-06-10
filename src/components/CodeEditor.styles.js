import styled from "styled-components";

export const EditorContainer = styled.div`
  background-color: #18181b;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  min-height: 120px;
  height: auto;
  transition: height 0.1s ease-in-out;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #27272a;
  align-items: center;
`;

export const HeaderTitle = styled.span`
  color: #d4d4d8;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const IconButton = styled.button`
  color: #a1a1aa;
  transition: color 0.2s;

  &:hover {
    color: #e4e4e7;
  }
`;

export const ControlBar = styled.div`
  padding: 0.5rem 1rem;
  background-color: #18181b;
  border-bottom: 1px solid #27272a;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LanguageSelect = styled.select`
  background-color: #27272a;
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.25rem;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const EditorBody = styled.div`
  position: relative;
  flex: 1;
  min-height: 80px;
  max-height: 100%;
  overflow: auto;
  width: 100%;
`;

export const OverlayTextarea = styled.textarea`
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  background-color: transparent;
  color: transparent;
  caret-color: white;
  font-family: monospace;
  padding: 1rem;
  outline: none;
  resize: none;
  z-index: 10;
  font-size: 15px;
`;

export const ActionButtons = styled.div`
  position: sticky; // Changed from absolute to sticky
  bottom: 1rem;
  right: 1rem;
  display: flex;
  gap: 0.5rem;
  z-index: 20;
  float: right; // Added to ensure it aligns to the right within the scroll container
`;

export const RunButton = styled.button`
  background-color: #22c55e;
  color: white;
  padding: 0.5rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  min-width: 44px;
  min-height: 44px;

  &:hover {
    background-color: #16a34a;
  }
`;

export const SubmitButton = styled.button`
  background-color: #22c55e;
  color: white;
  font-weight: 600;
  padding: 0.375rem 1rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #16a34a;
  }

  .submit-label {
    display: none;

    @media (min-width: 768px) {
      display: inline;
    }
  }
`;
