const nav = document.getElementById("scroller");

window.onmousemove = (e) => {
    const percent = e.clientX / window.innerWidth;

    nav.animate({
        transform: `translate(${percent * nav.offsetWidth * -1}px, -0%)`,
    }, {
        fill: "both",
        duration: 20000,
    });
};        

const tl = gsap.timeline({ paused: true });

const animateOpenNav = () => {

    tl.to(".nav-container", 0.2, {
        autoAlpha: 1,
        delay: 0.1,
    });

    tl.to(".city-text, .logo-text", 0.2, {
        color: "#fff",
    },
        "-+0.1");

    tl.from(".social-links > div", 0.4, {
        opacity: 0,
        y: 10,
        stagger: {
            amount: 0.4,
        },
    });

    tl.to(".contact-link > a", 0.8, {
        top: 0,
        ease: "power2.inOut",
        stagger: {
            amount: 0.4,
        },
    },
        "-=0.4");

    tl.from(".nav-footer", 0.3, {
        opacity: 0
    }, "-=0.5").reverse();
};


const openNav = () => {
    animateOpenNav();
    const navBtn = document.getElementById("menu-toggle-btn");
    navBtn.onclick = function (e) {
        navBtn.classList.toggle("active");
        tl.reversed(!tl.reversed());
    };
};

openNav();

