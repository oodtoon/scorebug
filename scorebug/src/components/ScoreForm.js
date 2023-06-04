import { Button, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import GameSelect from "./GameSelect";
import "../App.css";

const PeriodSelect = ({ playPeriodType, handlePeriods }) => {
  return (
    <>
      {playPeriodType === "Period" && (
        <span>
          <TextField
            label="Period Count"
            sx={{ mr: "10px" }}
            onChange={handlePeriods}
          />
        </span>
      )}
    </>
  );
};

const ScoreForm = ({
  playPeriodType,
  sport,
  handleSetGame,
  handleAwayTeam,
  handleHomeTeam,
  handlePlayPeriod,
  handlePeriodLength,
  handleSport,
  handleInning,
  handlePeriods,
  handlePoolType,
}) => {
  return (
    <>
      <form onSubmit={handleSetGame} className="score-form">
        <div className="team-names">
          <TextField
            onChange={handleAwayTeam}
            label="Away Team"
            sx={{ mr: "10px" }}
          />
          <TextField
            onChange={handleHomeTeam}
            label="Home Team"
            sx={{ mr: "50px" }}
          />
        </div>
        <div className="game-info">
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
          {sport !== "Hockey" && (
            <PeriodSelect
              playPeriodType={playPeriodType}
              handlePeriods={handlePeriods}
            />
          )}
          {sport !== "Baseball" && sport !== "Pool" && (
            <>
              <TextField label="Period Length" onChange={handlePeriodLength} />
              <span className="minutes"> : minutes</span>
            </>
          )}
          {sport === "Baseball" && (
            <TextField label="Inning Count" onChange={handleInning} />
          )}
          {sport === "Pool" && (
            <TextField label="Type of Pool" onChange={handlePoolType} />
          )}
        </div>
        <div>
          <Button
            variant="contained"
            type="submit"
            sx={{ mt: "30px", mb: "30px" }}
          >
            Set Game
          </Button>
        </div>
      </form>
    </>
  );
};

export default ScoreForm;
