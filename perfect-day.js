let buttonContainer;
let header;
let paragraph;

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
    constructor(header, text, children = []) {
        this.header = header;
        this.text = text;
        this.children = children;
    }
}

const rootNode = new TreeNode("Welcome to the Perfect Day!", "This is the starting point of your journey. Choose an option below to begin.");
rootNode.children.push(new TreeNode("Option 1", "You chose option 1. This is the next step in your journey."));
rootNode.children.push(new TreeNode("Option 2", "You chose option 2. This is the next step in your journey."));
rootNode.children[0].children.push(new TreeNode("Option 1.1", "You chose option 1.1. This is the next step in your journey."));
rootNode.children[0].children.push(new TreeNode("Option 1.2", "You chose option 1.2. This is the next step in your journey."));
rootNode.children[1].children.push(new TreeNode("Option 2.1", "You chose option 2.1. This is the next step in your journey."));
rootNode.children[1].children.push(new TreeNode("Option 2.2", "You chose option 2.2. This is the next step in your journey."));

let currentNode = rootNode;
getDomElements();
renderNode(currentNode);