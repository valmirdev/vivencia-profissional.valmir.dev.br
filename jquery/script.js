    // Jquery para o bloco 1 - formulario
   
    var nome = $('#nomeP');
    // var botao = $('#enviar');
    var sexo;
    var prefixo;

    $(document).ready(function() {
        $('#enviar').click(function () {
            if($('#genero1').is(":checked")) {
                sexo = "menino ";
                prefixo = "um ";  
            } else if ($('#genero2').is(":checked")){
                sexo = "menina ";
                prefixo = "uma ";
            } 
        $('#mensagem').html( "Olá " + nome.val() + "," + "você é " + prefixo + sexo + "." );
             
        });     
    }); 
        
    //Js para o bloco 2 - Cores Preferidas

    function vermelho(cb){
        var elemento = $('#fundo'+cb.id);
        
        cb.checked ? $(elemento).css('background',"red") : $(elemento).css('background',"#fff");
    }
    
    function azul(cb){
        var elemento = $('#fundo'+cb.id);
        
        cb.checked ? $(elemento).css('background',"blue") : $(elemento).css('background',"#fff");
    }
    
    function amarelo(cb){
        var elemento = $('#fundo'+cb.id);
        
        cb.checked ? $(elemento).css('background',"yellow") : $(elemento).css('background',"#fff");
    }
    
    function verde(cb){
        var elemento = $('#fundo'+cb.id);
        
        cb.checked ? $(elemento).css('background',"green") : $(elemento).css('background',"#fff");
    }
    
    function branco(cb){
        var elemento = $('#fundo'+cb.id);
        
        cb.checked ? $(elemento).css('background',"#f2f2f2") : $(elemento).css('background',"#fff");
    }
    
    function preto(cb){
        var elemento = $('#fundo'+cb.id);
        
        cb.checked ? $(elemento).css('background',"black") : $(elemento).css('background',"#fff");
    }

    // JS para o bloco 3 - calculo de idade.

    var calculoIdade = $('#calcular');

    $('#calcular').click(function() {

        var hoje = $('#data1');
        var nascimento = $('#data2');

        var hojemsm = new Date(hoje.val());
        var nascimentomsm = new Date(nascimento.val());

        var subtracao = Math.floor(hojemsm.getTime() - nascimentomsm.getTime());
        var anos = Math.floor(subtracao / (1000 * 3600 * 24 * 365));

        $('#idade').html("Você tem " + anos + " anos.");

    });

    // Js para o bloco 4 - despedida.

    $('#finalizar').click(function () {

        var despedida = $('#opcao option:selected').val();
            alert(despedida);
    });