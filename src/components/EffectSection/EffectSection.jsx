import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import {useState} from "react";

export default function EffectSection() {

    const [isModelOpen, setIsModelOpen] = useState(false)

    function openModal() {
        setIsModelOpen(true)
    }

    return (
        <section>
            <h1>Effect</h1>

            <Button onClick={openModal}>Открыть информацию</Button>

            <Modal open={isModelOpen}>
                <h3>Это модальное окно</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea ipsum iste maxime, nam quo soluta unde.
                    Culpa ipsam laborum perferendis!</p>
                <Button onClick={()=>setIsModelOpen(false)}>Закрыть</Button>
            </Modal>
        </section>
    )
}