


document.querySelector("button").addEventListener("click",function(){
    var number1 = Math.floor(Math.random()*6)+1;
    var number2 = Math.floor(Math.random()*6)+1;



document.querySelectorAll("img")[0].setAttribute("src","images/dice"+number1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+number2+".png");

if(number1>number2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}else if(number1===number2){
    document.querySelector("h1").innerHTML="Draw!";
}else{
    document.querySelector("h1").innerHTML="Player 2 wins!";
}
})

    


