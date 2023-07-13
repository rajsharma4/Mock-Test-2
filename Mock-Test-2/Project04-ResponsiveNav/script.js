function myFunction() {
    let x = document.getElementById("nav");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}

let icon = document.querySelector(".icon");

if (icon) {
    icon.addEventListener("click", myFunction);
}