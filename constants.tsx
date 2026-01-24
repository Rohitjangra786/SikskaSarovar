
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
import cOverview from './components/courses/Foundations of C & C++/Overview.png';
import cMindmap from './components/courses/Foundations of C & C++/mindmap.png';
import javaMindmap from './components/courses/Java Full Course/javamindmap.png';
import javaOverview from './components/courses/Java Full Course/overview.png';
import { phpCourse } from './constants/phpCourseData';

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
    id: 'c-programming',
    title: 'Foundation of C & C++',
    category: 'Programming',
    icon: 'terminal',
    level: 'Beginner',
    progress: 0,
    lessons: [
      {
        id: 'c-overview',
        title: 'Unit 1: Overview',
        content: `### Overview of Foundation of C & C++

This course provides a strong foundation in C and C++ programming languages, covering everything from basic syntax to object-oriented concepts.

### Visual Overview
Below is the visual overview and mind map for the course.`,
        image: cOverview,
        mindMapImage: cMindmap,
        isCompleted: false
      },
      {
        id: 'c-intro',
        title: 'Introduction to C',
        content: `### Introduction to C Language
C is a general-purpose programming language created by Dennis Ritchie at the Bell Laboratories in 1972. It is a very popular language, despite being old. The main reason for its popularity is because it is a fundamental language in the field of computer science.

### Features of C Language
• It is one of the most popular programming languages in the world
• If you know C, you will have no problem learning other popular programming languages such as Java, Python, C++, C#, etc, as the syntax is similar
• If you know C, you will understand how computer memory works
• C is very fast, compared to other programming languages, like Java and Python
• C is very versatile; it can be used in both applications and technologies

### Difference between C and C++
C++ was developed as an extension of C, and both languages have almost the same syntax. The main difference between C and C++ is that C++ supports classes and objects, while C does not.

### C Syntax
\`\`\`c
#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}
\`\`\`
• \`#include <stdio.h>\` is a header file library that lets us work with input and output functions, such as \`printf()\`. Header files add functionality to C programs.
• Another thing that always appear in a C program is \`main()\`. This is called a function. Any code inside its curly brackets \`{}\` will be executed.
• \`printf()\` is a function used to output/print text to the screen. In our example, it will output "Hello World!".
• \`return 0\` ends the \`main()\` function.

### Input/Output
**printf()**
In C programming, \`printf()\` is one of the main output function. The function sends formatted output to the screen.

**scanf()**
The \`scanf\` (scan formatted) function reads data from the keyboard.
Syntax: \`scanf("format string", &variable);\``,
        codeSnippet: '#include <stdio.h>\n\nint main() {\n  printf("Hello World!");\n  return 0;\n}',
        isCompleted: false
      },
      {
        id: 'c-variables',
        title: 'Variables & Data Types',
        content: `### Common Format Specifiers
These specifiers tell the functions what type of data is being handled:
• \`%d\`: Integer (e.g., 5, -10)
• \`%f\`: Float / Decimal (e.g., 3.14)
• \`%c\`: Single Character (e.g., 'A')
• \`%s\`: String / Array of characters
• \`%lf\`: Double (larger decimal)

### Character I/O
**putchar()**
Declaration: \`int putchar(int char)\`
\`putchar()\` function is used to write a character on standard output/screen.
Usage: \`putchar(char);\`, where char is a character variable/value.

**getchar()**
Declaration: \`int getchar(void)\`
\`getchar()\` function is used to get/read a character from keyboard input.

### C++ Basics (Transition)
Since C++ is derived from C, many concepts overlap. C++ added Object Oriented Programming features.

### Variables
Variables are containers for storing data values.
Syntax: \`type variableName = value;\`

**Rules for Naming Variables:**
• Allowed Characters: Names can only contain letters (A-Z, a-z), digits (0-9), and underscores (_).
• Starting Character: A name must begin with a letter or an underscore. It cannot start with a digit.
• Case Sensitivity: Variable names are case-sensitive. \`age\` and \`Age\` are treated as different variables.
• No Special Characters or Spaces: Not allowed.
• Reserved Keywords: Cannot use keywords like \`int\`, \`float\`, \`return\`.

### Constants
When you do not want others (or yourself) to change existing variable values, use the \`const\` keyword.
\`const int myNum = 15;\`

### Data Types
• \`int\`: Integer (4 bytes)
• \`float\`: Floating point number (4 bytes)
• \`double\`: Double floating point (8 bytes)
• \`char\`: Character (1 byte)
• \`bool\`: Boolean (1 byte) - mainly C++
• \`string\`: Text - C++ uses \`std::string\`, C uses char arrays.

**Auto Keyword (C++)**
Automatically detects the type of a variable.
\`auto a = 5;\` // inferred as int

**Type Conversion**
• Implicit: Automatic conversion by compiler.
• Explicit: Manual casting by programmer.`,
        codeSnippet: '#include <stdio.h>\n\nint main() {\n  int myNum = 15;\n  float myFloat = 5.99;\n  char myLetter = \'D\';\n  printf("%d\\n", myNum);\n  printf("%f\\n", myFloat);\n  printf("%c\\n", myLetter);\n  return 0;\n}',
        isCompleted: false
      },
      {
        id: 'c-operators',
        title: 'Operators & Control Flow',
        content: `### Keywords
Reserved words that have special meanings (e.g., \`int\`, \`float\`, \`main\`, \`break\`).

### Operators
**Arithmetic Operators:** \`+\`, \`-\`, \`*\`, \`/\`, \`%\`, \`++\`, \`--\`
**Assignment Operators:** \`=\`, \`+=\`, \`-=\`, \`*=\`, \`/=\`, \`%=\`
**Comparison Operators:** \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\` (Return 1 for true, 0 for false)
**Logical Operators:** \`&&\` (AND), \`||\` (OR), \`!\` (NOT)

### Conditional Statements
**if Statement**
\`\`\`c
if (condition) {
  // code to be executed if condition is true
}
\`\`\`

**else Statement**
\`\`\`c
if (condition) {
  // true block
} else {
  // false block
}
\`\`\`

**else if Statement**
Check multiple conditions.

**Nested If**
If inside an if.

**Switch Statement**
Select one of many code blocks to be executed.
\`\`\`c
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
\`\`\`
• \`break\`: Stops execution inside the switch block.
• \`default\`: Runs if no case matches.

### Loops
**While Loop**
Executes as long as condition is true (Entry Controlled).

**For Loop**
Used when iterations are known.
Syntax: \`for (initialization; condition; increment/decrement) { ... }\`

**Do-While Loop**
Executes code block at least once before checking condition (Exit Controlled).

**Continue**
Breaks one iteration in the loop and continues with the next.

**Goto**
Provides unconditional jump to a labeled statement.`,
        codeSnippet: '#include <stdio.h>\n\nint main() {\n  int i;\n  for (i = 0; i < 5; i++) {\n    if (i == 3) {\n      continue;\n    }\n    printf("%d\\n", i);\n  }\n  return 0;\n}',
        isCompleted: false
      },
      {
        id: 'c-functions',
        title: 'Functions & Arrays',
        content: `### Functions
A reusable block of code that performs a specific task.
**Definition:**
\`\`\`c
return_type function_name(parameter_list) {
   // body
}
\`\`\`
• **Return Type**: Data type of returned value.
• **Parameters**: Placeholders for values passed to function.
• **Calling**: Transfer control to function.

**Arguments**
• **Formal Arguments**: Variables declared in function definition.
• **Actual Arguments**: Values passed during function call.

**Macros**
Symbolic name or constant defined using \`#define\`.
\`#define pi 3.14\`

**Static Variable**
Preserves value between function calls.
\`static int a = 5;\`

**Call by Value vs Reference**
• **Call by Value**: Copy of value passed. Changes do not affect original.
• **Call by Reference**: Address passed. Changes affect original.

### Arrays
Store multiple values of same data type.
\`int a[6] = {12, 4, 5, 8, 9, 2};\`

**Looping Array**
\`\`\`c
for (int i=0; i<size; i++) {
    printf("%d\\n", a[i]);
}
\`\`\`

**2D Array**
Matrix with rows and columns.
\`int a[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};\`

**Passing Array to Function**
\`void show(int a[], int size) { ... }\``,
        codeSnippet: '#include <stdio.h>\n\nint sum(int k) {\n  if (k > 0) {\n    return k + sum(k - 1);\n  } else {\n    return 0;\n  }\n}\n\nint main() {\n  int result = sum(10);\n  printf("%d", result);\n  return 0;\n}',
        isCompleted: false
      },
      {
        id: 'c-pointers',
        title: 'Pointers',
        content: `### Pointers
A variable that stores the address of another variable.
Definition: \`int *a = &b;\`
• \`*\` (Dereference operator): Access value at address.
• \`&\` (Address-of operator): Get address of variable.

**Null Pointer**
Points to nothing. \`int *a = NULL;\`

**Double Pointer**
Pointer to a pointer.
\`int **c = &a;\`

**Pointers and Arrays**
Arrays can be manipulated using pointers. Array name decays to pointer to first element.

**Passing Pointer to Function**
Allows function to modify original variable.
\`\`\`c
void pointer(int *b) {
    *b += 5;
}
\`\`\``,
        codeSnippet: '#include <stdio.h>\n\nvoid swap(int *x, int *y) {\n  int temp = *x;\n  *x = *y;\n  *y = temp;\n}\n\nint main() {\n  int a = 10, b = 20;\n  swap(&a, &b);\n  printf("a=%d, b=%d", a, b);\n  return 0;\n}',
        isCompleted: false
      },
      {
        id: 'c-structures',
        title: 'Structures & Unions',
        content: `### Structures
Group related variables of different types.
\`\`\`c
struct person {
    int id;
    char name[50];
    int age;
};
\`\`\`
**Accessing Members:** \`p1.id\`
**Passing to Function:** \`void show(struct person p)\`

### Unions
Similar to structure but all members share same memory location. Size is equal to largest member.
\`\`\`c
union car {
    int id;
    int year;
};
\`\`\`

### Enum
Group of constants.
\`enum colors { red, blue, green };\``,
        codeSnippet: '#include <stdio.h>\n\nstruct Person {\n  char name[50];\n  int age;\n  float salary;\n};\n\nint main() {\n  struct Person p1 = {"Rahul", 25, 50000.0};\n  printf("Name: %s\\n", p1.name);\n  return 0;\n}',
        isCompleted: false
      },
      {
        id: 'c-oops',
        title: 'OOP Concepts (C++)',
        content: `### Classes and Objects
**Class**: User-defined blueprint. Encapsulates data and methods.
**Object**: Instance of a class.

\`\`\`cpp
class Student {
public:
    int id;
    void display() {
        cout << id;
    }
};
\`\`\`

### Member Functions
• **Non-static**: Normal functions.
• **Static**: Belong to class, not object.
• **Const**: Cannot modify data members.
• **Inline**: Code inserted at call site.

### Constructor & Destructor
**Constructor**: Special method to initialize object. Same name as class.
• Default, Parameterized, Copy.
**Destructor**: Cleans up when object goes out of scope. \`~ClassName()\`.

### Access Modifiers
• **Private**: Accessible only within class.
• **Public**: Accessible everywhere.
• **Protected**: Accessible in class and derived classes.`,
        codeSnippet: '#include <iostream>\nusing namespace std;\n\nclass MyClass {\n  public:\n    void myMethod() {\n      cout << "Hello World!";\n    }\n};\n\nint main() {\n  MyClass myObj;\n  myObj.myMethod();\n  return 0;\n}',
        isCompleted: false
      },
      {
        id: 'c-files',
        title: 'File Handling',
        content: `### File Handling
Reading from and writing to files.
• \`ofstream\`: Write to file.
• \`ifstream\`: Read from file.
• \`fstream\`: Read and write.

**Modes:**
• \`ios::in\`: Read
• \`ios::out\`: Write
• \`ios::app\`: Append

**Example:**
\`\`\`cpp
ofstream outFile("output.txt");
outFile << "Hello File";
outFile.close();
\`\`\``,
        codeSnippet: '#include <iostream>\n#include <fstream>\nusing namespace std;\n\nint main() {\n  ofstream MyFile("filename.txt");\n  MyFile << "Files can be tricky, but fun enough!";\n  MyFile.close();\n  return 0;\n}',
        isCompleted: false
      }
    ]
  },
  {
    id: 'html',
    title: 'HTML',
    category: 'Web Development',
    icon: 'layout',
    level: 'Beginner',
    progress: 0,
    lessons: [
      {
        id: 'h-intro-env',
        title: '1. Web Concepts & Environment',
        content: `### Web Design

**Definition**: Web design is the process of creating websites. It encompasses several different aspects, including webpage layout, content production, and graphic design.

### The Internet vs. The WWW
Many people use the terms "Internet" and "World Wide Web" (WWW) interchangeably, but they are different things.

#### Definition
*   **The Internet**: A massive network of networks. It connects millions of computers globally. It is the **hardware** (cables, routers, servers).
*   **The World Wide Web (WWW)**: A way of accessing information over the medium of the Internet. It is the **software** (pages, sites, links).

#### Difference Table
| Feature | The Internet | The World Wide Web (WWW) |
| :--- | :--- | :--- |
| **Nature** | Hardware (Network of Networks) | Software (Information Space) |
| **Origin** | Late 1960s (ARPANET) | 1989 (Tim Berners-Lee) |
| **Function** | Connects computers | Connects documents/pages |
| **Protocol** | TCP/IP | HTTP/HTTPS |

### Web Page
**Definition**: A web page (or webpage) is a document for the World Wide Web that is identified by a unique Uniform Resource Locator (URL) and is written in HTML.
*   **Website**: A collection of related web pages.

### Front End vs Back End

**Front End**: Front-end developers focus on designing the physical appearance of websites with front-end programming languages. The visual aspect of a website is the result of front-end development — including fonts, colors, layout, and graphics.
*   **Technology Used**: HTML, CSS, JavaScript.

**Back End**: Back-end developers create the structure or logic of a website by using server-side programming languages. They write code that tells the website how to bring the front-end programming languages alive in the browser.
*   **Technology Used**: Python, Java, Ruby, PHP.

### Scripting Types
**Client-Side Scripting**: Scripting that runs in the user's browser (e.g., JavaScript).
*   Enhances user experience instantly (alerts, validation).
*   Minimizes server requests.
*   Uses HTML/CSS/JS.

**Server-Side Scripting**: Scripting that runs on the web server (e.g., PHP, Node.js).
*   Handles databases and customizes content.
*   Essential for dynamic sites (e-commerce, logins).

### Website Types
**Static Website**:
*   Prebuilt source code (HTML/CSS/JS).
*   No server-side processing or database interaction.
*   Fast and low cost, but content is fixed.

**Dynamic Website**:
*   Generated at runtime based on user demand.
*   Interacts with databases.
*   Slower but allows updates and personalization.

### Responsiveness
It is called **responsive web design** when you use CSS and HTML to resize, hide, shrink, enlarge, or move the content to make it look good on any screen (desktops, tablets, phones).

### Setting Up Environment (VS Code)
1.  **Download**: Search "VS Code download" and get the installer for your OS.
2.  **Install**: Run installer, accept license, choose paths.
3.  **Launch**: Open VS Code from Start menu.

**File Creation**:
*   Create new file: \`Ctrl+N\`
*   Save file: \`Ctrl+S\` (Save as \`.html\`)`,
        codeSnippet: '<!-- Save your file as name.html -->\n<!DOCTYPE html>\n<html>...</html>',
        isCompleted: false
      },
      {
        id: 'h-history',
        title: '2. HTML History & Evolution',
        content: `### Origin
HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It was initially developed by **Sir Tim Berners-Lee** in late 1991 at CERN.
*   **Motivation**: To allow scientists to share research papers and documents electronically across different computer systems.
*   **Result**: It laid the foundation for the World Wide Web (WWW).

### Evolution Timeline
HTML has undergone significant changes to support multimedia, scripting, and complex applications.

*   **1991 - HTML 1.0**: Created by Tim Berners-Lee. Deeply basic, text-oriented, included tags like \`<h1>\` and \`<p>\` but no images or tables.
*   **1995 - HTML 2.0**: The first standard version. Added forms (\`<input>\`) which made the web interactive.
*   **1997 - HTML 3.2**: Recommended by W3C. Added tables, applets, and text-flow around images, but suffered from browser compatibility issues (Netscape vs IE).
*   **1999 - HTML 4.01**: A major milestone. It separated structure (HTML) from presentation (CSS), cleaning up the code.
*   **2000 - XHTML 1.0**: A stricter, XML-based version of HTML. It required perfect syntax (e.g., all tags must be closed, lowercase attributes).
*   **2004 - WHATWG**: The Web Hypertext Application Technology Working Group formed to evolve HTML when W3C focused on XHTML 2.0.
*   **2014 - HTML5**: published as a W3C Recommendation. It introduced semantic elements (\`<header>\`, \`<article>\`), multimedia (\`<video>\`, \`<audio>\`), and APIs (Geolocation, Canvas).

### Role of W3C
The **World Wide Web Consortium (W3C)** is the international standards organization for the World Wide Web.
*   **Function**: To develop protocols and guidelines (like HTML, CSS) that ensure long-term growth of the Web.
*   **Goal**: Ensure that all browsers display web pages consistently.`,
        codeSnippet: '<!-- HTML has evolved from simple text to rich media -->',
        isCompleted: false
      },
      {
        id: 'h-intro-def',
        title: '3. HTML Introduction',
        content: `### Definition Breakdown
**HTML** stands for **HyperText Markup Language**. Let's break it down:

*   **HyperText**: refers to "Text within Text". It is text that contains links to other texts (hyperlinks). It allows users to jump from one document to another non-linearly.
*   **Markup**: refers to the "tags" or comments used to annotate the text. These tags tell the browser how to structure and display the content (e.g., "This text is a heading", "This text is bold").
*   **Language**: refers to the set of rules (syntax) that must be followed to write the code so computers can understand it.

### Core Structure Explained
Every HTML document follows a strict tree-like structure.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Page Title</title>
</head>
<body>
    <h1>Welcome</h1>
    <p>This is content.</p>
</body>
</html>
\`\`\`

1.  **\`<!DOCTYPE html>\`**: This is **not a tag**, but an instruction to the browser. It tells the browser that the document type is **HTML5**. Without this, browsers might render the page in "Quirks Mode" (compatibility mode for old pages).
2.  **\`<html>\`**: The **root element** of the page. All other elements are descendants of this tag. The \`lang\` attribute (e.g., \`lang="en"\`) declares the language of the page for screen readers and search engines.
3.  **\`<head>\`**: Contains **metadata** (information about the page) that is **not visible** to the user. It includes the title, character set, styles, and scripts.
4.  **\`<body>\`**: Contains the **visible content** of the web page. Everything you see in the browser window—headings, paragraphs, images, links—must be inside this tag.`,
        codeSnippet: '<!DOCTYPE html>\n<html>\n<head>\n<title>My First Webpage</title>\n</head>\n<body>\n  Hello World!\n</body>\n</html>',
        isCompleted: false
      },
      {
        id: 'h-head',
        title: '4. Head Section Elements',
        content: `The \`<head>\` element is a container for metadata and resources. It serves as the "brain" of the webpage, defining properties that affect how the page loads and behaves.

### 1. The Title Tag \`<title>\`
*   **Definition**: Defines the title of the HTML document.
*   **Visibility**: It is NOT shown on the page itself, but in the **browser's title bar** or **tab**.
*   **Importance**:
    *   Essential for **SEO** (Search Engine Optimization).
    *   Displayed in search engine results.
    *   Used as the name when adding a page to **Favorites/Bookmarks**.

### 2. The Meta Tag \`<meta>\`
Meta tags provide metadata about the HTML document. They are always empty tags.
*   **Character Set**: \`<meta charset="UTF-8">\`
    *   Specifies the character encoding. **UTF-8** covers almost all characters and symbols in the world.
*   **Viewport**: \`<meta name="viewport" content="width=device-width, initial-scale=1.0">\`
    *   Crucial for **Responsive Design**. It tells the browser to set the width of the page to follow the screen-width of the device (mobile-friendly).
*   **Description**: \`<meta name="description" content="Free web tutorials">\`
    *   A short summary of the page, often used by search engines in snippets.

### 3. The Link Tag \`<link>\`
*   **Definition**: Defines a relationship between the current document and an external resource.
*   **Primary Use**: Linking **External CSS** files.
    *   \`<link rel="stylesheet" href="styles.css">\`
*   **Icon**: Linking a Favicon (tab icon).
    *   \`<link rel="icon" href="favicon.ico">\`

### 4. The Style Tag \`<style>\`
*   Used to define **internal CSS** (styles) for a single HTML page.
*   Placed inside the \`<head>\` section.
    *   \`<style> body { background-color: powderblue; } </style>\`

### 5. The Script Tag \`<script>\`
*   Used to define client-side JavaScript.
*   Can contain the script code directly or point to an external source file.
    *   \`<script src="myscript.js"></script>\`
*   *Note*: While often placed in the \`<head>\`, scripts are sometimes placed at the end of \`<body>\` to improve page load speed.`,
        codeSnippet: '<head>\n  <title>My Page</title>\n  <meta charset="UTF-8">\n  <link rel="stylesheet" href="styles.css">\n</head>',
        isCompleted: false
      },
      {
        id: 'h-tags-types',
        title: '5. Types of Tags',
        content: `There are two main types of tags in HTML:

### 1. Container Tags (Paired Tags)
*   **Definition**: Tags that have both an **opening** (<tag>) and a **closing** (</tag>) tag. Content is placed between them.
*   **Purpose**: To contain text or other tags.
*   **Examples**:
    *   \`<html>...</html>\` (The root container)
    *   \`<p>This is a paragraph</p>\`
    *   \`<title>Page Title</title>\`
    *   \`<h1>Main Heading</h1>\`

### 2. Empty Tags (Void Elements)
*   **Definition**: Tags that have **only an opening tag**. They do not have a closing tag or content inside them.
*   **Characteristics**: They usually perform a stand-alone action (like inserting a line break or image).
*   **Examples**:
    *   \`<br>\`: Inserts a single line break.
    *   \`<hr>\`: Creates a thematic break (horizontal line).
    *   \`<img>\` Embeds an image.
    *   \`<input>\`: Creates an input field.

### Comparison Table
| Feature | Container Tags | Empty Tags |
| :--- | :--- | :--- |
| **Parts** | Opening & Closing | Opening only |
| **Content** | Holds text/tags | No content |
| **Syntax** | \`<tag>...</tag>\` | \`<tag>\` |`,
        codeSnippet: '<p>This is a container tag.</p>\n<hr> <!-- This is an empty tag -->',
        isCompleted: false
      },
      {
        id: 'h-comments',
        title: '6. HTML Comments',
        content: `### Purpose of Comments
Comments are text snippets inserted into the code that are **ignored by the browser**. They are not displayed to the user but are visible in the "View Source" code.

**Syntax**:
\`<!-- This is a comment -->\`

### Uses of Comments
1.  **Documentation**: Explaining complex logic or sections of code for future reference (or for other developers).
    *   \`<!-- Navigation Bar Section -->\`
2.  **Debugging**: Temporarily "commenting out" lines of code to isolate errors without deleting them.
    *   \`<!-- <input type="text" name="broken_field"> -->\`
3.  **Reminders**: Leaving "TODO" notes for unfinished tasks.

### Rules
*   Comments can span multiple lines.
*   You cannot nest comments (put a comment inside another comment).`,
        codeSnippet: '<!-- This is a hidden comment -->\n<p>This is visible text.</p>',
        isCompleted: false
      },
      {
        id: 'h-headings',
        title: '7. Heading Tags',
        content: `### Purpose of Headings
Headings are used to define the **titles and subtitles** of a webpage. They provide a structural hierarchy, similar to a book's Table of Contents.

### The Hierarchy (H1 to H6)
HTML offers six levels of heading tags. \`<h1>\` is the most important, and \`<h6>\` is the least important.

*   **\`<h1>\`**: **Main Title**. Should be used **only once** per page to define the main topic.
*   **\`<h2>\`**: **Major Section Headings**. Used to divide the page into main content areas.
*   **\`<h3>\`**: **Sub-sections**. Used under H2.
*   **\`<h4>\` - \`<h6>\`**: Used for less important sub-sub-sections.

### Importance for Search Engines (SEO)
Search engines (like Google) use headings to index the structure and content of your web pages.
*   **Rule**: Use headings for structure, NOT just to make text BIG or BOLD. Use CSS for styling.

**Syntax**:
\`\`\`html
<h1>Main Topic (e.g., HTML Tutorial)</h1>
  <h2>Chapter 1: Intro</h2>
    <h3>What is HTML?</h3>
  <h2>Chapter 2: Elements</h2>
\`\`\``,
        codeSnippet: '<h1>Main Heading</h1>\n<h2>Sub Heading</h2>\n<h3>Small Heading</h3>',
        isCompleted: false
      },
      {
        id: 'h-paragraphs',
        title: '8. Paragraph Tag',
        content: `### Paragraphs

The \`<p>\` tag defines a **paragraph**. It is the most common element for text content.

### Characteristics
1.  **Block-Level Element**: A paragraph always starts on a new line and takes up the full width available.
2.  **Automatic Margins**: Browsers automatically add white space (margin) before and after a paragraph.

### Behavior with Whitespace
HTML ignores extra spaces and line breaks within the code.
*   If you type 10 spaces, the browser displays only 1.
*   If you press "Enter" 5 times in the code, the browser displays it on the same line.

**Example of Whitespace collapse**:
\`\`\`html
<p>
  This      text       contains
  many       spaces     and
  lines.
</p>
\`\`\`
*Output*: "This text contains many spaces and lines."

### Line Break Tag \`<br>\`

To force a line break *without* starting a new paragraph (and without extra margin), use the **\`<br>\`** tag.
\`<p>Line 1<br>Line 2</p>\`

### Horizontal Rule \`<hr>\`

The \`<hr>\` tag defines a thematic break in content, typically displayed as a hormonal line. Used to separate chapters or topics.`,
        codeSnippet: '<p>Lorem ipsum dolor sit amet...</p>',
        isCompleted: false
      },
      {
        id: 'h-formatting',
        title: '9. Text Formatting',
        content: `HTML contains several tags dedicated to defining the **visual appearance** of text. These tags control how text *looks*, but do not necessarily convey importance.

### Physical Style Tags
*   **\`<b>\` (Bold)**: Makes text bold. Use for visual emphasis where importance is not implied.
*   **\`<i>\` (Italic)**: Makes text italic. Use for alternate voice or technical terms.
*   **\`<u>\` (Underline)**: Underlines text. *Avoid usage*, as it confuses users who think it is a link.
*   **\`<s>\` (Strikethrough)**: Draws a line through text (e.g., old price).
*   **\`<small>\`**: Displays text in a smaller font size (e.g., copyright notes).

### Text Marking Tags
*   **\`<mark>\`**: Highlights text (usually yellow background). Useful for search results or highlighting.
*   **\`<del>\`**: Represents deleted or removed text.
*   **\`<ins>\`**: Represents inserted or added text (usually underlined).

**Example**:
\`The <mark>highlighted</mark> word is clear.\``,
        codeSnippet: '<p><b>Bold</b>, <i>Italic</i>, <u>Underline</u></p>',
        isCompleted: false
      },
      {
        id: 'h-semantic-formatting',
        title: '10. Semantic Formatting',
        content: `### Difference Between Visual and Semantic
*   **Visual tags** (\`<b>\`, \`<i>\`) only change the *look*.
*   **Semantic tags** (\`<strong>\`, \`<em>\`) describe the *meaning* (semantics) of the text to the browser and the developer.

### Key Semantic Tags

#### 1. Strong Importance \`<strong>\`
*   **Function**: Defines text with strong importance.
*   **Visual**: Typically displayed as **bold**.
*   **Semantic**: Screen readers will announce this text with extra stress or deeper tone.
*   **Usage**: Warnings, serious notes.

#### 2. Emphasized Text \`<em>\`
*   **Function**: Defines emphasized text.
*   **Visual**: Typically displayed as *italic*.
*   **Semantic**: Screen readers change voice inflection to emphasize the word.
*   **Usage**: Stressing a specific word ("I *love* HTML").

#### 3. Preformatted Text \`<pre>\`
*   **Function**: Tells the browser to display text **exactly as written** in the HTML source.
*   **Behavior**: Preserves both **spaces** and **line breaks**.
*   **Font**: Usually displayed in a fixed-width (monospaced) font like Courier.
*   **Usage**: To display code snippets or poetry.

\`\`\`html
<pre>
    Line   1
      Line   2 (Indented)
</pre>
\`\`\``,
        codeSnippet: '<strong>Important Warning!</strong>\n<pre>\n Code block here\n</pre>',
        isCompleted: false
      },
      {
        id: 'h-sub-sup',
        title: '11. Subscript & Superscript',
        content: `### Definition

Subscript and Superscript tags are used to specific formatting where text appears smaller and either below or above the normal line of type.

### 1. Subscript \`<sub>\`
*   **Definition**: The \`<sub>\` tag defines subscript text. Subscript text appears **half a character below** the normal line.
*   **Common Uses**:
    *   **Chemical Formulas**: H₂O (Water), CO₂ (Carbon Dioxide).
    *   **Math**: Base numbers like X₁ or log₂.
*   **Example**:
    \`H<sub>2</sub>O\` → H₂O

### 2. Superscript \`<sup>\`
*   **Definition**: The \`<sup>\` tag defines superscript text. Superscript text appears **half a character above** the normal line.
*   **Common Uses**:
    *   **Mathematics**: Powers and Exponents (E = mc²).
    *   **Ordinals**: Dates (4ᵗʰ of July).
*   **Example**:
    \`E = mc<sup>2</sup>\` → E = mc²`,
        codeSnippet: 'H<sub>2</sub>O\nE = mc<sup>2</sup>',
        isCompleted: false
      },
      {
        id: 'h-anchors',
        title: '12. Anchor Tag',
        content: `### Definition

The \`<a>\` (Anchor) tag is the most essential tag in HTML. It **defines a hyperlink**, which is used to link from one page to another.

### key Attribute: \`href\`
*   **href** stands for **Hypertext REFerence**.
*   It specifies the **destination URL** of the link.
*   Without \`href\`, the \`<a>\` tag is just a placeholder and is not clickable.

### Types of URLs
1.  **Absolute URL**: A full web address starting with \`https://\`.
    *   Use when linking to another website.
    *   Example: \`href="https://www.google.com"\`
2.  **Relative URL**: A local path to a file within the same website.
    *   Use when linking to your own pages.
    *   Example: \`href="about.html"\` or \`href="images/logo.png"\`

### Other Uses
*   **Mailto**: Opens the user's email program.
    *   \`<a href="mailto:info@example.com">Send Email</a>\`
*   **Tel**: Triggers a phone call (mobile devices).
    *   \`<a href="tel:+1234567890">Call Us</a>\`
*   **ID Jump**: Jumps to a specific section on the same page.
    *   \`<a href="#section1">Go to Section 1</a>\``,
        codeSnippet: '<a href="https://google.com">Go to Google</a>',
        isCompleted: false
      },
      {
        id: 'h-target',
        title: '13. Target Attribute',
        content: `### Definition

The **\`target\`** attribute specifies **where to open the linked document**.

### Attribute Values
1.  **\`_self\`** (Default): Opens the link in the **same window/tab** as it was clicked. This is standard behavior for internal links.
2.  **\`_blank\`**: Opens the link in a **new window or tab**.
    *   **Best Practice**: Use when linking to external websites (like Google or Wikipedia) so users don't lose your page.
3.  **\`_parent\`**: Opens the linked document in the parent frame (used with iframes).
4.  **\`_top\`**: Opens the linked document in the full body of the window (breaks out of iframes).

### Security Note (The \`_blank\` vulnerability)
When using \`target="_blank"\`, always add \`rel="noopener noreferrer"\` to prevent the new page from accessing your page's internal data (a security risk known as "tabnabbing").
*   **Safe Syntax**:
    \`<a href="https://example.com" target="_blank" rel="noopener noreferrer">External Link</a>\``,
        codeSnippet: '<a href="https://sikshasarovar.com" target="_blank">Visit Us</a>',
        isCompleted: false
      },
      {
        id: 'h-images',
        title: '14. Image Tag',
        content: `### Definition
The \`<img>\` tag is used to embed an image into a web page.
*   **Type**: It is an **empty tag** (it contains attributes only, and does not have a closing tag).

### Key Attributes
1.  **\`src\` (Source)**: Specifies the path (URL) to the image.
    *   Can be **Absolute** (\`https://site.com/img.jpg\`) or **Relative** (\`folder/img.jpg\`).
2.  **\`alt\` (Alternate Text)**: Describes the image content.
    *   **Accessibility**: Screen readers read this text to blind users.
    *   **Failure**: Shown if the image fails to load.
    *   **SEO**: Helps search engines understand the image.
    *   *Rule*: Always include \`alt\` text!
3.  **\`width\` and \`height\`**: Defines the size of the image in pixels.
    *   Example: \`width="500" height="600"\`

### Common Image Formats
*   **JPEG/JPG**: Best for photographs.
*   **PNG**: Best for graphics with transparent backgrounds.
*   **SVG**: Scalable vector graphics (icons, logos).
*   **GIF**: Animated images.`,
        codeSnippet: '<img src="flower.jpg" alt="A beautiful flower">',
        isCompleted: false
      },
      {
        id: 'h-image-links',
        title: '15. Image & Link Integration',
        content: `### Concept

Images do not have to be static. You can make an image clickable (act as a button) by nesting the \`<img>\` tag **inside** an \`<a>\` tag.

### How It Works
1.  Open an anchor tag: \`<a href="...">\`
2.  Place the image tag inside: \`<img src="...">\`
3.  Close the anchor tag: \`</a>\`

### Example Code
\`\`\`html
<a href="https://www.google.com">
  <img src="google-logo.png" alt="Go to Google" width="100" height="50">
</a>
\`\`\`

### UX Best Practice
*   **Border**: In older browsers, clickable images had a blue border. Use CSS \`img { border: none; }\` to remove it.
*   **Cursor**: The mouse cursor automatically changes to a "hand" icon when hovering over a linked image, indicating interactivity.`,
        codeSnippet: '<a href="home.html"><img src="home-icon.png" alt="Home"></a>',
        isCompleted: false
      },
      {
        id: 'h-list-ul',
        title: '16. Unordered Lists',
        content: `### Definition

An **unordered list** is a collection of related items that have no specific order (sequence does not matter). The items are typically marked with bullets.

### Syntax
*   **\`<ul>\`**: Defines the container for the list.
*   **\`<li>\`**: Defines each "List Item".

### Styling Attributes
The \`type\` attribute represents the bullet style (Note: styling is usually done with CSS now).
*   **\`disc\`**: Default black circle.
*   **\`circle\`**: Empty circle.
*   **\`square\`**: Filled square.
*   **\`none\`**: No bullets (often used for navigation menus).

### Nested Lists

You can put a list inside another list item to create a sub-list.
\`\`\`html
<ul>
  <li>Fruits
    <ul>
      <li>Apple</li>
      <li>Banana</li>
    </ul>
  </li>
  <li>Vegetables</li>
</ul>
\`\`\``,
        codeSnippet: '<ul>\n  <li>Apple</li>\n  <li>Mango</li>\n</ul>',
        isCompleted: false
      },
      {
        id: 'h-list-ol',
        title: '17. Ordered Lists',
        content: `### Definition

An **ordered list** is used when the sequence of items is important (e.g., recipes, instructions, ranking). Items are automatically numbered.

### Syntax
*   **\`<ol>\`**: Defines the ordered list.
*   **\`<li>\`**: Defines each list item.

### Attributes
1.  **\`type\` Attribute**: Controls the marker style.
    *   \`1\`: Numbers (1, 2, 3) - **Default**.
    *   \`A\`: Uppercase letters (A, B, C).
    *   \`a\`: Lowercase letters (a, b, c).
    *   \`I\`: Uppercase Roman numerals (I, II, III).
    *   \`i\`: Lowercase Roman numerals (i, ii, iii).

2.  **\`start\` Attribute**: Specifies the start value of the first list item.
    *   \`<ol start="50">\` starts numbering from 50.

3.  **\`reversed\` Attribute**: Reverses the numbering order (e.g., 3, 2, 1).
    *   \`<ol reversed>\`

### Example
\`\`\`html
<ol type="A" start="3">
  <li>Item C</li>
  <li>Item D</li>
</ol>
\`\`\``,
        codeSnippet: '<ol type="A">\n  <li>Item One</li>\n  <li>Item Two</li>\n</ol>',
        isCompleted: false
      },
      {
        id: 'h-list-dl',
        title: '18. Description Lists',
        content: `### Definition

A **Description List** (formerly Definition List) is a list of terms, with a description of each term. It is excellent for **glossaries**, **metadata** (key-value pairs), or **FAQs**.

### Tags
*   **\`<dl>\` (Description List)**: The wrapper container.
*   **\`<dt>\` (Description Term)**: The name or term being defined.
*   **\`<dd>\` (Description Data)**: The definition or description of the term.

### Structure

One \`<dt>\` can have multiple \`<dd>\` elements, or vice versa.

### Example
\`\`\`html
<dl>
  <dt>HTML</dt>
  <dd>Standard markup language for Web pages.</dd>
  <dt>CSS</dt>
  <dd>Language for styling Web pages.</dd>
</dl>
\`\`\``,
        codeSnippet: '<dl>\n  <dt>Coffee</dt>\n  <dd>Black hot drink</dd>\n</dl>',
        isCompleted: false
      },
      {
        id: 'h-div',
        title: '19. Div Tag',
        content: `### Definition
      
The \`<div>\` (Division) tag is a **generic block-level container**. It has no semantic meaning (it doesn't tell the browser "this is a header" or "this is an article").

### Usage
*   **Grouping**: Grouping elements together to apply a common style or layout.
*   **Layout**: Used heavily with CSS (Flexbox, Grid) to build page structures/columns.
*   **Separation**: Visually separating content sections.

### Best Practices
*   Use \`<div>\` only when no other **semantic element** (like \`<main>\`, \`<article>\`, \`<nav>\`) is appropriate.
*   Always try to use a class or id with a div to give it meaning.
    *   \`<div class="user-profile">\`

**Syntax**:
\`\`\`html
<div class="card">
  <h2>Title</h2>
  <p>Box content.</p>
</div>
\`\`\``,
        codeSnippet: '<div style="background-color: lightgray;">\n  <h3>Box Content</h3>\n</div>',
        isCompleted: false
      },
      {
        id: 'h-section',
        title: '20. Section & Inline Tags',
        content: `### Definition
        
Semantic tags are tags that clearly describe their meaning to both the browser and the developer.

### Semantic Sectioning Tags
Since HTML5, we have specific tags that act like \`<div>\` but carry meaning:

*   **\`<section>\`**: Defines a thematic grouping of content, typically with a heading.
*   **\`<article>\`**: A self-contained, independent piece of content (blog post, news item).
*   **\`<header>\`**: Header of a page or section.
*   **\`<footer>\`**: Footer of a page or section.
*   **\`<nav>\`**: Contains navigation links.
*   **\`<aside>\`**: Sidebar or content tangentially related to the main content.
*   **\`<main>\`**: Specifies the main content of the document.
*   **\`<figure>\`**: Groups media content like images, diagrams, or illustrations.
*   **\`<figcaption>\`**: Provides a caption for a \`<figure>\` element.
*   **\`<details>\`**: Defines additional details that the user can view or hide.
*   **\`<summary>\`**: Visible heading for the \`<details>\` element.
*   **\`<time>\`**: Represents a specific time or date.
*   **\`<mark>\`**: Highlights or marks text for reference.
*   **\`<address>\`**: Provides contact information for the author or owner.


### Block vs Inline: The Core Concept
Every HTML element has a default display value.

**1. Block-level Elements**:
*   Start on a **new line**.
*   Take up the **full width** available.
*   **Examples**: \`<div>\`, \`<p>\`, \`<h1>\`-\`<h6>\`, \`<ul>\`, \`<li>\`, \`<section>\`.

**2. Inline Elements**:
*   Do **NOT** start on a new line.
*   Take only as much width as necessary.
*   **Examples**: \`<span>\`, \`<a>\`, \`<img>\`, \`<b>\`, \`<strong>\`.

### The \`<span>\` Tag
*   \`<span>\` is the **inline** equivalent of \`<div>\`.
*   Used to style a *part* of a text without breaking the line.
    *   \`<p>My <span style="color:red">red</span> text.</p>\``,
        codeSnippet: '<span>Inline 1</span><span>Inline 2</span>\n<div>Block 1</div><div>Block 2</div>',
        isCompleted: false
      },
      {
        id: 'h-tables',
        title: '21. Table Structure',
        content: `### Definition

HTML Tables allow web developers to arrange data into rows and columns.

### Core Structure
*   **\`<table>\`**: The root container.
*   **\`<thead>\`**: Groups header content (used for printing/scrolling).
*   **\`<tbody>\`**: Groups the body content.
*   **\`<tfoot>\`**: Groups footer content (e.g., totals).
*   **\`<tr>\`** (Table Row): Defines a row of cells.
*   **\`<th>\`** (Table Header): Defines a header cell. Text is **bold and centered**.
*   **\`<td>\`** (Table Data): Defines a standard data cell.

### Accessibility Tip

Always use **\`<caption>\`** to describe the nature of the table for screen readers.

### Example
\`\`\`html
<table>
  <caption>Monthly Savings</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Savings</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$100</td>
    </tr>
  </tbody>
</table>
\`\`\``,
        codeSnippet: '<table border="1">\n  <tr><th>A</th><th>B</th></tr>\n  <tr><td>1</td><td>2</td></tr>\n</table>',
        isCompleted: false
      },
      {
        id: 'h-table-merge',
        title: '22. Table Merging',
        content: `### Definition

Table merging allows a single cell to span across multiple rows or columns, similar to the "Merge & Center" feature in spreadsheet software like Excel.

### 1. Colspan (Column Span)
*   **Attribute**: \`colspan\`
*   **Function**: Merges cells **horizontally**. It dictates how many columns a cell should occupy.
*   **Usage**: Often used in headers.
*   **Example**: \`<td colspan="2">\` takes up the space of 2 columns.

### 2. Rowspan (Row Span)
*   **Attribute**: \`rowspan\`
*   **Function**: Merges cells **vertically**. It dictates how many rows a cell should occupy.
*   **Example**: \`<td rowspan="3">\` takes up the height of 3 rows.

### Example Code
\`\`\`html
<table border="1">
  <tr>
    <th colspan="2">Merged Header</th>
  </tr>
  <tr>
    <td rowspan="2">Vertical Merge</td>
    <td>Cell 1</td>
  </tr>
  <tr>
    <td>Cell 2</td>
  </tr>
</table>
\`\`\``,
        codeSnippet: '<td colspan="2">Wide Cell</td>',
        isCompleted: false
      },
      {
        id: 'h-forms-basic',
        title: '23. Forms Basics',
        content: `### Definition

The \`<form>\` element allows users to enter data, which is then sent to a server for processing.

### Key Attributes
1.  **\`action\`**: The URL where the form data is sent when submitted.
    *   Example: \`action="/submit-data"\`
2.  **\`method\`**: The HTTP method used to send data.
    *   **GET**: Appends data to the URL (Visible). Good for search, NOT for passwords.
    *   **POST**: Sends data in the body (Hidden). Secure. Used for login/registration.

### The \`<input>\` Tag

The most versatile form element. It acts differently depending on the **\`type\`** attribute.

### Common Input Types
*   **\`text\`**: Standard single-line text field.
*   **\`password\`**: Characters are masked (hidden).
*   **\`email\`**: Validates that text is an email address.
*   **\`number\`**: Restricts input to numbers (often with spinners).
*   **\`date\`**: Opens a date picker calendar.
*   **\`file\`**: Allow users to upload files.
*   **\`color\`**: Opens a color picker.
*   **\`range\`**: Slider control.`,
        codeSnippet: '<form>\n  First Name: <input type="text" name="fname">\n</form>',
        isCompleted: false
      },
      {
        id: 'h-labels',
        title: '24. Labels & Text Fields',
        content: `### Definition

The \`<label>\` tag defines a caption for a form element.
*   **Accessibility**: Screen readers read the label when the user focuses the input.
*   **Usability**: Clicking the label text automatically focuses (clicks) the associated input field.

### Binding Label to Input

To create this connection, the \`for\` attribute of the label must match the \`id\` of the input.

**Correct Syntax**:
\`\`\`html
<!-- The 'for' matches the 'id' -->
<label for="user-email">Email Address:</label>
<input type="email" id="user-email" name="email">
\`\`\``,
        codeSnippet: '<label for="user">Username:</label>\n<input type="text" id="user">',
        isCompleted: false
      },
      {
        id: 'h-selection',
        title: '25. Radio & Checkbox',
        content: `### Radio Buttons (\`type="radio"\`)
*   **Use Case**: When the user must select **exactly one** option from a defined set.
*   **Grouping**: All radio buttons in a group must share the **same \`name\` attribute**. This ensures only one can be checked at a time.
*   **Behavior**: Clicking one deselects the others.

### Checkboxes (\`type="checkbox"\`)
*   **Use Case**: When the user can select **zero, one, or multiple** options.
*   **Grouping**: Using the same name allows grouping the data on the server, but they operate independently.
*   **Attribute**: Add \`checked\` to pre-select an option.

### Comparison
| Feature | Radio | Checkbox |
| :--- | :--- | :--- |
| **Selection** | Single Choice | Multiple Choice |
| **Shape** | Round | Square |
| **Name** | Must be same | Can be same/different |`,
        codeSnippet: '<input type="radio" name="color" value="red"> Red',
        isCompleted: false
      },
      {
        id: 'h-select-text',
        title: '26. Select & Textarea',
        content: `### Select Dropdown (\`<select>\`)
Creates a drop-down list to save space.
*   **\`<select>\`**: The container.
*   **\`<option>\`**: Defines each item in the list.
*   **\`selected\` Attribute**: Pre-selects an option.
    *   \`<option value="usa" selected>USA</option>\`

### Text Area (\`<textarea>\`)
A multi-line text input control (like a comment box).
*   **Difference from Input**: \`<input>\` is for one line; \`<textarea>\` is for paragraphs.
*   **Sizing**: Controlled by \`rows\` (height) and \`cols\` (width) attributes, or CSS.
*   **Closing Tag**: Unlike input, it **has** a closing tag.
    *   \`<textarea>Default text here</textarea>\``,
        codeSnippet: '<textarea rows="4" cols="50">Enter comments...</textarea>',
        isCompleted: false
      },
      {
        id: 'h-form-attrs',
        title: '27. Form Actions & Attributes',
        content: `### Validation attributes
HTML5 introduced built-in form validation.
*   **\`required\`**: The user cannot submit the form until this field is filled.
*   **\`minlength\` / \`maxlength\`**: Limits the number of characters.
*   **\`min\` / \`max\`**: Limits numeric or date values.
*   **\`pattern\`**: Uses Regex to validate input (advanced).

### Usability Attributes
*   **\`placeholder\`**: Displays a hint inside the field before the user types.
*   **\`value\`**: Sets the initial default value.
*   **\`readonly\`**: The user can see but cannot edit the value (it IS sent on submit).
*   **\`disabled\`**: The user cannot use or click the field (it is NOT sent on submit).
*   **\`autofocus\`**: The field is automatically selected when the page loads.`,
        codeSnippet: '<input type="text" required placeholder="Enter Name">',
        isCompleted: false
      },
      {
        id: 'h-buttons-fieldset',
        title: '28. Buttons & Fieldset',
        content: `### Button Types
Buttons inside a form behave differently based on their \`type\`. ALWAYS specify the type.

1.  **\`type="submit"\`**: The default behavior. When clicked, it validates and sends the form data to the server (Action URL).
2.  **\`type="reset"\`**: Clears all inputs in the form to their default values. (Use sparingly).
3.  **\`type="button"\`**: A "dumb" button. It does nothing by default. You must attach JavaScript to make it do something.

### Fieldset & Legend
Used to group related data in a form (like "Billing Address" vs "Shipping Address").
*   **\`<fieldset>\`**: Draws a box around the elements.
*   **\`<legend>\`**: Defines the title of that box.`,
        codeSnippet: '<button type="submit">Register</button>',
        isCompleted: false
      },
      {
        id: 'h-advanced',
        title: '29. Advanced Elements',
        content: `### 1. Classes & IDs
These are global attributes used for CSS and JavaScript.
*   **\`id\` (#)**: A **Unique Identifier**.
    *   No two elements on a page can have the same ID.
    *   Used for bookmarks, specific styling, or JS hooks.
*   **\`class\` (.)**: A **Reusable Identifier**.
    *   Multiple elements can share the same class.
    *   Used to style groups of elements (e.g., \`class="btn"\`).

### 2. Iframes (\`<iframe>\`)
An "Inline Frame" is used to embed another website or document within the current HTML page.
*   **Syntax**: \`<iframe src="https://example.com" width="300" height="200"></iframe>\`
*   **Security**: Often sandboxed for security. Use \`title\` for accessibility.

### 3. Interactive Details
*   **\`<details>\`**: Creates a disclosure widget that is hidden by default.
*   **\`<summary>\`**: The visible heading. Clicking it reveals the details.

### 4. HTML Entities
Reserved characters that must be escaped.
*   Space: \`&nbsp;\`
*   \`<\`: \`&lt;\`
*   \`>\`: \`&gt;\`
*   \`&\`: \`&amp;\`
*   Copyright ©: \`&copy;\``,
        codeSnippet: '<div id="header" class="main-box">...</div>',
        isCompleted: false
      },
      {
        id: 'h-media',
        title: '30. Multimedia',
        content: `### Video
The \`<video>\` tag embeds a media player.
*   **Attributes**:
    *   **\`controls\`**: Shows play/pause buttons, volume, etc.
    *   **\`autoplay\`**: Starts playing automatically (often blocked by browsers if sound is on).
    *   **\`muted\`**: Plays without sound.
    *   **\`loop\`**: Replays when finished.
    *   **\`poster\`**: Shows an image before the video plays.

### Audio
The \`<audio>\` tag embeds a sound player.
*   Works similarly to video but without \`height\`, \`width\`, or \`poster\`.

### Fallback Content
Text inside the tag is displayed only if the browser does NOT support the media.
\`\`\`html
<video controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
\`\`\``,
        codeSnippet: '<video src="clip.mp4" controls></video>',
        isCompleted: false
      }
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
        title: 'Programming Languages',
        image: javaOverview,
        mindMapImage: javaMindmap,
        content: `### Programming Language
A language or medium which is used to instruct computer to do some specific tasks is known as Programming language.

### Types of Programming Language
1. **Machine Level Language** (Low-Level Language)
2. **Assembly Level Language** (Mid-Level Language)
3. **High Level Language**

### 1. Machine Level Language
• The language which is easily readable, understandable and executable by the machine or computer is known as machine level language.
• This is also known as Low-Level Language.
• Example: **Binary Language (0 and 1)**.

### 2. Assembly Level Language
• The language which provides set of pre-defined words to do some specific tasks is known as Assembly level language.
• Those pre-defined words are known as Mnemonics Ex: ADD, SUB, MOV, etc.
  - **ADD** for Addition
  - **SUB** for Subtraction
  - **MOV** for move data from one memory location to another.
• To convert these pre-defined words into machine level language one software is used which is known as **Assembler**.
• It is also known as Mid-Level Language.
• Example: **Instruction set of 8086 Architecture**.

### 3. High Level Language
• The language which is easily readable, understandable and executable by the programmer is known as High Level Language.
• The languages are generally used to develop the software or Application.
• Example: **C, C++, C#, Java, PHP and Python**.`,
        codeSnippet: '// Example of High Level Language (Java)\nSystem.out.println("Hello Human!");',
        isCompleted: false
      },
      {
        id: 'j2',
        title: 'Introduction to Java',
        content: `### JAVA
Java is a high-level programming language which is used to develop or test the application.

### History of JAVA
• Java was introduced in year 1995.
• The first name of Java was **OAK**.
• It was introduced by **Sun Microsystems**.
• Now it is owned by **Oracle**.
• Father of Java is **James Gosling**.

### Features of JAVA
• **Platform Independent Language**
• **Portable**
• **Robust**
• **Interpreted**
• **Architectural Neutral**
• **Dynamic**
• **Distributed**
• **High Performance**
• **Object Oriented**
• **Multi-Threaded**
• **Simple**
• **Secure**

### Platform Independence
**Platform** is nothing but combination of operating system and processor (Ex: Windows 64-bit, Mac, Linux).

**Platform Dependency**: If a software is developed on one platform which can be used only on the same platform, it is known as platform dependent (e.g., C, C++). Java is **Platform Independent** because it runs on the JVM.`,
        codeSnippet: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Java is Platform Independent!");\n  }\n}',
        isCompleted: false
      },
      {
        id: 'j3',
        title: 'Java Environment & Internals',
        content: `### Java Environment
Java involves a compilation and interpretation process.

### Conversion of High Level To Low Level in Java

**1. Java Source File**
• The file generated by the programmer that consists instruction written in java programming language.
• Extension: \`.java\`

**2. Java CLASS file**
• The file generated by the compiler which consists of instruction in **bytecode** or intermediate code.
• Extension: \`.class\`

**3. Bytecode**
• The intermediate code generated by the compiler which is neither understandable by the programmer nor by the machine.

### Key Components
**JDK (Java Development Kit)**
• JDK is a package which consist of java development tools like java compiler (\`javac\`) and JRE for execution.

**JRE (Java Runtime Environment)**
• JRE is an environment which consists JVM and built-in class files required for the execution of java program.

**JVM (Java Virtual Machine)**
• JVM helps to convert Bytecode into current system understandable language (low level language) with the help of interpreter and JIT compiler.

**JIT Compiler (Just In Time)**
• An integral part of JVM. It helps to improve the performance of java programs by compiling bytecode into native machine code at runtime.`,
        codeSnippet: '// Compilation Process:\n// Source (.java) -> Compiler (javac) -> Bytecode (.class) -> JVM -> Machine Code',
        isCompleted: false
      },
      {
        id: 'j4',
        title: 'Printing & Comments',
        content: `### Printing Statements
In java mainly two types of printing statements are there:

**1. Print Statement**
• \`System.out.print(data);\`
• Used only to print the data. It does NOT add a new line.
• **Note:** You must pass data, otherwise it's a Compile Time Error (CTE).

**2. Println Statement**
• \`System.out.println(data);\`
• Used to print the data as well as move the cursor to a new line.
• You can use it without data to just print a new line.

### Comments
Comments allow us to specify information about the program inside our Java code. The compiler treats comments as whitespace.
• **Single Line**: Begins with \`//\`
• **Multi Line**: Begins with \`/*\` and ends with \`*/\``,
        codeSnippet: 'System.out.print("Hello ");\nSystem.out.println("World!");\n// Output: Hello World!\nSystem.out.println(); // Prints empty line',
        isCompleted: false
      },
      {
        id: 'j5',
        title: 'Tokens in Java',
        content: `### Tokens
The smallest unit of programming language which is used to compose the instruction is known as Token. There are 6 types:
1. Keywords
2. Identifiers
3. Separators
4. Comments
5. Literals
6. Operators

### Keywords
• Predefined words which the java compiler can understand (e.g., \`class\`, \`public\`, \`static\`, \`void\`, \`if\`, \`else\`).
• Always written in **lower case**.
• There are ~53 keywords in Java.

### Identifiers
The name given to the components of java by the programmer (Class name, Method name, Variable name).

**Rules:**
1. Allowed characters: 'a-z', 'A-Z', '0-9', '_', '$'.
2. Must start with letter, underscore, or dollar.
3. Cannot start with a number.
4. No spaces allowed.
5. Cannot use keywords.

**Conventions:**
• **Class**: PascalCase (e.g., \`StudentData\`)
• **Method/Variable**: camelCase (e.g., \`studentName\`, \`getDetails()\`)

### Separators
• **Curly Braces {}**: Block start/end
• **Parentheses ()**: Method declaration/call
• **Square Brackets []**: Arrays
• **Dot .**: Package/Member access
• **Semicolon ;**: End of statement
• **Comma ,**: Separation`,
        codeSnippet: 'class Student { // Class Identifier\n    int rollNo; // Variable Identifier\n    void getData() { // Method Identifier\n       // Code...\n    }\n}',
        isCompleted: false
      },
      {
        id: 'j6',
        title: 'Variables & Data Types',
        content: `### Variables
A variable is a container which is used to store the data or value.

### Data Types
**1. Primitive Data Types** (Keywords, store values)
• **byte**: -128 to 127
• **short**: -32768 to 32767
• **int**: -2^31 to 2^31-1 (Default for numbers)
• **long**: Very large integers
• **float**: Decimal numbers (6-7 digits)
• **double**: Decimal numbers (15 digits, Default for decimals)
• **char**: Single character (16-bit Unicode)
• **boolean**: \`true\` or \`false\`

**Order of Capacity**:
\`byte < short < int < long < float < double\`

**2. Non-Primitive Data Types** (Store references)
• String, Array, Classes, Interfaces.
• Default value: \`null\`.

### Declaration & Initialization
\`\`\`java
int a = 5; // Declaration + Initialization
int p, q;  // Declaration
p = 10;    // Initialization
\`\`\``,
        codeSnippet: 'int age = 22;\ndouble price = 99.99;\nchar grade = \'A\';\nboolean isJavaFun = true;\nString name = "Siksha";',
        isCompleted: false
      },
      {
        id: 'j7',
        title: 'Type Casting',
        content: `### Type Casting
The process of converting one type of data into another type is known as Type Casting.

### 1. Primitive Type Casting

**Widening (Implicit)**:
• Converting smaller range data into larger range data.
• No data loss. Done automatically by compiler.
• Example: \`int\` -> \`double\`

**Narrowing (Explicit)**:
• Converting larger range data into smaller range data.
• **Possibility of data loss**.
• Must be done manually using cast operator \`(type)\`.
• Example: \`double\` -> \`int\`

### 2. Non-Primitive Type Casting
• **Upcasting**: Implicit (Child to Parent)
• **Downcasting**: Explicit (Parent to Child)`,
        codeSnippet: 'int i = 100;\ndouble d = i; // Widening (Implicit)\n\ndouble p = 9.8;\nint q = (int) p; // Narrowing (Explicit) -> q becomes 9',
        isCompleted: false
      },
      {
        id: 'j8',
        title: 'Operators',
        content: `Operators are predefined symbols used to perform specific tasks.

### Classification
1. **Arithmetic**: \`+\`, \`-\`, \`*\`, \`/\` (Quotient), \`%\` (Remainder)
2. **Relational**: \`==\`, \`!=\`, \`>\`, \`<\`, \`>=\`, \`<=\` (Returns Boolean)
3. **Logical**:
   • \`&&\` (AND): True if both are true
   • \`||\` (OR): True if any one is true
   • \`!\` (NOT): Reverses boolean value
4. **Assignment**: \`=\`, \`+=\`, \`-=\`, \`*=\`, etc.
5. **Conditional (Ternary)**: \`condition ? truePart : falsePart\`
6. **Increment/Decrement**:
   • **Pre (++i)**: Update then Use
   • **Post (i++)**: Use then Update`,
        codeSnippet: 'int a = 10, b = 5;\nSystem.out.println(a + b); // 15\nSystem.out.println(a > b); // true\n\nint max = (a > b) ? a : b; // Ternary Operator',
        isCompleted: false
      },
      {
        id: 'j9',
        title: 'Control Statements - Decision',
        content: `Decision statements define the flow of execution based on conditions.

### if Statement
Executes block if condition is true.
\`\`\`java
if(condition) { ... }
\`\`\`

### if-else Statement
Executes \`if\` block if true, otherwise \`else\` block.
\`\`\`java
if(condition) { ... } else { ... }
\`\`\`

### if-else-if Ladder
Checks multiple conditions from top to bottom.
\`\`\`java
if(cond1) { ... }
else if(cond2) { ... }
else { ... }
\`\`\`

### Switch Statement
Selects one of many code blocks to be executed.
• Uses \`break\` to exit the block.
• \`default\` runs if no case matches.
• Supports: \`byte\`, \`short\`, \`char\`, \`int\`, \`String\`, \`enum\`.`,
        codeSnippet: 'int day = 3;\nswitch(day) {\n  case 1: System.out.println("Mon"); break;\n  case 2: System.out.println("Tue"); break;\n  default: System.out.println("Other");\n}',
        isCompleted: false
      },
      {
        id: 'j10',
        title: 'Control Statements - Looping',
        content: `Looping statements are used to execute a block of instructions repeatedly.

### 1. While Loop
Entry-controlled loop. Checks condition first.
\`\`\`java
while(condition) {
    // code
}
\`\`\`

### 2. Do-While Loop
Exit-controlled loop. Executes at least once before checking condition.
\`\`\`java
do {
    // code
} while(condition);
\`\`\`

### 3. For Loop
Used when number of iterations is known.
\`\`\`java
for(initialization; condition; updation) {
    // code
}
\`\`\`
Workflow: Init -> Condition -> Code -> Updation -> Condition...`,
        codeSnippet: 'for(int i=1; i<=5; i++) {\n    System.out.println("Count: " + i);\n}',
        isCompleted: false
      },
      {
        id: 'j11',
        title: 'Basic Methods',
        content: `A **Method** is a set of instructions used to perform specific tasks.

### Syntax
\`[access_mod] [modifier] return_type methodName(parameters) { body }\`

### Types
1. **No-Argument Method**: \`void m1() { ... }\`
2. **Parameterized Method**: \`void m1(int a) { ... }\`

### Method Calling
• **Execution Flow**: Calling method pauses -> Control goes to Called method -> Executes -> Returns to Caller.
• **Matching Rules**: Number, Type, and Order of arguments must match parameters.

### Return Statement
• Used to return a value to the caller.
• \`return data;\`
• A method with \`void\` return type cannot return a value.`,
        codeSnippet: 'public static int add(int a, int b) {\n    return a + b;\n}\n\npublic static void main(String[] args) {\n    int sum = add(5, 10);\n    System.out.println(sum);\n}',
        isCompleted: false
      },
      {
        id: 'j12',
        title: 'Access Modifiers',
        content: `Access modifiers strictly defines the accessibility scope of members.

### Types & Scope
1. **private**: Within the **class** only.
2. **default** (no keyword): Within the **package** only.
3. **protected**: Within package + Outside package (via **child class**).
4. **public**: Everywhere (Global).

**Accessibility Order**:
\`private < default < protected < public\``,
        codeSnippet: 'class A {\n    private int x = 10; // Only inside A\n    public int y = 20;  // Everywhere\n}',
        isCompleted: false
      },
      {
        id: 'j13',
        title: 'Static vs Non-Static',
        content: `### Static (Class Members)
• Prefixed with \`static\` keyword.
• Loaded once in **Static Pool Area**.
• Can be accessed via **Class Name** (e.g., \`ClassName.variable\`).
• **Static Context**: Cannot access non-static members directly.

### Non-Static (Instance Members)
• Not prefixed with static.
• Belong to an **Object** (Heap Area).
• Accessed via **Object Reference**.
• Every object has its own copy of non-static variables.

### Static Initializers
• **Single Line**: \`static int a = 10;\`
• **Multi Line Block**: \`static { ... }\`
• Executed implicitly during **Class Loading** (before main method).`,
        codeSnippet: 'class Demo {\n    static int count = 0; // Shared by all objects\n    int id; // Unique per object\n}',
        isCompleted: false
      },
      {
        id: 'j14',
        title: 'Memory Management',
        content: `### Java Runtime Memory Areas
1. **Method Area**: Stores method code and class structures.
2. **Heap Area**: Stores **Objects** (Instances).
3. **Stack Area**: Stores method execution frames and local variables.
4. **Static Pool Area**: Stores static members (inside Heap/Method area depending on version, conceptualized as Class Static Area).

### Class Loading Process
1. **Class Static Area** created.
2. Methods loaded to Method Area.
3. Static members stored/initialized in Static Area.
4. Static blocks executed top-to-bottom.
5. JVM calls \`main\` Method.`,
        codeSnippet: '// Visualizing Memory:\n// Objects -> Heap\n// Local Vars -> Stack\n// Static Vars -> Static Pool',
        isCompleted: false
      },
      {
        id: 'j15',
        title: 'Objects & Classes',
        content: `### Object
• Any entity that has attributes and behaviors.
• In Java, an **Object** is a block of memory in the Heap Area representing a real-world entity.
• Also known as an **Instance**.

### Class
• A blueprint or template for creating objects.
• Defines the properties (variables) and behaviors (methods) common to all objects of that type.

### Creating an Object
\`ClassName reference = new ClassName();\`
• \`new\`: Allocates memory in Heap.
• \`reference\`: Holds the address of the object.`,
        codeSnippet: 'class Car {\n    String color;\n    void drive() {\n        System.out.println("Driving...");\n    }\n}\n\n// Usage\nCar myCar = new Car();\nmyCar.color = "Red";\nmyCar.drive();',
        isCompleted: false
      },
      {
        id: 'j16',
        title: 'Constructors Detailed',
        content: `### Constructor
A constructor is a special type of non-static method whose name is the same as the class name but it does not have a return type.

**Syntax:**
\`[modifier] ClassName(parameters) { ... }\`

**Purpose:**
• Initialize an object.
• Load non-static members into the object.
• Execute startup instructions.

### Types of Constructors
1. **No-Argument Constructor**: \`Student() { ... }\`
2. **Parameterized Constructor**: \`Student(String name) { ... }\`

**Note:** If no constructor is defined, compiler adds a **Default Constructor**.

### Constructor Overloading
Having multiple constructors with different signatures (args count, type, or order).

### Constructor Chaining
Calling one constructor from another.
1. **this()**: Calls constructor of same class.
2. **super()**: Calls constructor of parent class.
**Rule**: Must be the **first statement**.`,
        codeSnippet: 'class Student {\n    Student() { System.out.println("No-Arg"); }\n    Student(String name) { System.out.println(name); }\n}',
        isCompleted: false
      },
      {
        id: 'j17',
        title: 'Encapsulation',
        content: `### Encapsulation
The process of binding state (attributes) and behavior (methods) together. It enables **Data Hiding**.

### Data Hiding
Restricting direct access to data members to protect integrity.

**Steps:**
1. Make variables **private**.
2. Provide **public getter and setter** methods.

**Benefits:**
• Security.
• Validation (in setter).
• Controlled access (Read-only or Write-only).`,
        codeSnippet: 'class Account {\n    private double balance;\n    public double getBalance() { return balance; }\n    public void setBalance(double b) {\n        if(b > 0) balance = b;\n    }\n}',
        isCompleted: false
      },
      {
        id: 'j18',
        title: 'Relationships',
        content: `### Relationships
Connection between two objects.

### 1. Has-A Relationship (Association)
Dependency where one object has another.
• **Aggregation**: Weak bond. Objects can exist independently. (e.g., Car & MusicPlayer).
• **Composition**: Strong bond. One cannot exist without other. (e.g., Car & Engine).

### 2. Is-A Relationship (Inheritance)
Parent-Child relationship. Used for code reusability and polymorphism.`,
        codeSnippet: '// Has-A example\nclass Car {\n    Engine e = new Engine(); // Composition\n}',
        isCompleted: false
      },
      {
        id: 'j19',
        title: 'Inheritance',
        content: `### Inheritance
Process of acquiring properties of one class by another.

**Keywords:**
• **extends**: Class to Class.
• **implements**: Class to Interface.

### Types
1. **Single**: A -> B
2. **Multilevel**: A -> B -> C
3. **Hierarchical**: A -> B, A -> C
4. **Multiple**: One child, multiple parents (Supported via **Interfaces** only).
5. **Hybrid**: Combination.

**Diamond Problem**: Ambiguity in Multiple Inheritance with classes.`,
        codeSnippet: 'class Animal { void eat() {} }\nclass Dog extends Animal { void bark() {} }',
        isCompleted: false
      },
      {
        id: 'j20',
        title: 'Polymorphism & Casting',
        content: `### Non-Primitive Type Casting
Converting one reference type to another.

**1. Upcasting** (Generalization)
• Child object to Parent reference.
• Implicit.
• \`Parent p = new Child();\`
• Access limited to Parent members.

**2. Downcasting** (Specialization)
• Parent reference to Child reference.
• Explicit.
• \`Child c = (Child) p;\`
• **Risk**: \`ClassCastException\` if object is not actually an instance of Child.`,
        codeSnippet: 'Object o = "Hello";\nString s = (String) o; // Downcasting',
        isCompleted: false
      },
      {
        id: 'j21',
        title: 'Packages',
        content: `### Package
Group of related classes and interfaces. Folder structure.

**Types:**
1. **Built-in**: \`java.lang\`, \`java.util\`, \`java.io\`.
2. **User-defined**: \`package com.company.module;\`

**Importing:**
• \`import java.util.Scanner;\` (Specific)
• \`import java.util.*;\` (All)
• **Note:** \`java.lang\` is imported by default.`,
        codeSnippet: 'package myPack;\nimport java.util.ArrayList;\n\nclass Test { ... }',
        isCompleted: false
      },
      {
        id: 'j22',
        title: 'Object Class',
        content: `### Object Class
• Root of the class hierarchy. Every class inherits \`Object\`.
• Present in \`java.lang\`.

**Important Methods:**
1. \`toString()\`: String representation.
2. \`equals(Object o)\`: Comparison.
3. \`hashCode()\`: Hash value.
4. \`getClass()\`: Runtime class.
5. \`clone()\`: Create copy.
6. \`wait()\`, \`notify()\`, \`notifyAll()\`: Threading.
7. \`finalize()\`: Garbage collection (Deprecated).`,
        codeSnippet: 'class A {}\nA a = new A();\nSystem.out.println(a.toString());',
        isCompleted: false
      },
      {
        id: 'j23',
        title: 'Polymorphism',
        content: `### Polymorphism
(poly = many, morph = form). It is the ability of an object to exhibit more than one form with the same name.
For understanding:
• One name → multiple forms
• One variable name → different values
• One method name → different behaviour

### Types of Polymorphism
1. **Compile Time Polymorphism** (Static Binding)
2. **Runtime Polymorphism** (Dynamic Binding)

### 1. Compile Time Polymorphism
If the binding is achieved at compile time and the same behaviour is executed at runtime, it is known as compile-time polymorphism.
• It is also known as **Static Polymorphism**.
• **Ways to achieve**:
  - Method Overloading
  - Constructor Overloading
  - Variable Shadowing
  - Method Shadowing
  - Operator Overloading (Not supported in Java)

**A. Method Overloading**
If more than one method is created with the same name but different arguments in the same class.
• **Different Formal Arguments**:
  - Differ in number of arguments.
  - Differ in types of arguments.
  - Differ in order of arguments.
**Example**: \`java.io.PrintStream\` has \`println()\`, \`println(int)\`, \`println(String)\`.

**B. Constructor Overloading**
Class having more than one constructor with different formal arguments.

**C. Method Shadowing**
If a subclass and superclass have a **static method** with the same declaration but different implementation.
• **Binding**: Done at compile-time based on **Reference Type** (not Object Type).
• **Rules**:
  - Return type must be same (or covariant).
  - Access modifier same or higher visibility.
  - Only for **static** methods.

**D. Variable Shadowing**
If superclass and subclass have a variable with the same name but different values.
• **Binding**: Done at compile-time based on **Reference Type**.
• Applies to both static and non-static variables.

### 2. Runtime Polymorphism
If binding occurs at compile time but different behaviour is achieved at runtime.
• Also known as **Dynamic Binding**.
• Achieved by **Method Overriding**.

**Method Overriding**
If subclass and superclass have a **non-static method** with the same declaration but different implementation.
• **Rules**:
  - **IS-A** relationship (Inheritance) is mandatory.
  - Only for **non-static** methods.
  - **Signature** must be exactly the same.
  - **Return Type**: Same or Covariant (Subclass return type can be child of parent's return type).
  - **Access Modifier**: Same or higher visibility.
• **@Override Annotation**: Recommended to ensure correct overriding.
• **Execution**: Depends on the **Object Created** (Runtime object).`,
        codeSnippet: 'class Parent {\n    public void test() { System.out.println("From Parent"); }\n}\nclass Child extends Parent {\n    @Override\n    public void test() { System.out.println("From Child"); }\n}\n// Usage\nParent p = new Child();\np.test(); // "From Child" (Runtime Poly)',
        isCompleted: false
      },
      {
        id: 'j24',
        title: 'Abstraction',
        content: `### Abstraction
It is the design process of hiding the implementation and showing only the functionality (declaration) to the user.

### Ways to Achieve
1. **Abstract Classes** (0 to 100% abstraction)
2. **Interfaces** (100% abstraction)

### Abstract Modifier
Keyword: \`abstract\`. Applicable for methods and classes.

### Abstract Method
A method prefixed with \`abstract\`, having **no implementation** (ends with semicolon).
• Syntax: \`abstract [access_mod] returnType methodName(args);\`
• Known as "Incomplete Method".
• **Rules**:
  - Cannot be \`private\`, \`static\`, or \`final\`.
  - Child class is responsible for implementation.

### Abstract Class
A class prefixed with \`abstract\`.
• **Cannot define an object (Instance)** for an abstract class.
• Can consist of both abstract and concrete methods.
• If a class has at least one abstract method, the class **must** be declared abstract.
• **Constructor**: Allowed (invoked via constructor chaining).

**Implementation Rules**:
1. If a class extends an abstract class, it **must implement all abstract methods**.
2. If it fails to do so, the subclass must also be declared \`abstract\`.

**When to use Abstract Methods?**
• When we don't have a clear idea about implementation.
• To force child classes to provide their own implementation.`,
        codeSnippet: 'abstract class WhatsApp {\n    abstract public void send();\n}\nclass App extends WhatsApp {\n    public void send() { System.out.println("Sent!"); }\n}\n// Usage\nWhatsApp w = new App();\nw.send();',
        isCompleted: false
      },
      {
        id: 'j25',
        title: 'Interfaces',
        content: `### Interface
A component used to achieve **100% Abstraction** and **Multiple Inheritance**.
• Syntax: \`interface InterfaceName { ... }\`
• Compiled to a \`.class\` file.

### Members of Interface
| Member | Class | Interface |
| :--- | :--- | :--- |
| **Variables** | Yes | **Public, Static, Final** (Constants) |
| **Methods** | Yes | **Public, Abstract** (Default) |
| **Constructors** | Yes | **No** |
| **Static Methods** | Yes | **Yes** (From JDK 1.8) |
| **Default Methods** | No | **Yes** (From JDK 1.8) |

**Notes:**
• All members are implicitly \`public\`.
• Variables must be initialized (since they are final).
• Cannot create an object of Interface.

### Inheritance
1. **Class implements Interface**: \`class C implements I1\`
2. **Interface extends Interface**: \`interface I2 extends I1\`
3. **Multiple Inheritance**:
   • Class can implement multiple interfaces: \`class C implements I1, I2\`
   • Interface can extend multiple interfaces: \`interface I3 extends I1, I2\`

**Diamond Problem Solved**:
Interfaces have no constructors and no state (instance variables). Ambiguity in method calls is resolved because implementation is forced in the concrete child class.

### Types of Interfaces
1. **Regular Interface**: More than one abstract method.
2. **Functional Interface**: Exactly one abstract method. (e.g., \`Runnable\`, \`Comparable\`).
   - Used in Lambda Expressions.
3. **Marker Interface**: No methods. Empty.
   - Tells JVM about certain activity. (e.g., \`Serializable\`, \`Cloneable\`, \`RandomAccess\`).`,
        codeSnippet: 'interface Flyable {\n    void fly();\n}\nclass Bird implements Flyable {\n    public void fly() { System.out.println("Flying..."); }\n}',
        isCompleted: false
      },
      {
        id: 'j26',
        title: 'Final Keyword',
        content: `### Final Keyword
Final is a modifier used to restrict usage. It is applicable to Class, Variable, and Method.

### 1. Final Class
• **Effect**: Cannot be inherited (Prevent Inheritance).
• Example: \`final class Demo { ... }\` → \`class Test extends Demo\` is **Error**.

### 2. Final Variable
• **Effect**: Cannot reassign value (Constant).
• Convention: Uppercase names (e.g., \`MAX_AGE\`).
• Example:
  \`final int AGE = 10;\`
  \`AGE = 20;\` // **Compile Time Error**

### 3. Final Method
• **Effect**: Cannot be overridden (Prevent Overriding).
• Example: Parent has \`final void show()\` → Child cannot \`@Override void show()\`.

### Frequently Asked Questions
• **Can Constructor be Final?** No. Constructors are not inherited, so overriding concept doesn't apply.
• **Can Abstract Method be Final?** No. Abstract needs overriding, Final prevents it. Contradiction.
• **Can Main Method be Final?** Yes.`,
        codeSnippet: 'final class Secure {\n    final int LIMIT = 100;\n    final void process() {\n        // cannot be overridden\n    }\n}',
        isCompleted: false
      },
      {
        id: 'j27',
        title: 'Arrays',
        content: `### Array
An array is a continuous block of memory used to store multiple **homogeneous** (same type) values. In Java, Array is an Object.

### Characteristics
• **Fixed Size**: Defined at instantiation. Cannot be modified later.
• **Index Based**: Starts from 0 to \`length - 1\`.
• **Homogeneous**: Only same data type allowed.

### Declaration & Instantiation
1. **Declaration**: \`int[] x;\` or \`int x[];\`
2. **Instantiation**: \`x = new int[5];\` (Default values assigned: 0 for int, null for Objects).
3. **Single Line**: \`int[] x = new int[5];\`
4. **Initialization**: \`int[] x = {10, 20, 30};\`.
   • **Anonymous Array**: \`new int[]{1, 2, 3}\`

### Length Property
\`x.length\`: Returns size of the array.

### Accessing Elements
1. **Limit**: \`0\` to \`length-1\`.
2. **Exception**: Accessing outside range throws \`ArrayIndexOutOfBoundsException\`.
3. **Loops**: 
   • \`for(int i=0; i<x.length; i++)\`
   • **For-Each**: \`for(int val : x)\` (Forward direction only).

### Arrays Class
Present in \`java.util\`. Static helper methods.
• \`Arrays.sort(arr)\`: Sorts ascending.
• \`Arrays.toString(arr)\`: Printable string format.

### Multi-Dimensional Array
Storing elements in rows and columns (Matrix).
• Declaration: \`int[][] arr;\`
• Instantiation: \`new int[3][3];\` (3 Rows, 3 Cols).
• Access: \`arr[row][col]\`.`,
        codeSnippet: 'int[] arr = {5, 1, 9};\njava.util.Arrays.sort(arr);\nfor(int n : arr) {\n    System.out.println(n); // 1, 5, 9\n}',
        isCompleted: false
      },
      {
        id: 'j28',
        title: 'Wrapper Classes',
        content: `### Wrapper Classes
In Java, every primitive data type has a corresponding class which works like a wrapper. It provides a mechanism to wrap primitive data into an object.
• All wrapper classes are **final** and present in \`java.lang\` package.

**Mapping:**
| Primitive | Wrapper Class |
| :--- | :--- |
| boolean | Boolean |
| char | Character |
| int | Integer |
| double | Double |
(Byte, Short, Integer, Long, Float, Double are subclasses of **Number** class).

### Use of Wrapper Class
1. To represent primitive data as Objects (Reference Types).
2. To convert String primitives to actual primitives (Parsing).
3. Used in **Collections** which store only Objects.

### AutoBoxing & Unboxing
1. **AutoBoxing**:
   Automatic conversion of primitive type into its corresponding wrapper object.
   \`Integer i = 10; // AutoBoxed\`
2. **Unboxing**:
   Automatic conversion of wrapper object into its corresponding primitive type.
   \`int j = i; // Unboxed\`

### Parsing (String to Primitive)
Every wrapper class has a valid static method \`parseXxx(String s)\`.
• \`public static int parseInt(String s)\`
• \`public static double parseDouble(String s)\`
• \`public static boolean parseBoolean(String s)\`
• **Note:** \`char\` cannot be parsed (Use \`charAt()\`).

### NumberFormatException
Thrown when trying to convert a String with invalid format into a number.
Example: \`Integer.parseInt("123a")\` throws \`NumberFormatException\`.`,
        codeSnippet: 'String str = "100";\nint num = Integer.parseInt(str); // Parsing\nInteger obj = num; // AutoBoxing\nint val = obj; // Unboxing',
        isCompleted: false
      },
      {
        id: 'j29',
        title: 'Exception Handling',
        content: `### Exception Definition
An unexpected problem/event that occurs during the execution of a program (Runtime) which stops the normal flow.
• **Root Class**: \`java.lang.Throwable\`.
• **Object Class**: Parent of Throwable.

### Hierarchy
**Throwable**
1. **Error** (Hardware/System level, e.g., StackOverflowError).
2. **Exception**:
   • **Checked** (Compile-time): Compiler forces handling (e.g., FileNotFoundException, IOException).
   • **Unchecked** (Runtime): Compiler ignores (e.g., ArithmeticException, NullPointerException).
   • **Note:** RuntimeException and its children are Unchecked. All others are Checked.

### Exception Handling Keywords
1. **try**: Block consisting of code that might raise an exception.
2. **catch**: Block used to handle the exception thrown by try.
   • Can have multiple catch blocks (Child first, Parent last).
3. **finally**: Block that **always executes** (even if exception occurs or handled).
   • Used for resource cleanup (Closing DB, Streams).
4. **throw**: Used to explicitly throw an exception object. \`throw new ArithmeticException("Msg");\`
5. **throws**: Used in method signature to declare/propagate checked exceptions. \`void m() throws IOException\`

### Exception Propagation
Movement of exception object from called method to calling method. Unchecked exceptions propagate automatically. Checked exceptions need \`throws\`.

### Custom Exception
User defined exceptions.
1. **Checked**: Extend \`Exception\`.
2. **Unchecked**: Extend \`RuntimeException\`.`,
        codeSnippet: 'try {\n    int data = 100 / 0;\n} catch (ArithmeticException e) {\n    System.out.println("Handled: " + e.getMessage());\n} finally {\n    System.out.println("Done");\n}',
        isCompleted: false
      },
      {
        id: 'j30',
        title: 'Collection Framework',
        content: `### Collection Framework
Unifies architecture for storing and manipulating a **group of objects**.
• **Package**: \`java.util\`
• **Advantage over Array**:
  - Dynamic Size (Growable).
  - Heterogeneous data (though Generics make it type-safe).
  - Built-in methods (Add, Remove, Search, Sort).

### Hierarchy 1: Collection
**Iterable** → **Collection**
1. **List** (Interface):
   • Insertion order maintained.
   • Duplicates allowed.
   • Classes: **ArrayList** (Fast search), **LinkedList** (Fast insert/delete), **Vector**, **Stack**.
2. **Set** (Interface):
   • No insertion order (hashing).
   • No duplicates.
   • Classes: **HashSet**, **LinkedHashSet** (Ordered Set), **TreeSet** (Sorted).
3. **Queue** (Interface):
   • FIFO (First In First Out).
   • Classes: **PriorityQueue**, **ArrayDeque**.

### Hierarchy 2: Map
**Map** (Interface) works on Key-Value pairs.
• Keys must be **Unique**. Values can be duplicated.
• Classes: **HashMap**, **LinkedHashMap**, **TreeMap**, **Hashtable**.

### Generics (< >)
Introduced in JDK 1.5 to provide Type Safety.
• \`ArrayList<String> list = new ArrayList<>();\`
• Ensures only Strings are added. Avoids ClassCastException at runtime.

### Iteration
1. **for-each loop**: \`for(Object o : collection)\`
2. **Iterator**: Universal cursor. \`iterator.next()\`, \`iterator.remove()\`.`,
        codeSnippet: 'List<String> list = new ArrayList<>();\nlist.add("Java");\nlist.add("Python");\n\nMap<String, Integer> marks = new HashMap<>();\nmarks.put("Math", 95);\nmarks.put("Science", 90);',
        isCompleted: false
      }
    ]
  },
  phpCourse,
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
  },
  phpCourse
];
