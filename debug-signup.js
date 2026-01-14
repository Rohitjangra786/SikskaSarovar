const fs = require('fs');

function log(msg) {
    fs.appendFileSync('signup-report.txt', msg + '\n');
}

const fetch = globalThis.fetch || require('node-fetch');

async function debugSignup() {
    const url = 'http://localhost:8080/api/auth/signup';
    log('Attempting POST to ' + url);
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: 'DebugUser',
                email: 'debug' + Date.now() + '@example.com',
                password: 'password123'
            })
        });

        log('Status: ' + res.status);
        log('StatusText: ' + res.statusText);
        const text = await res.text();
        log('Body: ' + text);

    } catch (err) {
        log('Fetch Error: ' + err.message);
        if (err.cause) log('Cause: ' + err.cause);
    }
}

debugSignup();
