describe('My first Test Suite',function(){

  it('My first Test Case',function(){

   //first test step

    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length',4)
    //Accessing node
    cy.get('.products').find('.product').should('have.length',4)

    //Accessing the nth element from the multiple same elements
    //Alliasing concept
    //cy.get('.products').as('productLocator')
    cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

    // Looping concept in Cypress Automation

    cy.get('.products').find('.product').each(($el, index, $list) =>{

      const textVeg = $el.find('h4.product-name').text()

       if(textVeg.includes('Cashews')){

         cy.wrap($el).find('button').click()

       }


    })

    cy.get('.brand').should('have.text','GREENKART')

    cy.get('.brand').then(function(logoelement){

      cy.log(logoelement.text())
    
    })
})  




  
})