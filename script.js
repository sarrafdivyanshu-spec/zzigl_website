window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.style.boxShadow = window.scrollY > 20
        ? "0 8px 30px rgba(0,0,0,0.3)"
        : "none";
});
