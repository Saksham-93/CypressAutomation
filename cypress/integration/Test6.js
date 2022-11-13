describe('my sixth test suite' , function(){


  it('my sixth test case',function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //Handling Mouse hover events using invoke show

   // cy.get('.mouse-hover-content').invoke('show')
   // This is an example of clicking element which is hidden
    cy.contains('Top').click({force : true})

    cy.url().should('include','top')

  })


})





