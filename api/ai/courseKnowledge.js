// Course Knowledge Base for Offline AI
// This module extracts and structures course data for efficient searching

const COURSES_DATA = [
    {
        id: 'html',
        title: 'HTML',
        category: 'Web Development',
        level: 'Beginner',
        lessons: [
            {
                id: 'h1',
                title: 'HTML Introduction',
                keywords: ['html', 'introduction', 'hypertext', 'markup', 'language', 'web', 'pages', 'structure', 'tags', 'elements'],
                content: 'HTML stands for HyperText Markup Language. It is the standard markup language for creating Web pages. HTML describes the structure of a Web page semantically and originally included cues for the appearance of the document. HTML elements are the building blocks of HTML pages. They are represented by tags like <h1>, <p>, <a>, etc.',
                codeSnippet: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>My First Heading</h1>\n  <p>My first paragraph.</p>\n</body>\n</html>'
            },
            {
                id: 'h2',
                title: 'HTML Editors',
                keywords: ['html', 'editor', 'notepad', 'textedit', 'visual studio code', 'sublime', 'atom', 'text editor'],
                content: 'A web developer can use a professional HTML editor to create and modify websites. However, for learning HTML, we recommend a simple text editor like Notepad (PC) or TextEdit (Mac). Professional editors like Visual Studio Code, Sublime Text, and Atom are excellent once you have mastered the basics.',
                codeSnippet: '<!-- Open your text editor, write your code, and save as index.html -->'
            },
            {
                id: 'h3',
                title: 'HTML Basic Examples',
                keywords: ['html', 'basic', 'examples', 'doctype', 'headings', 'paragraphs', 'links', 'h1', 'p', 'a'],
                content: 'Every HTML document must start with a document type declaration: <!DOCTYPE html>. The document itself begins with <html> and ends with </html>. The visible part of the HTML document is between <body> and </body>. HTML headings are defined with the <h1> to <h6> tags. HTML paragraphs are defined with the <p> tag. HTML links are defined with the <a> tag.',
                codeSnippet: '<h1>This is a heading</h1>\n<p>This is a paragraph.</p>\n<a href="https://sikshasarovar.com">Visit SikshaSarovar</a>'
            },
            {
                id: 'h4',
                title: 'HTML Elements',
                keywords: ['html', 'elements', 'tags', 'start tag', 'end tag', 'content', 'nested', 'empty elements'],
                content: 'An HTML element is defined by a start tag, some content, and an end tag. The HTML element is everything from the start tag to the end tag: <tagname>Content goes here...</tagname>. Some HTML elements have no content (like the <br> element). These elements are called empty elements. HTML elements can be nested.',
                codeSnippet: '<div>\n  <h1>Nested Heading</h1>\n  <p>Nested <b>bold</b> text.</p>\n</div>'
            },
            {
                id: 'h5',
                title: 'HTML Attributes',
                keywords: ['html', 'attributes', 'href', 'src', 'width', 'height', 'alt', 'name', 'value'],
                content: 'All HTML elements can have attributes. Attributes provide additional information about elements and are always specified in the start tag. They usually come in name/value pairs like: name="value". The href attribute specifies the URL of the page the link goes to. The src attribute specifies the path to the image to be displayed.',
                codeSnippet: '<img src="logo.png" width="500" height="600" alt="Siksha Logo">\n<a href="https://google.com" title="Search Engine">Go to Google</a>'
            },
            {
                id: 'h17',
                title: 'HTML Tables',
                keywords: ['html', 'tables', 'rows', 'columns', 'table', 'tr', 'td', 'th', 'data'],
                content: 'HTML tables allow web developers to arrange data into rows and columns. A table in HTML consists of table cells inside rows and columns. Each table cell is defined by a <td> and a </td> tag. Each table row starts with a <tr> and ends with a </tr> tag.',
                codeSnippet: '<table>\n  <tr>\n    <th>Company</th>\n    <th>Contact</th>\n  </tr>\n  <tr>\n    <td>Alfreds Futterkiste</td>\n    <td>Maria Anders</td>\n  </tr>\n</table>'
            },
            {
                id: 'h21',
                title: 'HTML Forms',
                keywords: ['html', 'forms', 'form', 'input', 'action', 'method', 'submit', 'text', 'user input'],
                content: 'This chapter describes the different attributes for the HTML <form> element. The Action Attribute defines the action to be performed when the form is submitted. The Target Attribute specifies where to display the response. The Method Attribute specifies the HTTP method to be used when submitting the form data.',
                codeSnippet: '<form action="/action_page.php" target="_blank" method="post">\n  <label for="fname">First name:</label><br>\n  <input type="text" id="fname" name="fname" value="John"><br>\n  <input type="submit" value="Submit">\n</form>'
            }
        ]
    },
    {
        id: 'python',
        title: 'Python',
        category: 'Programming',
        level: 'Beginner',
        lessons: [
            {
                id: 'p1',
                title: 'Python Intro',
                keywords: ['python', 'introduction', 'programming', 'language', 'guido van rossum', 'web development', 'software'],
                content: 'Python is a popular programming language. It was created by Guido van Rossum, and released in 1991. It is used for web development (server-side), software development, mathematics, and system scripting. Python can be used on a server to create web applications. It works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).',
                codeSnippet: 'print("Hello, World!")'
            },
            {
                id: 'p2',
                title: 'Python Get Started',
                keywords: ['python', 'install', 'installation', 'setup', 'version', 'download', 'interpreter'],
                content: 'Many PCs and Macs will have python already installed. To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe): python --version. If you find that you do not have Python installed on your computer, then you can download it for free from the following website: https://www.python.org/.',
                codeSnippet: 'import sys\nprint(sys.version)'
            },
            {
                id: 'p3',
                title: 'Python Syntax',
                keywords: ['python', 'syntax', 'indentation', 'code', 'block', 'spacing', 'command line'],
                content: 'Python syntax can be executed by writing directly in the Command Line. Or by creating a python file on the server, using the .py file extension, and running it in the Command Line. Indentation refers to the spaces at the beginning of a code line. Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important. Python uses indentation to indicate a block of code.',
                codeSnippet: 'if 5 > 2:\n  print("Five is greater than two!")'
            },
            {
                id: 'p5',
                title: 'Python Variables',
                keywords: ['python', 'variables', 'containers', 'storing', 'data', 'values', 'assignment', 'declare'],
                content: 'Variables are containers for storing data values. Python has no command for declaring a variable. A variable is created the moment you first assign a value to it. Variables do not need to be declared with any particular type, and can even change type after they have been set. Variable names are case-sensitive.',
                codeSnippet: 'x = 5\ny = "Siksha"\nprint(x)\nprint(y)'
            },
            {
                id: 'p12',
                title: 'Python Lists',
                keywords: ['python', 'lists', 'array', 'collection', 'ordered', 'changeable', 'square brackets', 'index'],
                content: 'Lists are used to store multiple items in a single variable. Lists are one of 4 built-in data types in Python used to store collections of data. Lists are created using square brackets []. List items are ordered, changeable, and allow duplicate values.',
                codeSnippet: 'thislist = ["apple", "banana", "cherry"]\nprint(thislist)\nprint(thislist[1]) # banana'
            },
            {
                id: 'p19',
                title: 'Python Functions',
                keywords: ['python', 'functions', 'def', 'define', 'call', 'parameters', 'arguments', 'return'],
                content: 'A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. A function can return data as a result. In Python a function is defined using the def keyword. To call a function, use the function name followed by parenthesis.',
                codeSnippet: 'def my_function():\n  print("Hello from a function")\n\nmy_function()'
            }
        ]
    },
    {
        id: 'java',
        title: 'Java',
        category: 'Programming',
        level: 'Intermediate',
        lessons: [
            {
                id: 'j1',
                title: 'Java Intro',
                keywords: ['java', 'introduction', 'programming', 'language', 'oracle', 'mobile', 'android', 'desktop', 'web'],
                content: 'Java is a popular programming language, created in 1995. It is owned by Oracle, and more than 3 billion devices run Java. It is used for mobile applications (specially Android apps), desktop applications, web applications, web servers and application servers, games, and database connection. Java works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc).',
                codeSnippet: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}'
            },
            {
                id: 'j5',
                title: 'Java Variables',
                keywords: ['java', 'variables', 'containers', 'storing', 'data', 'string', 'int', 'float', 'char', 'boolean', 'final'],
                content: 'Variables are containers for storing data values. In Java, there are different types of variables, for example: String (stores text), int (stores integers), float (stores floating point numbers), char (stores single characters), and boolean (stores values with two states). To create a variable, you must specify the type and assign it a value.',
                codeSnippet: 'String name = "John";\nint myNum = 15;\nfinal int myConstant = 20;'
            },
            {
                id: 'j12',
                title: 'Java If...Else',
                keywords: ['java', 'if', 'else', 'conditional', 'statements', 'conditions', 'decision', 'control flow'],
                content: 'Java has the following conditional statements: Use if to specify a block of code to be executed, if a specified condition is true. Use else to specify a block of code to be executed, if the same condition is false. Use else if to specify a new condition to test, if the first condition is false. Use switch to specify many alternative blocks of code to be executed.',
                codeSnippet: 'if (20 > 18) {\n  System.out.println("20 is greater than 18");\n}'
            },
            {
                id: 'j18',
                title: 'Java Methods',
                keywords: ['java', 'methods', 'functions', 'static', 'void', 'call', 'parameters', 'reuse code'],
                content: 'A method is a block of code which only runs when it is called. You can pass data, known as parameters, into a method. Methods are used to perform certain actions, and they are also known as functions. Why use methods? To reuse code: define the code once, and use it many times.',
                codeSnippet: 'public class Main {\n  static void myMethod() {\n    System.out.println("I just got executed!");\n  }\n\n  public static void main(String[] args) {\n    myMethod();\n  }\n}'
            }
        ]
    },
    {
        id: 'php',
        title: 'PHP',
        category: 'Backend',
        level: 'Intermediate',
        lessons: [
            {
                id: 'ph1',
                title: 'PHP Intro',
                keywords: ['php', 'introduction', 'hypertext', 'preprocessor', 'server', 'scripting', 'wordpress', 'facebook'],
                content: 'PHP is an acronym for "PHP: Hypertext Preprocessor". It is a widely-used, open source scripting language. PHP scripts are executed on the server. It is powerful enough to be at the core of the biggest blogging system on the web (WordPress)! It is deep enough to run the largest social network (Facebook)! PHP files can contain text, HTML, CSS, JavaScript, and PHP code.',
                codeSnippet: '<?php\necho "Hello World!";\n?>'
            },
            {
                id: 'ph4',
                title: 'PHP Variables',
                keywords: ['php', 'variables', 'containers', 'storing', 'information', 'dollar sign', 'name', 'value'],
                content: 'Variables are "containers" for storing information. In PHP, a variable starts with the $ sign, followed by the name of the variable. A variable name must start with a letter or the underscore character. A variable name cannot start with a number. PHP has no command for declaring a variable. It is created the moment you first assign a value to it.',
                codeSnippet: '<?php\n$txt = "Hello world!";\n$x = 5;\n$y = 10.5;\n?>'
            },
            {
                id: 'ph15',
                title: 'PHP Functions',
                keywords: ['php', 'functions', 'define', 'call', 'parameters', 'user-defined', 'built-in'],
                content: 'The real power of PHP comes from its functions. PHP has more than 1000 built-in functions, and besides those, you can create your own custom functions. A user-defined function declaration starts with the word function. A function name must start with a letter or an underscore. Function names are NOT case-sensitive.',
                codeSnippet: 'function writeMsg() {\n  echo "Hello world!";\n}\n\nwriteMsg();'
            }
        ]
    },
    {
        id: 'ai',
        title: 'AI Fundamentals',
        category: 'Advanced Tech',
        level: 'Advanced',
        lessons: [
            {
                id: 'ai1',
                title: 'What is AI?',
                keywords: ['ai', 'artificial intelligence', 'machine learning', 'simulation', 'human intelligence', 'learning', 'problem solving'],
                content: 'Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The ideal characteristic of artificial intelligence is its ability to rationalize and take actions that have the best chance of achieving a specific goal. A subset of artificial intelligence is machine learning.',
                codeSnippet: 'class SimpleAI:\n    def perceive(self, environment):\n        return environment.get_state()\n    \n    def decide(self, state):\n        return "Optimal Action"\n\nai = SimpleAI()'
            },
            {
                id: 'ai10',
                title: 'NLP Intro',
                keywords: ['nlp', 'natural language processing', 'linguistics', 'computer science', 'text', 'language', 'nltk'],
                content: 'Natural Language Processing (NLP) is a subfield of linguistics, computer science, and artificial intelligence concerned with the interactions between computers and human language, in particular how to program computers to process and analyze large amounts of natural language data.',
                codeSnippet: 'import nltk\ntext = "SikshaSarovar is great"\ntokens = nltk.word_tokenize(text)'
            },
            {
                id: 'ai14',
                title: 'Neural Networks',
                keywords: ['neural networks', 'artificial neural networks', 'deep learning', 'neurons', 'layers', 'tensorflow'],
                content: 'Neural networks, also known as artificial neural networks (ANNs) or simulated neural networks (SNNs), are a subset of machine learning and are at the heart of deep learning algorithms. Their name and structure are inspired by the human brain, mimicking the way that biological neurons signal to one another.',
                codeSnippet: 'import tensorflow as tf\nmodel = tf.keras.Sequential([\n  tf.keras.layers.Dense(10, activation=\'relu\')\n])'
            }
        ]
    },
    {
        id: 'ml',
        title: 'Machine Learning',
        category: 'Advanced Tech',
        level: 'Advanced',
        lessons: [
            {
                id: 'ml1',
                title: 'Intro to ML',
                keywords: ['machine learning', 'ml', 'artificial intelligence', 'data', 'algorithms', 'learning', 'accuracy'],
                content: 'Machine Learning is a field of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy. Machine learning is used in many of the technologies we use today, like speech recognition, image recognition, and recommendation engines.',
                codeSnippet: 'import pandas as pd\nimport numpy as np\n# Load your dataset\ndata = pd.read_csv("data.csv")'
            },
            {
                id: 'ml2',
                title: 'Supervised Learning',
                keywords: ['supervised learning', 'labeled', 'dataset', 'classification', 'regression', 'training', 'prediction'],
                content: 'Supervised learning is a type of machine learning where the model is trained on a labeled dataset. A labeled dataset is one where the target variable (the thing you want to predict) is already known. Examples of supervised learning tasks include classification (predicting a category) and regression (predicting a continuous value).',
                codeSnippet: 'from sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y)'
            },
            {
                id: 'ml6',
                title: 'Linear Regression',
                keywords: ['linear regression', 'regression', 'model', 'prediction', 'relationship', 'sklearn'],
                content: 'Linear regression is a linear approach for modelling the relationship between a scalar response and one or more explanatory variables. The relationship is modeled using linear predictor functions whose unknown model parameters are estimated from the data.',
                codeSnippet: 'from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)'
            }
        ]
    }
];

/**
 * Search courses by keywords
 * @param {string} query - User's search query
 * @param {number} maxResults - Maximum number of results to return
 * @returns {Array} Array of matching lessons with relevance scores
 */
function searchCourses(query, maxResults = 5) {
    if (!query || typeof query !== 'string') {
        return [];
    }

    // Normalize and tokenize query
    const queryTokens = query.toLowerCase()
        .replace(/[^\w\s]/g, ' ')
        .split(/\s+/)
        .filter(token => token.length > 2); // Filter out very short words

    if (queryTokens.length === 0) {
        return [];
    }

    const results = [];

    // Search through all courses and lessons
    COURSES_DATA.forEach(course => {
        course.lessons.forEach(lesson => {
            let score = 0;

            // Check title match (highest weight)
            const titleTokens = lesson.title.toLowerCase().split(/\s+/);
            queryTokens.forEach(qToken => {
                if (titleTokens.some(tToken => tToken.includes(qToken) || qToken.includes(tToken))) {
                    score += 10;
                }
            });

            // Check keyword match (high weight)
            queryTokens.forEach(qToken => {
                if (lesson.keywords.some(keyword => keyword.includes(qToken) || qToken.includes(keyword))) {
                    score += 5;
                }
            });

            // Check content match (medium weight)
            const contentLower = lesson.content.toLowerCase();
            queryTokens.forEach(qToken => {
                const regex = new RegExp(`\\b${qToken}`, 'gi');
                const matches = contentLower.match(regex);
                if (matches) {
                    score += matches.length * 2;
                }
            });

            // Check course title match (low weight)
            const courseTitleLower = course.title.toLowerCase();
            queryTokens.forEach(qToken => {
                if (courseTitleLower.includes(qToken)) {
                    score += 3;
                }
            });

            if (score > 0) {
                results.push({
                    score,
                    course: course.title,
                    courseId: course.id,
                    lessonId: lesson.id,
                    title: lesson.title,
                    content: lesson.content,
                    codeSnippet: lesson.codeSnippet,
                    category: course.category,
                    level: course.level
                });
            }
        });
    });

    // Sort by score (descending) and return top results
    return results
        .sort((a, b) => b.score - a.score)
        .slice(0, maxResults);
}

/**
 * Get a specific lesson by course ID and lesson ID
 */
function getLesson(courseId, lessonId) {
    const course = COURSES_DATA.find(c => c.id === courseId);
    if (!course) return null;

    return course.lessons.find(l => l.id === lessonId);
}

/**
 * Get all courses
 */
function getAllCourses() {
    return COURSES_DATA.map(course => ({
        id: course.id,
        title: course.title,
        category: course.category,
        level: course.level,
        lessonCount: course.lessons.length
    }));
}

module.exports = {
    searchCourses,
    getLesson,
    getAllCourses,
    COURSES_DATA
};
