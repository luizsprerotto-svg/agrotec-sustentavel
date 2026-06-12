// Aguarda o carregamento do documento
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Ação do Botão "Saiba Mais" do Banner Principal
    const btnAcao = document.getElementById('btnAcao');
    if (btnAcao) {
        btnAcao.addEventListener('click', () => {
            // Rola a página suavemente até a seção "Sobre"
            document.getElementById('sobre').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 2. Interceptação do Formulário de Contato
    const formContato = document.getElementById('formContato');
    if (formContato) {
        formContato.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede a página de recarregar

            // Captura os dados digitados
            const nome = document.getElementById('nome').value;
            
            // Exibe uma mensagem personalizada de sucesso
            alert(`Obrigado pelo seu contato, ${nome}! A mensagem sobre o projeto do Luiz Otávio foi registrada com sucesso.`);
            
            // Limpa o formulário
            formContato.reset();
        });
    }
});

