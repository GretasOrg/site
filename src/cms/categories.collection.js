import colors from './colors';

const categoriesCollections = {
  name: 'categories',
  label: 'Categorias',
  label_singular: 'Categoria',
  folder: 'content/categories',
  create: true,
  slug: 'index',
  media_folder: '',
  public_folder: '',
  path: '{{name}}/index',
  fields: [
    { label: 'Nome', name: 'name', widget: 'string' },
    { label: 'Descrição', name: 'description', widget: 'string' },
    {
      name: 'color',
      label: 'Cor',
      widget: 'select',
      options: Object.values(colors),
    },
  ],
};

export default categoriesCollections;
