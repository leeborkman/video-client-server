describe('Basic Video-Client interface tests', function() {
    it('Clicks around the tabs and finds one video in the expected grid', function() {
      cy.visit('http://localhost:3000')
      cy.contains('Upload')
      cy.contains('Upload').click()
      cy.contains('Drop')
      cy.contains('Videos')
      cy.contains('Videos').click()
      cy.get("[data-testid=video-grid]")
        .get("[data-testid=react-player]")
        .get("video")
    })
  })