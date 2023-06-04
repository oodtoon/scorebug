import { Button } from "@mui/material";

const HockeyButtons = ({ handleAddPoints }) => {
  return (
    <>
      <Button variant="contained" onClick={handleAddPoints} sx={{ ml: "20px", maxWidth: "150px"}} value={1}>
        Goal
      </Button>
    </>
  );
};

export default HockeyButtons;