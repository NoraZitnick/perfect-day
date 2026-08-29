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
    constructor(header, text, id = null) {
        this.header = header;
        this.text = text;
        this.children = [];
        this.id = id;
    }
}

const rootNode = new TreeNode("Welcome to the Perfect Day!", "This is the starting point of your journey. Choose an option below to begin.", 0);
rootNode.children.push(new TreeNode("Option 0", "You chose option 0. This is the next step in your journey.", 0.0));
rootNode.children.push(new TreeNode("Option 1", "You chose option 1. This is the next step in your journey.", 0.1));
rootNode.children[0].children.push(new TreeNode("Option 0.0", "You chose option 0.0. This is the next step in your journey.", 0.00));
rootNode.children[0].children.push(new TreeNode("Option 0.1", "You chose option 0.1. This is the next step in your journey.", 0.01));
rootNode.children[1].children.push(new TreeNode("Option 1.0", "You chose option 1.0. This is the next step in your journey.", 0.10));
rootNode.children[1].children.push(new TreeNode("Option 1.1", "You chose option 1.1. This is the next step in your journey.", 0.11));

let currentNode = rootNode;
getDomElements();
renderNode(currentNode);