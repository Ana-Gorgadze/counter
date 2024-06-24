const countt = document.getElementById('countt');
const increase = document.getElementById('increase');
const reset = document.getElementById('reset');
const decrease = document.getElementById('decrease');

let count = 0;

decrease.onclick = function(){
    count +=1;
    countt.textContent = count;
    color()
}
 
reset.onclick = function(){
    count = 0;
    countt.textContent = count;
    color()
}
increase.onclick = function(){
    count -=1;
    countt.textContent = count;
    color()
}

function  color(){ 
    if(countt.innerHTML > 0){
        countt.style.color = "green"
    }else if(countt.innerHTML < 0){
        countt.style.color = "red"
    }else{
        countt.style.color = "black"
    }
}