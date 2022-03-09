import { Cells } from ".";
import moveToNextTick from "./moveToNextTick";

describe("The moveToNextTick helper", () => {
  describe("trivial case", () => {
    test("if any live cell with fewer than two live neighbours dies, as if by underpopulation.", () => {
      const current = [[1]] as Cells;
      const next = moveToNextTick(current);

      expect(next).toEqual([[0]]);
    });

    test("if any dead cell with fewer than three live neighbours remains dead.", () => {
      const current = [[0]] as Cells;
      const next = moveToNextTick(current);

      expect(next).toEqual([[0]]);
    });
  });

  test("if any live cell on the edges with fewer than two live neighbours dies, as if by underpopulation.", () => {
    const current = [
      [1, 0, 0],
      [0, 0, 0],
    ] as Cells;
    const next = moveToNextTick(current);

    expect(next).toEqual([
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  test("if any live cell NOT on the edges with fewer than two live neighbours dies, as if by underpopulation.", () => {
    const current = [
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 0],
    ] as Cells;
    const next = moveToNextTick(current);

    expect(next).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });

  test("if any live cell with two or three live neighbours lives on to the next generation.", () => {
    const current = [
      [1, 1, 0],
      [1, 0, 0],
      [1, 0, 0],
    ] as Cells;
    const next = moveToNextTick(current);

    expect(next).toEqual([
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ]);
  });

  test("if any live cell with more than three live neighbours dies, as if by overpopulation.", () => {
    const current = [
      [1, 1, 0],
      [1, 1, 0],
      [1, 0, 0],
    ] as Cells;
    const next = moveToNextTick(current);

    expect(next).toEqual([
      [1, 1, 0],
      [0, 0, 0],
      [1, 1, 0],
    ]);
  });

  test("if any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.", () => {
    const current = [
      [1, 1, 0],
      [1, 0, 0],
      [0, 0, 0],
    ] as Cells;
    const next = moveToNextTick(current);

    expect(next).toEqual([
      [1, 1, 0],
      [1, 1, 0],
      [0, 0, 0],
    ]);
  });
});
