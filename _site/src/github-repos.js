function fetchGitHubRepos() {
    const username = 'alpha-davidson';
    const reposContainer = document.getElementById('github-repos');
  
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => response.json())
      .then(repos => {
        repos.forEach(repo => {
          const repoElement = document.createElement('div');
          repoElement.className = 'repo-item';
          repoElement.innerHTML = `
            <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
            <p>${repo.description || 'No description available'}</p>
            <p>Stars: ${repo.stargazers_count} | Forks: ${repo.forks_count}</p>
          `;
          reposContainer.appendChild(repoElement);
        });
      })
      .catch(error => {
        console.error('Error fetching GitHub repos:', error);
        reposContainer.innerHTML = 'Error loading repositories. Please try again later.';
      });
  }
  
  document.addEventListener('DOMContentLoaded', fetchGitHubRepos);