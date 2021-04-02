const authorsCollections = {
  name: 'authors',
  label: 'Autoras',
  label_singular: 'Autora',
  folder: 'content/authors',
  create: true,
  slug: 'index',
  media_folder: '',
  public_folder: '',
  path: '{{name}}/index',
  fields: [
    { label: 'Nome', name: 'name', widget: 'string' },
    { label: 'Bio', name: 'bio', widget: 'text' },
    { label: 'Image', name: 'image', widget: 'image' },
  ],
};

export default authorsCollections;
