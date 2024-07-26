export class registerPage{

    webLocators = {
        firstName :'#input-firstname',
        lastname :'#input-lastname',
        email:'#input-email',
        phone:'#input-telephone',
        password :'#input-password',
        cpassword:'#input-confirm',
        checkBox:'input[type="checkbox"]',
        btn:'input[type="submit"]'
    }


    openURL(){
        cy.visit(Cypress.env('URL'))
    }
enterFirstname(santhosh){

    cy.get(this.webLocators.firstName).type( santhosh )

    }

    enterlastName(k){
        cy.get(this.webLocators.lastname).type(k)
    }

    // enterlastName()
enterEmail(EmailL){
    cy.get(this.webLocators.email).type(EmailL)
}

enterPhoneNumber(number){
    cy.get(this.webLocators.phone).type(number)
}

enterPassword(Pass){
    cy.get(this.webLocators.password).type(Pass),
    cy.get(this.webLocators.cpassword).type(Pass)
}

selectCbox(){
    cy.get(this.webLocators.checkBox).check()

}
clickonAction(){
    cy.get(this.webLocators.btn).click()
}
}
