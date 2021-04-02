import colors from '../colors';

const aboutUsSection = {
  name: 'aboutUs',
  label: 'Seção Sobre nós',
  widget: 'object',
  collapsed: true,
  fields: [
    {
      name: 'title',
      label: 'Título',
      widget: 'string',
    },
    {
      name: 'aboutText',
      label: 'Texto',
      widget: 'markdown',
    },
    {
      name: 'aboutLink',
      label: 'Link',
      widget: 'string',
    },
    {
      name: 'bannerImg',
      label: 'Imagem do Banner',
      widget: 'image',
    },
    {
      name: 'bannerText',
      label: 'Texto do Banner',
      widget: 'string',
    },
    {
      name: 'video',
      label: 'Video',
      widget: 'string',
    },
    {
      name: 'stats',
      label: 'Números',
      widget: 'list',
      fields: [
        {
          name: 'count',
          label: 'Número',
          widget: 'number',
        },
        {
          name: 'text',
          label: 'Texto',
          widget: 'string',
        },
        {
          name: 'color',
          label: 'Cor',
          widget: 'select',
          options: Object.values(colors),
        },
      ],
    },
  ],
};

export default aboutUsSection;
