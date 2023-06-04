import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";


const TeamSelect = ({ teamToEdit, handleChange, scorebug }) => {
  return (
    <>
      <span className="teamSelect">
        <FormControl>
          <FormLabel id="controlled-team-group">Team:</FormLabel>
          <RadioGroup
            aria-labelledby="controlled-team-group"
            name="controlled-radio-buttons-group"
            value={teamToEdit}
            onChange={handleChange}
          >
            <FormControlLabel
              value="Away Team"
              control={<Radio />}
              label={scorebug.awayTeam}
            />
            <FormControlLabel
              value="Home Team"
              control={<Radio />}
              label={scorebug.homeTeam}
            />
          </RadioGroup>
        </FormControl>
      </span>
    </>
  );
};

export default TeamSelect;
