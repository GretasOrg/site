const miniBlogSection = {
  name: "miniBlog",
  label: "Seção Blog",
  widget: "object",
  collapsed: true,
  fields: [
    {
      name: "title",
      label: "Título",
      widget: "string",
    },
    {
      label: "Artigos",
      name: "articles",
      widget: "relation",
      collection: "articles",
      value_field: "name",
      search_fields: ["name"],
      display_fields: ["name", "date"],
      multiple: true,
    },
    {
      name: "linkText",
      label: "Texto do Link",
      widget: "string",
    },
  ],
};

export default miniBlogSection;
