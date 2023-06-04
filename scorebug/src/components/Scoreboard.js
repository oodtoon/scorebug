import Box from "@mui/material/Box";
import Countdown from "./Countdown";
import OutsBallsAndStrikes from "./Outs";
import Downs from "./Downs";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import "../App.css";
import { Link } from "react-router-dom";

const FootballIcon = () => (
  <span className="football">
    <SportsFootballIcon sx={{ mb: "-10px" }}></SportsFootballIcon>
  </span>
);

const Scoreboard = ({
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
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: ".5fr 2fr 1fr 1fr",
        }}
      >
        <Box></Box>
        <Box
          sx={{
            bgcolor: `#${scorebug.awayColor}`,
            color: `#${scorebug.awayText}`,
            p: 2,
          }}
        >
          {scorebug.awayTeam}
        </Box>
        <Box
          sx={{
            bgcolor: `#${scorebug.awayColor}`,
            color: `#${scorebug.awayText}`,
            p: 2,
            justifyContent: "space-evenly",
            ml: "-10px",
          }}
        >
          {scorebug.sport === "Football" &&
            (possesion === "Away Team" ? FootballIcon() : null)}
        </Box>
        <Box sx={{ bgcolor: "white", color: "black", p: 2 }}>{awayScore}</Box>
        <Box></Box>
        <Box
          sx={{
            bgcolor: `#${scorebug.homeColor}`,
            color: `#${scorebug.homeText}`,
            p: 2,
            justifyContent: "space-evenly",
          }}
        >
          {scorebug.homeTeam}
        </Box>
        <Box
          sx={{
            bgcolor: `#${scorebug.homeColor}`,
            color: `#${scorebug.homeText}`,
            p: 2,
            justifyContent: "space-evenly",
            ml: "-10px",
          }}
        >
          {scorebug.sport === "Football" &&
            (possesion === "Home Team" ? FootballIcon() : null)}
        </Box>
        <Box
          sx={{
            bgcolor: "white",
            color: "black",
            p: 2,
          }}
        >
          {homeScore}
        </Box>
        <Box></Box>
        <Box
          sx={{
            display: "grid",
            gap: 1,
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <Box
            sx={{ bgcolor: "white", color: "black", p: 2, borderRadius: "8px" }}
          >
            {scorebug.playPeriodType}
          </Box>
          <Box sx={{ bgcolor: "white", color: "black", p: 2 }}>
            {playPeriod}
          </Box>
          <Box sx={{ bgcolor: "white", color: "black", pt: 2 }}>
            {scorebug.sport !== "Baseball" && scorebug.sport !== "Pool" && (
              <Countdown
                periodLength={scorebug.periodLength}
                isPaused={isPaused}
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
                playPeriod={playPeriod}
              />
            )}
            {scorebug.sport === "Baseball" && (
              <OutsBallsAndStrikes
                outs={outs}
                balls={balls}
                strikes={strikes}
              />
            )}
            {scorebug.sport === "Pool" && <span>{scorebug.poolType}</span>}
          </Box>
        </Box>
        <Box sx={{ p: 2 }}>
          {scorebug.sport === "Football" && <Downs down={down} />}
        </Box>
        {controlsVisible && (
          <Box sx={{ p: 2 }}>
            {" "}
            {controlsVisible === true && (
              <div className="display-link">
                <Link
                  to="/scoreboard"
                  className="display-link"
                  onClick={handleControlsVisible}
                >
                  Display
                </Link>
              </div>
            )}
          </Box>
        )}
      </Box>
    </div>
  );
};

export default Scoreboard;
