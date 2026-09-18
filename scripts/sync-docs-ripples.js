const { copyFileSync } = require('fs');
const { join } = require('path');

copyFileSync(
  join(__dirname, '..', 'dist', 'ripples.js'),
  join(__dirname, '..', 'docs', 'js', 'ripples.js')
);
