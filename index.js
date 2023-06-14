let pos = document.documentElement;


pos.addEventListener("mousemove", (e) => {
    let x = e.clientX + "px"
    let y = e.clientY + "px"
    pos.style.setProperty("--1", x);
    pos.style.setProperty("--2", y);
});


console.log(pos.style);