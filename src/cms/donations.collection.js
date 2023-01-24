const donationsCollections = {
  name: "donations",
  label: "Planos de Doação",
  label_singular: "Plano de Doação",
  folder: "content/donations",
  create: true,
  slug: "index",
  // media_folder: '',
  // public_folder: '',
  path: "{{name}}/index",
  identifier_field: "name",
  fields: [
    { label: "Título", name: "name", widget: "string" },
    { label: "Descrição", name: "description", widget: "text" },
    { label: "Texto Auxiliar", name: "auxText", widget: "text" },
    { label: "Valor", name: "value", widget: "number" },
    { label: "É Editável?", name: "isEditable", widget: "boolean" },
    {
      label: "Diminuir fonte do título?",
      name: "titleSmall",
      widget: "boolean",
    },
    { label: "ID do Plano", name: "planId", widget: "string" },
    {
      label: "Imagem",
      name: "image",
      widget: "image",
    },
    { label: "#PraCegoVer", name: "imageAlt", widget: "text" },
  ],
};

export default donationsCollections;
