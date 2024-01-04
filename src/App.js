import Header from "./components/Header";
import List from "./components/List/List";
import Button from "./components/Button/Button";
import {Content} from "./components/data"
import {useState} from "react";


function App() {

    const [contentType, setContentType] = useState(null)

    function handleClick(type) {

        setContentType(type)
    }

    return (
        <div className="container-xl App">
            <Header/>
            <main>
                <section>
                    <List/>
                    <Button isActive={contentType==='ways'} onClick={()=>handleClick("ways")}>Пути</Button>
                    <Button isActive={contentType==='easy'} onClick={()=>handleClick("easy")}>Возможности</Button>
                    <Button isActive={contentType==='program'} onClick={()=>handleClick("program")}>Программа</Button>
                    {contentType && <p>{Content[contentType]}</p> }
                    {!contentType && <p>Нажми на кнопку</p> }
                </section>
            </main>
        </div>
    );
}

export default App;
