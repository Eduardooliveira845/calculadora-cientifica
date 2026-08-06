const display = document.getElementById("display");

function adicionar(valor){
    display.value += valor;
}

function funcao(valor){
    display.value += valor;
}

function limpar(){
    display.value = "";
}

function apagar(){
    display.value = display.value.slice(0,-1);
}

function calcular(){

    try{

        let expressao = display.value.replace(/(\d+)%/g,"($1/100)");

        display.value = eval(expressao);

    }catch{

        display.value = "Erro";

    }

}
