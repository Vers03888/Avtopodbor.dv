$(".loaderArea").css("display", "none");

$(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
        $('#top').fadeIn();
    } else {
        $('#top').fadeOut();
    }
});

$('#top').click(function() {
    $('body, html').animate({scrollTop: 0}, 700);
});

(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav-close');
    const menuLinks = document.querySelectorAll('.header_link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
    if (window.innerWidth <768) {
        for (let i = 0; i < menuLinks.length; i++) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header_nav_active');
            });
        }
    }
}());