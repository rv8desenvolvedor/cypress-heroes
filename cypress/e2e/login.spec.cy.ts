import { contains } from "cypress/types/jquery";

describe("Login Success/Fail spec", () => {
  it("Login - Success", () => {
    cy.visit("http://localhost:3000");
    cy.get("li > .undefined").should("contain", "Login").click();
    cy.get(":nth-child(1) > .mb-2").should("contain", "Email");
    cy.get('[data-cy="email"]').click().type("test@test.com");
    cy.get('[data-cy="password"]').click().type("test123");
    cy.get(".text-white").click();
    cy.get("li > .undefined").should("contain", "Logout");
  });

  it("Login - Email Fail", () => {
    cy.visit("http://localhost:3000");
    cy.get('[src="/images/cyheroes-logo.svg"]');
    cy.get("li > .undefined").click();
    cy.get(":nth-child(1) > .mb-2").should("contain", "Email");
    cy.get('[data-cy="email"]').click().type("rua@test.com");
    cy.get('[data-cy="password"]').click().type("test123");
    cy.get(".text-white").click();
    cy.get(".text-red-500").contains("Invalid email or password");
  });

  it("Login - Password Fail", () => {
    cy.visit("http://localhost:3000");
    cy.get('[src="/images/cyheroes-logo.svg"]');
    cy.get("li > .undefined").click();
    cy.get(":nth-child(1) > .mb-2").should("contain", "Email");
    cy.get('[data-cy="email"]').click().type("test@test.com");
    cy.get('[data-cy="password"]').click().type("test456");
    cy.get(".text-white").click();
    cy.get(".text-red-500").contains("Invalid email or password");
  });

  it("Login - No email structure - Only number", () => {
    cy.visit("http://localhost:3000");
    cy.get('[src="/images/cyheroes-logo.svg"]');
    cy.get("li > .undefined").click();
    cy.get(":nth-child(1) > .mb-2").should("contain", "Email");
    cy.get('[data-cy="email"]').click().type("12345");
    cy.get('[data-cy="password"]').click().type("test456");
    cy.get(".text-white").click();
    cy.get(".text-red-500").contains("Email is not valid");
  });

  it("Login - No email structure - Only letter", () => {
    cy.visit("http://localhost:3000");
    cy.get('[src="/images/cyheroes-logo.svg"]');
    cy.get("li > .undefined").click();
    cy.get(":nth-child(1) > .mb-2").should("contain", "Email");
    cy.get('[data-cy="email"]').click().type("lalalalalal");
    cy.get('[data-cy="password"]').click().type("test456");
    cy.get(".text-white").click();
    cy.get(".text-red-500").contains("Email is not valid");
  });

  it("Login - Email and Password Fail", () => {
    cy.visit("http://localhost:3000");
    cy.get('[src="/images/cyheroes-logo.svg"]');
    cy.get("li > .undefined").click();
    cy.get(":nth-child(1) > .mb-2").should("contain", "Email");
    cy.get('[data-cy="email"]').click().type("lua@test.com");
    cy.get('[data-cy="password"]').click().type("test456");
    cy.get(".text-white").click();
    cy.get(".text-red-500").contains("Invalid email or password");
  });

  it("Login - Empty email", () => {
    cy.visit("http://localhost:3000");
    cy.get('[src="/images/cyheroes-logo.svg"]');
    cy.get("li > .undefined").click();
    cy.get(":nth-child(1) > .mb-2").should("contain", "Email");
    cy.get('[data-cy="email"]').click();
    cy.get('[data-cy="password"]').click().type("test123");
    cy.get(".text-white").click();
    cy.get(":nth-child(1) > .text-red-500").contains("Email is required");
  });

  it("Login - Empty password", () => {
    cy.visit("http://localhost:3000");
    cy.get('[src="/images/cyheroes-logo.svg"]');
    cy.get("li > .undefined").click();
    cy.get(":nth-child(1) > .mb-2").should("contain", "Email");
    cy.get('[data-cy="email"]').click().type("test@test.com");
    cy.get('[data-cy="password"]');
    cy.get(".text-white").click();
    cy.get(":nth-child(2) > .text-red-500").contains("Password is required");
  });

  it("Login - incomplete/Message error - email and password ", () => {
    cy.visit("http://localhost:3000");
    cy.get('[src="/images/cyheroes-logo.svg"]');
    cy.get("li > .undefined").click();
    cy.get(".text-white").click();
    cy.get(":nth-child(1) > .text-red-500").contains("Email is required");
    cy.get(":nth-child(2) > .text-red-500").contains("Password is required");
  });
});
