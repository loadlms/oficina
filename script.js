// Navegação suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Efeito de scroll no header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(45, 45, 45, 0.95) 100%)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Animação de entrada dos elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards de serviços e diferenciais
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.service-card, .differential-item, .contact-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Funcionalidade do formulário de contato
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Coletar dados do formulário usando os novos IDs
    const nome = document.getElementById('nome').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const veiculo = document.getElementById('veiculo').value;
    const servico = document.getElementById('servico').value;
    const problema = document.getElementById('problema').value;
    
    // Validação básica
    if (!nome || !whatsapp || !veiculo || !servico || !problema) {
        alert('Por favor, preencha todos os campos.');
        return;
    }
    
    // Criar mensagem estruturada para WhatsApp
    const whatsappMessage = `🔧 *SOLICITAÇÃO DE SERVIÇO* 🔧

👤 *Cliente:* ${nome}
📱 *WhatsApp:* ${whatsapp}
🚗 *Veículo:* ${veiculo}
⚙️ *Serviço:* ${servico}

📝 *Descrição do Problema:*
${problema}

---
_Mensagem enviada através do site_`;
    
    // Número do WhatsApp da oficina (substitua pelo número real)
    const whatsappNumber = '5511957548091';
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Limpar formulário
    this.reset();
    
    // Mostrar mensagem de sucesso
    const submitBtn = this.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Mensagem Enviada!';
    submitBtn.style.background = '#28a745';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = 'linear-gradient(135deg, #ff6b35 0%, #f7931e 100%)';
    }, 3000);
});

// Funcionalidade dos botões de contato
document.querySelectorAll('.btn-contact, .btn-primary').forEach(button => {
    if (button.getAttribute('href') === '#contato') {
        button.addEventListener('click', function(e) {
            // A navegação suave já está implementada acima
            // Adicionar efeito visual ao botão
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }
});

// Efeito de digitação no título principal
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Aplicar efeito de digitação quando a página carregar
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-content h1');
    const originalText = heroTitle.textContent;
    
    // Pequeno delay para garantir que tudo carregou
    setTimeout(() => {
        typeWriter(heroTitle, originalText, 80);
    }, 500);
});

// Contador animado para números (se houver)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Adicionar efeito de hover personalizado aos cards
document.querySelectorAll('.service-card, .differential-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Funcionalidade para links do Instagram
document.querySelectorAll('a[href*="instagram"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Adicionar efeito visual
        this.style.transform = 'scale(1.1) rotate(5deg)';
        setTimeout(() => {
            this.style.transform = 'scale(1) rotate(0deg)';
        }, 200);
    });
});

// Preloader simples (opcional)
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});