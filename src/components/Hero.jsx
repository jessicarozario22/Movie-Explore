
import { Link } from "react-router";
import movieBg from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      className="relative min-h-[600px] bg-gray-950 text-white flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${movieBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/90 to-gray-950/30"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">

          <p className="text-orange-500 font-semibold mb-4">
            🎬 MOVIE EXPLORER
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            Discover Your Next
            <span className="text-orange-500">
              {" "}Favorite Movie
            </span>
          </h1>

          <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-2xl leading-8">
            Explore amazing movies and TV shows from around the world.
            Search for your favorite titles and discover detailed
            information about them.
          </p>

          <div className="mt-8">
            <Link
              to="/movies"
              className="inline-block bg-orange-500 hover:bg-orange-600
              text-white font-semibold px-7 py-3 rounded-lg
              transition duration-300 hover:scale-105"
            >
              Explore Movies →
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

