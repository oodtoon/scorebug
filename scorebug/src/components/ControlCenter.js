import Scoreboard from "./Scoreboard";
import TeamSelect from "./TeamSelect";
import ButtonControls from "./ButtonControls";
import ScoreForm from "./ScoreForm";
import "../App.css"


const ControlCenter = ({
  scorebug,
  awayScore,
  homeScore,
  playPeriod,
  isPaused,
  outs,
  balls,
  strikes,
  down,
  teamToEdit,
  playPause,
  sport,
  playPeriodType,
  possesion,
  controlsVisible,
  handleChange,
  handleAddPoints,
  handleReset,
  handlePause,
  handleTotalReset,
  handleNextPeriod,
  handleOut,
  handleBall,
  handleStrike,
  handleNextDown,
  handleFirstDown,
  handleSetGame,
  handleAwayTeam,
  handleHomeTeam,
  handlePlayPeriod,
  handlePeriodLength,
  handleSport,
  handleInning,
  handlePeriods,
  handlePossesionChange,
  timeLeft,
  setTimeLeft,
  handlePoolType,
  handleControlsVisible,
  handleAwayColor,
  handleAwayText,
  handleHomeColor,
  handleHomeText
}) => {
  return (
    <>
      <div className="control-container">
        <div className="preview">
          Preview:
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
            controlsVisible={controlsVisible}
            setTimeLeft={setTimeLeft}
            handleControlsVisible={handleControlsVisible}
          />
        </div>
        <div className="container">
          <div className="btn-container">
            <TeamSelect
              teamToEdit={teamToEdit}
              scorebug={scorebug}
              handleChange={handleChange}
            />
            <ButtonControls
              scorebug={scorebug}
              handleAddPoints={handleAddPoints}
              handleReset={handleReset}
              handlePause={handlePause}
              playPause={playPause}
              handleTotalReset={handleTotalReset}
              handleNextPeriod={handleNextPeriod}
              handleOut={handleOut}
              handleBall={handleBall}
              handleStrike={handleStrike}
              handleNextDown={handleNextDown}
              handleFirstDown={handleFirstDown}
              handlePossesionChange={handlePossesionChange}
              sport={sport}
              possesion={possesion}
            />
          </div>
          <ScoreForm
            playPeriodType={playPeriodType}
            sport={sport}
            handleSetGame={handleSetGame}
            handleAwayTeam={handleAwayTeam}
            handleHomeTeam={handleHomeTeam}
            handlePlayPeriod={handlePlayPeriod}
            handlePeriodLength={handlePeriodLength}
            handleSport={handleSport}
            handleInning={handleInning}
            handlePeriods={handlePeriods}
            handlePoolType={handlePoolType}
            handleAwayColor={handleAwayColor}
            handleAwayText={handleAwayText}
            handleHomeColor={handleHomeColor}
            handleHomeText={handleHomeText}
          />
        </div>
      </div>
    </>
  );
};

export default ControlCenter;
