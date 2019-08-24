/*
    inter.io
    Gestaltung II Projekt - HS Bremen - Andreas Teufel
    Jonathan Verbeek
    David Bollmann
*/

var interio = {};

// Used to enable smooth scrolling when clicking on the "next step" arrow on the bottom of a page
interio.smoothScrollWorkaround = function() {
    // Workaround by https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}

// Update the navigation bar
interio.updateNavbar = function() {
    var navbar = document.getElementById("navbar-container");

    // Decide which section the user is in by looking at the scroll offset
    var currentSectionIndex = Math.floor((window.pageYOffset / document.body.getBoundingClientRect().height) * 6);

    // Update all navbar items to be active if they are below the current section
    for (var i = 0; i < navbar.children.length; i++) {
        var navbarItem = navbar.children.item(i);

        if (i <= currentSectionIndex) {
            navbarItem.classList.add("active");
        } else {
            navbarItem.classList.remove("active");
        }
    }

    // Bring in the intro animations if we reach that page and didn't animate yet
    if (anims.didAnimateStyles !== true && currentSectionIndex == 2) {
        anims.styles();
    }
    
    if (anims.didAnimatePackages !== true && currentSectionIndex == 3) {
        anims.packages();
    }
}

// Hook the window scroll event to update the navbar live when scrolling
window.onscroll = function() {
    interio.updateNavbar();
}

interio.smoothScrollWorkaround();
