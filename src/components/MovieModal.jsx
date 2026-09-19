import { X } from "lucide-react";


const MovieDetailsModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-gray-900 text-white shadow-2xl rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Close Icon */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-black/60 p-2 rounded-full text-white hover:text-orange-500 transition"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row">

          {/* Poster */}
          <div className="w-full md:w-2/5 h-[400px] md:h-[550px] bg-gray-800">
            {movie.image?.original || movie.image?.medium ? (
              <img
                src={movie.image?.original || movie.image?.medium}
                alt={movie.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="h-full flex items-center justify-center text-gray-500">
                No Image
              </div>
            )}
          </div>

          {/* Details */}
          <div className="w-full md:w-3/5 p-6">

            {/* Title */}
            <h2 className="text-3xl font-bold text-orange-500">
              {movie.name}
            </h2>

            {/* Rating / Year / Status */}
            <div className="flex flex-wrap gap-4 mt-4 text-sm">

              <span className="text-yellow-400">
                ⭐ {movie.rating?.average || "N/A"}
              </span>

              <span className="text-gray-300">
                📅{" "}
                {movie.premiered
                  ? movie.premiered.slice(0, 4)
                  : "N/A"}
              </span>

              {movie.status && (
                <span className="text-gray-300">
                  🎬 {movie.status}
                </span>
              )}

            </div>

            {/* Genres */}
            {movie.genres?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-5">
                {movie.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-3 py-1 text-xs bg-orange-500/20 text-orange-400 rounded-full"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            )}

            {/* Language */}
            {movie.language && (
              <p className="mt-5 text-gray-400">
                <span className="text-white font-medium">
                  Language:
                </span>{" "}
                {movie.language}
              </p>
            )}

            {/* Summary */}
            <div className="mt-5">
              <h3 className="text-lg font-semibold mb-2">
                About
              </h3>

              <div
                className="text-gray-400 text-sm leading-6"
                dangerouslySetInnerHTML={{
                  __html:
                    movie.summary || "No description available.",
                }}
              />
            </div>

            {/* Close */}
            <button
              type="button"
              onClick={onClose}
              className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2.5 rounded-xl transition"
            >
              Close
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;