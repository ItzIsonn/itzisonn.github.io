const button = document.querySelector(".toggle-pages-button");
const pages = document.querySelector(".pages");

button.addEventListener("click", () => {
    pages.classList.toggle("hidden");
    if (pages.classList.contains("hidden")) button.innerText = "Открыть выбор страниц";
    else button.innerText = "Закрыть выбор страниц";
})