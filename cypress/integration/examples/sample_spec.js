describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("http://localhost:3000");
  });
  it("Does not do much", () => {
    expect(true).to.equal(true);
  });
});
