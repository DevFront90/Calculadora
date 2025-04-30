const historicoEl = document.querySelector(".historico");
const  resultadoEl = document.querySelector(".resultado");

let historico = "";
let resultadoAtual = "";
let operador = "";
let resultadoAnterior = "";

function atualizarDisplay() {
    historicoEl.textContent = historico;
    resultadoEl.textContent = resultadoAtual;
}

function adicionarNumero(num) {
    resultadoAtual += num;
    atualizarDisplay();
}

function adicionarOperador(op) {
    if(resultadoAtual === "") return;
    historico = resultadoAtual + "" + op;
    operador = op;
    resultadoAtual = "";
    atualizarDisplay();
}

function calcularResultado() {
    if(resultadoAtual === "" || historico === "" ) return;

    let primeiroNumero = parseInt(historico.split(" ")[0]);
    let segundoNumero = parseFloat(resultadoAtual);
    let resultado = 0;

    switch(operador) {
        case "+":
        resultado =  primeiroNumero + segundoNumero;
        break;
    
        case "-":
            resultado = primeiroNumero - segundoNumero;
            break;

        case "x":
            resultado = primeiroNumero * segundoNumero;
            break;
        
            case "÷":
                resultado = segundoNumero !== 0 ? primeiroNumero / segundoNumero : "Erro";
                break;

            case "%":
                resultado = primeiroNumero % segundoNumero;
                break;
     }

     historico = historico + " " + resultadoAtual;
     resultadoAtual = resultado.toString();

     atualizarDisplay();
    

}

function limpar() {
    historico = "";
    resultadoAtual = "";
    operador = "";
    atualizarDisplay();
}

function trocarSinal() {
   if(resultadoAtual) {
     if(resultadoAtual.startsWith('-')) {
        resultadoAtual = resultadoAtual.slice(1);
     } else {
        resultadoAtual = '-' + resultadoAtual;
     }

     atualizarDisplay();
   }
}

function porcentagem() {
    if(resultadoAnterior && operador && resultadoAtual) {
        resultadoAtual = (parseFloat(resultadoAnterior) * parseFloat(resultadoAtual) / 100).toString();
        atualizarDisplay();
    } else if(resultadoAtual) {
       resultadoAtual = (parseFloat(resultadoAtual) / 100).toString();
       atualizarDisplay();
    }
}


function adicionarPonto() {
    if(!resultadoAtual.includes('.')) {
        if(resultadoAtual === '') {
            resultadoAtual = '0.';
        } else {
            resultadoAtual += '.';
        }

        atualizarDisplay();
    }
}
 

function voltar() {
    document.querySelector('.historico').textContent = '1 + 1';
    document.querySelector('.resultado').textContent = '0';
}

function trocarModoPorSlider(valor) {
    let body = document.body;
    body.classList.remove('modo-light', 'modo-dark', 'modo-gradiente');

    if(valor == 1) {
        body.classList.add('modo-light');

    } else if(valor == 2) {
        body.classList.add('modo-dark');
    } else if(valor == 3) {
        body.classList.add('modo-gradiente');
    }
}
