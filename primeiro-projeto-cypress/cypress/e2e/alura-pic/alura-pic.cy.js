describe('login e registro de usuário no alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com');
        cy.intercept('POST', 'https://apialurapic.herokuapp.com/user/login', {
            statusCode: 400
        }).as('stubPost')
    })

    it('verificar mensagens de validações', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
    });

    it('verificar mensagens de email inválido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('Levi');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    });

    it('verificar mensagens com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    });

    it('fazer login com usuário válido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.wait('@stubPost')
        cy.contains('a', '(Logout)').should('be.visible');
    });

    it('fazer login com usuário inválido', () => {
        cy.login('levi', '123')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        })
    });

    const usuarios = require('../fixtures/usuarios.json');
    usuarios.forEach(usuario => {
        it('registrar novo usuário "' + usuario.username + '"', () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();
            cy.get('input[formcontrolname="email"]').type(usuario.email);
            cy.get('input[formcontrolname="fullName"]').type(usuario.fullname);
            cy.get('input[formcontrolname="userName"]').type(usuario.username);
            cy.get('input[formcontrolname="password"]').type(usuario.password);
            cy.contains('button', 'Register').click();
        })
    })

    it('Busca fotos no site AluraPic', ()=> {
        fazLoginNoSite(login, senha);
        escolheFoto(foto);
        fazDownloadFotoSelecionada();
     })
})
