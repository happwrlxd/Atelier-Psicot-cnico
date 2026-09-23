# Atelier Psicotécnico

Site em português para praticar raciocínio. HTML, CSS e JavaScript puros. **Não precisa de instalação, API, banco de dados, assinatura ou etapa de compilação para publicar.**

## Colocar no GitHub Pages

1. Extraia este ZIP no computador.
2. Crie um repositório público novo no GitHub, por exemplo `atelier-psicotecnico`. Assim ele terá um endereço próprio, separado do site de francês.
3. No repositório, escolha **Add file → Upload files**.
4. Abra a pasta extraída e envie seu **conteúdo**. O arquivo `index.html` precisa aparecer diretamente na raiz do repositório, junto de `styles.css`, `app.js` e `questoes.js`. Não envie somente o ZIP e não deixe os arquivos dentro de uma pasta adicional.
5. Confirme em **Commit changes**.
6. Abra **Settings → Pages**. Em **Build and deployment**, selecione **Deploy from a branch**, branch **main**, pasta **/(root)**, e salve.
7. Aguarde o GitHub concluir a publicação. O endereço aparecerá nessa mesma tela.

Documentação oficial consultada em 23/09/2026:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Para atualizar posteriormente, substitua os arquivos alterados e faça um novo commit no mesmo repositório. Não é necessário recriar o site. A publicação acompanha a branch configurada. Se aparecer a versão antiga, aguarde a publicação e atualize a página com Ctrl+F5.

## O que está incluído

- 210 questões comentadas: 30 sequências, 30 matrizes, 30 padrões visuais e 24 de cada tema restante (dominós, rotações, cubos, atenção, lógica).
- Diagramas SVG desenhados pelo próprio código; sem dependência de imagens ou fontes externas.
- Prática por tema, quantidade e nível; correção após confirmar a resposta.
- Simulados de 9 questões/9 minutos, 30/30 e 60/45, distribuídos entre os oito temas.
- Mapa das questões, marcação para revisar, navegação e correção ao terminar.
- Prazo absoluto: recarregar a página não reinicia o cronômetro. Se o prazo terminar com a aba fechada, a correção acontece ao reabrir.
- Progresso local de até 100 sessões, revisão dos erros e exportação JSON para consulta.
- Métodos de resolução e uma página detalhada de referências.
- Interface responsiva, testada em uma área de 390 pixels de largura.

As baterias usam amostragem sem repetição dentro da sessão. Entre sessões, uma questão pode voltar. Quantidades maiores que o conjunto filtrado usam todas as questões disponíveis desse conjunto. Uma sessão em andamento deve ser finalizada antes de iniciar outra. Questões em branco entram no total e contam como não acertadas.

## Usar no computador

Abra `index.html` em um navegador moderno. Para comportamento consistente do armazenamento, prefira a versão publicada ou um servidor local. O comportamento de localStorage em arquivos abertos diretamente pode variar.

Opcional, com Node.js instalado:

```sh
npm run dev
```

Abra o endereço indicado pelo terminal. Não é necessário executar `npm install`: o servidor usa módulos internos do Node.

## Arquivos e personalização

| Arquivo | Função |
| --- | --- |
| `index.html` | Estrutura, menu, título e carregamento |
| `styles.css` | Cores, tipografia e layout responsivo |
| `app.js` | Telas, sessões, cronômetro e correção |
| `questoes.js` | Banco completo, alternativas, respostas e explicações |
| `dev-server.mjs` | Servidor local opcional |
| `tools/gerar-banco.py` | Gerador reproduzível do banco; opcional, Python 3 sem pacotes extras |
| `tools/verificar.cjs` | Verificações das respostas e dos cálculos de sessão |

Para mudar cores, edite as variáveis no começo de `styles.css`. Para trocar o nome, busque “Atelier Psicotécnico” em `index.html`, `app.js` e `README.md`.

Cada questão tem `id`, `cat`, `prompt`, `options`, `answer`, `steps`, `visual`, `level` e `source`. `answer` é o índice da alternativa correta, começando em **0**. Preserve IDs de questões já publicadas; se mudar seu conteúdo ou gabarito, use novos IDs e altere a chave de armazenamento `KEY` em `app.js` para não interpretar respostas antigas como se fossem novas.

Se editar `questoes.js` manualmente, executar o gerador depois sobrescreverá essas alterações. Não há geração dinâmica de perguntas nem chamadas a IA durante o uso.

## Fontes e limites

Os seis PDFs enviados orientaram os temas. O mapeamento detalhado de páginas está em **Fontes e materiais**. São questões autorais e variações de padrões, não transcrições das provas ou uma reprodução integral dos PDFs. Os PDFs originais não estão incluídos no pacote.

Referências públicas consultadas em 23/09/2026:

- https://www.legion-recrute.com/fr/devenir-legionnaire/les-tests — contexto oficial de lógica e personalidade e exemplos públicos.
- https://legionstories.com/app/ — apresentação pública do Legion Training, referência de tipos de prática.

Não houve acesso ao banco privado ou pago do Legion Training. O projeto não tem vínculo com essas organizações. Os tempos e quantidades dos simulados são escolhas didáticas deste site, não especificações oficiais de seleção. Os resultados não medem QI, não são avaliação psicológica e não indicam aprovação. Não há gabarito de personalidade.

## Dados e privacidade

Os resultados ficam no localStorage do navegador utilizado. Não há login, rastreamento, sincronização entre dispositivos ou envio de respostas. Limpar os dados desse site no navegador remove o progresso. A exportação JSON é um registro para consulta, não um backup importável por esta versão. Links de fontes abrem sites externos.

## Verificação

```sh
npm run check
npm test
```

Foram verificados os 210 gabaritos, alternativas distintas, operações numéricas e visuais, pontuação com questões em branco, mistura dos temas sem repetição dentro da bateria e encerramento por prazo. No navegador: prática, feedback, retomada após recarregamento, finalização, resultado e menu/simulado em largura móvel.

A integração WebMCP é opcional e só é registrada em navegadores que oferecem essa API. O uso normal não depende dela.
