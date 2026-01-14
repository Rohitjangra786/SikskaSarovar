
const mongoose = require('mongoose');
const fs = require('fs');
// Manually load .env since we might not have dotenv in CJS mode easily or just parse it
const envFile = fs.readFileSync('.env', 'utf8');
const envConfig = {};
envFile.split('\n').forEach(line => {
    const [key, val] = line.split('=');
    if (key && val) envConfig[key.trim()] = val.trim();
});

const LOG_FILE = 'debug_mongo_cjs.txt';

function log(msg) {
    const line = `${new Date().toISOString()} - ${msg}\n`;
    console.log(msg); // fallback
    try {
        fs.appendFileSync(LOG_FILE, line);
    } catch (e) { console.error('Write failed', e) }
}

const MONGODB_URI = envConfig.MONGODB_URI;

log('Testing MongoDB connection (CJS)...');
log(`URI: ${MONGODB_URI ? MONGODB_URI.replace(/:([^:@]+)@/, ':****@') : 'Undefined'}`);

if (!MONGODB_URI) {
    log('Error: MONGODB_URI is undefined in .env manual parse');
    process.exit(1);
}

const opts = {
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 5000,
};

mongoose.connect(MONGODB_URI, opts)
    .then(() => {
        log('Successfully connected to MongoDB!');
        process.exit(0);
    })
    .catch((err) => {
        log(`Connection failed: ${err.message}`);
        process.exit(1);
    });
