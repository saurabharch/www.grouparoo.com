import { Plugin } from "./index";

export const Postgres: Plugin = {
  name: "Postgres",
  description:
    "Grouparoo's Postgres integration allows you to sync all of your customer data that lives in your Postgres DB with various destinations such as CRMs, Customer Support Tools, and Marketing Tools.",
  priority: 90,
  slug: "postgres",
  logo: "postgres.svg",
  primaryType: "source",
  otherTypes: ["destination"],
  category: "database",
  badge: "",
  showLink: true,
  packageName: "@grouparoo/postgres",
  useCases: {
    paragraphOne:
      "Grouparoo is open source data infrastructure to keep your customer data in-sync with 3rd party tools.",
    paragraphTwo:
      "Grouparoo pulls customer data in real-time from your database, data warehouse, and other data sources.",
  },
  useCasesList: [
    "Easily connect your production data with 3rd party tools",
    "Create a unified customer definition in Grouparoo",
    "Easily make cohorts and segments out of your Postgres data warehouse",
    "Denormalize your database so you can easily send customer data to tools like CRMs, marketing automation, and email marketing",
  ],
  dataModelTitle: "An Overview of Grouparoo's Data Model",
  dataModelDescription: [
    "Grouparoo's core objects are Profiles and Profile Properties. These objects are defined based on your data such as the data in your Postgres data warehouse. You can pull this data in with Grouparoo's help or you can write SQL queries directly.",
    "Once you've defined these Profiles and Profile Properties, you can use Grouparoo to create dynamic segments and cohorts.",
  ],
  otherPluginsHeading: "Send your customer data from Postgres to these tools",
  pluginScreenshots: [
    {
      header: "Easily connect your Postgres data",
      description:
        "Since Grouparoo is installed in your cloud infrastructure, you can easily point Grouparoo to any number of Postgres instances you may have running.",
      imageSrc: "/images/home/integrations/postgres/add-postgres-app.png",
      imageAlt: "Grouparoo Postgres settings",
      imageWidth: 742,
      imageHeight: 506,
    },
    {
      header: "Define Profile Properties without needing to write SQL queries",
      description:
        "Grouparoo is low-code, so less technical team members can create new Profile Properties without needing to work with engineers. They can pull the data they need when they want.",
      imageSrc: "/images/home/integrations/postgres/postgres-table-mode.png",
      imageAlt: "Grouparoo table source settings",
      imageWidth: 742,
      imageHeight: 614,
    },
    {
      header: "But you can also write SQL if you want",
      description:
        "Some Profile Properties will require joins across tables or more complex queries. Use Grouparoo's Query mode to pull the data you need.",
      imageSrc: "/images/home/integrations/postgres/postgres-query-mode.png",
      imageAlt: "Grouparoo query source settings",
      imageWidth: 742,
      imageHeight: 619,
    },
  ],
};