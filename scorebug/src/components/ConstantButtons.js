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
      <div className="constant-btns">
        {scorebug.sport !== "Baseball" && scorebug.sport !== "Pool" && (
          <Button
            variant="contained"
            onClick={handlePause}
            sx={{ mr: "10px", mt: "25px", ml: "20px" }}
          >
            {playPause}
          </Button>
        )}
        {scorebug.sport !== "Baseball" && scorebug.sport !== "Pool" && (
          <Button
            variant="contained"
            onClick={handleNextPeriod}
            sx={{ mr: "10px", mt: "25px" }}
          >
            Next {scorebug.playPeriodType}
          </Button>
        )}
        {scorebug.sport === "Baseball" && (
          <Button
            variant="contained"
            onClick={handleNextPeriod}
            sx={{ mr: "10px", mt: "25px", ml: "20px" }}
          >
            Next {scorebug.playPeriodType}
          </Button>
        )}
        {scorebug.sport === "Pool" && (
          <Button
            variant="contained"
            onClick={handleNextPeriod}
            sx={{ mr: "10px", mt: "25px", ml: "20px" }}
          >
            Next {scorebug.playPeriodType}
          </Button>
        )}
        <Button
          variant="contained"
          onClick={handleReset}
          sx={{ mr: "10px", mt: "25px" }}
        >
          Reset Score
        </Button>
        <Button
          variant="contained"
          onClick={handleTotalReset}
          sx={{ mt: "25px" }}
        >
          Reset Entire Board
        </Button>
      </div>
    </>
  );
};

export default ConstantButtons;
