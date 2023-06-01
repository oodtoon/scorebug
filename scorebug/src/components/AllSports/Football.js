import { Button } from "@mui/material";
import Possesion from "../Possesion";

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
      <Button
        variant="contained"
        onClick={handleAddPoints}
        sx={{ mr: "10px" }}
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
        sx={{ mr: "50px" }}
        value={2}
      >
        2 Point Conversion / Saftey
      </Button>
      <Button variant="contained" onClick={handleFirstDown} sx={{ mr: "10px" }}>
        First Down
      </Button>
      <Button variant="contained" onClick={handleNextDown} sx={{ mr: "50px" }}>
        Next Down
      </Button>
      {scorebug.sport === "Football" && (
        <Possesion
          handlePossesionChange={handlePossesionChange}
          scorebug={scorebug}
          possesion={possesion}
        />
      )}
    </>
  );
};

export default FootBallButtons;
