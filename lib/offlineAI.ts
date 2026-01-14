// Client-side offline AI - Course Knowledge Base
// This runs entirely in the browser, no server needed!

export const COURSES_DATA = [
    {
        id: 'html',
        title: 'HTML',
        category: 'Web Development',
        lessons: [
            {
                id: 'h1',
                title: 'HTML Introduction',
                keywords: ['html', 'introduction', 'hypertext', 'markup', 'language', 'web', 'pages', 'structure', 'tags', 'elements'],
                content: 'HTML stands for HyperText Markup Language. It is the standard markup language for creating Web pages. HTML describes the structure of a Web page semantically and originally included cues for the appearance of the document. HTML elements are the building blocks of HTML pages.',
                codeSnippet: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>My First Heading</h1>\n  <p>My first paragraph.</p>\n</body>\n</html>'
            },
            {
                id: 'h3',
                title: 'HTML Basic Examples',
                keywords: ['html', 'basic', 'examples', 'doctype', 'headings', 'paragraphs', 'links', 'h1', 'p', 'a'],
                content: 'Every HTML document must start with <!DOCTYPE html>. The visible part is between <body> and </body>. HTML headings are defined with <h1> to <h6> tags. HTML paragraphs are defined with the <p> tag. HTML links are defined with the <a> tag.',
                codeSnippet: '<h1>This is a heading</h1>\n<p>This is a paragraph.</p>\n<a href="https://sikshasarovar.com">Visit SikshaSarovar</a>'
            },
            {
                id: 'h21',
                title: 'HTML Forms',
                keywords: ['html', 'forms', 'form', 'input', 'action', 'method', 'submit', 'text', 'user input'],
                content: 'HTML forms are used to collect user input. The <form> element defines the form. The action attribute defines where to send the form data when submitted. The method attribute specifies the HTTP method (GET or POST).',
                codeSnippet: '<form action="/submit" method="post">\n  <label for="fname">First name:</label>\n  <input type="text" id="fname" name="fname">\n  <input type="submit" value="Submit">\n</form>'
            }
        ]
    },
    {
        id: 'python',
        title: 'Python',
        category: 'Programming',
        lessons: [
            {
                id: 'p1',
                title: 'Python Intro',
                keywords: ['python', 'introduction', 'programming', 'language', 'guido', 'web development', 'software'],
                content: 'Python is a popular programming language created by Guido van Rossum and released in 1991. It is used for web development, software development, mathematics, and system scripting. Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).',
                codeSnippet: 'print("Hello, World!")'
            },
            {
                id: 'p5',
                title: 'Python Variables',
                keywords: ['python', 'variables', 'containers', 'storing', 'data', 'values', 'assignment', 'declare'],
                content: 'Variables are containers for storing data values. Python has no command for declaring a variable. A variable is created the moment you first assign a value to it. Variable names are case-sensitive.',
                codeSnippet: 'x = 5\ny = "Siksha"\nprint(x)\nprint(y)'
            },
            {
                id: 'p19',
                title: 'Python Functions',
                keywords: ['python', 'functions', 'def', 'define', 'call', 'parameters', 'arguments', 'return'],
                content: 'A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. A function can return data as a result. In Python a function is defined using the def keyword.',
                codeSnippet: 'def my_function():\n  print("Hello from a function")\n\nmy_function()'
            }
        ]
    },
    {
        id: 'java',
        title: 'Java',
        category: 'Programming',
        lessons: [
            {
                id: 'j1',
                title: 'Java Intro',
                keywords: ['java', 'introduction', 'programming', 'language', 'oracle', 'mobile', 'android', 'desktop'],
                content: 'Java is a popular programming language, created in 1995. It is owned by Oracle, and more than 3 billion devices run Java. It is used for mobile applications (specially Android apps), desktop applications, web applications, and games.',
                codeSnippet: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}'
            },
            {
                id: 'j5',
                title: 'Java Variables',
                keywords: ['java', 'variables', 'containers', 'storing', 'data', 'string', 'int', 'float', 'char', 'boolean'],
                content: 'Variables are containers for storing data values. In Java, there are different types: String (stores text), int (stores integers), float (stores floating point numbers), char (stores single characters), and boolean (stores true/false values).',
                codeSnippet: 'String name = "John";\nint myNum = 15;\nfinal int myConstant = 20;'
            }
        ]
    },
    {
        id: 'ml',
        title: 'Machine Learning',
        category: 'Advanced Tech',
        lessons: [
            {
                id: 'ml-intro',
                title: 'Introduction to Machine Learning',
                keywords: ['machine learning', 'ml', 'artificial intelligence', 'ai', 'data', 'algorithms', 'learning'],
                content: 'Machine learning is a field of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy. Machine learning has a wide range of applications across various industries and fields, transforming how we interact with technology and improving efficiency and decision-making processes.',
                codeSnippet: 'import pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\n\n# Load dataset\ndata = pd.read_csv("data.csv")\nX = data.drop("target", axis=1)\ny = data["target"]\n\n# Split data\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)'
            },
            {
                id: 'ml-image-recognition',
                title: 'Image and Object Recognition',
                keywords: ['image recognition', 'object detection', 'computer vision', 'facial recognition', 'autonomous driving', 'cnn'],
                content: 'Machine learning algorithms can be trained to recognize and classify images, enabling applications such as facial recognition, object detection, and autonomous driving. Convolutional Neural Networks (CNNs) are particularly effective for image recognition tasks. These systems can identify faces, detect objects in real-time, and enable self-driving cars to perceive their environment.',
                codeSnippet: 'from tensorflow.keras.models import Sequential\nfrom tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense\n\n# Build CNN model\nmodel = Sequential([\n    Conv2D(32, (3, 3), activation=\'relu\', input_shape=(64, 64, 3)),\n    MaxPooling2D(2, 2),\n    Conv2D(64, (3, 3), activation=\'relu\'),\n    MaxPooling2D(2, 2),\n    Flatten(),\n    Dense(128, activation=\'relu\'),\n    Dense(10, activation=\'softmax\')\n])\n\nmodel.compile(optimizer=\'adam\', loss=\'categorical_crossentropy\', metrics=[\'accuracy\'])'
            },
            {
                id: 'ml-nlp',
                title: 'Natural Language Processing (NLP)',
                keywords: ['nlp', 'natural language processing', 'sentiment analysis', 'language translation', 'chatbots', 'speech recognition', 'text analysis'],
                content: 'Machine learning is used to process and understand human language, enabling applications like sentiment analysis, language translation, chatbots, and speech recognition. NLP allows computers to read, understand, and derive meaning from human languages. It powers virtual assistants, automatic translation services, and text analysis tools.',
                codeSnippet: 'from transformers import pipeline\n\n# Sentiment Analysis\nsentiment_analyzer = pipeline("sentiment-analysis")\nresult = sentiment_analyzer("I love machine learning!")\nprint(result)  # [{"label": "POSITIVE", "score": 0.9998}]\n\n# Text Translation\ntranslator = pipeline("translation_en_to_fr")\nresult = translator("Hello, how are you?")\nprint(result)  # [{"translation_text": "Bonjour, comment allez-vous?"}]'
            },
            {
                id: 'ml-recommender',
                title: 'Recommender Systems',
                keywords: ['recommender systems', 'recommendation engine', 'collaborative filtering', 'content-based filtering', 'netflix', 'amazon', 'personalization'],
                content: 'Machine learning algorithms can analyze user preferences and behavior to provide personalized recommendations, such as movie or product recommendations on platforms like Netflix or Amazon. Recommender systems use collaborative filtering, content-based filtering, or hybrid approaches to suggest items users are likely to enjoy based on their past behavior and similar users\' preferences.',
                codeSnippet: 'from sklearn.neighbors import NearestNeighbors\nimport numpy as np\n\n# User-item matrix (users x items)\nuser_item_matrix = np.array([\n    [5, 3, 0, 1],\n    [4, 0, 0, 1],\n    [1, 1, 0, 5],\n    [0, 0, 5, 4]\n])\n\n# Collaborative Filtering\nmodel = NearestNeighbors(metric=\'cosine\', algorithm=\'brute\')\nmodel.fit(user_item_matrix)\n\n# Find similar users\ndistances, indices = model.kneighbors([user_item_matrix[0]], n_neighbors=3)\nprint(f"Similar users: {indices}")'
            },
            {
                id: 'ml-fraud-detection',
                title: 'Fraud Detection',
                keywords: ['fraud detection', 'anomaly detection', 'cybersecurity', 'banking', 'insurance', 'security', 'outlier detection'],
                content: 'Machine learning can detect patterns and anomalies in large datasets to identify fraudulent transactions or activities in industries like banking, insurance, and cybersecurity. By analyzing historical transaction data, ML models can identify unusual patterns that may indicate fraud, such as unusual spending patterns, geographic anomalies, or suspicious account activities.',
                codeSnippet: 'from sklearn.ensemble import IsolationForest\nimport pandas as pd\n\n# Load transaction data\ntransactions = pd.read_csv("transactions.csv")\nfeatures = transactions[[\'amount\', \'time\', \'location_id\']]\n\n# Train anomaly detection model\nmodel = IsolationForest(contamination=0.01, random_state=42)\nmodel.fit(features)\n\n# Predict anomalies (-1 = fraud, 1 = normal)\npredictions = model.predict(features)\ntransactions[\'is_fraud\'] = predictions == -1\n\nprint(f"Detected {transactions[\'is_fraud\'].sum()} fraudulent transactions")'
            },
            {
                id: 'ml-predictive-analytics',
                title: 'Predictive Analytics',
                keywords: ['predictive analytics', 'forecasting', 'prediction', 'customer churn', 'stock market', 'predictive maintenance', 'time series'],
                content: 'Machine learning models can analyze historical data to make predictions and forecasts about future events, such as predicting customer churn, stock market trends, or equipment failure in predictive maintenance. These models identify patterns in historical data and use them to forecast future outcomes, enabling businesses to make proactive decisions.',
                codeSnippet: 'from sklearn.ensemble import RandomForestClassifier\nimport pandas as pd\n\n# Customer churn prediction\ndata = pd.read_csv("customer_data.csv")\nX = data[[\'tenure\', \'monthly_charges\', \'total_charges\', \'num_services\']]\ny = data[\'churned\']\n\n# Train model\nmodel = RandomForestClassifier(n_estimators=100, random_state=42)\nmodel.fit(X_train, y_train)\n\n# Predict churn probability\nchurn_probability = model.predict_proba(X_test)[:, 1]\nprint(f"Churn risk: {churn_probability[0]:.2%}")'
            },
            {
                id: 'ml-healthcare',
                title: 'Healthcare Applications',
                keywords: ['healthcare', 'medical', 'disease diagnosis', 'medical imaging', 'drug discovery', 'genomics', 'personalized medicine'],
                content: 'Machine learning is being used for various healthcare applications, including disease diagnosis, medical image analysis, personalized treatment recommendations, drug discovery, and genomics. ML models can analyze medical images to detect diseases like cancer, predict patient outcomes, discover new drugs, and provide personalized treatment plans based on patient data and genetic information.',
                codeSnippet: 'from sklearn.ensemble import GradientBoostingClassifier\nimport numpy as np\n\n# Disease diagnosis model\npatient_features = np.array([\n    [45, 120, 80, 5.5, 200],  # age, bp_sys, bp_dia, glucose, cholesterol\n])\n\n# Train diagnostic model\nmodel = GradientBoostingClassifier()\nmodel.fit(X_train, y_train)\n\n# Predict disease probability\ndisease_prob = model.predict_proba(patient_features)[0][1]\nprint(f"Disease probability: {disease_prob:.2%}")\n\n# Feature importance\nimportances = model.feature_importances_\nprint(f"Most important factors: {importances}")'
            },
            {
                id: 'ml-autonomous-vehicles',
                title: 'Autonomous Vehicles',
                keywords: ['autonomous vehicles', 'self-driving cars', 'computer vision', 'sensor fusion', 'path planning', 'object detection'],
                content: 'Machine learning is a crucial technology for developing self-driving cars and autonomous vehicles. It enables the vehicles to perceive and interpret their surroundings, make decisions, and navigate safely. ML models process data from cameras, lidar, radar, and other sensors to detect objects, recognize traffic signs, predict pedestrian behavior, and plan safe routes.',
                codeSnippet: 'import cv2\nimport numpy as np\n\n# Lane detection for autonomous driving\ndef detect_lanes(image):\n    # Convert to grayscale\n    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)\n    \n    # Apply Gaussian blur\n    blur = cv2.GaussianBlur(gray, (5, 5), 0)\n    \n    # Canny edge detection\n    edges = cv2.Canny(blur, 50, 150)\n    \n    # Hough transform for line detection\n    lines = cv2.HoughLinesP(edges, 1, np.pi/180, 100, minLineLength=100, maxLineGap=50)\n    \n    return lines\n\n# Process camera feed\nimage = cv2.imread(\'road.jpg\')\nlanes = detect_lanes(image)'
            },
            {
                id: 'ml-financial-services',
                title: 'Financial Services',
                keywords: ['finance', 'credit scoring', 'algorithmic trading', 'risk assessment', 'customer segmentation', 'banking', 'fintech'],
                content: 'Machine learning is employed in financial institutions for credit scoring, fraud detection, algorithmic trading, risk assessment, and customer segmentation. ML models analyze financial data to assess creditworthiness, execute trades automatically, predict market trends, evaluate investment risks, and segment customers for targeted marketing.',
                codeSnippet: 'from sklearn.linear_model import LogisticRegression\nimport pandas as pd\n\n# Credit scoring model\napplicant_data = pd.DataFrame({\n    \'income\': [50000, 75000, 30000],\n    \'debt_ratio\': [0.3, 0.2, 0.6],\n    \'credit_history\': [750, 680, 600],\n    \'employment_years\': [5, 10, 2]\n})\n\n# Train credit scoring model\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\n\n# Predict credit approval\ncredit_score = model.predict_proba(applicant_data)[:, 1]\nprint(f"Approval probability: {credit_score}")'
            },
            {
                id: 'ml-robotics',
                title: 'Robotics',
                keywords: ['robotics', 'robot learning', 'reinforcement learning', 'perception', 'control', 'human-robot interaction'],
                content: 'Machine learning algorithms are used in robotics for perception, control, and decision-making tasks. They enable robots to adapt to changing environments, learn new tasks, and interact with humans. ML allows robots to recognize objects, navigate complex environments, manipulate objects with precision, and learn from demonstrations.',
                codeSnippet: 'import gym\nimport numpy as np\n\n# Reinforcement Learning for robot control\nenv = gym.make(\'RoboticArm-v0\')\n\nclass RobotAgent:\n    def __init__(self, state_size, action_size):\n        self.q_table = np.zeros((state_size, action_size))\n        self.learning_rate = 0.1\n        self.discount_factor = 0.95\n    \n    def choose_action(self, state, epsilon=0.1):\n        if np.random.random() < epsilon:\n            return env.action_space.sample()  # Explore\n        return np.argmax(self.q_table[state])  # Exploit\n    \n    def learn(self, state, action, reward, next_state):\n        current_q = self.q_table[state, action]\n        max_next_q = np.max(self.q_table[next_state])\n        new_q = current_q + self.learning_rate * (reward + self.discount_factor * max_next_q - current_q)\n        self.q_table[state, action] = new_q'
            },
            {
                id: 'ml-industrial-automation',
                title: 'Industrial Automation',
                keywords: ['industrial automation', 'manufacturing', 'predictive maintenance', 'quality control', 'supply chain', 'iot', 'industry 4.0'],
                content: 'Machine learning helps optimize manufacturing processes, predictive maintenance, quality control, and supply chain management by analyzing large amounts of data collected from sensors and machines. ML models can predict equipment failures before they occur, detect defects in products, optimize production schedules, and improve supply chain efficiency.',
                codeSnippet: 'from sklearn.ensemble import RandomForestRegressor\nimport pandas as pd\n\n# Predictive maintenance model\nsensor_data = pd.DataFrame({\n    \'temperature\': [75, 82, 95, 105],\n    \'vibration\': [0.5, 0.7, 1.2, 1.8],\n    \'pressure\': [100, 105, 110, 120],\n    \'runtime_hours\': [1000, 1500, 2000, 2500]\n})\n\n# Train failure prediction model\nmodel = RandomForestRegressor(n_estimators=100)\nmodel.fit(X_train, y_train)  # y = remaining useful life\n\n# Predict remaining useful life\nremaining_life = model.predict(sensor_data)\nprint(f"Equipment will fail in {remaining_life[0]:.0f} hours")\n\n# Schedule maintenance\nif remaining_life[0] < 100:\n    print("⚠️ Schedule maintenance immediately!")'
            }
        ]
    }
];

export function searchCourses(query: string, maxResults = 5) {
    if (!query || typeof query !== 'string') {
        return [];
    }

    const queryTokens = query.toLowerCase()
        .replace(/[^\w\s]/g, ' ')
        .split(/\s+/)
        .filter(token => token.length > 2);

    if (queryTokens.length === 0) {
        return [];
    }

    const results: any[] = [];

    COURSES_DATA.forEach(course => {
        course.lessons.forEach(lesson => {
            let score = 0;

            queryTokens.forEach(qToken => {
                if (lesson.title.toLowerCase().includes(qToken)) score += 10;
                if (lesson.keywords.some(k => k.includes(qToken))) score += 5;
                if (lesson.content.toLowerCase().includes(qToken)) score += 2;
            });

            if (score > 0) {
                results.push({
                    score,
                    course: course.title,
                    title: lesson.title,
                    content: lesson.content,
                    codeSnippet: lesson.codeSnippet,
                    category: course.category
                });
            }
        });
    });

    return results.sort((a, b) => b.score - a.score).slice(0, maxResults);
}


export function handleOfflineQuery(query: string): string {
    const lowerQuery = query.toLowerCase();

    // Handle greetings
    if (/^(hi|hello|hey|greetings)/i.test(lowerQuery)) {
        return "Hello! I'm SikshaSarovar AI running in offline mode. I can help you learn about HTML, Python, Java, and more using our course content. What would you like to learn about today?";
    }

    // Handle help requests
    if (/help|what can you do|capabilities/i.test(lowerQuery)) {
        return `I'm running in **offline mode** using SikshaSarovar course content. I can help you with:

📚 **Web Development**
• HTML - Structure and markup

💻 **Programming Languages**
• Python - Versatile programming
• Java - Object-oriented programming

Just ask me any question about these topics!`;
    }

    // Search for relevant content
    const results = searchCourses(query, 5);

    if (!results || results.length === 0) {
        return `I couldn't find specific information about "${query}" in the offline course library. 

Try asking about:
• "What is HTML?"
• "How do Python functions work?"
• "Explain Java variables"`;
    }

    const topResult = results[0];
    let response = `**${topResult.title}** (from ${topResult.course} course)\n\n${topResult.content}\n\n`;

    if (topResult.codeSnippet) {
        response += `**Example:**\n\`\`\`\n${topResult.codeSnippet}\n\`\`\`\n\n`;
    }

    if (results.length > 1) {
        response += `**Related Topics:**\n`;
        results.slice(1, 4).forEach((r, i) => {
            response += `${i + 1}. ${r.title} (${r.course})\n`;
        });
    }

    response += `\n💡 *Offline mode - using SikshaSarovar course library*`;
    return response;
}
