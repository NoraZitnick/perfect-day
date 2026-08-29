let buttonContainer;
let header;
let paragraph;
let path = [];

function getDomElements() {
    buttonContainer = document.querySelector(".option-container");
    header = document.querySelector("h1");
    paragraph = document.querySelector("p");
}

function renderNode(node) {
    buttonContainer.innerHTML = "";
    header.textContent = node.header;
    paragraph.textContent = node.text;

    for (let i = 0; i < node.children.length; i++) {
        const button = document.createElement("button");
        button.className = "option-button";
        button.setAttribute("index", i);
        button.textContent = node.children[i].header;
        button.addEventListener("click", handleButtonPress);
        buttonContainer.appendChild(button);
    }
}

function handleButtonPress(event) {
    const buttonIndex = Number(event.currentTarget.getAttribute("index"));

    if (Number.isNaN(buttonIndex) || !currentNode || !currentNode.children[buttonIndex]) {
        return;
    }

    path.push(currentNode);
    currentNode = currentNode.children[buttonIndex];
    renderNode(currentNode);
}

function backButtonPress() {
    if (path.length === 0) {
        return;
    }
    currentNode = path.length > 0 ? path[path.length - 1] : rootNode;
    renderNode(currentNode);
    path.pop();
}

const backButton = document.querySelector(".back-button");
backButton.addEventListener("click", backButtonPress);

class TreeNode {
    constructor(id = null, header, text) {
        this.header = header;
        this.text = text;
        this.children = [];
        this.id = id;
    }
}

const rootNode = new TreeNode("0", "Welcome to the Perfect Day!", "This is the starting point of your journey. Choose an option below to begin.");

//2
rootNode.children.push(new TreeNode("00", "Food Catering", "You chose option 0. This is the next step in your journey."));
//3
rootNode.children[0].children.push(new TreeNode("000", "Take a Waymo", "Waymo gets hacked and you die."));
rootNode.children[0].children.push(new TreeNode("001", "Walk Around", "You chose option 0.1. This is the next step in your journey."));
//4
rootNode.children[0].children[1].children.push(new TreeNode("0010", "Tacos", "Do you have money?"));
rootNode.children[0].children[1].children.push(new TreeNode("0011", "Pizza", "It is illegal to buy pizza today because it is eating-pizza-is-illegal-day. Buy from a shady dealer."));
rootNode.children[0].children[1].children.push(new TreeNode("0012", "Sushi", "It is too expensive! Choose something else to buy."));
//5
//"gives sushi the children burrito and pizza"
rootNode.children[0].children[1].children[2].children.push(rootNode.children[0].children[1].children[0]);
rootNode.children[0].children[1].children[2].children.push(rootNode.children[0].children[1].children[1])
rootNode.children[0].children[1].children[0].children.push(new TreeNode("00100", "Expensive Restaurant", "Everyone gets food poisoning and you get sued END."));
rootNode.children[0].children[1].children[0].children.push(new TreeNode("00101", "Food Truck", "Do you want Sonia's food truck or Sophia's food truck?"));
rootNode.children[0].children[1].children[1].children.push(new TreeNode("00110", "Buy Pepperoni", "This pepperoni looks slightly green. Maybe it's just the lighting?"));
rootNode.children[0].children[1].children[1].children.push(new TreeNode("00111", "Buy Pineapple", "You buy pineapple. The Pineapple Loving Pigeon is summoned."));

//6
rootNode.children[0].children[1].children[0].children[1].children.push(new TreeNode("001010", "Buy from Sophia's", "Sophia makes great chicken and fish tacos. Which one will you buy?"));
rootNode.children[0].children[1].children[0].children[1].children.push(new TreeNode("001011", "Buy from Sonia's", "Sonia's stares you down as she zooms away. No tacos for you! It's getting closer to the start time, and there aren't many options left..."));
rootNode.children[0].children[1].children[1].children[0].children.push(new TreeNode("001100", "It's okay, it doesn't matter", "Everyoen gets food poisoning and you get sued END."));
rootNode.children[0].children[1].children[1].children[0].children.push(new TreeNode("001101", "Swap the green pepperoni for pineapple", "The Pineapple Loving Pigeon is summoned."));
rootNode.children[0].children[1].children[1].children[1].children.push(new TreeNode("001110", "Woah...", "It's eyeing your pizza! What do you do?"));


//7 
rootNode.children[0].children[1].children[0].children[1].children[0].children.push(new TreeNode("0010100", "Buy Chicken Tacos", "As you walk out, the chicken starts clucking and you drop the food on the floor!"));
rootNode.children[0].children[1].children[0].children[1].children[0].children.push(new TreeNode("0010101", "Buy Fish Tacos", "You deliver the fish tacos and they are a hit! Everyone at Sunbeam is full and happy!"));
rootNode.children[0].children[1].children[0].children[1].children[1].children.push(new TreeNode("0010110", "Uh oh.", "What to do now..?"));

rootNode.children[0].children[1].children[1].children[1].children[0].children.push(new TreeNode("0011100", "Run Away", "Too slow. The Pineapple Loving Pigeon swoops for your pizza, and you get eaten with it. Good luck next time..."));
rootNode.children[0].children[1].children[1].children[1].children[0].children.push(new TreeNode("0011101", "Surrender", "Your food gets taken but you are safe. Sunbeam kids are still hungry, and there aren't that many options left..."));
rootNode.children[0].children[1].children[1].children[1].children[0].children.push(new TreeNode("0011102", "Stand Still", "The Pineapple Loving Pigeon swoops for your pizza, and you get eaten with it. Good luck next time..."));
rootNode.children[0].children[1].children[1].children[1].children[0].children.push(new TreeNode("0011103", "Fight", "You get the first attack! Quick, what do you do?"));

//8
rootNode.children[0].children[1].children[0].children[1].children[1].children[0].children.push(new TreeNode("00101100", "Feed them roadkill", "You see a dead seagull and a dead pigeon. Which one seems safer..?"));
rootNode.children[0].children[1].children[0].children[1].children[1].children[0].children.push(new TreeNode("00101100", "Give up", "Everyone is hungry and they eat latex balloons... Otherwise, great event!")); 
rootNode.children[0].children[1].children[0].children[1].children[1].children[0].children.push(new TreeNode("00111030", "Kick", "You fly up in the air to do your signatire roundhouse kick! It doesn't land. You do though, on the ground; flat on your back."));
rootNode.children[0].children[1].children[0].children[1].children[1].children[0].children.push(new TreeNode("00111031", "Punch", "It works! The Pineapple Loving Pigeon is defeated! You all have pineapple pizza and slightly pineapple flavored pigeon for dinner."));

//9
rootNode.children[0].children[1].children[0].children[1].children[1].children[0].children.push(new TreeNode("001011000", "Seagull", "Bad choice! Everyone gets food poisoning and you are sued for 5 million dollars."));


// //pigeon options
// rootNode.children[0].children[1].children[1].children[1].children.push(PIGEON OPTIONS);

let currentNode = rootNode;
getDomElements();
renderNode(currentNode);