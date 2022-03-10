import React, { useCallback, useState } from "react";
import "./reset.css";
import { Cells, Universe } from "./Universe";

const generateSeed = (width: number, length: number): Cells =>
  Array.from({ length }).map((_) =>
    Array.from({ length: width }).map((_) => Math.round(Math.random()))
  );

const App = () => {
  const [width, setWidth] = useState(4);
  const [length, setLength] = useState(4);

  const [seed, setSeed] = useState<Cells>(generateSeed(width, length));

  const handleReset = useCallback(
    () => setSeed(generateSeed(width, length)),
    [width, length]
  );

  // TODO: add input component for width and height and generations count
  return <Universe seed={seed} generationsCount={6} />;
};

export default App;
