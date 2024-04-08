export class homePage{

    weblocators ={

        search_input:'.form-control.input-lg',
        click_search:'.fa.fa-search',
        product:'img[title="MacBook"]',
        addtocart:'Add to Cart',
        successMessage:'div.alert.alert-success.alert-dismissible'

    }


    searchproduct(productname){
        cy.get(this.weblocators.search_input).type(productname)
        cy.get(this.weblocators.click_search).click()
    }

    addToCart(){
        cy.contains(this.weblocators.addtocart).first().click()
    }

    verifySuccessMessage(){
        return cy.get(this.weblocators.successMessage)
    }

}