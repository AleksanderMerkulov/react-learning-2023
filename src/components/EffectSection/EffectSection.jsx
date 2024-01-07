import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import {useEffect, useState} from "react";

export default function EffectSection() {

    const [isModelOpen, setIsModelOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])

    function openModal() {
        setIsModelOpen(true)
    }



    useEffect(() => {
        //функция создаётся здесь, чтобы не было потерь памяти за счёт создания таких функций каждый раз при вызове компонента
        //не было объяснения почему так, но должно быть именно так
        async function fetchUsers(){
            setLoading(true)
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await response.json()
            setUsers(users)
            setLoading(false)
        }

        fetchUsers()
    }, []);

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

            {loading && (
                <p>loading...</p>
            )}

            {users && (
                <ul>
                    {
                        users.map(user=>{
                            return (<li key={user.id}>{user.name}</li>)
                        })
                    }
                </ul>
            )}
        </section>
    )
}