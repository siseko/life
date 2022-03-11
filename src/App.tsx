import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { Input } from "./components";
import { Cells, Universe } from "./Universe";

const generateSeed = (width: number, length: number): Cells =>
  Array.from({ length }).map((_) =>
    Array.from({ length: width }).map((_) => Math.round(Math.random()))
  );

const Configuration = styled.div(() => ({ marginRight: 50 }));

const containerStyles = { width: 150, margin: "24px 0" };
const attrs = { type: "number", min: 1 };

const inputConfig = { containerStyles, attrs };

const App = () => {
  const [width, setWidth] = useState(20);
  const [length, setLength] = useState(15);
  const [generationsCount, setGenerationsCount] = useState(4);
  const generationsCountRef = useRef(generationsCount);

  const [seed, setSeed] = useState<Cells>(generateSeed(width, length));

  const handleReset = useCallback(() => {
    generationsCountRef.current = generationsCount;
    setSeed(generateSeed(width, length));
  }, [width, length, generationsCount]);

  return (
    <div style={{ display: "flex" }}>
      <Configuration>
        <Input
          value={String(width)}
          onChange={(value) => setWidth(Number(value))}
          label="Board width"
          {...inputConfig}
        />
        <Input
          value={String(length)}
          onChange={(value) => setLength(Number(value))}
          label="Board length"
          {...inputConfig}
        />
        <Input
          value={String(generationsCount)}
          onChange={(value) => setGenerationsCount(Number(value))}
          label="Generations count"
          {...inputConfig}
        />
      </Configuration>
      <Universe
        seed={seed}
        generationsCount={generationsCountRef.current}
        onReset={handleReset}
      />
    </div>
  );
};

export default App;
