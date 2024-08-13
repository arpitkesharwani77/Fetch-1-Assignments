document.getElementById("search-btn").addEventListener("click", fetchMovie);

async function fetchMovie() {
    const title = document.getElementById("movie-title").value;
    const apiKey = "13c6dc50"  // Replace with your actual API key
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`;

    try {
        const res = await fetch(url);
        const data = await res.json();
        
        if (data.Response === "True") {
            displayMovie(data);
        } else {
            document.getElementById("movie-info").innerHTML = `<p>Movie not found!</p>`;
        }
    } catch (error) {
        console.log("Something went wrong!", error);
        document.getElementById("movie-info").innerHTML = `<p>Something went wrong. Please try again later.</p>`;
    }
}

function displayMovie(movie) {
    const movieInfo = `
        <img src="${movie.Poster}" alt="${movie.Title}" class="movie-poster">
        <div class="movie-title">${movie.Title}</div>
        <div class="movie-year">${movie.Year}</div>
        <div class="movie-plot">${movie.Plot}</div>
    `;
    document.getElementById("movie-info").innerHTML = movieInfo;
}
