let guy = document.getElementById("guy");
let guyPositionX = parseInt(window.getComputedStyle(guy).left) || 0;
let guyPositionY = 0;
let screenWidth = window.innerWidth;


function loadIntro(){
  window.location.href = "../html/intro.html";
}



document.addEventListener("click", (e) =>{
    const smoke = document.createElement("div");
    smoke.classList.add("smoke");
    smoke.style.left = e.clientX + "px";
    smoke.style.top = e.clientY + "px";
  
    document.body.appendChild(smoke);
    setTimeout(() =>{
      smoke.remove()
    }, 1500)
})



document.addEventListener("keydown", (e) => {

  if (e.code === "ArrowRight" || e.code === "KeyD") {
    if (guyPositionX < screenWidth - guy.offsetWidth) {
      guyPositionX += 10;
      guy.style.left = guyPositionX + "px";
    }
  }


  if (e.code === "ArrowLeft" || e.code === "KeyA") {
    if (guyPositionX > 380) {
      guyPositionX -= 10;
      guy.style.left = guyPositionX + "px";
    }
  }

});





