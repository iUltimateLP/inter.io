/*
    inter.io
    Gestaltung II Projekt - HS Bremen - Andreas Teufel
    Jonathan Verbeek
    David Bollmann
*/

var styles = {};

// Called by the style selection screen
styles.handleStyleClicked = function(index) {
    // Grab the containers needed
    var infoContainer = document.getElementById("style-info-container");
    var styleContainer = document.getElementById("style-container");

    // Move the style container up and the info container down
    styleContainer.style.top = "235%";
    infoContainer.style.opacity = 1;
    infoContainer.style.top = "271%";

    // Update the text elements of the info box
    document.getElementById("style-info-name").innerHTML = "Style #" + index;
    document.getElementById("style-info-desc").innerHTML = "This is some description about style number " + index;
    
    // Get the selected style DOM element (the circles)
    var selectedStyleElem = styleContainer.children.item(index);

    // Calculate the offset the pointing arrow of the info box needs by looking at the bounding rect
    var arrowOffset = selectedStyleElem.getBoundingClientRect().left + (selectedStyleElem.getBoundingClientRect().width / 2) - 28;

    // Update the arrow offset
    document.getElementById("style-info-container-arrow").style.left = arrowOffset + "px";
}

