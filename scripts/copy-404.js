const fs = require('fs');
const path = require('path');

// Try multiple possible output locations (Angular can output to different paths)
const possiblePaths = [
  path.join(__dirname, '..', 'dist', 'DentrizWeb', 'browser', 'browser'), // Nested browser folder
  path.join(__dirname, '..', 'dist', 'DentrizWeb', 'browser'), // Direct browser folder
  path.join(__dirname, '..', 'dist', 'DentrizWeb'), // Project root
];

let indexFile = null;
let outputDir = null;

// Find the actual location of index.html
for (const dir of possiblePaths) {
  const testFile = path.join(dir, 'index.html');
  if (fs.existsSync(testFile)) {
    indexFile = testFile;
    outputDir = dir;
    break;
  }
}

// Check if index.html was found
if (!indexFile || !outputDir) {
  console.error('Error: index.html not found in any expected location.');
  console.error('Searched in:');
  possiblePaths.forEach(p => console.error(`  - ${p}`));
  process.exit(1);
}

const notFoundFile = path.join(outputDir, '404.html');

// Copy index.html to 404.html
try {
  fs.copyFileSync(indexFile, notFoundFile);
  console.log(`✅ Successfully created ${notFoundFile}`);
  console.log(`   (copied from ${indexFile})`);
} catch (error) {
  console.error(`Error copying file: ${error.message}`);
  process.exit(1);
}

