const infoScenes = [
  { id: 1, 
    title: "You are playing as Marcus", 
    description: "You are playing as a young adult named Marcus...", 
    buttons: [
      { label: "Next", targetSceneId: 2, color: "#33CE15" }
    ] 
  },
  { id: 2, 
    title: "How to play the game", 
    description: "You have to make difficult choices...", 
    buttons: [
      { 
        label: "Back", 
        targetSceneId: 1, 
        color: "#FF0000" }, 
      { 
        label: "Next", 
        targetSceneId: 3, 
        color: "#33CE15" }
    ] 
  },
  { id: 3, 
    bigText: "Careful, each choice", 
    buttons: [
      { 
        label: "Back", 
        targetSceneId: 2, 
        color: "#FF0000" }, 
      { 
        label: "Next", 
        targetSceneId: 4, 
        color: "#33CE15" }
    ] 
  },
  { id: 4, 
    bigText: "Let´s",
    buttons: [
      { 
      label: "Back", 
      targetSceneId: 3, 
      color: "#FF0000" }, 
    { 
      label: "Next", 
      targetSceneId: 5, 
      color: "#33CE15" }
  ] 
},
  { id: 5, 
    bigText: "Go", 
    buttons: [
      { label: "Back", targetSceneId: 4, color: "#FF0000" }, 
      { label: "Start Story", targetSceneId: "story", color: "#33CE15" }
    ] 
  }
];

const infoContainer = document.getElementById("info");
const buttonContainer = document.getElementById("buttons");
let scene = infoScenes[0];

function startIntro() {
  const savedId = localStorage.getItem("introScene");
  if(savedId){
    scene = infoScenes[parseInt(savedId) - 1]
  }
  gotoNextScene();
}



function gotoNextScene() {
  infoContainer.innerHTML = "";
  buttonContainer.innerHTML = "";
  const titleElement = document.createElement("h1");
  const textElement = document.createElement("p");
  const bigTextElement = document.createElement("p");
  textElement.classList.add("description")
  titleElement.classList.add("text");
  bigTextElement.classList.add("bigText");
  titleElement.textContent = scene.title;
  textElement.textContent = scene.description;
  bigTextElement.textContent = scene.bigText;
  infoContainer.appendChild(titleElement);
  infoContainer.appendChild(textElement)
  infoContainer.appendChild(bigTextElement)

  scene.buttons.forEach(button => {
    const btn = document.createElement("button");
    btn.textContent = button.label;
    btn.style.backgroundColor = button.color;
    btn.classList.add("buttons");
    if (button.label.includes("Next")) {
      btn.classList.add("next");
    } else if (button.label.includes("Back")) {
        btn.classList.add("back");
    } else {
      btn.classList.add("choices");
}
    btn.onclick = () => nextIntroScene(button.targetSceneId);
    buttonContainer.appendChild(btn);
  });
}

function nextIntroScene(id) {
  if (id === "story") {
    localStorage.removeItem("introScene")
    window.location.href = "story.html";  
    return;
  }
  localStorage.setItem("introScene", id)
  scene = infoScenes[id - 1]; 
  gotoNextScene();
}

startIntro();


document.addEventListener("keydown", (e) =>{
  if(e.code === "ArrowLeft"){
    goNextSceneViaButtons("back")
  }else if(e.code === "ArrowRight"){
    goNextSceneViaButtons("next")
  }
})

function goNextSceneViaButtons(direction){
  const button = scene.buttons.find(btn => 
    direction === "next" 
    ? btn.label.includes("Next") || btn.targetSceneId === "story"
    : btn.label.includes("Back"));
    if(button){
      nextIntroScene(button.targetSceneId);
    }
}







