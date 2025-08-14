function baixarCurriculo() {
    const link = document.createElement('a');
    link.href = 'AssetsPortifolio/Curriculo-AnaClaraAraujo.pdf';
    link.download = 'Curriculo-AnaClaraAraujo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}




function enviarWhats(event) {
    event.preventDefault();
    const nome = document.getElementById('Nome').value;
    const mensagem = document.getElementById('Mensagem').value;
    const telefone = '5598982307447';
    const texto = `Olá me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    window.open(url, '_blank');

}

// Partículas interativas
const particulas = document.getElementById('particulas');
const particleCount = 70;

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 3 + 's';
    particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
    particulas.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 5000);
}

// Criar partículas continuamente
setInterval(createParticle, 300);

// Efeito de partículas no mouse

// Theme Switcher
const themeBtn = document.getElementById('theme-btn');
let currentTheme = 'dark';

themeBtn.addEventListener('click', () => {
    if (currentTheme === 'dark') {
        document.body.setAttribute('data-theme', 'light');
        themeBtn.textContent = '☀️';
        currentTheme = 'light';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeBtn.textContent = '🌙';
        currentTheme = 'dark';
    }
});

document.querySelector('.Foto-perfil').addEventListener('click', function() {
    this.style.animation = 'none';
    this.offsetHeight; // Trigger reflow
    this.style.animation = 'flutuar 0.5s ease-in-out, shake 0.5s ease-in-out';
});

