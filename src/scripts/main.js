$(document).ready(function(){

    // Com window eu seleciono o objeto (no caso a janela do navegador)
    // .bind vincula a função anonima (já que não possui trigger como .hover ou .click, por exemplo) com o manipulador de evento 'resize'
    // A função em si é uma verificação que aplicará ou removerá uma classe em body de acordo com o resultado.
    $(window).bind('resize', function() {
        if (screen.height < screen.width) {
            $('body').addClass('virado');
        } else {
            $('body').removeClass('virado');
        }
    });
});
    // Dentro do arquivo .scss nós utiizaremos a classe .virado visando a responsividade apenas para o caso da rotação no mobile