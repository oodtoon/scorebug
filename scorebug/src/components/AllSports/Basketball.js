import { Button } from "@mui/material";

const BasketballButtons = ({ handleAddPoints }) => {
  return (
    <>
      <Button
        variant="contained"
        onClick={handleAddPoints}
        sx={{ mr: "10px" }}
        value={2}
      >
        Basket
      </Button>

      <Button
        variant="contained"
        onClick={handleAddPoints}
        sx={{ mr: "10px" }}
        value={3}
      >
        3 Pointer
      </Button>
      <Button
        variant="contained"
        onClick={handleAddPoints}
        sx={{ mr: "50px" }}
        value={1}
      >
        Free Throw
      </Button>
    </>
  );
};

export default BasketballButtons;
