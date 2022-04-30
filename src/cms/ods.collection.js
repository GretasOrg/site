const odsCollections = {
  name: "ods",
  label: "ODS",
  label_singular: "ODS",
  folder: "content/ods",
  create: true,
  slug: "index",
  // media_folder: '',
  // public_folder: '',
  path: "{{name}}/index",
  fields: [
    { label: "Título", name: "name", widget: "string" },
    { label: "Descrição", name: "description", widget: "text" },
    {
      label: "Imagem",
      name: "image",
      widget: "image",
    },
    { label: "#PraCegoVer", name: "imageAlt", widget: "text" },
  ],
};

export default odsCollections;
