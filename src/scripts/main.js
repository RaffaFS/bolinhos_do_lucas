$(document).ready(function(){
    $('.imgProfile').click(function(){
        const foto = $('.imgProfile1')
        const codigo = $('.imgProfile2')
        foto.toggleClass('hidden');
        codigo.toggleClass('hidden');
    });
    $(window).on("orientationchange", function(){
        if (window.orientation !== 90 && window.orientation !== -90){
            screen.orientation.lock("portrait")
        }
    })
});