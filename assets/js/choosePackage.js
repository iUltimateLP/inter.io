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
    var infoContainer = document.getElementById("package-info-container");
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
}

