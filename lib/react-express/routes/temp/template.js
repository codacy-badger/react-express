const Template = component => (
  `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no">
    <title>React-Express</title>
    <link rel="stylesheet" href='stylesheets/client.min.css'>
  </head>
  <body>
    <div id="client">${component}</div>
    <script src="javascripts/client.min.js"></script>
  </body>
</html>`);

export default Template;