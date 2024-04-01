console.log('Olá, mundo!')

let cores = ['amarelo', 'vermelho', 'azul', 'preto' ]
console.log(cores)

/* Aqui o 'let' declara uma variável ('cores') e armazena seus valores. São múltiplos valores armazenados em um array.
    Sintaxe: o colchete armazena valores separados por vírgula e individualizados por aspas, tratando-se de um array, ou lista.
*/

cores.push('verde')
        console.log(cores)

        /* 'Cores.push' adiciona um elemento ao array, um item à lista.
            Sintaxe: 'cores' referencia a variável já declarada, o ponto busca dentro de seus valores e realiza a operação seguinte.
        */

cores.pop()
console.log(cores)

/* O operador 'pop' faz o mesmo percurso, mas sua função é remover o último elemento adicionado ao array.
*/

console.log(cores.length)

/* Aqui o console nos mostrará o número de elementos no Array. 
O console mostra o resultado: 4
*/


let pessoa = {
                nome: "Maria",
                idade: 22,
                hobbies: ["ler", "programar"]

}

/* Trata-se de um objeto, isto é, uma variável que registro com valores dentro de chaves.
                    
        No nosso exemplo, declaramos o objeto 'pessoa' e armazenamos valores de:

            - nome = ou seja, 'Maria' é string, valor de texto
            - idade = número, trata-se de um valor numérico
            - hobbies = string, textos diversos separados por vírgula em array              
*/

                        
