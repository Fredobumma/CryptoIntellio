function lockScroll() {
    document.body.classList.toggle("lock-scroll");
}

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
    item.addEventListener("click", function () {
        this.classList.toggle("collapsible--expanded");
    })
);

$("#news--container").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        768: {
            items: 2,
            nav: false
        },
        1024: {
            items: 3,
            nav: false
        }
        
    }
});