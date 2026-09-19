import { Link } from "react-router";

const Hero = () => {
  return (
    <section>
   
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl">

          <p className="text-orange-500 font-semibold mb-4">
            MOVIE EXPLORER
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
              className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg"
            >
              Explore Movies
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

