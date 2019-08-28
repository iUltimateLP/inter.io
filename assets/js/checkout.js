/*
    inter.io
    Gestaltung II Projekt - HS Bremen - Andreas Teufel
    Jonathan Verbeek
    David Bollmann
*/

var checkout = {};

checkout.currentWizardStep = 0;

checkout.nextWizardStep = function() {
    if (checkout.currentWizardStep + 1 <= 2) {
        checkout.currentWizardStep++;

        for (var i = 0; i < 3; i++) {
            document.getElementById("checkout-wizard-" + (i + 1)).classList.add("noheight");
        }
        document.getElementById("checkout-wizard-" + (checkout.currentWizardStep + 1)).classList.remove("noheight");

        var wizardContainer = document.getElementsByClassName("checkout-wizard-container").item(0);

        wizardContainer.scrollTo(wizardContainer.getBoundingClientRect().width * checkout.currentWizardStep, 0);
    }

    if (checkout.currentWizardStep < 2) {
        document.getElementById("checkout-wizard-next").classList.remove("disabled");
    } else {
        document.getElementById("checkout-wizard-next").classList.add("disabled");
    }

    if (checkout.currentWizardStep > 0) {
        document.getElementById("checkout-wizard-prev").classList.remove("disabled");
    } else {
        document.getElementById("checkout-wizard-prev").classList.add("disabled");
    }
}

checkout.previousWizardStep = function() {
    if (checkout.currentWizardStep - 1 >= 0) {
        checkout.currentWizardStep--;

        for (var i = 0; i < 3; i++) {
            document.getElementById("checkout-wizard-" + (i + 1)).classList.add("noheight");
        }
        document.getElementById("checkout-wizard-" + (checkout.currentWizardStep + 1)).classList.remove("noheight");

        var wizardContainer = document.getElementsByClassName("checkout-wizard-container").item(0);

        wizardContainer.scrollTo(wizardContainer.getBoundingClientRect().width * checkout.currentWizardStep, 0);
    }

    if (checkout.currentWizardStep < 2) {
        document.getElementById("checkout-wizard-next").classList.remove("disabled");
    } else {
        document.getElementById("checkout-wizard-next").classList.add("disabled");
    }

    if (checkout.currentWizardStep > 0) {
        document.getElementById("checkout-wizard-prev").classList.remove("disabled");
    } else {
        document.getElementById("checkout-wizard-prev").classList.add("disabled");
    }
}
