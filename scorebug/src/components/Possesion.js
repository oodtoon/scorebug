import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";


const Possesion = ({ handlePossesionChange, scorebug, possesion }) => {
  return (
    <>
      <FormControl>
        <FormLabel id="team-ball-possesion-group">Possesion:</FormLabel>
        <RadioGroup
          aria-labelledby="team-ball-possesion-group"
          name="controlled-radio-team-ball-possesion-group"
          value={possesion}
          onChange={handlePossesionChange}
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
    </>
  );
};

export default Possesion;