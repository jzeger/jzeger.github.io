// Go to first page on refresh
window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

// Navigation click listeners
document.getElementById("first").addEventListener("click", slideToFirst);
document.getElementById("second").addEventListener("click", slideToSecond);
document.getElementById("third").addEventListener("click", slideToThird);
document.getElementById("fourth").addEventListener("click", slideToFourth);

// Chevron click listeners
document.getElementById("first-chevron-right").addEventListener("click", slideToSecond);

document.getElementById("second-chevron-left").addEventListener("click", slideToFirst);
document.getElementById("second-chevron-right").addEventListener("click", slideToThird);

document.getElementById("third-chevron-left").addEventListener("click", slideToSecond);
document.getElementById("third-chevron-right").addEventListener("click", slideToFourth);

document.getElementById("fourth-chevron-left").addEventListener("click", slideToThird);

// calculate window width
let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

// Slide to first page
function slideToFirst(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
    document.getElementById("first").classList.add("active");
    document.getElementById("second").classList.remove("active");
    document.getElementById("third").classList.remove("active");
    document.getElementById("fourth").classList.remove("active");

    defaultNavChevrons();
}

// Slide to second page
function slideToSecond(){
    window.scrollTo({
        top: 0,
        left: w,
        behavior: "smooth",
    });
    document.getElementById("first").classList.remove("active");
    document.getElementById("second").classList.add("active");
    document.getElementById("third").classList.remove("active");
    document.getElementById("fourth").classList.remove("active");

    negativeNavChevrons();

    document.getElementById("HTML5").classList.add("animate-HTML5");
    document.getElementById("CSS3").classList.add("animate-CSS3");
    document.getElementById("Javascript").classList.add("animate-Javascript");
    document.getElementById("PHP").classList.add("animate-PHP");
}

// Slide to third page
function slideToThird(){
    window.scrollTo({
        top: 0,
        left: 2*w,
        behavior: "smooth",
    });
    document.getElementById("first").classList.remove("active");
    document.getElementById("second").classList.remove("active");
    document.getElementById("third").classList.add("active");
    document.getElementById("fourth").classList.remove("active");

    defaultNavChevrons();
}

// Slide to fourth page
function slideToFourth(){
    window.scrollTo({
        top: 0,
        left: 3*w,
        behavior: "smooth",
    });
    document.getElementById("first").classList.remove("active");
    document.getElementById("second").classList.remove("active");
    document.getElementById("third").classList.remove("active");
    document.getElementById("fourth").classList.add("active");

    negativeNavChevrons();
}

// Make navigation and chevrons negative (black)
function negativeNavChevrons(){
    document.getElementById("navigation").classList.add("negative-nav");
    let allCircles = document.getElementsByClassName("circle");
    for(let i = 0; i < allCircles.length; i++){
        allCircles[i].classList.add("negative-circle");
    }
    let allChevrons = document.getElementsByClassName("chevron");
    for(let i = 0; i < allChevrons.length; i++){
        allChevrons[i].classList.add("negative-chevron");
    }
}

// Make navigation and chevrons default (white)
function defaultNavChevrons(){
    document.getElementById("navigation").classList.remove("negative-nav");
    let allCircles = document.getElementsByClassName("circle");
    for(let i = 0; i < allCircles.length; i++){
        allCircles[i].classList.remove("negative-circle");
    }
    let allChevrons = document.getElementsByClassName("chevron");
    for(let i = 0; i < allChevrons.length; i++){
        allChevrons[i].classList.remove("negative-chevron");
    }
}

// Project mask hover listeners
document.getElementById("linars").addEventListener("mouseenter", function(){
    document.getElementById("linars-mask").classList.add("mask-animation");
    document.getElementById("linars-mask").classList.remove("mask-leave-animation");
});
document.getElementById("linars").addEventListener("mouseleave", function(){
    document.getElementById("linars-mask").classList.remove("mask-animation");
    document.getElementById("linars-mask").classList.add("mask-leave-animation");
});

document.getElementById("utg").addEventListener("mouseenter", function(){
    document.getElementById("utg-mask").classList.add("mask-animation");
    document.getElementById("utg-mask").classList.remove("mask-leave-animation");
});
document.getElementById("utg").addEventListener("mouseleave", function(){
    document.getElementById("utg-mask").classList.remove("mask-animation");
    document.getElementById("utg-mask").classList.add("mask-leave-animation");
});

document.getElementById("zr").addEventListener("mouseenter", function(){
    document.getElementById("zr-mask").classList.add("mask-animation");
    document.getElementById("zr-mask").classList.remove("mask-leave-animation");
});
document.getElementById("zr").addEventListener("mouseleave", function(){
    document.getElementById("zr-mask").classList.remove("mask-animation");
    document.getElementById("zr-mask").classList.add("mask-leave-animation");
});
