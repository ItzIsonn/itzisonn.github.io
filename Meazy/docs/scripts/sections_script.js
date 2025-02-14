const urlParams = new URLSearchParams(window.location.search);
const pageParam = urlParams.get("page");

document.querySelectorAll(".page").forEach(info => info.style.display = "none");
document.querySelectorAll(".pages-buttons a").forEach(info => {
    info.classList.remove("selected");
    info.href = "index.html?page=" + info.classList[0].split("-")[0];
});

if (pageParam == null) window.location = window.location.search + "?page=" + document.querySelector(".page").classList[1].split("-")[0];
else {
    document.querySelector("." + pageParam + "-button").classList.add("selected");
    document.querySelector("." + pageParam + "-page").style.display = '';
}