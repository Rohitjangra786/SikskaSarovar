const baseUrl = 'http://localhost:8080';

async function testAuth() {
    const email = `test.auth.${Date.now()}@example.com`;
    const password = 'password123';
    const name = 'Test Auth User';

    console.log(`Using email: ${email}`);

    console.log('--- Testing Signup ---');
    try {
        const signupRes = await fetch(`${baseUrl}/api/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });
        const signupData = await signupRes.json();
        console.log('Signup Status:', signupRes.status);
        console.log('Signup Data:', JSON.stringify(signupData, null, 2));

        if (!signupData.success) {
            console.error('Signup Failed/Unexpected response');
        }

        console.log('\n--- Testing Login ---');
        const loginRes = await fetch(`${baseUrl}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const loginData = await loginRes.json();
        console.log('Login Status:', loginRes.status);
        console.log('Login Data:', JSON.stringify(loginData, null, 2));

        if (loginData.success) {
            console.log('Login Successful!');
        } else {
            console.error('Login Failed!');
        }

        console.log('\n--- Testing Invalid Login ---');
        const failRes = await fetch(`${baseUrl}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password: 'wrong' })
        });
        console.log('Invalid Login Status (should be 401):', failRes.status);

    } catch (err) {
        console.error('Test Failed:', err.cause || err);
    }
}

testAuth();
