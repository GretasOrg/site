# Markdown dentro dos campos de frontmatter manipulados pelo Netlify-CMS

## Contexto

Os campos gerencidos pelo Netlify-CMS ficam na seção de frontmatter dos arquivos de markdown. Muitas vezes, esses campos são de texto rico e precisam ser transformado de markdown para HTML em algum momento.

## Opções consideradas

1. Utilizar o hook de `onCreateNode` no `gatsby-node.js` para adicionar os campos markdown convertidos em HTML nas queries do GraphQL

`gatsby-node.js`

```javascript
const remark = require("remark");
const remarkHTML = require("remark-html");

function mdToHtml(value) {
  return remark().use(remarkHTML).processSync(value).toString();
}

exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  const aboutUs = node.frontmatter?.aboutUs;
  if (aboutUs?.aboutText) {
    const value = mdToHtml(aboutUs.aboutText);

    createNodeField({
      name: `aboutUs_aboutTextHtml`,
      node,
      value,
    });
  }
};
```

`index.js`

```javascript
export const query = graphql`
  {
    markdownRemark(fileAbsolutePath: { glob: "**/content/site/index.md" }) {
      fields {
        aboutUs_aboutTextHtml
      }
      frontmatter {
        aboutUs {
          aboutLink
          aboutLinkText
          aboutText
          bannerImg {
            ...fullWidthImageFragment
          }
          bannerText
          stats {
            color
            count
            text
          }
          title
          video
        }
      }
    }
  }
```

2. Utilizar o pacote `showdown` e converter qualquer markdown em HTML diretamente nos componentes.

```javascript
import { Converter } from "showdown";

const converter = new Converter();

Component = () => (
  <div
    dangerouslySetInnerHTML={{ __html: converter.makeHtml(aboutText) }}
  ></div>
);
```

## Decisão

Opção 2.

### Vantagens

- simplicidade
- pouco intrusiva
- fácil de entender para novas pessoas

### Desvantagens

- possivelmente introduz mais código javascript no cliente

## Prós e contras das outras opções

### Opção 1

- Boa por não adicionar código nenhum no cliente, é resolvida 100% na fase de compilação
- Boa por ficar disponível no resultado da consulta GraphQL, próximo do ideal
- Ruim porque não é adicionada como um campo da entitade à qual pertence, e sim num campo `fields` no root da consulta.
- Ruim por exigir um código manual para cada campo no `gatsby-node.js`.
- Ruim por introduzir complexidade e, portanto, mais dificuldade de manutenção.
