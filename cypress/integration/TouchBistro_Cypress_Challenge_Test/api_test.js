///<reference types = "Cypress"/>

describe("API employees test", () => {
  Cypress.config("baseUrl", "http://localhost:3000");

  it("GET Page", () => {
    cy.request("GET", "http://localhost:3000")

      .its("status")
      .should("equal", 200);
  });

  it("GET multiple median", () => {
    cy.request("GET", "/api/10")

      .its("body")
      .its("median")
      .should("include", 3, 5);
  });

  it("GET single median", () => {
    cy.request("GET", "/api/18")

      .its("body")
      .its("median")
      .should("include", 7);
  });

  it("GET negative numbers", () => {
    cy.request("GET", "/api/-5")

      .its("body")
      .its("median")
      .should("include", null);
  });

  it("GET letters", () => {
    cy.request("GET", "/api/fdgtr")

      .its("body")
      .its("median")
      .should("include", null);
  });

  it("GET zero", () => {
    cy.request("GET", "/api/0")

      .its("body")
      .its("median")
      .should("include", null);
  });

  it("GET decimals", () => {
    cy.request("GET", "/api/45.7")

      .its("body")
      .its("median")
      .should("include", 17, 19);
  });

  it("GET bad end point", () => {
    cy.request("GET", "/hello")

      .its("status")
      .should("equal", 404);
  });
});
