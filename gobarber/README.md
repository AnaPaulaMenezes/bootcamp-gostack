<div align="center">
<img src="https://github.com/AnaPaulaMenezes/bootcamp-gostack/blob/master/images/logo-gobarber.jpeg"/>
<p>O Aplicativo Gobarber é um projeto que foi desenvolvido durante as aulas do bootcamp GoStack.<br/>
A Aplicação consiste em um app para o gerenciamento e agendamento de horarios em uma barbearia.</p>
</div>

<h2>Como instalar a aplicação</h2>

<h3>Pré-Requisitos</h3>
<ul>
  <li>node.js;</li>
  <li>yarn;</li>
  <li>postgreSQL;</li>
  <li>Redis;</li>
  <li>MongoDB;</li>
  <li>SDK android (somente para o projeto mobile).</li>
</ul>

<h3>Passo a passo</h3>
<ul>
  <li>
    Clone este repositório;
  </li>
  
  <li>
    Dentro das pasta backend, mobile web rode o seguinte comando para instalar as depêndencias:
   
   ```bash
   yarn 
   ```
   
  </li>
  <li>Crie o banco de dados Postgre com o nome "gostack_postgres";</li>
  <li>Crie o banco de dados Redis com o nome "redis";</li>
  <li>Crie o banco de dados MongoDB com o nome "mongodb";</li>
  <li>Dentro da pasta backend altere o arquivo .env com suas credenciais;</li>
  <li>Com o banco de dados iniciado, dentro da pasta backend execute as migrations com o seguinte comando:
  
  ```bash
  yarn typeorm migration:run 
  ```
  </li>
  <li>
    Inicie o backend da aplicação rodando o seguinte comado dentro da pasta backend:
   
   ```bash
   yarn dev:server
   ```
   </li>
  <li>
    Inicie a aplicação web rodando o seguinte comado dentro da pasta web:
   
   ```bash
   yarn start
   ```
  </li>
 
   <li>
    Inicie a aplicação mobile rodando o seguinte comado dentro da pasta mobile:
   
   ```bash
   yarn android
   ```
  </li>
  
</ul>

<h2>Mobile<h2>

<img width="32%" src="https://github.com/AnaPaulaMenezes/bootcamp-gostack/blob/master/images/list-providers-gobarber-mobile.jpeg"/>
<img width="32%" src="https://github.com/AnaPaulaMenezes/bootcamp-gostack/blob/master/images/create-appointment-gobarber-mobile.jpeg"/>
<img width="32%" src="https://github.com/AnaPaulaMenezes/bootcamp-gostack/blob/master/images/profile-gobarber-mobile.jpeg"/>

<h2>Web</h2>
<img src="https://github.com/AnaPaulaMenezes/bootcamp-gostack/blob/master/images/Signin-gobarber-web.jpeg"/>
<img src="https://github.com/AnaPaulaMenezes/bootcamp-gostack/blob/master/images/login-gobarber-web.jpeg"/>
<img src="https://github.com/AnaPaulaMenezes/bootcamp-gostack/blob/master/images/list-appointments-gobarber-web.jpeg"/>

<h2>Licença</h2>
<p>Esse projeto está sob a licença MIT. Veja o arquivo <a href="../LICENSE.md">LICENSE</a> para mais detalhes.</p>
