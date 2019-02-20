var body = document.querySelector("body");
var h3 = document.querySelector("h3");
var colorpanal1=document.querySelector(".colorpanel1");
var colorpanal2=document.querySelector(".colorpanel2");

function color(){
    body.style.background= "linear-gradient(to right,"+colorpanal1.value+", " +colorpanal2.value +")"; 
    h3.textContent= body.style.background + ";";
}

colorpanal1.addEventListener("input",color);
colorpanal2.addEventListener("input",color);

