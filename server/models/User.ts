import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String }, // Optional for social login
    provider: { type: String, default: 'email' },
    provider_id: { type: String },
    picture: { type: String },
    designation: { type: String },
    age: { type: Number },
    sex: { type: String },
    last_login: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now },
    // Embedded progress tracking
    progress: [{
        lessonId: { type: String, required: true },
        completedAt: { type: Date, default: Date.now }
    }]
});

// Prevent overwrite on hot reload
export const User = mongoose.models.User || mongoose.model('User', UserSchema);
