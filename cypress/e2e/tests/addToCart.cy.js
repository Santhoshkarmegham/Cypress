import { homePage } from "../../Pages/homePage"
const homepageObj = new homePage()

import testData from '../../fixtures/testData.json'



describe('test automation2',()=>{

    it('Add to cart',()=>{

        
        before(()=>{
            cy.Login(testData.login.userName,testData.login.password)
        })

it('Add To Cart',()=>{
    homepageObj.searchproduct(testData.product.productName)
    homepageObj.addToCart()
    homepageObj.verifySuccessMessage().should('contain',testData.message.successMessage).and('contain',testData.product.productName)
})

    })
})