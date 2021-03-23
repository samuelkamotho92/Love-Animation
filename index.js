function anim(){
    const py = document.createElement("div");
    py.classList.add("heart");
    py.innerText = "💜" ;
    py.style.left = Math.random() * 200 + "vh";
    document.body.appendChild(py);
    setTimeout(()=>{
py.remove();
    },5000)
}
setInterval(anim,300);
const sp = document.querySelector("span");
console.log(sp);