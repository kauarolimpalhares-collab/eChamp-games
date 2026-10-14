# eChamp — Página de Listagem de Campeonatos

## Objetivo da atividade

Foi implementada uma página de listagem principal adequada ao domínio do eChamp: **campeonatos**.

A página apresenta os campeonatos em formato de cards, com informações relevantes para uma consulta rápida.

## Informações exibidas

Cada card apresenta:

- Nome do campeonato;
- Modalidade;
- Número de equipes;
- Formato da competição;
- Status;
- Ação "Ver campeonato".

Também foi implementada uma busca por nome/modalidade e um filtro por status para facilitar a navegação.

## Navegação

O item **Campeonatos** foi adicionado ao menu principal do `index.html` e aponta para:

`campeonatos.html`

O menu da página de Contato também recebeu o mesmo acesso, mantendo a navegação consistente.

## Histórias de Usuário relacionadas

**HU — Visualizar campeonatos:**  
Como usuário, quero visualizar a lista de campeonatos disponíveis, com suas principais informações, para que eu possa conhecer e acessar uma competição de meu interesse.

**HU — Consultar informações do campeonato:**  
Como usuário, quero selecionar um campeonato da lista para visualizar suas informações principais, para que eu possa conhecer a competição e acompanhar sua organização.

## Relação entre listagem e UX

A listagem organiza as competições em cards para facilitar a leitura e a comparação das informações. O usuário consegue identificar rapidamente nome, modalidade, quantidade de equipes, formato e status. A busca e o filtro reduzem o esforço necessário para encontrar uma competição específica. O acesso pelo menu também torna a funcionalidade facilmente descobrível.

## Observação

Os campeonatos utilizados nesta atividade são dados demonstrativos no front-end. A persistência real em banco de dados e a tela detalhada de cada campeonato poderão ser implementadas em etapas posteriores.
