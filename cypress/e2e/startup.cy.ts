describe('template spec', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000')
  })

  it('passes', () => {
    cy.visit('http://localhost:3000')
  })
  
  it('greets with Docs tile', () => {
    cy.contains('h2','Docs')
  })

  it('greets with Learn tile', () => {
    cy.contains('h2','Learn')
  })

  it('greets with Templates tile', () => {
    cy.contains('h2','Templates')
  })
})