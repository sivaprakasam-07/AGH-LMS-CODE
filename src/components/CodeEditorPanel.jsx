import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft, faCog, faPlay, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  EditorContainer,
  Header,
  HeaderTitle,
  ButtonGroup,
  IconButton,
  ControlBar,
  LanguageSelect,
  EditorBody,
  OverlayTextarea,
  ActionButtons,
  RunButton,
  SubmitButton,
} from "./CodeEditor.styles";

const LANGUAGE_TEMPLATES = {
  Java: `#include <iostream>\nusing namespace std;\n\nvoid printNewLine() {\n    \n}`,
  Python: `def print_new_line():\n    pass`,
  "C++": `#include <iostream>\nusing namespace std;\n\nvoid printNewLine() {\n    \n}`,
};

const CodeEditorPanel = ({
  code,
  setCode,
  language,
  setLanguage,
  onRun,
  onSubmit,
  editorHeight,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempCode, setTempCode] = useState(code);

  useEffect(() => {
    setTempCode(code);
  }, [code]);

  const handleEditorClick = () => setIsEditing(true);
  const handleBlur = () => {
    setIsEditing(false);
    setCode(tempCode);
  };
  const handleChange = (e) => setTempCode(e.target.value);
  const handleReset = () => {
    setCode(LANGUAGE_TEMPLATES[language]);
    setTempCode(LANGUAGE_TEMPLATES[language]);
  };

  return (
    <EditorContainer style={{ height: editorHeight || "auto" }}>
      <Header>
        <HeaderTitle>&lt;/&gt; Code</HeaderTitle>
        <ButtonGroup>
          <IconButton onClick={handleReset} title="Reset">
            <FontAwesomeIcon icon={faRotateLeft} size="lg" />
          </IconButton>
          <IconButton title="Settings">
            <FontAwesomeIcon icon={faCog} size="lg" />
          </IconButton>
        </ButtonGroup>
      </Header>

      <ControlBar>
        <LanguageSelect
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          {Object.keys(LANGUAGE_TEMPLATES).map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </LanguageSelect>
      </ControlBar>

      <EditorBody onClick={handleEditorClick}>
        <SyntaxHighlighter
          language={
            language.toLowerCase() === "c++" ? "cpp" : language.toLowerCase()
          }
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: 16,
            minHeight: "80px",
            fontSize: 15,
            background: "transparent",
            width: "100%",
          }}
        >
          {isEditing ? tempCode : code}
        </SyntaxHighlighter>

        {isEditing && (
          <OverlayTextarea
            value={tempCode}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
            spellCheck={false}
          />
        )}
        <ActionButtons>
          <RunButton onClick={onRun} title="Run Code">
            <FontAwesomeIcon icon={faPlay} size="lg" />
          </RunButton>
          <SubmitButton onClick={onSubmit} title="Submit Code">
            <FontAwesomeIcon icon={faPaperPlane} />
            <span className="submit-label">Submit</span>
          </SubmitButton>
        </ActionButtons>
      </EditorBody>
    </EditorContainer>
  );
};

export default CodeEditorPanel;
