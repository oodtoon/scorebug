import { Button } from "@mui/material";

const PoolButtons = ({ handleAddPoints }) => {
  return (
    <>
      <Button variant="contained" onClick={handleAddPoints} sx={{ mr: "50px" }} value={1}>
        Game Won
      </Button>
    </>
  );
};

export default PoolButtons;