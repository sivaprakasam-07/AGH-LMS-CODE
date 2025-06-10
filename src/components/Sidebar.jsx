import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
        <FontAwesomeIcon icon={faChevronRight} size="lg" />
      </NextButton>
    </SideBarWrapper>
  );
};

export default SideNav;
