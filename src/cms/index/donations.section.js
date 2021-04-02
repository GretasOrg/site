const donationsSection = {
  name: 'donations',
  label: 'Seção Planos de Doação',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      name: 'title',
      label: 'Título',
      widget: 'string',
    },
    {
      name: 'linkText',
      label: 'Texto do Link',
      widget: 'string',
    },
    {
      name: 'bgImgLeft',
      label: 'Imagem de Fundo da Esquerda',
      widget: 'image',
    },
    {
      name: 'bgImgRight',
      label: 'Imagem de Fundo da Direita',
      widget: 'image',
    },
  ],
};

export default donationsSection;
