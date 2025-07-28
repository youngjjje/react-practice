import {useState} from 'react'


function sendMessage(message) {
    
}


function Form() {
    const [to, setTo] = useState('Alice')
    const [isSent, setIsSent] = useState(false)
    const [message, setMessage] = useState('Hello')

    function handleSubmit(e) {
        e.preventDefault()
        setTimeout(() => {
            alert(`You said ${message} to ${to}`)
        }, 5000)
    }

    if (isSent) {
        return <h1>Your message is on its way!</h1>
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    To:{' '}
                    <select value={to} onChange={e => setTo(e.target.value)}>
                        <option value="Alice">Alice</option>
                        <option value="Bob">Bob</option>
                    </select>
                </label>
                <textarea placeholder='Message' value={message} onChnge={e => setMessage(e.target.valule)} />
                <button type="submit">Send</button>
            </form>
            <form onSubmit={(e) => {
                    e.preventDefault()
                    setIsSent(true)
                    sendMessage(message)
                }}>
                <textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} />
                <button type="submit">Send</button>
            </form>
        </>

    )
}



export default Form