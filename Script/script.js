/* name Elements */
const nameEl= document.getElementById("name")
const distanceEl= document.getElementById("distance")
const ageEl= document.getElementById("age")
const formEl = document.querySelector(".first")
const createEl=document.getElementById("create")
const cancelEl=document.getElementById("cancel")
console.log(nameEl,distanceEl,ageEl,formEl)


/* save info function */
formEl.addEventListener("submit",function(e){
    e.preventDefault()
  /*   console.log(distanceEl.value) */
    let price = distanceEl.value * 0.21;
    
    if (ageEl.value === "under18"){
        price = price * 0.8;
    }
    else if (ageEl.value==="over65"){
        price = price * 0.6;
    }
    console.log("costo finale biglietto è:" + " " + price.toFixed(2));
    console.log(nameEl.value,distanceEl.value,ageEl.value )
})
  
  /* prezzo in base all'età biglietto */
  /* età passeggero tra maggiorenne over 65*/
  /* prezzo biglietto 0.21 x km */ 
  /* discount 40% over 65 20% under 18 */
  
  //const distanceEl= document.getElementById("distance")
  //const ageEl= document.getElementById("age")

  /* numero randomico carrozza */
  const trainCoach = Math.floor(Math.random() *10) + 1;
  console.log(trainCoach)
  /* numero randomico codice CP */
  const codeCp = Math.floor(Math.random()* (1000, 9000)) + (1000 + 1);
  console.log(codeCp)