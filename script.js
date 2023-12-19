

document.addEventListener('DOMContentLoaded', function() {
    // Configuração do atraso inicial em milissegundos
    let atrasoInicial = 1000;

    // Obtém o elemento com a classe 'texto-escrito'
    let elementoTexto = document.querySelector('.tittle-home');

    // Obtém o texto dentro do elemento
    let texto = elementoTexto.textContent;

    // Limpa o conteúdo do elemento
    elementoTexto.textContent = '';

    // Função para adicionar cada letra com um atraso
    function adicionarLetras(index) {
        if (index < texto.length) {
            elementoTexto.textContent += texto.charAt(index);
            setTimeout(function() {
                adicionarLetras(index + 1);
            }, 100); // Ajuste o valor 100 para controlar a velocidade de digitação
        }
    }

    // Inicia a animação após o atraso inicial
    setTimeout(function() {
        adicionarLetras(0);
    }, atrasoInicial);
});
