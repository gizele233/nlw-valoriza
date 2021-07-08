# NLW together
## nlw-valoriza
API em node.js com autenticação de usuários e usando express 

## Tecnologias
-Node.js </br>
-TypeScript </br>
-JWT(Json web token) </br>
-Express </br>
-sqlite </br>
-migrations </br>

## Objetivo
Criar uma API para envio e recebimento de elogios, utilizando autenticação

## Regras de negócio
<ul>
<li> Users</li> 
</ul>

[ x ] Usuários com mesmo nome não são permitidos.

[ x ] Todos os usuários devem ter email.

<ul>
<li> Tags</li> 
</ul>

[ x ] A tag deve ter um nome.

[ x ] Tags com mesmo nome não são permitidos.

[ x ] Tags só podem ser criadas por usuários administradores.

<ul>
<li> Compliments</li> 
</ul>


[ x ] É proibido um usuário criar um elogio para ele mesmo.

[ x ] O usuário que receberá o elogio deverá existir.

[ x ] O usuário deve ser autenticado.

