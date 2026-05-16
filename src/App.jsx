// function App(){
//   return (
//     <div>                      // correct — wrapped in one parent
//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, atque repudiandae.</p>
//       <h1>Hello React!</h1>
//     </div>
//   )
// }

// const { useEffect } = require("react");

// export default App




// We can write any javascript expression {}

// function App(){
//   const name = 'Saurabh'
//   const age = 22

//   return(

//     <div>
//       <h1>Hello {name}!</h1>
//       <p>I am {age} years old</p>
//       <p>Next year I'll be {age + 1} years old</p>
//     </div>
//   )
// }
// export default App



// Components - Heart of React 🔥

// function Header(){
//   return(
//     <div>
//       <h1>My website</h1>
//       <p>Welcome to my page</p>
//     </div>
//   )
// }

// function App(){
//   return(
//     <div>
//       <Header/>                   {/* ✅ self closing tag */}
//       <Header/> 
//       <Header/> 
//       <p>This is the main component</p>
//     </div>
//   )
// }
// export default App




// Using props 

// function Header (props){
//   return(
//     <div>
//       <h1>{props.title}</h1>
//       <p>{props.description}</p>
//     </div>
//   )
// }

// Destructuring props! 💪 
// function Header({title,description}){
//   return(
//   <div>
//     <h1>{title}</h1>
//     <p>{description}</p>
//   </div>
//   )
// }

// function App(){
//   return(
//     <div>
//      <Header title = "My Website" description ='Welcome to my page' ></Header>
//      <Header title = "About Us" description ='Learn more about us!' ></Header>
//      <Header title = "Contact" description ='Get in touch!' ></Header>

//     </div>
//   )
// }
// export default App




// useState 🔥
// import { useState } from "react";

// function App(){
//   const [count, setCount] = useState(0)

//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//       <button onClick={() => setCount(count + 1)}>Increase</button>

//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//       <button onClick={() => setCount(0)}>Reset</button>

//     </div>
//   )
// }
// export default App





// useEffect
// useEffect runs code after the component renders.

// import { useState, useEffect } from "react";

// function App(){
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     console.log('Components rendered')
//   })

//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   )
// }
// export default App


// import { useState, useEffect } from "react";
// function App(){
//   const [users, setUsers] = useState([])

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(data => setUsers(data))
//   }, [])

//   return(
//     <div>
//       <h1>Users</h1>
//       <ul>
//         {users.map(user => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   )
// }
// export default App







// import ProfileCard from './exercise1'

// function App(){
//   return(
//       <div>
//    <ProfileCard name = "Saurabh" age = '22' city = 'Bilaspur' goal = 'Becoming a full stack developer' ></ProfileCard>
//       </div>
//   )
// }

// export default App


// import ProductCard from './exercise2'

// function App(){
//   return(
//     <div>
//       <ProductCard name = 'iPhone 15' price = '$79,999' inStock = {true} ></ProductCard>
//       <ProductCard name = 'Samsung TV' price = '$49,999' inStock = {false} ></ProductCard>
//       <ProductCard name = 'Sony Headphones ' price = '$29,999' inStock = {true} ></ProductCard>

//     </div>
//   )
// }

// export default App




// import LikeButton from "./exercise3";

// function App(){
//   return(
//     <div>
//       <LikeButton/>
//     </div>
//   )
// }
// export default App


// import Timer from "./exercise4";

// function App(){
//   return(
//     <div>
//       <Timer/>
//     </div>
//   )
// }
// export default App


// import Fetcher from "./exercise5"

// function App(){
//   return(
//     <div>
//       <Fetcher/>
//     </div>
//   )
// }
// export default App


// import EventHandling from "./EventHandling";
// function App(){
//   return(
//     <div>
//       <h1>Hello</h1>
//       <EventHandling/>
//     </div>
//   )
    
//   }
//   export default App

// import ConditionalRendering from "./ConditionalRendering";

// function App(){
//   return(
//     <div>
//       <ConditionalRendering/>
//     </div>
//   )
// }

// export default App

// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from './Home'
// import About from "./About";
// import Contact from "./Contact";

// function App(){
//   return(
//     <BrowserRouter>
//     <nav>
//       <Link to= "/">Home</Link>
//       <Link to= "/about">About</Link>
//       <Link to= "/contact">Contact</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<About/>} />
//         <Route path="/contact" element={<Contact/>} />
//       </Routes>
//       </BrowserRouter>
//   )
// }
// export default App


import Form from "./Form";

function App(){
  return(
  <div>
    <Form/>
  </div>
  )
}

export default App

