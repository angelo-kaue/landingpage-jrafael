# Jorge Rafael — Landing Page

Landing page premium para conversão em agendamento de consulta, construída em
React + Tailwind CSS + Framer Motion, seguindo o briefing "Clareza que transforma".

## Instalação

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview
```

## Decisões de projeto

### Conceito visual
O fio condutor da página é uma única ideia: **sair do caos e entrar no
controle**. Isso vira literal no elemento de assinatura (`EquilibriumLine.jsx`)
no Hero — uma linha que começa errática (efeito sanfona, dietas da moda) e se
resolve numa curva contínua dourada (equilíbrio, consistência). O resto do
layout é deliberadamente quieto para deixar esse momento ser o único ponto de
destaque visual forte da página, como pede o briefing ("interface silenciosa,
elegante e confiante").

### Paleta e tipografia
Paleta 100% fiel ao briefing (seção 7): azul profundo `#0B1F3A`, azul médio
`#1F4E79`, branco, cinza `#F5F7FA` e dourado `#D4AF37` — registrada em
`tailwind.config.js` como tokens (`navy-deep`, `navy-mid`, `mist`, `gold`), e
usada com moderação: o dourado aparece só em CTAs, números de autoridade e no
ponto de virada da linha de assinatura, nunca como cor de fundo dominante.

Tipografia usa a stack de sistema (`-apple-system`, `SF Pro Display/Text`),
que garante a sensação "Apple" pedida sem nenhum carregamento de fonte externa
— resultado direto em performance (`carregamento rápido`).

### Estrutura das seções
Segue exatamente a ordem do briefing (seção 3): Hero → Quebra de crença →
Método → Prova social → Educação/Autoridade → Sobre o profissional → Serviço →
Objeções → CTA final. Cada seção é um componente isolado em
`src/components/`.

### Fidelidade ao conteúdo
Todo o texto vem de `src/data/brand.js`, que é a tradução direta do JSON da
marca — nenhuma informação foi inventada. Onde o JSON não trazia o dado (foto
real do profissional, depoimentos de pacientes, fotos de antes/depois, anos de
experiência, certificações, valores de consulta), o componente correspondente
exibe um **placeholder explícito e visível** (ex.: "Adicionar depoimento de
paciente"), em vez de simular conteúdo falso. Procure por `PlaceholderBlock` em
`src/components/ui.jsx` para ver todos os pontos que precisam de conteúdo real
antes de publicar.

Pontos que precisam de input real antes do lançamento:
- Foto profissional (seção "Sobre").
- Depoimentos reais de pacientes + fotos de antes/depois (seção "Resultados").
- Número de WhatsApp — atualmente todos os CTAs apontam para o Instagram
  (`@jorgerafael_nutri`), único contato presente no JSON da marca.
- Certificações/anos de experiência, se quiser reforçar a seção de
  autoridade — não incluídos por não constarem no JSON.

### Motion
Todas as animações usam variantes centralizadas em `src/lib/motion.js`
(`fadeUp`, `stagger`, `scaleIn`), com `whileInView` + `once: true` — a página
anima uma vez por seção, sem repetição a cada scroll. `prefers-reduced-motion`
é respeitado globalmente via `index.css`.

### Acessibilidade e SEO
- Foco de teclado visível (`:focus-visible` em dourado).
- Hierarquia semântica de headings (`h1` único no Hero, `h2` por seção).
- `SEO.jsx` define `title`, `meta description` e JSON-LD (`schema.org/Person`)
  sem dependências externas.

## Revisão visual premium (2ª entrega)

A partir da logo oficial enviada pelo cliente (arquivo branco/transparente
`logo-jrafael.png`), foram gerados os seguintes ativos em `public/`:

- `brand/logo-white.png` e `brand/logo-navy.png` — logo completa, para fundos
  escuros e claros respectivamente.
- `brand/icon-white.png` e `brand/icon-navy.png` — apenas o monograma, usado
  como marca d'água no CTA final e na base do favicon/loader.
- `favicon.ico`, `favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png` —
  gerados a partir do monograma sobre fundo navy sólido, para boa legibilidade
  em qualquer tema de navegador.
- `og-image.png` — imagem de compartilhamento social (Open Graph/Twitter Card),
  logo sobre o gradiente navy da marca.

A logo aparece no Header (trocando automaticamente entre a versão branca e a
navy conforme o scroll), no Footer, como marca d'água discreta no CTA final e
no `Loader` inicial. O CRN (`CRN11 20140/P`) veio impresso na própria logo —
como é um dado real, foi usado no selo de credencial da seção "Sobre" e no
rodapé, no lugar do placeholder genérico de certificação.

**Contato:** o botão principal agora abre o WhatsApp
(`+55 88 99723-0275`) com a mensagem *"Olá! Vim pelo seu Instagram e gostaria
de agendar uma consulta."* já preenchida (link `wa.me` montado em
`src/data/brand.js`). O Instagram permanece como contato secundário.

**Novos componentes** (`src/components/`):
- `Logo.jsx` — logo com variante branca/navy.
- `WhatsAppIcon.jsx` — ícone de linha fina, consistente com os ícones lucide.
- `Loader.jsx` — splash breve com a logo ao carregar (respeita
  `prefers-reduced-motion`).
- `HeroVisual.jsx` — mockup de painel de acompanhamento (anéis de progresso,
  sparkline, chips flutuantes, tilt 3D sutil ao mover o mouse) — o
  substituto, com honestidade visual, para a foto/vídeo de destaque que ainda
  não temos.
- `TestimonialCarousel.jsx` — carrossel de depoimentos com avanço automático,
  navegação manual, avaliação em estrelas e avatares — estrutura pronta,
  claramente marcada como placeholder até a chegada de depoimentos reais.
- `MosaicPlaceholder.jsx` — mosaico bento ilustrado (ícone + gradiente) para
  os espaços de galeria/antes-depois.
- `CountUp.jsx` — anima os números de autoridade ao entrarem na tela.
- `SectionDivider.jsx` — divisor fino usado com moderação entre seções.

**Por que não usei fotos de banco de imagens:** sem uma fonte de fotografia
real e licenciada para o projeto, simular fotos de pacientes ou do
profissional poderia parecer conteúdo real e violar a regra de não inventar
informação. Optei por ilustrações (ícones + gradiente da marca) nos espaços de
mídia — o mesmo caminho usado por produtos como Linear e Stripe antes de
terem fotografia própria — e deixei todos os pontos de substituição
claramente identificados para quando o material oficial chegar.

## Como trocar as fotos pelas do cliente (4ª entrega — leia isto primeiro)

**Toda foto do site agora é um arquivo `.jpg` de verdade** dentro de
`public/photos/`. Não existe mais nenhum "boneco" (ilustração SVG) no
caminho de exibição — o que você vê hoje são placeholders profissionais já
rasterizados como imagem, prontos para ser **substituídos por simples
substituição de arquivo**, sem tocar em nenhuma linha de código.

### Passo a passo
1. Abra a pasta `public/photos/` do projeto.
2. Para cada foto que você quiser trocar, salve a foto oficial do cliente
   **com exatamente o mesmo nome de arquivo** (substitua o arquivo, não
   adicione um novo).
3. Salve, rode `npm run dev` (ou publique de novo) — pronto, a foto nova já
   aparece no lugar certo, no tamanho certo, com o mesmo recorte (`object-fit:
   cover` cuida do enquadramento automaticamente).

### Tabela de arquivos (nome exato → onde aparece → proporção ideal)

| Arquivo (`public/photos/…`) | Usado em | Proporção recomendada |
|---|---|---|
| `about-portrait.jpg` | Retrato do Jorge Rafael, seção "Sobre" | vertical 4:5 (ex.: 1000×1250px) |
| `hero-video-poster.jpg` | Capa do vídeo no Hero | 16:9 (ex.: 1280×720px) |
| `service-consulta.jpg` | Card "Consulta nutricional" | 16:9 |
| `service-acompanhamento.jpg` | Card "Acompanhamento nutricional" | 16:9 |
| `method-banner.jpg` | Banner da seção "Método" | 16:9 (larga) |
| `testimonial-1.jpg` / `-2.jpg` / `-3.jpg` | Avatares do carrossel de depoimentos e do CTA final | quadrada 1:1 (ex.: 600×600px) |
| `before.jpg` | Lado "antes" do comparativo | 4:3 |
| `after.jpg` | Lado "depois" do comparativo | 4:3 |
| `gallery-nutricao.jpg` | Galeria + prévia do feed (Autoridade) | 4:3 |
| `gallery-treino.jpg` | Galeria + prévia do feed | 4:3 |
| `gallery-consulta.jpg` | Galeria | 4:3 |
| `gallery-resultado.jpg` | Galeria + prévia do feed | 4:3 |

Todo esse mapeamento também está centralizado em código, em
`src/components/Photo.jsx` (objeto `PHOTOS`) — só mexa ali se quiser
**renomear** os arquivos ou adicionar um slot novo; para simplesmente trocar
a imagem, o passo a passo acima já resolve.

### Removendo o selinho "imagem ilustrativa"
Cada foto ainda placeholder mostra um selinho discreto no canto (para o time
saber o que falta trocar). Depois de colocar a foto real, remova o aviso
passando `tag={false}` no componente `<Photo .../>` correspondente (ou,
mais simples: apague a linha do selinho — ele já vem desligado nos avatares
pequenos, que são os componentes que usam `<Photo tag={false} .../>`).

### Como trocar o vídeo do Hero
Hoje o Hero mostra um **placeholder de vídeo** (`VideoPlaceholder.jsx`): a
foto de capa (`hero-video-poster.jpg`) com um botão de play decorativo — ele
não reproduz nada ainda. Duas formas de ativar o vídeo real:

**Opção A — vídeo hospedado (YouTube/Vimeo/Instagram):**
Em `src/components/Hero.jsx`, troque o bloco do `<VideoPlaceholder ... />`
por um iframe, por exemplo:
```jsx
<div className="aspect-video w-full overflow-hidden rounded-3xl shadow-soft">
  <iframe
    className="h-full w-full"
    src="https://www.youtube.com/embed/SEU_ID_AQUI"
    title="Como funciona o método"
    allow="accelerate; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
</div>
```

**Opção B — arquivo de vídeo próprio (.mp4):**
1. Coloque o arquivo em `public/videos/metodo.mp4`.
2. Troque o mesmo bloco por:
```jsx
<video
  className="aspect-video w-full overflow-hidden rounded-3xl shadow-soft object-cover"
  controls
  poster="/photos/hero-video-poster.jpg"
>
  <source src="/videos/metodo.mp4" type="video/mp4" />
</video>
```
Isso substitui o card decorativo por um player de verdade, mantendo a
mesma "capa" (poster) e o mesmo espaço já reservado no layout.

---

## Apresentação premium ao cliente (3ª entrega)

Esta rodada resolveu o pedido de "nenhum espaço vazio": todo ponto que antes
era uma caixa tracejada "adicionar mídia" agora tem uma peça visual completa
e profissional, pronta para substituição posterior. Na 4ª entrega (acima),
essas ilustrações foram convertidas em arquivos `.jpg` reais para facilitar
a troca — o texto abaixo documenta as decisões de design que continuam
valendo.

### Logo ilustrativa (placeholder temporário)
Como pedido, a logo real do cliente foi **substituída temporariamente** por
uma logo ilustrativa própria (monograma "JR" + wordmark "Jorge Rafael"),
gerada seguindo a paleta oficial (navy/dourado). Ela está ativa em todos os
pontos de marca: Header, Footer, favicon, apple-touch-icon, `Loader` e
imagem de compartilhamento social (og-image).

**Troca para a logo real é trivial**: os arquivos ficam em `public/brand/`
com nomes fixos (`logo-white.png`, `logo-navy.png`, `icon-white.png`,
`icon-navy.png`) — o componente `Logo.jsx` nunca precisa mudar. A logo real
enviada pelo cliente já está preparada em `public/brand/official/` com os
mesmos nomes; para ativá-la quando o cliente aprovar:
```bash
cp public/brand/official/*.png public/brand/
# e regenere favicon/apple-touch-icon/og-image a partir dela, se desejar
```

### Biblioteca de ilustrações (`src/components/illustrations/Illustrations.jsx`)
> **Atualização (4ª entrega):** essas ilustrações não são mais renderizadas
> diretamente no site — elas foram usadas para *gerar* os arquivos `.jpg`
> em `public/photos/` (ver seção "Como trocar as fotos" no topo deste
> arquivo), que é o que aparece hoje. O arquivo continua no projeto como
> referência, caso você queira gerar novas variações de placeholder antes
> das fotos reais chegarem.

Motivo de ter usado ilustração (e não foto de banco de imagens) como ponto
de partida: (1) não há como licenciar/baixar fotos de terceiros dentro
deste ambiente de forma segura para um entregável de cliente, e (2) manter
tudo vetorial até o último passo garante que os placeholders fiquem leves e
consistentes na paleta da marca. Componentes disponíveis:
`PortraitIllustration` (retrato/avatar, com variações), `NutritionScene`,
`TrainingScene`, `ConsultationScene`, `ResultScene`, `TransformSilhouette`.

### Onde cada mídia foi aplicada
- **Hero** — `VideoPlaceholder` (card de vídeo demonstrativo com botão de
  play) sobreposto ao mockup do painel, compondo profundidade.
- **Método** — banner ilustrativo acima dos 4 cards de princípios.
- **Sobre** — retrato ilustrativo preenchendo o frame (sem caixa tracejada).
- **Serviços** — ilustração de cena no topo de cada card.
- **Resultados** — `TestimonialCarousel` com retrato ilustrativo + nome
  genérico ("Cliente 1/2/3") + estrelas; `BeforeAfterSlider` (comparativo
  arrastável); `Gallery` (carrossel horizontal de cenas do dia a dia).
- **Autoridade** — prévia ilustrada de feed (3 mini-cenas).
- **CTA final** — avatares ilustrativos sobrepostos junto ao número real de
  pacientes.
- **Footer** — marca d'água discreta da logo.

### Transparência para a equipe
Cada mídia ilustrativa carrega um selo discreto (`PlaceholderTag.jsx`,
"imagem ilustrativa" / "vídeo ilustrativo" / "comparativo ilustrativo") no
canto — visível o suficiente para o time saber o que falta trocar, discreto
o bastante para não atrapalhar a apresentação ao cliente. É seguro remover
esses selos componente por componente conforme cada mídia real for
integrada.

## Estrutura de arquivos

```
src/
  data/brand.js          conteúdo (fonte única de verdade)
  lib/motion.js           variantes de animação
  components/
    ui.jsx                Button, Container, SectionHeading, PlaceholderBlock...
    EquilibriumLine.jsx    elemento de assinatura (caos -> clareza)
    Header.jsx             seção 0 — navegação
    Hero.jsx                seção 1
    BeliefBreak.jsx         seção 2
    Method.jsx              seção 3
    SocialProof.jsx         seção 4
    Authority.jsx           seção 5
    About.jsx               seção 6
    Services.jsx            seção 7
    Objections.jsx          seção 8
    FinalCTA.jsx            seção 9
    Footer.jsx
  App.jsx
  SEO.jsx
  main.jsx
  index.css
```
