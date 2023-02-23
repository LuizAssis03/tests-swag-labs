describe('test', () => {

  it('should check to checkout limit', () => {

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

    let sideMenu = cy.get('#react-burger-menu-btn');
    sideMenu.should('be.visible').click().wait(2000);

    let optionItems = cy.get('#inventory_sidebar_link');
    optionItems.should('be.visible').click().wait(2000);

    let optionAbout = cy.get('#about_sidebar_link');
    optionAbout.should('be.visible').click().wait(2000);

    
  })
})
