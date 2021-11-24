/// <reference types="cypress" />

// Elementos
// Login
const formLogin = 'input[data-test="username"]'
const formPassword = 'input[data-test="password"]'

// Produtos
const addSauceLabsBackpack = 'button[name="add-to-cart-sauce-labs-backpack"]'
const addSauceLabsBikeLight = 'button[id="add-to-cart-sauce-labs-bike-light"]'
const addSauceLabsBolt = 'button[id="add-to-cart-sauce-labs-bolt-t-shirt"]'
const addSauceLabsFleece = 'button[id="add-to-cart-sauce-labs-fleece-jacket"]'
const addSauceLabsOnesie = 'button[id="add-to-cart-sauce-labs-onesie"]'
const addTestAllTheThings = 'button[id="add-to-cart-test.allthethings()-t-shirt-(red)"]'

// Checkout
const itemCarrinho = 'div[class="cart_item"]'
const quantItem = 'div[class="cart_quantity"]'
const divItem = 'div[class="inventory_item_name"]'
const formPrimeiroNome = 'input[name="firstName"]'
const formUltimoNome = 'input[name="lastName"]'
const formCep = 'input[name="postalCode"]'
const compraFinalizada = 'h2[class="complete-header"]'

// Buttons
const buttonLogin = 'input[id="login-button"]'
const buttonCarrinho = 'a[class="shopping_cart_link"]'
const buttonCheckout = 'button[data-test="checkout"]'
const buttonContinuar = 'input[data-test="continue"]'
const buttonFinalizar = 'button[data-test="finish"]'

export class SauceDemo {
    acessarSite() {
        cy.visit('/')
    }

    efetuarLogin(userLogin) {
        switch (userLogin) {
            case "Standart":
                cy.get(formLogin).type('standard_user')
                cy.get(formPassword).type('secret_sauce')
                cy.get(buttonLogin).click()
                break;
            default:
                break;
        }
    }

    confirmarPagina(currentPage) {
        switch (currentPage) {
            case "Produtos":
                cy.url()
                    .should('be.equal', 'https://www.saucedemo.com/inventory.html')
                break;
            case "Carrinho":
                cy.url()
                    .should('be.equal', 'https://www.saucedemo.com/cart.html')
                break;
            case "Checagem de Compra":
                cy.url()
                    .should('be.equal', 'https://www.saucedemo.com/checkout-step-two.html')
                break;
        }
    }

    clicarBotao(button) {
        switch (button) {
            case "Carrinho":
                cy.get(buttonCarrinho).click()
                break;
            case "Checkout":
                cy.get(buttonCheckout).click()
                break;
            case "Continuar":
                cy.get(buttonContinuar).click()
                break;
            case "Finalizar":
                cy.get(buttonFinalizar).click()
                break;
        }

    }

    adicionarProdutos(products){
        switch (products) {
            case "Sauce Labs Backpack":
                cy.get(addSauceLabsBackpack).click()
                break;
            case "Sauce Labs Bike Light":
                cy.get(addSauceLabsBikeLight).click()
                break;
            case "Sauce Labs Bolt T-Shirt":
                cy.get(addSauceLabsBolt).click()
                break;
            case "Sauce Labs Fleece Jacket":
                cy.get(addSauceLabsFleece).click()
                break;
            case "Sauce Labs Onesie":
                cy.get(addSauceLabsOnesie).click()
                break;
            case "Test.allTheThings() T-Shirt (Red)":
                cy.get(addTestAllTheThings).click()
                break;
        }
    }

    confirmarProduto(produto) {
        const checkProduto = cy.get(itemCarrinho).contains(produto)
        cy.get(checkProduto).get(divItem).contains(produto).invoke('text').then(($value) => {
            cy.log($value)
            expect(produto).to.eq($value)
        })
    }

    preencherFormCheckout(prNome, ulNome, Cep) {
        cy.get(formPrimeiroNome).type(prNome)
        cy.get(formUltimoNome).type(ulNome)
        cy.get(formCep).type(Cep)
    }

    confirmarCompra() {
        cy.get(compraFinalizada).invoke('text').then(($value) => {
            cy.log($value)
            expect('THANK YOU FOR YOUR ORDER').to.eq($value)
        })
    }
}