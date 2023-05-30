import { Button } from "@mui/material";

const ConstantButtons = ({
  scorebug,
  playPause,
  handleReset,
  handlePause,
  handleTotalReset,
  handleNextPeriod,
}) => {
  return (
    <>
      {scorebug.sport !== "Baseball" && (
        <Button variant="contained" onClick={handlePause} sx={{ mr: "10px" }}>
          {playPause}
        </Button>
      )}

      <Button
        variant="contained"
        onClick={handleNextPeriod}
        sx={{ mr: "10px" }}
      >
        Next {scorebug.playPeriodType}
      </Button>
      <Button variant="contained" onClick={handleReset} sx={{ mr: "10px" }}>
        Reset
      </Button>
      <Button variant="contained" onClick={handleTotalReset}>
        Reset Entire Board
      </Button>
    </>
  );
};

export default ConstantButtons;
