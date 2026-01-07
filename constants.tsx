
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
    id: 'html-tutorial',
    title: 'HTML Tutorial',
    category: 'Web Development',
    icon: 'layout',
    level: 'Beginner',
    progress: 45,
    lessons: [
      { 
        id: 'h1', 
        title: 'HTML Introduction by Rahul Sir', 
        content: `HTML stands for HyperText Markup Language. It is the standard markup language for creating Web pages. HTML describes the structure of a Web page semantically and originally included cues for the appearance of the document.\n\nHTML elements are the building blocks of HTML pages. They are represented by tags like <h1>, <p>, <a>, etc. Browsers do not display the HTML tags, but use them to render the content of the page.\n\nA simple HTML document consists of a DOCTYPE declaration, an <html> root element, a <head> section containing meta information, and a <body> section that contains the visible page content.`, 
        codeSnippet: '<!DOCTYPE html>\n<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>My First Heading</h1>\n  <p>My first paragraph.</p>\n</body>\n</html>', 
        isCompleted: true 
      },
      { 
        id: 'h2', 
        title: 'HTML Editors', 
        content: `A web developer can use a professional HTML editor to create and modify websites. However, for learning HTML, we recommend a simple text editor like Notepad (PC) or TextEdit (Mac). We believe using a simple text editor is a good way to learn HTML.\n\nProfessional editors like Visual Studio Code, Sublime Text, and Atom are excellent once you have mastered the basics. They offer features like syntax highlighting, autocompletion, and integrated version control. For now, focus on writing the tags manually to build muscle memory.`, 
        codeSnippet: '<!-- Open your text editor, write your code, and save as index.html -->', 
        isCompleted: true 
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
      { id: 'h20', title: 'HTML Classes', content: 'The HTML class attribute is used to specify a class for an HTML element. Multiple HTML elements can share the same class. The class attribute is often used to point to a class name in a style sheet. It can also be used by a JavaScript to access and manipulate elements with the specific class name.', codeSnippet: '<style>\n.city {\n  background-color: tomato;\n  color: white;\n  padding: 10px;\n}\n</style>\n\n<h2 class="city">London</h2>\n<h2 class="city">Paris</h2>', isCompleted: false }
    ]
  },
  {
    id: 'python-tutorial',
    title: 'Python Tutorial',
    category: 'Programming',
    icon: 'terminal',
    level: 'Beginner',
    progress: 10,
    lessons: [
      { 
        id: 'p1', 
        title: 'Python Intro', 
        content: `Python is a popular programming language. It was created by Guido van Rossum, and released in 1991. It is used for web development (server-side), software development, mathematics, and system scripting.\n\nPython can be used on a server to create web applications. It can be used alongside software to create workflows. It can connect to database systems. It can also read and modify files. It can be used to handle big data and perform complex mathematics.\n\nPython works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc). Python has a simple syntax similar to the English language.`, 
        codeSnippet: 'print("Hello, World!")', 
        isCompleted: true 
      },
      { 
        id: 'p2', 
        title: 'Python Get Started', 
        content: `Many PCs and Macs will have python already installed. To check if you have python installed on a Windows PC, search in the start bar for Python or run the following on the Command Line (cmd.exe): python --version.\n\nIf you find that you do not have Python installed on your computer, then you can download it for free from the following website: https://www.python.org/.\n\nPython is an interpreted programming language, this means that as a developer you write Python (.py) files in a text editor and then put those files into the python interpreter to be executed.`, 
        codeSnippet: 'import sys\nprint(sys.version)', 
        isCompleted: false 
      },
      { 
        id: 'p3', 
        title: 'Python Syntax', 
        content: `Python syntax can be executed by writing directly in the Command Line. Or by creating a python file on the server, using the .py file extension, and running it in the Command Line.\n\nIndentation refers to the spaces at the beginning of a code line. Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important. Python uses indentation to indicate a block of code.\n\nPython will give you an error if you skip the indentation.`, 
        codeSnippet: 'if 5 > 2:\n  print("Five is greater than two!")\n\n# This will raise an error:\n# if 5 > 2:\n# print("Five is greater than two!")', 
        isCompleted: false 
      },
      { 
        id: 'p4', 
        title: 'Python Comments', 
        content: `Comments can be used to explain Python code. Comments can be used to make the code more readable. Comments can be used to prevent execution when testing code.\n\nComments starts with a #, and Python will ignore them. Comments can be placed at the end of a line, and Python will ignore the rest of the line.\n\nPython does not really have a syntax for multi line comments. To add a multiline comment you could insert a # for each line. Or, not quite as intended, you can use a multiline string.`, 
        codeSnippet: '# This is a comment\nprint("Hello, World!")\n\n"""\nThis is a multiline string\nused as a comment\n"""', 
        isCompleted: false 
      },
      { 
        id: 'p5', 
        title: 'Python Variables', 
        content: `Variables are containers for storing data values. Python has no command for declaring a variable. A variable is created the moment you first assign a value to it.\n\nVariables do not need to be declared with any particular type, and can even change type after they have been set. String variables can be declared either by using single or double quotes.\n\nVariable names are case-sensitive (age, Age and AGE are three different variables).`, 
        codeSnippet: 'x = 5\ny = "Siksha"\nprint(x)\nprint(y)', 
        isCompleted: false 
      },
      { id: 'p6', title: 'Python Data Types', content: 'In programming, data type is an important concept. Variables can store data of different types, and different types can do different things. Python has the following data types built-in by default, in these categories:\n\nText Type: str\nNumeric Types: int, float, complex\nSequence Types: list, tuple, range\nMapping Type: dict\nSet Types: set, frozenset\nBoolean Type: bool\nBinary Types: bytes, bytearray, memoryview\nNone Type: NoneType', codeSnippet: 'x = 5    # int\ny = "Hi" # str\nz = 20.5 # float', isCompleted: false },
      { id: 'p7', title: 'Python Numbers', content: 'There are three numeric types in Python: int, float, complex. Variables of numeric types are created when you assign a value to them.\n\nInt, or integer, is a whole number, positive or negative, without decimals, of unlimited length. Float, or "floating point number" is a number, positive or negative, containing one or more decimals. Complex numbers are written with a "j" as the imaginary part.', codeSnippet: 'x = 1    # int\ny = 2.8  # float\nz = 1j   # complex', isCompleted: false },
      { id: 'p8', title: 'Python Casting', content: 'There may be times when you want to specify a type on to a variable. This can be done with casting. Python is an object-orientated language, and as such it uses classes to define data types, including its primitive types.\n\nCasting in python is therefore done using constructor functions: int(), float(), str().', codeSnippet: 'x = int(1)   # x will be 1\ny = int(2.8) # y will be 2\nz = str("s1")# z will be \'s1\'', isCompleted: false },
      { id: 'p9', title: 'Python Strings', content: 'Strings in python are surrounded by either single quotation marks, or double quotation marks. \'hello\' is the same as "hello". You can display a string literal with the print() function.\n\nYou can assign a multiline string to a variable by using three quotes. Like many other popular programming languages, strings in Python are arrays of bytes representing unicode characters.', codeSnippet: 'a = "Hello"\nprint(a[1]) # prints \'e\'\nprint(len(a)) # prints 5', isCompleted: false },
      { id: 'p10', title: 'Python Booleans', content: 'Booleans represent one of two values: True or False. In programming you often need to know if an expression is True or False. You can evaluate any expression in Python, and get one of two answers, True or False.\n\nWhen you compare two values, the expression is evaluated and Python returns the Boolean answer. Almost any value is evaluated to True if it has some sort of content. Any string is True, except empty strings. Any number is True, except 0.', codeSnippet: 'print(10 > 9)  # True\nprint(10 == 9) # False\nprint(10 < 9)  # False', isCompleted: false },
      { id: 'p11', title: 'Python Operators', content: 'Operators are used to perform operations on variables and values. Python divides the operators in the following groups: Arithmetic operators, Assignment operators, Comparison operators, Logical operators, Identity operators, Membership operators, Bitwise operators.\n\nArithmetic operators are used with numeric values to perform common mathematical operations (+, -, *, /, %, **, //).', codeSnippet: 'x = 5\ny = 3\nprint(x + y) # 8\nprint(x ** y) # 125 (5 to the power of 3)', isCompleted: false },
      { id: 'p12', title: 'Python Lists', content: 'Lists are used to store multiple items in a single variable. Lists are one of 4 built-in data types in Python used to store collections of data, the other 3 are Tuple, Set, and Dictionary, all with different qualities and usage.\n\nLists are created using square brackets []. List items are ordered, changeable, and allow duplicate values.', codeSnippet: 'thislist = ["apple", "banana", "cherry"]\nprint(thislist)\nprint(thislist[1]) # banana', isCompleted: false },
      { id: 'p13', title: 'Python Tuples', content: 'Tuples are used to store multiple items in a single variable. A tuple is a collection which is ordered and unchangeable. Tuples are written with round brackets ().\n\nTuple items are ordered, unchangeable, and allow duplicate values. Tuple items are indexed, the first item has index [0], the second item has index [1] etc.', codeSnippet: 'thistuple = ("apple", "banana", "cherry")\nprint(thistuple)\n# thistuple[1] = "kiwi" # Error: Tuples are unchangeable', isCompleted: false },
      { id: 'p14', title: 'Python Sets', content: 'Sets are used to store multiple items in a single variable. A set is a collection which is unordered, unchangeable*, and unindexed. *Note: Set items are unchangeable, but you can remove items and add new items.\n\nSets are written with curly brackets {}. Set items are unordered, so you cannot be sure in which order the items will appear.', codeSnippet: 'thisset = {"apple", "banana", "cherry"}\nprint(thisset)\nthisset.add("orange")\nprint(thisset)', isCompleted: false },
      { id: 'p15', title: 'Python Dictionaries', content: 'Dictionaries are used to store data values in key:value pairs. A dictionary is a collection which is ordered*, changeable and do not allow duplicates. *As of Python version 3.7, dictionaries are ordered. In Python 3.6 and earlier, dictionaries are unordered.\n\nDictionaries are written with curly brackets, and have keys and values.', codeSnippet: 'thisdict = {\n  "brand": "Ford",\n  "model": "Mustang",\n  "year": 1964\n}\nprint(thisdict["brand"])', isCompleted: false },
      { id: 'p16', title: 'Python If...Else', content: 'Python supports the usual logical conditions from mathematics: Equals (a == b), Not Equals (a != b), Less than (a < b), Less than or equal to (a <= b), Greater than (a > b), Greater than or equal to (a >= b). These conditions can be used in several ways, most commonly in "if statements" and loops.\n\nAn "if statement" is written by using the if keyword. The elif keyword is pythons way of saying "if the previous conditions were not true, then try this condition". The else keyword catches anything which isn\'t caught by the preceding conditions.', codeSnippet: 'a = 200\nb = 33\nif b > a:\n  print("b is greater than a")\nelif a == b:\n  print("a and b are equal")\nelse:\n  print("a is greater than b")', isCompleted: false },
      { id: 'p17', title: 'Python While Loops', content: 'Python has two primitive loop commands: while loops and for loops. With the while loop we can execute a set of statements as long as a condition is true.\n\nThe while loop requires relevant variables to be ready, in this example we need to define an indexing variable, i, which we set to 1. With the break statement we can stop the loop even if the while condition is true. With the continue statement we can stop the current iteration, and continue with the next.', codeSnippet: 'i = 1\nwhile i < 6:\n  print(i)\n  i += 1', isCompleted: false },
      { id: 'p18', title: 'Python For Loops', content: 'A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string). This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.\n\nWith the for loop we can execute a set of statements, once for each item in a list, tuple, set etc.', codeSnippet: 'fruits = ["apple", "banana", "cherry"]\nfor x in fruits:\n  print(x)', isCompleted: false },
      { id: 'p19', title: 'Python Functions', content: 'A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function. A function can return data as a result.\n\nIn Python a function is defined using the def keyword. To call a function, use the function name followed by parenthesis. Information can be passed into functions as arguments.', codeSnippet: 'def my_function():\n  print("Hello from a function")\n\nmy_function()', isCompleted: false },
      { id: 'p20', title: 'Python Classes/Objects', content: 'Python is an object oriented programming language. Almost everything in Python is an object, with its properties and methods. A Class is like an object constructor, or a "blueprint" for creating objects.\n\nTo create a class, use the keyword class. All classes have a function called __init__(), which is always executed when the class is being initiated. Use the __init__() function to assign values to object properties, or other operations that are necessary to do when the object is being created.', codeSnippet: 'class Person:\n  def __init__(self, name, age):\n    self.name = name\n    self.age = age\n\np1 = Person("John", 36)\nprint(p1.name)\nprint(p1.age)', isCompleted: false }
    ]
  },
  {
    id: 'java-tutorial',
    title: 'Java Tutorial',
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
        content: `Comments can be used to explain Java code, and to make it more readable. It can also be used to prevent execution when testing alternative code.\n\nSingle-line comments start with two forward slashes (//). Any text between // and the end of the line is ignored by Java (will not be executed).\n\nMulti-line comments start with /* and ends with */. Any text between /* and */ will be ignored by Java.`, 
        codeSnippet: '// This is a comment\nSystem.out.println("Hello World");\n\n/* The code below will print the words Hello World\nto the screen, and it is amazing */', 
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
      { id: 'j20', title: 'Java Recursion', content: 'Recursion is the technique of making a function call itself. This technique provides a way to break complicated problems down into simple problems which are easier to solve. Recursion may be a bit difficult to understand. The best way to figure out how it works is to experiment with it.', codeSnippet: 'public static int sum(int k) {\n  if (k > 0) {\n    return k + sum(k - 1);\n  } else {\n    return 0;\n  }\n}', isCompleted: false }
    ]
  },
  {
    id: 'php-tutorial',
    title: 'PHP Tutorial',
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
      { id: 'ph11', title: 'PHP Operators', content: 'Operators are used to perform operations on variables and values. PHP divides the operators in the following groups: Arithmetic operators, Assignment operators, Comparison operators, Increment/Decrement operators, Logical operators, String operators, Array operators, Conditional assignment operators.', codeSnippet: 'echo $x + $y;\necho $x ** $y; // Exponentiation', isCompleted: false },
      { id: 'ph12', title: 'PHP If...Else', content: 'Conditional statements are used to perform different actions based on different conditions. Use if to execute some code only if a specified condition is true. Use if...else to execute some code if a condition is true and another code if that condition is false. Use if...elseif...else to execute different codes for more than two conditions.', codeSnippet: 'if ($t < "20") {\n  echo "Have a good day!";\n} else {\n  echo "Have a good night!";\n}', isCompleted: false },
      { id: 'ph13', title: 'PHP Switch', content: 'The switch statement is used to perform different actions based on different conditions. Use the switch statement to select one of many blocks of code to be executed. The break keyword breaks out of the switch block. The default keyword specifies the code to run if there is no case match.', codeSnippet: 'switch ($favcolor) {\n  case "red": echo "Red!"; break;\n  case "blue": echo "Blue!"; break;\n  default: echo "Neither!";\n}', isCompleted: false },
      { id: 'ph14', title: 'PHP Loops', content: 'Loops are used to execute the same block of code again and again, as long as a certain condition is true. while - loops through a block of code as long as the specified condition is true. do...while - loops through a block of code once, and then repeats the loop as long as the specified condition is true. for - loops through a block of code a specified number of times. foreach - loops through a block of code for each element in an array.', codeSnippet: '$x = 1;\nwhile($x <= 5) {\n  echo "Number: $x <br>";\n  $x++;\n}', isCompleted: false },
      { id: 'ph15', title: 'PHP Functions', content: 'The real power of PHP comes from its functions. PHP has more than 1000 built-in functions, and besides those, you can create your own custom functions. A user-defined function declaration starts with the word function. A function name must start with a letter or an underscore. Function names are NOT case-sensitive.', codeSnippet: 'function writeMsg() {\n  echo "Hello world!";\n}\n\nwriteMsg();', isCompleted: false },
      { id: 'ph16', title: 'PHP Arrays', content: 'An array stores multiple values in one single variable. In PHP, the array() function is used to create an array. There are three types of arrays: Indexed arrays - Arrays with a numeric index. Associative arrays - Arrays with named keys. Multidimensional arrays - Arrays containing one or more arrays.', codeSnippet: '$cars = array("Volvo", "BMW", "Toyota");\necho "I like " . $cars[0];', isCompleted: false },
      { id: 'ph17', title: 'PHP Superglobals', content: 'Some predefined variables in PHP are "superglobals", which means that they are always accessible, regardless of scope - and you can access them from any function, class or file without having to do anything special. The PHP superglobal variables are: $GLOBALS, $_SERVER, $_REQUEST, $_POST, $_GET, $_FILES, $_ENV, $_COOKIE, $_SESSION.', codeSnippet: 'echo $_SERVER[\'PHP_SELF\'];\necho $_SERVER[\'SERVER_NAME\'];', isCompleted: false },
      { id: 'ph18', title: 'PHP Forms', content: 'The PHP superglobals $_GET and $_POST are used to collect form-data. Both GET and POST create an array. This array holds key/value pairs, where keys are the names of the form controls and values are the input data from the user. Both GET and POST are treated as $_GET and $_POST. These are superglobals, which means that they are always accessible, regardless of scope.', codeSnippet: '<form action="welcome.php" method="post">\nName: <input type="text" name="name"><br>\nE-mail: <input type="text" name="email"><br>\n<input type="submit">\n</form>', isCompleted: false },
      { id: 'ph19', title: 'PHP Validation', content: 'The first thing you should do when processing HTML forms is to pass all variables through PHP\'s htmlspecialchars() function. When you use the htmlspecialchars() function; then if a user tries to submit a script in a text field, it will not be executed, because it will be saved as HTML escaped code. This is important for security.', codeSnippet: '$name = test_input($_POST["name"]);\nfunction test_input($data) {\n  $data = trim($data);\n  $data = stripslashes($data);\n  $data = htmlspecialchars($data);\n  return $data;\n}', isCompleted: false },
      { id: 'ph20', title: 'PHP MySQL', content: 'MySQL is the most popular database system used with PHP. MySQL is a database system used on the web. MySQL is a database system that runs on a server. MySQL is ideal for both small and large applications. MySQL is very fast, reliable, and easy to use. MySQL uses standard SQL.', codeSnippet: '$servername = "localhost";\n$username = "username";\n$password = "password";\n\n$conn = new mysqli($servername, $username, $password);\nif ($conn->connect_error) {\n  die("Connection failed: " . $conn->connect_error);\n}\necho "Connected successfully";', isCompleted: false }
    ]
  },
  {
    id: 'ai-tutorial',
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
        content: `Many AI tasks can be framed as search problems. A search problem consists of a state space, a start state, goal states, and a set of actions that lead from one state to another.\n\nUninformed search strategies (like Breadth-First Search and Depth-First Search) have no additional information about states beyond that provided in the problem definition. They can only generate successors and distinguish a goal state from a non-goal state.\n\nInformed search strategies (like A* Search) use problem-specific knowledge (heuristics) to find solutions more efficiently by estimating the cost to reach the goal.`, 
        codeSnippet: 'def breadth_first_search(problem):\n    node = Node(problem.initial_state)\n    if problem.goal_test(node.state): return node\n    frontier = [node]\n    # ... logic continues', 
        isCompleted: false 
      },
      { id: 'ai6', title: 'Adversarial Search', content: 'Adversarial search problems, also known as games, are those in which two or more agents have conflicting goals. In such environments, the agents must consider the actions of their opponents. The most common algorithm for this is Minimax. Minimax is a recursive algorithm for choosing the next move in an n-player game, usually a two-player, zero-sum game.', codeSnippet: 'def minimax(node, depth, maximizingPlayer):\n  if depth == 0 or node.is_terminal():\n    return node.value\n  # ...', isCompleted: false },
      { id: 'ai7', title: 'Knowledge Base', content: 'A knowledge base is a technology used to store complex structured and unstructured information used by a computer system. The goal of a knowledge base is to enable machines to act as if they have "common sense" or "expertise" by encoding facts and rules in a way that can be processed by an inference engine.', codeSnippet: 'KB = []\nKB.append("Man(Socrates)")\nKB.append("Man(x) => Mortal(x)")', isCompleted: false },
      { id: 'ai8', title: 'Uncertainty', content: 'In many real-world situations, agents must act in the face of uncertainty. This uncertainty arises from partial observability, nondeterminism, and ignorance. Probability theory provides the formal basis for dealing with uncertainty in AI systems.', codeSnippet: 'P(A_given_B) = (P(B_given_A) * P(A)) / P(B)', isCompleted: false },
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
      { id: 'ai20', title: 'Future of AI', content: 'The future of AI holds immense potential and significant challenges. We are looking towards Artificial General Intelligence (AGI), more seamless human-AI collaboration, and the integration of AI into almost every aspect of our lives, from healthcare to entertainment.', codeSnippet: '"""\nAGI remains a future goal.\nFocus on Human-in-the-loop systems.\n"""', isCompleted: false }
    ]
  },
  {
    id: 'ml-tutorial',
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
      }
    ]
  }
];
