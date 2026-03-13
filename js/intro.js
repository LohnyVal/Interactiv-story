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
    description: "Careful, each choice has its own Consequence",
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


function startIntro() {
    console.log("start intor")



}

// startIntro();