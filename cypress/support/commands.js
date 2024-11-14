// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })


    Cypress.Commands.add('loginPortal',(email,password)=>{
        cy.visit('') // this will automatically fetch base url from config file
        cy.get('input[id="input-email"]').type(email) //value not hardcoaded here so pass parameter 
        cy.get('input[id="input-password"]').type(password)
        cy.get('input[class="btn btn-primary"]').click()
    })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })