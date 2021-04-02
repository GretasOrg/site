const donationsCollections = {
  name: 'donations',
  label: 'Planos de Doação',
  label_singular: 'Plano de Doação',
  folder: 'content/donations',
  create: true,
  slug: 'index',
  media_folder: '',
  public_folder: '',
  path: '{{title}}/index',
  fields: [
    { label: 'Título', name: 'title', widget: 'string' },
    { label: 'Descrição', name: 'description', widget: 'string' },
    { label: 'Texto', name: 'text', widget: 'text' },
    { label: 'Valor', name: 'value', widget: 'number' },
    { label: 'É Editável?', name: 'isEditable', widget: 'boolean' },
    { label: 'ID do Plano', name: 'planId', widget: 'string' },
    {
      label: 'Imagem',
      name: 'image',
      widget: 'image',
    },
  ],
};

export default donationsCollections;
