import Box from "@mui/material/Box";
import Countdown from "./Countdown";
import OutsBallsAndStrikes from "./Outs";
import Downs from "./Downs";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";

const FootballIcon = () => (
  <SportsFootballIcon sx={{ mb: "-10px" }}></SportsFootballIcon>
)

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
  setTimeLeft,
}) => {
  return (
    <div style={{ width: "50%" }}>
      <Box
        sx={{
          display: "grid",
          gap: 1,
          gridTemplateColumns: "repeat(2, 1fr)",
        }}
      >
        <Box sx={{ bgcolor: "error.main", color: "error.contrastText", p: 2, justifyContent: 'space-evenly' }}>
          {scorebug.awayTeam}
          {scorebug.sport === "Football" && (possesion === "Away Team" ? FootballIcon() : null)}
        </Box>
        <Box sx={{ bgcolor: "white", color: "black", p: 2 }}>{awayScore}</Box>
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            p: 2,
            justifyContent: 'space-evenly'
          }}
        >
          {scorebug.homeTeam}
          {scorebug.sport === "Football" && (possesion === "Home Team" ? FootballIcon() : null)}
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
        <Box
          sx={{
            display: "grid",
            gap: 1,
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
          <Box sx={{ bgcolor: "white", color: "black", p: 2 }}>
            {scorebug.playPeriodType}
          </Box>
          <Box sx={{ bgcolor: "white", color: "black", p: 2 }}>
            {playPeriod}
          </Box>
          <Box sx={{ bgcolor: "white", color: "black", p: 2 }}>
            {scorebug.sport !== "Baseball" && (
              <Countdown
                periodLength={scorebug.periodLength}
                isPaused={isPaused}
                timeLeft={timeLeft}
                setTimeLeft={setTimeLeft}
              />
            )}
            {scorebug.sport === "Baseball" && (
              <OutsBallsAndStrikes
                outs={outs}
                balls={balls}
                strikes={strikes}
              />
            )}
          </Box>
        </Box>
        {scorebug.sport === "Football" && <Downs down={down} />}
      </Box>
    </div>
  );
};

export default Scoreboard;
