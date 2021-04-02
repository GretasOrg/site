const articlesCollections = {
  name: 'articles',
  label: 'Artigos',
  label_singular: 'Artigo',
  folder: 'content/articles',
  create: true,
  slug: 'index',
  media_folder: '',
  public_folder: '',
  path: '{{title}}/index',
  fields: [
    { label: 'Título', name: 'title', widget: 'string' },
    { label: 'Resumo', name: 'shortDescription', widget: 'text' },
    { label: 'Data de Publicação', name: 'date', widget: 'date' },
    {
      label: 'Autora',
      name: 'author',
      widget: 'relation',
      collection: 'authors',
      value_field: 'name',
      search_fields: ['name'],
    },
    {
      label: 'Categorias',
      name: 'categories',
      widget: 'relation',
      collection: 'categories',
      value_field: 'name',
      search_fields: ['name'],
      multiple: true,
    },
    {
      name: 'image',
      label: 'Imagem',
      widget: 'image',
    },
  ],
};

export default articlesCollections;
