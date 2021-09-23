///<reference types = "Cypress"/>
class MainPage {
  visit() {
    cy.openMainPage();
  }

  submitNumber(num) {
    cy.inputNumber(num);
    cy.pressSubmit();
  }

  pressSubmitButton() {
    cy.pressSubmit();
  }

  getValuesArray() {
    return cy.getResponse();
  }

  getInput() {
    return cy.getInputText();
  }
}

export default MainPage;
