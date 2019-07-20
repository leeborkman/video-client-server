describe('Basic Video-Client interface tests', function() {
    it('Visits the local Video Grid client', function() {
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