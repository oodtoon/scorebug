import Box from "@mui/material/Box";
import Countdown from "./Countdown";
import OutsBallsAndStrikes from "./Outs";
import Downs from "./Downs";

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
        <Box sx={{ bgcolor: "error.main", color: "error.contrastText", p: 2 }}>
          {scorebug.awayTeam}
        </Box>
        <Box sx={{ bgcolor: "white", color: "black", p: 2 }}>{awayScore}</Box>
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "primary.contrastText",
            p: 2,
          }}
        >
          {scorebug.homeTeam}
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
            <Countdown periodLength={scorebug.periodLength} isPaused={isPaused}/>
            {scorebug.sport === "Baseball" && (
              <OutsBallsAndStrikes
                outs={outs}
                balls={balls}
                strikes={strikes}
              />
            )}
          </Box>
        </Box>
        <Downs down={down}/>
      </Box>
    </div>
  );
};

export default Scoreboard;
