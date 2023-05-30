import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";


const GameSelect = ({ sport, handleSport }) => {

  return (
    <>
        <FormControl sx={{ minWidth: "300px" }}>
          <InputLabel id="sport">Select Sport</InputLabel>
          <Select
            label="Select Sport"
            onChange={handleSport}
            value={sport}
            sx={{ mr: "10px" }}
          >
            <MenuItem value={"Basketball"}>Basketball</MenuItem>
            <MenuItem value={"Football"}>Football</MenuItem>
            <MenuItem value={"Hockey"}>Hockey</MenuItem>
            <MenuItem value={"Baseball"}>Baseball</MenuItem>
            <MenuItem value={"Soccer"}>Soccer</MenuItem>
            <MenuItem value={"Pool"}>Pool</MenuItem>
          </Select>
        </FormControl>
    </>
  );
};

export default GameSelect;