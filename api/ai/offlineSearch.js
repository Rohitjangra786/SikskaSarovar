// Offline Search Algorithm for AI Fallback
// Provides intelligent, conversational responses based on course content

const { searchCourses } = require('./courseKnowledge');

/**
 * Generate a conversational response based on search results
 * @param {string} query - User's question
 * @param {Array} results - Search results from courseKnowledge
 * @returns {string} Formatted conversational response
 */
function generateResponse(query, results) {
    if (!results || results.length === 0) {
        return `I apologize, but I couldn't find specific information about "${query}" in the SikshaSarovar course library. 

However, I can help you with topics like:
• HTML - Web page structure and elements
• Python - Programming fundamentals and syntax
• Java - Object-oriented programming
• PHP - Server-side scripting
• AI & Machine Learning - Advanced concepts

Try asking about specific topics like "What is HTML?", "How do Python functions work?", or "Explain Java variables".`;
    }

    // Get the top result
    const topResult = results[0];

    // Build conversational response
    let response = `Great question! Let me help you with that.\n\n`;

    // Add main content from top result
    response += `**${topResult.title}** (from ${topResult.course} course)\n\n`;
    response += `${topResult.content}\n\n`;

    // Add code example if available
    if (topResult.codeSnippet) {
        response += `Here's an example:\n\n\`\`\`\n${topResult.codeSnippet}\n\`\`\`\n\n`;
    }

    // Add related topics if there are multiple results
    if (results.length > 1) {
        response += `**Related Topics:**\n`;
        results.slice(1, 4).forEach((result, index) => {
            response += `${index + 1}. ${result.title} (${result.course})\n`;
        });
        response += `\n`;
    }

    // Add helpful footer
    response += `💡 **Tip:** You can explore more about ${topResult.course} in the courses section. This response is from the SikshaSarovar offline knowledge base.`;

    return response;
}

/**
 * Process user query and return conversational response
 * @param {string} query - User's question
 * @returns {string} Conversational response
 */
function processOfflineQuery(query) {
    // Search for relevant content
    const results = searchCourses(query, 5);

    // Generate conversational response
    return generateResponse(query, results);
}

/**
 * Get a quick answer for common questions
 * @param {string} query - User's question
 * @returns {string|null} Quick answer or null if not a common question
 */
function getQuickAnswer(query) {
    const lowerQuery = query.toLowerCase();

    // Common greetings
    if (/^(hi|hello|hey|greetings)/i.test(lowerQuery)) {
        return "Hello! I'm SikshaSarovar AI. I'm here to help you learn web development, programming, and advanced tech concepts. What would you like to learn about today?";
    }

    // Help requests
    if (/help|what can you do|capabilities/i.test(lowerQuery)) {
        return `I can help you learn about:

📚 **Web Development**
• HTML - Structure and markup
• CSS - Styling and design
• JavaScript - Interactivity

💻 **Programming Languages**
• Python - Versatile programming
• Java - Object-oriented programming
• PHP - Server-side scripting

🤖 **Advanced Topics**
• Artificial Intelligence fundamentals
• Machine Learning concepts
• Neural Networks and Deep Learning

Just ask me any question about these topics, and I'll provide detailed explanations with code examples!`;
    }

    // About SikshaSarovar
    if (/what is sikshasarovar|about sikshasarovar|tell me about/i.test(lowerQuery)) {
        return "SikshaSarovar is a premium e-learning platform designed to help students master web development, programming, and computer science. We offer comprehensive courses in HTML, Python, Java, PHP, AI, and Machine Learning with interactive tutorials, code examples, and hands-on practice. Our mission is to make quality education accessible to everyone!";
    }

    return null;
}

/**
 * Main function to handle offline AI queries
 * @param {string} query - User's question
 * @returns {string} AI-like response
 */
function handleOfflineQuery(query) {
    // Check for quick answers first
    const quickAnswer = getQuickAnswer(query);
    if (quickAnswer) {
        return quickAnswer;
    }

    // Process query with search algorithm
    return processOfflineQuery(query);
}

module.exports = {
    handleOfflineQuery,
    processOfflineQuery,
    generateResponse,
    getQuickAnswer
};
