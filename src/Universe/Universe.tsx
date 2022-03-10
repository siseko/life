import React from "react";
import { Cells } from ".";
import { Button } from "../components";
import useGeneration from "./hooks/useGeneration";
import { Cell, FlexBox, Grid, ProgressIndicator } from "./Universe.styled";

interface UniverseProps {
  seed: Cells;
  generationsCount: number;
  onReset?: () => void;
}

const Universe = ({ seed, generationsCount, onReset }: UniverseProps) => {
  const { cells, inProgress, generationsLeft } = useGeneration({
    seed,
    generationsCount,
  });

  if (!cells[0]) return <>{"Empty seed provided"}</>;

  const gridColumns = seed[0].length;

  return (
    <div>
      <FlexBox>
        {onReset && (
          <Button
            onClick={onReset}
            containerStyles={{ width: 150, marginInlineEnd: "10px" }}
            attrs={{ disabled: inProgress }}
          >
            Rerun board
          </Button>
        )}
        <ProgressIndicator inProgress={inProgress}>
          {generationsLeft}
        </ProgressIndicator>
      </FlexBox>
      <Grid gridColumns={gridColumns}>
        {cells.flat().map((cell, index) => (
          <Cell isLive={Boolean(cell)} key={index} />
        ))}
      </Grid>
    </div>
  );
};

export default Universe;
