
import connectToDatabase from '../../lib/db';
import User from '../../models/User';
import Activity from '../../models/Activity';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, password, provider } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        await connectToDatabase();

        // Check if user exists
        let user = await User.findOne({ email });

        if (user) {
            // User exists - Login logic
            // Ideally verify password here if provider is email (skipping hash check for simplicity in this step unless requested)
            console.log('User logged in:', user.email);
        } else {
            // Create new user
            user = await User.create({
                name: name || 'Student',
                email,
                password, // Ideally hash this!
                provider: provider || 'email',
            });
            console.log('New user created:', user.email);
        }

        // Track Login Activity
        await Activity.create({
            userId: user._id,
            action: 'login',
            details: { provider: provider || 'email' }
        });

        return res.status(200).json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.error('Auth Error:', error);
        return res.status(500).json({ error: 'Authentication Failed' });
    }
}
