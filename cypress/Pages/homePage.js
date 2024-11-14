export class homePage{

    weblocatores={
        searchInput : 'input[class="form-control input-lg"]',
        clickSearch : '.btn.btn-default.btn-lg',
        selectProduct : 'img[title="MacBook"]',
        addtoCart : 'Add to Cart',
        successMessages : 'div[class="alert alert-success alert-dismissible"]'

    }

    searchProduct(productName){
        cy.get(this.weblocatores.searchInput).type(productName)
        cy.get(this.weblocatores.clickSearch).click()
    }
    
    clickOnAddToCart(){
        cy.contains(this.weblocatores.addtoCart).first().click()
    }

    verifyMsg(){
        // cy.get(this.weblocatores.successMessages).should(be.visible)
        return cy.get(this.weblocatores.successMessages) // not performing any assertion because we should avoid to add assertion in page class
        // all assertion we should use in the test file only ( imp)
    }




}