class homePage{

    weblocators ={

        search_input:'.form-control.input-lg',
        click_search:'.fa.fa-search',
        product:'img[title="MacBook"]',
        addtocart:'Add to Cart',
        successMessage:'div.alert.alert-success.alert-dismissible'

    }


    searchBox(){
        cy.get(this.weblocators.click_search).type()
    }

}