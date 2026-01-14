
import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
        maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
        unique: true,
    },
    password: {
        type: String,
        // Not required if using OAuth (Google), but required for email/password
    },
    picture: {
        type: String,
    },
    provider: {
        type: String,
        enum: ['email', 'google', 'facebook'],
        default: 'email',
    },
    provider_id: {
        type: String,
    },
    designation: {
        type: String,
    },
    age: {
        type: Number,
    },
    sex: {
        type: String,
    },
    last_login: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    // Embedded progress tracking
    progress: [{
        lessonId: { type: String, required: true },
        completedAt: { type: Date, default: Date.now }
    }]
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
