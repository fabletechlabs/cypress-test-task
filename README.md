Cypress test task
=================

Thank you for your interest in joining Fable as QA Lead. We've prepared a simple test task so you can demonstrate the skills which will be required in the position.

## Setup (requires Node.js)

1. Fork this repo
2. Clone your copy of the repo
3. Run `npm install` in the working directory
4. Open cypress with `./node_modules/.bin/cypress open`

## Test task

Working in `cypress/integration/example_spec.js`:

1. Use **cypress-axe** to do an accessibility scan of the page
2. Write a test which validates that when the form is submitted with an error, an error message shows
3. Leave a comment in the spec file showing the query you would use to find the document in the **companies** collection where the value of the **shortcode** property is "FBL"

## Submitting your work

- Please commit and push your changes to your own fork of the repo
- Email a link to your repo to perry@makeitfable.com

## Resources

- https://docs.cypress.io/
- https://github.com/avanslaars/cypress-axe
- https://docs.mongodb.com/manual/tutorial/getting-started
