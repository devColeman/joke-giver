document.querySelector('#randomJokeButton').addEventListener('click', joke)


const programmingCheckbox = document.getElementById("programming")
mySubmit = document.getElementById("submit")
let url = "https://v2.jokeapi.dev/joke/Any?type=single"

mySubmit.onclick = function(event){
    event.preventDefault()

 if(programmingCheckbox.checked === true){
   url = url.replace("Any", "Programming" )
    
} else{
    url = "https://v2.jokeapi.dev/joke/Any?type=single"
}
fetch(url)
    .then(res => res.json())
    .then(data => {
       console.log(data.joke)
     document.querySelector('h2').innerHTML = data.joke
   
   } )
console.log(url)

}







function joke(){
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single")
    .then(res => res.json())
    .then(data => {
       console.log(data.joke)
     document.querySelector('h2').innerHTML = data.joke
   
   } 
   )
    .catch(error => console.log(`error ${error}` ))




}
