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
      { label: "Back", targetSceneId: 1, color: "#FF0000" }, 
      { label: "Next", targetSceneId: 3, color: "#33CE15" }
    ] 
  },
  { id: 3, 
    description: "Careful, each choice has its own Consequence", 
    buttons: [
      { label: "Back", targetSceneId: 2, color: "#FF0000" }, 
      { label: "Next", targetSceneId: 4, color: "#33CE15" }
    ] 
  },
  { id: 4, 
    description: "Let´s",
    buttons: [{ label: "Back", 
    targetSceneId: 3, 
    color: "#FF0000" }, 
    { label: "Next", targetSceneId: 5, color: "#33CE15" }
  ] 
},
  { id: 5, 
    description: "Go", 
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
  gotoNextScene();
}

function gotoNextScene() {
  infoContainer.innerHTML = "";
  buttonContainer.innerHTML = "";

  const titleElement = document.createElement("h1");
  const textElement = document.createElement("p");
  textElement.classList.add("description")
  titleElement.classList.add("text");
  titleElement.textContent = scene.title;
  textElement.textContent = scene.description;
  infoContainer.appendChild(titleElement);
  infoContainer.appendChild(textElement)

  scene.buttons.forEach(button => {
    const btn = document.createElement("button");
    btn.textContent = button.label;
    btn.style.backgroundColor = button.color;
    btn.className = button.label.includes("Next") ? "next" : button.label.includes("Back") ? "back" : "choices"; // Sjekkerm noe er sant eller ikke! Detter får vi back, next eller choice knpper som har forskjellige funksjoner
    btn.onclick = () => nextIntroScene(button.targetSceneId);
    buttonContainer.appendChild(btn);
  });
}

function nextIntroScene(id) {
  if (id === "story") {
    window.location.href = "story.html";  
    return;
  }
  scene = infoScenes[id - 1]; 
  gotoNextScene();
}

startIntro();