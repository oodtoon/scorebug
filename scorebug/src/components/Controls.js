import { Button, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Scoreboard from "./Scoreboard";
import TeamSelect from "./TeamSelect";
import ButtonControls from "./ButtonControls";

const Controls = ({
  scorebug,
  awayScore,
  homeScore,
  playPeriod,
  isPaused,
  teamToEdit,
  playPeriodType,
  handleChange,
  handleAdd,
  handleNextPeriod,
  handleReset,
  handleTotalReset,
  playPause,
  handleSetGame,
  handlePeriodLength,
  handleAwayTeam,
  handleHomeTeam,
  handlePause,
  handlePlayPeriod,
}) => {
  return (
    <div>
      <Scoreboard
        scorebug={scorebug}
        awayScore={awayScore}
        homeScore={homeScore}
        playPeriod={playPeriod}
        isPaused={isPaused}
        handleNextPeriod={handleNextPeriod}
      />
      <div className="container">
        <TeamSelect
          teamToEdit={teamToEdit}
          scorebug={scorebug}
          handleChange={handleChange}
        />
        <ButtonControls
          scorebug={scorebug}
          handleAdd={handleAdd}
          handleReset={handleReset}
          handlePause={handlePause}
          playPause={playPause}
          handleTotalReset={handleTotalReset}
          handleNextPeriod={handleNextPeriod}
        />
        <form onSubmit={handleSetGame}>
          <TextField
            onChange={handleAwayTeam}
            label="Away Team"
            sx={{ mr: "10px" }}
          />
          <TextField
            onChange={handleHomeTeam}
            label="Home Team"
            sx={{ mr: "10px" }}
          />
          <FormControl sx={{ minWidth: "300px" }}>
            <InputLabel id="playPeriodType">Play Period</InputLabel>
            <Select
              label="Play Period"
              onChange={handlePlayPeriod}
              value={playPeriodType}
              sx={{ mr: "10px" }}
            >
              <MenuItem value={"Quarter"}>Quarter</MenuItem>
              <MenuItem value={"Period"}>Period</MenuItem>
              <MenuItem value={"Half"}>Half</MenuItem>
              <MenuItem value={"Inning"}>Inning</MenuItem>
            </Select>
          </FormControl>
          <span className="minutes">
            <TextField label="Period Length" onChange={handlePeriodLength} /> :
            minutes
          </span>
          <div>
            <Button variant="contained" type="submit" sx={{ mt: "10px" }}>
              Set Game
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Controls;
