import React from "react";
import styled from "styled-components";
import { Cells } from "./types";

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

interface UniverseProps {
  seed: Cells;
  generationsCount: number;
}

const Universe = (props: UniverseProps) => {
  if (!props.seed[0]) return <>{"Empty seed provided"}</>;

  const gridColumns = props.seed[0].length;

  return (
    <Grid gridColumns={gridColumns}>
      {props.seed.flat().map((cell, index) => (
        <Cell isLive={Boolean(cell)} key={index} />
      ))}
    </Grid>
  );
};

export default Universe;
