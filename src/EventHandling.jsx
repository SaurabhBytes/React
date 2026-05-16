function EventHandling(){
    // function handleClick(){
    //     console.log('Button clicked')
    // }

    function handleClick(e){
        console.log(e.target)
        console.log(e.target.innerText)
    }

    function handleMouseOver(){
        console.log('Mouse is over')
    }

    return(
        <div>
            <button onClick={handleClick}>Click Me</button>

            <button onMouseOver={handleMouseOver}>Hover Me</button>
        </div>
    )
}

export default EventHandling