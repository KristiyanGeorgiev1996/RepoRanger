# RepoRanger
📊 GitHub Repository Dashboard – Quickly visualize stars, forks, and activity for your repositories. Personal project with MIT license.

![RepoRanger Screenshot](Images/RepoRanger-Screenshot.png)

[RepoRanger Docs / GitHub Pages](https://kristiyangeorgiev1996.github.io/RepoRanger/)

![Last Commit](https://img.shields.io/github/last-commit/KristiyanGeorgiev1996/RepoRanger)
![Repo Size](https://img.shields.io/github/repo-size/KristiyanGeorgiev1996/RepoRanger)
![Issues](https://img.shields.io/github/issues/KristiyanGeorgiev1996/RepoRanger)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![HTML5](https://img.shields.io/badge/HTML5-CSS3-orange)
![Chart.js](https://img.shields.io/badge/Chart.js-Graphing-blue)
![License](https://img.shields.io/badge/License-MIT-green)
![Stars](https://img.shields.io/github/stars/KristiyanGeorgiev1996/RepoRanger)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Version](https://img.shields.io/github/v/release/KristiyanGeorgiev1996/RepoRanger)

RepoRanger is a **client-side dashboard** that displays key metrics for GitHub repositories, including stars, forks, and last push.

It is a personal project designed for learning, visualization, and efficiently tracking repositories.

---

## 📌 Features

- Fetches all public repositories of a GitHub user  
- Displays stars, forks, and last push date for each repository  
- Interactive visualization with charts (Chart.js)  
- Responsive layout for desktop and mobile devices  
- Easy navigation to repository links  
- Live updates when refreshing the dashboard  

---

## 📁 Project Structure

```text
RepoRanger/
│   ├─ index.html            <- Main HTML page
│   ├─ script.js             <- Main JS logic for fetching and rendering
│   ├─ styles.css            <- CSS styling
│   ├─ Images/               <- Screenshots and GIFs
│   ├─ docs/                 <- Documentation files
│   │   ├─ index.md
│   │   ├─ installation.md
│   │   └─ usage.md
│   ├─ LICENSE
└── README.md
```

---

## ⚙️ Installation

Follow the steps below to run RepoRanger locally:

```bash
# Clone the repository
git clone https://github.com/KristiyanGeorgiev1996/RepoRanger.git

# Enter the folder
cd RepoRanger

# Open index.html in your browser
open index.html  # or double-click the file
```

> ⚠️ RepoRanger works entirely client-side (no backend). It can be extended with Node.js/Express for additional features.

---

## 💻 Usage

1. Enter your GitHub username  
2. View the list of repositories with stars, forks, and last activity  
3. Click on a repository to see detailed statistics  
4. Charts display repository trends interactively  

See the [Usage guide](docs/usage.md) for screenshots and instructions.

---

## 📚 Documentation

Detailed documentation is available in the **docs folder**.

- 📦 [Installation Guide](docs/installation.md)
- 💻 [Usage Guide](docs/usage.md)
- 👨‍💻 [Developer Guide](docs/developer-guide.md)

You can also browse the documentation as a landing page:

🔗 [RepoRanger Docs / GitHub Pages](https://kristiyangeorgiev1996.github.io/RepoRanger/)

---

## ⚠️ Security

- No sensitive data is required (client-side application)  
- If extended with API tokens in the future, use `.env` and never commit credentials  

---

## 📜 License

MIT License – free to use, but always credit the author.

---

## 📞 Contact

- **Author:** Kristiyan Georgiev  
- **GitHub:** [KristiyanGeorgiev1996](https://github.com/KristiyanGeorgiev1996)  
- **Email:** georgievk1996@gmail.com  

---

## ⭐ Acknowledgements

- GitHub API – for fetching repository data  
- Chart.js – for interactive charts  
- All open-source tools that make development easier
