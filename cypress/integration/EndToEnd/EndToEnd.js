import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import { SauceDemo } from '../../pages/EndToEnd.page';
const pageSauceDemo = new SauceDemo()

Given(/^que acesso o site$/, () => {
	pageSauceDemo.acessarSite()
});


When(/^efetuar o login com usuário "([^"]*)"$/, (userLogin) => {
    pageSauceDemo.efetuarLogin(userLogin)
});


When(/^adicionar os seguintes produtos no carrinho$/, (datatable) => {
	datatable.hashes().forEach(element => {
		pageSauceDemo.adicionarProdutos(element.Produtos)
	});
});


When(/^clicar no botão "([^"]*)"$/, (button) => {
    pageSauceDemo.clicarBotao(button)
});


When(/^confirmar os seguintes produtos na compra$/, (datatable) => {
	datatable.hashes().forEach(element => {
		pageSauceDemo.confirmarProduto(element.Produtos)
	});
});


When(/^preencher as seguintes informações pessoais$/, (datatable) => {
	datatable.hashes().forEach(element => {
		pageSauceDemo.preencherFormCheckout(element.PrimeiroNome, element.UltimoNome, element.CodigoPostal)
	});
});


Then(/^devo ser redirecionado para a página "([^"]*)"$/, (currentPage) => {
	pageSauceDemo.confirmarPagina(currentPage)
});


Then(/^a compra deve ser realizada com êxito$/, () => {
	pageSauceDemo.confirmarCompra()
});