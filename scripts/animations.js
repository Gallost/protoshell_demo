const navButtons = document.getElementById("nav-buttons");
const welcomeItems = document.getElementById("welcome-items");
Array.from(navButtons.children).forEach(child => {
    child.addEventListener("click", () => {
        welcomeItems.classList.add("navbar-mode");
    });
});