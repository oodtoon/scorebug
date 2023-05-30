import { Button } from "@mui/material";

const BaseballButtons = ({
  handleAddPoints,
  handleStrike,
  handleBall,
  handleOut,
}) => {
  return (
    <>
      <Button
        variant="contained"
        onClick={handleAddPoints}
        sx={{ mr: "10px" }}
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
        sx={{ mr: "50px" }}
        value={4}
      >
        Grand Slam
      </Button>
      <Button
        variant="contained"
        onClick={handleStrike}
        sx={{ mr: "10px" }}
        value={4}
      >
        Strike
      </Button>
      <Button
        variant="contained"
        onClick={handleBall}
        sx={{ mr: "10px" }}
        value={4}
      >
        Ball
      </Button>

      <Button
        variant="contained"
        onClick={handleOut}
        sx={{ mr: "50px" }}
        value={4}
      >
        Out
      </Button>
    </>
  );
};

export default BaseballButtons;
