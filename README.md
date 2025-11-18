# Landing Page - Dr. Cristiano Cruz

Landing page profissional para Dr. Cristiano Cruz - Médico Nutrólogo especialista em perda de peso e reposição hormonal.

## 🎨 Design

Design desenvolvido no Figma e convertido para HTML/CSS puro, mantendo fidelidade pixel-perfect ao wireframe original.

**Link do Figma:** https://www.figma.com/design/HDarhBayK4Dfh0ycJSuszE/Landing-Page--cópia-?node-id=2-2

## 🚀 Tecnologias

- HTML5 puro (semântico e acessível)
- CSS3 (sem frameworks, totalmente customizado)
- JavaScript Vanilla (interações e animações)
- Google Fonts (Manrope)
- Imagens via Figma API

## 📁 Estrutura do Projeto

```
landing-page-dr-cristiano/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos customizados
├── js/
│   └── script.js       # Interações JavaScript
├── images/             # (Assets locais, se necessário)
├── README.md           # Este arquivo
└── vercel.json         # Configuração de deploy Vercel
```

## ✨ Funcionalidades

- ✅ Design responsivo (desktop, tablet, mobile)
- ✅ Navegação suave entre seções
- ✅ Animações on-scroll
- ✅ Integração WhatsApp nos CTAs
- ✅ Header sticky com efeito de scroll
- ✅ Cards com hover effects
- ✅ Google Maps integrado
- ✅ SEO-friendly
- ✅ Performance otimizada

## 🎯 Seções

1. **Header** - Menu de navegação + CTA
2. **Hero** - Headline emocional + foto + CTA principal
3. **Serviços** - 5 cards de serviços oferecidos
4. **Depoimentos** - 3 casos de sucesso
5. **Autoridade** - Credenciais + experiência
6. **Diferenciais** - 4 pontos fortes
7. **Contato** - Canais de comunicação + mapa
8. **Footer** - Copyright

## 📱 WhatsApp Integration

Telefone configurado: **(34) 99843-4394**

Todos os botões "Agendar Consulta" abrem automaticamente o WhatsApp com mensagem pré-preenchida.

## 🌐 Deploy no Vercel

### Opção 1: Via GitHub (Recomendado)

1. Crie um repositório no GitHub
2. Faça push deste projeto:
   ```bash
   git init
   git add .
   git commit -m "feat: Landing page Dr. Cristiano Cruz"
   git remote add origin SEU_REPOSITORIO_GITHUB
   git push -u origin main
   ```

3. Acesse [vercel.com](https://vercel.com)
4. Clique em "Import Project"
5. Conecte seu repositório GitHub
6. Clique em "Deploy"

### Opção 2: Via CLI do Vercel

1. Instale o Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Faça login:
   ```bash
   vercel login
   ```

3. No diretório do projeto, execute:
   ```bash
   vercel
   ```

4. Siga as instruções e confirme o deploy

### Opção 3: Drag and Drop

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Arraste a pasta do projeto
3. Aguarde o deploy automático

## 🧪 Teste Local

Para testar localmente, você pode usar qualquer servidor HTTP simples:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server

# VS Code - extensão Live Server
# Clique com botão direito em index.html > "Open with Live Server"
```

Acesse: `http://localhost:8000`

## 📊 Performance

- ✅ Imagens otimizadas via Figma API
- ✅ CSS minificado possível
- ✅ JavaScript otimizado
- ✅ Lazy loading para imagens
- ✅ Fontes Google com preconnect

## 🎨 Personalização

### Cores Principais

Edite as variáveis CSS em `css/styles.css`:

```css
:root {
    --primary-color: #80b9ab;      /* Verde principal */
    --primary-hover: #6da89a;       /* Verde hover */
    --text-dark: #111518;           /* Texto escuro */
    --text-gray: #6d6e6e;           /* Texto cinza */
    --bg-light: #f6f7f8;            /* Fundo claro */
}
```

### WhatsApp

Edite o número em `js/script.js`:

```javascript
const whatsappNumber = '5534998434394';
```

### Google Maps

Edite as coordenadas no `index.html`:

```html
<iframe src="https://www.google.com/maps/embed?pb=..."></iframe>
```

## 📈 Analytics (Próximos Passos)

Para adicionar Google Analytics ou Meta Pixel:

1. Adicione o script no `<head>` do `index.html`
2. Os eventos de clique já estão configurados em `script.js`
3. Descomente e configure as funções de tracking

## 🔧 Manutenção

### Atualizar Imagens

As imagens estão hospedadas na API do Figma e expiram em 7 dias. Para uso permanente:

1. Baixe as imagens do Figma
2. Salve na pasta `images/`
3. Atualize os `src` no HTML

### Adicionar Novas Seções

1. Adicione o HTML em `index.html`
2. Crie os estilos em `css/styles.css`
3. Adicione interações em `js/script.js` (se necessário)

## 📝 Checklist de Deploy

- [ ] Testar localmente em múltiplos navegadores
- [ ] Verificar responsividade (mobile, tablet, desktop)
- [ ] Testar links de WhatsApp
- [ ] Configurar domínio customizado no Vercel
- [ ] Adicionar SSL (automático no Vercel)
- [ ] Configurar Analytics
- [ ] Testar SEO com Lighthouse
- [ ] Configurar Meta Tags (OG, Twitter Cards)

## 🆘 Suporte

Desenvolvido com base no design do Figma usando Claude Code.

Para dúvidas sobre o código, consulte os comentários nos arquivos ou o próprio código-fonte.

## 📜 Licença

© 2025 Dr. Cristiano Cruz - Todos os direitos reservados
