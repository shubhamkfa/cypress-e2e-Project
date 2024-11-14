import { homePage } from "../../Pages/homePage";
const homePageObj = new homePage()
import testData from "../../fixtures/testData.json"



describe('test automation', () => {

    before(() => {
        cy.loginPortal(testData.login.userName, testData.login.password)
    })

    it('add to card',()=>{

        homePageObj.searchProduct(testData.product.productName)
        homePageObj.clickOnAddToCart()
        homePageObj.verifyMsg().should('contain',testData.message.successMessage)
        


    })


})
