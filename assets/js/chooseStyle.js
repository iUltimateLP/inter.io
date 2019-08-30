/*
    inter.io
    Gestaltung II Projekt - HS Bremen - Andreas Teufel
    Jonathan Verbeek
    David Bollmann
*/

var styles = {};
styles.selectedStyle = -1;

styles.styleData = [{
    name: "Vintage",
    desc: "This is a vintage style."
},{
    name: "Modern",
    desc: "This is a modern style."
},{
    name: "Shit",
    desc: "This is a shit style."
}];

// Called by the style selection screen
styles.handleStyleClicked = function(event, index) {
    /*// Grab the containers needed
    var infoContainer = document.getElementById("style-info-container");
    var styleContainer = document.getElementById("style-container");

    // Move the style container up and the info container down
    styleContainer.style.top = "235%";
    infoContainer.style.opacity = 1;
    infoContainer.style.top = "271%";

    // Update the text elements of the info box
    document.getElementById("style-info-name").innerHTML = styles.styleData[index].name;
    document.getElementById("style-info-desc").innerHTML = styles.styleData[index].desc;
    
    // Get the selected style DOM element (the circles)
    var selectedStyleElem = styleContainer.children.item(index);

    // Calculate the offset the pointing arrow of the info box needs by looking at the bounding rect
    var arrowOffset = selectedStyleElem.getBoundingClientRect().left + (selectedStyleElem.getBoundingClientRect().width / 2) - 28;

    // Update the arrow offset
    document.getElementById("style-info-container-arrow").style.left = arrowOffset + "px";
    */

    var allStyles = document.getElementsByClassName("style");
    for (var i = 0; i < allStyles.length; i++) {
        allStyles.item(i).classList.remove("selected");

        if (i != index) {
            document.getElementById("style-label-" + i).style.opacity = 0;
        }
    }

    var allImages = document.getElementsByClassName("style-img");
    for (var i = 0; i < allImages.length; i++) {
        allImages.item(i).classList.remove("selected");
    }

    var styleImg = event.path[0];
    var style = event.path[1];
    
    styleImg.classList.add("selected");
    style.classList.add("selected");

    styles.selectedStyle = index;
}

styles.handleStyleHoverIn = function(index) {
    if (styles.selectedStyle != index) {
        document.getElementById("style-label-" + index).style.opacity = 1;
    }
}

styles.handleStyleHoverOut = function(index) {
    if (styles.selectedStyle != index) {
        document.getElementById("style-label-" + index).style.opacity = 0;
    }
}
