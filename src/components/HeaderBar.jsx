import { ChevronLeft, ChevronRight, Timer } from "lucide-react";
import { Container, Button, TimerWrapper } from "./HeaderBar.styles";

const HeaderBar = ({ onPrev, onNext }) => {
  return (
    <Container>
      {/* Prev Button */}
      <Button onClick={onPrev}>
        <ChevronLeft size={32} />
        <span>Prev</span>
      </Button>

      {/* Timer */}
      <TimerWrapper>
        <Timer size={16} />
        <span>00H : 14M : 13S</span>
      </TimerWrapper>

      {/* Next Button */}
      <Button onClick={onNext}>
        <span>Next</span>
        <ChevronRight size={32} />
      </Button>
    </Container>
  );
};

export default HeaderBar;
