import React from "react";
import styled from "styled-components";
import { Cells } from "./types";
import useGeneration from "./useGeneration";

const CELL_SIZE = 50;

const Grid = styled.ul<{ gridColumns: number }>(({ gridColumns }) => ({
  display: "inline-grid",
  gridTemplateColumns: `repeat(${gridColumns}, ${CELL_SIZE}px)`,
  gap: 3,
  border: `3px solid #ccc`,
  backgroundColor: "#ccc",
}));

const Cell = styled.li<{ isLive: boolean }>(({ isLive }) => ({
  height: CELL_SIZE,
  backgroundColor: isLive ? "#000" : "#fff",
}));

const ProgressIndicator = styled.div<{ inProgress: boolean }>(
  ({ inProgress }) => ({
    width: 30,
    height: 30,
    backgroundColor: inProgress ? "#1ba91b" : "#fb2323",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
  })
);

const FlexBox = styled.div(() => ({
  display: "flex",
  alignItems: "center",
}));

interface UniverseProps {
  seed: Cells;
  generationsCount: number;
}

const Universe = (props: UniverseProps) => {
  const { cells, inProgress, generationsLeft } = useGeneration(props);

  if (!cells[0]) return <>{"Empty seed provided"}</>;

  const gridColumns = props.seed[0].length;

  return (
    <>
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
    </>
  );
};

export default Universe;
