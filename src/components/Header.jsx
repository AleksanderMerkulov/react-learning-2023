import {useEffect, useState} from "react";

export default function Header() {
    const [date, setDate] = useState(new Date())


    useEffect(() => {
        const timer = setInterval(()=>{
            setDate(new Date())
        }, 1000)

        return (()=>{
            clearInterval(timer)
        })
    }, []);



    return (
        <header>
            <div>Логотип</div>
            <div>Время сейчас: {date.toLocaleTimeString()}</div>
        </header>
    )
}
