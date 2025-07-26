// document é o objeto que representa o documento HTML carregado no navegador

setTimeout(()=> { // set time out define um tempo para executar uma ação
    // Seleciona o elemento h1 e altera seu texto
    var titulo = document.querySelector("h1");
    titulo.innerText = "Lista de Tarefa (Modificado pelo js)"; // Altera o texto do título
    
    titulo.setAttribute("data-teste", "teste"); // vai ser utilizado para controlar as informações da tag
    titulo.classList.toggle("bg-red"); // Altera a cor do texto do título para vermelho
    // toggle que verifica se a classe bg-red já existe, se existir remove, se não existir adiciona
}, 5000); 

setTimeout(() => {
    const titulo = document.querySelector("h1");
    titulo.classList.toggle("bg-red"); // Alterna a classe bg-red no título
}, 8000);
