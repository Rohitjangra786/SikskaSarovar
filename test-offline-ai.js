// Test script for offline AI functionality
const { searchCourses, getAllCourses } = require('./api/ai/courseKnowledge.js');
const { handleOfflineQuery } = require('./api/ai/offlineSearch.js');

console.log('=== Testing Offline AI System ===\n');

// Test 1: Search functionality
console.log('Test 1: Searching for "What is HTML?"');
const htmlResults = searchCourses('What is HTML?');
console.log(`Found ${htmlResults.length} results`);
if (htmlResults.length > 0) {
    console.log('Top result:', htmlResults[0].title, '- Score:', htmlResults[0].score);
}
console.log('');

// Test 2: Python function query
console.log('Test 2: Query "How do I create a Python function?"');
const pythonResponse = handleOfflineQuery('How do I create a Python function?');
console.log('Response preview:', pythonResponse.substring(0, 200) + '...\n');

// Test 3: Java variables query
console.log('Test 3: Query "Explain Java variables"');
const javaResponse = handleOfflineQuery('Explain Java variables');
console.log('Response preview:', javaResponse.substring(0, 200) + '...\n');

// Test 4: Greeting
console.log('Test 4: Query "Hello"');
const greetingResponse = handleOfflineQuery('Hello');
console.log('Response:', greetingResponse.substring(0, 150) + '...\n');

// Test 5: List all courses
console.log('Test 5: Available courses');
const courses = getAllCourses();
courses.forEach(course => {
    console.log(`- ${course.title} (${course.category}) - ${course.lessonCount} lessons`);
});

console.log('\n=== All Tests Completed ===');
