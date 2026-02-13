/* name Elements */
const nameEl= document.getElementById("name")
const distanceEl= document.getElementById("distance")
const ageEl= document.getElementById("age")
const formEl = document.querySelector(".first")
const secondEl = document.querySelector(".second")
const createEl=document.getElementById("create")
const cancelEl=document.getElementById("cancel")
const coachEl=document.getElementById("coach")
const cpCodeEl=document.getElementById("cpCode")
const finalPriceEl=document.getElementById("finalPrice")
const passengerNameEl=document.getElementById("passengerName")
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
    finalPriceEl.innerHTML=price.toFixed(2)
    passengerNameEl.innerHTML =nameEl.value
    const trainCoach = Math.floor(Math.random() *10) + 1;
    console.log(trainCoach)
    coachEl.innerHTML = trainCoach
    
    /* numero randomico codice CP */
    const codeCp = Math.floor(Math.random()* 9000) + 1000;
    console.log(codeCp)
    cpCodeEl.innerHTML = codeCp 
    console.log("costo finale biglietto è:" + " " + price.toFixed(2));
    console.log(nameEl.value,distanceEl.value,ageEl.value )
}
)

  
  /* prezzo in base all'età biglietto */
  /* età passeggero tra maggiorenne over 65*/
  /* prezzo biglietto 0.21 x km */ 
  /* discount 40% over 65 20% under 18 */
  
  //const distanceEl= document.getElementById("distance")
  //const ageEl= document.getElementById("age")

  /* numero randomico carrozza */


    
     