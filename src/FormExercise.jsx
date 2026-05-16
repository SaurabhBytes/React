import { useState } from "react";

function Form(){
    const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[age, setAge] = useState('')
    const [nameError, setNameError] = useState('')
const [emailError, setEmailError] = useState('')
const [passwordError, setPasswordError] = useState('')
const [ageError, setAgeError] = useState('')

    function handleSubmit(e){
        e.preventDefault()

        if(name === ''){
            setNameError('❌ Name is required')
        } else{
            setNameError('')
        }


        if(!email.includes ('@')){
            setEmailError('❌ Invalid email')
        } else{
            setEmailError('')
        }


        if(password.length< 6){
            setPasswordError('❌ Password must be at least 6 characters')
        } else{
            setPasswordError('')
        }

        if(age < 18){
            setAgeError('❌ You must be 18 or above')
        } else{
            setAgeError('')
        }

        console.log(`Name: ${name}, Email: ${email}, Password: ${password}, Age: ${age}`)


    }
        // console.log(`Name: ${name}, Email: ${email}, Password: ${password}, Age: ${age}`)
    






    return(
        <form onSubmit={handleSubmit}>
         <input type="text" 
         placeholder="Enter Name"
         value={name}
         onChange={(e) => setName(e.target.value)}
         />   
         <p>{nameError}</p>


<input type="text" 
         placeholder="Enter Email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         />   
         <p>{emailError}</p>


<input type="password" 
         placeholder="Enter Password"
         value={password}
         onChange={(e) => setPassword(e.target.value)}
         />   
         <p>{passwordError}</p>


<input type="number" 
         placeholder="Enter Age"
         value={age}
         onChange={(e) => setAge(e.target.value)}
         />   
         <p>{ageError}</p>


         <button type="submit">Submit</button>
         </form>
    )

}
export default Form