describe("Sample test", () => {
  it("should open google.com", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });

    cy.visit("www.google.com")
      .get("input[name='q']")
      .type("epam{enter}")
      .get("a:contains(EPAM | Enterprise Software Development)")
      .click()
      .get("h2.title-slider__title")
      .should("contain", "Engineering the Future");
  });
});
