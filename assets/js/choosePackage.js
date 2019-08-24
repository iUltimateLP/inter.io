/*
    inter.io
    Gestaltung II Projekt - HS Bremen - Andreas Teufel
    Jonathan Verbeek
    David Bollmann
*/

var packages = {};

packages.packageData = [{
    name: "Vintage",
    desc: "This is a vintage style."
},{
    name: "Modern",
    desc: "This is a modern style."
},{
    name: "Shit",
    desc: "This is a shit style."
},{
    name: "Piss",
    desc: "Piss"
}];

// Called by the package selection screen
packages.handlePackageClicked = function(index) {
    // Grab the containers needed
    /*var infoContainer = document.getElementById("package-info-container");
    var packageContainer = document.getElementById("package-container");

    // Move the style container up and the info container down
    packageContainer.style.top = "335%";
    infoContainer.style.opacity = 1;
    infoContainer.style.top = "371%";

    // Update the text elements of the info box
    document.getElementById("package-info-name").innerHTML = packages.packageData[index].name;
    document.getElementById("package-info-desc").innerHTML = packages.packageData[index].desc;
    
    // Get the selected style DOM element (the circles)
    var selectedStyleElem = packageContainer.children.item(index);

    // Calculate the offset the pointing arrow of the info box needs by looking at the bounding rect
    var arrowOffset = selectedStyleElem.getBoundingClientRect().left + (selectedStyleElem.getBoundingClientRect().width / 2) - 28;

    // Update the arrow offset
    document.getElementById("package-info-container-arrow").style.left = arrowOffset + "px";
    */
}

packages.getContrastCheckedColor = function(hex) {	
    /*
        From this W3C document: http://www.webmasterworld.com/r.cgi?f=88&d=9769&url=http://www.w3.org/TR/AERT#color-contrast

        Color brightness is determined by the following formula: 
        ((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
    */

    // About half of 256. Lower threshold equals more dark text on dark background
    threshold = 130; 

    // Helper functions
    function hexToR(h) {return parseInt((cutHex(h)).substring(0,2),16)}
    function hexToG(h) {return parseInt((cutHex(h)).substring(2,4),16)}
    function hexToB(h) {return parseInt((cutHex(h)).substring(4,6),16)}
    function cutHex(h) {return (h.charAt(0)=="#") ? h.substring(1,7):h}

    // Get the hex color amounts
    hRed = hexToR(hex);
    hGreen = hexToG(hex);
    hBlue = hexToB(hex);

    // Calculate the brightness
    var cBrightness = ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;

    // Check the brightness
    if (cBrightness > threshold){
        return "dark";
    } else { 
        return "light";
    }	
}

packages.selectColorOptions = function(index) {
    var colors = document.getElementsByClassName("package-color");
    for (var i = 0; i < colors.length; i++) {
        var checkmark = colors.item(i).children[0];
        
        checkmark.classList.remove("selected");
    }

    colors.item(index).children[0].classList.add("selected");
}
