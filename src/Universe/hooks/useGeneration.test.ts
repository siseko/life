import { act } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useGeneration, { GENERATION_TIMEOUT } from "./useGeneration";

describe("The useGeneration hook", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.spyOn(global, "clearInterval");
    jest.spyOn(global, "setInterval");
  });

  afterEach(() => jest.restoreAllMocks());

  test("if it clears interval when generations count is reached", () => {
    const args = { seed: [], generationsCount: 2 };

    renderHook(() => useGeneration(args));

    act(() => {
      jest.advanceTimersByTime(GENERATION_TIMEOUT);
      expect(clearInterval).not.toHaveBeenCalled();

      jest.advanceTimersByTime(GENERATION_TIMEOUT);
      expect(clearInterval).toHaveBeenCalledTimes(1);
    });
  });

  test("if it sets in progress to false when done", () => {
    const args = { seed: [], generationsCount: 1 };

    const { result } = renderHook(() => useGeneration(args));

    expect(result.current.inProgress).toBe(true);

    act(() => {
      jest.advanceTimersByTime(GENERATION_TIMEOUT + 1);
      expect(result.current.inProgress).toBe(false);
    });
  });

  test("if it returns correct generations left", () => {
    const args = { seed: [], generationsCount: 3 };

    const { result } = renderHook(() => useGeneration(args));

    expect(result.current.generationsLeft).toBe(3);

    act(() => {
      jest.advanceTimersByTime(GENERATION_TIMEOUT + 1);
      expect(result.current.generationsLeft).toBe(2);

      jest.advanceTimersByTime(GENERATION_TIMEOUT);
      expect(result.current.generationsLeft).toBe(1);

      jest.advanceTimersByTime(GENERATION_TIMEOUT);
      expect(result.current.generationsLeft).toBe(0);
    });
  });

  test("if it creates a new timer and destroys old one on rerender with new seed", () => {
    const args = { seed: [], generationsCount: 1 };

    const { rerender } = renderHook((props) => useGeneration(props), {
      initialProps: args,
    });

    args.seed = [];
    rerender(args);

    expect(setInterval).toHaveBeenCalledTimes(2);
    expect(clearInterval).toHaveBeenCalledTimes(1);
  });

  test("if it creates a new timer and destroys old one on rerender with new generationsCount", () => {
    const args = { seed: [], generationsCount: 1 };

    const { rerender } = renderHook((props) => useGeneration(props), {
      initialProps: args,
    });

    args.generationsCount = 2;
    rerender(args);

    expect(setInterval).toHaveBeenCalledTimes(2);
    expect(clearInterval).toHaveBeenCalledTimes(1);
  });

  test("if it does NOT create a new timer on rerender with the same props", () => {
    const args = { seed: [], generationsCount: 1 };

    const { result, rerender } = renderHook((props) => useGeneration(props), {
      initialProps: args,
    });

    expect(result.current.cells).toEqual([]);

    rerender(args);

    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(clearInterval).not.toHaveBeenCalled();
  });
});
