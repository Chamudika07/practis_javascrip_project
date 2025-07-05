//select the element
const container_value = document.getElementById("Container_value");
const Decrement_btn = document.getElementById("Decrement_btn");
const Increment_btn = document.getElementById("Increment_btn");
const Reset_btn = document.getElementById("Reset_btn");

//set the initial value
let count = 0; //because let is can be change value

Increment_btn.addEventListener("click" , function(){
    count++; //increment the count by 1
    container_value.textContent = count; //update the displayed value
    console.log("Counter after increment: " + count);
});

Decrement_btn.addEventListener("click",function(){
    count--; //decrement the count by 1
    container_value.textContent = count; //update the displayed value
    console.log("Counter after decrement:" + count);
});

Reset_btn.addEventListener("click", function(){
    count = 0; //reset the count to 0
    container_value.textContent = count; //update the displayed value
    console.log("Counter reset to: " + count);
})
// Reset button functionality