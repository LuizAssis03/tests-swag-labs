describe('test', () => {

  it('should check to add products to cart', () => {

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

    let productOne = cy.get('#add-to-cart-sauce-labs-backpack')
    productOne.click().should('be.visible').wait(2000);

    let productTwo = cy.get('#add-to-cart-sauce-labs-bolt-t-shirt')
    productTwo.should('be.visible').click().wait(2000);

    let selectionOne = cy.get('[class="inventory_item_name"]').should('contain.text', 'Sauce Labs Backpack')
    selectionOne.click({force:true}).wait(2000)
    cy.get('#add-to-cart-sauce-labs-fleece-jacket').click().should('be.visible')

  })
})
