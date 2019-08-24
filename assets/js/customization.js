/*
    inter.io
    Gestaltung II Projekt - HS Bremen - Andreas Teufel
    Jonathan Verbeek
    David Bollmann
*/

var customization = {};

customization.parameters = [{
    name: "Parameter #1",
    desc: "This is a parameter: {value}",
    value: false
}, {
    name: "Parameter #2",
    desc: "This is a parameter: {value}",
    value: false
}, {
    name: "Parameter #3",
    desc: "This is a parameter: {value}",
    value: false
}, {
    name: "Parameter #4",
    desc: "This is a parameter: {value}",
    value: 2
}];

customization.populateParameters = function() {
    customization.parameters.forEach(function(param, index) {
        document.getElementById("param-title-" + (index + 1)).innerHTML = param.name;

        var parsedDesc = customization.parameters[index].desc.replace("{value}", param.value);

        document.getElementById("param-desc-" + (index + 1)).innerHTML = parsedDesc;
    });
}

customization.toggleSwitch = function(index, mouseEvent) {
    /*
        <div class="switch" onclick="customization.toggleSwitch(event.path[0]);">
			<div class="switch-thumb"></div>
        </div>                           
    */

    var switchElement = mouseEvent.path[0];

    if (switchElement.classList.contains("active")) {
        switchElement.classList.remove("active");
        switchElement.children.item(0).classList.remove("active");

        customization.parameters[index].value = false;
    } else {
        switchElement.classList.add("active");
        switchElement.children.item(0).classList.add("active");

        customization.parameters[index].value = true;
    }

    var parsedDesc = customization.parameters[index].desc.replace("{value}", customization.parameters[index].value);

    document.getElementById("param-desc-" + (index + 1)).innerHTML = parsedDesc;
}

customization.decreaseNumber = function(index) {
    customization.parameters[index].value = customization.parameters[index].value - 1;

    var parsedDesc = customization.parameters[index].desc.replace("{value}", customization.parameters[index].value);

    document.getElementById("param-desc-" + (index + 1)).innerHTML = parsedDesc;
}

customization.increaseNumber = function(index) {
    customization.parameters[index].value = customization.parameters[index].value + 1;

    var parsedDesc = customization.parameters[index].desc.replace("{value}", customization.parameters[index].value);

    document.getElementById("param-desc-" + (index + 1)).innerHTML = parsedDesc;
}

customization.populateParameters();
