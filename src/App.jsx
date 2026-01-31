import { useState } from "react";
import { maze } from "./data/sampleMaze";
import { bfs } from "./algorithms/bfs";
import MazeGrid from "./components/MazeGrid";

function App() {
  const start = { row: 0, col: 0 };
  const end = { row: maze.length - 1, col: maze[0].length - 1 };

  const [visitedCells, setVisitedCells] = useState([]);
  const [path, setPath] = useState([]);
  const [isSolving, setIsSolving] = useState(false);
  const [speed, setSpeed] = useState(50);

  const handleSolve = async () => {
    if (isSolving) return;

    setIsSolving(true);
    setVisitedCells([]);
    setPath([]);

    const result = await bfs(
      maze,
      start,
      end,
      (cell) => {
        setVisitedCells((prev) => [...prev, cell]);
      },
      speed,
    );

    if (result) {
      // Small pause before path animation
      await new Promise((resolve) => setTimeout(resolve, 500));

      for (let i = 0; i < result.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 120));
        setPath((prev) => [...prev, result[i]]);
      }
    } else {
      alert("No path found!");
    }

    setIsSolving(false);
  };

  const handleReset = () => {
    if (isSolving) return;
    setVisitedCells([]);
    setPath([]);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center",  height: "100vh", width: "100vw" }}>
    <div style={{ textAlign: "center"}}>
      <h2>Maze Solver (BFS)</h2>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={handleSolve} disabled={isSolving}>
          Solve
        </button>

        <button
          onClick={handleReset}
          disabled={isSolving}
          style={{ marginLeft: "10px" }}
        >
          Reset
        </button>

        <div style={{ marginTop: "10px" }}>
          <label>Speed: </label>
          <input
            type="range"
            min="10"
            max="300"
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
          />
          <span> {speed} ms</span>
        </div>
      </div>

      <MazeGrid
        grid={maze}
        visitedCells={visitedCells}
        path={path}
        start={start}
        end={end}
      />
    </div>
    </div>
  );
}

export default App;
