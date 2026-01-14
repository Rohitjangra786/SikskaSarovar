
import connectToDatabase from '../../lib/db';
import User from '../../models/User';
import Activity from '../../models/Activity';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, password, provider } = req.body;

    if (!email || !password || !name) {
        return res.status(400).json({ error: 'Name, email and password are required' });
    }

    try {
        await connectToDatabase();

        // Check if user exists
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Create new user
        user = await User.create({
            name,
            email,
            password, // Ideally hash this!
            provider: provider || 'email',
        });

        console.log('New user created:', user.email);

        // Track Signup Activity
        await Activity.create({
            userId: user._id,
            action: 'signup',
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
        console.error('Signup Error:', error);
        return res.status(500).json({ error: 'Signup Failed' });
    }
}
