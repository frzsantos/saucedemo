#language: pt
Funcionalidade: Fluxo E2E

  Como usuário, desejo realizar a compra de determinados produtos

  Cenario: Compra de produtos utlizando usuário Standart
    Dado que acesso o site
    Quando efetuar o login com usuário "Standart"
    Entao devo ser redirecionado para a página "Produtos"
    Quando adicionar os seguintes produtos no carrinho
      | Produtos                 |
      | Sauce Labs Backpack      |
      | Sauce Labs Fleece Jacket |
      | Sauce Labs Bolt T-Shirt  |
    E clicar no botão "Carrinho"
    Entao devo ser redirecionado para a página "Carrinho"
    E confirmar os seguintes produtos na compra
      | Produtos                 |
      | Sauce Labs Backpack      |
      | Sauce Labs Fleece Jacket |
      | Sauce Labs Bolt T-Shirt  |
    Quando clicar no botão "Checkout"
    E preencher as seguintes informações pessoais
      | PrimeiroNome | UltimoNome | CodigoPostal |
      | Luiz         | Almeida    | 19400000     |
    E clicar no botão "Continuar"
    Entao devo ser redirecionado para a página "Checagem de Compra"
    E confirmar os seguintes produtos na compra
      | Produtos                 |
      | Sauce Labs Backpack      |
      | Sauce Labs Fleece Jacket |
      | Sauce Labs Bolt T-Shirt  |
    Quando clicar no botão "Finalizar"
    Entao a compra deve ser realizada com êxito