describe('test', () => {

  it('should check the page resize', () => {

    const userValid = Cypress.env("NAME_VALID");
    const passwordValid = Cypress.env("PASSWORD_VALID");

    const userProblem = Cypress.env("USER_PROBLEM");
    const passwordProblem = Cypress.env("PASSWORD_PROBLEM");

    cy.viewport(1100, 800)

    cy.visit('/')
    cy.get('[data-test="username"]').type(userProblem);
    cy.get('[data-test="password"]').type(passwordProblem);
    cy.get('[class="submit-button btn_action"]').click();
    cy.wait(2000)

    let imgProduct = cy.get('[class="inventory_item_img"]')
    imgProduct.should('have.css', 'width', '100%', 'be.visible')
   

  })
})
