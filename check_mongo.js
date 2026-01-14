
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

const LOG_FILE = 'debug_mongo.txt';

function log(msg) {
    const line = `${new Date().toISOString()} - ${msg}\n`;
    // console.log(msg); // skip console to rely on file
    fs.appendFileSync(LOG_FILE, line);
}

const MONGODB_URI = process.env.MONGODB_URI;

log('Testing MongoDB connection (v2)...');
log(`URI: ${MONGODB_URI ? MONGODB_URI.replace(/:([^:@]+)@/, ':****@') : 'Undefined'}`);

if (!MONGODB_URI) {
    log('Error: MONGODB_URI is undefined');
    process.exit(1);
}

// 5 second timeout
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
        if (err.cause) log(`Cause: ${err.cause}`);
        process.exit(1);
    });
