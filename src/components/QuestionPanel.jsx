import React from "react";
import {
  Wrapper,
  Container,
  Title,
  Description,
  ExampleBlock,
  ExampleTitle,
  ExampleCard,
  SubTitle,
  OutputText,
} from "./QuestionPanel.styles";

const QuestionPanel = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Newline Output</Title>
        <Description>
          You’re already comfortable with producing output to the console. In this task, your job is to print three specific words — Aptitude, Guru, and Hem — each on a new line. Sounds simple, right? But make sure each word appears on a separate line exactly in the given order
        </Description>

        <ExampleBlock>
          <ExampleTitle>Example 1:</ExampleTitle>
          <ExampleCard>
            <SubTitle>Input :</SubTitle>
            <OutputText>Geeks for Geeks</OutputText>
            <SubTitle>Output :</SubTitle>
            <OutputText>Geeks \n for \n Geeks</OutputText>
            <SubTitle>Explanation :</SubTitle>
            <OutputText>First word of the statment is in first line, next word is in next line, and last is in last line.</OutputText>
          </ExampleCard>
        </ExampleBlock>

        <ExampleBlock>
          <ExampleTitle>Example 2:</ExampleTitle>
          <ExampleCard>
            <SubTitle>Input :</SubTitle>
            <OutputText>Geeks for Geeks</OutputText>
            <SubTitle>Output :</SubTitle>
            <OutputText>Geeks \n for \n Geeks</OutputText>
            <SubTitle>Explanation :</SubTitle>
            <OutputText>Geeks \n for \n Geeks</OutputText>
          </ExampleCard>
        </ExampleBlock>
      </Container>
    </Wrapper>
  );
};

export default QuestionPanel;
