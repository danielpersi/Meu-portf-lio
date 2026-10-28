/* Portfólio Daniel Pereira — interações locais, sem APIs ou credenciais */
(() => {
  'use strict';

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const root = document.documentElement;

  const CASE_DETAILS = {
    observabilidade: {
      title: 'Monitoramento proativo de infraestrutura',
      company: 'LANLINK S.I. · Analista de Redes · Janeiro a setembro de 2024',
      tags: ['Zabbix', 'Grafana', 'Infraestrutura', 'Observabilidade'],
      context: 'Ambientes corporativos dependem de visibilidade sobre recursos e eventos de infraestrutura. O currículo registra participação em uma implantação de monitoramento proativo na Lanlink.',
      action: 'Ajudei a implantar monitoramento com Grafana e Zabbix, em paralelo à administração de serviços de infraestrutura e ambientes virtualizados VMware.',
      value: 'Experiência em acompanhamento preventivo de ambientes, organização de informações operacionais e sustentação da infraestrutura. O currículo não registra indicadores quantitativos deste trabalho.'
    },
    backup: {
      title: 'Automação de rotinas de backup',
      company: 'LANLINK S.I. · Analista de Redes · Janeiro a setembro de 2024',
      tags: ['PowerShell', 'Backup', 'Automação', 'Operações de TI'],
      context: 'Rotinas recorrentes de infraestrutura precisam de procedimentos padronizados e execução consistente. A experiência na Lanlink incluiu atividades relacionadas a backup.',
      action: 'Automatizei rotinas de backup via PowerShell, conforme descrito no histórico profissional, contribuindo com as atividades de sustentação do ambiente.',
      value: 'Aplicação de scripts para apoiar processos operacionais recorrentes. O conteúdo preserva a confidencialidade e não expõe caminhos, servidores ou dados de clientes.'
    },
    hospitalar: {
      title: 'Suporte à infraestrutura de redes hospitalares',
      company: 'WAYON IT SOLUTIONS · Analista de Suporte Pleno · Agosto a novembro de 2025',
      tags: ['Redes', 'Active Directory', 'Endereçamento IP', 'Hospitais'],
      context: 'Atuação presencial no projeto GOA, com atividades de infraestrutura de redes nos hospitais DASA, conforme informado no currículo.',
      action: 'Implementei e prestei suporte presencial à infraestrutura de rede, gerenciei ativos no Active Directory e configurei dispositivos e endereçamento IP. Tive também contato básico com TOTVS, datacenter e nuvens públicas.',
      value: 'Experiência em suporte técnico e configuração de ambientes com necessidades de conectividade e continuidade operacional. Não foram incluídas informações internas dos hospitais.'
    },
    reitec: {
      title: 'Monitoramento e análise do tráfego de redes',
      company: 'REITEC FIBRA · Analista de Redes · Janeiro a julho de 2025',
      tags: ['Zabbix', 'PowerShell', 'Relatórios', 'Redes'],
      context: 'Monitoramento e acompanhamento de desempenho eram parte das atividades realizadas presencialmente na Reitec Fibra.',
      action: 'Realizei monitoramento proativo com Zabbix, análise de tráfego e relatórios de desempenho. Também automatizei rotinas com PowerShell e participei de atividades de manutenção.',
      value: 'Vivência em observabilidade, análise técnica e comunicação de informações sobre redes. O currículo não fornece métricas de desempenho ou redução de incidentes.'
    },
    fibra: {
      title: 'Implantação e sustentação de redes FTTH/GPON',
      company: 'BEM MAIS TELECOM · Técnico de Instalação · Novembro de 2019 a novembro de 2021',
      tags: ['FTTH/GPON', 'Fibra Óptica', 'Roteadores', 'Troubleshooting'],
      context: 'Atendimento a infraestrutura de fibra óptica e conectividade em ambientes residenciais e corporativos.',
      action: 'Atuei em implantação, manutenção, ativação e suporte de redes FTTH/GPON. Realizei lançamento e fusão de fibra, configuração de roteadores, testes e diagnóstico de falhas em redes de backbone e acesso.',
      value: 'Base prática em infraestrutura física e lógica, conectividade, resolução de problemas e sustentação de serviços de rede.'
    }
  };

  // Tema
  const themeToggle = $('#theme-toggle');
  const savedTheme = (() => { try { return localStorage.getItem('dp-theme'); } catch (_) { return null; } })();
  const setTheme = (theme) => {
    root.dataset.theme = theme;
    const icon = $('use', themeToggle);
    if (icon) icon.setAttribute('href', theme === 'dark' ? '#i-sun' : '#i-moon');
    themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro');
    try { localStorage.setItem('dp-theme', theme); } catch (_) { /* armazenamento indisponível */ }
  };
  setTheme(savedTheme === 'light' ? 'light' : 'dark');
  themeToggle.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));

  // Menu para celular
  const menuButton = $('#menu-toggle');
  const mobileNav = $('#mobile-nav');
  const setMenu = (open) => {
    menuButton.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    mobileNav.classList.toggle('open', open);
    mobileNav.inert = !open;
  };
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  $$('#mobile-nav a').forEach(a => a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
  document.addEventListener('click', (event) => { if (!event.target.closest('.site-header')) setMenu(false); });

  // Rolagem e observação de elementos
  const header = $('.site-header');
  const progress = $('#reading-progress');
  const updateScroll = () => {
    header.classList.toggle('is-scrolled', scrollY > 20);
    const available = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = `${available > 0 ? (scrollY / available * 100) : 0}%`;
  };
  addEventListener('scroll', updateScroll, { passive: true });
  addEventListener('resize', updateScroll, { passive: true });
  updateScroll();
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .06, rootMargin: '0px 0px -28px 0px' });
    $$('.reveal').forEach(el => observer.observe(el));
    const links = $$('.desktop-nav a');
    const sections = $$('main section[id]');
    const navObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-20% 0px -67% 0px', threshold: 0 });
    sections.forEach(section => navObserver.observe(section));
  } else {
    $$('.reveal').forEach(el => el.classList.add('visible'));
  }

  // Filtros reais dos cartões (sem chamadas externas)
  const filters = $$('.filter-button');
  const projects = $$('.project-card');
  const empty = $('#projects-empty');
  const filterProjects = (filter) => {
    let visible = 0;
    projects.forEach(project => {
      const show = filter === 'todos' || project.dataset.category.split(' ').includes(filter);
      project.hidden = !show;
      if (show) visible++;
    });
    empty.hidden = visible !== 0;
    filters.forEach(btn => {
      const active = btn.dataset.filter === filter;
      btn.classList.toggle('active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  };
  filters.forEach(btn => btn.addEventListener('click', () => filterProjects(btn.dataset.filter)));

  // Estudos de caso detalhados
  const dialog = $('#case-dialog');
  const setContent = (selector, value) => { $(selector).textContent = value; };
  const openCase = (id) => {
    const item = CASE_DETAILS[id];
    if (!item) return;
    setContent('#dialog-title', item.title);
    setContent('#dialog-company', item.company);
    setContent('#dialog-context', item.context);
    setContent('#dialog-action', item.action);
    setContent('#dialog-value', item.value);
    const tagsContainer = $('#dialog-tags');
    tagsContainer.replaceChildren(...item.tags.map(tag => {
      const span = document.createElement('span');
      span.textContent = tag;
      return span;
    }));
    if (typeof dialog.showModal === 'function') dialog.showModal();
  };
  $$('[data-open-case]').forEach(button => button.addEventListener('click', () => openCase(button.dataset.openCase)));
  ['#dialog-close', '#dialog-bottom-close'].forEach(sel => $(sel).addEventListener('click', () => dialog.close()));
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });

  // Copiar e-mail com fallback quando a área de transferência não está disponível
  let toastTimer;
  const toast = $('#toast');
  const notify = message => {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
  };
  $('#copy-email').addEventListener('click', async () => {
    const email = 'danielpesi803@gmail.com';
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard API indisponível');
      await navigator.clipboard.writeText(email);
      notify('E-mail copiado!');
    } catch (_) {
      location.href = `mailto:${email}`;
      notify('Seu aplicativo de e-mail será aberto.');
    }
  });

  // Animação de profundidade no retrato: apenas mouse e com movimento habilitado.
  const portraitFrame = $('[data-tilt]');
  const allowTilt = matchMedia('(hover: hover) and (pointer: fine)').matches && !matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (portraitFrame && allowTilt) {
    portraitFrame.addEventListener('pointermove', (event) => {
      const rect = portraitFrame.getBoundingClientRect();
      const relX = ((event.clientX - rect.left) / rect.width - .5) * 2;
      const relY = ((event.clientY - rect.top) / rect.height - .5) * 2;
      portraitFrame.style.setProperty('--tilt-x', `${-relY * 3.2}deg`);
      portraitFrame.style.setProperty('--tilt-y', `${relX * 3.2}deg`);
    }, { passive: true });
    portraitFrame.addEventListener('pointerleave', () => {
      portraitFrame.style.setProperty('--tilt-x', '0deg');
      portraitFrame.style.setProperty('--tilt-y', '0deg');
    });
  }

  $('#year').textContent = String(new Date().getFullYear());
})();
