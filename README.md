Em essência, o algoritmo Testa-Tautologia deve ser implementado, fazendo aparecer pelo menos uma contradição envolvendo uma das proposições. Se uma for encontrada ou explicitada, é o suficiente. O processo de encontrar esta contradição deve ser detalhado em um passo-a-passo. (Observação: uma contradição ocorre quando uma proposição assume, ao mesmo tempo, tanto o valor verdadeiro, quanto o valor falso, o que não é possível de ocorrer, assegurando então uma situação de contradição)



O algoritmo Testa-Tautologia é um método para determinar se uma dada proposição é uma tautologia. Uma tautologia é uma proposição que é sempre verdadeira, independentemente do valor das suas variáveis.

Para implementar o algoritmo Testa-Tautologia, é necessário seguir os seguintes passos:

1 - Escreva a proposição que deseja verificar. Por exemplo: "A ou B é verdadeiro, e A e B são falsos".

2 - Identifique as variáveis presentes na proposição. Neste caso, as variáveis são "A" e "B".

3 - Para cada uma das variáveis, crie duas novas proposições, uma assumindo o valor verdadeiro e outra assumindo o valor falso. Por exemplo, para a variável "A", criamos as proposições "A é verdadeiro" e "A é falso".

4 - Substitua as variáveis na proposição original pelas novas proposições criadas. Por exemplo, substituimos "A" por "A é verdadeiro" e "B" por "B é falso". A proposição resultante seria: "A é verdadeiro ou B é falso é verdadeiro, e A é verdadeiro e B é falso são falsos".

5 - Avalie a proposição resultante, verificando se ela é sempre verdadeira ou se ela possui alguma contradição. Neste caso, a proposição resultante é uma contradição, já que afirma que "A é verdadeiro ou B é falso é verdadeiro" e, ao mesmo tempo, afirma que "A é verdadeiro e B é falso são falsos". Como ambas as afirmações não podem ser verdadeiras ao mesmo tempo, temos uma contradição.

Portanto, ao implementar o algoritmo Testa-Tautologia, é possível encontrar uma contradição envolvendo uma das proposições, bastando seguir os passos descritos acima

Exemplos:

a. [B' ^ (A -> B)] -> A'

Solução:
Atribua verdadeiro a B' ^ (A -> B)
e falso (0) a A'

Da segunda atribuição, vemos que A é verdadeiro. 
Da primeira atribuição, B' é verdadeiro (portanto B é falso) e A -> B é verdadeiro.

Se A -> B é verdadeiro e A é verdadeiro, então B é verdadeiro. 
Portanto, B é tanto verdadeiro quanto falso e [B' ^ (A -> B)] -> A' é uma tautologia.

<!-- Símbolos Gerais  -->

e (símbolo ^), ou (letra v minúsculo), implica (Par de símbolos =>), negação (símbolo '), equivale (trio de símbolos <=>), com parenteses ou colchetes como separadores.