import { ChevronRight } from "lucide-react";
import {
  SideBarWrapper,
  QuestionsContainer,
  QuestionNumber,
  NextButton,
} from "./SideNav.styles";

const SideNav = ({ activeQuestion = 1, totalQuestions = 3, onNext }) => {
  return (
    <SideBarWrapper>
      {/* Question Numbers */}
      <QuestionsContainer>
        {[...Array(totalQuestions)].map((_, idx) => {
          const q = idx + 1;
          const isActive = q === activeQuestion;
          return (
            <QuestionNumber key={q} active={isActive}>
              {q}
            </QuestionNumber>
          );
        })}
      </QuestionsContainer>

      {/* Bottom Button */}
      <NextButton onClick={onNext}>
        <ChevronRight size={24} />
      </NextButton>
    </SideBarWrapper>
  );
};

export default SideNav;
