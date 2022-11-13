class Productpage{

  getCheckoutButton(){

    return cy.get('.nav-link.btn.btn-primary')

  }

  getCheckoutCartButton(){

    return cy.contains('Checkout')
  }

  enterDeliveryLocation(){

    return cy.get('#country')
  }

  clickAutoSuggestOption(){

    return cy.get('.suggestions > ul > li > a')
  }

  getTermsandCondutionCheckBox(){

    return cy.get('.checkbox')
  }

  getPurchaseButton(){
    return cy.get('[value="Purchase"]')
  }

  getSuccessMessage(){

    return cy.get('.alert')
  }

  getProductsPrice(){

    return cy.get('.table.table-hover tr td:nth-child(4) strong')
  }

  getTotalPrice(){

    return cy.get('h3 strong')
  }


}

export default Productpage;