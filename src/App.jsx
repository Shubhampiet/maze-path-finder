import { useState } from "react";
import { maze } from "./data/sampleMaze";
import MazeGrid from "./components/MazeGrid";
import { bfs } from "./algorithms/bfs";

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

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Maze Solver (BFS)</h2>
      <button onClick={handleSolve} disabled={isSolving}>
        Solve
      </button>

      <MazeGrid
        grid={maze}
        visitedCells={visitedCells}
        start={start}
        end={end}
      />
    </div>
  );
}

export default App;
