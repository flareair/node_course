describe("Exchange API", () => {
  describe("GET /exchange-rates", () => {
    it("should return all exchange rates for RUB by default", () => {
      cy.request({
        method: "GET",
        url: "/exchange-rates",
      })
        .its("body")
        .then((body) => {
          expect(body).to.have.property("EUR");
          expect(body).to.have.property("USD");
          expect(body.USD).to.be.a("number");
          expect(body.EUR).to.be.a("number");
        });
    });

    it("should return exchange rates for specific currency", () => {
      cy.request({
        method: "GET",
        url: "/exchange-rates?currency=EUR",
      })
        .its("body")
        .then((body) => {
          expect(Object.keys(body).length).to.equal(1);
          expect(body).to.have.property("EUR");
          expect(body.EUR).to.be.a("number");
        });
    });

    it("should return an error if currency is not supported", () => {
      cy.request({
        method: "GET",
        url: "/exchange-rates?currency=RANDOM",
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.isOkStatusCode).to.be.false;
        expect(response.status).to.equal(500);
        expect(response.body).to.equal(
          "Can't retrieve exchange rates for RANDOM"
        );
      });
    });
  });
});
