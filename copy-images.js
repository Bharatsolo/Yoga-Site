const fs = require('fs');
const path = require('path');

const srcAsanas = path.join(__dirname, 'Yoga Site Files', 'Asanas');
const srcMasters = path.join(__dirname, 'Yoga Site Files', 'Masters');
const destAsanas = path.join(__dirname, 'public', 'images', 'asanas');
const destMasters = path.join(__dirname, 'public', 'images', 'masters');

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }
    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

copyDir(srcAsanas, destAsanas);
copyDir(srcMasters, destMasters);
console.log("Files copied successfully");
