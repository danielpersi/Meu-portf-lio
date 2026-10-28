# Portfólio profissional — Daniel Pereira

Site estático responsivo (HTML, CSS e JavaScript), preparado para GitHub Pages, Netlify ou Vercel, sem bibliotecas externas, build, npm ou banco de dados.

## Arquivos

- `index.html`: site completo com seções, projetos e contatos.
- `styles.css`: estrutura visual, layout responsivo e temas claro/escuro.
- `premium.css`: atualização premium da apresentação com foto, animações, moldura interativa e efeitos delicados.
- `daniel-perfil.webp`: fotografia fornecida, convertida para WebP (sem alterar o rosto).
- `daniel-mini.webp`: versão comprimida para miniaturas e possíveis personalizações.
- `script.js`: menu mobile, filtro de projetos, detalhes dos casos, cópia de e-mail, efeitos de interface e tema.
- `favicon.svg`: ícone da página.
- `noc-ambient.webp` / `noc-servers.webp`: elementos visuais baseados no banner de infraestrutura já criado anteriormente.
- `Daniel_Pereira_Curriculo.pdf`: currículo enviado para download no site.
- `laboratorio_automacao_redes.zip`: material inicial de estudos de Python e Netmiko elaborado anteriormente.

## Como abrir

Clique duas vezes no `index.html`. Como todos os arquivos estão na pasta principal, também é simples fazer upload no GitHub.

## Como publicar no GitHub Pages

1. Crie um repositório público, por exemplo `portfolio-daniel`.
2. Faça upload de **todos os arquivos desta pasta**, mantendo-os juntos na raiz do repositório.
3. Em **Settings → Pages → Build and deployment**, selecione **Deploy from a branch** e **main / (root)**.
4. Aguarde a publicação. O endereço será semelhante a `https://SEU-USUARIO.github.io/portfolio-daniel/`.

No Netlify, basta arrastar a pasta do projeto para a área de deploy manual; o site dispensa comando de build.

## Conteúdo e integridade

- Os projetos descritos correspondem a atividades registradas no currículo; não foram atribuídos resultados numéricos ou screenshots de clientes.
- Os painéis e ilustrações são **conceituais**, não dados de produção.
- O laboratório de Python/Netmiko está explicitamente indicado como material de estudo em evolução.
- A formação acadêmica não foi rotulada como concluída porque o currículo não informa esse status.
- Valide com o Daniel as datas das experiências, especialmente sobreposições, e atualize o currículo em PDF sempre que necessário.
- Os telefones, e-mail e links profissionais são públicos no site; revise antes de publicar.
- Para trocar e-mail, WhatsApp, LinkedIn, textos ou currículo, edite `index.html` e substitua o PDF.
- Não cole credenciais, IPs privados, inventários de clientes ou backups reais no repositório público.

## Personalização rápida

As cores estão em variáveis CSS no topo de `styles.css`; todo o conteúdo pode ser alterado diretamente em `index.html`. Os detalhes adicionais dos cinco casos ficam no objeto `CASE_DETAILS` em `script.js`.

Conteúdo de perfil confirmado a partir do currículo fornecido e de informações públicas do LinkedIn na data de criação (outubro/2026).

## Atualização visual premium (outubro de 2026)

Foto profissional em destaque na abertura, moldura elegante, cartões flutuantes, efeito de profundidade no mouse, efeitos suaves, faixa animada de competências e otimizações para celular. Os efeitos respeitam a opção de acessibilidade de reduzir movimento. O site mantém seus dados profissionais, estudos de caso, currículo e funcionalidades originais.
