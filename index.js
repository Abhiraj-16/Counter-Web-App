let add = document.querySelector("#addition");
let substract = document.querySelector("#substraction");


add.addEventListener("click", function(){
let output = document.querySelector("#output")
let result = Number(output.innerText) + 1 ;
if (result>10){
    result=0;
}


output.innerText = result; 
});
substract.addEventListener("click", function(){
    let output = document.querySelector("#output")
    let result = Number(output.innerText) - 1;
    if (result<0){
        result=0;
    }
    output.innerText = result; });  
    
    var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 


  