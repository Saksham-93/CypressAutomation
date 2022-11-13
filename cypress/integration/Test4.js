describe("My fourth suite",function(){


  it("My fourth test",function(){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //Clicking Alert Button to get Alert 
    cy.get("#alertbtn").click()

    //Clicking Confirm button to get Confirmation Alert
    cy.get("#confirmbtn").click()

    //Handling window Alert
    cy.on("window:alert" , (str)=>{

     expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    //Handling window Alert
    cy.on("window:confirm" , (str)=>{

      expect(str).to.equal('Hello , Are you sure you want to confirm?')
     })

     // Handling the child tab through invoke button

     cy.get('#opentab').invoke('removeAttr','target').click()

     // Validation of the url
     cy.url().should('include','rahulshettyacademy')
    
     // Navigating back to the previous url
     cy.go('back')



    


  })



})