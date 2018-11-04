
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.APPLICATION_PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Ukoo listening on port ${port}!`));
