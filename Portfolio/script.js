function myMenuFunction() {
    var menu = document.getElementById("myNavMenu");
    menu.classList.toggle("responsive");
}

// Close menu when clicking outside

document.addEventListener("click", function (event) {
    var menu = document.getElementById("myNavMenu");
    var navMenuBtn = document.querySelector(".nav-menu-btn i");
    if (!menu.contains(event.target) && !navMenuBtn.contains(event.target)) {
        menu.classList.remove("responsive");
    }
});


//  dark mode

const body = document.querySelector("body");
const toggleSwitch = document.getElementById("toggle-switch");


toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Save user preference
    if (body.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// typing effect

var typingEffect = new Typed(".typedText", {
    strings: ["Shivangi Goswami"],

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,

})

// scroll animation

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 320 });

sr.reveal(".project-box", { interval: 200 });

sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: "2000",
    reset: true,
})

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: "2000",
    reset: true,
})

srRight.reveal(".skills", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

// active link

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
    const ScrollY = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,

            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");

        }
    });
}

window.addEventListener("scroll", scrollActive);


