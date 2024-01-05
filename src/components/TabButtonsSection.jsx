import Button from "./Button/Button";
import {Content} from "./data";
import {useState} from "react";


export default function TabButtonsSection() {

    const [contentType, setContentType] = useState(null)

    function handleClick(type) {

        setContentType(type)
    }

    return (
        <section>
            <Button isActive={contentType === 'ways'} onClick={() => handleClick("ways")}>Пути</Button>
            <Button isActive={contentType === 'easy'} onClick={() => handleClick("easy")}>Возможности</Button>
            <Button isActive={contentType === 'program'} onClick={() => handleClick("program")}>Программа</Button>
            {contentType && <p>{Content[contentType]}</p>}
            {!contentType && <p>Нажми на кнопку</p>}
        </section>

    )
}