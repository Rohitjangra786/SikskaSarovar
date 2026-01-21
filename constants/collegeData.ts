import { Course } from '../types';
import DmpOverview from '../components/courses/DMP/Overview.png';
import DmpMindMap from '../components/courses/DMP/Mind Map.png';
import WbpOverview from '../components/courses/WBP/Overview Unit 1.png';
import WbpMindMap from '../components/courses/WBP/Unit 1 Mind Map.png';

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
  }
];
