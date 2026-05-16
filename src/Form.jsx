import { useState } from "react";

function Form(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        console.log(`Name: ${name}, Email: ${email}`)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Enter name"
            value={name} 
            onChange={(e) => setName(e.target.value)}
            />
            
            <input type="email" 
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    )

    function handleSubmit(e){
        e.preventDefault()
        if(name === ''){
            alert('Please enter your name!')
            return
        }
        console.log(`Name: ${name}, Email: ${email}`)
    }
}

export default Form