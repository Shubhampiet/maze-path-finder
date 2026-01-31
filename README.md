# 🧩 Maze Solver & Visualizer

## 📌 About the Assignment

This project implements a maze-solving engine using the Breadth-First Search (BFS) algorithm and visualizes the traversal and shortest path in a grid-based UI.

The primary focus of this assignment is on:

- Pathfinding logic
- Grid traversal
- Algorithmic problem solving
- Clean separation between logic and visualization

The visualization highlights:
- Walls (blocked cells)
- Open paths
- Start and End points
- Explored cells during traversal
- Final shortest path

---

## 🧠 Algorithm Used

Breadth-First Search (BFS)

BFS was chosen because:

- It guarantees the shortest path in an unweighted grid.
- It explores nodes level-by-level.
- It is well-suited for grid-based traversal problems.

### Time Complexity
O(m × n)

### Space Complexity
O(m × n)

## 🏗️ Project Structure

src/
├── algorithms/
│ └── bfs.js
│
├── components/
│ ├── MazeGrid.jsx
│ └── Cell.jsx
│
├── data/
│ └── sampleMaze.js
│
├── utils/
│ └── generateMaze.js
│
├── App.jsx
├── main.jsx
└── styles.css

### Separation of Concerns

- All pathfinding logic is inside `algorithms/`
- UI rendering is handled in `components/`
- Maze generation is handled in `utils/`
- The visualization layer does not contain algorithm logic

---

## ⚙️ Assumptions Made

- The maze is represented as a 2D array.
- `0` represents a walkable cell.
- `1` represents a blocked cell (wall).
- Movement is allowed only in four directions:
  - Up
  - Down
  - Left
  - Right
- The maze is unweighted.
- Start position defaults to `(0,0)`.
- End position defaults to `(rows - 1, cols - 1)`.

---

## 🎨 Features

- Grid-based maze visualization
- Start and End cell highlighting
- BFS traversal animation
- Highlighting of explored cells
- Animated shortest path visualization
- Handles no-path scenarios gracefully
- Dynamic maze generation
- Adjustable animation speed

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
cd <project-folder>
2️⃣ Install Dependencies
bash
Copy code
npm install

3️⃣ Run the Project
bash
npm run dev

Then open:
http://localhost:5173

🧪 How It Works
Click Solve to run BFS.

Explored cells are highlighted during traversal.

The shortest path is animated separately once found.

If no path exists, the system notifies the user.

Optionally generate a new maze dynamically.

📌 Conclusion
This project demonstrates:

Strong understanding of graph traversal algorithms

Clean code structure

Proper separation between logic and UI

Handling of edge cases

Visual algorithm representation