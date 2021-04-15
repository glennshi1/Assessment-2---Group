const navLinks = document.getElementsByTagName("a");

function onBtnClick(e) {
    for (btn of navLinks) btn.classList.remove("selected");
    if (e.id !="logo") e.classList.add("selected");
    else {
        document.location.hash = "#home";
    }
}