console.log("Hello world!")


let message = document.querySelector("#message")
console.log(message)



const addMovie = (event) =>{
    event.preventDefault()

    let inputField=document.querySelector("input")
    console.log(inputField)

    let movie=document.createElement("li")
    console.log
     
    let movieTitle=document.createElement("span")

    movieTitle.textContent=inputField.value

    movieTitle.addEventListener("click", crossOffMovie)

    movie.appendChild(movieTitle)

    let deleteBtn=document.createElement("button")

    deleteBtn.textContent="X"

    

    deleteBtn.addEventListener("click", deleteMovie)

    movie.appendChild(deleteBtn)

    document.querySelector("ul").appendChild(movie)

    inputField.value=""

    

    
}



const deleteMovie = (event) =>{
    event.target.parentNode.remove()
    
    message.textContent=`${event.target.previousSibling.textContent} deleted`
    revealMessage()
    console.log(event)
}


document.querySelector("form").addEventListener("submit", addMovie)

const crossOffMovie = (event) =>{

    event.target.classList.toggle("checked")

    let MOVIE = event.target.textContent

    if (event.target.classList.contains("checked")){
        
        message.textContent=`${MOVIE} watched!`

    } else {
        message.textContent= `${MOVIE} added back!`
    } 

    revealMessage()

}

const revealMessage = () =>{

    message.classList.remove("hide")


    setTimeout(()=>{
        message.classList.add("hide")
    },1000)
}







