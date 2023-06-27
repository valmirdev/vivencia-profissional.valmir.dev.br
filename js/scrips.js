// JS para o bloco 1 - formulario

var nome = document.getElementById("nomeP"); 
var botao = document.getElementById("enviar"); 
var sexo; 
var prefixo; 

botao.click = function () { 
    if(document.getElementById("genero1").checked) { 
      sexo = "menino"; 
      prefixo = "um"; 
  } else if (document.getElementById("genero2").checked){ 
      sexo = "menina"; 
      prefixo ="uma";
  }
  document.getElementById('mensagem').innerHTML = "Olá " + nome.value + "," + "você é " + prefixo + " " + sexo + "!!!!"; // na tela com o id mensagem irá escrever o olá + o nome que foi digitado no campo txtNome + , + você é + o prefixo e sexo selecionado.
  
};


//Js para o bloco 2 - Cores Preferidas

function vermelho(cb) {
    var elemento = document.getElementById("fundo"+cb.id);
    
    elemento.style.backgroundColor = cb.checked ? "red" : "#fff";
    }

function azul(cb) {
    var elemento = document.getElementById("fundo"+cb.id);
    
    elemento.style.backgroundColor = cb.checked ? "blue" : "#fff";
    }

function amarelo(cb) {
    var elemento = document.getElementById("fundo"+cb.id);
    
    elemento.style.backgroundColor = cb.checked ? "yellow" : "#fff";
    }
        
function verde(cb) {
    var elemento = document.getElementById("fundo"+cb.id);
    
    elemento.style.backgroundColor = cb.checked ? "green" : "#fff";
    }

function branco(cb) {
    var elemento = document.getElementById("fundo"+cb.id);
    
    elemento.style.backgroundColor = cb.checked ? "#f2f2f2" : "#fff";
    }

function preto(cb) {
    var elemento = document.getElementById("fundo"+cb.id);
    
    elemento.style.backgroundColor = cb.checked ? "black" : "#fff";
    }

//JS para o bloco 3 - calculo de idade.

var botao3 = document.getElementById("calcular");
botao3.addEventListener('click', function (){ 

var hoje = document.getElementById("data1");
var nascimento = document.getElementById("data2"); 

var hojemsm = new Date(hoje.value);
var nascimentomsm = new Date(nascimento.value);

var subtracao = Math.abs(hojemsm.getTime() - nascimentomsm.getTime());
var anos = Math.ceil(subtracao / (1000 * 3600 * 24 * 365)-1); 

(document.getElementById('idade')).innerHTML = "Você tem " + anos + " anos.";

});

// Js para o bloco 4 - despedida.
var botao2 = document.getElementById("finalizar");
botao2.addEventListener('click', function (){    

    var mensagemescolhida = document.getElementById("opcao");
    var itemSelecionado = mensagemescolhida.options[mensagemescolhida.selectedIndex].value;
    alert(itemSelecionado);
     
 });
