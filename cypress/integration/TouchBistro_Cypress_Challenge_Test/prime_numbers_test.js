///<reference types = "Cypress"/>
import MainPage from "../../../elements/pages/MainPage";

describe("Prime numbers tests", () => {
  const mainPage = new MainPage();
  const maxInt = Number.MAX_SAFE_INTEGER;

  beforeEach(() => {
    mainPage.visit();
  });

  //  Local 3000 page

  it("Local_3000 page", () => {
    cy.get("h1")
      .invoke("text")
      .should("equal", "Enter a number to get the median of primes:");
  });

  it("Positive test 1, multiple median", () => {
    mainPage.submitNumber(10);
    var result = mainPage.getValuesArray();
    result.should("equal", "The median is: [3,5]");
  });

  it("Positive test 2, single median", () => {
    mainPage.submitNumber(18);
    var result = mainPage.getValuesArray();
    result.should("equal", "The median is: [7]");
  });

  it("Positive 3, decimals", () => {
    mainPage.submitNumber(2.6);
    var result = mainPage.getValuesArray();
    result.should("equal", "The median is: [2]");
  });

  it("Positive 4, hundredths", () => {
    mainPage.submitNumber(8.24);
    var result = mainPage.getValuesArray();
    result.should("equal", "The median is: [3,5]");
  });

  it("Negative test 1, large num", () => {
    mainPage.submitNumber(maxInt);
    var result = mainPage.getValuesArray();
    result.should("equal", "The median is: []");
  });

  it("Negative test 2, zero", () => {
    mainPage.submitNumber(0);
    var result = mainPage.getValuesArray();
    result.should("equal", "The median is: [,]"); // It would be preferable to throw the error
  });

  it("Negative test 3, negative numbers", () => {
    mainPage.submitNumber(-18);
    var result = mainPage.getValuesArray();
    result.should("equal", "The median is: [,]"); // It would be preferable to throw the error.
  });

  it("Negative test 4, empty input", () => {
    mainPage.pressSubmitButton();
    var result = mainPage.getValuesArray();
    result.should("equal", "The median is: [,]"); // Cannot accept an empty string. You need to actually type something.
  });

  it("Negative test 5, letters", () => {
    mainPage.submitNumber("abs");
    var result = mainPage.getInput();
    result.should("equal", ""); // The code is stuck and the loading icon keeps spinning => Error: Request failed with status code 404
  });

  it("Negative test 6, symbol", () => {
    mainPage.submitNumber("$@&");
    var result = mainPage.getInput();
    result.should("equal", ""); // The code is stuck and the loading icon keeps spinning => Error: Request failed with status code 404
  });
});
