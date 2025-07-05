describe("M3alem Website Smoke Test", () => {
  it("should load the homepage successfully", () => {
    cy.visit("/");
    cy.contains("M3alem");
    cy.contains("Trouvez le bon technicien en quelques clics");
  });
});

