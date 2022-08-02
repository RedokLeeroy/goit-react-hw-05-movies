import { Link } from "./Navigation.styled";
import { ListUl } from "./Navigation.styled";

export const Navigation = () => {
  return (
    <nav>
      <ListUl>
        <li>
          <Link
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/goit-react-hw-05-movies/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/goit-react-hw-05-movies/movies"
          >
            Movies
          </Link>
        </li>
      </ListUl>
    </nav>
  );
};
