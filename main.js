document.querySelector('#randomJokeButton').addEventListener('click', joke)


const programmingCheckbox = document.getElementById("programming")
const miscCheckbox = document.getElementById("misc")
 const darkCheckbox = document.getElementById("dark")
 const punCheckbox = document.getElementById("pun")
 const spookyCheckbox = document.getElementById("spooky")
mySubmit = document.getElementById("submit")
let url = "https://v2.jokeapi.dev/joke/Any?type=single"


fetch(url)
    .then(res => res.json())
    .then(data => {
     document.querySelector('h2').innerHTML = data.joke
   
   } )

mySubmit.onclick = function(event){
    event.preventDefault()

 if(programmingCheckbox.checked === true){
  url = "https://v2.jokeapi.dev/joke/Any?type=single"
   url = url.replace("Any", "Programming" )
    
}else if(miscCheckbox.checked === true){
  url = "https://v2.jokeapi.dev/joke/Any?type=single"
url = url.replace("Any", "Misc")
}else if(darkCheckbox.checked === true){
  url = "https://v2.jokeapi.dev/joke/Any?type=single"
  url = url.replace("Any", "Dark")
}else if(punCheckbox.checked === true){
  url = "https://v2.jokeapi.dev/joke/Any?type=single"
  url = url.replace("Any", "Pun")
}
else if(spookyCheckbox.checked === true){
  url = "https://v2.jokeapi.dev/joke/Any?type=single"
  url = url.replace("Any", "Spooky")
}


else{
    url = "https://v2.jokeapi.dev/joke/Any?type=single"
}
fetch(url)
    .then(res => res.json())
    .then(data => {

     document.querySelector('h6').innerHTML = data.joke
   
   } )

}







function joke(){
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=single")
    .then(res => res.json())
    .then(data => {
       
     document.querySelector('h2').innerHTML = data.joke
   
   } 
   )
    .catch(error => console.log(`error ${error}` ))




}
