document.addEventListener("DOMContentLoaded", function () {
    let paragraph = document.createElement("p");
    let text = document.createTextNode("Whatever Text you want to have in here!");

    paragraph.style.color = "red";
    paragraph.style.textTransform = "uppercase";
    paragraph.className = "some-paragraph";

    paragraph.appendChild(text);
    document.body.appendChild(paragraph);

    let button = document.createElement("button");
    let btnText = document.createTextNode("Click Me!");
    button.appendChild(btnText);
    document.body.appendChild(button);
    button.addEventListener("click", function newclicklisten(){
        let newH1 = document.createElement("h1");
        let newH1Text = document.createTextNode("I HAVE BEEN CLICK!");

        newH1.style.color = "blue";
        newH1.style.fontWeight = "bold";

        newH1.appendChild(newH1Text);
        document.body.appendChild(newH1);
        button.removeEventListener("click", newclicklisten);
    });
});
