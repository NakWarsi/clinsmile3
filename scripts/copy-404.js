const fs = require('fs');
const path = require('path');

// Output directory where index.html is located
const outputDir = path.join(__dirname, '..', 'dist', 'DentrizWeb', 'browser');
const indexFile = path.join(outputDir, 'index.html');
const notFoundFile = path.join(outputDir, '404.html');

// Check if index.html exists
if (!fs.existsSync(indexFile)) {
  console.error(`Error: ${indexFile} not found. Make sure you've built the project first.`);
  process.exit(1);
}

// Copy index.html to 404.html
try {
  fs.copyFileSync(indexFile, notFoundFile);
  console.log(`✅ Successfully created ${notFoundFile}`);
} catch (error) {
  console.error(`Error copying file: ${error.message}`);
  process.exit(1);
}

