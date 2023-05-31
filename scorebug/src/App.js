import { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard";
import TeamSelect from "./components/TeamSelect";
import ButtonControls from "./components/ButtonControls";
import ScoreForm from "./components/ScoreForm";
import "./App.css";

function App() {
  let scoreboardInfo = {
    homeTeam: "Home Team",
    awayTeam: "Away Team",
    playPeriodType: "Quarter",
    sport: "",
    periodLength: 0,
  };

  const [scorebug, setScorebug] = useState(scoreboardInfo);

  const [awayScore, setAwayScore] = useState(0);
  const [homeScore, setHomeScore] = useState(0);

  const [homeTeam, setHomeTeam] = useState("Home Team");
  const [awayTeam, setAwayTeam] = useState("Away Team");

  const [teamToEdit, setTeamToEdit] = useState("Home Team");

  const [sport, setSport] = useState("");

  const [playPeriodType, setPlayPeriodType] = useState("");

  const period = 1;

  const [playPeriod, setPlayPeriod] = useState(period);

  const [periodLength, setPeriodLength] = useState(0);

  const [isPaused, setIsPaused] = useState(true);

  const [outs, setOuts] = useState(0);
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const [down, setDown] = useState(1)

  const handleHomeTeam = (event) => {
    setHomeTeam(event.target.value);
  };

  const handleAwayTeam = (event) => {
    setAwayTeam(event.target.value);
  };

  const handleAddPoints = (event) => {
    let pointsToAdd = Number(event.target.value);
    if (teamToEdit === "Home Team") {
      setHomeScore((prevScore) => prevScore + pointsToAdd);
    } else {
      setAwayScore((prevScore) => prevScore + pointsToAdd);
    }
  };

  const handleReset = () => {
    console.log(teamToEdit);
    if (teamToEdit === "Home Team") {
      setHomeScore(0);
    } else {
      setAwayScore(0);
    }
  };

  const handleChange = (event) => {
    setTeamToEdit(event.target.value);
  };

  const handlePeriodLength = (event) => {
    setPeriodLength(+event.target.value);
  };

  const handleSetGame = (event) => {
    event.preventDefault();
    setScorebug({
      ...scorebug,
      homeTeam: homeTeam,
      awayTeam: awayTeam,
      playPeriodType: playPeriodType || "Quarter",
      sport: sport,
      periodLength: periodLength,
    });
    setPlayPeriod(1);
    setAwayScore(0);
    setHomeScore(0);
  };

  const handlePlayPeriod = (event) => {
    setPlayPeriodType(event.target.value);
  };

  const handleNextPeriod = () => {
    if (playPeriodType === "Quarter") {
      if (playPeriod + 1 <= 4) {
        setPlayPeriod((prevPeriod) => prevPeriod + 1);
      } else {
        setPlayPeriod((prevPeriod) => prevPeriod - 3);
      }
    } else if (playPeriodType === "Half") {
      if (playPeriod + 1 <= 2) {
        setPlayPeriod((prevPeriod) => prevPeriod + 1);
      } else {
        setPlayPeriod((prevPeriod) => prevPeriod - 1);
      }
    } else if (playPeriodType === "Period") {
      if (playPeriod + 1 <= 3) {
        setPlayPeriod((prevPeriod) => prevPeriod + 1);
      } else {
        setPlayPeriod((prevPeriod) => prevPeriod - 2);
      }
    } else if (playPeriodType === "Inning") {
      if (playPeriod + 1 <= 9) {
        setPlayPeriod((prevPeriod) => prevPeriod + 1);
      } else {
        setPlayPeriod((prevPeriod) => prevPeriod - 8);
      }
    }
  };

  const handleTotalReset = () => {
    setScorebug(scoreboardInfo);
    setHomeScore(0);
    setAwayScore(0);
  };

  const handleSport = (event) => {
    setSport(event.target.value);
    if (event.target.value === "Baseball") {
      setPlayPeriodType("Inning");
    } else if (event.target.value === "Basketball") {
      setPlayPeriodType("Quarter");
    } else if (event.target.value === "Football") {
      setPlayPeriodType("Quarter");
    } else if (event.target.value === "Hockey") {
      setPlayPeriodType("Period");
    } else if (event.target.value === "Soccer") {
      setPlayPeriodType("Half");
    } else if (event.target.value === "Pool") {
      setPlayPeriodType("Inning");
    }
  };

  const handleOut = (event) => {
    if (outs + 1 < 4) {
      setOuts((prev) => prev + 1);
    } else {
      setOuts((prev) => prev - 3);
    }
    setBalls(0);
    setStrikes(0);
  };

  const handleStrike = (event) => {
    if (strikes + 1 < 4) {
      setStrikes((prev) => prev + 1);
    } else {
      setStrikes((prev) => prev - 3);
    }
  };

  const handleBall = (event) => {
    if (balls + 1 < 5) {
      setBalls((prev) => prev + 1);
    } else {
      setBalls((prev) => prev - 4);
      setStrikes(0);
    }
  };

  const handleNextDown = () => {
    if (down + 1 < 5) {
      setDown(prev => prev + 1)
    } else {
      setDown(1)
    }
  }

  const handleFirstDown = () => {
    setDown(1)
  }

  const handlePause = () => {
    setIsPaused((prev) => !prev);
  };

  const playPause = isPaused ? "Play" : "Pause";

  return (
    <div>
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
      />
      <div className="container">
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
          sport={sport}
        />
        <ScoreForm
          playPeriodType={playPeriodType}
          sport={sport}
          handleSetGame={handleSetGame}
          handleAwayTeam={handleAwayTeam}
          handleHomeTeam={handleHomeTeam}
          handlePlayPeriod={handlePlayPeriod}
          handlePeriodLength={handlePeriodLength}
          handleSport={handleSport}
        />
      </div>
    </div>
  );
}

export default App;
