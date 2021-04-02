const introSection = {
  name: 'intro',
  label: 'Seção Intro',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      name: 'title',
      label: 'Linhas do Título',
      widget: 'list',
      field: { label: 'Texto', name: 'text', widget: 'string' },
    },
    {
      name: 'linkText',
      label: 'Texto do Link',
      widget: 'string',
    },
    {
      name: 'bgImg',
      label: 'Imagem de fundo',
      widget: 'image',
    },
  ],
};

export default introSection;
