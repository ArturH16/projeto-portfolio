const botao = document.getElementById('botao-tema');
const body = document.body;
const root = document.documentElement
const estilosComputados = window.getComputedStyle(root);
const valorOriginalFundoCard = estilosComputados.getPropertyValue('--fundo-card')
const valorOriginalDestaque = estilosComputados.getPropertyValue('--destaque')
const valorOriginalFundoPrincipal = estilosComputados.getPropertyValue('--fundo-principal')
const ValorOriginalTexto = estilosComputados.getPropertyValue('--texto')
const ValorOriginalTextoInverso = estilosComputados.getPropertyValue('--texto-inverso')
const ValorOriginalDestaqueInverso = estilosComputados.getPropertyValue('--destaque-inverso')

// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    root.style.setProperty('--fundo-card','#383B38')
    root.style.setProperty('--destaque','#FC4A1C')
    root.style.setProperty('--fundo-principal','#222222')
    root.style.setProperty('--texto',ValorOriginalTextoInverso)
    root.style.setProperty('--destaque-inverso',ValorOriginalTexto)
    root.style.setProperty('--texto-inverso',ValorOriginalTexto)
    botao.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove('escuro');
    root.style.setProperty('--fundo-card',valorOriginalFundoCard)
    root.style.setProperty('--destaque',valorOriginalDestaque)
    root.style.setProperty('--fundo-principal',valorOriginalFundoPrincipal)
    root.style.setProperty('--texto',ValorOriginalTexto)
    root.style.setProperty('--destaque-inverso',ValorOriginalDestaqueInverso)
    root.style.setProperty('--texto-inverso',ValorOriginalTextoInverso)
    botao.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});