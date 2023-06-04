import { Button } from "@mui/material";
import "../../App.css"

const BasketballButtons = ({ handleAddPoints }) => {
  return (
    <>
      <div className="basketball-point-btns">
        <Button
          variant="contained"
          onClick={handleAddPoints}
          sx={{ mr: "10px", ml: "20px"}}
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
          value={1}
        >
          Free Throw
        </Button>
      </div>
    </>
  );
};

export default BasketballButtons;
