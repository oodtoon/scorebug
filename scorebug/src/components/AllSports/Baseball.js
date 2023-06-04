import { Button } from "@mui/material";

const BaseballButtons = ({
  handleAddPoints,
  handleStrike,
  handleBall,
  handleOut,
}) => {
  return (
    <>
      <span className="baseball-score-btns">
        <Button
          variant="contained"
          onClick={handleAddPoints}
          sx={{ mr: "10px", ml: "20px" }}
          value={1}
        >
          1 Run
        </Button>
        <Button
          variant="contained"
          onClick={handleAddPoints}
          sx={{ mr: "10px" }}
          value={2}
        >
          2 Runs
        </Button>
        <Button
          variant="contained"
          onClick={handleAddPoints}
          sx={{ mr: "10px" }}
          value={3}
        >
          3 Runs
        </Button>
        <Button
          variant="contained"
          onClick={handleAddPoints}
          value={4}
        >
          Grand Slam
        </Button>
      </span>
      <div className="baseball-outs-strikes-balls-btns">
        <Button
          variant="contained"
          onClick={handleStrike}
          sx={{ ml: "20px", mr: "10px", mb: "20px" }}
          value={4}
        >
          Strike
        </Button>
        <Button
          variant="contained"
          onClick={handleBall}
          sx={{ mr: "10px", mb: "20px" }}
          value={4}
        >
          Ball
        </Button>
        <Button
          variant="contained"
          onClick={handleOut}
          sx={{ mr: "50px", mb: "20px" }}
          value={4}
        >
          Out
        </Button>
      </div>
    </>
  );
};

export default BaseballButtons;
