$(function () {
    /*fixed header */
    let header = $("#header")
    let headerWrapper = $("#headerWrapper")

    let headerHome = $("#homepage")
    let headerInnerH = header.height()

    let scrollPos = $(window).scrollTop();

    checkScroll(scrollPos, headerInnerH)

    let navToggle = $("#navToggle")
    let nav = $('#nav')

    $(window).on('scroll resize', function () {
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, headerInnerH)
    });

    function checkScroll(scrollPos, headerInnerH) {
        if (scrollPos > headerInnerH) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed")
        }
    }

    /*scroll smooth */
    $("[data-scroll]").on('click', function (event) {
        event.preventDefault();

        let elementID = $(this).data('scroll');

        let elementOffset = $(elementID).offset().top;

        nav.removeClass('show')

        $("html , body").animate({
            scrollTop: elementOffset + 1
        }, 600);
    })

    /*Nav Toggle */

    navToggle.on('click', function (event) {
        event.preventDefault();

        nav.toggleClass('show')
    })


    function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find('.burger-menu_button', '.burger-menu_lines');
        let links = menu.find('.burger-menu_link');
        let overlay = menu.find('.burger-menu_overlay');
        
        button.on('click', (e) => {
          e.preventDefault();
          toggleMenu();
        });
        
        links.on('click', () => toggleMenu());
        overlay.on('click', () => toggleMenu());
        
        function toggleMenu(){
          menu.toggleClass('burger-menu_active');
          
          if (menu.hasClass('burger-menu_active')) {
            $('body').css('overlow', 'hidden');
          } else {
            $('body').css('overlow', 'visible');
          }
        }
      }
      
      burgerMenu('.burger-menu');


});





