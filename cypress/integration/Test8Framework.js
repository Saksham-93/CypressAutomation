import HomePage from '../support/pageObjects/HomePage'
import Productpage from '../support/pageObjects//ProductPage'


describe("My Framework Test" , function(){

   before(function(){
    
   cy.fixture('example').then(function(data){
    
    this.data = data

   })

   })

    it("Framework test" ,function(){

      //Create Object of the HomePage class

      const homePage = new HomePage()
      const productPage = new Productpage()
  
      //cy.visit("https://rahulshettyacademy.com/angularpractice/")

      cy.visit(Cypress.env('url'))

      homePage.getEditBox().type(this.data.name)

      homePage.getGender().select(this.data.gender)

      // First Validation of Test case

      homePage.getTwoWayBindingBox().should('have.value',this.data.name)

      // Second Validation of Minlength
      homePage.getEditBox().should('have.attr','minlength','2')

      // Third Validation of Radio Button Disabled

      homePage.getEntrepreneur().should('be.disabled')

      // Navigate to the Shop Page

      homePage.getShopTab().click()

     // Adding BlackBerry Phone to cart by Command

     // Array Loops

    this.data.productName.forEach(function(element){

      cy.selectProduct(element)
    })

    productPage.getCheckoutButton().click()

    // Validating the product price Test case
    var sum =0
    productPage.getProductsPrice().each(($e1 , index , $list)=>{

      const amount = $e1.text()
      var res = amount.split(" ")
      res = res[1].trim()
      sum = Number(sum)+Number(res)



    }).then(function(){

      cy.log(sum)
    })

    productPage.getTotalPrice().then(function(element){

      const totalAmount = element.text()
      var res1 = totalAmount.split(" ")
      var totalPrice = res1[1].trim()
      expect(Number(totalPrice)).to.equal(sum)
})

    productPage.getCheckoutCartButton().click()

    productPage.enterDeliveryLocation().type('India')

    productPage.clickAutoSuggestOption().click()

    productPage.getTermsandCondutionCheckBox({force: true}).click()

    productPage.getPurchaseButton().click()

    productPage.getSuccessMessage().then(function(validationText){

      const actualText = validationText.text()
      expect(actualText.includes(this.data.sucessMessage)).to.be.true

    })



    })
  
  
  })