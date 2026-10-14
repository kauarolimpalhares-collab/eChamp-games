# eChamp — Tela de Login

## Objetivo da semana
Implementar uma tela de login, integrá-la à navegação e fornecer um feedback mínimo de sucesso/erro no front-end.

## Implementação
A tela `login.html` possui:
- campo de usuário/e-mail;
- campo de senha;
- botão **Entrar**;
- opção **Esqueci minha senha**;
- opção para falar com a equipe/criar conta.

O menu principal foi atualizado para que **Login** direcione para `login.html`. O botão **Começar agora** da Home também direciona para o login.

## Validação de demonstração
Para atender ao requisito da atividade, foi criada uma validação somente no front-end:

- Usuário: `teste`
- Senha: `123`

Com as credenciais corretas, o sistema exibe uma mensagem de sucesso e redireciona para `area-restrita.html`.

Com qualquer outra combinação, é exibida a mensagem **“Credenciais inválidas. Tente novamente.”**

A sessão de demonstração utiliza `sessionStorage` apenas para impedir o acesso direto à área restrita durante o teste. Não existe backend ou autenticação real nesta versão.

## Área restrita
A página `area-restrita.html` representa uma área disponível para um usuário autenticado. Ela apresenta um perfil de demonstração de **Administrador**, com acesso conceitual a:
- Times e jogadores;
- Campeonatos;
- Confrontos;
- Resultados.

## Perfis e regras de negócio — explicação
O login representa a etapa de autenticação do usuário antes do acesso a funcionalidades restritas do eChamp. Os perfis permitem definir quais recursos cada tipo de usuário poderá visualizar ou administrar. Nesta demonstração, foi utilizado o perfil de Administrador como exemplo, representando um usuário com acesso às áreas de gerenciamento de times, campeonatos, confrontos e resultados. Em uma versão com backend, as permissões seriam verificadas no servidor de acordo com o perfil autenticado. Assim, usuários diferentes poderiam ter acessos diferentes, evitando que qualquer pessoa alterasse informações administrativas. Nesta entrega, essa regra é representada apenas visualmente e no front-end, conforme o escopo da atividade.

## Fluxo
```text
Home
  ↓
Login
  ↓
Credenciais
  ├── inválidas → mensagem de erro
  └── teste / 123 → sucesso → Área Restrita
```
