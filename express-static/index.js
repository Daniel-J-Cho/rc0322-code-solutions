const express = require('express');
const app = express();
const path = require('node:path');

const absPath = path.join(__dirname, '/public');
console.log('absolute path:', absPath);

const stat = express.static(absPath);

app.use(stat);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
