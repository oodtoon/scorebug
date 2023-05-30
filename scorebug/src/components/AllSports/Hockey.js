import { Button } from "@mui/material";

const HockeyButtons = ({ handleAddPoints }) => {
  return (
    <>
      <Button variant="contained" onClick={handleAddPoints} sx={{ mr: "50px" }} value={1}>
        Goal
      </Button>
    </>
  );
};

export default HockeyButtons;