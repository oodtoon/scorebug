import { Button } from "@mui/material";
import FootBallButtons from "./AllSports/Football";
import BasketballButtons from "./AllSports/Basketball";
import HockeyButtons from "./AllSports/Hockey";
import BaseballButtons from "./AllSports/Baseball";
import SoccerButtons from "./AllSports/Soccer";
import PoolButtons from "./AllSports/Pool";
import ConstantButtons from "./ConstantButtons";

const ButtonControls = ({
  scorebug,
  handleAddPoints,
  handleReset,
  handlePause,
  playPause,
  handleTotalReset,
  handleNextPeriod,
  handleStrike,
  handleBall,
  handleOut,
  handleNextDown,
  handleFirstDown
}) => {
  console.log(scorebug.sport);

  return (
    <>
      {scorebug.sport === "Football" && (
        <FootBallButtons handleAddPoints={handleAddPoints} handleNextDown={handleNextDown} handleFirstDown={handleFirstDown}/>
      )}
      {scorebug.sport === "Basketball" && (
        <BasketballButtons handleAddPoints={handleAddPoints} />
      )}
      {scorebug.sport === "Hockey" && (
        <HockeyButtons handleAddPoints={handleAddPoints} />
      )}
      {scorebug.sport === "Baseball" && (
        <BaseballButtons
          handleAddPoints={handleAddPoints}
          handleStrike={handleStrike}
          handleBall={handleBall}
          handleOut={handleOut}
        />
      )}
      {scorebug.sport === "Soccer" && (
        <SoccerButtons handleAddPoints={handleAddPoints} />
      )}
      {scorebug.sport === "Pool" && (
        <PoolButtons handleAddPoints={handleAddPoints} />
      )}
      {scorebug.sport === "" && (
        <Button
          variant="contained"
          onClick={handleAddPoints}
          sx={{ mr: "50px" }}
        >
          Goal
        </Button>
      )}

      <ConstantButtons
        scorebug={scorebug}
        playPause={playPause}
        handleReset={handleReset}
        handlePause={handlePause}
        handleTotalReset={handleTotalReset}
        handleNextPeriod={handleNextPeriod}
      />
    </>
  );
};

export default ButtonControls;
