/* name Elements */
const nameEl= document.getElementById("name")
const distanceEl= document.getElementById("distance")
const ageEl= document.getElementById("age")
const formEl = document.querySelector(".first")
const createEl=document.getElementById("create")
const cancelEl=document.getElementById("cancel")
const U18El= document.getElementById("U18")
const O18El= document.getElementById("O18")
const O65El= document.getElementById("O65")
console.log(nameEl,distanceEl,ageEl,formEl)

/* click button function */
createEl.addEventListener("click",function(){
    console.log(nameEl.value,distanceEl.value,ageEl.value);

})
/* save info function */
formEl.addEventListener("submit",function(e){
    e.preventDefault()
    let price = distanceEl * 0.21;
    
    if (ageEl === U18El){
        price = price * 0.8
    }
    console.log("costo finale biglietto è:" + " " + price.toFixed(2));
})
  console.log(nameEl.value,distanceEl.value,ageEl.value )
  
  /* prezzo in base all'età biglietto */
  /* età passeggero tra maggiorenne over 65*/
  /* prezzo biglietto 0.21 x km */ 
  /* discount 40% over 65 20% under 18 */
  
  //const distanceEl= document.getElementById("distance")
  //const ageEl= document.getElementById("age")