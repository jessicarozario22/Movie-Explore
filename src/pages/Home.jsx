import { useState } from "react";
import MoviesModal from "../components/MovieModal";

const Home = () => {
    const [click, setClick] = useState(false);

    return (
        <div>
            <div className="text-center">
                <h1 className="text-6xl text-amber-500 font-bold">
                    Discover{" "}
                    <span className="text-amber-700 font-extrabold">
                        Movies
                    </span>
                </h1>

                <p className="py-4 max-w-md mx-auto text-md text-amber-300">
                    Watch New Movies. Enjoy your free time.
                    Explore and discover your favorite movies from around the world.
                </p>
            </div>

            <div className="flex justify-center">
                <button
                    type="button"
                    onClick={() => setClick(true)}
                    className="text-white text-lg font-medium
          bg-amber-500 px-5 py-2 rounded-4xl
          hover:scale-105 transition-all"
                >
                    Watch Now
                </button>
            </div>

            {click && (
                <MoviesModal
                    onClose={() => setClick(false)}
                />
            )}
        </div>
    );
};

export default Home;