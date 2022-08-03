import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const Links = ({ id, title, name }) => {
  const location = useLocation();
  console.log(location);
  return (
    <li>
      <NavLink state={{ from: location }} to={`/movies/${id}`}>
        {title ? title : name}
      </NavLink>
    </li>
  );
};
