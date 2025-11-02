var toggleBtn = document.querySelector("#toggle");
var navBar = document.querySelector("#navBar");

toggleBtn.addEventListener("click", () => {
    if (navBar.classList.contains["hidden"]) {
        navBar.classList.remove("hidden");
    }
    else {
        navBar.classList.add("hidden");
    }
})