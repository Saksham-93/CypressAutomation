describe("My Third suite",function(){

    it("My third test",function(){
      
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      // To check the checkbox and do the validation
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
      // To uncheck the checkbox
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
      // To check Multiple Checkboxes
      cy.get('input[type="checkbox"]').check(['option2','option3'])

      //Handling Static Dropdown
      cy.get('select').select('option2').should('have.value','option2')

      //Handling Dynamic Dropdown
      cy.get('#autocomplete').type('ind')

      cy.get('.ui-menu-item div').each(($e1 , index , $list) => {

         if($e1.text()==='India'){

            cy.wrap($e1).click()
         }

      })
        
      cy.get('#autocomplete').should('have.value','India')

      // Handling Visibility and Non Visiblity

      cy.get('#displayed-text').should('be.visible')
      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')

      // Handling RadioButtons

      cy.get('[value="radio2"]').check().should('be.checked')

    })


})