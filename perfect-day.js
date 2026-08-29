let buttonContainer;
let header;
let paragraph;
let parentNode;

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

    currentNode = currentNode.children[buttonIndex];
    renderNode(currentNode);
}

class TreeNode {
    constructor(id = null, header, text) {
        this.header = header;
        this.text = text;
        this.children = [];
        this.id = id;
    }
}

const rootNode = new TreeNode("0", "Welcome to the Perfect Day!", "This is the starting point of your journey. Choose an option below to begin.");
rootNode.children.push(new TreeNode("00", "Option 0", "You chose option 0. This is the next step in your journey."));
rootNode.children.push(new TreeNode("01", "Option 1", "You chose option 1. This is the next step in your journey."));
rootNode.children[0].children.push(new TreeNode("000", "You chose option 0.0. This is the next step in your journey."));
rootNode.children[0].children.push(new TreeNode("001", "You chose option 0.1. This is the next step in your journey."));
rootNode.children[1].children.push(new TreeNode("010", "You chose option 1.0. This is the next step in your journey."));
rootNode.children[1].children.push(new TreeNode("011", "You chose option 1.1. This is the next step in your journey."));
rootNode.children[0].children[0].children.push(new TreeNode("0000", "You chose option 0.0.0. This is the next step in your journey."));
rootNode.children[0].children[0].children.push(new TreeNode("0001", "You chose option 0.0.1. This is the next step in your journey."));
rootNode.children[0].children[1].children.push(new TreeNode("0010", "You chose option 0.1.0. This is the next step in your journey."));
rootNode.children[0].children[1].children.push(new TreeNode("0011", "You chose option 0.1.1. This is the next step in your journey."));
rootNode.children[1].children[0].children.push(new TreeNode("0100", "You chose option 1.0.0. This is the next step in your journey."));
rootNode.children[1].children[0].children.push(new TreeNode("0101", "You chose option 1.0.1. This is the next step in your journey."));
rootNode.children[1].children[1].children.push(new TreeNode("0110", "You chose option 1.1.0. This is the next step in your journey."));
rootNode.children[1].children[1].children.push(new TreeNode("0111", "You chose option 1.1.1. This is the next step in your journey."));
let currentNode = rootNode;
getDomElements();
renderNode(currentNode);