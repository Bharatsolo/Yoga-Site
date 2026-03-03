const fs = require('fs');
const path = require('path');

const currentPath = path.join(__dirname, 'public', 'images', 'Yoga Site Logo.jpg');
const newPath = path.join(__dirname, 'public', 'images', 'logo.jpg');

if (fs.existsSync(currentPath)) {
    fs.renameSync(currentPath, newPath);
    console.log(`Renamed ${currentPath} to ${newPath}`);
} else {
    console.error(`File not found: ${currentPath}`);
}
