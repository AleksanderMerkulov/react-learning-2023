import {useEffect, useState} from "react";

export default function TestAPI(){

    const [data, setData] = useState({})

    useEffect(() => {
        async function fetchEvent(){
            const response = await fetch("http://127.0.0.1:8000/api/v1/events/1/")
            const data = await response.json()

            setData(data)
        }

        fetchEvent()
    }, []);

    return(
        <div>
            {data?.title}
        </div>
    )
}
