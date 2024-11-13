import { registerPage } from "../../Pages/registerPage"
import registerData from "../../fixtures/registerData.json"
 const registerObj = new registerPage()
describe('testAutomation',()=>{

    it('register flow',()=>{
        registerObj.openURL(URL)
        registerObj.enterFirstName(registerData.firstName) // here we need to pass the data so we can get data from fixture folder
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickonContinue()

    })
})