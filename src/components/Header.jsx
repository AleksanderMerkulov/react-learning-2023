import {useState} from "react";

export default function Header() {
    const [date, setDate] = useState(new Date())

    setTimeout(()=>{
        setDate(new Date())
    }, 1000)

    return (
        <header>
            <div>Логотип</div>
            <div>Время сейчас: {date.toLocaleTimeString()}</div>
        </header>
    )
}
