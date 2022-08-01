import { Links } from "components/Links/Links";
import { nanoid } from "nanoid";
export const Trend = ({data, title}) => {
    return (<>
    <h2>{title}</h2>
    <ul>
            {data.map(({id, title, name}) => {return <Links key={nanoid()} id={id} title={title} name={name}></Links>})}
    </ul>
    </>)
}