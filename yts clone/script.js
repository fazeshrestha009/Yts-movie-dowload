const popularMovies = [
    { title: "You", img: "img/you.jpg", rating: "6.8", genres: ["Action", "Thriller"] },
    { title: "13 Reasons Why", img: "img/13reasons.jpg", rating: "8.0", genres: ["Drama", "Mystery"] },
    { title: "House of Dragon", img: "img/hof.jpg", rating: "8.8", genres: ["Fantasy", "Drama"] },
    { title: "Friends", img: "img/frnds2.jpg", rating: "7.8", genres: ["Comedy", "Drama"] }
];
const latestMovies = [
    { title: "Furiosa", img: "img/fur.jpg", rating: "5.8", genres: ["Action", "Adventure"] },
    { title: "Abigail", img: "img/abigail.jpg", rating: "6.8", genres: ["Fantasy", "Adventure"] },
    { title: "Wanda Vision", img: "img/wanda.jpg", rating: "6.8", genres: ["Action", "Sci-Fi"] },
    { title: "Aqua Man", img: "img/aqua.jpg", rating: "5.8", genres: ["Action", "Adventure"] }
];
const upcomingMovies = [
    { title: "Pushpa 2", img: "img/pushpa.jpg", rating: "6.8", genres: ["Action", "Adventure"] },
    { title: "PopEye", img: "img/pop.jpg", rating: "5.8", genres: ["Action", "Comedy"] },
    { title: "Sting", img: "img/sting.jpg", rating: "4.8", genres: ["Action", "Adventure"] },
    { title: "Hocus Pocus 2", img: "img/hoc.jpg", rating: "5.8", genres: ["Fantasy", "Comedy"] }
];
function generateMovieHTML(movie) {
    return `
    <div class="movie">
        <img src="${movie.img}" alt="${movie.title}">
        <div class="movie-details">
            <div class="rating">
             <span class="star">★</span>
             ${movie.rating} / 10
            </div>
            ${movie.genres.map(genre => `<p>${genre}</p>`).join('')}
            <button class="details-btn">View Details</button>
        </div>
        <p class="movie-title">${movie.title}</p>
    </div>`;
}

function renderMovies(sectionId, moviesArray) {
    const section = document.getElementById(sectionId);
    section.innerHTML = moviesArray.map(movie => generateMovieHTML(movie)).join('');
}
renderMovies('popular-movies', popularMovies);
renderMovies('latest-movies', latestMovies);
renderMovies('upcoming-movies', upcomingMovies);

function filterMovies() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const dropdown = document.getElementById('dropdown');
    dropdown.innerHTML = ''; 

    if (searchInput) {
        const filteredMovies = [...popularMovies, ...latestMovies, ...upcomingMovies].filter(movie => 
         movie.title.toLowerCase().includes(searchInput)
        );

        if (filteredMovies.length > 0) {
            dropdown.style.display = 'block'; 
            filteredMovies.forEach(movie => {
                const movieItem = document.createElement('div');
                movieItem.classList.add('dropdown-item');
                movieItem.innerHTML = `
                 <img src="${movie.img}" alt="${movie.title}">
                 <span>${movie.title}</span>
                `;
                movieItem.addEventListener('click', () => {
                 alert(`Selected Movie: ${movie.title}`);
                 dropdown.style.display = 'none'; 
                });
                dropdown.appendChild(movieItem);
            });
        } else {
        dropdown.style.display = 'none'; 
        }
    } else {
        dropdown.style.display = 'none'; 
    }
}
// Event listener haleko search input ko lagi
document.getElementById('searchInput').addEventListener('input', filterMovies);
