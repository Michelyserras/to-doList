// // document é o objeto que representa o documento HTML carregado no navegador


// setTimeout(()=> { // set time out define um tempo para executar uma ação
//     // Seleciona o elemento h1 e altera seu texto
//     var titulo = document.querySelector("h1");
//     titulo.innerText = "Lista de Tarefa (Modificado pelo js)"; // Altera o texto do título
    
//     titulo.setAttribute("data-teste", "teste"); // vai ser utilizado para controlar as informações da tag
//     titulo.classList.toggle("bg-red"); // Altera a cor do texto do título para vermelho
//     // toggle que verifica se a classe bg-red já existe, se existir remove, se não existir adiciona
// }, 5000); 

// setTimeout(() => {
//     const titulo = document.querySelector("h1");
//     titulo.classList.toggle("bg-red"); // Alterna a classe bg-red no título
// }, 8000);

const finishButtons = document.querySelectorAll(".tasks ul li button");

function finishTask(event){
     const li = event.target.parentElement.parentElement; // pegando o elemento li que é pai do elemento button
     li.classList.toggle("done");
     console.log(event);

     if (li.classList.contains("done")) {
       event.target.innerText = "Desfazer";
       event.target.style.backgroundColor = "grey";
     } else {
       event.target.innerText = " Finalizar";
       event.target.style.backgroundColor = "#7fa7f0";
     }

}


finishButtons.forEach((button) =>{
    button.addEventListener("click", finishTask())
});

function removeTask(event){
    const li = event.target.parentElement.parentElement;
    const ul = li.parentElement;
    ul.removeChild(li);
}


const form = document.querySelector("form");

form.addEventListener(("submit"), (event) =>{
    event.preventDefault(); // evita o recarregamento da página
   
    const input = document.querySelector("input");
    const taskText = input.value;

    if(taskText === ""){
        return;
    }

    const span =  document.createElement("span");
    span.innerText = taskText;

    const finishButton = document.createElement("button");
    finishButton.classList.add("btn");
    finishButton.innerText = "Finalizar";
    finishButton.addEventListener("click", finishTask);
    

    const removebutton = document.createElement("button");
    removebutton.classList.add("btn");
    removebutton.innerText = "Remover";
    removebutton.addEventListener("click", removeTask);


    const buttons = document.createElement("div");
    buttons.appendChild(finishButton);
    buttons.appendChild(removebutton);

    

    const li =  document.createElement("li");
    li.appendChild(span);
    li.appendChild(buttons);


    const ul = document.querySelector(".tasks ul");
    // ul.appendChild(li); adiciona o filho sempre no final
    ul.prepend(li); // adiciona no inicio
});