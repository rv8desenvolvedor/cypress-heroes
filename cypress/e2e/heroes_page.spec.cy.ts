describe("Logged page spec", () => {
  it("Enjoy the hero The Smoker - Like and Payment (Yes/No) ", () => {
    cy.visit("http://localhost:3000");
    cy.get("li > .undefined").should("contain", "Login").click();
    cy.get(":nth-child(1) > .mb-2").should("contain", "Email");
    cy.get('[data-cy="email"]').click().type("test@test.com");
    cy.get('[data-cy="password"]').click().type("test123");
    cy.get(".text-white").click();
    cy.get("li > .undefined").should("contain", "Logout");
    cy.get('[data-cy="like"]').eq(0).click();
    cy.get('[data-cy="fans"]').eq(0).contains("123");
    cy.get('[data-cy="money"]').eq(0).click();
    cy.get(".bg-white").contains("The Smoker");
    cy.get(".text-white").click();
    cy.get('[data-cy="saves"]').eq(0).contains("108");
  });
});
