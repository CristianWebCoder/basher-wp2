// Menu y submenu en desktop y mobile
$(document).ready(function() {
    var $subMenu = $('.submenu');
    var $openSubMenu = $('.menu-item-has-children');
    var $openSubMenuLink = $('.menu-item-has-children > a');

    $openSubMenu.on('click', function(e) {
        e.stopPropagation(); // Evita que el evento se propague a otros elementos
        $subMenu.toggleClass('show');
        $openSubMenu.toggleClass('rotate');
    });

    $openSubMenuLink.on('click', function(e) {
        e.preventDefault(); // Evita la acción predeterminada solo del enlace "Artículos"
    });

    $(document).on('click', function(e) {
        if ($subMenu.hasClass('show') && !$subMenu.is(e.target) && !$openSubMenu.is(e.target) && $subMenu.has(e.target).length === 0 && $openSubMenu.has(e.target).length === 0) {
            $subMenu.removeClass('show');
            $openSubMenu.removeClass('rotate');
        }
    });
});
// Quitando el scroll del body cuando se abre el popup menu
$(document).ready(function() {
    $('.menu_toggle').on('click', function() {
        $('.header_links').toggleClass('show'); 
        $('body').toggleClass('no-scroll'); 
        $(this).toggleClass('active');
    });
});

$(document).ready(function(){
    var header = $('.section_header'); // Selecciona el elemento del encabezado
    var headerLinks = $('.header_links'); // Selecciona los enlaces del encabezado
    var mainScrollsnap = $('.main_scrollsnap'); // Selecciona el contenedor con scroll

    function addOrRemoveStickyClasses() {
        var containerScrolled = mainScrollsnap.scrollTop() > 50; // Verifica si el contenedor .main_scrollsnap se ha desplazado más de 50px

        if(containerScrolled) {
            header.addClass('sticky'); // Añade clase 'sticky' si el contenedor se ha desplazado
            if($(window).width() <= 768) {
                headerLinks.addClass('sticky_links'); // Añade clase 'sticky_links' a los enlaces si la pantalla es pequeña
            }
        } else {
            header.removeClass('sticky'); // Remueve clase 'sticky' si el desplazamiento del contenedor está al principio
            headerLinks.removeClass('sticky_links'); // Remueve clase 'sticky_links' de los enlaces
        }
    }

    // Escuchar el evento de scroll en el contenedor .main_scrollsnap
    mainScrollsnap.scroll(addOrRemoveStickyClasses);
});
