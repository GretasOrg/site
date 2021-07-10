const joinUsSection = {
  name: "joinUs",
  label: "Seção Junte-se a Nós",
  widget: "object",
  collapsed: true,
  fields: [
    {
      name: "title",
      label: "Título",
      widget: "text",
    },
    {
      name: "text",
      label: "Texto",
      widget: "text",
    },
    {
      name: "linkText",
      label: "Texto do Link",
      widget: "string",
    },
    {
      name: "bgImg",
      label: "Imagem de Fundo",
      widget: "image",
    },
    { name: "bgImgAlt", label: "#PraCegoVer", widget: "text" },
  ],
};

export default joinUsSection;
