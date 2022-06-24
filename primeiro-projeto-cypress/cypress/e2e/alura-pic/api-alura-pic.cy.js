describe('Buscar fotos e dados', () => {
    it('Buscar fotos do Flávio', () => {
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((result) => {
            expect(result.status).to.be.equal(200)
            expect(result.body).is.not.empty
            expect(result.body[0]).to.have.property('description')
            expect(result.body[0].description).to.be.equal('Farol iluminado')
        })
    });

    it('Buscar fotos do Flávio', () => {
       const tempoEsperado = Math.random() * 2000;
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((result) => {
            expect(result.status).to.be.equal(200)
            expect(result.body).is.not.empty
            expect(result.body[0]).to.have.property('description')
            expect(result.body[0].description).to.be.equal('Farol iluminado')
            expect(result.duration).to.be.lte(tempoEsperado)
        })
    });

    it('Fazer login do Flávio', () => {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then((result) => {
            expect(result.status).to.be.equal(200)
            expect(result.body).is.not.empty
            expect(result.body).to.have.property('id')
            expect(result.body.id).to.be.equal(1)
            expect(result.body).to.have.property('email')
            expect(result.body.email).to.be.equal('flavio@alurapic.com.br')
        })
    });
});
