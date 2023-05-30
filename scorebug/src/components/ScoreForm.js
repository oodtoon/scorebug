import { Button, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import GameSelect from "./GameSelect";

const ScoreForm = ({
  playPeriodType,
  sport,
  handleSetGame,
  handleAwayTeam,
  handleHomeTeam,
  handlePlayPeriod,
  handlePeriodLength,
  handleSport,
}) => {
  return (
    <>
      <form onSubmit={handleSetGame} className="score-form">
        <TextField
          onChange={handleAwayTeam}
          label="Away Team"
          sx={{ mr: "10px" }}
        />
        <TextField
          onChange={handleHomeTeam}
          label="Home Team"
          sx={{ mr: "50px"  }}
        />
        <GameSelect sport={sport} handleSport={handleSport} />
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
    </>
  );
};

export default ScoreForm;
