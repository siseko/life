import React from "react";
import { Cells } from "./types";

interface UniverseProps {
  seed: Cells;
  generationsCount: number;
}

const Universe = (props: UniverseProps) => {
  return (
    <ul>
      {props.seed.flat().map((cell, index) => (
        <li key={index}>{cell.isLive}</li>
      ))}
    </ul>
  );
};

export default Universe;
