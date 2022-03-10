import React, { useCallback, useState } from "react";
import { Input } from "./components";
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
  return (
    <>
      <Input
        value={String(width)}
        onChange={(value) => setWidth(Number(value))}
        label='Board length'
        attrs={{ type: "number", min: 1 }}
        containerStyles={{ width: 100 }}
      />
      <Universe seed={seed} generationsCount={6} />
    </>
  );
};

export default App;
