$(document).ready(function(){
    $('.imgProfile').click(function(){
        const foto = $('.imgProfile1')
        const codigo = $('.imgProfile2')
        foto.toggleClass('hidden');
        codigo.toggleClass('hidden');
    });
    $('.imgProfile').hover(function(){
        const foto = $('.imgProfile1')
        const codigo = $('.imgProfile2')
        foto.toggleClass('hidden');
        codigo.toggleClass('hidden');
    });
});