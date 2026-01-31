import Cell from "./Cell";

export default function MazeGrid({
  grid,
  start,
  end
}) {

  return (
    <div
      className="grid"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${grid[0].length}, 30px)`
      }}
    >
      {grid.map((row, rIdx) =>
        row.map((cell, cIdx) => {
          let type = "open";

          if (cell === 1) {
            type = "wall";
          } else if (rIdx === start.row && cIdx === start.col) {
            type = "start";
          } else if (rIdx === end.row && cIdx === end.col) {
            type = "end";
          } 

          return (
            <Cell
              key={`${rIdx}-${cIdx}`}
              type={type}
            />
          );
        })
      )}
    </div>
  );
}
