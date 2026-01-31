export async function bfs(grid, start, end, onVisit, speed = 50) {
  const rows = grid.length;
  const cols = grid[0].length;

  const queue = [];
  const visited = new Set();
  const parent = {};

  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];

  queue.push(start);
  visited.add(`${start.row},${start.col}`);

  while (queue.length > 0) {
    const current = queue.shift();
    const { row, col } = current;

    onVisit(current);

    await new Promise((resolve) => setTimeout(resolve, speed));

    if (row === end.row && col === end.col) {
      return reconstructPath(parent, start, end);
    }

    for (let [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (
        newRow >= 0 &&
        newRow < rows &&
        newCol >= 0 &&
        newCol < cols &&
        grid[newRow][newCol] === 0 &&
        !visited.has(`${newRow},${newCol}`)
      ) {
        queue.push({ row: newRow, col: newCol });
        visited.add(`${newRow},${newCol}`);
        parent[`${newRow},${newCol}`] = `${row},${col}`;
      }
    }
  }

  return null;
}

function reconstructPath(parent, start, end) {
  const path = [];
  let current = `${end.row},${end.col}`;

  while (current !== `${start.row},${start.col}`) {
    const [row, col] = current.split(",").map(Number);
    path.push({ row, col });
    current = parent[current];

    if (!current) return null; // safety check
  }

  path.push(start);
  return path.reverse();
}
