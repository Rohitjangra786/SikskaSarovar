const fetch = globalThis.fetch || require('node-fetch');

const BASE_URL = 'http://localhost:3000';
let cookie = '';

async function run() {
    try {
        console.log('1. Signing up/Logging in...');
        // Login to get token
        const loginRes = await fetch(`${BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: 'test@example.com', password: 'password123', provider: 'email' })
        });

        // If login fails, try signup (in case user doesn't exist from previous tests)
        if (!loginRes.ok) {
            console.log('Login failed, trying signup...');
            const signupRes = await fetch(`${BASE_URL}/api/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: 'Test User', email: 'test@example.com', password: 'password123' })
            });
            if (!signupRes.ok) {
                throw new Error(`Signup failed: ${signupRes.status} ${await signupRes.text()}`);
            }
            const setCookie = signupRes.headers.get('set-cookie');
            if (setCookie) cookie = setCookie.split(';')[0];
        } else {
            const setCookie = loginRes.headers.get('set-cookie');
            if (setCookie) cookie = setCookie.split(';')[0];
        }

        if (!cookie) throw new Error('No cookie received');
        console.log('   Authenticated.');

        console.log('2. Marking lesson "h1" as complete...');
        const markRes = await fetch(`${BASE_URL}/api/progress`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': cookie
            },
            body: JSON.stringify({ lessonId: 'h1', completed: true })
        });
        if (!markRes.ok) throw new Error(`Mark complete failed: ${markRes.status}`);
        console.log('   Marked.');

        console.log('3. Fetching progress...');
        const getRes = await fetch(`${BASE_URL}/api/progress`, {
            headers: { 'Cookie': cookie }
        });
        const getData = await getRes.json();
        console.log('   Progress:', getData.completedLessons);
        if (!getData.completedLessons.includes('h1')) throw new Error('Lesson h1 not found in progress');

        console.log('4. Marking lesson "h1" as incomplete...');
        const unmarkRes = await fetch(`${BASE_URL}/api/progress`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': cookie
            },
            body: JSON.stringify({ lessonId: 'h1', completed: false })
        });
        if (!unmarkRes.ok) throw new Error(`Mark incomplete failed: ${unmarkRes.status}`);
        console.log('   Unmarked.');

        console.log('5. Fetching progress again...');
        const getRes2 = await fetch(`${BASE_URL}/api/progress`, {
            headers: { 'Cookie': cookie }
        });
        const getData2 = await getRes2.json();
        console.log('   Progress:', getData2.completedLessons);
        if (getData2.completedLessons.includes('h1')) throw new Error('Lesson h1 still found in progress');

        console.log('SUCCESS: Progress tracking works!');

    } catch (error) {
        console.error('FAILED:', error.message);
        process.exit(1);
    }
}

run();
