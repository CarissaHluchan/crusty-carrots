describe('Nav spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
    it('passes', () => {
      cy.visit('http://localhost:3000')
    })
    it('Should correctly display the webpage, or at least the nav bar portion', () => {

      cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies').as('getMovies');

      // Visit the page after the intercept is set up
      cy.visit('http://localhost:3000');

      // Wait for the intercept alias to be called
      cy.wait('@getMovies').as('moviesRequest'); // Alias the wait result
      cy.get('h1').contains('Crusty')
      cy.get('h1').contains('Carrots')
      cy.get('img').should('have.attr', 'src', '/orange-carrot-2.svg')
    })
    it('Should have a functioning input area', () => {
      // Visit the page after the intercept is set up

      // Check that the search bar can take input; currently doesn't check that.
      cy.get('.search-by-title').type('Adam');
      cy.get('.search-by-title').should('have.value', 'Adam')


    });
    it('Should have dropdown filters', () => {

      cy.get('.filter-by-rating').select('8').invoke("val").should("eq", "8");
    })
    it('Should have functioning dropdown filters', () => {
      cy.get('.filter-by-rating').select('8').invoke("val").should("eq", "8");
      cy.get('.movie-title').contains("Black Adam").should('not.exist');
      cy.get('.movie-title').contains("Smile").should('exist');
    })

  });
// .get('h1').contains('h1', 'Feedback Loop') //
// As a user, when I load the application, I can see the title of the application
