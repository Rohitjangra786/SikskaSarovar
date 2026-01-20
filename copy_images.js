const fs = require('fs');
const path = require('path');

const src1 = path.join(__dirname, 'components', 'courses', 'DMP', 'Mind Map.png');
const dest1 = path.join(__dirname, 'Images', 'dmp-mind-map.png');

const src2 = path.join(__dirname, 'components', 'courses', 'DMP', 'Overview.png');
const dest2 = path.join(__dirname, 'Images', 'dmp-overview.png');

console.log(`Copying from ${src1} to ${dest1}`);

try {
    fs.copyFileSync(src1, dest1);
    console.log('Copied Mind Map');
    fs.copyFileSync(src2, dest2);
    console.log('Copied Overview');
} catch (err) {
    console.error('Error copying files:', err);
}
