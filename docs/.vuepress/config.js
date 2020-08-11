const { description } = require("../../package");

module.exports = {
  title: "Bumper to Bumper's GraphQL API",
  description: description,

  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: true,
    sidebarDepth: 3,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Schema",
        link: "/schema/",
      },
      {
        text: "Explorer",
        link: "/explorer/",
      },
      {
        text: "Get in touch",
        link: "mailto:mohammad@cci-research.com",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          collapsable: false,
          children: [
            "",
            "glossary",
            "authentication",
            "codeSamples",
            "changelog",
          ],
        },
      ],
    },
  },

  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/last-updated",
  ],
};
