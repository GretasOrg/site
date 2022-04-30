[x] testar beautiful mess com .woff
O FontSquirrel permite ajustar o tamanho da fonte, o que permitiu chegar na correção ideal. No entanto, a font ainda aparecia deslocada para cima. O FontSquirrel também permite ajustar esse deslocamento, mas pelo [por esse link](https://glyphsapp.com/learn/vertical-metrics), parece ser super complicado e não dá muita segurança de que iria funcionar bem em todos os dispositivos.
[x] botar o esqueminha de mudar de cor em um componente separado
[x] consertar seção 2

### [x] descobrir como transformar frontmatter fields em html

- isso aqui deu uma pista: https://stackoverflow.com/questions/60968746/render-markdown-html-from-frontmatter-in-a-gatsby-netlifycms-project
- no github, fui por essa linha: https://github.com/gatsbyjs/gatsby/issues/5021#issuecomment-560865297
- nao eh o ideal, eh bem manual, mas ta de boa por enquanto
- a solucao foi usar onCreateNode e adicionar o campo html no resultado da query
- algumas pessoas utilizam showdown direto na view, mas fico com medo desse javascript extra terminar ir parando no frontend

### [x] Verificar por que o aboutText gera tantas quebras de linhas e termina quebrando tudo

- Era só o texto que tava pulando linha mesmo

### [x] Usar nova abordagem de frontmatter -> html em tudo que é canto

### [x] terminar de cadastrar os planos

### [x] seção <Features />

### [x] seção <JoinUs />

### seção <MiniBlog />

[x] terminar de cadastrar os artigos
[x] date-fns pra formatar data

commitar!!!!!

### Depois

[] ajustes de UI
[] lançar

### Depois ainda

[] preview dos components no netlify cms
[] ajustar textos para a fonte Be Great
[] usar imagens de george
[] revisar
[] lançar assim mesmo
[] procurar todos os alt que nao estao dinamicos
[] video title nao esta dinamico
[x] colocar gatsby
[] estudar possibilidade de se usar sass para melhor integrar com o carbon
[x] comparar Netlify CMS, Ghost, Strapi, Spina e Refinery CMS
[] usar esquema de tipografia do carbon
É necessário criar as classes referentes a cada tipo de texto e, talvez, fazer ajustes específicos para cada fonte.
[] criar nomes semânticos para as diferentes fontes, tipo head, body, handwritten-head, handwritten-body
[] aplicar diferentes fontes de acordo com o esquema do carbon
