let activeSections = [];
if (sessionStorage.getItem('activeSections') != null) {
    activeSections = sessionStorage.getItem('activeSections').split(" ");
}

document.querySelectorAll(".page").forEach(info => info.style.display = "none");
document.querySelectorAll(".pages-buttons a").forEach(info => {
    info.classList.remove("selected");
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("page", info.classList[0].replaceAll("-button", ""));
    info.href = window.location.protocol + "//" + window.location.host + window.location.pathname + "?" + urlParams.toString();
});

document.querySelectorAll(".pages-title").forEach(title => {
    const selector = title.classList[1].replaceAll("-title", "");
    const buttons = document.querySelector(".pages-buttons." + selector + "-buttons");
    buttons.classList.add("hidden");

    title.addEventListener("click", () => {
        buttons.classList.toggle("hidden");
        if (!buttons.classList.contains("hidden")) {
            if (!activeSections.includes(selector)) activeSections.push(selector);
        }
        else {
            activeSections.splice(activeSections.indexOf(selector), 1);
        }

        if (activeSections.length > 0) {
            sessionStorage.setItem("activeSections", activeSections.join(" "));
        }
        else {
            sessionStorage.removeItem("activeSections");
        }
    })
})



const pageParam = new URLSearchParams(window.location.search).get("page");
if (pageParam == null) {
    const query = window.location.search.includes("?") ? "&" : "?";
    window.location = window.location.search + query + "page=" + document.querySelector(".pages-buttons a").classList[0].replaceAll("-button", "");
}
else {
    document.querySelector("." + pageParam + "-button").classList.add("selected");
    document.querySelector(".page." + pageParam + "-page").style.display = '';
}

for (const buttons of activeSections) {
    document.querySelector(".pages-buttons." + buttons + "-buttons").classList.remove("hidden");
}