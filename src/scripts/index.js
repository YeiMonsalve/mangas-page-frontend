let i = 0;

let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let text3 = document.getElementById("text3");

let a1 = document.querySelector(".a1");
let a2 = document.querySelector(".a2");
let a3 = document.querySelector(".a3");

let info = document.getElementById("info");

text1.style.opacity = 1;

a1.onclick = function () {
    text1.style.opacity = 1;
    text2.style.opacity = 0;
    text3.style.opacity = 0;
    i = 0;
};

a2.onclick = function () {
    text1.style.opacity = 0;
    text2.style.opacity = 1;
    text3.style.opacity = 0;
    i = 1;
};

a3.onclick = function () {
    text1.style.opacity = 0;
    text2.style.opacity = 0;
    text3.style.opacity = 1;
    i = 2;
};

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 37) {
        left();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        right();
    }
});

function right() {
    if (i == 0) {
        text1.style.opacity = 0;
        text2.style.opacity = 1;
        text3.style.opacity = 0;
        i++;
    } else if (i == 1) {
        text1.style.opacity = 0;
        text2.style.opacity = 0;
        text3.style.opacity = 1;
        i++;
    } else if (i == 2) {
        text1.style.opacity = 1;
        text2.style.opacity = 0;
        text3.style.opacity = 0;
        i = 0;
    }
}

function left() {
    if (i == 0) {
        text1.style.opacity = 0;
        text2.style.opacity = 0;
        text3.style.opacity = 1;
        i = 2;
    } else if (i == 1) {
        text1.style.opacity = 1;
        text2.style.opacity = 0;
        text3.style.opacity = 0;
        i--;
    } else if (i == 2) {
        text1.style.opacity = 0;
        text2.style.opacity = 1;
        text3.style.opacity = 0;
        i--;
    }
}