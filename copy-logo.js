const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'Yoga Site Logo.jpg');
const dest = path.join(__dirname, 'public', 'images', 'logo.jpg');

if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${src} to ${dest}`);
} else {
    console.error(`Source file not found: ${src}`);
    process.exit(1);
}
