describe('This is my fifth suite',function(){

 it('this is my fifth test case',function(){


  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

  // Handling webtable

 cy.get('[name="courses"] tr td:nth-child(2)') .each (($e1 , index , list) => {

     const text = $e1.text()
     if(text.includes("Python")){

        cy.get('[name="courses"] tr td:nth-child(2)').eq(index).next().then(function(price){

            const pricetext = price.text()

            expect(pricetext).to.equal('25')
        })

     }

 })


 })
 

})