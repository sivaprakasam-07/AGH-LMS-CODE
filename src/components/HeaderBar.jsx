import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { Container, Button, TimerWrapper } from "./HeaderBar.styles.js";

const HeaderBar = ({ onPrev, onNext }) => {
  return (
    <Container>
      {/* Prev Button */}
      <Button onClick={onPrev}>
        <FontAwesomeIcon icon={faChevronLeft} size="xl" />
        <span>Prev</span>
      </Button>

      {/* Timer */}
      <TimerWrapper>
        <FontAwesomeIcon icon={faClock} />
        <span>00H : 14M : 13S</span>
      </TimerWrapper>

      {/* Next Button */}
      <Button onClick={onNext}>
        <span>Next</span>
        <FontAwesomeIcon icon={faChevronRight} size="xl" />
      </Button>
    </Container>
  );
};

export default HeaderBar;
