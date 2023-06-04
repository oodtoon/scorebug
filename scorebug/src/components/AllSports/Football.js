import { Button } from "@mui/material";
import Possesion from "../Possesion";
import "../../App.css";

const FootBallButtons = ({
  handleAddPoints,
  handleNextDown,
  handleFirstDown,
  scorebug,
  handlePossesionChange,
  possesion,
}) => {
  return (
    <>
      <span className="football-score-btns">
        <Button
          variant="contained"
          onClick={handleAddPoints}
          sx={{ mr: "10px", ml: "20px" }}
          value={6}
        >
          Touch Down
        </Button>
        <Button
          variant="contained"
          onClick={handleAddPoints}
          sx={{ mr: "10px" }}
          value={1}
        >
          Extra Point
        </Button>
        <Button
          variant="contained"
          onClick={handleAddPoints}
          sx={{ mr: "10px" }}
          value={3}
        >
          Field Goald
        </Button>
        <Button
          variant="contained"
          onClick={handleAddPoints}
          
          value={2}
        >
          2 Point Conversion / Saftey
        </Button>
      </span>
      <div className="ball-possesion">
        {scorebug.sport === "Football" && (
          <Possesion
            handlePossesionChange={handlePossesionChange}
            scorebug={scorebug}
            possesion={possesion}
          />
        )}
      </div>
      <div className="down-btns">
        <Button
          variant="contained"
          onClick={handleFirstDown}
          sx={{ mr: "10px", ml: "20px" }}
        >
          First Down
        </Button>
        <Button
          variant="contained"
          onClick={handleNextDown}
        >
          Next Down
        </Button>
      </div>
    </>
  );
};

export default FootBallButtons;
