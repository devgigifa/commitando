// Escreva uma função javascript que receba uma string e verifica se é um palíndromo, deve retornar TRUE caso seja palindromo, e FALSE caso não seja, deve desconsiderar espaços e vírgulas


function palindromo(palavra) {
    palavra = palavra.replace(/[\s,]/g, ''); 
    palavra = palavra.toLowerCase();     
    const palavraRev = palavra.split('').reverse().join('');
    return palavra === palavraRev;
  }

module.exports = palindromo


// palavra.split(''): Isso divide a string de entrada palavra em uma matriz de caracteres individuais.
// reverse(): Isso inverte a ordem dos caracteres na matriz.
// join(''): Isso concatena os caracteres invertidos de volta em uma única string, sem separador (ou seja, uma string vazia '').
// palavra === palavraRev: Isso verifica se a string de entrada original palavra é igual à string invertida palavraRev. Se forem iguais, a função retorna true, indicando que a string de entrada é um palíndromo.

// [\s,]: Esta é uma classe de caracteres que corresponde a qualquer um dos caracteres dentro dos colchetes. Neste caso, corresponde a:
// \s: caracteres de espaço em branco (espaços, tabulações, quebras de linha, etc.)
// ,: vírgulas
// g: Este é um sinalizador que torna a substituição global, o que significa que ela substituirá todas as ocorrências dos caracteres correspondentes na string, não apenas a primeira.
// '': Esta é a string de substituição, que é uma string vazia. Isso significa que quaisquer caracteres correspondentes serão substituídos por nada, removendo-os efetivamente da string.

// As barras (/) e colchetes ([]) são parte da sintaxe de expressões regulares (regex) em JavaScript.

// As barras (/) são delimitadores de expressões regulares. Elas indicam o início e o fim da expressão regular. Tudo o que está entre as barras é considerado parte da expressão regular.
// Os colchetes ([]) são usados para definir uma classe de caracteres. Uma classe de caracteres é um conjunto de caracteres que você deseja matcher (encontrar) em uma string.
// No caso da expressão regular /[\s,]/g, aqui está o que cada parte faz:

// /: Delimitador de expressão regular.
// [\s,]: Classe de caracteres que matcha (encontra) qualquer caractere que esteja dentro dos colchetes.
// \s: Matcha qualquer caractere de espaço em branco (espaço, tab, quebra de linha, etc.). O \ é usado para escapar o caractere s, pois s sozinho não tem significado especial em regex.
// ,: Matcha o caractere de vírgula literal.
// g: Flag que indica que a substituição deve ser global, ou seja, que todos os matchs devem ser substituídos, não apenas o primeiro.
// Portanto, a expressão regular /[\s,]/g matcha qualquer caractere de espaço em branco ou vírgula em uma string e os remove quando usado com o método replace().

// É importante notar que, sem os colchetes, a expressão regular \s, matcharia a string literal "\s," e não os caracteres individuais de espaço em branco e vírgula. Os colchetes permitem que você defina uma classe de caracteres que matcha qualquer caractere dentro deles.