document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.querySelector("#themeToggle");
    const bodyElement = document.querySelector("body");

    themeButton.addEventListener("click", () => {
        bodyElement.classList.toggle("dark-mode");

        if (bodyElement.classList.contains("dark-mode")) {
            themeButton.textContent = "Modo Escuro";
        } else {
            themeButton.textContent = "Modo Claro";
        }
    });
});