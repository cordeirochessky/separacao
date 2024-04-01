#Arrays e objetos

##Exercício básico de declaração de arrays e objetos em JavaScript.

####Array#### é uma estrutura de **dados** em forma de lista. 

['amarelo', 'vermelho', 'azul', 'preto']

1. **'Push'** é a operação de adicionar um elemento dentro da variável já declarada e referenciada. O que está entre parênteses é o valor que, no caso, pretendo incluir.
        
Fica assim no log: (5) ['amarelo', 'vermelho', 'azul', 'preto', 'verde']

2. O operador **'pop'** faz o mesmo percurso, mas sua função é remover o último elemento adicionado ao array. Resumindo, referenciamos a variável ('cores'), adicionamos um ponto seguido do operador ('pop') e o valor é retornado no console.

(4) ['amarelo', 'vermelho', 'azul', 'preto']

3. A operação **'cores.length'** referencia a variável ('cores') e 'conta' seus elementos com o operador 'length'.

4. ~~~javascript

let pessoa = {
                nome: "Maria",
                idade: 22,
                hobbies: ["ler", "programar"]
}
~~~

Trata-se de um **objeto** então, isto é, uma variável que registro com valores dentro de chaves. Basicamente, um objeto é uma variável com uma variedade de valores de naturezas diferentes.
Assim, nosso objeto é uma variável que cria outras variáveis dentro de si, as declara para si, e lhes atribui e armazena valores, que podem ser múltiplos e de natureza diversa.
