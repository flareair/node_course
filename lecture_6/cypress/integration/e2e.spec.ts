describe("Sample test", () => {
  it("should open google.com", () => {
    cy.visit("www.google.com").contains("google");
  });
});
