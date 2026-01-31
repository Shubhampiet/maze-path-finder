import { useState } from "react";
import { maze } from "./data/sampleMaze";
import MazeGrid from "./components/MazeGrid";

function App() {
  const start = { row: 0, col: 0 };
  const end = { row: maze.length - 1, col: maze[0].length - 1 };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Maze Solver (BFS)</h2>

      <MazeGrid
        grid={maze}
        start={start}
        end={end}
      />
    </div>
  );
}

export default App;
