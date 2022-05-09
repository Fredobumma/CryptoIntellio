window.onload = function() {
    window.onbeforeunload = function() {
        document.querySelector('#click').checked = false;
    }
    
    function lockScroll() {
        document.body.classList.toggle("lock-scroll");
        
        if (document.querySelector('#click').checked)
            document.body.style.overflowY = "hidden";
        else
            document.body.style.overflowY = "auto";
    }
    
    function wideScreenFunction(wideScreen) {
        if (wideScreen.matches) {
            document.querySelector('#click').checked = false;
            document.body.style.overflowY = "auto";
        }
    }
    
    let wideScreen = window.matchMedia("(min-width: 1024px)");
    wideScreenFunction(wideScreen);
    wideScreen.addEventListener('change', wideScreenFunction);
    document.getElementById("click").addEventListener("click", lockScroll);
    
    
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
}