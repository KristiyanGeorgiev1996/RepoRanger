const username = "ТВОЕТО_ИМЕ_В_GITHUB"; // смени с твоето GitHub потребителско име
const repoContainer = document.getElementById("repo-container");

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
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
    })
    .catch(err => console.error("Грешка при извличане на репа:", err));
