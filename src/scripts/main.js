$(document).ready(function(){

    // Capta um click na imagem de perfil que possui .imgProfile.imgProfile1, aplica a classe hidden nela e remove a classe hidden do qr code
    // Se a imagem de perfil tiver a classe hidden, remove dela e aplica no qr code que possui .imgProfile.imgProfile2
    $('.imgProfile').click(function(){
        const foto = $('.imgProfile1')
        const codigo = $('.imgProfile2')
        foto.toggleClass('hidden');
        codigo.toggleClass('hidden');
    });

    // Com window eu seleciono o objeto (no caso a janela do navegador)
    // .bind vincula a função anonima (já que não possui trigger como .hover ou .click, por exemplo) com o manipulador de evento 'resize
    // A função em si é uma verificação que aplicará ou removerá uma classe em body de acordo com o resultado.
    $(window).bind('resize', function() {
        if (screen.height < screen.width) {
            $('body').addClass('virado');
        } else {
            $('body').removeClass('virado');
        }
    });
});

    // Dentro do arquivo .scss nós teremos a classe "virado" com quatro linhas de código para a mesma finalidade, cada uma para um caso