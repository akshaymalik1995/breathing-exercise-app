//Get the elements
// Get the circle shape
//const circle = document.querySelector("circle")
const rect = document.querySelector(".rect")
// We will INHALE OR EXHALE based on the breathing mode
const breathe_mode =  document.querySelector(".breathe-mode")

const start = document.querySelector(".start")
const pause = document.querySelector(".pause")


// We will output number of breathe count
const count = document.querySelector(".count")


let breathe_count
if (localStorage.breathe_count){
    breathe_count = Number(localStorage.breathe_count)
} else {
    breathe_count = 0
}

count.innerHTML = breathe_count // Write the count value to html tag

// FUNCTION TO INCREASE OR DECREASE RADIUS OF THE CIRCLE
let inhaling = true
function change_height() {
    let height = rect.getAttribute("height")  // get the radius
    
    height = parseInt(height) //convert it to integer
    
    if (inhaling) {  
        breathe_mode.innerHTML = "Inhale" // Change breathe mode
        
        height = height - 5
        if (height == 00){
            inhaling = false
        }
    }
    else{
        breathe_mode.innerHTML = "Exhale"
        
        height = height + 5
        if (height == 200){
            inhaling = true
            breathe_count = breathe_count + 1
            localStorage.setItem("breathe_count", breathe_count)
            count.innerHTML = Number(localStorage.breathe_count)
        }
    }
    rect.setAttribute("height" , height)
    
}

let interval // This is the variable for the setinterval function we will execute
let breathing = false

start.addEventListener("click" , () => {
    if (!breathing){
        breathing = true
        
        interval = setInterval(change_height, 80)

    }
        
})



pause.addEventListener("click" , () => {
    clearInterval(interval)
    breathing = false
    inhaling = true
    rect.setAttribute("height" , 200)
    
    count.innerHTML = breathe_count
    
    breathe_mode.innerHTML = ""
})



let currentDate = new Date()
date = currentDate.getDate()
if (localStorage.resetdate){
    resetdate = Number(localStorage.resetdate)
    if (resetdate != date) {
    breathe_count = 0
    localStorage.setItem("breathe_count", breathe_count)
    count.innerHTML = Number(localStorage.breathe_count)
    localStorage.setItem("resetdate", date)
    }

} else {
    localStorage.setItem("resetdate", date)
}





    

    
