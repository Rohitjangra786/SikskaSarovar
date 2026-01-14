
import connectToDatabase from './lib/db.js';
import User from './models/User.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function testDB() {
    try {
        console.log("Connecting to Check...");
        await connectToDatabase();
        console.log("CONNECTED TO MONGO!");

        const testEmail = "testuser@example.com";

        // Cleanup previous test
        await User.deleteOne({ email: testEmail });

        console.log("Creating test user...");
        const user = await User.create({
            name: "Test User",
            email: testEmail,
            password: "password123",
            provider: "email"
        });
        console.log("User Created:", user.email);

        const foundUser = await User.findOne({ email: testEmail });
        if (foundUser) {
            console.log("Verified: User found in DB.");
        } else {
            console.error("Failed: User not found.");
        }

        await mongoose.connection.close();

    } catch (e) {
        console.error("DB Test Failed:", e);
    }
}

testDB();
