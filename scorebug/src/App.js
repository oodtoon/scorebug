import { useState } from "react";
import DisplayScoreboard from "./components/routes/DisplayScoreboard";
import ControlCenter from "./components/ControlCenter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "primereact/resources/primereact.min.css";
import "./App.css";

function App() {
  let scoreboardInfo = {
    homeTeam: "Home Team",
    homeColor: "1976d2",
    homeText: "FFFFFF",
    awayTeam: "Away Team",
    awayColor: "d32f2f",
    awayText: "FFFFFF",
    playPeriodType: "Quarter",
    sport: "",
    periodLength: 15,
    innings: 9,
    periods: 3,
    poolType: "",
  };

  const [scorebug, setScorebug] = useState(scoreboardInfo);

  const [awayScore, setAwayScore] = useState(0);
  const [awayTeam, setAwayTeam] = useState("Away Team");
  const [awayColor, setAwayColor] = useState("d32f2f");
  const [awayText, setAwayText] = useState("FFFFFF");

  const [homeScore, setHomeScore] = useState(0);
  const [homeTeam, setHomeTeam] = useState("Home Team");
  const [homeColor, setHomeColor] = useState("1976d2");
  const [homeText, setHomeText] = useState("FFFFFF");

  const [teamToEdit, setTeamToEdit] = useState("Home Team");

  const [sport, setSport] = useState("");

  const [playPeriodType, setPlayPeriodType] = useState("");

  const period = 1;

  const [playPeriod, setPlayPeriod] = useState(period);

  const [periodLength, setPeriodLength] = useState(0);

  const [isPaused, setIsPaused] = useState(true);

  const [timeLeft, setTimeLeft] = useState(0);

  const [outs, setOuts] = useState(0);
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);

  const [down, setDown] = useState(1);

  const [innings, setInnings] = useState(9);

  const [periods, setPeriods] = useState(3);

  const [possesion, setPossesion] = useState("Home Team");

  const [controlsVisible, setControlsVisibl] = useState(true);

  const [poolType, setPoolType] = useState("");

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
    if (scorebug.sport === "Pool") {
      setPlayPeriod(0);
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

  const handlePossesionChange = (event) => {
    setPossesion(event.target.value);
  };

  const handlePeriodLength = (event) => {
    setPeriodLength(+event.target.value);
  };

  const handleSetGame = (event) => {
    if (playPeriodType === "") {
      setPlayPeriodType("Quarter");
    }

    if (playPeriodType !== "Hockey" && periods === "") {
      setPeriods(3);
    }

    event.preventDefault();
    setScorebug({
      ...scorebug,
      homeTeam: homeTeam,
      homeColor: homeColor,
      homeText: homeText,
      awayTeam: awayTeam,
      awayColor: awayColor,
      awayText: awayText,
      playPeriodType: playPeriodType || "Quarter",
      sport: sport,
      periodLength: periodLength || "15",
      innings: innings,
      periods: periods || 3,
      football: { possesion: possesion },
      poolType: poolType || "8 Ball",
    });
    setPlayPeriod(1);
    setAwayScore(0);
    setHomeScore(0);
    setAwayTeam("Away Team");
    setHomeTeam("Home Team");
  };

  const handlePlayPeriod = (event) => {
    setPlayPeriodType(event.target.value);
  };

  const handleNextPeriod = () => {
    if (playPeriodType === "Quarter") {
      if (playPeriod + 1 <= 4) {
        setPlayPeriod((prevPeriod) => prevPeriod + 1);
        setPeriodLength(scorebug.periodLength);
      } else {
        setPlayPeriod((prevPeriod) => prevPeriod - 3);
        setPeriodLength(scorebug.periodLength);
      }
    } else if (playPeriodType === "Half") {
      if (playPeriod + 1 <= 2) {
        setPlayPeriod((prevPeriod) => prevPeriod + 1);
        setPeriodLength(scorebug.periodLength);
      } else {
        setPlayPeriod((prevPeriod) => prevPeriod - 1);
        setPeriodLength(scorebug.periodLength);
      }
    } else if (sport === "Hockey" && playPeriodType === "Period") {
      if (playPeriod + 1 <= 3) {
        setPlayPeriod((prevPeriod) => prevPeriod + 1);
        setPeriodLength(scorebug.periodLength);
      } else {
        setPlayPeriod((prevPeriod) => prevPeriod - 2);
        setPeriodLength(scorebug.periodLength);
      }
    } else if (playPeriodType === "Inning") {
      if (playPeriod + 1 <= scorebug.innings) {
        setPlayPeriod((prevPeriod) => prevPeriod + 1);
        setPeriodLength(scorebug.periodLength);
      } else {
        setPlayPeriod((prevPeriod) => prevPeriod - (scorebug.innings - 1));
        setPeriodLength(scorebug.periodLength);
      }
    } else if (playPeriodType !== "Hockey" && playPeriodType === "Period") {
      if (playPeriod < scorebug.periods) {
        setPlayPeriod((prevPeriod) => prevPeriod + 1);
        setPeriodLength(scorebug.periodLength);
      } else if (playPeriod === 1 && scorebug.periods === 1) {
        setPlayPeriod(1);
        setPeriodLength(scorebug.periodLength);
      } else {
        setPlayPeriod((prevPeriod) => prevPeriod - (scorebug.periods - 1));
        setPeriodLength(scorebug.periodLength);
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

  const handleOut = () => {
    if (outs + 1 < 4) {
      setOuts((prev) => prev + 1);
    } else {
      setOuts((prev) => prev - 3);
    }
    setBalls(0);
    setStrikes(0);
  };

  const handleStrike = () => {
    if (strikes + 1 < 4) {
      setStrikes((prev) => prev + 1);
    } else {
      setStrikes((prev) => prev - 3);
      handleOut();
    }
  };

  const handleBall = () => {
    if (balls + 1 < 5) {
      setBalls((prev) => prev + 1);
    } else {
      setBalls((prev) => prev - 4);
      setStrikes(0);
    }
  };

  const handleNextDown = () => {
    if (down + 1 < 5) {
      setDown((prev) => prev + 1);
    } else {
      setDown(1);
    }
  };

  const handleFirstDown = () => {
    setDown(1);
  };

  const handleInning = (event) => {
    setInnings(event.target.value);
  };

  const handlePeriods = (event) => {
    setPeriods(event.target.value);
  };

  const handlePoolType = (event) => {
    setPoolType(event.target.value);
  };

  const handleControlsVisible = () => {
    setControlsVisibl((prev) => !prev);
  };

  const handlePause = () => {
    setIsPaused((prev) => !prev);
  };

  const playPause = isPaused ? "Play" : "Pause";

  const handleAwayColor = (color) => {
    setAwayColor(color.value);
  };

  const handleHomeColor = (color) => {
    setHomeColor(color.value);
  };

  const handleAwayText = (color) => {
    setAwayText(color.value);
  };

  const handleHomeText = (color) => {
    setHomeText(color.value);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ControlCenter
                scorebug={scorebug}
                awayScore={awayScore}
                homeScore={homeScore}
                playPeriod={playPeriod}
                isPaused={isPaused}
                outs={outs}
                balls={balls}
                strikes={strikes}
                down={down}
                teamToEdit={teamToEdit}
                playPause={playPause}
                sport={sport}
                playPeriodType={playPeriodType}
                possesion={possesion}
                timeLeft={timeLeft}
                controlsVisible={controlsVisible}
                awayColor={awayColor}
                awayText={awayText}
                homeColor={homeColor}
                homeText={homeText}
                handleChange={handleChange}
                handleAddPoints={handleAddPoints}
                handleReset={handleReset}
                handlePause={handlePause}
                handleTotalReset={handleTotalReset}
                handleNextPeriod={handleNextPeriod}
                handleOut={handleOut}
                handleBall={handleBall}
                handleStrike={handleStrike}
                handleNextDown={handleNextDown}
                handleFirstDown={handleFirstDown}
                handleSetGame={handleSetGame}
                handleAwayTeam={handleAwayTeam}
                handleHomeTeam={handleHomeTeam}
                handlePlayPeriod={handlePlayPeriod}
                handlePeriodLength={handlePeriodLength}
                handleSport={handleSport}
                handleInning={handleInning}
                handlePeriods={handlePeriods}
                handlePossesionChange={handlePossesionChange}
                handlePoolType={handlePoolType}
                setTimeLeft={setTimeLeft}
                handleControlsVisible={handleControlsVisible}
                handleAwayColor={handleAwayColor}
                handleAwayText={handleAwayText}
                handleHomeColor={handleHomeColor}
                handleHomeText={handleHomeText}
              />
            }
          ></Route>

          <Route
            path="/scoreboard"
            element={
              <DisplayScoreboard
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
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
