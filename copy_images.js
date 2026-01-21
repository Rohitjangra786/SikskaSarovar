const fs = require('fs');
const path = require('path');

const sourceDir = 'c:\\Users\\rjang\\GitHub\\SikskaSarovar\\components\\courses\\Basics of Python';
const targetDir = 'c:\\Users\\rjang\\GitHub\\SikskaSarovar\\Images';

const files = ['mindmapBasics.png', 'Basics overview.png'];

files.forEach(file => {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);

    try {
        fs.copyFileSync(sourcePath, targetPath);
        console.log(`Successfully copied ${file} to ${targetDir}`);
        // Optional: Delete source after successful copy
        // fs.unlinkSync(sourcePath); 
    } catch (err) {
        console.error(`Error copying ${file}:`, err);
    }
});
