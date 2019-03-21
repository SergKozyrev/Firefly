let nav = document.getElementsByClassName("header-menu")[0];
nav.addEventListener("click", function (e) {
    e.preventDefault();
    let target = e.target;
    if (target.tagName.toLowerCase() === "a") {
        let links = nav.getElementsByClassName("menu-link");
        let id = target.getAttribute("href").replace("#", "");
        let section = document.getElementById(id);
        let coord = section.getBoundingClientRect();
        let coordTop = coord.top + pageYOffset;
        window.scrollTo({
            top: coordTop,
            behavior: "smooth"
        });
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("active");
        }
        target.classList.add("active");
    }
});