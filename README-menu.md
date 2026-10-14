# eChamp — Menu Principal e User Flow

## Objetivo da semana
Implementar um menu principal funcional, garantir a navegação entre as áreas já criadas e registrar o mapa de páginas/user flow revisado.

## Menu implementado
- Início
- Recursos
- Sobre
- Contato
- Como funciona
- Entrar
- Criar conta

No `index.html`, Início, Recursos e Como funciona levam às respectivas seções da Home. Sobre direciona para `sobre.html` e Contato direciona para `contato.html`.

## Histórias de usuário relacionadas

**HU — Conhecer o eChamp:** como visitante, quero acessar a Home, Recursos, Sobre e Como funciona para entender a proposta e os recursos do sistema.

**HU — Entrar em contato com o eChamp:** como usuário, quero acessar Contato pelo menu para enviar uma dúvida, solicitar suporte ou obter informações.

**HU — Acessar a plataforma:** como usuário, quero encontrar as opções Entrar e Criar conta no menu para iniciar o uso do sistema.

## Mapa de navegação

```text
INÍCIO (index.html)
├── Recursos (seção da Home)
├── Sobre → sobre.html
├── Contato → contato.html
├── Como funciona (seção da Home)
├── Entrar
└── Criar conta
```

## Justificativa da navegação
A ordem dos itens foi definida pensando na experiência e no caminho natural do usuário. Início aparece primeiro por ser o ponto de entrada principal. Recursos permite conhecer as funcionalidades, enquanto Sobre apresenta o projeto. Como funciona ajuda a compreender o processo de uso e Contato oferece um canal para dúvidas e suporte. Entrar e Criar conta ficam como ações de acesso ao sistema. Dessa forma, o menu conduz o usuário da descoberta da plataforma para a compreensão, contato e, por fim, utilização do sistema.
