let buttonElement = document.getElementById('secret-button');
let pElement = document.getElementById('p-element');

function toggleHiddenElement(domElement){

    if(domElement.style.display === "none"){
        domElement.style.display = "block";
    }
    else{
        domElement.style.display = "none";
    }
}

buttonElement.addEventListener("click", ()=> toggleHiddenElement(pElement));