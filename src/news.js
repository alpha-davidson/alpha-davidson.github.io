import newsData from './newsData.js';

function initializeNewsPage() {
    if (!newsData || !Array.isArray(newsData) || newsData.length === 0) {
        console.error('News data not loaded correctly');
        return;
    }

    displayLatestNews();
    displayAllNews();
    createArchiveYears();
    setupEventListeners();
}

function displayLatestNews() {
    const latestNews = newsData.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
    const latestNewsContainer = document.getElementById('latestNews');
    if (latestNewsContainer) {
        latestNewsContainer.innerHTML = latestNews.map(createNewsCard).join('');
    }
}

function createNewsCard(item) {
    const imageSource = item.images && item.images.length > 0 ? item.images[0].image || item.images[0] : item.image;
    return `
        <div class="news-card">
            <img src="${imageSource || ''}" alt="${item.title}">
            <div class="news-card-content">
                <h3>${item.title}</h3>
                <p>${item.content.substring(0, 100)}...</p>
                <p><small>${new Date(item.date).toLocaleDateString()}</small></p>
                <button onclick="openNewsModal(${item.id})">Read More</button>
            </div>
        </div>
    `;
}

function randomizeCardHeights() {
    const cards = document.querySelectorAll('.news-card');
    cards.forEach(card => {
        const randomHeight = Math.floor(Math.random() * (150 - 50 + 1)) + 50; // Random height between 50px and 150px
        card.style.height = `${randomHeight}px`;
    });
}

function displayAllNews() {
    const allNewsContainer = document.getElementById('archiveNews');
    if (allNewsContainer) {
        allNewsContainer.innerHTML = newsData.map(createNewsCard).join('');
    }
}

function createArchiveYears() {
    const years = [...new Set(newsData.map(item => new Date(item.date).getFullYear()))].sort((a, b) => b - a);
    const archiveYearsContainer = document.getElementById('archiveYears');
    if (archiveYearsContainer) {
        archiveYearsContainer.innerHTML = `
            <button onclick="displayAllNews()" class="active">All</button>
            ${years.map(year => 
                `<button onclick="displayArchiveNews(${year})">${year}</button>`
            ).join('')}
        `;
    }
}

function displayArchiveNews(year) {
    const archiveNews = year ? 
        newsData.filter(item => new Date(item.date).getFullYear() === year) : 
        newsData;
    const archiveNewsContainer = document.getElementById('archiveNews');
    if (archiveNewsContainer) {
        archiveNewsContainer.innerHTML = archiveNews.map(createNewsCard).join('');
    }
    
    // Update active year button
    const yearButtons = document.querySelectorAll('#archiveYears button');
    yearButtons.forEach(btn => {
        btn.classList.toggle('active', 
            (year && btn.textContent == year) || (!year && btn.textContent == 'All'));
    });
}

function createCarousel(images) {
    return `
        <div id="newsCarousel" class="carousel">
            <div class="carousel-inner">
                ${images.map((img, index) => `
                    <div class="carousel-item ${index === 0 ? 'active' : ''}">
                        <img src="${img.image || img}" alt="News Image">
                        ${img.caption ? `<p class="carousel-caption">${img.caption}</p>` : ''}
                    </div>
                `).join('')}
            </div>
            ${images.length > 1 ? `
                <button class="carousel-control prev" onclick="moveCarousel(-1)">&#10094;</button>
                <button class="carousel-control next" onclick="moveCarousel(1)">&#10095;</button>
            ` : ''}
        </div>
    `;
}

function openNewsModal(id) {
    const item = newsData.find(news => news.id === id);
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    if (modal && modalTitle && modalBody && item) {
        modalTitle.textContent = item.title;
        
        let imageHtml = '';
        if (item.images && item.images.length > 0) {
            imageHtml = createCarousel(item.images);
        } else if (item.image) {
            imageHtml = `<img src="${item.image}" alt="${item.title}">`;
        }
        
        modalBody.innerHTML = `
            ${imageHtml}
            <p>${item.content}</p>
            <p><small>Published on ${new Date(item.date).toLocaleDateString()}</small></p>
        `;
        
        modal.style.display = 'block';
    }
}

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const activeItem = carousel.querySelector('.carousel-item.active');
    let nextIndex = Array.from(items).indexOf(activeItem) + direction;

    if (nextIndex < 0) nextIndex = items.length - 1;
    if (nextIndex >= items.length) nextIndex = 0;

    activeItem.classList.remove('active');
    items[nextIndex].classList.add('active');
}

function setupEventListeners() {
    // Close modal
    const closeButton = document.querySelector('.close');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            const modal = document.getElementById('modal');
            if (modal) modal.style.display = 'none';
        });
    }

    // Search functionality
    const searchButton = document.getElementById('searchButton');
    const searchInput = document.getElementById('searchInput');
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => performSearch(searchInput.value));
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }

    // Newsletter subscription
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = document.getElementById('emailInput');
            if (emailInput) {
                const email = emailInput.value;
                if (validateEmail(email)) {
                    alert('Thank you for subscribing!');
                    this.reset();
                } else {
                    alert('Please enter a valid email address.');
                }
            }
        });
    }
}

function performSearch(searchTerm) {
    const searchResultsContainer = document.getElementById('searchResults');
    if (searchResultsContainer) {
        searchTerm = searchTerm.toLowerCase();
        const searchResults = newsData.filter(item => 
            item.title.toLowerCase().includes(searchTerm) || 
            item.content.toLowerCase().includes(searchTerm) ||
            (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
        );
        
        if (searchResults.length > 0) {
            searchResultsContainer.innerHTML = `
                <h2>Search Results</h2>
                <div class="news-grid">
                    ${searchResults.map(createNewsCard).join('')}
                </div>
            `;
        } else {
            searchResultsContainer.innerHTML = '<h2>Search Results</h2><p>No results found.</p>';
        }
        
        searchResultsContainer.style.display = 'block';
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

window.openNewsModal = openNewsModal;
window.displayArchiveNews = displayArchiveNews;
window.displayAllNews = displayAllNews;
window.moveCarousel = moveCarousel;

document.addEventListener('DOMContentLoaded', initializeNewsPage);