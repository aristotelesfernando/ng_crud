Após criar a pasta backend vamos executar o comando:
$ npm init -y

Em seguida instalamos o json-server como dependência:
$npm i json-server

json-server --watch db.json --port 4260

Observação:

PUT altera o objeto inteiro
PATH altera propriedades do objeto.

ng serve -o --port 5016

##Importante: arquivo ANGULAR.JSON
"inlineTemplate": true,
"inlineStyle": true,
-> mudar estas duas opções para false, caso contrario html e css serão unidos em
um único arquivo... passando false como parâmetro serão criados arquivos separados
para os components.
"inlineTemplate": false,
"inlineStyle": false,
-> isso é consequência do parâmetro --minimal na criação do projeto

##instalando o material-design
ng add @angular/material