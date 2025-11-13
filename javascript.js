const menuBtn = document.getElementByI ("menu-btn");
const navLinks = documentdgetElementByI("nav-links");
const menuBtnIcon = menuBtd.querySelector ("I");

menuBtn.addEventListener("click",(e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute ("class",isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener ("click",(e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute ("class", "ri-menu-line");
});

const scrollRevealoptio ={
    distance: "50px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
    origin: "right"
});

ScrollReveal ().reveal(".header__content h1", {
    scrollRevealoption,
    delay:500,
});

ScrollRevea ().reveal(".header__content p",{
    scrollRevealoption,
    delay: 1000,
});

ScrollReveal ().reveal("header__content h4",{
    scrollRevealoption,
    delay: 1500,

});

ScrollReveal ().reveal("header__content  .header__btns",{
    scrollRevealoption,
    delay: 2000,

});

ScrollReveal ().reveal(".story__image img",{
    scrollRevealoption,
    origin: "left",

});

ScrollReveal ().reveal(".story__content  .section__header",{
    scrollRevealoption,
    delay: 500,

});

ScrollReveal ().reveal(".story__content h4",{
    scrollRevealoption,
    delay: 1000,

});

ScrollReveal ().reveal(".story__content",{
    scrollRevealoption,
    delay: 1500,

});

ScrollReveal ().reveal(".story__content  .story__btn",{
    scrollRevealoption,
    delay: 2000,

});

ScrollReveal ().reveal(".client__image img",{
    scrollRevealoption,
    origin: "right",

});

const swiper = new Swiper(".swiper", {
    loop: true,
});
