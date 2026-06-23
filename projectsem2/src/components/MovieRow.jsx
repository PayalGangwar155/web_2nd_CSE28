const movies = [
  "movie1.jpg",
  "movie2.jpg",
  "movie3.jpg",
  "movie4.jpg",
];

function MovieRow() {
  return (
    <section className="movies">
      <h2>Trending Now</h2>

      <div className="movie-row">
        {movies.map((movie, index) => (
          <div className="card" key={index}>
            <img src={movie} alt={`Movie ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default MovieRow;