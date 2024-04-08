import { registerPage } from "../../Pages/registerPage"
const registerObj = new registerPage()
import registerData from '../../fixtures/registerData.json'





describe('test automation' ,()=>{


    it('register flow',()=>{

        registerObj.openURL()
        registerObj.enterFirstname(registerData.firstname)
        registerObj.enterlastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCbox()
        registerObj.clickonAction()


    })
})