document.querySelector('#randomJokeButton').addEventListener('click', joke)


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
