import Scoreboard from "../Scoreboard";
import { Link } from "react-router-dom";
import "../../App.css";

const DisplayScoreboard = ({
  scorebug,
  awayScore,
  homeScore,
  playPeriod,
  isPaused,
  outs,
  strikes,
  balls,
  down,
  possesion,
  timeLeft,
  controlsVisible,
  setTimeLeft,
  handleControlsVisible,
}) => {
  return (
    <div>
      {controlsVisible === false && (
        <Link to="/" onClick={handleControlsVisible}>
          Controls
        </Link>
      )}
      <div className="display-scoreboard">
        <Scoreboard
          scorebug={scorebug}
          awayScore={awayScore}
          homeScore={homeScore}
          playPeriod={playPeriod}
          isPaused={isPaused}
          outs={outs}
          balls={balls}
          strikes={strikes}
          down={down}
          possesion={possesion}
          timeLeft={timeLeft}
          setTimeLeft={setTimeLeft}
          controlsVisible={controlsVisible}
          handleControlsVisible={handleControlsVisible}
        />
      </div>
    </div>
  );
};

export default DisplayScoreboard;
