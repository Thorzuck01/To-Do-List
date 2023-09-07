"use strict";
var text = document.getElementById("ftext");
var listContainer = document.getElementById("list-container");


function addtask(){
    
    if(text.value == ""){
        window.alert("Você não digitou nada")

    }else{
       var listItem = document.createElement("li");
       listItem.innerHTML = text.value;
       listContainer.appendChild(listItem);
       var span = document.createElement("span");
       span.innerHTML = "\u00d7";
       listItem.appendChild(span)
        saveData();
      
    }
    text.value = " ";

    

}

listContainer.addEventListener("click",function(e){
   
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();

    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

    saveData();


},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showtask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showtask();

