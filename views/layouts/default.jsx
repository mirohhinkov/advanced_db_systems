/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
const React = require("react");

const base = (props) => (
  <html lang="en">
    <head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="stylesheet" href="/css/blog.css" />
      <link rel="shortcut icon" type="image/png" href="/img/favicon.png" />
      <title>{props.title}</title>
    </head>
    <body>{props.children}</body>

  </html>
);

module.exports = base;
