document.addEventListener("scroll", () => {
    navColor();
});

const navColor = () => {
    if (window.scrollY > 10) {
        document.getElementById("background-scroll").classList.add("fundo-nav");
    } else {
        document.getElementById("background-scroll").classList.remove("fundo-nav");
    }
};
