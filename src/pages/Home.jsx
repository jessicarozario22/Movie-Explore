
import { Link } from "react-router";
import movieBg from "../assets/hero.jpg";

const Home = () => {
  return (
    <div
      className="relative min-h-[600px] bg-gray-950 text-white flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${movieBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/75 to-gray-950/30"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Discover{" "}
          <span className="text-amber-600">
            Movies
          </span>
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-7">
          Watch New Movies. Enjoy your free time.
          Explore and discover your favorite movies from around the world.
        </p>

        {/* Explore Button */}
        <Link
          to="/movies"
          className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-medium transition"
        >
          Explore Movies
        </Link>

      </div>
    </div>
  );
};

export default Home;
