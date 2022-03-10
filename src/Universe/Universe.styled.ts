import styled from "styled-components";

const CELL_SIZE = 50;

export const Grid = styled.ul<{ gridColumns: number }>(({ gridColumns }) => ({
  display: "inline-grid",
  gridTemplateColumns: `repeat(${gridColumns}, ${CELL_SIZE}px)`,
  gap: 3,
  border: `3px solid #ccc`,
  backgroundColor: "#ccc",
}));

export const Cell = styled.li<{ isLive: boolean }>(({ isLive }) => ({
  height: CELL_SIZE,
  backgroundColor: isLive ? "#000" : "#fff",
}));

export const ProgressIndicator = styled.div<{ inProgress: boolean }>(
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

export const FlexBox = styled.div(() => ({
  display: "flex",
  alignItems: "center",
}));