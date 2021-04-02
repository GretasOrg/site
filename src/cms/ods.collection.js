const odsCollections = {
  name: 'ods',
  label: 'ODS',
  label_singular: 'ODS',
  folder: 'content/ods',
  create: true,
  slug: 'index',
  media_folder: '',
  public_folder: '',
  path: '{{title}}/index',
  fields: [
    { label: 'Título', name: 'title', widget: 'string' },
    { label: 'Descrição', name: 'description', widget: 'string' },
    {
      label: 'Imagem',
      name: 'image',
      widget: 'image',
    },
  ],
};

export default odsCollections;
