 document.addEventListener('DOMContentLoaded', function () {
     const toggleBtn = document.querySelector('.toggle-btn');
     const menu = document.querySelector('.menu');
     const fecharMenuBtn = document.querySelector('.fechar-menu');

     toggleBtn.addEventListener('click', function () {
         menu.classList.toggle('open');
     });

     fecharMenuBtn.addEventListener('click', function () {
         menu.classList.remove('open');
     });
 });


document.addEventListener('DOMContentLoaded', function() {
    
    let atrasoInicial = 1000;

    
    let elementoTexto = document.querySelector('.tittle-home');

    
    let texto = elementoTexto.textContent;

    
    elementoTexto.textContent = '';

    
    function adicionarLetras(index) {
        if (index < texto.length) {
            elementoTexto.textContent += texto.charAt(index);
            setTimeout(function() {
                adicionarLetras(index + 1);
            }, 100); 
        }
    }

    setTimeout(function() {
        adicionarLetras(0);
    }, atrasoInicial);
});
    


