import { Button } from "@mui/material";

const FootBallButtons = ({ handleAddPoints }) => {
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
    </>
  );
};

export default FootBallButtons;
