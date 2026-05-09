// Função para aplicar o Twemoji em todo o corpo do site
function applyTwemoji() {
  twemoji.parse(document.body, {
    folder: 'svg',
    ext: '.svg'
  });
}

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
  applyTwemoji();
});

const html = document.documentElement;
const icon = document.getElementById('themeIcon');
const label = document.getElementById('themeLabel');
let isDark = true;

function toggleTheme() {
  isDark = !isDark;
  
  // Troca o atributo de tema no HTML
  html.setAttribute('data-theme', isDark ? 'dark' : 'light');
  
  // Atualiza os textos do botão
  icon.textContent = isDark ? '☀️' : '🌙';
  label.textContent = isDark ? 'Modo Claro' : 'Modo Escuro';
  
  // Reaplica o Twemoji para converter os novos ícones do botão
  applyTwemoji();
}

