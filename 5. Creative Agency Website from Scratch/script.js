let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("section");


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                link.classList.remove("active");
                document.querySelectorAll
            })
        }
    }
}