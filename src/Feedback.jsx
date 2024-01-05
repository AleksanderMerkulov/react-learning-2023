import {useState} from "react";
import Button from "./components/Button/Button";


export default function Feedback(){

    const [form, setForm] = useState({
        name: "",
        reason: 'error',
        hasError: false,
    })

    // const [name, setName] = useState('')
    // const [reason, setReason] = useState('error')

    function handleName(event){
        setForm((prevState) => {
            return {
                ...prevState,
                name: event.target.value,
            }
        })
    }

    function handleReason(event){
        setForm(prevState => {
            return {
                ...prevState,
                reason: event.target.value,
            }
        })
    }

    return (
        <>
            <h3>Обратная связь</h3>
            <form >
                <label htmlFor="name">Ваше имя:</label>
                <input type="text" id={'name'} onChange={e => handleName(e)}/>

                <label htmlFor="reason">Причина обращения:</label>
                <select name="reason" id="reason" onChange={e => handleReason(e)}>
                    <option value="error">Ошибка</option>
                    <option value="help">Помощь</option>
                    <option value="suggest">Предложение решение</option>
                </select>

                <Button>Отправить</Button>
            </form>
            <div>
                <p>Name: {form.name}</p>
                <p>Reason: {form.reason}</p>
            </div>
        </>
    )
}