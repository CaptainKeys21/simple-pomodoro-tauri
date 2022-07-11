import BottomButtons from '../BottomButtons';
import Timer from '../Timer';
import UpperButtons from '../UpperButtons';
import { MainContainer } from './styled';

const PomodoroWindow = () => {
  return (
    <MainContainer>
      <UpperButtons />
      <Timer />
      <BottomButtons />
    </MainContainer>
  );
};

export default PomodoroWindow;
