let btn=document.querySelector("button");

btn.addEventListener("click",function(){
   let h1=document.querySelector("h1");
   let ranColor=getRandomColor();
   h1.innerText=ranColor;
   let div1=document.querySelector("div");
   div1.style.background=ranColor;
});
function getRandomColor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red}, ${green}, ${blue})`;
    return color;
}