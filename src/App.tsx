import React, { useCallback, useState } from "react";
import "./reset.css";
import { Cells, Universe } from "./Universe";

const generateSeed = (): Cells => {
  return [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];
};

const App = () => {
  const [seed, setSeed] = useState<Cells>(generateSeed());

  const reset = useCallback(() => setSeed(generateSeed()), []);

  return <Universe seed={seed} generationsCount={6} />;
};

export default App;
