# EquipFoto PWA

App para fotografar e organizar partes de equipamentos. Funciona offline e pode ser instalado no Android e iPhone sem loja.

## Arquivos

```
equipamento-pwa/
├── index.html      ← app principal
├── manifest.json   ← configuração PWA
├── sw.js           ← service worker (offline)
└── icons/          ← adicione os ícones aqui (veja abaixo)
```

## Ícones (necessário para instalar como app)

Coloque dois arquivos PNG na pasta `icons/`:
- `icon-192.png` — 192×192 pixels
- `icon-512.png` — 512×512 pixels

Você pode gerar ícones gratuitamente em: https://realfavicongenerator.net

## Como publicar (grátis)

### Opção 1 — GitHub Pages (recomendado)
1. Crie uma conta em github.com
2. Crie um repositório público (ex: `equipfoto`)
3. Faça upload de todos os arquivos
4. Vá em Settings → Pages → Branch: main → Save
5. Acesse: `https://SEU_USUARIO.github.io/equipfoto`

### Opção 2 — Netlify (arrastar e soltar)
1. Acesse netlify.com e crie uma conta
2. Arraste a pasta `equipamento-pwa` para o dashboard
3. Pronto! Você recebe um link como `https://seu-app.netlify.app`

## Instalar no celular

### Android (Chrome)
1. Abra o link no Chrome
2. Toque nos 3 pontinhos → "Adicionar à tela inicial"
3. Confirme → o app aparece como ícone

### iPhone (Safari)
1. Abra o link no Safari (obrigatório — não funciona no Chrome do iPhone)
2. Toque no botão de compartilhar (quadrado com seta)
3. "Adicionar à Tela de Início"
4. Confirme → pronto!

## Funcionalidades

- Cadastrar equipamentos com nome personalizado
- Adicionar partes com quantidade de fotos definida
- Tirar fotos com câmera ou importar da galeria
- Adicionar notas/observações por foto
- Baixar cada foto com nome automático (ex: `Compressor_Valvula_01.jpg`)
- Exportar todas as fotos de um equipamento em ZIP organizado por pastas
- Funciona offline após primeiro acesso
- Dados salvos localmente no dispositivo
