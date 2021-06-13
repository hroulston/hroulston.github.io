
var baseValue = 6
var rainbowTreasure = Math.floor(Math.random() *9)
var bomb = Math.floor(Math.random() *9)
const treasure = (location) => {
  // document.getElementById(location).innerHTML = "x"
  if(rainbowTreasure == location){
  document.getElementById(location).innerHTML = "&#x1f308";
    alert("You win. You got the rainbow treasure!")
  }
  else if(bomb == location){
    document.getElementById(location).innerHTML = "&#x2620"
    alert("You loose. Try again!")
  }
  else{
    document.getElementById(location).innerHTML = "&#x1f332"
  }
}
