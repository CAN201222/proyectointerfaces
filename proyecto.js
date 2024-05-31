document.addEventListener("DOMContentLoaded", function(){
    gsap.from("header",{
    opacity: 0,
    duration: 1,
    ease:"power2.inOut"
    });

    gsap.from(".foto",{
         y:-50,
         opacity:0,
         duration:1,
         delay:0.5,
         ease:"bounce.out",
    });
    gsap.from(".nav_lik",{
        opacity:0,
        delay:1,
        duration:1,
        stagger:0.2,
        ease:"power2.inOut",
    });
    gsap.from(".botones_iconos__ico",{
        scale:0,
        duration:1,
        stagger:0.3,
        ease:"elastic.out(1, 0.3)",
        delay:1.5
    });
    gsap.from(".box",{
        opacity:0,
        duration:1,
        ease:"power2.inOut",
        delay:2
    });
    gsap.from(".content",{
        x:-100,
        opacity:0,
        duration:1,
        ease:"power2.inOut",
        delay:2.5
    });
    gsap.from(".container", {
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.inOut",
        delay: 5 
    });
    gsap.from(".rrss",{
        opacity:0,
        duration:1,
        stagger:0.2,
        ease:"power2.inOut",
        delay:4
    });
    let nav = document.querySelector(".nav");
    let buttonMenu= document.querySelector(".button-menu");
    
    buttonMenu.addEventListener("click",function(){
        nav.classList.toggle('active');
        changeIcon();
    })
    gsap.from(".card",{
        opacity: 0,
    duration: 3,
    ease:"power2.inOut"
    });

})

function changeIcon(){
    let iconBtnMenu = document.querySelector('button-menu i');

    if(iconBtnMenu.classList.contains('ri-menu-line')){
        iconBtnMenu.classList.remove('ri-menu-line');
        iconBtnMenu.classList.add('ri-close-line');
    } else{
        iconBtnMenu.classList.remove('ri-close-line');
        iconBtnMenu.classList.add('ri-menu-line');
    }
}

(function() {
    const sliders = [...document.querySelectorAll('.testimony_body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;
    let intervalId;
    let paused = false

    buttonNext.addEventListener('click', (event) => {
        event.preventDefault();
        changePosition(1);
    });

    buttonBefore.addEventListener('click', (event) => {
        event.preventDefault();
        changePosition(-1);
    });

    const changePosition = (add) => {
        const currentTestimony = document.querySelector('.testimony_body--show').dataset.id;
        value = Number(currentTestimony);
        value += add;

        sliders[Number(currentTestimony) - 1].classList.remove('testimony_body--show');
        if (value === sliders.length + 1 || value === 0) {
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value - 1].classList.add('testimony_body--show');
    }
    const togglePause = () => {
        paused = !paused; 
        if (!paused) {
            intervalId = setInterval(() => {
                changePosition(1);
            }, 5000);
        }
    };


    intervalId = setInterval(() => {
        if (!paused) {
            changePosition(1);
        }
    }, 5000);

    const buttonPause = document.querySelector('#pause');
    buttonPause.addEventListener('click', () => {
        clearInterval(intervalId);
    });
    togglePause();
})();