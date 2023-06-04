import { Button, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import GameSelect from "./GameSelect";
import { ColorPicker } from "primereact/colorpicker";
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
  handleAwayColor,
  handleHomeColor,
  homeColor,
  awayColor,
  handleAwayText,
  handleHomeText
}) => {
  return (
    <>
      <form onSubmit={handleSetGame} className="score-form">
        <div className="team-names">
          <div className="away-team-color">
            <ColorPicker
              value={awayColor}
              onChange={handleAwayColor}
              defaultColor="d32f2f"
            />
            <ColorPicker
              value={awayColor}
              onChange={handleAwayText}
              defaultColor="FFFFFF"
              className="text"
            />
          </div>

          <div className="home-team-color">
            <ColorPicker
              value={homeColor}
              onChange={handleHomeColor}
              defaultColor="1976d2"
            />
            <ColorPicker
              value={awayColor}
              onChange={handleHomeText}
              defaultColor="FFFFFF"
              className="text"
            />
          </div>
          <TextField
            className="away-team-name"
            onChange={handleAwayTeam}
            label="Away Team"
            sx={{ mr: "10px", mt: "10px" }}
          />
          <TextField
            className="home-team-name"
            onChange={handleHomeTeam}
            label="Home Team"
            sx={{ mt: "10px" }}
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
