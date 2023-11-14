var valorEmDolar = 30;
var cotacaoDoDolar = 5.32;
var valorEmReal = valorEmDolar * cotacaoDoDolar;
valorEmReal = valorEmReal.toFixed(2);

alert(`R$ ${valorEmReal}`);









/*
Na primeira aula da Imersão Dev, aprendemos sobre os conceitos básicos de programação utilizando JavaScript. O objetivo 
foi criar um conversor de moedas simples, onde tínhamos um valor em dólar e precisávamos convertê-lo para real.

Começamos declarando duas variáveis: valorEmDolar e cotacao. A variável valorEmDolar recebeu o valor que queríamos 
converter, que no exemplo foi 30. Já a variável cotacao recebeu o valor da cotação do dólar em relação ao real, 
que no exemplo foi 5.32.

Em seguida, utilizamos a operação de multiplicação para calcular o valor em real. Multiplicamos o valorEmDolar pela 
cotacao e armazenamos o resultado na variável valorEmReal.

Para exibir o resultado na tela, utilizamos o comando alert(). Dentro dos parênteses, concatenamos a string "R$" com 
o valor em real, utilizando o método toFixed() para limitar o número de casas decimais em 2.

O código final ficou assim:

csharp
Copiar código
var valorEmDolar = 30;
var cotacao = 5.32;

var valorEmReal = valorEmDolar * cotacao;

alert('R$' + valorEmReal.toFixed(2));
Utilizamos o Codepen.io como ferramenta para escrever e executar o código de forma fácil. O link base para começar a 
aula foi disponibilizado e, caso o estudante tenha dúvidas em como compartilhar o código, ensinamos a utilizar o Codepen.

No final da aula, foi proposto um desafio de adicionar outros tipos de moedas para converter. Foi sugerido que o 
estudante tentasse adicionar a conversão para euro, por exemplo.

Foi uma aula introdutória, mas muito importante para começarmos a entender como funciona a programação e como 
podemos resolver problemas utilizando código.
*/