import { Course } from '../types';
import DmpOverview from '../components/courses/DMP/Overview.png';
import DmpMindMap from '../components/courses/DMP/Mind Map.png';
import WbpOverview from '../components/courses/WBP/Overview Unit 1.png';
import WbpMindMap from '../components/courses/WBP/Unit 1 Mind Map.png';
import DvaOverview from '../components/courses/DVA/overview unit 1.png';
import DvaMindMap from '../components/courses/DVA/Mind Map Unit 1.png';

export const COLLEGE_COURSES: Course[] = [
  {
    id: 'dmp',
    title: 'Disaster Management',
    category: 'College Subjects',
    icon: 'brain',
    level: 'Intermediate',
    progress: 0,
    lessons: [
      {
        id: 'dmp-u1-overview',
        title: 'Unit 1: Overview',
        content: `  Unit 1: Introduction to Disaster Management  

This module provides a comprehensive overview of Disaster Management, covering basic concepts, classifications, and the management cycle.

  Visual Overview:  
Below is the visual overview of Unit 1. Please refer to this for a structural understanding before proceeding to the detailed modules.`,
        image: DmpOverview,
        mindMapImage: DmpMindMap,
        codeSnippet: undefined,
        isCompleted: false
      },
      {
        id: 'dmp-u1-concepts',
        title: 'Concept & Definitions of Disaster',
        content: `  1. Introduction  
A disaster is a serious disruption of the normal functioning of a community or society, causing widespread human, material, economic, or environmental losses that exceed the ability of the affected community to cope using its own resources. Disasters can occur due to natural causes, human activities, or a combination of both.

  2. Definition of Disaster  
      General Definition:   A disaster is a sudden or progressive event that causes significant damage, destruction, and human suffering.
      UN Definition:   A disaster is a serious disruption of the functioning of a community or society involving widespread losses and impacts, exceeding the affected community’s capacity to cope.

  3. Key Characteristics of a Disaster  
    Sudden or slow onset (earthquake is sudden, drought is slow)
    Large-scale impact on people and property
    Disruption of normal life
    Beyond local coping capacity
    Requires external assistance

  4. Disaster vs Hazard vs Risk  
      Hazard:   A potentially dangerous event or phenomenon (e.g., earthquake, flood).
      Risk:   Probability of loss due to a hazard.
      Disaster:   Actual occurrence causing serious damage and loss.

 Example: 
    Earthquake (Hazard)
    Earthquake in a crowded city (Risk)
    Earthquake causing deaths and damage (Disaster)

  5. Types of Disasters  
      Natural Disasters:   Earthquakes, Floods, Cyclones, Droughts, Landslides, Tsunamis, Volcanic eruptions.
      Man-Made Disasters:   Industrial accidents, Chemical leaks, Nuclear disasters, Fire accidents, Transportation accidents, War and terrorism.

  6. Impact of Disasters  
      Human Impact:   Loss of life, injuries, psychological trauma.
      Economic Impact:   Damage to infrastructure, industries, agriculture.
      Environmental Impact:   Soil erosion, water pollution, deforestation.
      Social Impact:   Displacement of people, disruption of education and health services.

  7. Disaster Management (Brief Concept)  
Disaster Management refers to organized efforts to: Prevent, Prepare, Respond, and Recover. This is commonly known as the   Disaster Management Cycle  .

  8. Importance of Studying Disaster Management  
    Reduces loss of life and property
    Enhances preparedness and awareness
    Promotes sustainable development
    Helps in quick response and recovery

  9. Summary  
    A disaster is a major disruption beyond coping capacity.
    Disasters can be natural or man-made.
    Understanding disaster concepts helps in effective planning and response.`,
        isCompleted: false
      },
      {
        id: 'dmp-u1-hvr',
        title: 'Hazard, Vulnerability, and Risk',
        content: `  1. Introduction  
In Disaster Management, Hazard, Vulnerability, and Risk are three core concepts. A disaster occurs not only because a hazard exists, but because people and systems are vulnerable to it, creating risk.

  2. Hazard  
  Definition:   A hazard is a potentially damaging physical event, phenomenon, or human activity that may cause loss of life, injury, property damage, social and economic disruption, or environmental degradation.
    Hazards may be natural or man-made.
    A hazard does not automatically cause a disaster.
    It becomes dangerous when it affects vulnerable people or systems.

 Types of Hazards: 
      Natural:   Earthquake, Flood, Cyclone, Drought, Landslide.
      Man-Made:   Industrial accidents, Chemical spills, Nuclear accidents, Fires.

  3. Vulnerability  
  Definition:   Vulnerability refers to the degree to which individuals, communities, or systems are likely to be affected by a hazard due to physical, social, economic, or environmental factors.
      Physical Vulnerability:   Weak buildings, poor infrastructure.
      Social Vulnerability:   Poverty, illiteracy, age (children, elderly).
      Economic Vulnerability:   Low income, dependence on agriculture.
      Environmental Vulnerability:   Deforestation, living near rivers.

  4. Risk  
  Definition:   Risk is the probability or likelihood of harmful consequences resulting from the interaction between a hazard and vulnerability.

  Risk Formula:  
Risk = Hazard × Vulnerability

    If either hazard or vulnerability is zero, risk is minimal.
    High hazard + high vulnerability = high risk.
    Risk can be assessed, managed, and reduced.

  5. Relationship between Hazard, Vulnerability, and Risk  
      Hazard:   Potentially dangerous event (Usually cannot be reduced).
      Vulnerability:   Susceptibility to harm (Can be reduced).
      Risk:   Chance of loss (Can be reduced).

  Disaster occurs when a hazard affects a vulnerable population, creating high risk.  

  6. Importance  
    Helps identify high-risk areas.
    Assists in planning and mitigation.
    Reduces loss of life and property.`,
        codeSnippet: '// Risk Calculation\nRisk = Hazard   Vulnerability\n// If Vulnerability is 0, Risk is 0.',
        isCompleted: false
      },
      {
        id: 'dmp-u1-capacity',
        title: 'Capacity & Development',
        content: `  1. Introduction  
Capacity plays a crucial role in reducing disaster impacts. While hazards and vulnerability increase disaster risk, capacity helps individuals, communities, and institutions prepare for, respond to, and recover from disasters.

  2. Capacity  
  Definition:   Capacity refers to the strengths, resources, skills, knowledge, and abilities available within a community, organization, or system that can be used to anticipate, cope with, resist, and recover from the impacts of disasters.
      Types of Capacity:  
          Physical:   Strong buildings, roads, hospitals.
          Social:   Community cooperation, volunteer networks.
          Economic:   Financial resources, insurance.
          Institutional:   Disaster response agencies, early warning systems.
          Technological:   Communication systems, forecasting tools.

  3. Relationship between Capacity, Hazard, Vulnerability, and Risk  
  Formula:   Disaster Risk = (Hazard × Vulnerability) ÷ Capacity
    Higher capacity → Lower disaster risk
    Lower capacity → Higher disaster risk

  4. Disaster and Development  
Disaster and development are interrelated.
      Poor Development Increases Disasters:   Unplanned urbanization, poor housing, environmental degradation.
      Good Development Reduces Impact:   Strong infrastructure, education, poverty reduction.
      Disaster–Development Cycle:   Disasters damage development; poor development increases losses; sustainable development breaks this cycle.

  5. Disaster Management & Phases  
  Definition:   Organized process to reduce disaster impacts.
  Phases:  
1.    Prevention & Mitigation:   Risk assessment, building codes.
2.    Preparedness:   Training, drills, early warning.
3.    Response:   Search and rescue, medical aid.
4.    Recovery:   Rehabilitation, reconstruction.

  6. Role of Capacity  
    Improves preparedness and response.
    Speeds up recovery.
    Promotes self-reliance.

  7. Summary  
    Capacity is the ability to manage disasters effectively.
    Higher capacity reduces disaster risk.
    Capacity building is essential for sustainable societies.`,
        codeSnippet: '// Improved Risk Formula\nDisasterRisk = (Hazard   Vulnerability) / Capacity\n\n// Increase Capacity to Decrease Risk!',
        isCompleted: false
      }
    ]
  },
  {
    id: 'wbp',
    title: 'Web Based Programming',
    category: 'College Subjects',
    icon: 'code',
    level: 'Intermediate',
    progress: 0,
    lessons: [
      {
        id: 'wbp-u1-overview',
        title: 'Unit 1: Overview',
        content: `  Unit 1: Overview of Web Based Programming
                
This unit covers the fundamentals of PHP, including its execution flow, variables, operators, and control structures.

  Visual Overview:
Below is the visual overview of Unit 1.`,
        image: WbpOverview,
        mindMapImage: WbpMindMap,
        codeSnippet: undefined,
        isCompleted: false
      },
      {
        id: 'wbp-u1-notes',
        title: 'Unit 1: Detailed Notes',
        content: `Introduction to Web Applications

 

 

 

1. What is a Web Application?
A web application is a software application that runs on a web server and is accessed through a web browser using the internet or an intranet.
Unlike desktop applications, web applications do not need installation on the user’s system.
Examples: Online banking systems, e-commerce websites, email services, learning management systems.
________________________________________
2. Web Application vs Website
Feature	Website	Web Application
Nature	Informational	Interactive
User Input	Minimal or none	High (forms, login, data entry)
Processing	Mostly static content	Dynamic processing
Example	College website	Online exam portal
________________________________________
3. Components of a Web Application
A typical web application consists of the following components:
1.	Client (Front-End)
o	Runs on the user’s browser
o	Technologies: HTML, CSS, JavaScript
o	Responsible for user interface and interaction
2.	Web Server
o	Receives client requests
o	Processes requests and sends responses
o	Examples: Apache, Nginx, Tomcat
3.	Application Server
o	Contains business logic
o	Handles processing, calculations, validations
4.	Database Server
o	Stores and retrieves data
o	Examples: MySQL, PostgreSQL, Oracle
________________________________________
4. How a Web Application Works
1.	User enters a URL in the browser
2.	Browser sends a request to the web server
3.	Server processes the request
4.	Data is fetched from the database (if required)
5.	Server sends a response back to the browser
6.	Browser displays the result to the user
________________________________________
5. Types of Web Applications
1.	Static Web Applications
o	Fixed content
o	No database interaction
o	Example: Portfolio website
2.	Dynamic Web Applications
o	Content changes based on user input
o	Uses databases
o	Example: Social media sites
3.	Single Page Applications (SPA)
o	Loads a single HTML page
o	Updates content dynamically
o	Example: Gmail
4.	Multi-Page Applications (MPA)
o	Multiple pages reload from server
o	Example: Traditional e-commerce sites
________________________________________
6. Advantages of Web Applications
•	Platform independent
•	Easy maintenance and updates
•	Accessible from anywhere
•	No installation required
•	Centralized data storage
________________________________________
7. Limitations of Web Applications
•	Requires internet connection
•	Browser compatibility issues
•	Security concerns
•	Performance depends on server and network
________________________________________
8. Common Technologies Used
•	Front-End: HTML, CSS, JavaScript
•	Back-End: Java, PHP, Python, Node.js
•	Database: MySQL, Oracle, PostgreSQL
•	Protocols: HTTP, HTTPS
________________________________________
9. Applications of Web Applications
•	Online education systems
•	E-commerce platforms
•	Banking and finance systems
•	Healthcare portals
•	Government services

Client Side Scripting vs Server Side Scripting
 

 

 
 
________________________________________
1. Client Side Scripting
Client-side scripting refers to scripts that are executed on the user’s web browser instead of the server. These scripts are mainly used to improve user interaction, form validation, and dynamic page behavior.
Key Features
•	Runs on the browser
•	Reduces server load
•	Faster execution
•	Visible to users (view source)
Common Client-Side Scripting Languages
•	JavaScript
•	VBScript (obsolete)
Uses
•	Form validation
•	Dynamic content updates
•	Event handling (click, hover, etc.)
•	UI effects and animations
Advantages
•	Faster response time
•	Less server load
•	Improved user experience
Limitations
•	Security issues (code visible to user)
•	Browser compatibility problems
•	Cannot access server databases directly
________________________________________
2. Server Side Scripting
Server-side scripting refers to scripts that are executed on the web server. The server processes the request, performs operations, and sends the final output to the client.
Key Features
•	Runs on the server
•	Secure processing
•	Can access databases
•	Slower than client-side due to request-response cycle
Common Server-Side Scripting Languages
•	PHP
•	Java (JSP, Servlets)
•	Python
•	ASP.NET
•	Node.js
Uses
•	Database operations
•	User authentication
•	Business logic
•	File handling
Advantages
•	High security
•	Browser independent
•	Direct database access
Limitations
•	Slower execution
•	Increased server load
•	Requires server configuration
________________________________________
3. Differences Between Client Side and Server Side Scripting
Feature	Client Side Scripting	Server Side Scripting
Execution Location	Browser	Server
Processing Speed	Faster	Slower
Security	Less secure	More secure
Code Visibility	Visible to user	Hidden from user
Database Access	Not allowed	Allowed
Server Load	Low	High
Dependency	Browser dependent	Server dependent
________________________________________
4. Example
Server Side (PHP):
<?php
  echo "Welcome to Web Programming";
?>

Web Servers: Local Servers and Remote Servers
 

________________________________________
1. What is a Web Server?
A web server is a system (software or hardware) that stores, processes, and delivers web pages to users over the internet using HTTP/HTTPS protocols.
A web server responds to requests from a web browser and sends back web content such as HTML pages, images, and data.
________________________________________
2. Local Web Server
A local web server is installed and run on a local computer. It is mainly used for development, testing, and learning purposes.
Characteristics
•	Runs on localhost (127.0.0.1)
•	Accessible only on the local machine or local network
•	No internet connection required
•	Used by developers and students
Examples of Local Server Software
•	Apache (via XAMPP, WAMP, LAMP)
•	Tomcat
•	IIS (Windows)
Advantages
•	Safe testing environment
•	Faster development
•	No hosting cost
•	Works offline
Limitations
•	Not accessible globally
•	Not suitable for real users
•	Limited performance and scalability
________________________________________
3. Remote Web Server
A remote web server is hosted on the internet and can be accessed from anywhere in the world using a domain name or IP address.
Characteristics
•	Runs on cloud or hosting provider servers
•	Accessible through the internet
•	Requires hosting and domain
•	Used for live applications
Examples of Remote Servers
•	Cloud servers (AWS, Azure, Google Cloud)
•	Shared hosting servers
•	Dedicated servers
Advantages
•	Global accessibility
•	High availability
•	Scalable resources
•	Professional maintenance
Limitations
•	Hosting cost
•	Requires internet connection
•	Security management required
________________________________________
4. Differences Between Local Server and Remote Server
Feature	Local Server	Remote Server
Location	User’s computer	Internet/cloud
Accessibility	Local machine only	Worldwide
Internet Requirement	Not required	Required
Usage	Development & testing	Live deployment
Cost	Free	Paid
Performance	Limited	High
________________________________________
5. When to Use Which Server?
•	Local Server:
o	Learning web development
o	Testing web applications
o	Debugging code
•	Remote Server:
o	Hosting live websites
o	Production applications
o	Business and commercial use
________________________________________
6. Example Scenario
•	A student creates a website using HTML, CSS, and PHP on localhost → Local Server
•	The same website uploaded to a hosting provider and accessed using a domain → Remote Server

WAMP, LAMP, XAMPP & MAMP Server & Static Website vs Dynamic Website Development
________________________________________
1. Introduction to Local Server Environments
Local server environments allow developers/students to run web applications on their own computer before deploying them to a remote server.
These servers bundle Web Server + Database + Programming Language.
 
 
 
 
________________________________________
2. WAMP Server
What is WAMP?
WAMP stands for:
•	W – Windows
•	A – Apache
•	M – MySQL
•	P – PHP
It is used on Windows OS only.
Installation Steps (WAMP)
1.	Download WAMP server installer
2.	Run the installer
3.	Choose installation directory
4.	Select default browser
5.	Finish installation
6.	Start WAMP server
7.	Check server via: http://localhost
Advantages
•	Easy to install on Windows
•	Good for beginners
•	Simple interface
Limitations
•	Windows only
•	Less flexible than XAMPP
________________________________________
3. LAMP Server
What is LAMP?
LAMP stands for:
•	L – Linux
•	A – Apache
•	M – MySQL
•	P – PHP / Python / Perl
Used mainly on Linux systems.
Installation Steps (LAMP – Basic)
1.	Install Apache server
2.	Install MySQL database
3.	Install PHP
4.	Configure Apache & PHP
5.	Restart services
6.	Test using localhost
Advantages
•	Highly secure
•	Open-source
•	Preferred for production servers
Limitations
•	Complex installation
•	Requires Linux knowledge
________________________________________
4. XAMPP Server
What is XAMPP?
XAMPP stands for:
•	X – Cross-platform
•	A – Apache
•	M – MySQL
•	P – PHP
•	P – Perl
Works on Windows, Linux, and macOS.
Installation Steps (XAMPP)
1.	Download XAMPP installer
2.	Run setup file
3.	Select components (Apache, MySQL, PHP)
4.	Complete installation
5.	Start Apache & MySQL from control panel
6.	Open: http://localhost
Advantages
•	Cross-platform
•	Very easy to use
•	Most popular for students
Limitations
•	Not recommended for production
•	Security settings are basic
________________________________________
5. MAMP Server
What is MAMP?
MAMP stands for:
•	M – macOS
•	A – Apache
•	M – MySQL
•	P – PHP
Used mainly on macOS (also available for Windows).
Installation Steps (MAMP)
1.	Download MAMP
2.	Install application
3.	Launch MAMP
4.	Start servers
5.	Access site via localhost
Advantages
•	Best for macOS users
•	Simple UI
•	Stable environment
Limitations
•	Some features are paid
•	Less common in colleges
________________________________________
6. Comparison of WAMP, LAMP, XAMPP & MAMP
Server	OS	Ease of Use	Popularity
WAMP	Windows	Easy	Medium
LAMP	Linux	Difficult	High (Production)
XAMPP	Cross-platform	Very Easy	Very High
MAMP	macOS	Easy	Medium
________________________________________
7. Static Website Development
What is a Static Website?
A static website displays fixed content.
The same page is shown to all users.
Technologies Used
•	HTML
•	CSS
•	Basic JavaScript
Characteristics
•	No database
•	Fast loading
•	Simple structure
Examples
•	Portfolio website
•	College information site
Advantages
•	Easy to develop
•	Low cost
•	High speed
Limitations
•	No user interaction
•	Content updates manually
________________________________________
8. Dynamic Website Development
What is a Dynamic Website?
A dynamic website generates content at runtime based on user interaction.
Technologies Used
•	HTML, CSS, JavaScript
•	PHP / JSP / Python
•	Database (MySQL, Oracle)
Characteristics
•	Database-driven
•	User interaction supported
•	Content changes dynamically
Examples
•	E-commerce websites
•	Online exam portals
•	Social media platforms
Advantages
•	Interactive
•	Easy content management
•	Personalized user experience
Limitations
•	More complex
•	Slower than static sites
•	Requires server & database
________________________________________
9. Static vs Dynamic Website (Comparison)
Feature	Static Website	Dynamic Website
Content	Fixed	Changing
Database	Not used	Used
Interaction	No	Yes
Speed	Fast	Slower
Complexity	Simple	Complex
Cost	Low	Higher

Introduction to PHP: Data Types, Variables & Super Global Variables
 
 
 
 
________________________________________
1. Introduction to PHP
PHP (Hypertext Preprocessor) is a server-side scripting language mainly used for web application development.
PHP scripts are executed on the server, and the result is sent to the browser as plain HTML.
Features of PHP
•	Open source
•	Easy to learn
•	Platform independent
•	Supports databases (MySQL, Oracle, PostgreSQL)
•	Embedded within HTML
Example of PHP Code
<?php
echo "Welcome to Web Based Programming";
?>
________________________________________
2. PHP Data Types
PHP supports different types of data to store values.
2.1 Integer
Used to store whole numbers.
$age = 20;
________________________________________
2.2 Float (Double)
Used to store decimal numbers.
$price = 99.50;
________________________________________
2.3 String
Used to store text.
$name = "Rohit";
________________________________________
2.4 Boolean
Used to store true or false.
$isLogin = true;
________________________________________
2.5 Array
Used to store multiple values in one variable.
$subjects = array("HTML", "CSS", "PHP");
________________________________________
2.6 Object
Used to store data and functions together.
class Student {
  public $name = "Amit";
}
$obj = new Student();
________________________________________
2.7 NULL
Represents no value.
$var = NULL;
________________________________________
3. PHP Variables
A variable is used to store data temporarily.
Rules for PHP Variables
•	Starts with $ symbol
•	Must begin with a letter or underscore
•	Case-sensitive
•	Cannot start with a number
Example
$name = "Ankit";
$age = 21;
________________________________________
3.1 Variable Scope
1.	Local Variable – Defined inside a function
2.	Global Variable – Defined outside a function
3.	Static Variable – Retains value between function calls
function test() {
  static $x = 0;
  $x++;
  echo $x;
}
________________________________________
4. PHP Super Global Variables
Super Globals are predefined variables available anywhere in the script.
 
 
 
________________________________________
List of PHP Super Global Variables
Super Global	Description
$_GET	Collects data from URL
$_POST	Collects form data
$_REQUEST	Collects GET, POST & COOKIE data
$_SERVER	Server information
$_SESSION	Stores session data
$_COOKIE	Stores cookie data
$_FILES	File upload data
$_ENV	Environment variables
$GLOBALS	Access global variables
________________________________________
4.1 $_GET
Used to collect data sent via URL.
echo $_GET['name'];
________________________________________
4.2 $_POST
Used to collect form data securely.
echo $_POST['username'];
________________________________________
4.3 $_SERVER
Provides server and execution environment information.
echo $_SERVER['SERVER_NAME'];
________________________________________
4.4 $_SESSION
Used to store user data across multiple pages.
session_start();
$_SESSION['user'] = "Admin";
________________________________________
4.5 $_COOKIE
Used to store small data on user’s browser.
setcookie("user", "Admin", time()+3600);
________________________________________
5. GET vs POST (Short Comparison)
Feature	GET	POST
Data Visibility	Visible in URL	Hidden
Security	Less secure	More secure
Data Limit	Limited	Large
Usage	Search forms	Login forms

PHP: Constants, Comments, Operators & Expressions, Regular Expressions, Advantages of PHP
 
 
________________________________________
1. PHP Constants
A constant is an identifier whose value cannot be changed once defined.
Features of Constants
•	Do not use $ symbol
•	Case-sensitive by default
•	Global scope
Defining Constants
define("SITE_NAME", "MyWebsite");
echo SITE_NAME;
Using const keyword:
const PI = 3.14;
________________________________________
2. PHP Comments
Comments are used to explain code and are ignored by the PHP interpreter.
Types of Comments
1.	Single-line comment
// This is a single-line comment
# This is also a single-line comment
2.	Multi-line comment
/*
 This is
 a multi-line comment
*/
________________________________________
3. PHP Operators
Operators are symbols used to perform operations on variables and values.
3.1 Arithmetic Operators
Operator	Description
+	Addition
-	Subtraction
*	Multiplication
/	Division
%	Modulus
echo 10 + 5;
________________________________________
3.2 Assignment Operators
Operator	Example
=	$x = 10
+=	$x += 5
-=	$x -= 2
________________________________________
3.3 Comparison Operators
Operator	Meaning
==	Equal
===	Identical
!=	Not equal
>	Greater than
if ($a == $b) { }
________________________________________
3.4 Logical Operators
Operator	Meaning
&&	AND
||	OR
!	NOT
________________________________________
3.5 Increment / Decrement Operators
$x++;
$y--;
________________________________________
4. PHP Expressions
An expression is a combination of variables, operators, and values that produces a result.
Example
$result = ($a + $b) * 2;
________________________________________
5. PHP Regular Expressions
Regular Expressions (Regex) are used for pattern matching in strings.
Common PHP Regex Functions
Function	Purpose
preg_match()	Match pattern
preg_replace()	Replace text
preg_split()	Split string
________________________________________
Example: Email Validation
$email = "test@gmail.com";
if (preg_match("/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i", $email)) {
  echo "Valid Email";
} else {
  echo "Invalid Email";
}
________________________________________
Common Regex Patterns
Pattern	Meaning
^	Start of string
$	End of string
.	Any character
*	Zero or more
+	One or more
[a-z]	Lowercase letters
________________________________________
6. Advantages of PHP
Why Use PHP?
•	Open source and free
•	Easy to learn and use
•	Platform independent
•	Fast execution
•	Supports many databases
•	Large community support
•	Widely used in web development

**Control Statements in PHP
Conditional Statements & Loops**
 


 
________________________________________
1. Control Statements in PHP
Control statements are used to control the flow of execution of a PHP program.
They help in decision making and repetition of tasks.
Control statements are mainly of two types:
1.	Conditional Statements
2.	Looping Statements
________________________________________
2. Conditional Statements in PHP
Conditional statements execute code based on conditions.
________________________________________
2.1 if Statement
Executes code only if the condition is true.
$age = 20;
if ($age >= 18) {
  echo "Eligible to vote";
}
________________________________________
2.2 if–else Statement
Executes one block if condition is true, otherwise another block.
$marks = 45;
if ($marks >= 40) {
  echo "Pass";
} else {
  echo "Fail";
}
________________________________________
2.3 if–elseif–else Statement
Used to test multiple conditions.
$marks = 75;
if ($marks >= 80) {
  echo "Grade A";
} elseif ($marks >= 60) {
  echo "Grade B";
} else {
  echo "Grade C";
}
________________________________________
2.4 Nested if Statement
An if statement inside another if statement.
$age = 22;
$citizen = true;

if ($age >= 18) {
  if ($citizen) {
    echo "Eligible to vote";
  }
}
________________________________________
2.5 switch–case Statement
Used when there are multiple fixed values.
$day = 3;
switch ($day) {
  case 1:
    echo "Monday";
    break;
  case 2:
    echo "Tuesday";
    break;
  case 3:
    echo "Wednesday";
    break;
  default:
    echo "Invalid day";
}
Important Points:
•	break stops execution
•	default executes if no case matches
________________________________________
3. Looping Statements in PHP
Loops are used to execute a block of code repeatedly.
________________________________________
3.1 for Loop
Used when the number of iterations is known.
for ($i = 1; $i <= 5; $i++) {
  echo $i . "<br>";
}
________________________________________
3.2 while Loop
Executes code while condition is true.
$i = 1;
while ($i <= 5) {
  echo $i . "<br>";
  $i++;
}
________________________________________
3.3 do–while Loop
Executes code at least once, even if condition is false.
$i = 1;
do {
  echo $i . "<br>";
  $i++;
} while ($i <= 5);
________________________________________
3.4 foreach Loop
Used to iterate through arrays.
$subjects = array("HTML", "CSS", "PHP");
foreach ($subjects as $sub) {
  echo $sub . "<br>";
}
________________________________________
4. Comparison of Loops
Loop	Use Case
for	Known number of iterations
while	Unknown iterations
do-while	Execute at least once
foreach	Arrays
________________________________________
5. Conditional vs Loop Statements
Feature	Conditional	Loop
Purpose	Decision making	Repetition
Executes	Based on condition	Multiple times
Examples	if, switch	for, while

Arrays in PHP Indexed Array, Associative Array, Multidimensional Array & Predefined Functions
 
 
 
 
________________________________________
1. Introduction to Arrays in PHP
An array is a special variable that can store multiple values in a single variable.
Each value is stored with an index or key.
Why Use Arrays?
•	Store multiple related values
•	Reduce number of variables
•	Easy data management
________________________________________
2. Indexed Array
An indexed array uses numeric indexes (starting from 0 by default).
Declaration
$subjects = array("HTML", "CSS", "PHP", "JavaScript");
Accessing Elements
echo $subjects[0];   // HTML
Using Loop
for ($i = 0; $i < count($subjects); $i++) {
  echo $subjects[$i] . "<br>";
}
________________________________________
3. Associative Array
An associative array uses named keys instead of numeric indexes.
Declaration
$student = array(
  "name" => "Rohit",
  "age" => 21,
  "course" => "BCA"
);
Accessing Elements
echo $student["name"];
Using foreach Loop
foreach ($student as $key => $value) {
  echo $key . " : " . $value . "<br>";
}
________________________________________
4. Multidimensional Array
A multidimensional array is an array containing one or more arrays.
Example
$students = array(
  array("Amit", 20, "BCA"),
  array("Neha", 21, "BCA"),
  array("Ravi", 22, "BCA")
);
Accessing Elements
echo $students[0][0];   // Amit
Using Nested Loop
for ($i = 0; $i < count($students); $i++) {
  for ($j = 0; $j < count($students[$i]); $j++) {
    echo $students[$i][$j] . " ";
  }
  echo "<br>";
}
________________________________________
5. PHP Array Predefined Functions
PHP provides many built-in functions to handle arrays.
Common Array Functions
Function	Description
count()	Count elements
sort()	Sort ascending
rsort()	Sort descending
array_push()	Add element at end
array_pop()	Remove last element
array_merge()	Merge arrays
in_array()	Check value exists
array_keys()	Get all keys
array_values()	Get all values
________________________________________
Examples
count()
echo count($subjects);
sort()
sort($subjects);
array_push()
array_push($subjects, "React");
in_array()
if (in_array("PHP", $subjects)) {
  echo "Found";
}
________________________________________
6. Difference Between Indexed & Associative Array
Feature	Indexed Array	Associative Array
Index Type	Numeric	Named
Access	Using index	Using key
Usage	Lists	Key–value data`,
        codeSnippet: undefined,
        isCompleted: false
      }
    ]
  },
  {
    id: 'dva',
    title: 'Data Visualisation and Analytics',
    category: 'College Subjects',
    icon: 'bar-chart-2',
    level: 'Intermediate',
    progress: 0,
    lessons: [
      {
        id: 'dva-u1-overview',
        title: 'Unit 1: Overview',
        content: `  Unit 1: Overview of Data Visualisation and Analytics
                
This unit introduces the fundamentals of data visualization, its importance, and various techniques to represent data effectively.

  Visual Overview:
Below is the visual overview of Unit 1.`,
        image: DvaOverview,
        mindMapImage: DvaMindMap,
        codeSnippet: undefined,
        isCompleted: false
      },
      {
        id: 'dva-u1-notes',
        title: 'Unit 1: Detailed Notes',
        content: `Analytics: Basic Nomenclature
 
 
 
1. Analytics
Analytics is the systematic process of collecting, cleaning, analyzing, and interpreting data to discover useful patterns, trends, and insights that help in decision-making.

In simple words:
Analytics = Using data to understand what happened, why it happened, and what may happen next.
________________________________________
2. Data
Data refers to raw facts and figures that have no meaning by themselves.
Examples:
•	Numbers: 45, 78, 102
•	Text: Rohit, Delhi
•	Dates: 12-07-2025
•	Images, audio, video files
Data can be:
•	Structured (tables, rows, columns)
•	Unstructured (text, images, videos)
________________________________________
3. Information
Information is processed data that is meaningful and useful.
Example:
•	Data: 45, 50, 55
•	Information: Average marks of a student = 50
Data → Processing → Information
________________________________________
4. Dataset
A dataset is a collection of related data, usually stored in tabular form.
Example (Student Dataset):
Roll No	Name	Marks
101	Aman	78
102	Neha	85
________________________________________
5. Variable
A variable is a characteristic or attribute whose value can change.
Examples:
•	Age
•	Marks
•	Salary
•	City
Types of Variables:
•	Numerical (Age, Marks)
•	Categorical (Gender, Department)
________________________________________
6. Observation / Record
An observation (or record) is one complete row of data in a dataset.
Example:
•	101 | Aman | 78 → one observation
________________________________________
7. Attribute / Feature
An attribute (feature) is a column in a dataset that describes a property.
Example:
•	Roll No
•	Name
•	Marks
________________________________________
8. Descriptive Analytics
Descriptive analytics answers:

“What happened?”
Examples:
•	Total sales last month
•	Average marks of a class
•	Attendance percentage
Uses charts, tables, and summaries.
________________________________________
9. Diagnostic Analytics
Diagnostic analytics answers:
“Why did it happen?”
Examples:
•	Why did sales decrease?
•	Why did students fail in a subject?
________________________________________
10. Predictive Analytics
Predictive analytics answers:
“What is likely to happen?”
Examples:
•	Predict next semester results
•	Forecast future sales
Uses historical data + statistical models.
________________________________________
11. Prescriptive Analytics
Prescriptive analytics answers:
“What should we do?”
Examples:
•	Which strategy will increase sales?
•	What actions will improve student performance?
________________________________________
12. Data Visualization
Data visualization is the graphical representation of data to make insights easy to understand.
Examples:
•	Bar charts
•	Pie charts
•	Line graphs
•	Dashboards
________________________________________
13. Insight
An insight is a useful conclusion drawn from analyzed data that helps in decision-making.
Example:
•	“Students who attend more than 75% classes score higher marks.”
________________________________________
14. Decision Making
Decision making is the final step of analytics, where insights are used to take actions.
Example:
•	Conduct extra classes for weak students
•	Increase stock of high-selling products


Analytics Process Model, Analytics Part in Different Profiles & Analytical Model Requirements

 

 
 
________________________________________
1. Analytics Process Model
The Analytics Process Model explains the step-by-step approach used to convert raw data into meaningful insights and decisions.
Steps of Analytics Process Model
1. Problem Definition
•	Clearly define the business or academic problem.
•	Decide what needs to be analyzed.
Example:
Why are student pass percentages decreasing?
________________________________________
2. Data Collection
•	Collect relevant data from different sources.
Sources:
•	Databases
•	Surveys
•	Sensors
•	Logs
•	Online platforms
________________________________________
3. Data Cleaning
•	Remove errors, duplicates, and missing values.
•	Improve data quality.
Example:
Removing incomplete student records.
________________________________________
4. Data Processing / Transformation
•	Convert data into a suitable format.
•	Normalize, aggregate, or encode data.
________________________________________
5. Data Analysis
•	Apply statistical, logical, or analytical techniques.
•	Identify patterns and relationships.
________________________________________
6. Data Visualization
•	Present results using charts and graphs.
•	Makes analysis easy to understand.
________________________________________
7. Interpretation & Insight Generation
•	Understand results and extract insights.
________________________________________
8. Decision Making
•	Take actions based on insights.
Example:
Introduce remedial classes for weak students.
________________________________________
Analytics Part in Different Profiles
Analytics plays a role in various professional profiles across industries.
   

 
 
1. Data Analyst
•	Collects, cleans, and analyzes data
•	Creates reports and dashboards
•	Uses Excel, SQL, visualization tools
Focus: What happened & why?
________________________________________
2. Business Analyst
•	Understands business problems
•	Uses analytics to improve processes
•	Acts as a bridge between technical team & management
Focus: Business improvement using data
________________________________________
3. Data Scientist
•	Builds predictive and prescriptive models
•	Uses machine learning techniques
•	Works with large and complex datasets
Focus: Future predictions & optimization
________________________________________
4. Marketing Analyst
•	Analyzes customer behavior
•	Measures campaign performance
•	Improves sales and customer engagement
________________________________________
5. Financial Analyst
•	Risk analysis
•	Profit forecasting
•	Budget planning
________________________________________
6. Operations Analyst
•	Optimizes processes
•	Improves efficiency and productivity
________________________________________
7. Academic / Research Profile
•	Analyzes survey data
•	Uses analytics for research outcomes
________________________________________
3. Analytical Model
An Analytical Model is a mathematical, statistical, or logical representation of a real-world problem used to analyze data and make predictions.
Examples of Analytical Models
•	Statistical models
•	Regression models
•	Classification models
•	Time-series models
Purpose:
•	Identify patterns
•	Predict outcomes
•	Support decisions
________________________________________
4. Analytical Model Requirements
Before building an analytical model, certain requirements must be fulfilled.

      
 
1. Clear Objective
•	Define what the model should achieve.
Example:
Predict student performance.
________________________________________
2. Quality Data
•	Data must be:
o	Accurate
o	Complete
o	Consistent
o	Relevant
________________________________________
3. Appropriate Variables
•	Identify correct input (independent) and output (dependent) variables.
________________________________________
4. Data Volume
•	Sufficient data is required for reliable results.
________________________________________
5. Assumptions
•	Model assumptions must be valid.
Example:
Linear relationship between variables.
________________________________________
6. Tools & Techniques
•	Selection of proper tools:
o	Excel
o	R
o	Python
o	Visualization tools
________________________________________
7. Validation & Testing
•	Check accuracy and reliability.
•	Compare predicted results with actual outcomes.
________________________________________
8. Interpretability
•	Model results should be easy to understand.
________________________________________
9. Scalability
•	Model should handle future data growth.

Data Sources for Data Collection, Sampling & Sampling Distribution

 

 
 
________________________________________
1. Data Sources for Data Collection
Data sources are the origins from where data is collected for analysis. They are mainly classified into Primary and Secondary data sources.
________________________________________
1.1 Primary Data Sources
Primary data is collected for the first time directly from the source.
Methods of Primary Data Collection
1.	Surveys & Questionnaires
o	Online or offline forms
2.	Interviews
o	Face-to-face or telephonic
3.	Observations
o	Watching and recording events
4.	Experiments
o	Lab or field experiments
5.	Sensors & IoT Devices
o	Temperature, traffic sensors, etc.
Advantages:
•	Accurate and relevant
•	Updated data
Disadvantages:
•	Time-consuming
•	Costly
________________________________________
1.2 Secondary Data Sources
Secondary data is already collected and published by others.
Examples of Secondary Data Sources
•	Government reports
•	Company databases
•	Research papers
•	Websites and online repositories
•	Social media data
Advantages:
•	Easy to access
•	Low cost
Disadvantages:
•	May be outdated
•	Less specific
________________________________________
Comparison: Primary vs Secondary Data
Feature	Primary Data	Secondary Data
Collected by	Researcher	Others
Cost	High	Low
Time	More	Less
Accuracy	High	Moderate
________________________________________
2. Sampling
2.1 Population
Population is the entire group from which data is to be collected.
Example:
All BCA students in a college.
________________________________________
2.2 Sample
A sample is a small subset of the population used for analysis.
Example:
100 BCA students selected from the college.
Sampling saves time, cost, and effort.
________________________________________
2.3 Sampling
Sampling is the process of selecting a sample from a population.
________________________________________
3. Types of Sampling
   

3.1 Probability Sampling
Each element has a known chance of selection.
1.	Simple Random Sampling
o	Every unit has equal chance
2.	Systematic Sampling
o	Every nth item is selected
3.	Stratified Sampling
o	Population divided into groups (strata)
4.	Cluster Sampling
o	Population divided into clusters
________________________________________
3.2 Non-Probability Sampling
Selection is not random.
1.	Convenience Sampling
2.	Judgmental Sampling
3.	Quota Sampling
4.	Snowball Sampling
________________________________________
4. Sampling Distribution
4.1 Definition
A Sampling Distribution is the probability distribution of a statistic (mean, proportion, etc.) obtained from all possible samples of the same size drawn from a population.
________________________________________
4.2 Example
•	Population: Marks of all students
•	Sample size: 30 students
•	Statistic: Sample mean
Repeating this process creates a sampling distribution of means.
________________________________________
4.3 Importance of Sampling Distribution
•	Helps in statistical inference
•	Basis of hypothesis testing
•	Used to estimate population parameters
________________________________________
5. Central Limit Theorem (Basic Idea)
•	For a large sample size, the sampling distribution of the mean becomes approximately normal, regardless of population distribution.
This concept is fundamental in analytics.
________________________________________
6. Difference Between Population Distribution & Sampling Distribution
Feature	Population Distribution	Sampling Distribution
Based on	Entire population	Sample statistics
Size	Large	Depends on sample size
Usage	Actual data	Estimation & inference

Types of Data Elements, Missing Values, Outlier Detection & Treatment
 

 
________________________________________
1. Types of Data Elements
Data elements are the basic units of data used in analytics. They are classified based on nature, measurement, and structure.
________________________________________
1.1 Qualitative (Categorical) Data
Data that represents categories or labels.
a) Nominal Data
•	No natural order
•	Used for identification
Examples:
Gender, Blood Group, Department
________________________________________
b) Ordinal Data
•	Has a meaningful order
•	Difference between values is not measurable
Examples:
Rank (1st, 2nd, 3rd), Grade (A, B, C)
________________________________________
1.2 Quantitative (Numerical) Data
Data represented by numbers.
a) Discrete Data
•	Countable values
•	Whole numbers
Examples:
Number of students, Number of books
________________________________________
b) Continuous Data
•	Measured values
•	Can take decimal values
Examples:
Height, Weight, Time, Temperature
________________________________________
1.3 Structured vs Unstructured Data
•	Structured: Tables, databases
•	Unstructured: Text, images, videos
________________________________________
2. Missing Values
2.1 Definition
Missing values occur when data is not recorded or unavailable for some observations.
Example:
Marks column has blank entries.
________________________________________
2.2 Causes of Missing Values
•	Data entry errors
•	Non-response in surveys
•	System failure
•	Data corruption
________________________________________
2.3 Types of Missing Data
1.	MCAR (Missing Completely at Random)
2.	MAR (Missing at Random)
3.	MNAR (Missing Not at Random)
 
________________________________________
2.4 Treatment of Missing Values
Method	Description
Deletion	Remove rows/columns
Mean/Median	Replace with average
Mode	For categorical data
Forward/Backward Fill	Use nearby values
Prediction	Use models to estimate
________________________________________
3. Outliers
3.1 Definition
An outlier is a data value that significantly differs from other observations.
Example:
Marks: 45, 48, 50, 52, 98
________________________________________
3.2 Causes of Outliers
•	Measurement errors
•	Data entry mistakes
•	Genuine rare events
________________________________________
4. Outlier Detection Methods
4.1 Statistical Methods
•	Z-Score Method
•	IQR (Interquartile Range) Method
________________________________________
4.2 Visualization Methods
•	Box plot
•	Scatter plot
•	Histogram
________________________________________
4.3 Rule-Based Methods
•	Domain knowledge rules
________________________________________
5. Outlier Treatment
 
 
Methods to Handle Outliers
1.	Remove Outliers
o	If error or irrelevant
2.	Cap or Floor (Winsorization)
o	Replace extreme values
3.	Transformation
o	Log or square root
4.	Separate Analysis
o	Analyze separately if important
Never remove outliers without proper justification.
________________________________________
6. Missing Values vs Outliers (Comparison)
Aspect	Missing Values	Outliers
Meaning	Data not available	Extreme value
Cause	Non-response, error	Error or rare event
Handling	Imputation or removal	Detection & treatment

Standardization using Min–Max and Z-Score
 

 
 
________________________________________
1. What is Standardization (Feature Scaling)?
Standardization is the process of bringing numerical data to a common scale so that features with large values do not dominate features with small values during analysis.
Why it is needed:
•	Different units (marks, salary, age) cause bias
•	Improves accuracy of analysis and models
•	Makes comparison easier
________________________________________
2. Min–Max Standardization (Normalization)
2.1 Definition
Min–Max standardization rescales data to a fixed range, usually 0 to 1.
________________________________________
2.2 Formula
 
________________________________________
2.3 Example
 
After Min–Max scaling, all values lie between 0 and 1.
________________________________________
2.4 Advantages
•	Easy to understand
•	Maintains original relationships
2.5 Disadvantages
•	Highly sensitive to outliers
•	New data outside range breaks scaling
________________________________________
3. Z-Score Standardization
3.1 Definition
Z-Score standardization converts data into a form where:
•	Mean = 0
•	Standard Deviation = 1
________________________________________
3.2 Formula
 ________________________________________
3.3 Example
Given Data: 50, 60, 70
 
This means 70 is 1 standard deviation above the mean.
________________________________________
3.4 Advantages
•	Less affected by outliers
•	Works well when data follows normal distribution
3.5 Disadvantages
•	Results include negative values
•	Harder to interpret than Min–Max
________________________________________
4. Min–Max vs Z-Score (Comparison)
Feature	Min–Max Scaling	Z-Score Scaling
Output Range	0 to 1	No fixed range
Mean	Not fixed	0
Std. Deviation	Not fixed	1
Outlier Effect	High	Low
Usage	Visualization, simple models	Statistical & ML models
________________________________________
5. When to Use Which?
•	Min–Max
o	When data has no extreme outliers
o	When you need values between 0 and 1
•	 Z-Score
o	When data has outliers
o	When data is normally distributed

Categorization & Segmentation
 
 
 
________________________________________
1. Categorization
1.1 Definition
Categorization is the process of grouping data into predefined categories or classes based on shared characteristics.
It answers: “Which category does this data belong to?”
________________________________________
1.2 Purpose of Categorization
•	Simplifies complex data
•	Improves understanding and reporting
•	Helps in comparison and analysis
________________________________________
1.3 Examples of Categorization
•	Students → Pass / Fail
•	Marks → Low / Medium / High
•	Age → Child / Adult / Senior
•	Products → Electronics / Clothing / Grocery
________________________________________
1.4 Types of Categorization
a) Manual Categorization
•	Categories defined by humans
•	Rule-based
Example:
Marks ≥ 40 → Pass
________________________________________
b) Automatic Categorization
•	Uses algorithms or rules
•	Data-driven
Example:
Email → Spam / Not Spam
________________________________________
1.5 Advantages
•	Easy interpretation
•	Improves visualization
•	Reduces data complexity
________________________________________
2. Segmentation
2.1 Definition
Segmentation is the process of dividing a dataset into meaningful and homogeneous groups (segments) based on similarity.
It answers: “How can data be divided into similar groups?”
________________________________________
2.2 Purpose of Segmentation
•	Identifies hidden patterns
•	Helps in targeted analysis
•	Improves decision-making
________________________________________
2.3 Examples of Segmentation
•	Customers segmented by buying behavior
•	Students grouped by performance level
•	Users segmented by activity patterns
________________________________________
2.4 Types of Segmentation
a) Demographic Segmentation
•	Age, gender, income
b) Geographic Segmentation
•	City, state, country
c) Behavioral Segmentation
•	Purchase history, usage pattern
d) Psychographic Segmentation
•	Interests, lifestyle, attitude
________________________________________
3. Categorization vs Segmentation
Aspect	Categorization	Segmentation
Basis	Predefined rules	Data similarity
Nature	Simple	Analytical
Groups	Fixed	Dynamic
Example	Pass / Fail	Performance-based clusters
Complexity	Low	High
________________________________________
4. Role in Data Analytics
•	Categorization helps in labeling data
•	Segmentation helps in discovering structure in data
•	Both improve data visualization and analysis`,
        codeSnippet: undefined,
        isCompleted: false
      }
    ]
  }
];
