// import { useState } from "react";

// function LikeButton(){
//     const [count , setCount] = useState(0)
//     const [like, setLiked] = useState('Like')


//     return(
//         <div>
//             {/* <h1> ❤️ : {count}</h1> */}
//             <button onClick={() => {
//                 setCount(count + 1)
//             setLiked('Liked')}
//         }>❤️ {count} {like}</button>
            
//         </div>
//     )
// }

// export default LikeButton



import { useState } from "react";

function LikeButton(){
    const [count , setCount] = useState(0)
    const [like, setLiked] = useState('Like')


    return(
        <div>
            <button onClick={() =>{if(like === 'Like'){
                setCount(count+1)
                setLiked('Unlike')
            }
            else{
                setCount(count-1)
                setLiked('Like')
            }}}>❤️  {count} {like}</button>

        </div>
    )
}
export default LikeButton