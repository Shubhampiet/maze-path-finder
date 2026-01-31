export function generateRandomMaze(rows, cols, wallProbability = 0.3) {
  const maze = [];

  for (let r = 0; r < rows; r++) {
    const row = [];
    for (let c = 0; c < cols; c++) {
      row.push(Math.random() < wallProbability ? 1 : 0);
    }
    maze.push(row);
  }

  // Ensure start and end are always open
  maze[0][0] = 0;
  maze[rows - 1][cols - 1] = 0;

  return maze;
}
