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
        content: `### Unit 1: Introduction to Disaster Management

This module provides a comprehensive overview of Disaster Management, covering basic concepts, classifications, and the management cycle.

### Visual Overview
Below is the visual overview of Unit 1. Please refer to this for a structural understanding before proceeding to the detailed modules.`,
        image: DmpOverview,
        mindMapImage: DmpMindMap,
        codeSnippet: undefined,
        isCompleted: false
      },
      {
        id: 'dmp-u1-concepts',
        title: 'Concept & Definitions of Disaster',
        content: `### Introduction
A disaster is a serious disruption of the normal functioning of a community or society, causing widespread human, material, economic, or environmental losses that exceed the ability of the affected community to cope using its own resources.

Disasters can occur due to natural causes, human activities, or a combination of both.

### Definition of Disaster
**General Definition:**
A disaster is a sudden or progressive event that causes significant damage, destruction, and human suffering.

**UN Definition:**
A disaster is a serious disruption of the functioning of a community or society involving widespread losses and impacts, exceeding the affected community’s capacity to cope.

### Key Characteristics of a Disaster
• Sudden or slow onset (earthquake is sudden, drought is slow)
• Large-scale impact on people and property
• Disruption of normal life
• Beyond local coping capacity
• Requires external assistance

### Disaster vs Hazard vs Risk
**Hazard:**
A potentially dangerous event or phenomenon (e.g., earthquake, flood).

**Risk:**
Probability of loss due to a hazard.

**Disaster:**
Actual occurrence causing serious damage and loss.

**Example:**
• Earthquake (Hazard)
• Earthquake in a crowded city (Risk)
• Earthquake causing deaths and damage (Disaster)

### Types of Disasters
**Natural Disasters:**
• Earthquakes
• Floods
• Cyclones
• Droughts
• Landslides
• Tsunamis
• Volcanic Eruptions

**Man-Made Disasters:**
• Industrial Accidents
• Chemical Leaks
• Nuclear Disasters
• Fire Accidents
• Transportation Accidents
• War and Terrorism

### Impact of Disasters
**Human Impact:**
Loss of life, injuries, psychological trauma.

**Economic Impact:**
Damage to infrastructure, industries, agriculture.

**Environmental Impact:**
Soil erosion, water pollution, deforestation.

**Social Impact:**
Displacement of people, disruption of education and health services.

### Disaster Management (Brief Concept)
Disaster Management refers to organized efforts to: Prevent, Prepare, Respond, and Recover. This is commonly known as the **Disaster Management Cycle**.

### Importance of Studying Disaster Management
• Reduces loss of life and property
• Enhances preparedness and awareness
• Promotes sustainable development
• Helps in quick response and recovery

### Summary
• A disaster is a major disruption beyond coping capacity.
• Disasters can be natural or man-made.
• Understanding disaster concepts helps in effective planning and response.`,
        isCompleted: false
      },
      {
        id: 'dmp-u1-hvr',
        title: 'Hazard, Vulnerability, and Risk',
        content: `### Introduction
In Disaster Management, Hazard, Vulnerability, and Risk are three core concepts. A disaster occurs not only because a hazard exists, but because people and systems are vulnerable to it, creating risk.

### Hazard
**Definition:**
A hazard is a potentially damaging physical event, phenomenon, or human activity that may cause loss of life, injury, property damage, social and economic disruption, or environmental degradation.

• Hazards may be natural or man-made.
• A hazard does not automatically cause a disaster.
• It becomes dangerous when it affects vulnerable people or systems.

**Types of Hazards:**
• **Natural:** Earthquakes, Floods, Cyclones, Droughts, Landslides.
• **Man-Made:** Industrial Accidents, Chemical Spills, Nuclear Accidents, Fires.

### Vulnerability
**Definition:**
Vulnerability refers to the degree to which individuals, communities, or systems are likely to be affected by a hazard due to physical, social, economic, or environmental factors.

• **Physical Vulnerability:** Weak buildings, poor infrastructure.
• **Social Vulnerability:** Poverty, illiteracy, age (children, elderly).
• **Economic Vulnerability:** Low income, dependence on agriculture.
• **Environmental Vulnerability:** Deforestation, living near rivers.

### Risk
**Definition:**
Risk is the probability or likelihood of harmful consequences resulting from the interaction between a hazard and vulnerability.

**Risk Formula:**
\`Risk = Hazard x Vulnerability\`

• If either hazard or vulnerability is zero, risk is minimal.
• High hazard + high vulnerability = high risk.
• Risk can be assessed, managed, and reduced.

### Relationship between Hazard, Vulnerability, and Risk
• **Hazard:** Potentially dangerous event (Usually cannot be reduced).
• **Vulnerability:** Susceptibility to harm (Can be reduced).
• **Risk:** Chance of loss (Can be reduced).

**Disaster occurs when a hazard affects a vulnerable population, creating high risk.**

### Importance
• Helps identify high-risk areas.
• Assists in planning and mitigation.
• Reduces loss of life and property.`,
        codeSnippet: '// Risk Calculation\nRisk = Hazard * Vulnerability\n// If Vulnerability is 0, Risk is 0.',
        isCompleted: false
      },
      {
        id: 'dmp-u1-capacity',
        title: 'Capacity & Development',
        content: `### Introduction
Capacity plays a crucial role in reducing disaster impacts. While hazards and vulnerability increase disaster risk, capacity helps individuals, communities, and institutions prepare for, respond to, and recover from disasters.

### Capacity
**Definition:**
Capacity refers to the strengths, resources, skills, knowledge, and abilities available within a community, organization, or system that can be used to anticipate, cope with, resist, and recover from the impacts of disasters.

**Types of Capacity:**
• **Physical:** Strong buildings, roads, hospitals.
• **Social:** Community cooperation, volunteer networks.
• **Economic:** Financial resources, insurance.
• **Institutional:** Disaster response agencies, early warning systems.
• **Technological:** Communication systems, forecasting tools.

### Relationship between Capacity, Hazard, Vulnerability, and Risk
**Formula:**
\`Disaster Risk = (Hazard x Vulnerability) / Capacity\`

• Higher capacity → Lower disaster risk
• Lower capacity → Higher disaster risk

### Disaster and Development
Disaster and development are interrelated.

• **Poor Development Increases Disasters:** Unplanned urbanization, poor housing, environmental degradation.
• **Good Development Reduces Impact:** Strong infrastructure, education, poverty reduction.
• **Disaster–Development Cycle:** Disasters damage development; poor development increases losses; sustainable development breaks this cycle.

### Disaster Management & Phases
**Definition:**
Organized process to reduce disaster impacts.

**Phases:**
1. **Prevention & Mitigation:** Risk assessment, building codes.
2. **Preparedness:** Training, drills, early warning.
3. **Response:** Search and rescue, medical aid.
4. **Recovery:** Rehabilitation, reconstruction.

### Role of Capacity
• Improves preparedness and response.
• Speeds up recovery.
• Promotes self-reliance.

### Summary
• Capacity is the ability to manage disasters effectively.
• Higher capacity reduces disaster risk.
• Capacity building is essential for sustainable societies.`,
        codeSnippet: '// Improved Risk Formula\nDisasterRisk = (Hazard * Vulnerability) / Capacity\n\n// Increase Capacity to Decrease Risk!',
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
        content: `### Unit 1: Overview of Web Based Programming

This unit covers the fundamentals of PHP, including its execution flow, variables, operators, and control structures.

### Visual Overview
Below is the visual overview of Unit 1.`,
        image: WbpOverview,
        mindMapImage: WbpMindMap,
        codeSnippet: undefined,
        isCompleted: false
      },
      {
        id: 'wbp-u1-notes',
        title: 'Unit 1: Detailed Notes',
        content: `
        ### Introduction to Web Applications

        | Processing Speed | Faster | Slower |
        | Security | Less secure | More secure |
        | Code Visibility | Visible to user | Hidden from user |
        | Database Access | Not allowed | Allowed |
        | Server Load | Low | High |
        | Dependency | Browser dependent | Server dependent |

        ### 4. Example
        **Server Side (PHP):**
        \`\`\`php
        <?php
        echo "Welcome to Web Programming";
        ?>
        \`\`\`

        ### Web Servers: Local Servers and Remote Servers

        ### 1. What is a Web Server?
        A web server is a system (software or hardware) that stores, processes, and delivers web pages to users over the internet using HTTP/HTTPS protocols.

        A web server responds to requests from a web browser and sends back web content such as HTML pages, images, and data.

        ### 2. Local Web Server
        A local web server is installed and run on a local computer. It is mainly used for development, testing, and learning purposes.

        **Characteristics:**
        • Runs on localhost (127.0.0.1)
        • Accessible only on the local machine or local network
        • No internet connection required
        • Used by developers and students

        **Examples of Local Server Software:**
        • Apache (via XAMPP, WAMP, LAMP)
        • Tomcat
        • IIS (Windows)

        **Advantages:**
        • Safe testing environment
        • Faster development
        • No hosting cost
        • Works offline

        **Limitations:**
        • Not accessible globally
        • Not suitable for real users
        • Limited performance and scalability

        ### 3. Remote Web Server
        A remote web server is hosted on the internet and can be accessed from anywhere in the world using a domain name or IP address.

        **Characteristics:**
        • Runs on cloud or hosting provider servers
        • Accessible through the internet
        • Requires hosting and domain
        • Used for live applications

        **Examples of Remote Servers:**
        • Cloud servers (AWS, Azure, Google Cloud)
        • Shared hosting servers
        • Dedicated servers

        **Advantages:**
        • Global accessibility
        • High availability
        • Scalable resources
        • Professional maintenance

        **Limitations:**
        • Hosting cost
        • Requires internet connection
        • Security management required

        ### 4. Differences Between Local Server and Remote Server
        | Feature | Local Server | Remote Server |
        |---|---|---|
        | Location | User’s computer | Internet/cloud |
        | Accessibility | Local machine only | Worldwide |
        | Internet Requirement | Not required | Required |
        | Usage | Development & testing | Live deployment |
        | Cost | Free | Paid |
        | Performance | Limited | High |

        ### 5. When to Use Which Server?
        **Local Server:**
        • Learning web development
        • Testing web applications
        • Debugging code

        **Remote Server:**
        • Hosting live websites
        • Production applications
        • Business and commercial use

        ### 6. Example Scenario
        • A student creates a website using HTML, CSS, and PHP on localhost → Local Server
        • The same website uploaded to a hosting provider and accessed using a domain → Remote Server

### WAMP, LAMP, XAMPP & MAMP Server & Static Website vs Dynamic Website Development

### 1. Introduction to Local Server Environments
Local server environments allow developers/students to run web applications on their own computer before deploying them to a remote server.
These servers bundle **Web Server + Database + Programming Language**.

### 2. WAMP Server
**What is WAMP?**
WAMP stands for:
• **W** – Windows
• **A** – Apache
• **M** – MySQL
• **P** – PHP

It is used on Windows OS only.

**Installation Steps (WAMP):**
1. Download WAMP server installer
2. Run the installer
3. Choose installation directory
4. Select default browser
5. Finish installation
6. Start WAMP server
7. Check server via: http://localhost

**Advantages:**
• Easy to install on Windows
• Good for beginners
• Simple interface

**Limitations:**
• Windows only
• Less flexible than XAMPP

### 3. LAMP Server
**What is LAMP?**
LAMP stands for:
• **L** – Linux
• **A** – Apache
• **M** – MySQL
• **P** – PHP / Python / Perl

Used mainly on Linux systems.

**Installation Steps (LAMP – Basic):**
1. Install Apache server
2. Install MySQL database
3. Install PHP
4. Configure Apache & PHP
5. Restart services
6. Test using localhost

**Advantages:**
• Highly secure
• Open-source
• Preferred for production servers

**Limitations:**
• Complex installation
• Requires Linux knowledge

### 4. XAMPP Server
**What is XAMPP?**
XAMPP stands for:
• **X** – Cross-platform
• **A** – Apache
• **M** – MySQL
• **P** – PHP
• **P** – Perl

Works on Windows, Linux, and macOS.

**Installation Steps (XAMPP):**
1. Download XAMPP installer
2. Run setup file
3. Select components (Apache, MySQL, PHP)
4. Complete installation
5. Start Apache & MySQL from control panel
6. Open: http://localhost

**Advantages:**
• Cross-platform
• Very easy to use
• Most popular for students

**Limitations:**
• Not recommended for production
• Security settings are basic

### 5. MAMP Server
**What is MAMP?**
MAMP stands for:
• **M** – macOS
• **A** – Apache
• **M** – MySQL
• **P** – PHP

Used mainly on macOS (also available for Windows).

**Installation Steps (MAMP):**
1. Download MAMP
2. Install application
3. Launch MAMP
4. Start servers
5. Access site via localhost

**Advantages:**
• Best for macOS users
• Simple UI
• Stable environment

  Limitations:  
• Some features are paid
• Less common in colleges

### 6. Comparison of WAMP, LAMP, XAMPP & MAMP
| Server | OS | Ease of Use | Popularity |
|---|---|---|---|
| WAMP | Windows | Easy | Medium |
| LAMP | Linux | Difficult | High (Production) |
| XAMPP | Cross-platform | Very Easy | Very High |
| MAMP | macOS | Easy | Medium |

### 7. Static Website Development
**What is a Static Website?**
A static website displays fixed content.
The same page is shown to all users.

**Technologies Used:**
• HTML
• CSS
• Basic JavaScript

**Characteristics:**
• No database
• Fast loading
• Simple structure

**Examples:**
• Portfolio website
• College information site

**Advantages:**
• Easy to develop
• Low cost
• High speed

**Limitations:**
• No user interaction
• Content updates manually

### 8. Dynamic Website Development
**What is a Dynamic Website?**
A dynamic website generates content at runtime based on user interaction.

**Technologies Used:**
• HTML, CSS, JavaScript
• PHP / JSP / Python
• Database (MySQL, Oracle)

**Characteristics:**
• Database-driven
• User interaction supported
• Content changes dynamically

**Examples:**
• E-commerce websites
• Online exam portals
• Social media platforms

**Advantages:**
• Interactive
• Easy content management
• Personalized user experience

**Limitations:**
• More complex
• Slower than static sites
• Requires server & database

### 9. Static vs Dynamic Website (Comparison)
| Feature | Static Website | Dynamic Website |
|---|---|---|
| Content | Fixed | Changing |
| Database | Not used | Used |
| Interaction | No | Yes |
| Speed | Fast | Slower |
| Complexity | Simple | Complex |
| Cost | Low | Higher |

### Introduction to PHP: Data Types, Variables & Super Global Variables

### 1. Introduction to PHP
PHP (Hypertext Preprocessor) is a server-side scripting language mainly used for web application development.
PHP scripts are executed on the server, and the result is sent to the browser as plain HTML.

**Features of PHP:**
• Open source
• Easy to learn
• Platform independent
• Supports databases (MySQL, Oracle, PostgreSQL)
• Embedded within HTML

**Example of PHP Code:**
\`\`\`php
<?php
echo "Welcome to Web Based Programming";
?>
\`\`\`

### 2. PHP Data Types
PHP supports different types of data to store values.

**2.1 Integer**
Used to store whole numbers.
\`\`\`php
$age = 20;
\`\`\`

**2.2 Float (Double)**
Used to store decimal numbers.
\`\`\`php
$price = 99.50;
\`\`\`

**2.3 String**
Used to store text.
\`\`\`php
$name = "Rohit";
\`\`\`

**2.4 Boolean**
Used to store true or false.
\`\`\`php
$isLogin = true;
\`\`\`

**2.5 Array**
Used to store multiple values in one variable.
\`\`\`php
$subjects = array("HTML", "CSS", "PHP");
\`\`\`

**2.6 Object**
Used to store data and functions together.
\`\`\`php
class Student {
  public $name = "Amit";
}
$obj = new Student();
\`\`\`

**2.7 NULL**
Represents no value.
\`\`\`php
$var = NULL;
\`\`\`

### 3. PHP Variables
A variable is used to store data temporarily.

**Rules for PHP Variables:**
• Starts with $ symbol
• Must begin with a letter or underscore
• Case-sensitive
• Cannot start with a number

**Example:**
\`\`\`php
$name = "Ankit";
$age = 21;
\`\`\`

**3.1 Variable Scope**
1. **Local Variable** – Defined inside a function
2. **Global Variable** – Defined outside a function
3. **Static Variable** – Retains value between function calls

\`\`\`php
function test() {
  static $x = 0;
  $x++;
  echo $x;
}
\`\`\`

### 4. PHP Super Global Variables
Super Globals are predefined variables available anywhere in the script.

**List of PHP Super Global Variables**
| Super Global | Description |
|---|---|
| $_GET | Collects data from URL |
| $_POST | Collects form data |
| $_REQUEST | Collects GET, POST & COOKIE data |
| $_SERVER | Server information |
| $_SESSION | Stores session data |
| $_COOKIE | Stores cookie data |
| $_FILES | File upload data |
| $_ENV | Environment variables |
| $GLOBALS | Access global variables |

**4.1 $_GET**
Used to collect data sent via URL.
\`\`\`php
echo $_GET['name'];
\`\`\`

**4.2 $_POST**
Used to collect form data securely.
\`\`\`php
echo $_POST['username'];
\`\`\`

**4.3 $_SERVER**
Provides server and execution environment information.
\`\`\`php
echo $_SERVER['SERVER_NAME'];
\`\`\`

**4.4 $_SESSION**
Used to store user data across multiple pages.
\`\`\`php
session_start();
$_SESSION['user'] = "Admin";
\`\`\`

**4.5 $_COOKIE**
Used to store small data on user’s browser.
\`\`\`php
setcookie("user", "Admin", time()+3600);
\`\`\`

### 5. GET vs POST (Short Comparison)
| Feature | GET | POST |
|---|---|---|
| Data Visibility | Visible in URL | Hidden |
| Security | Less secure | More secure |
| Data Limit | Limited | Large |
| Usage | Search forms | Login forms |
### PHP: Constants, Comments, Operators & Expressions, Regular Expressions, Advantages of PHP

### 1. PHP Constants
A constant is an identifier whose value cannot be changed once defined.

**Features of Constants:**
• Do not use $ symbol
• Case-sensitive by default
• Global scope

**Defining Constants:**
\`\`\`php
define("SITE_NAME", "MyWebsite");
echo SITE_NAME;
\`\`\`

**Using const keyword:**
\`\`\`php
const PI = 3.14;
\`\`\`

### 2. PHP Comments
Comments are used to explain code and are ignored by the PHP interpreter.

**Types of Comments:**
1. **Single-line comment**
\`\`\`php
// This is a single-line comment
# This is also a single-line comment
\`\`\`

2. **Multi-line comment**
\`\`\`php
/*
 This is
 a multi-line comment
*/
\`\`\`

### 3. PHP Operators
Operators are symbols used to perform operations on variables and values.

**3.1 Arithmetic Operators**
| Operator | Description |
|---|---|
| + | Addition |
| - | Subtraction |
| * | Multiplication |
| / | Division |
| % | Modulus |

\`\`\`php
echo 10 + 5;
\`\`\`

**3.2 Assignment Operators**
| Operator | Example |
|---|---|
| = | $x = 10 |
| += | $x += 5 |
| -= | $x -= 2 |

**3.3 Comparison Operators**
| Operator | Meaning |
|---|---|
| == | Equal |
| === | Identical |
| != | Not equal |
| > | Greater than |

\`\`\`php
if ($a == $b) { }
\`\`\`

**3.4 Logical Operators**
| Operator | Meaning |
|---|---|
| && | AND |
| \|\| | OR |
| ! | NOT |

**3.5 Increment / Decrement Operators**
\`\`\`php
$x++;
$y--;
\`\`\`

### 4. PHP Expressions
An expression is a combination of variables, operators, and values that produces a result.

**Example:**
\`\`\`php
$result = ($a + $b) * 2;
\`\`\`

### 5. PHP Regular Expressions
Regular Expressions (Regex) are used for pattern matching in strings.

**Common PHP Regex Functions:**
| Function | Purpose |
|---|---|
| preg_match() | Match pattern |
| preg_replace() | Replace text |
| preg_split() | Split string |

**Example: Email Validation**
\`\`\`php
$email = "test@gmail.com";
if (preg_match("/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i", $email)) {
  echo "Valid Email";
} else {
  echo "Invalid Email";
}
\`\`\`

**Common Regex Patterns:**
| Pattern | Meaning |
|---|---|
| ^ | Start of string |
| $ | End of string |
| . | Any character |
| * | Zero or more |
| + | One or more |
| [a-z] | Lowercase letters |

### 6. Advantages of PHP
**Why Use PHP?**
• Open source and free
• Easy to learn and use
• Platform independent
• Fast execution
• Supports many databases
• Large community support
• Widely used in web development

### Control Statements in PHP: Conditional Statements & Loops

### 1. Control Statements in PHP
Control statements are used to control the flow of execution of a PHP program.
They help in decision making and repetition of tasks.

**Control statements are mainly of two types:**
1. Conditional Statements
2. Looping Statements

### 2. Conditional Statements in PHP
Conditional statements execute code based on conditions.

**2.1 if Statement**
Executes code only if the condition is true.
\`\`\`php
$age = 20;
if ($age >= 18) {
  echo "Eligible to vote";
}
\`\`\`

**2.2 if–else Statement**
Executes one block if condition is true, otherwise another block.
\`\`\`php
$marks = 45;
if ($marks >= 40) {
  echo "Pass";
} else {
  echo "Fail";
}
\`\`\`

**2.3 if–elseif–else Statement**
Used to test multiple conditions.
\`\`\`php
$marks = 75;
if ($marks >= 80) {
  echo "Grade A";
} elseif ($marks >= 60) {
  echo "Grade B";
} else {
  echo "Grade C";
}
\`\`\`

**2.4 Nested if Statement**
An if statement inside another if statement.
\`\`\`php
$age = 22;
$citizen = true;

if ($age >= 18) {
  if ($citizen) {
    echo "Eligible to vote";
  }
}
\`\`\`

**2.5 switch–case Statement**
Used when there are multiple fixed values.
\`\`\`php
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
\`\`\`

**Important Points:**
• break stops execution
• default executes if no case matches

### 3. Looping Statements in PHP
Loops are used to execute a block of code repeatedly.

**3.1 for Loop**
Used when the number of iterations is known.
\`\`\`php
for ($i = 1; $i <= 5; $i++) {
  echo $i . "<br>";
}
\`\`\`

**3.2 while Loop**
Executes code while condition is true.
\`\`\`php
$i = 1;
while ($i <= 5) {
  echo $i . "<br>";
  $i++;
}
\`\`\`

**3.3 do–while Loop**
Executes code at least once, even if condition is false.
\`\`\`php
$i = 1;
do {
  echo $i . "<br>";
  $i++;
} while ($i <= 5);
\`\`\`

**3.4 foreach Loop**
Used to iterate through arrays.
\`\`\`php
$subjects = array("HTML", "CSS", "PHP");
foreach ($subjects as $sub) {
  echo $sub . "<br>";
}
\`\`\`

### 4. Comparison of Loops
| Loop | Use Case |
|---|---|
| for | Known number of iterations |
| while | Unknown iterations |
| do-while | Execute at least once |
| foreach | Arrays |

### 5. Comparison of Conditional vs Loop Statements
| Feature | Conditional | Loop |
|---|---|
| Purpose | Decision making | Repetition |
| Executes | Based on condition | Multiple times |
| Examples | if, switch | for, while |

### Arrays in PHP: Indexed Array, Associative Array, Multidimensional Array & Predefined Functions

### 1. Introduction to Arrays in PHP
An array is a special variable that can store multiple values in a single variable.
Each value is stored with an index or key.

**Why Use Arrays?**
• Store multiple related values
• Reduce number of variables
• Easy data management

### 2. Indexed Array
An indexed array uses numeric indexes (starting from 0 by default).

**Declaration:**
\`\`\`php
$subjects = array("HTML", "CSS", "PHP", "JavaScript");
\`\`\`

**Accessing Elements:**
\`\`\`php
echo $subjects[0];   // HTML
\`\`\`

**Using Loop:**
\`\`\`php
for ($i = 0; $i < count($subjects); $i++) {
  echo $subjects[$i] . "<br>";
}
\`\`\`

### 3. Associative Array
An associative array uses named keys instead of numeric indexes.

**Declaration:**
\`\`\`php
$student = array(
  "name" => "Rohit",
  "age" => 21,
  "course" => "BCA"
);
\`\`\`

**Accessing Elements:**
\`\`\`php
echo $student["name"];
\`\`\`

**Using foreach Loop:**
\`\`\`php
foreach ($student as $key => $value) {
  echo $key . " : " . $value . "<br>";
}
\`\`\`

### 4. Multidimensional Array
A multidimensional array is an array containing one or more arrays.

**Example:**
\`\`\`php
$students = array(
  array("Amit", 20, "BCA"),
  array("Neha", 21, "BCA"),
  array("Ravi", 22, "BCA")
);
\`\`\`

**Accessing Elements:**
\`\`\`php
echo $students[0][0];   // Amit
\`\`\`

**Using Nested Loop:**
\`\`\`php
for ($i = 0; $i < count($students); $i++) {
  for ($j = 0; $j < count($students[$i]); $j++) {
    echo $students[$i][$j] . " ";
  }
  echo "<br>";
}
\`\`\`

### 5. PHP Array Predefined Functions
PHP provides many built-in functions to handle arrays.

**Common Array Functions:**
| Function | Description |
|---|---|
| count() | Count elements |
| sort() | Sort ascending |
| rsort() | Sort descending |
| array_push() | Add element at end |
| array_pop() | Remove last element |
| array_merge() | Merge arrays |
| in_array() | Check value exists |
| array_keys() | Get all keys |
| array_values() | Get all values |

**Examples:**

**count()**
\`\`\`php
echo count($subjects);
\`\`\`

**sort()**
\`\`\`php
sort($subjects);
\`\`\`

**array_push()**
\`\`\`php
array_push($subjects, "React");
\`\`\`

**in_array()**
\`\`\`php
if (in_array("PHP", $subjects)) {
  echo "Found";
}
\`\`\`

### 6. Difference Between Indexed & Associative Array
| Feature | Indexed Array | Associative Array |
|---|---|---|
| Index Type | Numeric | Named |
| Access | Using index | Using key |
| Usage | Lists | Key–value data |`,
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
        content: `### Unit 1: Overview of Data Visualisation and Analytics

This unit introduces the fundamentals of data visualization, its importance, and various techniques to represent data effectively.

### Visual Overview
Below is the visual overview of Unit 1.`,
        image: DvaOverview,
        mindMapImage: DvaMindMap,
        codeSnippet: undefined,
        isCompleted: false
      },
      {
        id: 'dva-u1-notes',
        title: 'Unit 1: Detailed Notes',
        content: `### Analytics: Basic Nomenclature

### 1. Analytics
Analytics is the systematic process of collecting, cleaning, analyzing, and interpreting data to discover useful patterns, trends, and insights that help in decision-making.

**In simple words:**
Analytics = Using data to understand what happened, why it happened, and what may happen next.

### 2. Data
Data refers to raw facts and figures that have no meaning by themselves.

**Examples:**
• Numbers: 45, 78, 102
• Text: Rohit, Delhi
• Dates: 12-07-2025
• Images, audio, video files

**Data can be:**
• Structured (tables, rows, columns)
• Unstructured (text, images, videos)

### 3. Information
Information is processed data that is meaningful and useful.

**Example:**
• Data: 45, 50, 55
• Information: Average marks of a student = 50

Data → Processing → Information

### 4. Dataset
A dataset is a collection of related data, usually stored in tabular form.

**Example (Student Dataset):**
| Roll No | Name | Marks |
|---|---|---|
| 101 | Aman | 78 |
| 102 | Neha | 85 |

### 5. Variable
A variable is a characteristic or attribute whose value can change.

**Examples:**
• Age
• Marks
• Salary
• City

**Types of Variables:**
• Numerical (Age, Marks)
• Categorical (Gender, Department)

### 6. Observation / Record
An observation (or record) is one complete row of data in a dataset.

**Example:**
• 101 | Aman | 78 → one observation

### 7. Attribute / Feature
An attribute (feature) is a column in a dataset that describes a property.

**Example:**
• Roll No
• Name
• Marks

### 8. Descriptive Analytics
Descriptive analytics answers: "What happened?"

**Examples:**
• Total sales last month
• Average marks of a class
• Attendance percentage

Uses charts, tables, and summaries.

### 9. Diagnostic Analytics
Diagnostic analytics answers: "Why did it happen?"

**Examples:**
• Why did sales decrease?
• Why did students fail in a subject?

### 10. Predictive Analytics
Predictive analytics answers: "What is likely to happen?"

**Examples:**
• Predict next semester results
• Forecast future sales

Uses historical data + statistical models.

### 11. Prescriptive Analytics
Prescriptive analytics answers: "What should we do?"

**Examples:**
• Which strategy will increase sales?
• What actions will improve student performance?

### 12. Data Visualization
Data visualization is the graphical representation of data to make insights easy to understand.

**Examples:**
• Bar charts
• Pie charts
• Line graphs
• Dashboards

### 13. Insight
An insight is a useful conclusion drawn from analyzed data that helps in decision-making.

**Example:**
• "Students who attend more than 75% classes score higher marks."

### 14. Decision Making
Decision making is the final step of analytics, where insights are used to take actions.

**Example:**
• Conduct extra classes for weak students
• Increase stock of high-selling products

### Analytics Process Model, Analytics Part in Different Profiles & Analytical Model Requirements

### 1. Analytics Process Model
The Analytics Process Model explains the step-by-step approach used to convert raw data into meaningful insights and decisions.

**Steps of Analytics Process Model:**

**1. Problem Definition**
• Clearly define the business or academic problem.
• Decide what needs to be analyzed.

**Example:**
Why are student pass percentages decreasing?

**2. Data Collection**
• Collect relevant data from different sources.

**Sources:**
• Databases
• Surveys
• Sensors
• Logs
• Online platforms

### 3. Data Cleaning
• Remove errors, duplicates, and missing values.
• Improve data quality.

**Example:**
Removing incomplete student records.

### 4. Data Processing / Transformation
• Convert data into a suitable format.
• Normalize, aggregate, or encode data.

### 5. Data Analysis
• Apply statistical, logical, or analytical techniques.
• Identify patterns and relationships.

### 6. Data Visualization
• Present results using charts and graphs.
• Makes analysis easy to understand.

### 7. Interpretation & Insight Generation
• Understand results and extract insights.

### 8. Decision Making
• Take actions based on insights.

**Example:**
Introduce remedial classes for weak students.

### Analytics Part in Different Profiles
Analytics plays a role in various professional profiles across industries.

### 1. Data Analyst
• Collects, cleans, and analyzes data
• Creates reports and dashboards
• Uses Excel, SQL, visualization tools

**Focus:** What happened & why?

### 2. Business Analyst
• Understands business problems
• Uses analytics to improve processes
• Acts as a bridge between technical team & management

**Focus:** Business improvement using data

### 3. Data Scientist
• Builds predictive and prescriptive models
• Uses machine learning techniques
• Works with large and complex datasets

**Focus:** Future predictions & optimization

### 4. Marketing Analyst
• Analyzes customer behavior
• Measures campaign performance
• Improves sales and customer engagement

### 5. Financial Analyst
• Risk analysis
• Profit forecasting
• Budget planning

### 6. Operations Analyst
• Optimizes processes
• Improves efficiency and productivity

### 7. Academic / Research Profile
• Analyzes survey data
• Uses analytics for research outcomes

### Analytical Model
An Analytical Model is a mathematical, statistical, or logical representation of a real-world problem used to analyze data and make predictions.

**Examples of Analytical Models:**
• Statistical models
• Regression models
• Classification models
• Time-series models

**Purpose:**
• Identify patterns
• Predict outcomes
• Support decisions

### Analytical Model Requirements
Before building an analytical model, certain requirements must be fulfilled.

### 1. Clear Objective
• Define what the model should achieve.

**Example:**
Predict student performance.

### 2. Quality Data
**Data must be:**
• Accurate
• Complete
• Consistent
• Relevant

### 3. Appropriate Variables
• Identify correct input (independent) and output (dependent) variables.

### 4. Data Volume
• Sufficient data is required for reliable results.

### 5. Assumptions
• Model assumptions must be valid.

**Example:**
Linear relationship between variables.

### 6. Tools & Techniques
**Selection of proper tools:**
• Excel
• R
• Python
• Visualization tools

### 7. Validation & Testing
• Check accuracy and reliability.
• Compare predicted results with actual outcomes.

### 8. Interpretability
• Model results should be easy to understand.

### 9. Scalability
• Model should handle future data growth.

### Data Sources for Data Collection, Sampling & Sampling Distribution

### 1. Data Sources for Data Collection
Data sources are the origins from where data is collected for analysis. They are mainly classified into Primary and Secondary data sources.

### 1.1 Primary Data Sources
Primary data is collected for the first time directly from the source.

**Methods of Primary Data Collection:**
1. **Surveys & Questionnaires**
   • Online or offline forms
2. **Interviews**
   • Face-to-face or telephonic
3. **Observations**
   • Watching and recording events
4. **Experiments**
   • Lab or field experiments
5. **Sensors & IoT Devices**
   • Temperature, traffic sensors, etc.

**Advantages:**
• Accurate and relevant
• Updated data

**Disadvantages:**
• Time-consuming
• Costly

### 1.2 Secondary Data Sources
Secondary data is already collected and published by others.

**Examples of Secondary Data Sources:**
• Government reports
• Company databases
• Research papers
• Websites and online repositories
• Social media data

**Advantages:**
• Easy to access
• Low cost

**Disadvantages:**
• May be outdated
• Less specific

### Comparison: Primary vs Secondary Data
| Feature | Primary Data | Secondary Data |
|---|---|---|
| Collected by | Researcher | Others |
| Cost | High | Low |
| Time | More | Less |
| Accuracy | High | Moderate |

### 2. Sampling

### 2.1 Population
Population is the entire group from which data is to be collected.

**Example:**
All BCA students in a college.

### 2.2 Sample
A sample is a small subset of the population used for analysis.

**Example:**
100 BCA students selected from the college.

Sampling saves time, cost, and effort.

### 2.3 Sampling
Sampling is the process of selecting a sample from a population.

### 3. Types of Sampling

### 3.1 Probability Sampling
Each element has a known chance of selection.

1. **Simple Random Sampling**
• Every unit has equal chance

2. **Systematic Sampling**
• Every nth item is selected

3. **Stratified Sampling**
• Population divided into groups (strata)

4. **Cluster Sampling**
• Population divided into clusters

### 3.2 Non-Probability Sampling
Selection is not random.
1. Convenience Sampling
2. Judgmental Sampling
3. Quota Sampling
4. Snowball Sampling

### 4. Sampling Distribution

### 4.1 Definition
A Sampling Distribution is the probability distribution of a statistic (mean, proportion, etc.) obtained from all possible samples of the same size drawn from a population.

### 4.2 Example
• Population: Marks of all students
• Sample size: 30 students
• Statistic: Sample mean

Repeating this process creates a sampling distribution of means.

### 4.3 Importance of Sampling Distribution
• Helps in statistical inference
• Basis of hypothesis testing
• Used to estimate population parameters

### 5. Central Limit Theorem (Basic Idea)
• For a large sample size, the sampling distribution of the mean becomes approximately normal, regardless of population distribution.
This concept is fundamental in analytics.

### 6. Difference Between Population Distribution & Sampling Distribution
| Feature | Population Distribution | Sampling Distribution |
|---|---|---|
| Based on | Entire population | Sample statistics |
| Size | Large | Depends on sample size |
| Usage | Actual data | Estimation & inference |

### Types of Data Elements, Missing Values, Outlier Detection & Treatment

### 1. Types of Data Elements
Data elements are the basic units of data used in analytics. They are classified based on nature, measurement, and structure.

### 1.1 Qualitative (Categorical) Data
Data that represents categories or labels.

**a) Nominal Data**
• No natural order
• Used for identification

**Examples:**
Gender, Blood Group, Department

**b) Ordinal Data**
• Has a meaningful order
• Difference between values is not measurable

**Examples:**
Rank (1st, 2nd, 3rd), Grade (A, B, C)

### 1.2 Quantitative (Numerical) Data
Data represented by numbers.

**a) Discrete Data**
• Countable values
• Whole numbers

**Examples:**
Number of students, Number of books

**b) Continuous Data**
• Measured values
• Can take decimal values

**Examples:**
Height, Weight, Time, Temperature

### 1.3 Structured vs Unstructured Data
• **Structured:** Tables, databases
• **Unstructured:** Text, images, videos

### 2. Missing Values

### 2.1 Definition
Missing values occur when data is not recorded or unavailable for some observations.

**Example:**
Marks column has blank entries.

### 2.2 Causes of Missing Values
• Data entry errors
• Non-response in surveys
• System failure
• Data corruption

### 2.3 Types of Missing Data
1. **MCAR** (Missing Completely at Random)
2. **MAR** (Missing at Random)
3. **MNAR** (Missing Not at Random)

### 2.4 Treatment of Missing Values
| Method | Description |
|---|---|
| Deletion | Remove rows/columns |
| Mean/Median | Replace with average |
| Mode | For categorical data |
| Forward/Backward Fill | Use nearby values |
| Prediction | Use models to estimate |

### 3. Outliers

### 3.1 Definition
An outlier is a data value that significantly differs from other observations.

**Example:**
Marks: 45, 48, 50, 52, 98

### 3.2 Causes of Outliers
• Measurement errors
• Data entry mistakes
• Genuine rare events

### 4. Outlier Detection Methods

### 4.1 Statistical Methods
• Z-Score Method
• IQR (Interquartile Range) Method

### 4.2 Visualization Methods
• Box plot
• Scatter plot
• Histogram

### 4.3 Rule-Based Methods
• Domain knowledge rules

### 5. Outlier Treatment

**Methods to Handle Outliers:**
1. **Remove Outliers**
   • If error or irrelevant
2. **Cap or Floor (Winsorization)**
   • Replace extreme values
3. **Transformation**
   • Log or square root
4. **Separate Analysis**
   • Analyze separately if important

Never remove outliers without proper justification.

### 6. Missing Values vs Outliers (Comparison)
| Aspect | Missing Values | Outliers |
|---|---|---|
| Meaning | Data not available | Extreme value |
| Cause | Non-response, error | Error or rare event |
| Handling | Imputation or removal | Detection & treatment |

### Standardization using Min–Max and Z-Score

### 1. What is Standardization (Feature Scaling)?
Standardization is the process of bringing numerical data to a common scale so that features with large values do not dominate features with small values during analysis.

**Why it is needed:**
• Different units (marks, salary, age) cause bias
• Improves accuracy of analysis and models
• Makes comparison easier

### 2. Min–Max Standardization (Normalization)

### 2.1 Definition
Min–Max standardization rescales data to a fixed range, usually 0 to 1.

**2.2 Formula**
(Value - Min) / (Max - Min)

**2.3 Example**
After Min–Max scaling, all values lie between 0 and 1.

**2.4 Advantages**
• Easy to understand
• Maintains original relationships

**2.5 Disadvantages**
• Highly sensitive to outliers
• New data outside range breaks scaling

### 3. Z-Score Standardization

### 3.1 Definition
Z-Score standardization converts data into a form where:
• Mean = 0
• Standard Deviation = 1

**3.2 Formula**
(Value - Mean) / Standard Deviation

**3.3 Example**
**Given Data:** 50, 60, 70
This means 70 is 1 standard deviation above the mean.

**3.4 Advantages**
• Less affected by outliers
• Works well when data follows normal distribution

**3.5 Disadvantages**
• Results include negative values
• Harder to interpret than Min–Max

### 4. Min–Max vs Z-Score (Comparison)
| Feature | Min–Max Scaling | Z-Score Scaling |
|---|---|---|
| Output Range | 0 to 1 | No fixed range |
| Mean | Not fixed | 0 |
| Std. Deviation | Not fixed | 1 |
| Outlier Effect | High | Low |
| Usage | Visualization, simple models | Statistical & ML models |

### 5. When to Use Which?
**Min–Max:**
• When data has no extreme outliers
• When you need values between 0 and 1

**Z-Score:**
• When data has outliers
• When data is normally distributed

### Categorization & Segmentation

### 1. Categorization

### 1.1 Definition
Categorization is the process of grouping data into predefined categories or classes based on shared characteristics.
It answers: "Which category does this data belong to?"

**1.2 Purpose of Categorization**
• Simplifies complex data
• Improves understanding and reporting
• Helps in comparison and analysis

**1.3 Examples of Categorization**
• Students → Pass / Fail
• Marks → Low / Medium / High
• Age → Child / Adult / Senior
• Products → Electronics / Clothing / Grocery

**1.4 Types of Categorization**
**a) Manual Categorization**
• Categories defined by humans
• Rule-based

**Example:**
Marks ≥ 40 → Pass

**b) Automatic Categorization**
• Uses algorithms or rules
• Data-driven

**Example:**
Email → Spam / Not Spam

**1.5 Advantages**
• Easy interpretation
• Improves visualization
• Reduces data complexity

### 2. Segmentation

### 2.1 Definition
Segmentation is the process of dividing a dataset into meaningful and homogeneous groups (segments) based on similarity.
It answers: "How can data be divided into similar groups?"

**2.2 Purpose of Segmentation**
• Identifies hidden patterns
• Helps in targeted analysis
• Improves decision-making

**2.3 Examples of Segmentation**
• Customers segmented by buying behavior
• Students grouped by performance level
• Users segmented by activity patterns

**2.4 Types of Segmentation**
**a) Demographic Segmentation**
• Age, gender, income

**b) Geographic Segmentation**
• City, state, country

**c) Behavioral Segmentation**
• Purchase history, usage pattern

**d) Psychographic Segmentation**
• Interests, lifestyle, attitude

### 3. Categorization vs Segmentation
| Aspect | Categorization | Segmentation |
|---|---|---|
| Basis | Predefined rules | Data similarity |
| Nature | Simple | Analytical |
| Groups | Fixed | Dynamic |
| Example | Pass / Fail | Performance-based clusters |
| Complexity | Low | High |

### 4. Role in Data Analytics
• Categorization helps in labeling data
• Segmentation helps in discovering structure in data
• Both improve data visualization and analysis`,
        codeSnippet: undefined,
        isCompleted: false
      }
    ]
  }
];
