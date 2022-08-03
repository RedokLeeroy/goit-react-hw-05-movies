import LoaderSpinner from "./Loader/Loader";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const MovieDetailsLazy = lazy(() => import("./Pages/MovieDetails"));
const MovieSearchLazy = lazy(() => import("./Pages/MovieSearch"));
const LayoutLazy = lazy(() => import("./Pages/Layout"));
const TrendLazy = lazy(() => import("./Pages/Trends"));
const CastLazy = lazy(() => import("./Pages/Cast"));
const ReviewsLazy = lazy(() => import("./Pages/Reviews"));

export const App = () => {
  return (
    <Suspense fallback={<LoaderSpinner />}>
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
