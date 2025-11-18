# 🚀 Instruções de Deploy - Landing Page Dr. Cristiano Cruz

## ✅ Status do Projeto

O projeto está **100% pronto para deploy**! Todos os arquivos foram criados e o repositório Git foi inicializado.

**Localização:** `/Users/joaorovere/github-local/segundo-cerebro-brio/landing-page-dr-cristiano/`

---

## 📋 Opções de Deploy

### Opção 1: GitHub + Vercel (RECOMENDADO) ⭐

Esta é a melhor opção porque permite:
- Deploy automático a cada push
- Preview de branches
- Rollback fácil
- Analytics integrado

#### Passo 1: Criar Repositório no GitHub

1. Acesse: https://github.com/new
2. Configure:
   - **Repository name:** `landing-page-dr-cristiano`
   - **Description:** Landing Page Profissional - Dr. Cristiano Cruz (Nutrologia)
   - **Visibility:** Public ou Private (sua escolha)
   - **NÃO** marque "Add a README file" (já temos)
3. Clique em **"Create repository"**

#### Passo 2: Conectar o Repositório Local ao GitHub

No terminal, execute os comandos que o GitHub mostrará (algo como):

```bash
cd /Users/joaorovere/github-local/segundo-cerebro-brio/landing-page-dr-cristiano

git remote add origin https://github.com/SEU_USUARIO/landing-page-dr-cristiano.git

git branch -M main

git push -u origin main
```

⚠️ **IMPORTANTE:** Substitua `SEU_USUARIO` pelo seu username do GitHub!

#### Passo 3: Deploy no Vercel

1. Acesse: https://vercel.com/new
2. Clique em **"Import Git Repository"**
3. Conecte sua conta GitHub (se ainda não conectou)
4. Selecione o repositório `landing-page-dr-cristiano`
5. Configure:
   - **Project Name:** `landing-page-dr-cristiano` (ou escolha outro)
   - **Framework Preset:** `Other`
   - **Root Directory:** `./`
   - **Build Command:** Deixe vazio (site estático)
   - **Output Directory:** `./`
6. Clique em **"Deploy"**

🎉 Em 30-60 segundos, seu site estará no ar!

Você receberá um link como: `https://landing-page-dr-cristiano.vercel.app`

#### Passo 4: Configurar Domínio Customizado (Opcional)

1. No painel do Vercel, vá em **Settings** > **Domains**
2. Adicione seu domínio (ex: `drcristiano.com.br`)
3. Configure os DNS conforme instruções do Vercel
4. Aguarde propagação (até 48h)

---

### Opção 2: Deploy Direto via Vercel CLI

Se preferir fazer deploy direto sem GitHub:

```bash
cd /Users/joaorovere/github-local/segundo-cerebro-brio/landing-page-dr-cristiano

# Login no Vercel (abrirá navegador)
vercel login

# Deploy (modo interativo)
vercel

# Ou deploy direto para produção
vercel --prod
```

Siga as instruções no terminal e pronto!

---

### Opção 3: Drag and Drop (Mais Simples)

1. Acesse: https://vercel.com/new
2. Clique na aba **"Deploy"**
3. Arraste a pasta `landing-page-dr-cristiano` para a área de upload
4. Aguarde o deploy automático

⚠️ **Desvantagem:** Não tem integração Git, então atualizações precisam ser feitas manualmente.

---

## 🔍 Teste Local (Antes do Deploy)

Para testar localmente antes de fazer deploy:

### Opção A: Python (Built-in)

```bash
cd /Users/joaorovere/github-local/segundo-cerebro-brio/landing-page-dr-cristiano

python3 -m http.server 8000
```

Acesse: http://localhost:8000

### Opção B: Node.js

```bash
npx http-server
```

### Opção C: VS Code Live Server

1. Instale a extensão "Live Server"
2. Clique com botão direito em `index.html`
3. Selecione "Open with Live Server"

---

## ✅ Checklist Pré-Deploy

- [x] HTML criado e validado
- [x] CSS convertido do Figma (pixel-perfect)
- [x] JavaScript com interações
- [x] README com documentação
- [x] vercel.json configurado
- [x] .gitignore criado
- [x] Git inicializado e commit feito
- [ ] Testado localmente
- [ ] Repositório GitHub criado
- [ ] Deploy no Vercel realizado
- [ ] Site testado em produção
- [ ] Domínio customizado configurado (opcional)

---

## 🎨 Assets de Imagem

**IMPORTANTE:** As imagens atualmente estão usando a Figma API e **expiram em 7 dias**.

Para produção permanente, você tem 2 opções:

### Opção 1: Baixar Imagens do Figma

1. Abra o design no Figma
2. Selecione cada imagem
3. Clique com botão direito > Export
4. Salve na pasta `images/`
5. Atualize os `src` no `index.html`

### Opção 2: Usar CDN

1. Faça upload das imagens para um serviço como:
   - Cloudinary (grátis até 25GB)
   - ImgIX
   - Vercel Blob Storage
2. Atualize as URLs no HTML

---

## 📊 Próximos Passos Após Deploy

1. **Analytics:**
   - Adicione Google Analytics 4
   - Configure Meta Pixel (se usar Facebook Ads)
   - O código já está preparado em `script.js`

2. **SEO:**
   - Adicione Meta Tags (Open Graph, Twitter Cards)
   - Configure sitemap.xml
   - Adicione robots.txt
   - Registre no Google Search Console

3. **Performance:**
   - Execute Lighthouse no Chrome DevTools
   - Otimize imagens (WebP, lazy loading)
   - Minifique CSS/JS (opcional)

4. **Marketing:**
   - Configure campanhas de Ads
   - Integre com CRM (HubSpot, RD Station)
   - Configure chatbot (se necessário)

---

## 🆘 Problemas Comuns

### "Permission denied" ao fazer push

```bash
# Use SSH ao invés de HTTPS
git remote set-url origin git@github.com:SEU_USUARIO/landing-page-dr-cristiano.git
```

### Deploy falhou no Vercel

- Verifique se `vercel.json` está correto
- Confirme que está na pasta raiz do projeto
- Veja os logs no painel do Vercel

### Imagens não aparecem

- Verifique se as URLs da Figma API ainda estão válidas
- Considere fazer download das imagens

---

## 📱 Contatos para Atualização

O telefone configurado é: **(34) 99843-4394**

Para alterar, edite em:
- `index.html` - seção de contato
- `js/script.js` - integração WhatsApp

---

## 🎯 URLs Importantes

Depois do deploy, você terá:

- **Site em Produção:** `https://seu-projeto.vercel.app`
- **Repositório GitHub:** `https://github.com/SEU_USUARIO/landing-page-dr-cristiano`
- **Painel Vercel:** `https://vercel.com/seu-usuario/landing-page-dr-cristiano`

---

## 📞 Precisa de Ajuda?

Se tiver dúvidas durante o deploy:

1. Leia o README.md completo
2. Consulte a documentação do Vercel: https://vercel.com/docs
3. Verifique os logs de erro no painel do Vercel
4. Teste localmente primeiro com http-server

---

**Boa sorte com o deploy! 🚀**

*Desenvolvido com Claude Code - Pixel-perfect do Figma para produção*
