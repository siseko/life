import { Cells } from "..";

const getLiveNeighboursCount = (row: number, column: number, cells: Cells) => {
  let count = 0;

  for (let r = row - 1; r <= row + 1; r++) {
    for (let c = column - 1; c <= column + 1; c++) {
      if (r !== row || c !== column) {
        count += cells[r]?.[c] ?? 0;
      }
    }
  }

  return count;
};

const moveToNextTick = (cells: Cells) =>
  cells.map((rows, row) =>
    rows.map((cell, column) => {
      const count = getLiveNeighboursCount(row, column, cells);

      if (cell && (count === 2 || count === 3)) return 1;
      if (!cell && count === 3) return 1;
      return 0;
    })
  );

export default moveToNextTick;
