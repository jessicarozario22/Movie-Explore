import { useEffect, useState } from "react";
import MovieDetailsModal from "../components/MovieModal";

const MovieExplorer = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const response = await fetch("https://api.tvmaze.com/shows");
        const data = await response.json();

        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setSearch(value);

    if (!value.trim()) {
      try {
        setLoading(true);

        const response = await fetch("https://api.tvmaze.com/shows");
        const data = await response.json();

        setMovies(data);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setLoading(false);
      }

      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(value)}`
      );

      const data = await response.json();

      setMovies(data.map((item) => item.show));
    } catch (error) {
      console.error("Search failed:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-950 text-white px-4 sm:px-6 py-10">
      <div className="max-w-7xl mx-auto">

     
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Explore <span className="text-orange-500">Movies</span>
          </h1>

          <p className="text-gray-400 mt-3">
            Search and discover your favorite movies and shows.
          </p>
        </div>

        
        <div className="max-w-2xl mx-auto mb-10">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="🔍 Search for a movie..."
            className="w-full px-5 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white outline-none focus:border-orange-500 transition"
          />
        </div>

       
        {loading && (
          <div className="flex justify-center py-20">
            <div className="w-10 h-10 border-4 border-gray-700 border-t-orange-500 rounded-full animate-spin"></div>
          </div>
        )}

      
        {!loading && movies.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {movies.map((movie) => (
              <div
                key={movie.id}
                className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500/50 transition"
              >
               
                <div className="h-[350px] bg-gray-800">
                  {movie.image?.medium ? (
                    <img
                      src={movie.image.medium}
                      alt={movie.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center text-gray-500">
                      No Image
                    </div>
                  )}
                </div>

                
                <div className="p-4">
                  <h2 className="text-lg font-semibold truncate">
                    {movie.name}
                  </h2>

                  <div className="flex justify-between text-sm mt-3">
                    <span className="text-yellow-400">
                      ⭐ {movie.rating?.average || "N/A"}
                    </span>

                    <span className="text-gray-400">
                      {" "}
                      {movie.premiered
                        ? movie.premiered.slice(0, 4)
                        : "N/A"}
                    </span>
                  </div>

             
                  <button
                    type="button"
                    onClick={() => setSelectedMovie(movie)}
                    className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 rounded-lg transition"
                  >
                    See Details
                  </button>
                </div>
              </div>
            ))}

          </div>
        )}

        {/* No Results */}
        {!loading && movies.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p className="text-xl">No movies found.</p>
            <p className="text-sm mt-2">
              Try searching with another movie title.
            </p>
          </div>
        )}

        {/* Movie Details Modal */}
        {selectedMovie && (
          <MovieDetailsModal
            movie={selectedMovie}
            onClose={() => setSelectedMovie(null)}
          />
        )}

      </div>
    </section>
  );
};

export default MovieExplorer;