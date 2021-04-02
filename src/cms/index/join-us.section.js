const joinUsSection = {
  name: 'joinUs',
  label: 'Seção Junte-se a Nós',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      name: 'title',
      label: 'Título',
      widget: 'string',
    },
    {
      name: 'text',
      label: 'Texto',
      widget: 'text',
    },
    {
      name: 'linkText',
      label: 'Texto do Link',
      widget: 'string',
    },
    {
      name: 'bgImg',
      label: 'Imagem de Fundo',
      widget: 'image',
    },
  ],
};

export default joinUsSection;
