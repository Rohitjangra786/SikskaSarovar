
import React from 'react';
import {
  Code,
  Database,
  Globe,
  Layers,
  Layout,
  Terminal,
  Cpu,
  Monitor,
  Coffee,
  Smartphone,
  Brain,
  Microscope,
  Box
} from 'lucide-react';
import { Course } from './types';
import MLAppsImg from './Images/ml-applications.jpg';
import pythonMindmap from './components/courses/Basics of Python/mindmapBasics.png';
import pythonOverview from './components/courses/Basics of Python/Basics overview.png';

// Fix: Added missing ICON_MAP export which was causing errors in Sidebar, CourseCard, and App components.
export const ICON_MAP: Record<string, React.ReactNode> = {
  'layout': <Layout size={20} />,
  'terminal': <Terminal size={20} />,
  'coffee': <Coffee size={20} />,
  'database': <Database size={20} />,
  'brain': <Brain size={20} />,
  'microscope': <Microscope size={20} />,
  'code': <Code size={20} />,
  'globe': <Globe size={20} />,
  'layers': <Layers size={20} />,
  'cpu': <Cpu size={20} />,
  'monitor': <Monitor size={20} />,
  'smartphone': <Smartphone size={20} />,
  'box': <Box size={20} />
};

export const COURSES: Course[] = [
  {
    id: 'html',
    title: 'HTML',
    category: 'Web Development',
    icon: 'layout',
    level: 'Beginner',
    progress: 0,
    lessons: [
      {
        id: 'h1',
        title: 'HTML Introduction',
        content: `HTML stands for HyperText Markup Language. It is the standard markup language for creating Web pages. HTML describes the structure of a Web page semantically and originally included cues for the appearance of the document.\n\nHTML elements are the building blocks of HTML pages. They are represented by tags like <h1>, <p>, <a>, etc. Browsers do not display the HTML tags, but use them to render the content of the page.\n\nA simple HTML document consists of a DOCTYPE declaration, an <html> root element, a <head> section containing meta information, and a <body> section that contains the visible page content.`,
        codeSnippet: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>My First Heading</h1>\n  <p>My first paragraph.</p>\n</body>\n</html>',
        isCompleted: false
      },
      {
        id: 'h2',
        title: 'HTML Editors',
        content: `A web developer can use a professional HTML editor to create and modify websites. However, for learning HTML, we recommend a simple text editor like Notepad (PC) or TextEdit (Mac). We believe using a simple text editor is a good way to learn HTML.\n\nProfessional editors like Visual Studio Code, Sublime Text, and Atom are excellent once you have mastered the basics. They offer features like syntax highlighting, autocompletion, and integrated version control. For now, focus on writing the tags manually to build muscle memory.`,
        codeSnippet: '<!-- Open your text editor, write your code, and save as index.html -->',
        isCompleted: false
      },
      {
        id: 'h3',
        title: 'HTML Basic Examples',
        content: `Every HTML document must start with a document type declaration: <!DOCTYPE html>. The document itself begins with <html> and ends with </html>. The visible part of the HTML document is between <body> and </body>.\n\nHTML headings are defined with the <h1> to <h6> tags. <h1> defines the most important heading. <h6> defines the least important heading. HTML paragraphs are defined with the <p> tag. HTML links are defined with the <a> tag.`,
        codeSnippet: '<h1>This is a heading</h1>\n<p>This is a paragraph.</p>\n<a href="https://sikshasarovar.com">Visit SikshaSarovar</a>',
        isCompleted: false
      },
      {
        id: 'h4',
        title: 'HTML Elements',
        content: `An HTML element is defined by a start tag, some content, and an end tag. The HTML element is everything from the start tag to the end tag: <tagname>Content goes here...</tagname>.\n\nSome HTML elements have no content (like the <br> element). These elements are called empty elements. Empty elements do not have an end tag!\n\nHTML elements can be nested (this means that elements can contain other elements). All HTML documents consist of nested HTML elements.`,
        codeSnippet: '<div>\n  <h1>Nested Heading</h1>\n  <p>Nested <b>bold</b> text.</p>\n</div>',
        isCompleted: false
      },
      {
        id: 'h5',
        title: 'HTML Attributes',
        content: `All HTML elements can have attributes. Attributes provide additional information about elements and are always specified in the start tag. They usually come in name/value pairs like: name="value".\n\nThe href attribute specifies the URL of the page the link goes to. The src attribute specifies the path to the image to be displayed. The width and height attributes provide size information for images. The alt attribute specifies an alternate text for an image, if the image for some reason cannot be displayed.`,
        codeSnippet: '<img src="logo.png" width="500" height="600" alt="Siksha Logo">\n<a href="https://google.com" title="Search Engine">Go to Google</a>',
        isCompleted: false
      },
      { id: 'h6', title: 'HTML Headings', content: 'Headings are used for titles and subtitles that you want to show on a webpage. Search engines use the headings to index the structure and content of your web pages. Users often skim a page by its headings. It is important to use headings to show the document structure.\n\n<h1> headings should be used for main headings, followed by <h2> headings, then the less important <h3>, and so on.', codeSnippet: '<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>', isCompleted: false },
      { id: 'h7', title: 'HTML Paragraphs', content: 'The HTML <p> element defines a paragraph. A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph.\n\nYou cannot be sure how HTML will be displayed. Large or small screens, and resized windows will create different results. With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code.', codeSnippet: '<p>This is a paragraph.</p>\n<p>This is another paragraph.</p>', isCompleted: false },
      { id: 'h8', title: 'HTML Styles', content: 'The HTML style attribute is used to add styles to an element, such as color, font, size, and more. Setting the style of an HTML element, can be done with the style attribute. The HTML style attribute has the following syntax: <tagname style="property:value;">.', codeSnippet: '<p style="color:red;">I am red</p>\n<p style="font-family:courier;">I am Courier</p>', isCompleted: false },
      { id: 'h9', title: 'HTML Formatting', content: 'HTML contains several elements for defining text with a special meaning. Formatting elements were designed to display special types of text: <b> - Bold text, <strong> - Important text, <i> - Italic text, <em> - Emphasized text, <mark> - Marked text, <small> - Smaller text, <del> - Deleted text, <ins> - Inserted text, <sub> - Subscript text, <sup> - Superscript text.', codeSnippet: '<p>This is <b>bold</b> and this is <i>italic</i>.</p>', isCompleted: false },
      { id: 'h10', title: 'HTML Quotations', content: 'The HTML <q> element defines a short quotation. Browsers normally insert quotation marks around the quotation. The HTML <blockquote> element defines a section that is quoted from another source. Browsers usually indent <blockquote> elements.', codeSnippet: '<p>WWF goal is to: <q>Build a future where people live in harmony with nature.</q></p>', isCompleted: false },
      { id: 'h11', title: 'HTML Comments', content: 'HTML comments are not displayed in the browser, but they can help document your HTML source code. You can add comments to your HTML source by using the following syntax: <!-- Write your comments here -->. Notice that there is an exclamation point (!) in the start tag, but not in the end tag.', codeSnippet: '<!-- This is a hidden comment -->\n<p>This is visible.</p>', isCompleted: false },
      { id: 'h12', title: 'HTML Colors', content: 'HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values. In HTML, a color can be specified by using a color name. HTML supports 140 standard color names.', codeSnippet: '<h2 style="background-color:Tomato;">Tomato</h2>\n<h2 style="background-color:Orange;">Orange</h2>', isCompleted: false },
      { id: 'h13', title: 'HTML CSS', content: 'CSS stands for Cascading Style Sheets. CSS saves a lot of work. It can control the layout of multiple web pages all at once. CSS can be added to HTML elements in 3 ways: Inline (using the style attribute), Internal (using a <style> element in the <head> section), and External (using a <link> element to link to an external CSS file).', codeSnippet: '<head>\n<style>\nbody {background-color: powderblue;}\nh1   {color: blue;}\n</p>\n</style>\n</head>', isCompleted: false },
      { id: 'h14', title: 'HTML Links', content: 'The HTML <a> tag defines a hyperlink. It has the following syntax: <a href="url">link text</a>. The most important attribute of the <a> element is the href attribute, which indicates the link destination. The link text is the part that will be visible to the reader.', codeSnippet: '<a href="https://www.w3schools.com/">Visit W3Schools.com!</a>', isCompleted: false },
      { id: 'h15', title: 'HTML Images', content: 'Images can improve the design and the appearance of a web page. The HTML <img> tag is used to embed an image in a web page. Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.', codeSnippet: '<img src="img_chania.jpg" alt="Flowers in Chania">', isCompleted: false },
      { id: 'h16', title: 'HTML Favicon', content: 'A favicon is a small image displayed next to the page title in the browser tab. You can use any image you like as your favicon. You can also create your own favicon on sites like favicon.cc. To add a favicon to your website, either save your favicon image to the root directory of your webserver, or create a folder in the root directory called images, and save your favicon image in this folder.', codeSnippet: '<link rel="icon" type="image/x-icon" href="/images/favicon.ico">', isCompleted: false },
      { id: 'h17', title: 'HTML Tables', content: 'HTML tables allow web developers to arrange data into rows and columns. A table in HTML consists of table cells inside rows and columns. Each table cell is defined by a <td> and a </td> tag. Each table row starts with a <tr> and ends with a </tr> tag.', codeSnippet: '<table>\n  <tr>\n    <th>Company</th>\n    <th>Contact</th>\n  </tr>\n  <tr>\n    <td>Alfreds Futterkiste</td>\n    <td>Maria Anders</td>\n  </tr>\n</table>', isCompleted: false },
      { id: 'h18', title: 'HTML Lists', content: 'HTML lists allow web developers to group a set of related items in lists. An unordered HTML list starts with the <ul> tag. Each list item starts with the <li> tag. The list items will be marked with bullets (small black circles) by default. An ordered HTML list starts with the <ol> tag. Each list item starts with the <li> tag. The list items will be marked with numbers by default.', codeSnippet: '<ul>\n  <li>Coffee</li>\n  <li>Tea</li>\n  <li>Milk</li>\n</ul>', isCompleted: false },
      { id: 'h19', title: 'HTML Block & Inline', content: 'Every HTML element has a default display value, depending on what type of element it is. There are two display values: block and inline. A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element. An inline element does not start on a new line. An inline element only takes up as much width as necessary.', codeSnippet: '<div>This is a block element.</div>\n<span>This is an inline element.</span>', isCompleted: false },
      { id: 'h20', title: 'HTML Classes', content: 'The HTML class attribute is used to specify a class for an HTML element. Multiple HTML elements can share the same class. The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.', codeSnippet: '<style>\n.city {\n  background-color: tomato;\n  color: white;\n  padding: 10px;\n}\n</style>\n\n<h2 class="city">London</h2>\n<h2 class="city">Paris</h2>', isCompleted: false },
      { id: 'h21', title: 'HTML Forms Attributes', content: 'This chapter describes the different attributes for the HTML <form> element. The Action Attribute defines the action to be performed when the form is submitted. The Target Attribute specifies where to display the response that is received after submitting the form. The Method Attribute specifies the HTTP method to be used when submitting the form data.', codeSnippet: '<form action="/action_page.php" target="_blank" method="post">\n  <label for="fname">First name:</label><br>\n  <input type="text" id="fname" name="fname" value="John"><br>\n  <input type="submit" value="Submit">\n</form>', isCompleted: false },
      { id: 'h22', title: 'HTML Form Elements', content: 'The HTML <form> element can contain one or more of the following form elements: <input>, <label>, <select>, <textarea>, <button>, <fieldset>, <legend>, <datalist>, <output>, <option>, <optgroup>.', codeSnippet: '<label for="cars">Choose a car:</label>\n<select id="cars" name="cars">\n  <option value="volvo">Volvo</option>\n  <option value="saab">Saab</option>\n</select>', isCompleted: false },
      { id: 'h23', title: 'HTML Input Types', content: 'This chapter describes the different types for the HTML <input> element. Here are some examples: <input type="button">, <input type="checkbox">, <input type="color">, <input type="date">, <input type="email">, <input type="file">, <input type="hidden">, <input type="image">, <input type="number">, <input type="password">, <input type="radio">, <input type="range">, <input type="reset">, <input type="search">, <input type="submit">, <input type="tel">, <input type="text">, <input type="time">, <input type="url">, <input type="week">.', codeSnippet: '<input type="button" onclick="alert(\'Hello World!\')" value="Click Me!">', isCompleted: false },
      { id: 'h24', title: 'HTML Input Attributes', content: 'This chapter describes the different attributes for the HTML <input> element. The value attribute specifies an initial value for an input field. The readonly attribute specifies that an input field is read-only. The disabled attribute specifies that an input field should be disabled. The size attribute specifies the visible width, in characters, of an input field.', codeSnippet: '<input type="text" id="fname" name="fname" value="John" readonly>', isCompleted: false },
      { id: 'h25', title: 'HTML Input Form Attributes', content: 'This chapter describes the different attributes for the HTML <input> element. The form attribute specifies the form the <input> element belongs to. The formaction attribute specifies the URL of the file that will process the input control when the form is submitted. The formenctype attribute specifies how the form-data should be encoded when submitting it to the server.', codeSnippet: '<form action="/action_page.php" id="form1">\n  <label for="fname">First name:</label>\n  <input type="text" id="fname" name="fname"><br><br>\n  <input type="submit" value="Submit">\n</form>\n\n<label for="lname">Last name:</label>\n<input type="text" id="lname" name="lname" form="form1">', isCompleted: false }
    ]
  },
  {
    id: 'python',
    title: 'Basics of Python',
    category: 'Programming',
    icon: 'terminal',
    level: 'Beginner',
    progress: 10,
    lessons: [
      {
        id: 'p1',
        title: '1. Introduction',
        image: pythonOverview,
        mindMapImage: pythonMindmap,
        content: `Programming is the process of giving instructions to a computer so that it can perform specific tasks. These instructions are written using programming languages. Over time, programming languages have evolved from low-level, hardware-dependent languages to high-level, user-friendly languages.

Python belongs to the category of modern programming languages that focus on:

• Ease of learning
• Readability
• Productivity
• Real-world problem solving

This makes Python suitable for students, researchers, and professionals.`,
        codeSnippet: 'print("Python is designed for readability and productivity.")',
        isCompleted: false
      },
      {
        id: 'p1_1',
        title: '1.1 The New Age of Programming',
        content: `The term “New Age of Programming” refers to the modern approach to software development where the focus is on **solving problems efficiently rather than writing complex code**.

### Already Programming Era
In earlier times:

• Programming languages were **hardware dependent**
• Syntax was complex
• Writing even small programs required many lines of code
• Development time was high

**Examples**: Assembly Language, Early versions of C

### Modern Programming Era
Modern programming emphasizes:

• Human-readable syntax
• Rapid development
• Code reusability
• Cross-platform execution

Python is a **key representative** of this new era.

### Why Python is a New Age Language
1. **High-level abstraction**: Programmer does not worry about memory management.
2. **Simple syntax**: Code looks similar to English.
3. **Multi-domain usage**: Web, Data Science, AI, Automation, Scientific computing.
4. **Community-driven growth**: Thousands of open-source libraries.

### Advantages of New Age Programming (Python)
| Feature | Description |
| :--- | :--- |
| **Readability** | Easy to understand and learn |
| **Productivity** | Faster development |
| **Portability** | Runs on Windows, macOS, Linux |
| **Scalability** | Suitable for small & large projects |
| **Integration** | Works with other languages |`,
        codeSnippet: `# C Language Example:\n# include<stdio.h>\n# int main() {\n#   printf("Hello World");\n#   return 0;\n# }\n\n# Python Example:\nprint("Hello World")\n# Python achieves the same result with less code.`,
        isCompleted: false
      },
      {
        id: 'p1_2',
        title: '1.2 MATLAB',
        content: `MATLAB is a high-level programming environment mainly used for **numerical and scientific computations**.

### What is MATLAB?
MATLAB stands for **Matrix Laboratory**. It is designed for:

• Mathematical modeling
• Numerical analysis
• Engineering simulations
• Signal and image processing

MATLAB uses **matrix-based computation**, which makes it powerful for scientific work.

### Limitations of MATLAB
• Commercial (paid software)
• Limited usage outside scientific fields
• Less flexible for web and application development

### Python as an Alternative to MATLAB
Python has emerged as a strong alternative because:

• Python is **free and open-source**
• Libraries like **NumPy** and **SciPy** provide MATLAB-like functionality
• Python supports **many more application areas**

### MATLAB vs Python
| MATLAB | Python |
| :--- | :--- |
| Paid software | Free & open-source |
| Mainly scientific use | Multi-purpose |
| Limited libraries | Huge ecosystem |
| Closed environment | Community-driven |

✔ Due to these reasons, many institutions and industries now **prefer Python over MATLAB**.`,
        codeSnippet: 'import numpy as np\n\n# Python using NumPy is like MATLAB\na = np.array([1, 2, 3])\nprint("Matrix operation in Python:")\nprint(a * 2)',
        isCompleted: false
      },
      {
        id: 'p2',
        title: '2. What is Python?',
        content: `Python is a **high-level, general-purpose programming language** that is designed to be **simple, readable, and powerful**. It allows programmers to write programs using fewer lines of code compared to many other languages.

### Wide Usage
Python is widely used in:

• **Education**
• **Software development**
• **Data science**
• **Artificial Intelligence**
• **Web development**
• **Automation**`,
        codeSnippet: `print("Python power relies on simplicity")`,
        isCompleted: false
      },
      {
        id: 'p2_1',
        title: '2.1 Introduction to Python',
        content: `Python was created by **Guido van Rossum** and first released in **1991**. The main goal behind Python was to create a language that:

• Is easy to learn
• Uses clear and readable syntax
• Reduces program complexity

Python emphasizes **code readability**, which means a Python program looks almost like plain English.

### Key Characteristics of Python
1. **High-Level Language**: No need to manage memory manually; Programmer focuses only on logic.
2. **Interpreted Language**: Code is executed line by line; No separate compilation step.
3. **Object-Oriented**: Supports classes and objects; Encourages reusable and modular code.
4. **Platform Independent**: Same program runs on Windows, Linux, macOS.
5. **Open Source**: Free to use and modify; Supported by a large community.

### Why Python is Easy to Learn
• No semicolons (\`;\`)
• No curly braces (\`{}\`)
• Uses **indentation** instead of brackets
• English-like keywords`,
        codeSnippet: `if 5 > 2:\n    print("5 is greater than 2")\n# Indentation is key in Python!`,
        isCompleted: false
      },
      {
        id: 'p2_1_1',
        title: '2.1.1 Interpreted vs Compiled',
        content: `Programming languages are mainly classified into **Interpreted** and **Compiled** languages.

### Interpreted Language
In interpreted languages:

• Code is executed **line by line**
• Errors are shown immediately
• Execution is slower

*Python is an interpreted language.*

**Advantages**: Easy debugging, Faster development.
**Disadvantages**: Slower execution speed.

### Compiled Language
In compiled languages:
• Entire code is converted into machine code
• Execution is faster
• Errors are found after compilation

**Examples**: C, C++

### Comparison Table
| Feature | Interpreted | Compiled |
| :--- | :--- | :--- |
| **Execution** | Line by line | Whole program |
| **Speed** | Slower | Faster |
| **Error detection** | During execution | After compilation |
| **Example** | Python | C, C++ |

✔ Python being interpreted makes it **beginner-friendly**.`,
        codeSnippet: `# Python (Interpreted) execution flow:\nprint("Line 1 executed")\nprint("Line 2 executed")\n# Error here stops execution immediately\n# print(1/0)`,
        isCompleted: false
      },
      {
        id: 'p2_2',
        title: '2.2 Python Packages',
        content: `A **package** in Python is a collection of **modules** that are grouped together to perform related tasks.

• **Package** → Collection of modules
• **Module** → Collection of functions and classes

Packages help in:
• Code reusability
• Organized programming
• Faster development

### Examples of Python Packages
• **NumPy**
• **Pandas**
• **Matplotlib**
• **SciPy**`,
        codeSnippet: `import numpy as np\n# Importing a package alias`,
        isCompleted: false
      },
      {
        id: 'p2_2_1',
        title: '2.2.1 Scientific Packages',
        content: `Python is very popular in scientific computing because of powerful packages.

### Important Scientific Packages
1. **NumPy**: Supports arrays and matrices; Fast numerical operations.
2. **SciPy**: Advanced mathematical functions; Engineering and scientific calculations.
3. **Pandas**: Data analysis and manipulation; Works with tables and datasets.
4. **Matplotlib**: Graph plotting and visualization.`,
        codeSnippet: `import pandas as pd\n# Pandas is key for Data Science\nprint("Pandas loaded for data analysis")`,
        isCompleted: false
      },
      {
        id: 'p3',
        title: '3. Anaconda',
        content: `Anaconda is a **free and open-source Python distribution** that is specially designed for **data science, scientific computing, machine learning, and analytics**.

Instead of installing Python and libraries separately, Anaconda provides **everything in one package**.

### 3.1 What is Anaconda?
Anaconda is:

• A **Python distribution**
• A **package manager**
• An **environment manager**
• A collection of **pre-installed scientific libraries**

It simplifies Python usage by removing installation and dependency problems.

### Why Anaconda Was Created
In normal Python:
• Libraries must be installed one by one
• Version conflicts may occur
• Beginners face setup difficulties

Anaconda solves these problems by providing ready-to-use libraries and managing versions automatically.`,
        codeSnippet: `conda list\n# Lists all installed packages in Anaconda`,
        isCompleted: false
      },
      {
        id: 'p3_2',
        title: '3.2 Components of Anaconda',
        content: `Anaconda consists of several important components:

![Start Learning](https://mintcdn.com/anaconda-29683c67/eSsEBS6xLmJK8V-1/images/nav-tabs.png?auto=format&fit=max&n=eSsEBS6xLmJK8V-1&q=85&s=8a6590199fa0e668d648ad21432aac58)

### 1. Python Interpreter
• Core Python language
• Executes Python programs

### 2. Conda (Package Manager)
**Conda** is used to install libraries, update packages, and manage environments.
Example: \`conda install numpy\`

### 3. Conda Environments
A **virtual environment** is an isolated workspace where specific Python versions and libraries are used to avoid conflicts.

### 4. Anaconda Navigator
A **graphical user interface (GUI)** to launch tools and manage environments without commands.

### 5. Pre-installed Libraries
Includes **NumPy, Pandas, SciPy, Matplotlib, Scikit-learn**.

### 6. IDEs Included
Spyder, Jupyter Notebook, JupyterLab.`,
        codeSnippet: `conda create -n myenv python=3.9\n# Creates a new environment named 'myenv'`,
        isCompleted: false
      },
      {
        id: 'p3_3',
        title: '3.3 Advantages of Anaconda',
        content: `1. **Easy Installation**: Single installer; No manual setup.
2. **Beginner-Friendly**: GUI-based tools; Less command-line usage.
3. **Environment Management**: Avoids dependency issues.
4. **Scientific Focus**: Ideal for data science and research.
5. **Cross-Platform**: Works on Windows, macOS, Linux.`,
        codeSnippet: `# Anaconda makes setup easy!\nprint("Anaconda installed successfully.")`,
        isCompleted: false
      },
      {
        id: 'p3_4',
        title: '3.4 Anaconda vs Normal Python',
        content: `| Feature | Normal Python | Anaconda |
| :--- | :--- | :--- |
| **Installation** | Manual | One-click |
| **Libraries** | Installed separately | Pre-installed |
| **Package manager** | pip | conda |
| **Environment management** | Limited | Excellent |
| **Best for** | General use | Data science |`,
        codeSnippet: `# Check existing packages\npip list  # Normal Python\nconda list # Anaconda`,
        isCompleted: false
      },
      {
        id: 'p3_5',
        title: '3.5 Usage & Installation',
        content: `### 3.5 When Should You Use Anaconda?
**Recommended when:**

• You are learning **Python for data science**
• You need scientific libraries
• You want fewer setup issues
• You are a beginner

**Normal Python is better for:**
• Web development
• Lightweight applications

### 3.6 Installation of Anaconda (Conceptual Steps)
1. Download Anaconda installer
2. Run installer
3. Choose Python version
4. Complete installation
5. Launch Anaconda Navigator

(No command-line knowledge required for basic usage)`,
        codeSnippet: `# Launch Navigator via command line (optional)\nanaconda-navigator`,
        isCompleted: false
      },
      {
        id: 'p4',
        title: '4. Python Editors (IDEs)',
        content: `A **Python Editor** or **IDE (Integrated Development Environment)** is software that helps programmers to:

• Write Python code
• Execute programs
• Debug errors
• Manage projects efficiently

Using an IDE increases **productivity**, **accuracy**, and **learning speed**, especially for beginners.

### Why Do We Need an IDE?
**Without an IDE:**
• Writing code becomes difficult
• Errors are harder to identify
• Running and testing programs is slow

**With an IDE:**
• Syntax highlighting improves readability
• Errors are shown clearly
• Code execution is faster
• Debugging tools are available

### Types of Python Editors
1. **Basic editors** (for beginners)
2. **Advanced editors** (for professionals)
3. **Notebook-based editors** (for data science)`,
        codeSnippet: `print("IDEs make coding easier!")`,
        isCompleted: false
      },
      {
        id: 'p4_1',
        title: '4.1 Python IDLE',
        content: `**IDLE** stands for **Integrated Development and Learning Environment**.
It is the **default editor** that comes with Python installation.

![IDLE](https://www.aipython.in/wp-content/uploads/2020/03/Python_idle_windows-1-768x301.png)

### Features
• Simple interface
• Built-in Python shell
• Syntax highlighting
• Error messages displayed clearly

### Modes in IDLE
1. **Interactive Mode**: Executes code line by line
2. **Script Mode**: Used to write complete programs

**Advantages**: Very easy for beginners; No extra installation.
**Limitations**: Not suitable for large projects; Limited debugging.`,
        codeSnippet: `print("This runs in IDLE")`,
        isCompleted: false
      },
      {
        id: 'p4_2',
        title: '4.2 Visual Studio Code',
        content: `**Visual Studio Code (VS Code)** is a **lightweight but powerful source code editor** developed by Microsoft.

![VS Code](https://assets.digitalocean.com/articles/getting-started-with-python-in-visual-studio-code/lhkuvfxk5mwf7vtja7ln.png)

### Features
• Supports Python via extensions
• Code completion
• Integrated terminal
• Git and GitHub support

### Why VS Code is Popular
• Fast and flexible
• Used in industry
• Supports multiple languages

**Best Use Case**: Web development, Python scripting, Professional projects.`,
        codeSnippet: `# VS Code requires the Python extension\nprint("VS Code is powerful!")`,
        isCompleted: false
      },
      {
        id: 'p4_3',
        title: '4.3 Spyder',
        content: `**Spyder** is an IDE designed specifically for **scientific computing and data analysis**.

![Spyder](https://www.spyder-ide.org/assets/media/screenshot_light.webp)

### Key Features
• MATLAB-like interface
• Variable explorer
• Powerful editor
• Integrated plotting

**Advantages**: Ideal for data science students; Easy visualization.
**Limitations**: Not ideal for web development.`,
        codeSnippet: `# Spyder is great for plots\nimport matplotlib.pyplot as plt\nplt.plot([1,2,3])`,
        isCompleted: false
      },
      {
        id: 'p4_4',
        title: '4.4 Visual Studio',
        content: `**Visual Studio** is a **full-featured IDE** by Microsoft.

### Features
• Supports Python with plugins
• Advanced debugging
• Suitable for large applications

**Use Case**: Enterprise-level software development.`,
        codeSnippet: `print("Visual Studio is for big projects")`,
        isCompleted: false
      },
      {
        id: 'p4_5',
        title: '4.5 PyCharm',
        content: `**PyCharm** is a **Python-specific IDE** developed by JetBrains.

### Features
• Intelligent code completion
• Advanced debugging
• Virtual environment support
• Django and Flask support

### Editions
• **Community**: Free
• **Professional**: Paid

**Advantages**: Best for Python professionals; Excellent project management.`,
        codeSnippet: `print("PyCharm uses intelligent code completion")`,
        isCompleted: false
      },
      {
        id: 'p4_6',
        title: '4.6 Wing Python IDE',
        content: `**Wing IDE** is designed for **professional Python developers**.

### Features
• Advanced debugger
• Code intelligence
• Large project support

**Limitations**: Not beginner-friendly; Paid software.`,
        codeSnippet: `print("Wing IDE is for pros")`,
        isCompleted: false
      },
      {
        id: 'p4_7',
        title: '4.7 Jupyter Notebook',
        content: `**Jupyter Notebook** is an **interactive web-based environment** where code, output, text, and visuals appear together.

### Features
• Cell-based execution
• Supports graphs and equations
• Excellent for learning and research

**Advantages**: Ideal for data science; Best for teaching.
**Limitations**: Not suitable for large software projects.

### Comparison of Python Editors
| Editor | Best For | Level |
| :--- | :--- | :--- |
| **IDLE** | Beginners | Basic |
| **VS Code** | General development | Intermediate |
| **Spyder** | Scientific computing | Intermediate |
| **PyCharm** | Professional Python | Advanced |
| **Jupyter** | Learning & data science | All levels |`,
        codeSnippet: `# Jupyter Cell\nx=10\ny=20\nx+y`,
        isCompleted: false
      },
      {
        id: 'p5',
        title: '5. Resources',
        content: `Learning Python effectively requires using the **right learning resources**. Python has one of the **largest learning ecosystems** among programming languages.

### 5.1 Official Python Resources
Python provides official learning support through:

• **Official documentation**
• **Tutorials and examples**
• **Standard library references**

**Why official resources are important:**
• Accurate and up to date
• Written by Python core developers
• Useful for deep understanding`,
        codeSnippet: `print("Start with docs.python.org")`,
        isCompleted: false
      },
      {
        id: 'p5_2',
        title: '5.2 Online Learning Resources',
        content: `Python learners commonly use:

• **Online tutorials**
• **Video lectures**
• **Coding practice platforms**
• **Community forums**

**Benefits:**
• Self-paced learning
• Free or low-cost
• Practical exposure`,
        codeSnippet: `# Practice makes perfect\nfor i in range(3):\n    print("Code daily!")`,
        isCompleted: false
      },
      {
        id: 'p5_3',
        title: '5.3 Books and Study Material',
        content: `Books provide:

• **Structured learning**
• **Conceptual clarity**
• **Exam-oriented explanations**

Python books are widely used in **Universities**, **Competitive exams**, and **Research work**.`,
        codeSnippet: `print("Books build strong foundations")`,
        isCompleted: false
      },
      {
        id: 'p5_4',
        title: '5.4 Community Support',
        content: `Python has strong community support through:

• **Discussion forums**
• **Developer groups**
• **Open-source contributions**

This helps beginners to **solve errors quickly**, **learn best practices**, and **improve coding skills**.

### Why Python Resources Are Abundant
• Python is open-source
• Used globally
• Strong academic and industry demand

✔ This makes Python **easy to learn and grow with**.`,
        codeSnippet: `print("Community is Python's superpower")`,
        isCompleted: false
      },
      {
        id: 'p6',
        title: '6. Installing Python',
        content: `Before writing Python programs, Python must be installed on the system.
Python can be installed in **multiple ways**, depending on user needs.

### Different Ways to Install Python
1. **Python Windows Store App**
2. **Official Python Installer**
3. **Anaconda Distribution**
4. **Python with IDEs like VS Code**`,
        codeSnippet: `# Check if Python is installed\nimport sys\nprint(sys.executable)`,
        isCompleted: false
      },
      {
        id: 'p6_1',
        title: '6.1 Python Windows Store App',
        content: `### What is Python Store App?
On Windows systems, Python can be installed directly from the **Microsoft Store**.

**Advantages**: Very easy installation; Automatic updates; Beginner-friendly.
**Limitations**: Limited configuration options; Not suitable for advanced development.
**Best For**: Absolute beginners; Basic Python learning.`,
        codeSnippet: `print("Windows Store install is one-click!")`,
        isCompleted: false
      },
      {
        id: 'p6_2',
        title: '6.2 Installing Anaconda',
        content: `**Anaconda** is preferred for **Data science**, **Scientific computing**, and **Machine learning**.

### What Anaconda Installation Provides
• Python interpreter
• Scientific libraries
• Conda package manager
• IDEs (Spyder, Jupyter)

**Advantages**: One-time installation; No dependency issues; Easy environment management.
**Best For**: Students, Researchers, Data analysts.`,
        codeSnippet: `print("Anaconda includes everything you need")`,
        isCompleted: false
      },
      {
        id: 'p6_3',
        title: '6.3 Installing Visual Studio Code',
        content: `**VS Code** is **not Python itself**, but an **editor** used to write and run Python programs.

### Steps Conceptually
1. Install VS Code
2. Install Python
3. Add Python extension
4. Start coding

**Advantages**: Lightweight; Industry standard; Supports debugging.
**Best For**: Web development; Professional programming.

### Choosing the Right Installation Method
| User Type | Recommended Setup |
| :--- | :--- |
| **Beginner** | Python Store App / IDLE |
| **Student (Data Science)** | Anaconda |
| **Professional Developer** | Python + VS Code |
| **Researcher** | Anaconda + Jupyter |`,
        codeSnippet: `print("VS Code + Python is the pro choice")`,
        isCompleted: false
      },
      {
        id: 'p7',
        title: '7. Start Using Python',
        content: `After installing Python, the next step is to **start using it practically**. Python can be used in different ways:

• Using an IDE
• Using Python Shell (interactive mode)
• Using Console / Terminal
• Using Script mode`,
        codeSnippet: `print("Ready to start!")`,
        isCompleted: false
      },
      {
        id: 'p7_1',
        title: '7.1 Python IDE',
        content: `A **Python IDE** provides a complete environment to:

• Write Python code
• Execute programs
• Debug errors
• Manage files and projects

**Examples**: Python IDLE, VS Code, Spyder, PyCharm.
**Python IDLE** is commonly used by beginners.

### Why Beginners Use Python IDE
• No complex commands
• Easy interface
• Built-in execution support
• Helpful error messages`,
        codeSnippet: `print("IDLE is beginner friendly")`,
        isCompleted: false
      },
      {
        id: 'p7_2',
        title: '7.2 My First Python Program',
        content: `The first program traditionally written in any programming language is **Hello World**.

### First Python Program
\`print("Hello, World!")\`

### Explanation
• \`print()\` → built-in function
• \`"Hello, World!"\` → string to be displayed
• No semicolon required
• No main function needed

✔ This shows how **simple and readable** Python is.`,
        codeSnippet: `print("Hello, World!")`,
        isCompleted: false
      },
      {
        id: 'p7_3',
        title: '7.3 Python Shell',
        content: `The **Python Shell** is an **interactive mode** where:

• Code is executed **line by line**
• Results are shown immediately
• Useful for testing small commands

### Example
\`\`\`python
>>> 5 + 3
8
>>> print("Python")
Python
\`\`\`

**Advantages**: Immediate output; Easy experimentation.
**Limitations**: Not suitable for large programs; Code is not saved permanently.`,
        codeSnippet: `5 + 3\n# In shell, this prints 8 immediately`,
        isCompleted: false
      },
      {
        id: 'p7_4',
        title: '7.4 Running Python from the Console',
        content: `Python programs can also be run using the **system console**.
• **Windows** → Command Prompt / PowerShell
• **macOS / Linux** → Terminal

![Interactive Mode](https://files.realpython.com/media/idle-interactive-mode.6339d95cee95.png)

### Why Use Console Mode
• Faster execution
• Useful for professionals
• Helps understand real execution environment`,
        codeSnippet: `python --version\n# Check version in console`,
        isCompleted: false
      },
      {
        id: 'p7_4_1',
        title: '7.4.1 Opening Console (macOS)',
        content: `### Steps:
1. Open Terminal
2. Type: \`python3\`
3. Python shell starts`,
        codeSnippet: `python3`,
        isCompleted: false
      },
      {
        id: 'p7_4_2',
        title: '7.4.2 Opening Console (Windows)',
        content: `### Steps:
1. Open Command Prompt
2. Type: \`python\`
3. Python shell starts`,
        codeSnippet: `python`,
        isCompleted: false
      },
      {
        id: 'p7_4_3',
        title: '7.4.3 Add Python to PATH',
        content: `**PATH** is an environment variable that allows the system to find Python from any directory.

### Why Add Python to PATH
• Run Python from anywhere
• Avoid “Python not recognized” error

✔ Recommended during installation.`,
        codeSnippet: `# If PATH is set, this works anywhere:\npython`,
        isCompleted: false
      },
      {
        id: 'p7_5',
        title: '7.5 Scripting Mode',
        content: `In **Scripting Mode**, Python programs are:

• Written in \`.py\` files
• Saved permanently
• Executed multiple times

### Difference Between Shell and Script Mode
| Shell Mode | Script Mode |
| :--- | :--- |
| Line by line execution | Full program execution |
| Not saved | Saved as file |
| Testing purpose | Real applications |`,
        codeSnippet: `# hello.py\nprint("This is a script")`,
        isCompleted: false
      },
      {
        id: 'p7_5_1',
        title: '7.5.1 Run from IDLE',
        content: `### Steps:
1. Open IDLE
2. File → New File
3. Write program
4. Save with \`.py\`
5. Run → Run Module`,
        codeSnippet: `print("Running from IDLE")`,
        isCompleted: false
      },
      {
        id: 'p7_5_2',
        title: '7.5.2 Run from Terminal (macOS)',
        content: `\`python3 hello.py\``,
        codeSnippet: `python3 hello.py`,
        isCompleted: false
      },
      {
        id: 'p7_5_3',
        title: '7.5.3 Run from CMD (Windows)',
        content: `\`python hello.py\``,
        codeSnippet: `python hello.py`,
        isCompleted: false
      },
      {
        id: 'p7_5_4',
        title: '7.5.4 Run from Spyder',
        content: `    Steps:
1. Open Spyder
2. Write code
3. Click   Run   button
4. Output appears in console`,
        codeSnippet: `  Spyder Run`,
        isCompleted: false
      },
      {
        id: 'p8',
        title: '8. Basic Python Programming',
        content: `This topic forms the **foundation of Python**. Almost **all programs** are built using these basic concepts.

Python programs are made up of:

• Statements
• Variables
• Data values
• Functions
• Libraries

Python focuses on **clarity and simplicity**, making basic programming easy for beginners.

### 8.1 Basic Python Program
A basic Python program consists of:

1. Input (optional)
2. Processing
3. Output

### Important Rule: Indentation
Python uses **indentation instead of brackets \`{}\`**.

• **Correct**: \`if a > b: print("a is greater")\`
• **Incorrect**: \`if a > b:\` followed by unindented print statement.`,
        codeSnippet: `a = 10\nb = 20\nc = a + b\nprint(c)\n# Simple and clean!`,
        isCompleted: false
      },
      {
        id: 'p8_1_1',
        title: '8.1.1 Get Help in Python',
        content: `Python provides **built-in help functionality**.

### Using help()
\`help(print)\`

Shows function usage, description, and parameters.

### Using dir()
\`dir(str)\`

Displays all methods of string type.

✔ Helpful for **self-learning and debugging**.`,
        codeSnippet: `help(len)\n# Shows help for len function`,
        isCompleted: false
      },
      {
        id: 'p8_2',
        title: '8.2 Variables',
        content: `A **variable** is a name used to store data in memory.

### Creating Variables
\`x = 10\`
\`name = "Rohit"\`

### Key Features
• No need to declare data type
• Type is decided at runtime (**Dynamic Typing**)
• Can change value anytime

### Rules for Naming Variables
• Must start with a letter or underscore
• Cannot start with a number
• No special symbols allowed
• Case-sensitive`,
        codeSnippet: `total_marks = 95\n_validName = True\n# 1invalid = False  # This would fail`,
        isCompleted: false
      },
      {
        id: 'p8_2_1',
        title: '8.2.1 Numbers',
        content: `Python supports different types of numbers.

### Types of Numbers
1. **Integer (\`int\`)**: \`a = 10\`
2. **Floating-point (\`float\`)**: \`b = 3.14\`
3. **Complex (\`complex\`)**: \`c = 2 + 3j\`

### Arithmetic Operations
• Addition: \`+\`
• Subtraction: \`-\`
• Multiplication: \`*\`
• Division: \`/\`
• Modulus: \`%\``,
        codeSnippet: `a = 10\nb = 3\nprint(a % b)\n# Output: 1 (Remainder)`,
        isCompleted: false
      },
      {
        id: 'p8_2_2',
        title: '8.2.2 Strings',
        content: `A **string** is a sequence of characters enclosed in quotes.
• \`'Single'\`
• \`"Double"\`
• \`'''Multi-line'''\`

### String Operations
• **Concatenation**: \`"Hello" + "World"\`
• **Indexing**: \`"Python"[0]\` (Output: P)
• **Slicing**: \`"Python"[0:4]\` (Output: Pyth)

### Default Immutability
Strings **cannot be changed** after creation.`,
        codeSnippet: `word = "Python"\nprint(word[0:2])\n# Output: Py`,
        isCompleted: false
      },
      {
        id: 'p8_2_3',
        title: '8.2.3 String Input',
        content: `Python uses \`input()\` to take input from user.

### Input Always Returns String
To use it as a number, you must convert it.

\`age = input("Enter age: ")\`
\`age = int(age)\``,
        codeSnippet: `# Interactive input:\n# name = input("Your Name?")\nprint("Hello user")`,
        isCompleted: false
      },
      {
        id: 'p8_3',
        title: '8.3 Built-in Functions',
        content: `Python provides many **built-in functions**.

### Common Built-in Functions

| Function | Purpose |
| :--- | :--- |
| \`print()\` | Display output |
| \`input()\` | Take input |
| \`type()\` | Find data type |
| \`len()\` | Length of object |
| \`int()\` | Convert to integer |
| \`float()\` | Convert to float |`,
        codeSnippet: `x = "Python"\nprint(len(x))\n# Output: 6`,
        isCompleted: false
      },
      {
        id: 'p8_4',
        title: '8.4 Standard Library',
        content: `The **Standard Library** is a collection of pre-written modules that come with Python.

### Examples
• **math**: mathematical operations
• **random**: random numbers
• **datetime**: date and time
• **os**: operating system interaction

### Using a Module
\`import math\`
\`print(math.sqrt(25))\`

**Advantages**: Saves time; Reliable; Optimized.`,
        codeSnippet: `import math\nprint(math.pi)`,
        isCompleted: false
      },
      {
        id: 'p8_5',
        title: '8.5 Using Libraries',
        content: `### Module
A single Python file containing functions.

### Package
A collection of modules organized in directories.

### Library
A collection of packages and modules.

### Example
\`from math import sqrt\`
\`print(sqrt(16))\``,
        codeSnippet: `from random import randint\nprint(randint(1, 10))`,
        isCompleted: false
      },
      {
        id: 'p9',
        title: '9. Plotting in Python',
        content: `Plotting means **representing data in graphical form** so that information can be:

• Easily understood
• Quickly analyzed
• Clearly compared

Python provides powerful plotting capability through libraries, the most common being **Matplotlib**.

### 9.1 Introduction to Plotting
Data is often large and complex. Graphs help to:

• Identify patterns
• Observe trends
• Compare values

**Used in**: Data Science, Research, Engineering.`,
        codeSnippet: `import matplotlib.pyplot as plt\nprint("Matplotlib ready!")`,
        isCompleted: false
      },
      {
        id: 'p9_2',
        title: '9.2 Matplotlib Library',
        content: `**Matplotlib** is the **most popular Python library for plotting graphs**.

### What is Matplotlib?
A **data visualization library** to create 2D graphs, charts, and diagrams. It produces **publication-quality graphs**.

### Why Matplotlib is Important
• Easy to learn
• Highly customizable
• Works well with NumPy and Pandas`,
        codeSnippet: `print("Matplotlib makes visualization easy")`,
        isCompleted: false
      },
      {
        id: 'p9_3',
        title: '9.3 Basic Plotting',
        content: `Before plotting, the library must be imported:
\`import matplotlib.pyplot as plt\`

• \`pyplot\`: plotting module
• \`plt\`: alias name

### Simple Line Plot Example
\`\`\`python
import matplotlib.pyplot as plt
x = [1, 2, 3, 4]
y = [10, 20, 30, 40]
plt.plot(x, y)
plt.show()
\`\`\`
• **plot()**: creates line graph
• **show()**: displays graph`,
        codeSnippet: `import matplotlib.pyplot as plt\nplt.plot([1, 2], [10, 20])\n# plt.show() # In a real script`,
        isCompleted: false
      },
      {
        id: 'p9_4',
        title: '9.4 Types of Plots',
        content: `Matplotlib supports various types of plots:

1. **Line Plot**: Shows trends over time
2. **Bar Chart**: Compares categories
3. **Histogram**: Shows data distribution
4. **Scatter Plot**: Shows relationship between variables

### Example: Bar Chart
\`plt.bar(["A", "B"], [70, 85])\`
\`plt.show()\``,
        codeSnippet: `import matplotlib.pyplot as plt\nplt.bar(["A", "B"], [10, 20])`,
        isCompleted: false
      },
      {
        id: 'p9_5',
        title: '9.5 Adding Labels and Title',
        content: `Graphs become meaningful when labels are added.

### Syntax
\`plt.xlabel("X Axis")\`
\`plt.ylabel("Y Axis")\`
\`plt.title("Sample Graph")\`

### Complete Example
\`\`\`python
plt.plot([1, 2, 3], [2, 4, 6])
plt.xlabel("Input")
plt.ylabel("Output")
plt.title("Linear Graph")
plt.show()
\`\`\``,
        codeSnippet: `import matplotlib.pyplot as plt\nplt.title("My Graph")`,
        isCompleted: false
      },
      {
        id: 'p9_6',
        title: '9.6 Subplots',
        content: `**Subplots** allow multiple graphs to be displayed in **one window**.

### Creating Subplots
\`plt.subplot(rows, columns, position)\`

**Example**:
\`plt.subplot(1, 2, 1)\` → 1 row, 2 cols, 1st graph
\`plt.plot(x, y1)\`
\`plt.subplot(1, 2, 2)\` → 1 row, 2 cols, 2nd graph
\`plt.plot(x, y2)\`
\`plt.show()\``,
        codeSnippet: `import matplotlib.pyplot as plt\nplt.subplot(2, 1, 1)\nplt.plot([1, 2], [1, 2])`,
        isCompleted: false
      },
      {
        id: 'p9_7',
        title: '9.7 Advantages & Exercises',
        content: `### 9.7 Advantages of Plotting
• Easy data visualization
• Improves data understanding
• Saves time in analysis
• Professional presentation

### 9.8 Common Errors
• Forgetting \`plt.show()\`
• Mismatched X and Y values
• Not importing matplotlib

### 9.9 Exercises
1. Plot a line graph of numbers 1 to 10.
2. Create a bar chart showing marks of 5 students.
3. Display two graphs using subplots.`,
        codeSnippet: `# Try Exercise 1:\nx = list(range(1, 11))\ny = x\n# plt.plot(x, y)`,
        isCompleted: false
      },

    ]
  },
  {
    id: 'java',
    title: 'Java',
    category: 'Programming',
    icon: 'coffee',
    level: 'Intermediate',
    progress: 5,
    lessons: [
      {
        id: 'j1',
        title: 'Java Intro',
        content: `Java is a popular programming language, created in 1995. It is owned by Oracle, and more than 3 billion devices run Java. It is used for mobile applications (specially Android apps), desktop applications, web applications, web servers and application servers, games, and database connection.\n\nJava works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc). It is one of the most popular programming language in the world. It is easy to learn and simple to use.\n\nIt is open-source and free. It is secure, fast and powerful. It has a huge community support (tens of millions of developers).`,
        codeSnippet: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
        isCompleted: true
      },
      {
        id: 'j2',
        title: 'Java Syntax',
        content: `Every line of code that runs in Java must be inside a class. In our example, we named the class Main. A class should always start with an uppercase first letter.\n\nThe main method is required and you will see it in every Java program: public static void main(String[] args). Any code inside the main() method will be executed.\n\nFor now, just remember that every Java program has a class name which must match the filename, and that every program must contain the main() method.`,
        codeSnippet: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Learning Syntax");\n  }\n}',
        isCompleted: false
      },
      {
        id: 'j3',
        title: 'Java Output',
        content: `The println() method is used to print values or text in Java. You can add as many println() methods as you want. Note that it will add a new line for each method.\n\nYou can also output numbers, and perform mathematical calculations inside the println() method. There is also a print() method, which is similar to println(). The only difference is that it does not insert a new line at the end of the output.`,
        codeSnippet: 'System.out.println("Hello World!");\nSystem.out.println("I am learning Java.");\nSystem.out.println(3 + 3);',
        isCompleted: false
      },
      {
        id: 'j4',
        title: 'Java Comments',
        content: `Comments can be used to explain Java code, and to make it more readable. It can also be used to prevent execution when testing alternative code.\n\nSingle-line comments start with two forward slashes (//). Any text between // and the end of the line is ignored by Java (will not be executed).\n\nMulti-line comments start with /  and ends with  /. Any text between /  and  / will be ignored by Java.`,
        codeSnippet: '// This is a comment\nSystem.out.println("Hello World");\n\n/  The code below will print the words Hello World\nto the screen, and it is amazing  /',
        isCompleted: false
      },
      {
        id: 'j5',
        title: 'Java Variables',
        content: `Variables are containers for storing data values. In Java, there are different types of variables, for example: String (stores text), int (stores integers), float (stores floating point numbers), char (stores single characters), and boolean (stores values with two states).\n\nTo create a variable, you must specify the type and assign it a value. If you don't want others (or yourself) to overwrite existing values, use the final keyword (this will declare the variable as "final" or "constant", which means unchangeable and read-only).`,
        codeSnippet: 'String name = "John";\nint myNum = 15;\nfinal int myConstant = 20;\n// myConstant = 10; // error',
        isCompleted: false
      },
      { id: 'j6', title: 'Java Data Types', content: 'Data types are divided into two groups: Primitive data types - includes byte, short, int, long, float, double, boolean and char. Non-primitive data types - such as String, Arrays and Classes.\n\nA primitive data type specifies the size and type of variable values, and it has no additional methods.', codeSnippet: 'int myNum = 5;\nfloat myFloatNum = 5.99f;\nchar myLetter = \'D\';\nboolean myBool = true;', isCompleted: false },
      { id: 'j7', title: 'Java Type Casting', content: 'Type casting is when you assign a value of one primitive data type to another type. In Java, there are two types of casting: Widening Casting (automatically) - converting a smaller type to a larger type size. Narrowing Casting (manually) - converting a larger type to a smaller size type.', codeSnippet: 'int myInt = 9;\ndouble myDouble = myInt; // Widening\n\ndouble d = 9.78d;\nint i = (int) d; // Narrowing', isCompleted: false },
      { id: 'j8', title: 'Java Operators', content: 'Operators are used to perform operations on variables and values. Java divides the operators into the following groups: Arithmetic operators, Assignment operators, Comparison operators, Logical operators, Bitwise operators.', codeSnippet: 'int sum1 = 100 + 50;\nint sum2 = sum1 + 250;\nint sum3 = sum2 + sum2;', isCompleted: false },
      { id: 'j9', title: 'Java Strings', content: 'A String in Java is actually an object, which contain methods that can perform certain operations on strings. For example, the length of a string can be found with the length() method. There are many other string methods available, for example toUpperCase() and toLowerCase().', codeSnippet: 'String txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";\nSystem.out.println(txt.length());\nSystem.out.println(txt.toLowerCase());', isCompleted: false },
      { id: 'j10', title: 'Java Math', content: 'The Java Math class has many methods that allows you to perform mathematical tasks on numbers. Math.max(x,y) can be used to find the highest value of x and y. Math.min(x,y) can be used to find the lowest value of x and y. Math.sqrt(x) returns the square root of x.', codeSnippet: 'Math.max(5, 10);\nMath.sqrt(64);\nMath.random();', isCompleted: false },
      { id: 'j11', title: 'Java Booleans', content: 'Very often, in programming, you will need a data type that can only have one of two values, like: YES / NO, ON / OFF, TRUE / FALSE. For this, Java has a boolean data type, which can take the values true or false.', codeSnippet: 'boolean isJavaFun = true;\nboolean isFishTasty = false;\nSystem.out.println(10 > 9); // true', isCompleted: false },
      { id: 'j12', title: 'Java If...Else', content: 'Java has the following conditional statements: Use if to specify a block of code to be executed, if a specified condition is true. Use else to specify a block of code to be executed, if the same condition is false. Use else if to specify a new condition to test, if the first condition is false. Use switch to specify many alternative blocks of code to be executed.', codeSnippet: 'if (20 > 18) {\n  System.out.println("20 is greater than 18");\n}', isCompleted: false },
      { id: 'j13', title: 'Java Switch', content: 'Instead of writing many if..else statements, you can use the switch statement. The switch statement selects one of many code blocks to be executed. The switch expression is evaluated once. The value of the expression is compared with the values of each case. If there is a match, the associated block of code is executed.', codeSnippet: 'int day = 4;\nswitch (day) {\n  case 1: System.out.println("Monday"); break;\n  case 4: System.out.println("Thursday"); break;\n}', isCompleted: false },
      { id: 'j14', title: 'Java While Loop', content: 'Loops can execute a block of code as long as a specified condition is true. Loops are handy because they save time, reduce errors, and they make code more readable. The while loop loops through a block of code as long as a specified condition is true.', codeSnippet: 'int i = 0;\nwhile (i < 5) {\n  System.out.println(i);\n  i++;\n}', isCompleted: false },
      { id: 'j15', title: 'Java For Loop', content: 'When you know exactly how many times you want to loop through a block of code, use the for loop instead of a while loop. Statement 1 is executed (one time) before the execution of the code block. Statement 2 defines the condition for executing the code block. Statement 3 is executed (every time) after the code block has been executed.', codeSnippet: 'for (int i = 0; i < 5; i++) {\n  System.out.println(i);\n}', isCompleted: false },
      { id: 'j16', title: 'Java Break/Continue', content: 'The break statement can also be used to jump out of a loop. The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.', codeSnippet: 'for (int i = 0; i < 10; i++) {\n  if (i == 4) break;\n  System.out.println(i);\n}', isCompleted: false },
      { id: 'j17', title: 'Java Arrays', content: 'Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value. To declare an array, define the variable type with square brackets. Array indexes start with 0: [0] is the first element. [1] is the second element, etc.', codeSnippet: 'String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};\nSystem.out.println(cars[0]);', isCompleted: false },
      { id: 'j18', title: 'Java Methods', content: 'A method is a block of code which only runs when it is called. You can pass data, known as parameters, into a method. Methods are used to perform certain actions, and they are also known as functions. Why use methods? To reuse code: define the code once, and use it many times.', codeSnippet: 'public class Main {\n  static void myMethod() {\n    System.out.println("I just got executed!");\n  }\n\n  public static void main(String[] args) {\n    myMethod();\n  }\n}', isCompleted: false },
      { id: 'j19', title: 'Java Parameters', content: 'Information can be passed to methods as parameter. Parameters act as variables inside the method. Parameters are specified after the method name, inside the parentheses. You can add as many parameters as you want, just separate them with a comma.', codeSnippet: 'static void myMethod(String fname) {\n  System.out.println(fname + " Kumar");\n}\n\npublic static void main(String[] args) {\n  myMethod("Rahul");\n}', isCompleted: false },
      { id: 'j20', title: 'Java Recursion', content: 'Recursion is the technique of making a function call itself. This technique provides a way to break complicated problems down into simple problems which are easier to solve. Recursion may be a bit difficult to understand. The best way to figure out how it works is to experiment with it.', codeSnippet: 'public static int sum(int k) {\n  if (k > 0) {\n    return k + sum(k - 1);\n  } else {\n    return 0;\n  }\n}', isCompleted: false },
      { id: 'j21', title: 'Java Enums', content: 'An enum is a special "class" that represents a group of constants (unchangeable variables, like final variables). To create an enum, use the enum keyword (instead of class or interface), and separate the constants with a comma. Note that they should be in uppercase letters.', codeSnippet: 'enum Level {\n  LOW,\n  MEDIUM,\n  HIGH\n}\n\nLevel myVar = Level.MEDIUM;\nSystem.out.println(myVar);', isCompleted: false },
      { id: 'j22', title: 'Java User Input', content: 'The Scanner class is used to get user input, and it is found in the java.util package. To use the Scanner class, create an object of the class and use any of the available methods found in the Scanner class documentation. In our example, we will use the nextLine() method, which is used to read Strings.', codeSnippet: 'import java.util.Scanner;\n\nclass Main {\n  public static void main(String[] args) {\n    Scanner myObj = new Scanner(System.in);\n    String userName = myObj.nextLine();\n    System.out.println("Username is: " + userName);\n  }\n}', isCompleted: false },
      { id: 'j23', title: 'Java Date', content: 'Java does not have a built-in Date class, but we can import the java.time package to work with the date and time API. The package includes many date and time classes. For example: LocalDate, LocalTime, LocalDateTime, DateTimeFormatter.', codeSnippet: 'import java.time.LocalDate;\n\npublic class Main {\n  public static void main(String[] args) {\n    LocalDate myObj = LocalDate.now();\n    System.out.println(myObj);\n  }\n}', isCompleted: false },
      { id: 'j24', title: 'Java ArrayList', content: 'The ArrayList class is a resizable array, which can be found in the java.util package. The difference between a built-in array and an ArrayList in Java, is that the size of an array cannot be modified (if you want to add or remove elements to/from an array, you have to create a new one). While elements can be added and removed from an ArrayList whenever you want.', codeSnippet: 'import java.util.ArrayList;\n\nArrayList<String> cars = new ArrayList<String>();\ncars.add("Volvo");\ncars.add("BMW");\nSystem.out.println(cars);', isCompleted: false },
      { id: 'j25', title: 'Java HashMap', content: 'In the ArrayList chapter, you learned that Arrays store items as an ordered collection, and you have to access them with an index number (int type). A HashMap however, store items in "key/value" pairs, and you can access them by an index of another type (e.g. a String). One object is used as a key (index) to another object (value).', codeSnippet: 'import java.util.HashMap;\n\nHashMap<String, String> capitalCities = new HashMap<String, String>();\ncapitalCities.put("England", "London");\ncapitalCities.put("Germany", "Berlin");\nSystem.out.println(capitalCities);', isCompleted: false }
    ]
  },
  {
    id: 'php',
    title: 'PHP',
    category: 'Backend',
    icon: 'database',
    level: 'Intermediate',
    progress: 0,
    lessons: [
      {
        id: 'ph1',
        title: 'PHP Intro',
        content: `PHP is an acronym for "PHP: Hypertext Preprocessor". It is a widely-used, open source scripting language. PHP scripts are executed on the server. It is free to download and use.\n\nPHP is an amazing and popular language! It is powerful enough to be at the core of the biggest blogging system on the web (WordPress)! It is deep enough to run the largest social network (Facebook)! It is also easy enough to be a beginner's first server side language!\n\nPHP files can contain text, HTML, CSS, JavaScript, and PHP code. PHP code is executed on the server, and the result is returned to the browser as plain HTML.`,
        codeSnippet: '<?php\necho "Hello World!";\n?>',
        isCompleted: false
      },
      {
        id: 'ph2',
        title: 'PHP Install',
        content: `To start using PHP, you can find a web host with PHP and MySQL support, or install a web server on your own PC, and then install PHP and MySQL.\n\nIf your server has activated support for PHP you do not need to do anything. Just create some .php files, place them in your web directory, and the server will automatically parse them for you. You do not need to compile anything or install any extra tools.\n\nBecause PHP is free, most web hosts offer PHP support.`,
        codeSnippet: '<!-- No code, setup XAMPP or WAMP -->',
        isCompleted: false
      },
      {
        id: 'ph3',
        title: 'PHP Syntax',
        content: `A PHP script can be placed anywhere in the document. A PHP script starts with <?php and ends with ?>. The default file extension for PHP files is ".php".\n\nIn PHP, keywords (e.g. if, else, while, echo, etc.), classes, functions, and user-defined functions are NOT case-sensitive. However, all variable names are case-sensitive.\n\nIn the example below, all three echo statements are equal and legal.`,
        codeSnippet: '<?php\nECHO "Hello World!<br>";\necho "Hello World!<br>";\nEcHo "Hello World!<br>";\n?>',
        isCompleted: false
      },
      {
        id: 'ph4',
        title: 'PHP Variables',
        content: `Variables are "containers" for storing information. In PHP, a variable starts with the $ sign, followed by the name of the variable.\n\nA variable name must start with a letter or the underscore character. A variable name cannot start with a number. A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _).\n\nPHP has no command for declaring a variable. It is created the moment you first assign a value to it.`,
        codeSnippet: '<?php\n$txt = "Hello world!";\n$x = 5;\n$y = 10.5;\n?>',
        isCompleted: false
      },
      {
        id: 'ph5',
        title: 'PHP Echo/Print',
        content: `In PHP there are two basic ways to get output: echo and print. echo and print are more or less the same. They are both used to output data to the screen.\n\nThe differences are small: echo has no return value while print has a return value of 1 so it can be used in expressions. echo can take multiple parameters (although such usage is rare) while print can take one argument. echo is marginally faster than print.\n\nThe echo statement can be used with or without parentheses: echo or echo().`,
        codeSnippet: '<?php\necho "<h2>PHP is Fun!</h2>";\necho "Hello world!<br>";\necho "I am about to learn PHP!<br>";\n?>',
        isCompleted: false
      },
      { id: 'ph6', title: 'PHP Data Types', content: 'Variables can store data of different types, and different data types can do different things. PHP supports the following data types: String, Integer, Float (floating point numbers - also called double), Boolean, Array, Object, NULL, Resource.', codeSnippet: '$x = "Hello world!";\n$y = 5966;\n$z = 10.365;', isCompleted: false },
      { id: 'ph7', title: 'PHP Strings', content: 'A string is a sequence of characters, like "Hello world!". strlen() - returns the length of a string. str_word_count() - counts words in a string. strrev() - reverses a string. strpos() - searches for a text within a string. str_replace() - replaces text within a string.', codeSnippet: 'echo strlen("Hello world!");\necho strrev("Hello world!");', isCompleted: false },
      { id: 'ph8', title: 'PHP Numbers', content: 'There are three main numeric types in PHP: Integer, Float, Number Strings. PHP also has some more functions used for numbers: is_int(), is_float(), is_numeric(). PHP Integers are whole numbers, without decimals, between -2147483648 and 2147483647.', codeSnippet: '$x = 5985;\nvar_dump(is_int($x));', isCompleted: false },
      { id: 'ph9', title: 'PHP Math', content: 'PHP has a set of math functions that allows you to perform mathematical tasks on numbers. pi() returns the value of PI. min() and max() functions can be used to find the lowest or highest value in a list of arguments. abs() returns the absolute (positive) value of a number. sqrt() returns the square root of a number.', codeSnippet: 'echo(pi());\necho(min(0, 150, 30, 20, -8, -200));\necho(max(0, 150, 30, 20, -8, -200));', isCompleted: false },
      { id: 'ph10', title: 'PHP Constants', content: 'Constants are like variables except that once they are defined they cannot be changed or undefined. A constant is an identifier (name) for a simple value. The value cannot be changed during the script. A valid constant name starts with a letter or underscore (no $ sign before the constant name). To create a constant, use the define() function.', codeSnippet: 'define("GREETING", "Welcome to SikshaSarovar.com!");\necho GREETING;', isCompleted: false },
      { id: 'ph11', title: 'PHP Operators', content: 'Operators are used to perform operations on variables and values. PHP divides the operators in the following groups: Arithmetic operators, Assignment operators, Comparison operators, Increment/Decrement operators, Logical operators, String operators, Array operators, Conditional assignment operators.', codeSnippet: 'echo $x + $y;\necho $x    $y; // Exponentiation', isCompleted: false },
      { id: 'ph12', title: 'PHP If...Else', content: 'Conditional statements are used to perform different actions based on different conditions. Use if to execute some code only if a specified condition is true. Use if...else to execute some code if a condition is true and another code if that condition is false. Use if...elseif...else to execute different codes for more than two conditions.', codeSnippet: 'if ($t < "20") {\n  echo "Have a good day!";\n} else {\n  echo "Have a good night!";\n}', isCompleted: false },
      { id: 'ph13', title: 'PHP Switch', content: 'The switch statement is used to perform different actions based on different conditions. Use the switch statement to select one of many blocks of code to be executed. The break keyword breaks out of the switch block. The default keyword specifies the code to run if there is no case match.', codeSnippet: 'switch ($favcolor) {\n  case "red": echo "Red!"; break;\n  case "blue": echo "Blue!"; break;\n  default: echo "Neither!";\n}', isCompleted: false },
      { id: 'ph14', title: 'PHP Loops', content: 'Loops are used to execute the same block of code again and again, as long as a certain condition is true. while - loops through a block of code as long as the specified condition is true. do...while - loops through a block of code once, and then repeats the loop as long as the specified condition is true. for - loops through a block of code a specified number of times. foreach - loops through a block of code for each element in an array.', codeSnippet: '$x = 1;\nwhile($x <= 5) {\n  echo "Number: $x <br>";\n  $x++;\n}', isCompleted: false },
      { id: 'ph15', title: 'PHP Functions', content: 'The real power of PHP comes from its functions. PHP has more than 1000 built-in functions, and besides those, you can create your own custom functions. A user-defined function declaration starts with the word function. A function name must start with a letter or an underscore. Function names are NOT case-sensitive.', codeSnippet: 'function writeMsg() {\n  echo "Hello world!";\n}\n\nwriteMsg();', isCompleted: false },
      { id: 'ph16', title: 'PHP Arrays', content: 'An array stores multiple values in one single variable. In PHP, the array() function is used to create an array. There are three types of arrays: Indexed arrays - Arrays with a numeric index. Associative arrays - Arrays with named keys. Multidimensional arrays - Arrays containing one or more arrays.', codeSnippet: '$cars = array("Volvo", "BMW", "Toyota");\necho "I like " . $cars[0];', isCompleted: false },
      { id: 'ph17', title: 'PHP Superglobals', content: 'Some predefined variables in PHP are "superglobals", which means that they are always accessible, regardless of scope - and you can access them from any function, class or file without having to do anything special. The PHP superglobal variables are: $GLOBALS, $_SERVER, $_REQUEST, $_POST, $_GET, $_FILES, $_ENV, $_COOKIE, $_SESSION.', codeSnippet: 'echo $_SERVER[\'PHP_SELF\'];\necho $_SERVER[\'SERVER_NAME\'];', isCompleted: false },
      { id: 'ph18', title: 'PHP Forms', content: 'The PHP superglobals $_GET and $_POST are used to collect form-data. Both GET and POST create an array. This array holds key/value pairs, where keys are the names of the form controls and values are the input data from the user. Both GET and POST are treated as $_GET and $_POST. These are superglobals, which means that they are always accessible, regardless of scope.', codeSnippet: '<form action="welcome.php" method="post">\nName: <input type="text" name="name"><br>\nE-mail: <input type="text" name="email"><br>\n<input type="submit">\n</form>', isCompleted: false },
      { id: 'ph19', title: 'PHP Validation', content: 'The first thing you should do when processing HTML forms is to pass all variables through PHP\'s htmlspecialchars() function. When you use the htmlspecialchars() function; then if a user tries to submit a script in a text field, it will not be executed, because it will be saved as HTML escaped code. This is important for security.', codeSnippet: '$name = test_input($_POST["name"]);\nfunction test_input($data) {\n  $data = trim($data);\n  $data = stripslashes($data);\n  $data = htmlspecialchars($data);\n  return $data;\n}', isCompleted: false },
      { id: 'ph20', title: 'PHP MySQL', content: 'MySQL is the most popular database system used with PHP. MySQL is a database system used on the web. MySQL is a database system that runs on a server. MySQL is ideal for both small and large applications. MySQL is very fast, reliable, and easy to use. MySQL uses standard SQL.', codeSnippet: '$servername = "localhost";\n$username = "username";\n$password = "password";\n\n$conn = new mysqli($servername, $username, $password);\nif ($conn->connect_error) {\n  die("Connection failed: " . $conn->connect_error);\n}\necho "Connected successfully";', isCompleted: false },
      { id: 'ph21', title: 'PHP Date and Time', content: 'The PHP Date() function formats a timestamp to a more readable date and time. Syntax: date(format,timestamp). required format specifies the format of the timestamp. optional timestamp specifies a timestamp. Default is the current date and time.', codeSnippet: 'echo "Today is " . date("Y/m/d") . "<br>";\necho "Today is " . date("Y.m.d") . "<br>";\necho "Today is " . date("Y-m-d") . "<br>";\necho "Today is " . date("l");', isCompleted: false },
      { id: 'ph22', title: 'PHP Include', content: 'The include (or require) statement takes all the text/code/markup that exists in the specified file and copies it into the file that uses the include statement. Including files is very useful when you want to include the same PHP, HTML, or text on multiple pages of a website.', codeSnippet: '<html>\n<body>\n\n<h1>Welcome to my home page!</h1>\n<?php include \'footer.php\';?>\n\n</body>\n</html>', isCompleted: false },
      { id: 'ph23', title: 'PHP File Handling', content: 'File handling is an important part of any web application. You often need to open and process a file for different tasks. PHP has several functions for creating, reading, uploading, and editing files. The readfile() function reads a file and writes it to the output buffer.', codeSnippet: '<?php\necho readfile("webdictionary.txt");\n?>', isCompleted: false },
      { id: 'ph24', title: 'PHP Cookies', content: 'A cookie is often used to identify a user. A cookie is a small file that the server embeds on the user\'s computer. Each time the same computer requests a page with a browser, it will send the cookie too. With PHP, you can both create and retrieve cookie values.', codeSnippet: '<?php\n$cookie_name = "user";\n$cookie_value = "John Doe";\nsetcookie($cookie_name, $cookie_value, time() + (86400   30), "/"); // 86400 = 1 day\n?>', isCompleted: false },
      { id: 'ph25', title: 'PHP Sessions', content: 'A session is a way to store information (in variables) to be used across multiple pages. Unlike a cookie, the information is not stored on the users computer. Session variables solve this problem by storing user information to be used across multiple pages (e.g. username, favorite color, etc). By default, session variables last until the user closes the browser.', codeSnippet: '<?php\n// Start the session\nsession_start();\n\n// Set session variables\n$_SESSION["favcolor"] = "green";\n$_SESSION["favanimal"] = "cat";\necho "Session variables are set.";\n?>', isCompleted: false }
    ]
  },
  {
    id: 'ai',
    title: 'AI Fundamentals',
    category: 'Advanced Tech',
    icon: 'brain',
    level: 'Advanced',
    progress: 0,
    lessons: [
      {
        id: 'ai1',
        title: 'What is AI?',
        content: `Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.\n\nThe ideal characteristic of artificial intelligence is its ability to rationalize and take actions that have the best chance of achieving a specific goal. A subset of artificial intelligence is machine learning, which refers to the concept that computer programs can automatically learn from and adapt to new data without being assisted by humans.\n\nAI is already all around us, from the self-driving cars of the future to the automated assistants like Siri and Alexa that we use every day.`,
        codeSnippet: '"""\nAI is more of a field of study than a specific code block,\nbut here is how you might represent an agent conceptually:\n"""\nclass SimpleAI:\n    def perceive(self, environment):\n        return environment.get_state()\n    \n    def decide(self, state):\n        return "Optimal Action"\n\nai = SimpleAI()',
        isCompleted: false
      },
      {
        id: 'ai2',
        title: 'History of AI',
        content: `The journey of AI began in the mid-20th century. In 1950, Alan Turing published "Computing Machinery and Intelligence," where he proposed the Turing Test as a measure of machine intelligence. The actual term "Artificial Intelligence" was coined at the Dartmouth Conference in 1956.\n\nOver the decades, AI has seen periods of extreme optimism followed by "AI winters" where funding and interest dried up due to unmet expectations. However, with the advent of Big Data and massive computing power in the 2010s, AI saw a massive resurgence specifically through Deep Learning.\n\nToday, we are in an era of Generative AI, where models can create text, images, and code that are often indistinguishable from human-generated content.`,
        codeSnippet: '# 1950: Turing Test proposed\n# 1956: AI term coined\n# 1997: Deep Blue beats Kasparov\n# 2012: AlexNet wins ILSVRC',
        isCompleted: false
      },
      {
        id: 'ai3',
        title: 'Types of AI',
        content: `AI can be classified into several types based on its capabilities and functionality. The most common classification is Narrow AI vs. General AI vs. Super AI.\n\nNarrow AI (Weak AI): Designed and trained for a specific task. For example, virtual assistants, image recognition software, and translation tools. All current AI is Narrow AI.\n\nGeneral AI (Strong AI): AI that would possess the ability to understand, learn, and apply knowledge in a way that is indistinguishable from a human across any intellectual task. This is currently theoretical.\n\nSuper AI: A hypothetical level of AI that surpasses human intelligence in every field.`,
        codeSnippet: 'types = ["Narrow AI", "General AI", "Super AI"]\nprint(f"Current State: {types[0]}")',
        isCompleted: false
      },
      {
        id: 'ai4',
        title: 'Intelligent Agents',
        content: `An intelligent agent is an autonomous entity which observes through sensors and acts upon an environment using actuators (i.e. it is an agent) and directs its activity towards achieving goals.\n\nIntelligent agents may also learn or use knowledge to achieve their goals. They may be very simple or very complex: a reflex machine such as a thermostat is an intelligent agent, as is a human being, as is a community of human beings working together towards a goal.\n\nAgents are categorized into several types: Simple Reflex Agents, Model-based Reflex Agents, Goal-based Agents, and Utility-based Agents.`,
        codeSnippet: 'class ThermostatAgent:\n    def act(self, current_temp, target_temp):\n        if current_temp < target_temp:\n            return "Turn On Heater"\n        return "Turn Off"',
        isCompleted: false
      },
      {
        id: 'ai5',
        title: 'Problem Solving',
        content: `Many AI tasks can be framed as search problems. A search problem consists of a state space, a start state, goal states, and a set of actions that lead from one state to another.\n\nUninformed search strategies (like Breadth-First Search and Depth-First Search) have no additional information about states beyond that provided in the problem definition. They can only generate successors and distinguish a goal state from a non-goal state.\n\nInformed search strategies (like A  Search) use problem-specific knowledge (heuristics) to find solutions more efficiently by estimating the cost to reach the goal.`,
        codeSnippet: 'def breadth_first_search(problem):\n    node = Node(problem.initial_state)\n    if problem.goal_test(node.state): return node\n    frontier = [node]\n    # ... logic continues',
        isCompleted: false
      },
      { id: 'ai6', title: 'Adversarial Search', content: 'Adversarial search problems, also known as games, are those in which two or more agents have conflicting goals. In such environments, the agents must consider the actions of their opponents. The most common algorithm for this is Minimax. Minimax is a recursive algorithm for choosing the next move in an n-player game, usually a two-player, zero-sum game.', codeSnippet: 'def minimax(node, depth, maximizingPlayer):\n  if depth == 0 or node.is_terminal():\n    return node.value\n  # ...', isCompleted: false },
      { id: 'ai7', title: 'Knowledge Base', content: 'A knowledge base is a technology used to store complex structured and unstructured information used by a computer system. The goal of a knowledge base is to enable machines to act as if they have "common sense" or "expertise" by encoding facts and rules in a way that can be processed by an inference engine.', codeSnippet: 'KB = []\nKB.append("Man(Socrates)")\nKB.append("Man(x) => Mortal(x)")', isCompleted: false },
      { id: 'ai8', title: 'Uncertainty', content: 'In many real-world situations, agents must act in the face of uncertainty. This uncertainty arises from partial observability, nondeterminism, and ignorance. Probability theory provides the formal basis for dealing with uncertainty in AI systems.', codeSnippet: 'P(A_given_B) = (P(B_given_A)   P(A)) / P(B)', isCompleted: false },
      { id: 'ai9', title: 'Bayesian Networks', content: 'A Bayesian network is a probabilistic graphical model that represents a set of variables and their conditional dependencies via a directed acyclic graph (DAG). Bayesian networks are ideal for taking an event that occurred and predicting the likelihood that any one of several possible known causes was the contributing factor.', codeSnippet: 'import pgmpy\n# define nodes and edges', isCompleted: false },
      { id: 'ai10', title: 'NLP Intro', content: 'Natural Language Processing (NLP) is a subfield of linguistics, computer science, and artificial intelligence concerned with the interactions between computers and human language, in particular how to program computers to process and analyze large amounts of natural language data.', codeSnippet: 'import nltk\ntext = "SikshaSarovar is great"\ntokens = nltk.word_tokenize(text)', isCompleted: false },
      { id: 'ai11', title: 'Sentiment Analysis', content: 'Sentiment analysis is the use of natural language processing, text analysis, computational linguistics, and biometrics to systematically identify, extract, quantify, and study affective states and subjective information.', codeSnippet: 'from textblob import TextBlob\nblob = TextBlob("I love coding!")\nprint(blob.sentiment.polarity)', isCompleted: false },
      { id: 'ai12', title: 'Computer Vision', content: 'Computer vision is a field of artificial intelligence that trains computers to interpret and understand the visual world. Using digital images from cameras and videos and deep learning models, machines can accurately identify and classify objects — and then react to what they "see."', codeSnippet: 'import cv2\nimg = cv2.imread(\'photo.jpg\')\n# process image', isCompleted: false },
      { id: 'ai13', title: 'Robotics', content: 'Robotics is an interdisciplinary branch of computer science and engineering. Robotics involves design, construction, operation, and use of robots. The goal of robotics is to design machines that can help and assist humans. Many robots are powered by AI algorithms to navigate and interact with the world.', codeSnippet: 'robot.move_to(x=10, y=20)\nif robot.detect_obstacle():\n  robot.stop()', isCompleted: false },
      { id: 'ai14', title: 'Neural Networks', content: 'Neural networks, also known as artificial neural networks (ANNs) or simulated neural networks (SNNs), are a subset of machine learning and are at the heart of deep learning algorithms. Their name and structure are inspired by the human brain, mimicking the way that biological neurons signal to one another.', codeSnippet: 'import tensorflow as tf\nmodel = tf.keras.Sequential([\n  tf.keras.layers.Dense(10, activation=\'relu\')\n])', isCompleted: false },
      { id: 'ai15', title: 'Deep Learning', content: 'Deep learning is part of a broader family of machine learning methods based on artificial neural networks with representation learning. Learning can be supervised, semi-supervised or unsupervised. Deep learning architectures such as deep neural networks, deep belief networks, deep reinforcement learning, recurrent neural networks and convolutional neural networks have been applied to many fields.', codeSnippet: 'model.add(tf.keras.layers.Conv2D(32, 3, activation=\'relu\'))', isCompleted: false },
      { id: 'ai16', title: 'Expert Systems', content: 'In artificial intelligence, an expert system is a computer system emulating the decision-making ability of a human expert. Expert systems are designed to solve complex problems by reasoning through bodies of knowledge, represented mainly as if–then rules rather than through conventional procedural code.', codeSnippet: 'IF fever == TRUE AND cough == TRUE THEN diagnosis = "Cold"', isCompleted: false },
      { id: 'ai17', title: 'Fuzzy Logic', content: 'Fuzzy logic is a form of many-valued logic in which the truth values of variables may be any real number between 0 and 1 both inclusive. It is employed to handle the concept of partial truth, where the truth value may range between completely true and completely false.', codeSnippet: 'is_tall = 0.8 # 80% true', isCompleted: false },
      { id: 'ai18', title: 'Genetic Algorithms', content: 'In computer science and operations research, a genetic algorithm (GA) is a metaheuristic inspired by the process of natural selection that belongs to the larger class of evolutionary algorithms (EA). Genetic algorithms are commonly used to generate high-quality solutions to optimization and search problems by relying on biologically inspired operators such as mutation, crossover and selection.', codeSnippet: 'population = crossover(parents)\nmutate(population)', isCompleted: false },
      { id: 'ai19', title: 'Ethics in AI', content: 'As AI systems become more prevalent, ethical considerations around their development and deployment become crucial. Topics include algorithmic bias, privacy, transparency, and the potential impact of AI on employment and society.', codeSnippet: '# Principle: Fairness\n# Principle: Privacy\n# Principle: Accountability', isCompleted: false },
      { id: 'ai20', title: 'Future of AI', content: 'The future of AI holds immense potential and significant challenges. We are looking towards Artificial General Intelligence (AGI), more seamless human-AI collaboration, and the integration of AI into almost every aspect of our lives, from healthcare to entertainment.', codeSnippet: '"""\nAGI remains a future goal.\nFocus on Human-in-the-loop systems.\n"""', isCompleted: false },
      { id: 'ai21', title: 'AI in Healthcare', content: 'Artificial intelligence (AI) in healthcare is the use of complex algorithms and software primarily to estimate human cognition in the analysis of complicated medical data. Specifically, AI is the ability of computer algorithms to approximate conclusions without direct human input.', codeSnippet: 'Data: [Patient Vitals, History]\nAI Model: Risk Prediction', isCompleted: false },
      { id: 'ai22', title: 'AI in Finance', content: 'AI in finance is transforming the industry by enabling better fraud detection, algorithmic trading, and personalized customer service. AI systems can analyze massive amounts of financial data in real-time to identify patterns and anomalies that humans might miss.', codeSnippet: 'if transaction.risk_score > threshold:\n    flag_fraud(transaction)', isCompleted: false },
      { id: 'ai23', title: 'AI in Transportation', content: 'AI is a key driver of innovation in the transportation sector. From self-driving cars to optimized traffic management systems, AI is making transportation safer, more efficient, and more sustainable. Autonomous vehicles use computer vision and sensor fusion to navigate complex environments.', codeSnippet: 'vehicle.detect_objects()\nvehicle.plan_path()', isCompleted: false },
      { id: 'ai24', title: 'AI in Entertainment', content: 'AI is revolutionizing the entertainment industry, from personalized content recommendations on streaming platforms to creating realistic special effects in movies. AI is also being used to compose music, write scripts, and even generate entire video games.', codeSnippet: 'recommendations = model.predict(user_preferences)', isCompleted: false },
      { id: 'ai25', title: 'Generative AI', content: 'Generative AI refers to deep learning models that can generate high-quality text, images, and other content based on the data they were trained on. Models like GPT-4 and DALL-E are examples of generative AI that have captured the public imagination.', codeSnippet: 'prompt = "A futuristic city"\nimage = generate_image(prompt)', isCompleted: false }
    ]
  },
  {
    id: 'ml',
    title: 'Machine Learning',
    category: 'Advanced Tech',
    icon: 'microscope',
    level: 'Advanced',
    progress: 0,
    lessons: [
      {
        id: 'ml1',
        title: 'Intro to ML',
        content: `Machine Learning is a field of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.\n\nIBM defines machine learning as a branch of artificial intelligence and computer science that focuses on the use of data and algorithms to imitate the way that humans learn. It is one of the most exciting technologies that one would have ever come across. As it is evident from the name, it gives the computer that which makes it more similar to humans: The ability to learn.\n\nMachine learning is used in many of the technologies we use today, like speech recognition, image recognition, and recommendation engines.`,
        codeSnippet: 'import pandas as pd\nimport numpy as np\n# Load your dataset\ndata = pd.read_csv("data.csv")',
        isCompleted: false
      },
      {
        id: 'ml2',
        title: 'Supervised Learning',
        content: `Supervised learning is a type of machine learning where the model is trained on a labeled dataset. A labeled dataset is one where the target variable (the thing you want to predict) is already known.\n\nThe goal of supervised learning is to build a mathematical model that can accurately predict the output for new, unseen data based on the patterns it learned from the training data.\n\nExamples of supervised learning tasks include classification (predicting a category, like spam or not spam) and regression (predicting a continuous value, like the price of a house).`,
        codeSnippet: 'from sklearn.model_selection import train_test_split\nX_train, X_test, y_train, y_test = train_test_split(X, y)',
        isCompleted: false
      },
      {
        id: 'ml3',
        title: 'Unsupervised Learning',
        content: `Unsupervised learning is a type of machine learning where the model is trained on an unlabeled dataset. This means the target variable is not provided to the model.\n\nThe goal of unsupervised learning is to find hidden patterns or structures in the data on its own. It is often used for clustering (grouping similar data points together) and association (finding rules that describe large portions of your data).\n\nAn example of unsupervised learning is customer segmentation, where a company groups its customers based on their purchasing behavior without knowing the segments beforehand.`,
        codeSnippet: 'from sklearn.cluster import KMeans\nkmeans = KMeans(n_clusters=3)\nkmeans.fit(X)',
        isCompleted: false
      },
      {
        id: 'ml4',
        title: 'Reinforcement Learning',
        content: `Reinforcement learning is a type of machine learning where an agent learns to make decisions by performing actions in an environment to maximize a reward.\n\nIt is inspired by behavioral psychology, where an agent receives positive or negative feedback based on its actions. Over time, the agent learns to take the actions that lead to the highest cumulative reward.\n\nReinforcement learning is often used in robotics, game playing (like AlphaGo), and navigation systems.`,
        codeSnippet: 'class ReinforcementAgent:\n    def update(self, state, action, reward, next_state):\n        # Update policy based on reward\n        pass',
        isCompleted: false
      },
      {
        id: 'ml5',
        title: 'Data Preprocessing',
        content: `Data preprocessing is a crucial step in the machine learning workflow. Real-world data is often messy, incomplete, and contains errors. Preprocessing involves cleaning and transforming the data into a format that a machine learning model can understand.\n\nCommon preprocessing tasks include handling missing values, encoding categorical variables (converting text into numbers), and scaling numerical features (so they all have a similar range).\n\nWithout proper preprocessing, even the most advanced machine learning algorithms will perform poorly.`,
        codeSnippet: 'from sklearn.preprocessing import StandardScaler\nscaler = StandardScaler()\nX_scaled = scaler.fit_transform(X)',
        isCompleted: false
      },
      {
        // Fix: Completed the missing Lesson object and added the required 'isCompleted' property.
        id: 'ml6',
        title: 'Linear Regression',
        content: 'Linear regression is a linear approach for modelling the relationship between a scalar response and one or more explanatory variables. The relationship is modeled using linear predictor functions whose unknown model parameters are estimated from the data.',
        codeSnippet: 'from sklearn.linear_model import LinearRegression\nmodel = LinearRegression()\nmodel.fit(X_train, y_train)',
        isCompleted: false
      },
      { id: 'ml7', title: 'Decision Trees', content: 'Decision Trees are a type of supervised learning algorithm that is mostly used in classification problems. It works for both categorical and continuous input and output variables. A decision tree is a flowchart-like structure where an internal node represents feature(or attribute), the branch represents a decision rule, and each leaf node represents the outcome.', codeSnippet: 'from sklearn.tree import DecisionTreeClassifier\nclf = DecisionTreeClassifier()\nclf.fit(X_train, y_train)', isCompleted: false },
      { id: 'ml8', title: 'Random Forest', content: 'Random Forest is a popular machine learning algorithm that belongs to the supervised learning technique. It can be used for both Classification and Regression problems in ML. It is based on the concept of ensemble learning, which is a process of combining multiple classifiers to solve a complex problem and to improve the performance of the model.', codeSnippet: 'from sklearn.ensemble import RandomForestClassifier\nclf = RandomForestClassifier(n_estimators=100)\nclf.fit(X_train, y_train)', isCompleted: false },
      { id: 'ml9', title: 'Logistic Regression', content: 'Logistic regression is a statistical model that in its basic form uses a logistic function to model a binary dependent variable, although many more complex extensions exist. In regression analysis, logistic regression (or logit regression) is estimating the parameters of a logistic model.', codeSnippet: 'from sklearn.linear_model import LogisticRegression\nclf = LogisticRegression()\nclf.fit(X_train, y_train)', isCompleted: false },
      { id: 'ml10', title: 'K-Nearest Neighbors', content: 'K-Nearest Neighbors (KNN) is one of the simplest algorithms used in Machine Learning for regression and classification problem. KNN algorithms use data and classify new data points based on similarity measures (e.g. distance function).', codeSnippet: 'from sklearn.neighbors import KNeighborsClassifier\nknn = KNeighborsClassifier(n_neighbors=3)\nknn.fit(X_train, y_train)', isCompleted: false },
      { id: 'ml11', title: 'Support Vector Machines', content: 'Support Vector Machine (SVM) is a supervised machine learning algorithm used for both classification and regression. Though we say regression problems as well its best suited for classification. The objective of the SVM algorithm is to find a hyperplane in an N-dimensional space that distinctly classifies the data points.', codeSnippet: 'from sklearn import svm\nclf = svm.SVC()\nclf.fit(X_train, y_train)', isCompleted: false },
      { id: 'ml12', title: 'Naive Bayes', content: 'Naive Bayes classifiers are a collection of classification algorithms based on Bayes’ Theorem. It is not a single algorithm but a family of algorithms where all of them share a common principle, i.e. every pair of features being classified is independent of each other.', codeSnippet: 'from sklearn.naive_bayes import GaussianNB\ngnb = GaussianNB()\ngnb.fit(X_train, y_train)', isCompleted: false },
      { id: 'ml13', title: 'Model Evaluation', content: 'Model evaluation is an integral part of the model development process. It helps to find the best model that represents our data and how well the chosen model will work in the future. Methods include accuracy, confusion matrix, logarithmic loss, AUC-ROC curve, etc.', codeSnippet: 'from sklearn.metrics import accuracy_score\nprint(accuracy_score(y_test, y_pred))', isCompleted: false },
      { id: 'ml14', title: 'Cross Validation', content: 'Cross-validation is a resampling procedure used to evaluate machine learning models on a limited data sample. The procedure has a single parameter called k that refers to the number of groups that a given data sample is to be split into.', codeSnippet: 'from sklearn.model_selection import cross_val_score\nscores = cross_val_score(model, X, y, cv=5)', isCompleted: false },
      { id: 'ml15', title: 'Hyperparameter Tuning', content: 'Hyperparameter tuning is the problem of choosing a set of optimal hyperparameters for a learning algorithm. A hyperparameter is a parameter whose value is used to control the learning process. Grid Search and Random Search are common methods.', codeSnippet: 'from sklearn.model_selection import GridSearchCV\ngrid = GridSearchCV(estimator, param_grid, cv=3)', isCompleted: false },
      { id: 'ml16', title: 'Gradient Boosting', content: 'Gradient boosting is a machine learning technique for regression and classification problems, which produces a prediction model in the form of an ensemble of weak prediction models, typically decision trees. It builds the model in a stage-wise fashion like other boosting methods do.', codeSnippet: 'from sklearn.ensemble import GradientBoostingClassifier\nclf = GradientBoostingClassifier()\nclf.fit(X_train, y_train)', isCompleted: false },

      // Machine Learning Applications
      {
        id: 'ml-app-intro',
        title: 'ML Applications Overview',
        content: 'Machine learning has a wide range of applications across various industries and fields. From image recognition to healthcare, autonomous vehicles to financial services, ML is transforming how we interact with technology and improving efficiency and decision-making processes. This section explores 10 major application areas where machine learning is making a significant impact.',
        image: MLAppsImg,
        codeSnippet: 'import pandas as pd\nimport numpy as np\nfrom sklearn.model_selection import train_test_split\n\n# Load dataset\ndata = pd.read_csv("data.csv")\nX = data.drop("target", axis=1)\ny = data["target"]\n\n# Split data\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)',
        isCompleted: false
      },
      {
        id: 'ml-image-recognition',
        title: 'Image and Object Recognition',
        content: 'Machine learning algorithms can be trained to recognize and classify images, enabling applications such as facial recognition, object detection, and autonomous driving. Convolutional Neural Networks (CNNs) are particularly effective for image recognition tasks. These systems can identify faces, detect objects in real-time, and enable self-driving cars to perceive their environment.',
        codeSnippet: 'from tensorflow.keras.models import Sequential\nfrom tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense\n\n# Build CNN model\nmodel = Sequential([\n    Conv2D(32, (3, 3), activation=\'relu\', input_shape=(64, 64, 3)),\n    MaxPooling2D(2, 2),\n    Conv2D(64, (3, 3), activation=\'relu\'),\n    MaxPooling2D(2, 2),\n    Flatten(),\n    Dense(128, activation=\'relu\'),\n    Dense(10, activation=\'softmax\')\n])\n\nmodel.compile(optimizer=\'adam\', loss=\'categorical_crossentropy\', metrics=[\'accuracy\'])',
        isCompleted: false
      },
      {
        id: 'ml-nlp',
        title: 'Natural Language Processing (NLP)',
        content: 'Machine learning is used to process and understand human language, enabling applications like sentiment analysis, language translation, chatbots, and speech recognition. NLP allows computers to read, understand, and derive meaning from human languages. It powers virtual assistants, automatic translation services, and text analysis tools.',
        codeSnippet: 'from transformers import pipeline\n\n# Sentiment Analysis\nsentiment_analyzer = pipeline("sentiment-analysis")\nresult = sentiment_analyzer("I love machine learning!")\nprint(result)  # [{"label": "POSITIVE", "score": 0.9998}]\n\n# Text Translation\ntranslator = pipeline("translation_en_to_fr")\nresult = translator("Hello, how are you?")\nprint(result)  # [{"translation_text": "Bonjour, comment allez-vous?"}]',
        isCompleted: false
      },
      {
        id: 'ml-recommender',
        title: 'Recommender Systems',
        content: 'Machine learning algorithms can analyze user preferences and behavior to provide personalized recommendations, such as movie or product recommendations on platforms like Netflix or Amazon. Recommender systems use collaborative filtering, content-based filtering, or hybrid approaches to suggest items users are likely to enjoy based on their past behavior and similar users\' preferences.',
        codeSnippet: 'from sklearn.neighbors import NearestNeighbors\nimport numpy as np\n\n# User-item matrix (users x items)\nuser_item_matrix = np.array([\n    [5, 3, 0, 1],\n    [4, 0, 0, 1],\n    [1, 1, 0, 5],\n    [0, 0, 5, 4]\n])\n\n# Collaborative Filtering\nmodel = NearestNeighbors(metric=\'cosine\', algorithm=\'brute\')\nmodel.fit(user_item_matrix)\n\n# Find similar users\ndistances, indices = model.kneighbors([user_item_matrix[0]], n_neighbors=3)\nprint(f"Similar users: {indices}")',
        isCompleted: false
      },
      {
        id: 'ml-fraud-detection',
        title: 'Fraud Detection',
        content: 'Machine learning can detect patterns and anomalies in large datasets to identify fraudulent transactions or activities in industries like banking, insurance, and cybersecurity. By analyzing historical transaction data, ML models can identify unusual patterns that may indicate fraud, such as unusual spending patterns, geographic anomalies, or suspicious account activities.',
        codeSnippet: 'from sklearn.ensemble import IsolationForest\nimport pandas as pd\n\n# Load transaction data\ntransactions = pd.read_csv("transactions.csv")\nfeatures = transactions[[\'amount\', \'time\', \'location_id\']]\n\n# Train anomaly detection model\nmodel = IsolationForest(contamination=0.01, random_state=42)\nmodel.fit(features)\n\n# Predict anomalies (-1 = fraud, 1 = normal)\npredictions = model.predict(features)\ntransactions[\'is_fraud\'] = predictions == -1\n\nprint(f"Detected {transactions[\'is_fraud\'].sum()} fraudulent transactions")',
        isCompleted: false
      },
      {
        id: 'ml-predictive-analytics',
        title: 'Predictive Analytics',
        content: 'Machine learning models can analyze historical data to make predictions and forecasts about future events, such as predicting customer churn, stock market trends, or equipment failure in predictive maintenance. These models identify patterns in historical data and use them to forecast future outcomes, enabling businesses to make proactive decisions.',
        codeSnippet: 'from sklearn.ensemble import RandomForestClassifier\nimport pandas as pd\n\n# Customer churn prediction\ndata = pd.read_csv("customer_data.csv")\nX = data[[\'tenure\', \'monthly_charges\', \'total_charges\', \'num_services\']]\ny = data[\'churned\']\n\n# Train model\nmodel = RandomForestClassifier(n_estimators=100, random_state=42)\nmodel.fit(X_train, y_train)\n\n# Predict churn probability\nchurn_probability = model.predict_proba(X_test)[:, 1]\nprint(f"Churn risk: {churn_probability[0]:.2%}")',
        isCompleted: false
      },
      {
        id: 'ml-healthcare',
        title: 'Healthcare Applications',
        content: 'Machine learning is being used for various healthcare applications, including disease diagnosis, medical image analysis, personalized treatment recommendations, drug discovery, and genomics. ML models can analyze medical images to detect diseases like cancer, predict patient outcomes, discover new drugs, and provide personalized treatment plans based on patient data and genetic information.',
        codeSnippet: 'from sklearn.ensemble import GradientBoostingClassifier\nimport numpy as np\n\n# Disease diagnosis model\npatient_features = np.array([\n    [45, 120, 80, 5.5, 200],  # age, bp_sys, bp_dia, glucose, cholesterol\n])\n\n# Train diagnostic model\nmodel = GradientBoostingClassifier()\nmodel.fit(X_train, y_train)\n\n# Predict disease probability\ndisease_prob = model.predict_proba(patient_features)[0][1]\nprint(f"Disease probability: {disease_prob:.2%}")',
        isCompleted: false
      },
      {
        id: 'ml-autonomous-vehicles',
        title: 'Autonomous Vehicles',
        content: 'Machine learning is a crucial technology for developing self-driving cars and autonomous vehicles. It enables the vehicles to perceive and interpret their surroundings, make decisions, and navigate safely. ML models process data from cameras, lidar, radar, and other sensors to detect objects, recognize traffic signs, predict pedestrian behavior, and plan safe routes.',
        codeSnippet: 'import cv2\nimport numpy as np\n\n# Lane detection for autonomous driving\ndef detect_lanes(image):\n    # Convert to grayscale\n    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)\n    \n    # Apply Gaussian blur\n    blur = cv2.GaussianBlur(gray, (5, 5), 0)\n    \n    # Canny edge detection\n    edges = cv2.Canny(blur, 50, 150)\n    \n    # Hough transform for line detection\n    lines = cv2.HoughLinesP(edges, 1, np.pi/180, 100, minLineLength=100, maxLineGap=50)\n    \n    return lines\n\n# Process camera feed\nimage = cv2.imread(\'road.jpg\')\nlanes = detect_lanes(image)',
        isCompleted: false
      },
      {
        id: 'ml-financial-services',
        title: 'Financial Services',
        content: 'Machine learning is employed in financial institutions for credit scoring, fraud detection, algorithmic trading, risk assessment, and customer segmentation. ML models analyze financial data to assess creditworthiness, execute trades automatically, predict market trends, evaluate investment risks, and segment customers for targeted marketing.',
        codeSnippet: 'from sklearn.linear_model import LogisticRegression\nimport pandas as pd\n\n# Credit scoring model\napplicant_data = pd.DataFrame({\n    \'income\': [50000, 75000, 30000],\n    \'debt_ratio\': [0.3, 0.2, 0.6],\n    \'credit_history\': [750, 680, 600],\n    \'employment_years\': [5, 10, 2]\n})\n\n# Train credit scoring model\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\n\n# Predict credit approval\ncredit_score = model.predict_proba(applicant_data)[:, 1]\nprint(f"Approval probability: {credit_score}")',
        isCompleted: false
      },
      {
        id: 'ml-robotics',
        title: 'Robotics',
        content: 'Machine learning algorithms are used in robotics for perception, control, and decision-making tasks. They enable robots to adapt to changing environments, learn new tasks, and interact with humans. ML allows robots to recognize objects, navigate complex environments, manipulate objects with precision, and learn from demonstrations.',
        codeSnippet: 'import gym\nimport numpy as np\n\n# Reinforcement Learning for robot control\nenv = gym.make(\'RoboticArm-v0\')\n\nclass RobotAgent:\n    def __init__(self, state_size, action_size):\n        self.q_table = np.zeros((state_size, action_size))\n        self.learning_rate = 0.1\n        self.discount_factor = 0.95\n    \n    def choose_action(self, state, epsilon=0.1):\n        if np.random.random() < epsilon:\n            return env.action_space.sample()  # Explore\n        return np.argmax(self.q_table[state])  # Exploit',
        isCompleted: false
      },
      {
        id: 'ml-industrial-automation',
        title: 'Industrial Automation',
        content: 'Machine learning helps optimize manufacturing processes, predictive maintenance, quality control, and supply chain management by analyzing large amounts of data collected from sensors and machines. ML models can predict equipment failures before they occur, detect defects in products, optimize production schedules, and improve supply chain efficiency.',
        codeSnippet: 'from sklearn.ensemble import RandomForestRegressor\nimport pandas as pd\n\n# Predictive maintenance model\nsensor_data = pd.DataFrame({\n    \'temperature\': [75, 82, 95, 105],\n    \'vibration\': [0.5, 0.7, 1.2, 1.8],\n    \'pressure\': [100, 105, 110, 120],\n    \'runtime_hours\': [1000, 1500, 2000, 2500]\n})\n\n# Train failure prediction model\nmodel = RandomForestRegressor(n_estimators=100)\nmodel.fit(X_train, y_train)\n\n# Predict remaining useful life\nremaining_life = model.predict(sensor_data)\nprint(f"Equipment will fail in {remaining_life[0]:.0f} hours")\n\n# Schedule maintenance\nif remaining_life[0] < 100:\n    print("⚠️ Schedule maintenance immediately!")',
        isCompleted: false
      }
    ]
  }
];
