/*
    inter.io
    Gestaltung II Projekt - HS Bremen - Andreas Teufel
    Jonathan Verbeek
    David Bollmann
*/

var checkout = {};

checkout.currentWizardStep = 0;

checkout.nextWizardStep = function() {
    checkout.currentWizardStep++;

    var wizardContainer = document.getElementsByClassName("checkout-wizard-container").item(0);

    wizardContainer.scrollTo(wizardContainer.getBoundingClientRect().width * checkout.currentWizardStep, 0);
}
