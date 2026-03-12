const username = "KristiyanGeorgiev1996";
const repoContainer = document.getElementById("repo-container");

let allRepos = []; // ще пази репата за сортиране

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
        allRepos = repos;

        // Показваме summary без commits за момента
        updateSummary(repos, 0);

        // Изчисляваме общи commits асинхронно
        getTotalCommits(repos).then(totalCommits => {
            updateSummary(repos, totalCommits);
        });

        // Показваме репата
        displayRepos(repos);
    })
    .catch(err => console.error("Грешка при извличане на репа:", err));

function displayRepos(repos) {
    repoContainer.innerHTML = '';
    repos.forEach(repo => {
        const card = document.createElement("div");
        card.classList.add("repo-card");

        card.innerHTML = `
            <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
            <p>${repo.description || "Няма описание"}</p>
            <p>⭐ Stars: ${repo.stargazers_count} | 🍴 Forks: ${repo.forks_count}</p>
            <p>Последен push: ${new Date(repo.pushed_at).toLocaleDateString()}</p>
        `;
        repoContainer.appendChild(card);
    });
}

function updateSummary(repos, totalCommits) {
    const totalRepos = repos.length;
    const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
    const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0);

    document.getElementById("total-repos").textContent = totalRepos;
    document.getElementById("total-stars").textContent = totalStars;
    document.getElementById("total-forks").textContent = totalForks;
    document.getElementById("total-commits").textContent = totalCommits;
}

// Функция за общи commits
async function getTotalCommits(repos) {
    let total = 0;
    for (const repo of repos) {
        try {
            const branch = repo.default_branch;
            const response = await fetch(`https://api.github.com/repos/${username}/${repo.name}/commits?per_page=1&sha=${branch}`);
            const linkHeader = response.headers.get('Link');
            if (linkHeader) {
                // Парсваме последния page number за общи commits
                const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
                if (match) total += parseInt(match[1]);
                else total += 1;
            } else {
                const data = await response.json();
                total += data.length;
            }
        } catch (err) {
            console.error(`Грешка при commits на ${repo.name}:`, err);
        }
    }
    return total;
}

// Сортиране
function sortRepos(criteria) {
    let sorted = [...allRepos];
    if(criteria === 'stars') {
        sorted.sort((a,b) => b.stargazers_count - a.stargazers_count);
    } else if(criteria === 'forks') {
        sorted.sort((a,b) => b.forks_count - a.forks_count);
    } else if(criteria === 'pushed') {
        sorted.sort((a,b) => new Date(b.pushed_at) - new Date(a.pushed_at));
    }
    displayRepos(sorted);
}

// Глобална функция за бутоните
window.sortRepos = sortRepos;
