import { Button } from "@mui/material";

const PoolButtons = ({ handleAddPoints }) => {
  return (
    <>
      <Button variant="contained" onClick={handleAddPoints} sx={{ ml: "20px", maxWidth: "150px" }} value={1}>
        Game Won
      </Button>
    </>
  );
};

export default PoolButtons;