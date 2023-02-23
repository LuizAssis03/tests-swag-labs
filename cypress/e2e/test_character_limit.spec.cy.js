describe('test', () => {

  it('should check to character limit', () => {

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

    let shoppingCar = cy.get('[class="shopping_cart_link"]');
    shoppingCar.should('be.visible').click().wait(2000);
    
    let checkout = cy.get('[class="btn btn_action btn_medium checkout_button"]');
    checkout.should('be.visible').click().wait(2000);

    let firstName = cy.get('#first-name').wait(2000);
    firstName.should('be.visible').type('test here 123');

    let lastName = cy.get('#last-name').wait(2000);
    lastName.should('be.visible').type('test here 123');

    let zipCode = cy.get('#postal-code').wait(2000);
    zipCode.should('be.visible').type('abcdefg123456789').wait(2000);
  })
})
