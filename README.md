# CCI documentation

![Continuous integration](https://github.com/Armitage35/cci_doc_v2/workflows/Continuous%20integration/badge.svg)

> Documentation for CCI's GraphQL API

## Introduction

This repo aims at building both an automated and a curated documentation for Bumper to Bumper new graphQL API. To achieve this, we use:

-   [VuePress](https://vuepress.vuejs.org/) to generate static pages from Markdown documents
-   [GraphQL Markdown](https://github.com/exogen/graphql-markdown) to generate Markdown documents out of the publicly available schema

## Usage

To run this project simply run `yarn` to get your packages and then either `yarn start` or `yarn dev` to start a local server.

### Other commands

This project also comes with the following commands:

-   `lint`: updates the code to apply lint rules
-   `generateDoc`: updates the schema with the one available online

---

Brought to you by [Armitage](https://armitageweb.net) and made with :heart: in beautiful Montreal
