import {useParams} from "react-router-dom";
import './List.css'

const data = [
    {
        title: "1",
        desc: ""
    },
    {
        title: "2",
        desc: ""
    },
    {
        title: "3",
        desc: ""
    },
    {
        title: "4",
        desc: ""
    },
]

export default function List({id}){

    const params = useParams()

    return(
        <>
        {params.id && (
            <h1>{params.id}</h1>
        )}
        <ul>
            {data.map((el, index)=> {
                return(
                    <li key={'listItem' + index}>{el.title}</li>
                )
            })}
        </ul>
        </>
    )
}