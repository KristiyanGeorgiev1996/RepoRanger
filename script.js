const username = "KristiyanGeorgiev1996";
const repoContainer = document.getElementById("repo-container");

let allRepos = []; // ще пази репата за сортиране

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
        allRepos = repos;

        // Показваме summary
        updateSummary(repos);

        // Показваме репата
        displayRepos(repos);
    })
    .catch(err => console.error("Грешка при извличане на репа:", err));

function displayRepos(repos) {
    repoContainer.innerHTML = ''; // чистим контейнера
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

function updateSummary(repos) {
    const totalRepos = repos.length;
    const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
    const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0);

    document.getElementById("total-repos").textContent = totalRepos;
    document.getElementById("total-stars").textContent = totalStars;
    document.getElementById("total-forks").textContent = totalForks;
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
