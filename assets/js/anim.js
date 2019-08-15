/*
    inter.io
    Gestaltung II Projekt - HS Bremen - Andreas Teufel
    Jonathan Verbeek
    David Bollmann
*/

var anims = {};

// For the style screen, this runs one animation for ONE style circle
anims.styleAnimStep = function(idx) {
    // Collect all circles and style images
    var circles = document.getElementsByTagName("circle");
    var imgs = document.getElementsByClassName("style-img");

    // The circle is a SVG <circle/> so it supports "opening" up like a round progress bar
    var circle = circles.item(idx);
    var r = circle.r.baseVal.value;
    var circum = r * 2 * Math.PI;

    // 1 is the target progress = which is a full circle
    var offset = circum - 1 * circum;

    // This timeout delays every animation by idx*100, which means every circle is 100ms apart from the others, to make the animation fluid
    setTimeout(function() {
        // This fills the circle (the CSS transition cares about smoothly animating it)
        circle.style.strokeDasharray = circum + " " + circum;
        circle.style.strokeDashoffset = offset;

        // Get the corresponding round image
        var img = imgs.item(idx);

        // Wait until the circle progress filled
        setTimeout(function() {
            // Make sure to only animate transform now, and increase the circles scale
            circle.style.transitionProperty = "transform";
            circle.style.transitionDuration = "0.2s";
            circle.style.transform = "scale(1.1)";

            // Make the circle stroke dashed
            circle.style.strokeDasharray = "10";
            circle.style.strokeDashoffset = 0;
            
            // Also animate and scale up the inner image
            img.style.transitionProperty = "transform";
            img.style.transitionDuration = "0.2s";
            img.style.transform = "scale(1.1)";

            // Wait until the scale transitioned
            setTimeout(function() {
                // Reset the scales
                circle.style.transform = "scale(1)";
                img.style.transform = "scale(1)"
            }, 200);
        }, 200);   
    }, idx * 100);
}

// Runs the style screen intro animation
anims.styles = function() {
    // We have three style circles right now
    anims.styleAnimStep(0);
    anims.styleAnimStep(1);
    anims.styleAnimStep(2);

    anims.didAnimateStyles = true;
}

