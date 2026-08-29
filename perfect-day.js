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

    if (node.id === "01111" || node.id === "01110") {

        console.log("Node 01110 reached");
        const image = document.createElement("img");
        image.src = "image.png";
        image.alt = "Car";
        image.classList.add(node.id === "01110" ? "fast-moving-image" : "slow-moving-image");
        document.body.appendChild(image);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                image.style.transform = 'translateX(1000px)';
            });
        });
        image.addEventListener("transitionend", () => {
            document.body.removeChild(image);
        });
    }

    if (node.id === "010" || node.id === "0101" || node.id === "010000") {
        const image = document.createElement("img");
        image.src = "walking.gif";
        image.classList.add("walking-image");
        document.body.appendChild(image);
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                image.style.transform = 'translateX(-1000px)';
            });
        });
        image.addEventListener("transitionend", () => {
            document.body.removeChild(image);
        });
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
rootNode.children.push(new TreeNode("00", "Talk to friends", ""));
rootNode.children.push(new TreeNode("01", "Talk to venue people", ""));
rootNode.children[1].children.push(new TreeNode("010", "Walk around and knock on doors to find a venue", "You see a man in an office building. Do you enter?"));
rootNode.children[1].children.push(new TreeNode("011", "Call to ask for availability", "The only available ones are 5 miles away."));
rootNode.children[1].children[0].children.push(new TreeNode("0100", "You go in", "The man tells you that he is not willing to let some teenagers in. You are disappointed.")); 
rootNode.children[1].children[0].children.push(new TreeNode("0101", "Go somewhere else",""));
rootNode.children[1].children[1].children.push(new TreeNode("0110", "Don't go", "")); // link to 010
rootNode.children[1].children[1].children[0].children.push(rootNode.children[1].children[0]);
rootNode.children[1].children[1].children.push(new TreeNode("0111", "Go in an uber",""));
rootNode.children[1].children[1].children.push(new TreeNode("0112", "Go in cheaper bus", "You will need towait 20 minutes for the bus to arrive.")); 
rootNode.children[1].children[0].children[0].children.push(new TreeNode("01000", "Keep walking", "You start walking down the street and find a shopping mall.")); //link to 010000
rootNode.children[1].children[1].children[1].children.push(new TreeNode("01110", "Bribe the uber with $100 and go speedy", "The man takes your money, but does not go where you tell him to go. He looks at you creepily and says, 'Thanks for the money, but I have my own plans.'"));
rootNode.children[1].children[1].children[1].children.push(new TreeNode("01111", "Go in the uber safely", "You arrive at the venue and get out of your car, entering the venue. They tell you that they are closed and not willing to let some teenagers in. "));
rootNode.children[1].children[1].children[2].children.push(new TreeNode("01120", "Wait for the bus to arrive", "You start talking to a stranger at the bus stop. He recommends a venue."));
rootNode.children[1].children[1].children[2].children.push(rootNode.children[1].children[1].children[1]); 
rootNode.children[1].children[0].children[1].children.push(rootNode.children[1].children[0].children[0].children[0]);
rootNode.children[1].children[0].children[0].children[0].children.push(new TreeNode("010000", "Go to the shopping mall", "You end up in a ball room. It is really big and you are concerned about using it for a hackathon."));
rootNode.children[1].children[1].children[1].children[0].children.push(new TreeNode("011100", "Fight him", "He fights back and you get in an accident. You end up in the hospital, with no venue :("));
rootNode.children[1].children[1].children[1].children[0].children.push(new TreeNode("011101", "Jump out of the car", "You are on the side of the road now."));
rootNode.children[1].children[1].children[1].children[0].children[1].children.push(rootNode.children[1].children[0]);
rootNode.children[1].children[1].children[1].children[1].children.push(new TreeNode("011110", "Go back to car after exiting the venue.", "The uber has left and you realized you left your phone in his car."));
rootNode.children[1].children[1].children[1].children[1].children[0].children.push(rootNode.children[1].children[0]);
rootNode.children[1].children[1].children[2].children[0].children.push(new TreeNode("011200", "Go to the venue that the stranger recommended", "You arrive at the venue and the venue says they have an empty room for you to use. You are able to have a great time and have a perfect day!"));
rootNode.children[1].children[1].children[2].children[0].children.push(new TreeNode("011201", "Don't go to the venue that the stranger recommended", "It takes an hour for the bus to arrive at the possible venue location. When you get there someone else has already booked the room."));
rootNode.children[1].children[0].children[0].children[0].children[0].children.push(new TreeNode("0100000", "Book the ball room", "You are able to have a great time and have a perfect day!"));
rootNode.children[1].children[0].children[0].children[0].children[0].children.push(new TreeNode("0100001", "Don't book the ball room", "You go back to your friends, defeated."));
rootNode.children[1].children[1].children[1].children[0].children[1].children.push(new TreeNode("0111011", "Give up", "Your parents drive you home and scold you for breaking their car."));
rootNode.children[1].children[1].children[2].children[0].children[1].children.push(rootNode.children[1].children[0]);
rootNode.children[1].children[1].children[2].children[0].children[1].children.push(new TreeNode("0112011", "Give up", "Your friends ask you what took you so long and you tell them about the bus. They are disappointed in you. You go home, defeated."));

let currentNode = rootNode;
getDomElements();
renderNode(currentNode);