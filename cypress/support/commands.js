Cypress.Commands.add("openMainPage", () => {
  cy.visit("http://localhost:3000/");
});

Cypress.Commands.add("inputNumber", (num) => {
  cy.get("input").click().type(num);
});

Cypress.Commands.add("pressSubmit", () => {
  cy.get("button").click();
});

Cypress.Commands.add("getResponse", () => {
  return cy.get("h2").contains("The median").invoke("text");
});

Cypress.Commands.add("getInputText", () => {
  return cy.get("input").invoke("text");
});
