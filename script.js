const username = "KristiyanGeorgiev1996";
const repoContainer = document.getElementById("repo-container");
const languageFilter = document.getElementById("languageFilter");

let allRepos = [];
let commitChartInstance = null;

fetch(`https://api.github.com/users/${username}/repos`)
.then(res => res.json())
.then(async repos => {
    allRepos = repos;

    populateLanguages(repos);
    updateSummary(repos, 0);

    await loadCommits(repos);

    displayRepos(repos);
    createChart(repos);
});

async function loadCommits(repos) {
    let total = 0;

    for (const repo of repos) {
        try {
            const response = await fetch(
                `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1`
            );

            const link = response.headers.get("Link");
            let commits = 0;

            if (link) {
                const match = link.match(/page=(\d+)>; rel="last"/);
                if (match) commits = parseInt(match[1]);
            } else {
                const data = await response.json();
                if (Array.isArray(data) && data.length > 0) {
                    commits = data.length;
                }
            }

            repo.commitCount = commits;
            total += commits;
        } catch {
            repo.commitCount = 0;
        }
    }

    updateSummary(repos, total);
}

function displayRepos(repos) {
    repoContainer.innerHTML = "";

    repos.forEach(repo => {
        const card = document.createElement("div");
        card.classList.add("repo-card");

        card.innerHTML = `
            <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
            <p>${repo.description || "Няма описание"}</p>
            <p>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
            <p>📦 Commits: ${repo.commitCount || 0}</p>
            <p>Language: ${repo.language || "Unknown"}</p>
            <p>Last push: ${new Date(repo.pushed_at).toLocaleDateString()}</p>
        `;

        repoContainer.appendChild(card);
    });
}

function updateSummary(repos, totalCommits) {
    document.getElementById("total-repos").textContent = repos.length;

    document.getElementById("total-stars").textContent =
        repos.reduce((s, r) => s + r.stargazers_count, 0);

    document.getElementById("total-forks").textContent =
        repos.reduce((s, r) => s + r.forks_count, 0);

    document.getElementById("total-commits").textContent = totalCommits;
}

function sortRepos(criteria) {
    let sorted = [...allRepos];

    if (criteria === "stars")
        sorted.sort((a, b) => b.stargazers_count - a.stargazers_count);

    if (criteria === "forks")
        sorted.sort((a, b) => b.forks_count - a.forks_count);

    if (criteria === "pushed")
        sorted.sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

    if (criteria === "commits")
        sorted.sort((a, b) => (b.commitCount || 0) - (a.commitCount || 0));

    displayRepos(sorted);
    createChart(sorted);
}

window.sortRepos = sortRepos;

function populateLanguages(repos) {
    const langs = new Set();

    repos.forEach(r => {
        if (r.language) langs.add(r.language);
    });

    langs.forEach(lang => {
        const option = document.createElement("option");
        option.value = lang;
        option.textContent = lang;
        languageFilter.appendChild(option);
    });
}

languageFilter.addEventListener("change", () => {
    const lang = languageFilter.value;

    if (lang === "all") {
        displayRepos(allRepos);
        createChart(allRepos);
    } else {
        const filtered = allRepos.filter(r => r.language === lang);
        displayRepos(filtered);
        createChart(filtered);
    }
});

function createChart(repos) {
    const ctx = document.getElementById("commitChart").getContext("2d");

    const labels = repos.map(r => r.name);
    const commits = repos.map(r => r.commitCount || 0);

    if (commitChartInstance) {
        commitChartInstance.destroy();
    }

    commitChartInstance = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Commits per Repo",
                data: commits,
                borderWidth: 1,
                barThickness: 18
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "y",
            plugins: {
                legend: {
                    display: true
                },
                tooltip: {
                    enabled: true
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    ticks: {
                        precision: 0
                    }
                },
                y: {
                    ticks: {
                        autoSkip: false
                    }
                }
            }
        }
    });
}

document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});
