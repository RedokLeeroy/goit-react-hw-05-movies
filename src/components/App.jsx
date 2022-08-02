import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Trend } from "./Trends/Trends";
// import { MovieDetails } from "./MovieDetails/MovieDetails";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";
import { MovieSearch } from "./MovieSearch/MovieSearch";
import { Suspense, lazy } from "react";

const MovieDetailsLazy = lazy(() => import("./MovieDetails"));
export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<Layout />}>
          <Route index element={<Trend />} />
          <Route
            path="/goit-react-hw-05-movies/movies"
            element={<MovieSearch />}
          ></Route>
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={<MovieDetailsLazy />}
          >
            <Route path="cast" element={<Cast />} />

            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
