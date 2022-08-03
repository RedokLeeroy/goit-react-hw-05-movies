import { Routes, Route } from "react-router-dom";
// import { Layout } from "./Pages/Layout/Layout";
// import { Trend } from "./Pages/Trends/Trends";
// import { MovieDetails } from "./MovieDetails/MovieDetails";
// import { Cast } from "./Pages/Cast/Cast";
// import { Reviews } from "./Pages/Reviews/Reviews";
// import { MovieSearch } from "./Pages/MovieSearch/MovieSearch";
import { Suspense, lazy } from "react";

const MovieDetailsLazy = lazy(() => import("./Pages/MovieDetails"));
const MovieSearchLazy = lazy(() => import("./Pages/MovieSearch"));
const LayoutLazy = lazy(() => import("./Pages/Layout"));
const TrendLazy = lazy(() => import("./Pages/Trends"));
const CastLazy = lazy(() => import("./Pages/Cast"));
const ReviewsLazy = lazy(() => import("./Pages/Reviews"));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<LayoutLazy />}>
          <Route index element={<TrendLazy />} />
          <Route
            path="/goit-react-hw-05-movies/movies"
            element={<MovieSearchLazy />}
          ></Route>
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={<MovieDetailsLazy />}
          >
            <Route path="cast" element={<CastLazy />} />

            <Route path="reviews" element={<ReviewsLazy />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
