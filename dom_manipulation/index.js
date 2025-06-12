const container = document.getElementById("abc");

const newDiv = document.createElement("div");

newDiv.style.border = "2px solid";
newDiv.style.padding = "20px";
newDiv.style.margin = "10px";
newDiv.style.borderRadius = "10px";
newDiv.style.backgroundColor = "#f9f9f9";

container.appendChild(newDiv);

const icon = document.createElement("span");
icon.textContent = "⭐";
icon.style.fontSize = "24px";
icon.style.marginRight = "10px";

newDiv.appendChild(icon);

const text = document.createElement("span");
text.textContent = "This is a cool dynamic box!";

newDiv.appendChild(text);

const button = document.createElement("button");
button.textContent = "Add Icon";
button.style.marginLeft = "20px";
button.style.padding = "5px 10px";
button.style.cursor = "pointer";

newDiv.appendChild(button);

button.addEventListener("click", ()=>{
    const newIcon = document.createElement("span");
    newIcon.textContent = "⭐";
    newIcon.className = "dynamic-icon";
    newIcon.style.marginLeft = "10px";
    newIcon.style.fontSize = "20px";
    newDiv.appendChild(newIcon);
});

const removeButton = document.createElement("button");
removeButton.textContent = "Remove Icon";
removeButton.style.marginLeft = "10px";
removeButton.style.padding = "5px 10px";
removeButton.style.cursor = "pointer";

newDiv.appendChild(removeButton);

removeButton.addEventListener("click", ()=>{
    const icons = newDiv.querySelectorAll(".dynamic-icon");
    if(icons.length>0){
        const lastIcon =icons[icons.length-1];
        newDiv.removeChild(lastIcon);
    }
});