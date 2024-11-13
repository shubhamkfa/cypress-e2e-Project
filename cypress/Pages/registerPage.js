export class registerPage {
    weblocaters = {
        firstName: '#input-firstname',
        lastName: '#input-lastname',
        email: '#input-email',
        telephone:'#input-telephone',
        password :'#input-password',
        passwordConfirm : '#input-confirm',
        policyCheckbox : 'input[type="checkbox"]',
        continue : 'input[class="btn btn-primary"]' 

    }
    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    enterFirstName(Fname){
        cy.get(this.weblocaters.firstName).type(Fname)
    }
    enterLastName(Lname){
        cy.get(this.weblocaters.lastName).type(Lname)
    }
    enterEmail(email){
        cy.get(this.weblocaters.email).type(email)
    }
    enterTelephone(mobile){
        cy.get(this.weblocaters.telephone).type(mobile)
    }

    enterPassword(password){
        cy.get(this.weblocaters.password).type(password)
        cy.get(this.weblocaters.passwordConfirm).type(password) //we have clubbed this as password value will be same

    }

    selectCheckbox(){
        cy.get(this.weblocaters.policyCheckbox).check()
    }

    clickonContinue(){
        cy.get(this.weblocaters.continue).click()
    }
    
}