describe('Nav spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 200,
      fixture: 'moviesList'
    }).as('getMovies');

    cy.visit('http://localhost:3000/#/');
  });

  it('Should correctly display the webpage, or at least the nav bar portion', () => {
    cy.wait('@getMovies').as('moviesRequest');
    cy.get('h1').contains('Crusty')
    cy.get('h1').contains('Carrots')
    cy.get('img').should('have.attr', 'src', '/orange-carrot-2.svg')
  })

  it('Should have a functioning input area', () => {
    cy.get('.search-by-title').type("Adam");
    cy.get('.movie-title').contains('Smile').should('not.exist');
  });

  it('Should have dropdown filters', () => {
    cy.get('.filter-by-rating').select('4').invoke("val").should("eq", "4");
  })

  it('Should have functioning dropdown filters', () => {
    cy.get('.filter-by-rating').select('4').invoke("val").should("eq", "4");
    cy.get('.movie-title').contains("Smile").should('not.exist');
    cy.get('.movie-title').contains("Black Adam").should('exist');
  })
});

