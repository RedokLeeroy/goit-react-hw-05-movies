import {NavLink} from "react-router-dom";

export const Links = ({id, title, name}) => {
    return (<li>
        <NavLink to={`movies/${id}`}>{title?title:name}</NavLink>
    </li>)
}