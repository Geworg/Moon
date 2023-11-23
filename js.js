let moon = document.getElementById("moonDiv");
let sun = document.getElementById("sunDiv");
let utro = function () {
    moon.style.transition = "8s";
    moon.style.marginLeft = "-350px";
    moon.style.marginBottom = "100px";
    moon.style.height = "50px";
    moon.style.width = "50px";
    sun.style.transition = "8s";
    sun.style.marginTop = "-100px";
    sun.style.backgroundColor = "rgb(236, 220, 76)";
    sun.style.width = "260px";
    sun.style.height = "260px";
}

setTimeout(() => {
    utro()
}, 1000
)