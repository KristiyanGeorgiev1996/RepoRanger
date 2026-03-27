# Developer Guide

This guide explains the internal structure of RepoRanger.

---

## Project Structure
```
RepoRanger/
│
├── index.html
├── script.js
├── style.js
│
├── docs/
│  ├── index.md
│  ├── installation.md
│  ├── usage.md
│  ├── screenshots
│  └── READMe.md
└── README.md
```


---

## Architecture

RepoRanger is a **client-side web application**.

The application works as follows:

1. User enters GitHub username
2. JavaScript sends request to GitHub API
3. Repository data is fetched
4. Data is rendered in the dashboard
5. Charts are generated with Chart.js

---

## Main Components

### app.js

Handles:

- API requests
- Data parsing
- UI rendering

---

### chart.js

Responsible for:

- Creating charts
- Visualizing repository statistics

---

### styles.css

Contains all styling rules for the dashboard.

---

## Future Improvements

Possible improvements include:

- Filtering repositories by language
- Sorting by stars or activity
- Adding authentication for private repositories
- Backend support using Node.js
