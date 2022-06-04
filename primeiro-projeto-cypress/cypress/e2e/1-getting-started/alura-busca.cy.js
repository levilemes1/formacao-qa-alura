describe('alura busca curso', () => {

    beforeEach(() => {
        cy.visit('https://www.alura.com.br');
    })

    it('buscar curso de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('java');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get('h4.busca-resultado-nome').should('contain', 'Formação Java e Orientação a Objetos');
    });

    it('buscar formação de java', () => {
        cy.get('#header-barraBusca-form-campoBusca').type('Formação Java e Orientação a Objetos');
        cy.get('.header-barraBusca-form-submit').click();
        cy.get(':nth-child(1) > .busca-resultado-link > .busca-resultado-container > .busca-resultado-nome').should('have.text', 'Formação Java e Orientação a Objetos');
        });

})
