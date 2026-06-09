import newsData from './newsData.js';

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split('-').map(Number);

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(year, month - 1, day));
}

function excerpt(content, maxLength = 145) {
  if (content.length <= maxLength) return content;
  return `${content.slice(0, maxLength).trim()}...`;
}

function createNewsItem(item) {
  return `
    <article class="home-news-item">
      <p class="home-news-date">${formatDate(item.date)}</p>
      <h3>${escapeHtml(item.title)}</h3>
      <p>${escapeHtml(excerpt(item.content))}</p>
    </article>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('home-latest-news');
  if (!container) return;

  const latestNews = [...newsData]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  container.innerHTML = latestNews.map(createNewsItem).join('');
});
