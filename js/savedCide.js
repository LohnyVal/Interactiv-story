const scenes = [
  {
    id: 1,
    text: "Marcus wakes up to a Sunday morning, but it is not peaceful. A brutal wildfire is burning nearby. The sky glows orange, and smoke lies like a heavy carpet over California.",
    buttons: [
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 2,
      },
    ],
  },
  {
    id: 2,
    text: "Marcus house stands only minutes away from the burning flames. Heat presses against the walls, and the air is thick with smoke. His phone suddenly vibrates in his hand",
    buttons: [
      {
        label: "Evacuate",
        color: "#D9D9D9",
        targetSceneId: 3,
      },
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 1,
      },
      {
        label: "Save house",
        color: "#D9D9D9",
        targetSceneId: 28,
      },
    ],
  },
  {
    id: 3,
    text: "Marcus runs to grab his backpack. Smoke fills the house like a thick gray blanket, making it hard for him to breathe.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 2,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 4,
      },
    ],
  },
  {
    id: 4,
    text: "Before Marcus notices, the fire has reached his house. Flames lick at the walls, and the heat goes through the air. He runs down the stairs, coughing, and grabs his catThe smoke is thick, and the street is barely visible to the human eye.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 3,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 5,
      },
    ],
  },
  {
    id: 5,
    text: "Marcus has to make a choice ,does he take the car, or does he escape on foot",
    buttons: [
      {
        label: "Take Car",
        color: "#D9D9D9",
        targetSceneId: 6,
      },
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 4,
      },
      {
        label: "Go by foot",
        color: "#D9D9D9",
        targetSceneId: 16,
      },
    ],
  },
  {
    id: 6,
    text: "Marcus opens the garage door and runs back into the house to grab the keys. He puts the cat in the back seat and turns on the car.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 5,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 7,
      },
    ],
  },
  {
    id: 7,
    text: "Orange flames stretch across the horizon, setting the world on fire.The highway is a river of gray, making every turn uncertain and dangerous.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 6,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 8,
      },
    ],
  },
  {
    id: 8,
    text: "Suddenly, Marcus sees a faint shadow inside the smoke, a family of four. He stops, hesitating, unsure of what he should do.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 7,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 9,
      },
    ],
  },
  {
    id: 9,
    text: "Will Marcus help them, or keep going to escape the fire?",
    buttons: [
      {
        label: "Help them",
        color: "#D9D9D9",
        targetSceneId: 10,
      },
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 8,
      },
      {
        label: "Leave them",
        color: "#D9D9D9",
        targetSceneId: 13,
      },
    ],
  },
  {
    id: 10,
    text: "Marcus lets the family in and keeps driving, moving safely away from the fire.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 9,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 11,
      },
    ],
  },
  {
    id: 11,
    text: "Marcus helps the people he can and keeps himself moving to safety.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 10,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 12,
      },
    ],
  },
  {
    id: 12,
    text: "The end ending (1)",
    buttons: [],
  },
  {
    id: 13,
    text: "Marcus drives off, leaving the family behind in the thick carpet of smoke.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 9,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 14,
      },
    ],
  },
  {
    id: 14,
    text: "Marcus survives, but the family he left behind does not make it.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 13,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 15,
      },
    ],
  },
  {
    id: 15,
    text: "The end ending (1)",
    buttons: [],
  },
  {
    id: 16,
    text: "Smoke fills Marcus’s lungs. He runs to the garage to grab his wheelbarrow to carry the cat and its cage.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 5,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 17,
      },
    ],
  },
  {
    id: 17,
    text: "Marcus takes on his jacket and starts his journey throught the smoke.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 16,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 18,
      },
    ],
  },
  {
    id: 18,
    text: "On the way, Marcus notices an elderly woman struggling, fighting for her life as she tries to escape the angry fire.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 17,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 19,
      },
    ],
  },
  {
    id: 19,
    text: "Will Marcus stop to help her, or keep escaping the fire to save himself?",
    buttons: [
      {
        label: "Help her",
        color: "#D9D9D9",
        targetSceneId: 20,
      },
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 18,
      },
      {
        label: "Leave her",
        color: "#D9D9D9",
        targetSceneId: 25,
      },
    ],
  },
  {
    id: 20,
    text: "Marcus shouts to get the elderly woman’s attention. “Do you want to go together?” he asks, as she struggles to catch her breath.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 19,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 21,
      },
    ],
  },
  {
    id: 21,
    text: "The woman can barely walk; her legs are like jelly. “Sit in the wheelbarrow, and I’ll push you if you hold the cage,” Marcus says.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 20,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 22,
      },
    ],
  },
  {
    id: 22,
    text: "Marcus walk tought the smoke, batteling the smoke and ash going throught the air. He sees a more clear area and sees other people. ",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 21,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 23,
      },
    ],
  },
  {
    id: 23,
    text: "Both Marcus and the elderly woman make it out of the danger.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 22,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 24,
      },
    ],
  },
  {
    id: 24,
    text: "The end ending (1)",
    buttons: [],
  },
  {
    id: 25,
    text: "“Im sorry,” Marcus whispers. The smoke thickens, like a wall closing in, stealing the air from his lungs. The road ahead looks clearer and safer.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 19,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 26,
      },
    ],
  },
  {
    id: 26,
    text: "Marcus walks for hours to reach a safe place. His house is gone, and the elderly woman has died, but Marcus has made it out.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 25,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 27,
      },
    ],
  },
  {
    id: 27,
    text: "The end ending (1)",
    buttons: [],
  },
  {
    id: 28,
    text: "Marcus runs down the stairs, grabs his shoes, and rushes out of the house filled with thick smoke.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 2,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 29,
      },
    ],
  },
  {
    id: 29,
    text: "The fire and the thick carpet of smoke lie like a plague over the street. His house is only minutes away from being burned down.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 28,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 30,
      },
    ],
  },
  {
    id: 30,
    text: "Marcus sees that there is still water left in the hose, or he can use the saw to cut down nearby trees.What will Marcus do?",
    buttons: [
      {
        label: "Water hose",
        color: "#D9D9D9",
        targetSceneId: 31,
      },
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 29,
      },
      {
        label: "Saw trees",
        color: "#D9D9D9",
        targetSceneId: 43,
      },
    ],
  },
  {
    id: 31,
    text: "There is barely any water pressure in the hose, but it’s just enough.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 30,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 32,
      },
    ],
  },
  {
    id: 32,
    text: "Marcus sprays water on the walls and roof of his house, and over the vegetation surrounding it.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 31,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 33,
      },
    ],
  },
  {
    id: 33,
    text: "Suddenly, Marcus hears a voice beside him in the thick smoke.“Can you help us spray water on our house as well, Marcus?” asks his neighbor.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 32,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 34,
      },
    ],
  },
  {
    id: 34,
    text: "Marcus sees that there is still water left in the hose, or he can use the saw to cut down nearby trees.What will Marcus do?",
    buttons: [
      {
        label: "Help",
        color: "#D9D9D9",
        targetSceneId: 35,
      },
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 33,
      },
      {
        label: "Deny",
        color: "#D9D9D9",
        targetSceneId: 39,
      },
    ],
  },
  {
    id: 35,
    text: "“Thank you!” the neighbor shouts. Marcus takes one last spray at his own house, then runs to the other side of the fence to help stop the fire from reaching his neighbor’s house.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 34,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 36,
      },
    ],
  },
  {
    id: 36,
    text: "Marcus and his neighbor stop the fire, then return to Marcus’s house to spray more water around it.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 35,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 37,
      },
    ],
  },
  {
    id: 37,
    text: "Both Marcus and his neighbor lock every window in their houses and stay inside. Unfortunately, the smoke begins to make them both sick.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 36,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 38,
      },
    ],
  },
  {
    id: 38,
    text: "The end ending (1)",
    buttons: [],
  },
  {
    id: 39,
    text: "“I didn’t know you were so selfish, Marcus!” yells the neighbor.Marcus feels guilty, but his house is everything to him.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 34,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 40,
      },
    ],
  },
  {
    id: 40,
    text: "Marcus stops the fire from reaching his own house, but his neighbor’s house starts to burn while the neighbor watches helplessly.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 39,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 41,
      },
    ],
  },
  {
    id: 41,
    text: "The neighbor drives off, but Marcus stays, locking every window and opening in the house to minimize the smoke coming inside.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 40,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 42,
      },
    ],
  },
  {
    id: 42,
    text: "The end ending (1)",
    buttons: [],
  },
  {
    id: 43,
    text: "Marcus quickly opens the garage door and grabs the saw. He cuts down the biggest, nearest trees.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 30,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 44,
      },
    ],
  },
  {
    id: 44,
    text: "Suddenly, the neighbor comes over to talk to Marcus. “Can you help cut down some of our trees, Marcus?” the neighbor asks.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 43,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 45,
      },
    ],
  },
  {
    id: 45,
    text: "Will Marcus help his neighbor cut down the trees, or focus only on protecting his own house?",
    buttons: [
      {
        label: "Save His Own House",
        color: "#D9D9D9",
        targetSceneId: 46,
      },
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 44,
      },
      {
        label: "Help His Neighbor",
        color: "#D9D9D9",
        targetSceneId: 50,
      },
    ],
  },
  {
    id: 46,
    text: "“You can’t be serious, Marcus! You’re so selfish!” shouts the neighbor. A sudden heartbeat pounds in Marcus’s chest like a rocket. “Why didn’t I help him?” he thinks.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 45,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 47,
      },
    ],
  },
  {
    id: 47,
    text: "Marcus manages to slow the fire from spreading and buys some time. He knows he will need to water the vegetation later. He stays at the house, but the smoke is getting worse.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 46,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 48,
      },
    ],
  },
  {
    id: 48,
    text: "The fire continues to creep closer to the property. The air is thick with smoke, and Marcus struggles to breathe as he tries to protect his home.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 47,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 49,
      },
    ],
  },
  {
    id: 49,
    text: "Ending 1: Marcus saves his house but damages his relationship with his neighbor.",
    buttons: [],
  },
  {
    id: 50,
    text: "“Thank you so much,” says Marcus’s neighbor. Marcus quickly runs to the other side of the fence and starts cutting down the nearby trees.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 45,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 51,
      },
    ],
  },
  {
    id: 51,
    text: "Suddenly, a tree falls the wrong way and injures Marcus, but not severely. The neighbor helps him inside and puts a bandage on the wound.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 50,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 52,
      },
    ],
  },
  {
    id: 52,
    text: "They are both temporarily safe, but the ground is dry. They still need to water the vegetation to prevent the fire from spreading.",
    buttons: [
      {
        label: "Back",
        color: "#FF0000",
        targetSceneId: 51,
      },
      {
        label: "Next",
        color: "#33CE15",
        targetSceneId: 53,
      },
    ],
  },
  {
    id: 53,
    text: "Ending 2: Marcus helps his neighbor, but both still face the danger of the spreading fire.",
    buttons: [],
  },
];


const infoScenes = [
  {
    id: 1,
    title: "You are playing as Marcus",
    description: " You are playing as a young adult named Marcus. He lives in California, where wildfires have become more frequent and destructive due to the rising temperatures.",
    buttons: [
      { label: "Next", targetSceneId: 2, color: "#33CE15" }
    ]
  },
  {
    id: 2,
    title: "How to play the game",
    description: "You have to make difficult choices. Choice whats feels right to you. You determine Marcus´s outcome",
    buttons: [
      { label: "Back", targetSceneId: 1, color: "#FF0000" },
      { label: "Next", targetSceneId: 3, color: "#33CE15" }
    ]
  },
  {
    id: 3,
    description: "Careful, each choice",
    buttons: [
      { label: "Back", targetSceneId: 2, color: "#FF0000" },
      { label: "Next", targetSceneId: 4, color: "#33CE15" }
    ]
  },
  {
    id: 4,
    description: "Let´s",
    buttons: [
      { label: "Back", targetSceneId: 3, color: "#FF0000" },
      { label: "Next", targetSceneId: 5, color: "#33CE15" }
    ]
  },
  {
    id: 5,
    description: "Let´s",
    buttons: [
      { label: "Back", targetSceneId: 4, color: "#FF0000" },
      { label: "Start Story", targetSceneId: "story", color: "#33CE15" }
    ]
  }
];

const typeWriterSound = new Audio("./audio/typeWriter.wav")

let storyContainer = document.getElementById("story");
let buttonContainer = document.getElementById("buttons");
let infoContainer = document.getElementById("info");
let scene = scenes[0];


let guy = document.getElementById("guy");
let guyPositionX = parseInt(window.getComputedStyle(guy).left) || 0;
let guyPositionY = 0;
let screenWidth = window.innerWidth;


function loadIntro(){
  window.location.href = "../html/intro.html";
}



function startStory() {
  let intro = document.getElementById("intro");
  intro.style.display = "none";
  const textElement = document.createElement("h2");
  textElement.classList.add("text");
  infoContainer.appendChild(textElement);
  typeWriter(scene.text, textElement)
  let buttons = scene.buttons || [];
  if (buttons.length > 0) {
    buttons.forEach((button) => {
      checkColor(button);
    });
  }

  
}



function nextScene(id) {
  infoContainer.innerHTML = "";
  buttonContainer.innerHTML = "";
  scene = scenes[id - 1];
  

  const textElement = document.createElement("h2");
  textElement.classList.add("text");
  infoContainer.appendChild(textElement);
  typeWriter(scene.text, textElement);

  let buttons = scene.buttons || [];
  if (buttons.length > 0) {
    buttons.forEach((button) => {

      checkColor(button);
    });
  }
}



function checkColor(button) {
  console.log(buttonContainer);
  console.log(button);
  if (button.label.includes("Next")) {
    console.log("this should work")
    buttonContainer.innerHTML += `<button class="next"
    onclick="nextScene(${button.targetSceneId})">${button.label}</button>`;
    console.log(buttonContainer);
      } else if (button.label.includes("Back")) {
        buttonContainer.innerHTML += `<button class="back"
        onclick="nextScene(${button.targetSceneId})">${button.label}</button>`;
      } else {
        buttonContainer.innerHTML += `<button style="background-color:${button.color}"
        onclick="nextScene(${button.targetSceneId})" class="choices">${button.label}</button>`;
      }
}


document.addEventListener("click", (e) =>{
  if(scene.text.toLowerCase().includes("smoke")){
    const smoke = document.createElement("div");
    smoke.classList.add("smoke");
    smoke.style.left = e.clientX + "px";
    smoke.style.top = e.clientY + "px";
  
    document.body.appendChild(smoke);
    setTimeout(() =>{
      smoke.remove()
    }, 1500)
  }

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

function typeWriter(text, element){
  element.innerHTML = "";
  let characterIndexPlace = 0;
  function typeNextCharacter(){
    if(characterIndexPlace < text.length){
      element.innerHTML += text.charAt(characterIndexPlace);
      typeWriterSound.currentTime = 0;
      typeWriterSound.play();

      characterIndexPlace++

      let typeWriterSpeed = Number(document.getElementById("speedTypeWriter").value);
      setTimeout(typeNextCharacter, typeWriterSpeed)
    }
  }
  typeNextCharacter()
}



