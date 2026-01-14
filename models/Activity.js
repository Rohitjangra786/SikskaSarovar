
import mongoose from 'mongoose';

const ActivitySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    action: {
        type: String,
        required: true, // e.g., 'login', 'start_lesson', 'complete_lesson'
    },
    details: {
        type: Object, // Flexible field for extra data (lessonId, score, etc.)
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Activity || mongoose.model('Activity', ActivitySchema);
