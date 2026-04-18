# Calculadora CFTV — Conexão Smart Home

PWA para cálculo de armazenamento em sistemas de câmeras de segurança.

## Estrutura de arquivos

```
/
├── index.html
├── manifest.json
├── sw.js
├── logo.png              ← substitua pelo seu logo
└── icons/
    ├── icon-192.png
    ├── icon-192-maskable.png
    ├── icon-512.png
    └── icon-512-maskable.png
```

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (pode ser público)
2. Faça upload de **todos** os arquivos desta pasta, mantendo a estrutura acima
3. Vá em **Settings → Pages**
4. Em **Source**, selecione `Deploy from a branch`
5. Selecione a branch `main` e a pasta `/ (root)`
6. Clique em **Save**
7. Aguarde ~2 minutos e acesse `https://SEU_USUARIO.github.io/NOME_DO_REPO/`

## Como instalar no Android

1. Abra o link do GitHub Pages no **Chrome**
2. Aguarde a página carregar completamente
3. O Chrome exibirá automaticamente um banner **"Adicionar à tela inicial"**
4. Toque em **Instalar**

> Se o banner não aparecer, toque no menu ⋮ → "Adicionar à tela inicial"

## Como atualizar os ícones no futuro

1. Substitua os arquivos em `icons/`
2. No `sw.js`, incremente a versão do cache: `cftv-calc-v2` → `cftv-calc-v3`
3. No `index.html`, incremente o `?v=` no link do manifest: `?v=2` → `?v=3`
4. Faça commit e push

## Como usar seu próprio logo

Substitua o arquivo `logo.png` na raiz pelo seu logo.  
Dimensões recomendadas: **480×160px** (horizontal, fundo transparente).
