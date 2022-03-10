import React from "react";
import { Cells } from ".";
import useGeneration from "./hooks/useGeneration";
import { Cell, FlexBox, Grid, ProgressIndicator } from "./Universe.styled";

interface UniverseProps {
  seed: Cells;
  generationsCount: number;
}

const Universe = (props: UniverseProps) => {
  const { cells, inProgress, generationsLeft } = useGeneration(props);

  if (!cells[0]) return <>{"Empty seed provided"}</>;

  const gridColumns = props.seed[0].length;

  return (
    <div>
      <FlexBox>
        {"Generations left: "}
        <ProgressIndicator inProgress={inProgress}>
          {generationsLeft}
        </ProgressIndicator>
        {/* TODO: add reset button when no generations left */}
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
