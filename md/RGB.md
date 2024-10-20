# Explorador RGB
Vamos descrever o funcionamento do explorador RGB, que é bem simples, a seguir:

Há três controles deslizantes. Cada um serve para ajustar as intensidades de verde, azul e vermelho.

Se você escolher o valor 0 (zero) para o azul, significa que está ajustando o “pixel grande” do centro para que não tenha absolutamente nenhuma intensidade de azul.

À medida que você desliza o controle para a direita, vai aumentando a intensidade de luz azul para 1, 2, 3... até chegar ao nível 255, que representa o máximo de intensidade de luz azul que sua tela é capaz de emitir. O mesmo vale para o vermelho e para o verde.

Vamos, então, manipular o seguinte explorador RGB:
 
Sem cor →→ Escuro →→ Mais claro →→ Saturação total
 
Vermelho (R - Red):
Verde (G - Green):
Azul (B - Blue):
R:93 G:109 B:91
 Mostrar Hexadecimal    #5D6D5B


A seguir, veja cada um dos passos a ser seguidos:
Passo 1
expand_more
Observe que, na situação inicial, todos os controles deslizantes estão totalmente para a esquerda, ou seja, 0 (zero) de intensidade para as luzes vermelha, verde e azul. Com a ausência total de cores, o “pixel grande” à direita está preto. Note que os valores R (vermelho), G (verde) e B (azul) para a cor preta são (0,0,0).
Passo 2
expand_more
Se você escolher o valor 0 (zero) para o vermelho, estará ajustando o “pixel grande” do centro para que não tenha absolutamente qualquer intensidade de vermelho.
À medida que você desliza o controle para a direita, vai aumentando a intensidade de luz vermelha para 1, 2, 3... até chegar ao nível 255, que representa o máximo de intensidade que sua tela é capaz de emitir.
a) Nesse ponto, anote em um papel o código RGB que representa o vermelho puro em sua maior intensidade.
b) Agora, retorne o controle do vermelho para a posição 0 (zero). O “pixel grande” voltou a ficar preto, certo?
Passo 3
expand_more
Faça o mesmo para o controle do verde: deslize-o lentamente para a direita. Observe que o “pixel grande” vai ganhando intensidade até a máxima de verde, que é 255.
a) Nesse ponto, anote em um papel o código RGB que representa o verde puro em sua maior intensidade.
b) Agora, retorne o controle do verde para a posição 0 (zero). O “pixel grande” voltou a ficar preto, certo?
Passo 4
expand_more
Por fim, faça o mesmo para o controle do azul.
a) Nesse ponto, anote em um papel o código RGB que representa o azul puro em sua maior intensidade.
b) Agora, retorne o controle do azul para a posição 0 (zero). O “pixel grande” voltou a ficar preto, certo?
Passo 5
expand_more
O que acontecerá se você deslizar os três controles RGB até a posição 50, e o código RGB resultante for (50,50,50)?
a) O pixel resultante possui uma tonalidade cinza bem escura.
b) À esquerda do cinza-escuro, há um retângulo vermelho na vertical que indica quanto de vermelho foi aplicado para obter o cinza do nosso “pixel grande”.
c) Abaixo do pixel cinza-escuro, há um retângulo na horizontal que indica quanto de verde foi aplicado no “pixel grande” para obter a tonalidade cinza-escura.
d) À direita do “pixel grande”, há um retângulo azul na vertical que indica quanto de azul foi aplicado para obter o tom cinza-escuro resultante.
Passo 6
expand_more
Agora, deslize os controles para a direita, a fim de obter o código RGB (100,100,100). A situação é análoga ao experimento 5 anterior. Você alcançará uma tonalidade de cinza que, agora, estará bem mais clara. Observe que os componentes constituintes vermelho, verde e azul estão mais saturados. Foi a combinação dos três que gerou esse cinza mais claro.
Passo 7
expand_more
Chegou a hora de experimentarmos uma situação bastante interessante: mover os controles R, G e B totalmente para a direita e obter o código RGB (255,255,255).
a) Ao realizar este experimento, você notará que a cor resultante é branca!
b) Vamos unir este resultado ao que observamos nos experimentos 5 e 6 para tentar fazer uma breve reflexão sobre a chama escala de cinza. Segundo o esquema RGB, essa escala é alcançada por meio de códigos RGB, nos quais temos o mesmo valor numérico para a intensidade dos constituintes de cores azul, verde e vermelho.
c) RGB (0,0,0) resulta em preto, RGB (255,255,255) resulta em branco, valores intermediários entre 0 e 255 representam diferentes tonalidades de cinza. Quanto menores os valores, mais escura será a tonalidade de cinza, e quanto maiores, mais clara ela será.
Passo 8
expand_more
Para este experimento, você vai manter o controle verde sempre em 0 (zero). Manipularemos apenas os controles azul e vermelho, ambos até o 255, para obtermos o código RGB (255,0,255). Observe que alcançamos um roxo bem saturado.
Passo 9
expand_more
Para este experimento, você vai manter o controle azul sempre em zero. Manipularemos apenas os controles vermelho e verde, ambos até o 255, para obtermos o código RGB (255,255,0). Observe que alcançamos um amarelo bem saturado.
Passo 10
expand_more
Para este experimento, você vai manter o controle azul sempre em 0 (zero). Manipularemos apenas os controles vermelho e verde, ambos até o 125, para obtermos o código RGB (125,125,0). Observe que alcançamos um amarelo mais escuro.
Passo 11
expand_more
Para este experimento, você vai manter o controle vermelho sempre em zero. Manipularemos apenas os controles azul e verde, ambos até o 255, para obtermos o código RGB (0,255,255). Observe que alcançamos um turquesa.
Fique à vontade para experimentar a ferramenta RGB até que esses conceitos lhe pareçam naturais e intuitivos. Quando isso ocorrer, seu cérebro estará pensando de forma bem mais próxima ao computador.
Fique tranquilo, pois não esperamos que você memorize os três números RGB para qualquer cor em particular. O importante é que você compreenda que existe esse esquema básico para representar qualquer cor manipulando apenas três cores constituintes básicas: vermelho, verde e azul.





## Possível código em Python

/*
# Função para converter valores RGB em hexadecimal
def rgb_to_hex(r, g, b):
    return f"#{r:02X}{g:02X}{b:02X}"


# Solicita ao usuário os valores R, G e B
r = int(input("Digite o valor de vermelho (0-255): "))
g = int(input("Digite o valor de verde (0-255): "))
b = int(input("Digite o valor de azul (0-255): "))


# Verifica se os valores estão dentro do intervalo válido
if 0 <= r <= 255 and 0 <= g <= 255 and 0 <= b <= 255:
    # Calcula o valor hexadecimal
    cor_hexadecimal = rgb_to_hex(r, g, b)
    print(f"A cor correspondente é: {cor_hexadecimal}")
else:
    print("Valores inválidos. Certifique-se de inserir números entre 0 e 255.")
*/
