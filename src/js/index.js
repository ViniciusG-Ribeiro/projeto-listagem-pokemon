const botaoAlterarTema = document.getElementById("botao-alterar-tema");
//2
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

//3
botaoAlterarTema.addEventListener("click", () => {

    //2 mudar pro calor
    //6 verificar classe do body
    const modoEscutoEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro"); //alterna o valor booleano ativo ou não

    if (modoEscutoEstaAtivo) {
        //7
        //body.classList.remove("modo-escuro");
        
        //8
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
    } else {
        //4 muda pra escuro
        //body.classList.add("modo-escuro");

        //5 muda icone
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    };

});