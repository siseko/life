import React, { useCallback, useState } from "react";
import "./reset.css";
import { Cells, Universe } from "./Universe";


const generateSeed = (): Cells => {
  return [[{ isLive: true }]];
};

const App = () => {
  const [seed, setSeed] = useState<Cells>(generateSeed());

  const reset = useCallback(() => setSeed(generateSeed()), []);

  return <Universe seed={seed} generationsCount={1} />;
};

export default App;
