describe('Cypress sample task', () => {
  beforeEach(() => {
    cy.visit('http://app.makeitfable.com/login')
    cy.injectAxe()
  })
  // 1. Scan page for accessibility using https://github.com/avanslaars/cypress-axe
  it('Has no errors detected by axe', () => {
    // Your code here
  })
  // 2. Validate that when the form is submitted with an error, an error message shows
  it('Displays front-end validation errors', function () {
    // Your code here 
  })

  // 3. Leave a comment showing the MongoDB query you would use to find the document in the `companies` collection where the value of the `shortcode` property is "FBL"
  // db.getCollection('companies')
})
