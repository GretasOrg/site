const articlesCollections = {
  name: "articles",
  label: "Artigos",
  label_singular: "Artigo",
  folder: "content/articles",
  create: true,
  slug: "index",
  // media_folder: '',
  // public_folder: '',
  path: "{{name}}/index",
  fields: [
    { label: "Título", name: "name", widget: "string" },
    { label: "Resumo", name: "shortDescription", widget: "text" },
    { label: "Data de Publicação", name: "date", widget: "date" },
    {
      label: "Autora",
      name: "author",
      widget: "relation",
      collection: "authors",
      value_field: "name",
      search_fields: ["name"],
    },
    {
      label: "Categorias",
      name: "categories",
      widget: "relation",
      collection: "categories",
      value_field: "name",
      search_fields: ["name"],
      multiple: true,
    },
    {
      name: "image",
      label: "Imagem",
      widget: "image",
    },
    { label: "#PraCegoVer", name: "imageAlt", widget: "text" },
    { label: "Link", name: "externalUrl", widget: "string" },
  ],
};

export default articlesCollections;
