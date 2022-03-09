import { useEffect, useRef, useState } from "react";
import { GENERATION_TIMEOUT } from "./constants";
import moveToNextTick from "./moveToNextTick";
import { Cells } from "./types";

const useGeneration = ({
  seed,
  generationsCount,
}: {
  seed: Cells;
  generationsCount: number;
}) => {
  const [cells, setCells] = useState<Cells>(seed);
  const [inProgress, setInProgress] = useState(true);
  const countRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      countRef.current++;
      setCells(moveToNextTick);

      if (countRef.current === generationsCount) {
        clearInterval(intervalId);
        setInProgress(false);
        return;
      }
    }, GENERATION_TIMEOUT);

    return () => clearInterval(intervalId);
  }, [generationsCount]);

  return {
    cells,
    inProgress,
    generationsLeft: generationsCount - countRef.current,
  };
};

export default useGeneration;
