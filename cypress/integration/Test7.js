import 'cypress-iframe'

describe("Handling iframes" , function(){

  it("Frame test" ,function(){

     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
     cy.frameLoaded('#courses-iframe')

     cy.iframe().find("a[href*='mentorship']").eq(0).click()
     cy.wait(2000)
     cy.iframe().find("div h1[class*='pricing-title']").should('have.length',2)


  })


})