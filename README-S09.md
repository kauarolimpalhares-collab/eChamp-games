# eChamp - Atividade S09 - Página de Detalhe

## Implementação
Foi criada a página `detalhe-campeonato.html`, acessada a partir dos botões **Ver campeonato** da listagem implementada na S08. Cada campeonato possui um identificador na URL (`?id=`), permitindo que a mesma página apresente os dados correspondentes ao item selecionado. A tela de detalhe apresenta nome, modalidade, número de equipes, formato, status, temporada, descrição e informações da competição. Também foi incluído o CTA **Acompanhar campeonato**, que fornece um retorno visual ao usuário no front-end.

## Fluxo lista → detalhe
`campeonatos.html` → clique em **Ver campeonato** → `detalhe-campeonato.html?id=X`

## Relação do padrão lista/detalhe com CRUD e UX
O padrão lista/detalhe permite que o usuário visualize inicialmente várias opções e, ao selecionar uma delas, tenha acesso às informações completas do item escolhido. No eChamp, esse fluxo é utilizado para apresentar os campeonatos e seus detalhes. Essa estrutura também facilita a implementação de operações de CRUD, pois a lista pode representar os registros existentes e a página de detalhe pode ser usada para visualizar e futuramente alterar informações. A inclusão de novos campeonatos pode ser realizada por uma tela de cadastro, enquanto a exclusão pode ser disponibilizada nas ações administrativas. Do ponto de vista de UX, o padrão evita excesso de informações na tela inicial e permite que o usuário aprofunde apenas no campeonato que deseja consultar.

## Arquivos principais
- `campeonatos.html`, `campeonatos.css`, `campeonatos.js`: listagem e filtros.
- `detalhe-campeonato.html`, `detalhe-campeonato.css`, `detalhe-campeonato.js`: detalhe do item e CTA.
