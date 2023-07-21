![created date - faq-front](https://img.shields.io/date/1689562800?color=007ec6&label=created&style=flat-square)
![license - faq-front](https://img.shields.io/github/license/nascimentoliveira/faq-front?color=007ec6&style=flat-square)
![last commit - faq-front](https://img.shields.io/github/last-commit/nascimentoliveira/faq-front?color=007ec6&style=flat-square)
![repo size - faq-front](https://img.shields.io/github/repo-size/nascimentoliveira/faq-front?color=007ec6&style=flat-square)
![files - faq-front](https://img.shields.io/github/directory-file-count/nascimentoliveira/faq-front?color=007ec6&style=flat-square)
![language - faq-front](https://img.shields.io/github/languages/top/nascimentoliveira/faq-front?color=007ec6&style=flat-square)
![stars - faq-front](https://img.shields.io/github/stars/nascimentoliveira/faq-front?color=007ec6&style=flat-square)
![forks - faq-front](https://img.shields.io/github/forks/nascimentoliveira/faq-front?color=007ec6&style=flat-square)

# FAQ

Este é o README da aplicação de Página de FAQ com Modo de Administração. Essa aplicação permite a criação e gerenciamento de uma página de perguntas frequentes (FAQ) com diversas seções e subseções, onde os usuários podem clicar nas seções e navegar entre as suas subseções. Além disso, um modo de administração permite que os administradores insiram, editem e excluam o conteúdo das seções e subseções.

A aplicação consiste em uma página web responsiva, onde os usuários podem acessar uma lista de seções de perguntas frequentes. Ao clicar em uma seção, o conteúdo correspondente é expandido, revelando as respostas e, se houver, suas subseções com mais perguntas e respostas.

A principal funcionalidade da aplicação é a possibilidade de administradores gerenciarem o conteúdo da FAQ de forma dinâmica e intuitiva. Ao habilitar o modo de administração, é possível editar e excluir o conteúdo de qualquer seção ou subseção. Além disso, é possível adicionar novas seções e subseções diretamente na página.

> O código-fonte do back-end da aplicação está hospedado no GitHub em: [FAQ Back-end](https://github.com/nascimentoliveira/faq-back)

> FAQ atualmente pode ser experimentado em: [FAQ Live Demo](https://faq-front-nascimentoliveira.vercel.app/)
>
>> *A primeira requisição ao Live Demo pode levar um pouco mais de tempo para carregar. Isso ocorre porque os servidores são ativados conforme necessário e podem levar alguns instantes para iniciar!*
>>

## Funcionalidades Principais

1. Criação de uma página de FAQ com seções e subseções expansíveis no formato de acordeão.
2. Modo de administração que possibilita a aadição, edição e exclusão de conteúdo de seções e subseções diretamente na página.
3. Interface amigável e responsiva para uma experiência do usuário agradável.

## Como Usar

Para utilizar a aplicação de Página de FAQ com Modo de Administração, siga os passos abaixo:

1. Navegação na Página de FAQ

   - Acesse a página da FAQ através do navegador da web.
   - Você verá uma lista de seções de perguntas frequentes.
   - Clique em uma seção para expandir as respostas associadas.
   - Caso a seção possua subseções, elas também serão exibidas e podem ser expandidas individualmente.
2. Modo de Administração

   - Para acessar o modo de administração, clique no botão "Editar" localizado no canto inferior direito do banner da página.
   - Uma vez no modo de administração, as seções da FAQ terão três botões no canto superior direito: "Apagar Seção" "Editar Conteúdo" e "Adicionar Subseção".
   - O botão "Editar Conteúdo" permitirá que você edite o texto da pergunta e resposta da seção, transformando-os em campos de entrada (inputs). Haverá dois botões adicionais também localizado no canto inferior direito do banner da página: "Confirmar Edição" e "Cancelar Edição".
   - O botão "Apagar Seção" permitirá a exclusão da seção selecionada, e todas as subseções vinculadas também serão excluídas.
   - O botão "Adicionar Subseção" permitirá adicionar uma nova subseção dentro da seção atual.
   - Adicionar Nova Seção Principal: No modo de administração, há um botão "Adicionar" posicionado no final da FAQ. Ao clicar neste botão, um diálogo será aberto, permitindo que você insira uma nova seção pai. A nova seção pai terá uma pergunta (obrigatório) e uma resposta associada (opcional).

## Tecnologias Utilizadas

FAQ foi desenvolvido utilizando as seguintes tecnologias:

- Linguagem de Programação:
  - [TypeScript](https://www.typescriptlang.org/): Linguagem de programação de código aberto que estende a sintaxe do JavaScript, fornecendo tipagem estática opcional e outros recursos para melhorar o desenvolvimento.
- Framework:
  - [Nest.JS](https://nestjs.com/): framework de desenvolvimento web front-end que permite construir aplicativos React com renderização do lado do servidor (SSR) e geração de páginas estáticas de forma eficiente.
- Banco de Dados:
  - [PostgreSQL](https://www.postgresql.org/about/): Sistema de gerenciamento de banco de dados relacional, utilizado para armazenar e persistir os dados da aplicação.
  - [Prisma ORM](https://www.prisma.io/): ORM (Object-Relational Mapping) de banco de dados, utilizado para facilitar a comunicação e manipulação de dados com o banco de dados PostgreSQL.
- Front-end
  - [React](https://react.dev/learn): Biblioteca JavaScript de código aberto para a construção de interfaces de usuário.
  - [Axios](https://axios-http.com/ptbr/docs/intro): Biblioteca JavaScript para realizar requisições HTTP.
  - [Material-UI](https://mui.com/): Biblioteca de componentes de interface de usuário que segue as diretrizes de design do Material Design.
  - [Sweet Alert](https://sweetalert2.github.io/): Biblioteca JavaScript para exibir belas caixas de diálogo modais.

Essas tecnologias foram escolhidas para proporcionar uma experiência de desenvolvimento moderna, eficiente e escalável.

## Instalação

1. Clone o repositório do projeto:

   ```bash
   git clone https://github.com/nascimentoliveira/faq-front.git
   ```
2. Acesse o diretório do projeto.

   ```bash
   cd faq-front
   ```
3. Instale as dependências:

   ```bash
   npm install
   ```
4. Configure as variáveis de ambiente:Antes de executar a aplicação, é necessário configurar as variáveis de ambiente corretamente. Siga os passos abaixo:

   - Renomeie o arquivo `.env.example` para `.env`.

     ```bash
     mv .env.example .env
     ```
   - Abra o arquivo `.env` em um editor de texto.
   - Procure a variável `NEXT_PUBLIC_API_BASE_URL` e defina-a com a URL base da sua API. Exemplo:

     ```bash
     NEXT_PUBLIC_API_BASE_URL=http://localhost:5000
     ```
   - Verifique se existem outras variáveis de ambiente necessárias para o funcionamento da aplicação e defina-as de acordo com a sua configuração.
   - Salve o arquivo `.env`.

   > ⚠️ *Certifique-se de não compartilhar o arquivo `.env` contendo informações sensíveis, como senhas, chaves de API ou tokens de acesso. Mantenha-o seguro e fora do controle de versão do seu repositório.*
   >

   Após configurar as variáveis de ambiente, a aplicação estará pronta para ser executada.
5. Execute o projeto:

   ```bash
   npm start
   ```
6. A aplicação ficará disponível em:

   ```bash
   http://localhost:3000
   ```

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em seu computador:

- Node.js (versão 18.16 ou superior)
- NPM (versão 9.8 ou superior)

## Contribuição

Se você deseja contribuir para o projeto, siga os passos abaixo:

1. Faça um `fork` do repositório.
2. Crie uma nova `branch` com a sua contribuição:
   ```bash
   git checkout -b <sua-contribuicao>
   ```
3. Faça as suas modificações  no código.
4. Faça `commit` das suas alterações:
   ```bash
   git commit -m "Sua contribuição"
   ```
5. Envie as alterações para o repositório remoto: .
   ```bash
   git push origin <sua-contribuicao>
   ```
6. Abra um `pull request` no repositório original, descrevendo as modificações realizadas.

Se te ajudei de alguma forma, ficarei feliz em saber. Se possível:
⭐️ dê uma estrela para este projeto; e
🪲 Encontre e relate `issues`

## Licença

Este projeto é licenciado sob a licença [MIT](https://choosealicense.com/licenses/mit/). Consulte o arquivo LICENSE para obter mais informações.

Disponibilizado por [Thiago Oliveira](https://www.linkedin.com/in/nascimentoliveira/).
