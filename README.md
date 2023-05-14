# BookClub

[![Build Status](https://img.shields.io/travis/user/repo/master.svg?style=flat-square)](https://travis-ci.org/user/repo)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)
[![Coverage Status](https://img.shields.io/scrutinizer/coverage/g/user/repo.svg?style=flat-square)](https://scrutinizer-ci.com/g/user/repo/code-structure)
[![Quality Score](https://img.shields.io/scrutinizer/g/user/repo.svg?style=flat-square)](https://scrutinizer-ci.com/g/user/repo)

## Link do projeto

Coming soon.

## Descrição

O projeto "BookClub" foi desenvolvido utilizando as tecnologias React no frontend, .NET no backend e o banco de dados PostgreSQL. O objetivo principal do projeto é criar um sistema completo para gerenciar uma livraria, permitindo o cadastro, edição, exclusão e busca de livros.

Recursos e funcionalidades principais:

Frontend em React: O frontend foi desenvolvido utilizando a biblioteca React com TypeScript, proporcionando uma interface de usuário interativa e responsiva. Foram utilizados componentes reutilizáveis e uma arquitetura bem organizada para facilitar o desenvolvimento e manutenção do código.

Backend em .NET: O backend (https://github.com/juliemoura/bookclub-api) foi construído utilizando o framework .NET, aproveitando o poder e a segurança da linguagem C#. Foram implementadas APIs RESTful para lidar com as requisições do frontend, permitindo o cadastro, atualização, exclusão e busca de livros. A autenticação e autorização também foram implementadas para garantir a segurança do sistema.

Banco de dados PostgreSQL: O banco de dados PostgreSQL foi escolhido como o sistema de gerenciamento de banco de dados, oferecendo uma estrutura robusta e confiável para armazenar os dados dos livros, autores, preços, etc. Foram criadas tabelas adequadas para armazenar as informações dos livros e estabelecidas relações entre elas.

Funcionalidades do sistema:

Cadastro de livros: Os usuários podem cadastrar novos livros, fornecendo informações como título, autor, gênero, preço, etc.
Edição e exclusão de livros: Os usuários têm a capacidade de editar e excluir os livros cadastrados anteriormente.
Busca de livros: O sistema oferece recursos de busca, permitindo que os usuários encontrem livros com base em critérios como título, autor, gênero, etc.
Autenticação e autorização: Foi implementado um sistema de login para controlar o acesso ao sistema, permitindo que apenas usuários autenticados possam realizar operações de cadastro, edição, exclusão, etc.
Visualização de informações detalhadas: Os usuários podem visualizar informações detalhadas sobre cada livro, incluindo sua capa, sinopse e outras informações relevantes.

## Instalação

Guia de Instalação - Banco de Dados em .NET com Visual Studio e Frontend com Visual Studio Code

1. Instalação do Visual Studio:
Acesse o site oficial da Microsoft (https://visualstudio.microsoft.com/) e faça o download da versão mais recente do Visual Studio.
Execute o instalador baixado e siga as instruções na tela para instalar o Visual Studio.
Durante o processo de instalação, você pode selecionar os componentes desejados. Para este guia, certifique-se de selecionar as opções relacionadas ao desenvolvimento em .NET e ao suporte ao banco de dados PostgreSQL.

2. Configuração do Banco de Dados com .NET:
Abra o Visual Studio e crie um novo projeto do tipo "Aplicativo de Console" ou abra um projeto existente que utilize o .NET Framework.
No Solution Explorer, clique com o botão direito do mouse no projeto e selecione "Gerenciar Pacotes NuGet".
Na janela "Gerenciar Pacotes NuGet", pesquise e instale o pacote Npgsql.EntityFrameworkCore.PostgreSQL para adicionar o suporte ao PostgreSQL no projeto.
Configure a string de conexão com o banco de dados PostgreSQL no arquivo de configuração do seu projeto (.config ou appsettings.json). Certifique-se de fornecer as informações corretas, como o nome do servidor, porta, nome do banco de dados, nome de usuário e senha.
Agora você pode escrever o código para interagir com o banco de dados PostgreSQL no seu projeto .NET utilizando a biblioteca Npgsql.

3. Instalação do Visual Studio Code:
Acesse o site oficial do Visual Studio Code (https://code.visualstudio.com/) e faça o download da versão adequada para o seu sistema operacional.
Execute o instalador baixado e siga as instruções na tela para instalar o Visual Studio Code.

4. Configuração do Frontend com Visual Studio Code:
Abra o Visual Studio Code e navegue até a pasta raiz do seu projeto frontend.
Certifique-se de que você tenha um arquivo package.json na raiz do projeto, que define as dependências e scripts necessários.
Abra o terminal no Visual Studio Code (Menu > View > Terminal) e execute o comando "npm install" para instalar todas as dependências do projeto.
Após a instalação das dependências, execute o comando "npm start" para iniciar o servidor de desenvolvimento e rodar o frontend.

## Detalhes

O projeto "BookClub" foi desenvolvido com foco na usabilidade, performance e segurança. Ele oferece uma interface intuitiva para os usuários gerenciarem os livros da livraria, facilitando o controle e organização das informações. Com o uso das tecnologias React, .NET e PostgreSQL, o projeto oferece uma solução completa e escalável para o gerenciamento de uma livraria.

## Licença

O projeto está disponível sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais informações.

##
Feito por: Julie Moura 💛
