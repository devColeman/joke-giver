document.querySelector('#randomJokeButton').addEventListener('click', joke)
document.querySelector('#punchLine').addEventListener('click', show)


const programmingCheckbox = document.getElementById("programming")
const miscCheckbox = document.getElementById("misc")
 const darkCheckbox = document.getElementById("dark")
 const punCheckbox = document.getElementById("pun")
 const spookyCheckbox = document.getElementById("spooky")
 const christmasCheckbox = document.getElementById("christmas")
 let h5 = document.getElementById('hey')
let mySubmit = document.getElementById("submit")
let url = "https://v2.jokeapi.dev/joke/Any?type=single"
document.getElementById('submit2').addEventListener('submit', runz)


fetch(url)
    .then(res => res.json())
    .then(data => {
     document.querySelector('h2').innerHTML = data.joke
   
   } )

    function runz(event){
   event.preventDefault()
   h5.style.display = "none"
   if(christmasCheckbox.checked){
    url = "https://v2.jokeapi.dev/joke/Any?type=twopart"
    url = url.replace("Any", "Christmas")
   }else if(spookyCheckbox.checked){
    url = url = "https://v2.jokeapi.dev/joke/Any?type=twopart"
    url = url.replace("Any", "Spooky")

   }else {
    url = "https://v2.jokeapi.dev/joke/Spooky,Christmas?type=twopart"
   }
   
   fetch(url)
    .then(res => res.json())
    .then(data => {

     document.querySelector('h3').innerHTML = data.setup
     document.querySelector('h5').innerHTML = data.delivery
   
   } )


    }

  function show(){
    if(h5.style.display === "none"){
      h5.style.display = "flex"
    }else{
      h5.style.display = "none"
    }
}





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
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    .then(res => res.json())
    .then(data => {
     document.querySelector('h2').innerHTML = data.joke
   
   } 
   )
    .catch(error => console.log(`error ${error}` ))




}
