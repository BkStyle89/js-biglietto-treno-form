const nameEl= document.getElementById("name")
const distanceEl= document.getElementById("distance")
const ageEl= document.getElementById("age")
const formEl = document.querySelector(".first")
const createEl=document.getElementById("create")
const cancelEl=document.getElementById("cancel")
console.log(nameEl,distanceEl,ageEl,formEl)


createEl.addEventListener("click",function(){
    console.log(nameEl.value,distanceEl.value,ageEl.value);

})
formEl.addEventListener("submit",function(e){
    e.preventDefault()
    console.log(nameEl.value,distanceEl.value,ageEl.value )
})
  console.log(nameEl.value,distanceEl.value,ageEl.value )
