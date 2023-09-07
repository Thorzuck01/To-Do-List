  "use strict";
    var text = document.getElementById("ftext");
    var listContainer = document.getElementById("list-container");

    function resetInput() {
        text.value = ""; // Limpa o valor do campo de entrada
        text.placeholder = "Digite sua tarefa aqui..."; // Restaura o placeholder original
   }

    function addtask(){
        
        if(ftext.value === ""){
            window.alert("[Error] Nenhuma task digitada");

        }else{
            var listItem = document.createElement("li");
            listItem.innerHTML = text.value;
            listContainer.appendChild(listItem);
            var span = document.createElement("span"); 
            span.innerHTML = "\u00d7";
            listItem.appendChild(span);
           resetInput();
            save();
           
            
        }

    }


    listContainer.addEventListener("click",function(e){
      
        if(e.target.tagName == "LI"){
            e.target.classList.toggle("checked");
            save();

        }else if(e.target.tagName == "SPAN"){
            e.target.parentElement.remove();
            save();
        }


    });

    function save(){
        localStorage.setItem("data",listContainer.innerHTML);
    }
    function showtask(){
       listContainer.innerHTML = localStorage.getItem("data");
    }
    
    showtask();
