import { Course } from '../types';
import phpOverview from '../components/courses/PHP/overview.png';
import phpMindMap from '../components/courses/PHP/mindmap php.png';

export const phpCourse: Course = {
   id: 'php-programming',
   title: 'PHP Programming',
   category: 'Web Development',
   icon: 'server',
   level: 'Beginner',
   progress: 0,
   lessons: [
      {
         id: 'php-intro',
         title: '1. Introduction to PHP',
         image: phpOverview,
         mindMapImage: phpMindMap,
         content: `### What is PHP?

**PHP (Hypertext Preprocessor)** is a **server-side scripting language** mainly used to create **dynamic and interactive web pages**.
PHP scripts are executed on the **server**, and the result is sent to the browser as **HTML**.

#### Key Features of PHP

*   Open-source and free
*   Easy to learn for beginners
*   Works well with HTML
*   Supports databases like MySQL, PostgreSQL, Oracle
*   Platform independent (Windows, Linux, macOS)

---

### History of PHP

*   **1994**: PHP was created by **Rasmus Lerdorf**
*   Initially called **Personal Home Page Tools**
*   Used to track visits to his online resume
*   Later rewritten and expanded to support databases
*   PHP became very popular for web development

#### Important Timeline

| Year | Event |
| :--- | :--- |
| 1994 | PHP created |
| 1995 | PHP Tools released publicly |
| 1997 | PHP/FI introduced |
| 1998 | PHP 3 released |
| 2000 | PHP 4 released |
| 2004 | PHP 5 released |
| 2015 | PHP 7 released |
| 2020 | PHP 8 released |

> [!TIP]
> **Exam Tip:**
> *PHP was created by Rasmus Lerdorf in 1994.*

---

### Versions of PHP and Differences

#### PHP 3

*   First official version
*   Introduced server-side scripting
*   Limited features

#### PHP 4

*   Improved performance
*   Introduced Zend Engine
*   Better handling of variables

#### PHP 5

*   Introduced **Object-Oriented Programming (OOP)**
*   Better database support
*   XML and exception handling added

#### PHP 7

*   Major performance improvement
*   Faster execution
*   Reduced memory usage
*   Removed old and unused features

#### PHP 8

*   Just-In-Time (JIT) compiler
*   Improved error handling
*   New syntax features
*   Better security

#### Difference Summary Table

| Feature | PHP 5 | PHP 7 | PHP 8 |
| :--- | :--- | :--- | :--- |
| Speed | Moderate | Fast | Very Fast |
| OOP Support | Yes | Yes | Advanced |
| Memory Usage | High | Low | Lower |
| Error Handling | Basic | Improved | Strong |

> [!TIP]
> **Exam Tip:**
> *PHP 7 and PHP 8 are faster and more secure than older versions.*

---

### Practicality of PHP

PHP is very **practical** for real-world web applications.

#### Why PHP is Practical?

*   Easy integration with HTML
*   Large community support
*   Runs on most servers
*   Supports many databases
*   Used in real websites like:
    *   Facebook (initially)
    *   Wikipedia
    *   WordPress

#### Common Uses

*   Login systems
*   Registration forms
*   E-commerce websites
*   Content Management Systems (CMS)
*   Dynamic web pages

> [!NOTE]
> **Exam Point:**
> *PHP is practical because it is easy to use, flexible, and widely supported.*

---

### Power of PHP

PHP is considered **powerful** because it can handle both **simple and complex web applications**.

#### What Makes PHP Powerful?

*   Handles form data easily
*   Session and cookie management
*   File handling on server
*   Database connectivity
*   Supports OOP concepts
*   Secure with encryption and hashing

#### PHP Can

*   Generate dynamic page content
*   Create, read, update, delete files
*   Collect form data
*   Send and receive cookies
*   Control user access

> [!NOTE]
> **Exam Line:**
> *PHP is powerful due to its database support, server control, and scalability.*

---

### Installation and Configuring Apache and PHP

To run PHP, we need:

1.  Web Server (Apache)
2.  PHP Interpreter
3.  Browser

#### Option 1: Using XAMPP (Recommended for Beginners)

**XAMPP** includes:

*   Apache Server
*   PHP
*   MySQL
*   phpMyAdmin

**Steps to Install XAMPP**

1.  Download XAMPP from official website
2.  Install XAMPP
3.  Open XAMPP Control Panel
4.  Start **Apache**
5.  Check by opening: \`http://localhost\`

**Testing PHP**

Create a file named \`test.php\` inside \`htdocs\` folder:

\`\`\`php
<?php
echo "Hello PHP";
?>
\`\`\`

Open in browser: \`http://localhost/test.php\`

#### Option 2: Manual Installation (Theory Point)

**Steps**

1.  Install Apache Server
2.  Install PHP
3.  Configure \`php.ini\`
4.  Link PHP with Apache
5.  Restart Apache server

> [!TIP]
> **Exam Tip:**
> *XAMPP is commonly used for PHP development because it is easy to install and configure.*

---

### Advantages of PHP

*   Free and open source
*   Easy learning curve
*   Fast execution
*   Cross-platform
*   Large documentation

### Limitations of PHP

*   Not suitable for desktop applications
*   Security depends on proper coding
*   Slower than compiled languages`,
         codeSnippet: `<?php\n  echo "Hello PHP";\n?>`,
         isCompleted: false
      },

      {
         id: 'php-syntax',
         title: '2. PHP Syntax & Comments',
         content: `### Default Syntax of PHP

PHP code is written inside **PHP tags** and executed on the **server**.

#### Basic PHP Syntax

\`\`\`php
<?php
   // PHP code goes here
?>
\`\`\`

#### Important Rules

*   PHP statements end with a **semicolon (;)**
*   PHP is **case-sensitive** for variables
*   Keywords like \`echo\`, \`if\`, \`while\` are **not case-sensitive**

#### Example

\`\`\`php
<?php
echo "Welcome to PHP";
?>
\`\`\`

> [!NOTE]
> **Exam Point:**
> *PHP code must be written inside \`<?php ?>\` tags.*

---

### Styles of PHP Tags

PHP supports different tag styles to write PHP code.

#### 1. Standard PHP Tags (Recommended)

\`\`\`php
<?php
echo "Hello PHP";
?>
\`\`\`

*   **Verified**: Most commonly used
*   **Verified**: Supported on all servers

#### 2. Short Open Tags

\`\`\`php
<?
echo "Hello PHP";
?>
\`\`\`

*   **Warning**: Not recommended
*   **Warning**: May be disabled on some servers

#### 3. Short Echo Tags

\`\`\`php
<?= "Hello PHP"; ?>
\`\`\`

*   **Use**: Used for quick output
*   **Support**: Mostly supported in modern PHP versions

#### 4. ASP Style Tags

\`\`\`php
<%
echo "Hello PHP";
%>
\`\`\`

*   **Status**: Deprecated
*   **Status**: Not used in modern PHP

#### Comparison Table

| Tag Type | Usage | Recommendation |
| :--- | :--- | :--- |
| Standard | \`<?php ?>\` | ✅ Best |
| Short Open | \`<? ?>\` | ❌ Avoid |
| Short Echo | \`<?= ?>\` | ⚠ Limited |
| ASP Style | \`<% %>\` | ❌ Not used |

> [!TIP]
> **Exam Tip:**
> *Standard PHP tags are the safest and most recommended.*

---

### Comments in PHP

Comments are used to **explain code** and are **ignored by the PHP interpreter**.

#### 1. Single-Line Comment

\`\`\`php
// This is a single-line comment
# This is also a single-line comment
\`\`\`

#### 2. Multi-Line Comment

\`\`\`php
/*
This is a
multi-line comment
*/
\`\`\`

#### Why Use Comments?

*   Improves code readability
*   Helps in debugging
*   Useful for documentation

> [!NOTE]
> **Exam Line:**
> *Comments are non-executable lines used to explain PHP code.*`,
         codeSnippet: `<?php\n  // This is a comment\n  echo "Syntax & Comments";\n?>`,
         isCompleted: false
      },
      {
         id: 'php-datatypes',
         title: '3. Data Types & Output',
         content: `### Output Functions in PHP

Output functions are used to **display data** on the browser.

#### 1. echo

*   Most commonly used
*   Faster than \`print\`
*   Can display multiple values

\`\`\`php
<?php
echo "Hello World";
?>
\`\`\`

#### 2. print

*   Similar to echo
*   Returns value (1)
*   Slightly slower

\`\`\`php
<?php
print "Welcome to PHP";
?>
\`\`\`

#### Difference Between echo and print

| Feature | echo | print |
| :--- | :--- | :--- |
| Speed | Faster | Slower |
| Return Value | No | Yes |
| Multiple Values | Yes | No |

> [!TIP]
> **Exam Tip:**
> *echo is preferred for output because it is faster.*

---

### Datatypes in PHP

A datatype defines **what type of data a variable can store**.

#### PHP Supports 8 Main Datatypes

1.  **Integer**: Stores whole numbers.
    \`\`\`php
    $x = 10;
    \`\`\`

2.  **Float (Double)**: Stores decimal values.
    \`\`\`php
    $price = 99.99;
    \`\`\`

3.  **String**: Stores text.
    \`\`\`php
    $name = "PHP";
    \`\`\`

4.  **Boolean**: Stores \`true\` or \`false\`.
    \`\`\`php
    $isActive = true;
    \`\`\`

5.  **Array**: Stores multiple values in one variable.
    \`\`\`php
    $colors = array("Red", "Green", "Blue");
    \`\`\`

6.  **Object**: Stores class instances.
    \`\`\`php
    class Test {}
    $obj = new Test();
    \`\`\`

7.  **NULL**: Represents no value.
    \`\`\`php
    $x = NULL;
    \`\`\`

8.  **Resource**: Stores external resources like database connections.

> [!NOTE]
> **Exam Point:**
> *PHP is a loosely typed language.*`,
         codeSnippet: `<?php\n  $x = "Hello";\n  $y = 10;\n  echo $x . " " . $y;\n?>`,
         isCompleted: false
      },
      {
         id: 'php-config-errors',
         title: '4. Configuration & Errors',
         content: `### Configuration Settings (php.ini)

PHP behavior is controlled using the **php.ini** configuration file.

#### Common Configuration Settings

| Setting | Description |
| :--- | :--- |
| \`display_errors\` | Shows errors on screen |
| \`error_reporting\` | Controls error level |
| \`max_execution_time\` | Script execution time |
| \`memory_limit\` | Memory usage limit |
| \`file_uploads\` | Enable file uploads |

#### Example

\`\`\`ini
display_errors = On
error_reporting = E_ALL
\`\`\`

> [!TIP]
> **Exam Tip:**
> *php.ini is used to configure PHP settings globally.*

---

### Error Types in PHP

Errors occur when PHP encounters a problem while executing code.

#### 1. Notice Errors

*   Minor errors
*   Do not stop script execution

\`\`\`php
echo $x;
\`\`\`

#### 2. Warning Errors

*   More serious than notices
*   Script continues execution

\`\`\`php
include("file.php");
\`\`\`

#### 3. Fatal Errors

*   Critical errors
*   Script stops execution

\`\`\`php
undefinedFunction();
\`\`\`

#### 4. Parse Errors

*   Syntax errors
*   Occur before execution

\`\`\`php
echo "Hello
\`\`\`

#### Error Type Summary Table

| Error Type | Execution |
| :--- | :--- |
| Notice | Continues |
| Warning | Continues |
| Fatal | Stops |
| Parse | Stops |

> [!NOTE]
> **Exam Line:**
> *Fatal and parse errors stop script execution.*`,
         codeSnippet: `<?php\n  // Errors must be handled\n  error_reporting(E_ALL);\n?>`,
         isCompleted: false
      },
      {
         id: 'php-exec-control',
         title: '8. Control Structures - Execution Control',
         content: `### Execution Control Statements

Execution control statements are used to **change the normal flow** of program execution.

#### 1. break Statement

*   Terminates the loop or switch statement immediately

\`\`\`php
for($i=1; $i<=5; $i++){
   if($i == 3){
      break;
   }
   echo $i;
}
\`\`\`

**Output:** \`12\`

> [!NOTE]
> **Real-time Use:**
> Stopping a loop when required data is found.

#### 2. continue Statement

*   Skips the current iteration and continues with the next one

\`\`\`php
for($i=1; $i<=5; $i++){
   if($i == 3){
      continue;
   }
   echo $i;
}
\`\`\`

**Output:** \`1245\`

> [!NOTE]
> **Real-time Use:**
> Skipping invalid data in a loop.

#### 3. exit / die Statement

*   Stops script execution completely

\`\`\`php
if($age < 18){
   exit("Access Denied");
}
\`\`\`

> [!NOTE]
> **Exam Line:**
> *exit() and die() are used to terminate script execution.*`,
         codeSnippet: `<?php\n  // Break example\n  for($i=0; $i<10; $i++) {\n    if($i==5) break;\n    echo $i;\n  }\n?>`,
         isCompleted: false
      },
      {
         id: 'php-conditionals',
         title: '9. Control Structures - Conditionals',
         content: `### Conditional Statements

Conditional statements are used to **execute code based on conditions**.

#### 1. if Statement

Executes code when condition is true.

\`\`\`php
$age = 20;
if($age >= 18){
   echo "Eligible to vote";
}
\`\`\`

#### 2. if–else Statement

Executes one block if true, another if false.

\`\`\`php
if($age >= 18){
   echo "Eligible";
}else{
   echo "Not Eligible";
}
\`\`\`

#### 3. if–elseif–else Statement

Checks multiple conditions.

\`\`\`php
$marks = 75;

if($marks >= 80){
   echo "A Grade";
}elseif($marks >= 60){
   echo "B Grade";
}else{
   echo "Fail";
}
\`\`\`

#### 4. switch Statement

Used when multiple choices exist.

\`\`\`php
$day = 2;

switch($day){
   case 1: echo "Monday"; break;
   case 2: echo "Tuesday"; break;
   default: echo "Invalid Day";
}
\`\`\`

> [!TIP]
> **Exam Tip:**
> *switch is faster than multiple if-else statements.*`,
         codeSnippet: `<?php\n  $t = date("H");\n  if ($t < "20") {\n    echo "Have a good day!";\n  }\n?>`,
         isCompleted: false
      },
      {
         id: 'php-loops',
         title: '10. Control Structures - Loops',
         content: `### Looping Statements (with Real-Time Examples)

Loops are used to **repeat a block of code**.

#### 1. for Loop

Used when number of iterations is known.

\`\`\`php
for($i=1; $i<=5; $i++){
   echo $i;
}
\`\`\`

> [!NOTE]
> **Real-time Example:**
> Displaying roll numbers of students.

#### 2. while Loop

Executes while condition is true.

\`\`\`php
$i = 1;
while($i <= 5){
   echo $i;
   $i++;
}
\`\`\`

> [!NOTE]
> **Real-time Example:**
> Checking user login attempts.

#### 3. do–while Loop

Executes at least once.

\`\`\`php
$i = 1;
do{
   echo $i;
   $i++;
}while($i <= 5);
\`\`\`

> [!NOTE]
> **Real-time Example:**
> Menu-driven programs.

#### 4. foreach Loop

Used for arrays.

\`\`\`php
$colors = array("Red","Green","Blue");
foreach($colors as $color){
   echo $color;
}
\`\`\`

> [!NOTE]
> **Real-time Example:**
> Displaying items in a shopping cart.

#### Loop Comparison Table

| Loop | Minimum Execution |
| :--- | :--- |
| for | 0 times |
| while | 0 times |
| do-while | 1 time |
| foreach | Based on array |`,
         codeSnippet: `<?php\n  $colors = array("red", "green", "blue", "yellow");\n  foreach ($colors as $value) {\n    echo "$value <br>";\n  }\n?>`,
         isCompleted: false
      },
      {
         id: 'php-functions',
         title: '11. Functions in PHP',
         content: `### Functions in PHP

A **function** is a block of code that performs a **specific task** and can be reused.

#### Creating Functions

**Syntax**

\`\`\`php
function functionName(){
   // code
}
\`\`\`

**Example**

\`\`\`php
function greet(){
   echo "Welcome to PHP";
}
greet();
\`\`\`

> [!NOTE]
> **Exam Line:**
> *Functions increase code reusability and readability.*

---

### Passing Arguments to Functions

#### 1. Pass by Value

*   Changes do NOT affect original variable

\`\`\`php
function add($x){
   $x += 5;
}
$a = 10;
add($a);
echo $a;   // Output: 10
\`\`\`

#### 2. Pass by Reference

*   Changes affect original variable
*   Use \`&\` symbol

\`\`\`php
function add(&$x){
   $x += 5;
}
$a = 10;
add($a);
echo $a;   // Output: 15
\`\`\`

#### Difference Table

| Feature | Pass by Value | Pass by Reference |
| :--- | :--- | :--- |
| Symbol | None | \`&\` |
| Original Value | Not Changed | Changed |
| Memory Usage | More | Less |

> [!TIP]
> **Exam Tip:**
> *Reference passing is memory efficient.*

---

### Recursive Functions

A **recursive function** is a function that **calls itself** until a condition is met.

#### Example: Factorial

\`\`\`php
function factorial($n){
   if($n == 1){
      return 1;
   }
   return $n * factorial($n - 1);
}

echo factorial(5);
\`\`\`

**Output:** \`120\`

#### Important Rules

*   Must have a base condition
*   Otherwise infinite recursion occurs

> [!NOTE]
> **Exam Line:**
> *Recursive functions require a base condition.*

---

### Advantages of Functions

*   Code reusability
*   Easy debugging
*   Modular programming
*   Reduced redundancy`,
         codeSnippet: `<?php\n  function sayHello($name) {\n    return "Hello " . $name;\n  }\n  echo sayHello("Student");\n?>`,
         isCompleted: false
      },
      {
         id: 'php-arrays-types',
         title: '12. Arrays & Types',
         content: `### Arrays in PHP

An **array** is a special variable that can **store multiple values in a single variable**, instead of creating separate variables for each value.

#### Why Arrays are Needed?

Without arrays:

\`\`\`php
$student1 = "Amit";
$student2 = "Rohit";
$student3 = "Neha";
\`\`\`

With arrays:

\`\`\`php
$students = array("Amit", "Rohit", "Neha");
\`\`\`

> [!NOTE]
> **Exam Definition:**
> *An array is a collection of similar or different data types stored under a single variable name.*

---

### Types of Arrays in PHP

PHP mainly supports **three types of arrays**:

1.  Indexed Array
2.  Associative Array
3.  Multidimensional Array

---

### How to Create an Array

#### 1. Indexed Array

Uses **numeric index (0,1,2,...)**.

**Syntax**

\`\`\`php
$arrayName = array(value1, value2, value3);
\`\`\`

**Example**

\`\`\`php
$colors = array("Red", "Green", "Blue");
echo $colors[0];   // Red
\`\`\`

#### 2. Associative Array

Uses **named keys instead of numbers**.

**Syntax**

\`\`\`php
$arrayName = array(key => value);
\`\`\`

**Example**

\`\`\`php
$student = array(
   "name" => "Rohit",
   "age" => 21,
   "course" => "BCA"
);
echo $student["name"];
\`\`\`

> [!NOTE]
> **Real-time Use:**
> Storing database records.

#### 3. Multidimensional Array

An array containing **one or more arrays**.

**Example**

\`\`\`php
$students = array(
   array("Rohit", 21),
   array("Amit", 22),
   array("Neha", 20)
);

echo $students[1][0];   // Amit
\`\`\`

> [!NOTE]
> **Real-time Use:**
> Storing table-like data.

### Short Array Syntax

\`\`\`php
$numbers = [10, 20, 30];
\`\`\`

> [!TIP]
> **Exam Tip:**
> *PHP supports both traditional and short array syntax.*`,
         codeSnippet: `<?php\n  $cars = array("Volvo", "BMW", "Toyota");\n  echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";\n?>`,
         isCompleted: false
      },
      {
         id: 'php-arrays-funcs',
         title: '13. Array Operations & Functions',
         content: `### Traversing Arrays

Traversing means **accessing each element of an array one by one**.

#### 1. Traversing Using for Loop (Indexed Array)

\`\`\`php
$colors = array("Red", "Green", "Blue");

for($i=0; $i<count($colors); $i++){
   echo $colors[$i];
}
\`\`\`

> [!NOTE]
> **Used When:**
> Index values are known.

#### 2. Traversing Using foreach Loop

**Indexed Array**

\`\`\`php
foreach($colors as $color){
   echo $color;
}
\`\`\`

**Associative Array**

\`\`\`php
$student = array("name"=>"Rohit", "age"=>21);

foreach($student as $key => $value){
   echo $key . " : " . $value;
}
\`\`\`

> [!NOTE]
> **Exam Line:**
> *foreach is the most preferred loop for arrays.*

#### 3. Traversing Multidimensional Array

\`\`\`php
foreach($students as $student){
   foreach($student as $value){
      echo $value;
   }
}
\`\`\`

---

### Array Functions in PHP

PHP provides **many built-in functions** to work with arrays.

#### Commonly Used Array Functions

**1. count()**

Returns number of elements.

\`\`\`php
echo count($colors);
\`\`\`

**2. sort()**

Sorts array in ascending order.

\`\`\`php
sort($colors);
\`\`\`

**3. rsort()**

Sorts array in descending order.

\`\`\`php
rsort($colors);
\`\`\`

**4. array_push()**

Adds element at the end.

\`\`\`php
array_push($colors, "Yellow");
\`\`\`

**5. array_pop()**

Removes last element.

\`\`\`php
array_pop($colors);
\`\`\`

**6. array_merge()**

Merges two arrays.

\`\`\`php
$result = array_merge($a1, $a2);
\`\`\`

**7. in_array()**

Checks if value exists.

\`\`\`php
if(in_array("Red", $colors)){
   echo "Found";
}
\`\`\`

**8. array_key_exists()**

Checks if key exists.

\`\`\`php
array_key_exists("name", $student);
\`\`\`

**9. explode()**

Converts string to array.

\`\`\`php
$arr = explode(",", "Red,Green,Blue");
\`\`\`

**10. implode()**

Converts array to string.

\`\`\`php
$str = implode("-", $colors);
\`\`\`

#### Summary Table of Array Functions

| Function | Purpose |
| :--- | :--- |
| count() | Count elements |
| sort() | Sort ascending |
| rsort() | Sort descending |
| array_push() | Add element |
| array_pop() | Remove element |
| in_array() | Search value |
| array_merge() | Merge arrays |
| explode() | String → Array |
| implode() | Array → String |

> [!TIP]
> **Exam Tip:**
> *Array functions reduce code length and improve efficiency.*

---

### Advantages of Arrays

*   Store multiple values
*   Easy data management
*   Efficient looping
*   Useful for database operations`,
         codeSnippet: `<?php\n  $age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");\n  foreach($age as $x => $x_value) {\n    echo "Key=" . $x . ", Value=" . $x_value;\n    echo "<br>";\n  }\n?>`,
         isCompleted: false
      },
      {
         id: 'php-include',
         title: '14. Include Functions',
         content: `### Include Functions in PHP

Include functions are used to **insert the content of one PHP file into another PHP file**.
They help in **code reusability**, **easy maintenance**, and **modular programming**.

#### Why Include Functions are Needed?

Without include:

*   Same header/footer code repeated
*   Difficult maintenance

With include:

*   One common file
*   Changes reflect everywhere

> [!NOTE]
> **Exam Definition:**
> *Include functions allow reuse of PHP code by inserting external files into the current script.*

---

### 1. include() Function

The \`include()\` function includes a file and **continues execution even if the file is not found**.

**Syntax**

\`\`\`php
include("filename.php");
\`\`\`

**Example**

\`\`\`php
include("header.php");
echo "Main Content";
\`\`\`

**If File is Missing**

*   Warning is shown
*   Script continues execution

> [!NOTE]
> **Exam Point:**
> *include() generates a warning but does not stop script execution.*

---

### 2. include_once() Function

*   Includes a file **only once**
*   Prevents duplicate inclusion

**Syntax**

\`\`\`php
include_once("filename.php");
\`\`\`

**Example**

\`\`\`php
include_once("config.php");
include_once("config.php");   // Will not be included again
\`\`\`

> [!NOTE]
> **Use Case:**
> Database connection files.

---

### 3. require() Function

The \`require()\` function includes a file and **stops execution if the file is not found**.

**Syntax**

\`\`\`php
require("filename.php");
\`\`\`

**Example**

\`\`\`php
require("db.php");
echo "Connected";
\`\`\`

**If File is Missing**

*   Fatal error occurs
*   Script stops execution

> [!NOTE]
> **Exam Line:**
> *require() is used for critical files.*

---

### 4. require_once() Function

*   Includes a file **only once**
*   Stops execution if file is missing

**Syntax**

\`\`\`php
require_once("filename.php");
\`\`\`

**Example**

\`\`\`php
require_once("config.php");
\`\`\`

---

### Difference Between Include and Require

| Feature | include | require |
| :--- | :--- | :--- |
| Error Type | Warning | Fatal Error |
| Script Execution | Continues | Stops |
| File Importance | Optional | Mandatory |

### Difference Between *_once Versions

| Function | Purpose |
| :--- | :--- |
| include_once | Avoid multiple includes |
| require_once | Avoid multiple requires |

> [!TIP]
> **Exam Tip:**
> *Use require_once for database configuration files.*`,
         codeSnippet: `<?php\n  include 'header.php';\n  // ... Page content ...\n  include 'footer.php';\n?>`,
         isCompleted: false
      },
      {
         id: 'php-regex',
         title: '15. Regular Expressions',
         content: `### Regular Expressions in PHP

A **Regular Expression (RegEx)** is a pattern used to **search, match, or validate text**.

#### Why Regular Expressions are Used?

*   Validate form inputs
*   Check email format
*   Validate phone numbers
*   Search patterns in strings

> [!NOTE]
> **Exam Definition:**
> *Regular expressions are patterns used for matching and validating strings.*

---

### PHP RegEx Functions

PHP uses **PCRE (Perl Compatible Regular Expressions)**.

| Function | Purpose |
| :--- | :--- |
| preg_match() | Match pattern |
| preg_match_all() | Match all occurrences |
| preg_replace() | Replace text |
| preg_split() | Split string |

---

### Validating Text Boxes (Name Validation)

#### Only Alphabets Allowed

\`\`\`php
$name = "Rohit";

if(preg_match("/^[a-zA-Z ]+$/", $name)){
   echo "Valid Name";
}else{
   echo "Invalid Name";
}
\`\`\`

> [!NOTE]
> **Explanation**
> *   \`^\` start
> *   \`$\` end
> *   \`[a-zA-Z ]\` allowed characters
> *   \`+\` one or more characters

---

### Validating Email Address

\`\`\`php
$email = "test@gmail.com";

if(preg_match("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/", $email)){
   echo "Valid Email";
}else{
   echo "Invalid Email";
}
\`\`\`

> [!NOTE]
> **Real-time Use:**
> Login and registration forms.

---

### Validating Phone Number

#### 10-Digit Mobile Number

\`\`\`php
$phone = "9876543210";

if(preg_match("/^[0-9]{10}$/", $phone)){
   echo "Valid Phone Number";
}else{
   echo "Invalid Phone Number";
}
\`\`\`

---

### Validating Password

\`\`\`php
$password = "Test@123";

if(preg_match("/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{6,}$/", $password)){
   echo "Strong Password";
}else{
   echo "Weak Password";
}
\`\`\`

---

### Creating Custom Regular Expressions

Custom RegEx are created using **symbols and patterns**.

#### Common RegEx Symbols

| Symbol | Meaning |
| :--- | :--- |
| \`^\` | Start of string |
| \`$\` | End of string |
| \`.\` | Any character |
| \`*\` | Zero or more |
| \`+\` | One or more |
| \`?\` | Optional |
| \`{n}\` | Exact count |
| \`{n,m}\` | Range |
| \`[]\` | Character set |
| \`\\d\` | Digit |
| \`\\w\` | Word character |

#### Custom Example: Username Validation

**Rules**

*   Letters and numbers only
*   Length 5 to 10

\`\`\`php
$username = "user123";

if(preg_match("/^[a-zA-Z0-9]{5,10}$/", $username)){
   echo "Valid Username";
}else{
   echo "Invalid Username";
}
\`\`\`

---

### Advantages of Regular Expressions

*   Fast validation
*   Less code
*   Accurate matching
*   Secure input handling`,
         codeSnippet: `<?php\n  $str = "Visit SikshaSarovar";\n  $pattern = "/SikshaSarovar/i";\n  echo preg_match($pattern, $str); // Outputs 1\n?>`,
         isCompleted: false
      },
      {
         id: 'php-oop-fundamentals',
         title: '16. OOP Fundamentals',
         content: `### Object-Oriented Programming (OOP) in PHP

**Object-Oriented Programming (OOP)** is a programming approach that organizes code using **classes and objects**, making programs **modular, reusable, secure, and easy to maintain**.

> [!NOTE]
> **Exam Definition:**
> *OOP is a programming paradigm based on the concept of objects which contain data and methods.*

---

### Classes, Objects, Fields, Properties, Methods

#### Class

A **class** is a blueprint or template used to create objects.

\`\`\`php
class Student {
   public $name;
   public function show() {
      echo "Student Class";
   }
}
\`\`\`

#### Object

An **object** is an instance of a class.

\`\`\`php
$s1 = new Student();
$s1->show();
\`\`\`

#### Fields / Properties

Variables declared inside a class are called **properties (or fields)**.

\`\`\`php
public $name;
private $age;
\`\`\`

#### Methods

Functions declared inside a class are called **methods**.

\`\`\`php
public function display() {
   echo $this->name;
}
\`\`\`

> [!NOTE]
> **Exam Line:**
> *Properties store data and methods define behavior.*`,
         codeSnippet: `<?php\n  class Car {\n    public $color = "red";\n    public function start() {\n      echo "Car started";\n    }\n  }\n  $myCar = new Car();\n  echo $myCar->color;\n?>`,
         isCompleted: false
      },
      {
         id: 'php-encapsulation-inheritance',
         title: '17. Encapsulation & Inheritance',
         content: `### Encapsulation

Encapsulation means **binding data and methods together** and **restricting direct access**.

#### Access Modifiers

| Modifier | Scope |
| :--- | :--- |
| public | Anywhere |
| private | Same class only |
| protected | Class + child class |

**Example**

\`\`\`php
class User {
   private $password;

   public function setPassword($pass){
      $this->password = $pass;
   }
}
\`\`\`

> [!NOTE]
> **Exam Definition:**
> *Encapsulation provides data security using access modifiers.*

---

### Inheritance and Types

Inheritance allows one class to **acquire properties and methods of another class**.

\`\`\`php
class A {
   public function show() {
      echo "Parent Class";
   }
}

class B extends A {
}
$obj = new B();
$obj->show();
\`\`\`

#### Types of Inheritance in PHP

| Type | Supported |
| :--- | :--- |
| Single | ✅ |
| Multilevel | ✅ |
| Hierarchical | ✅ |
| Multiple | ❌ (via interfaces) |

> [!TIP]
> **Exam Tip:**
> *PHP does not support multiple inheritance directly.*

---

### Polymorphism

Polymorphism means **one method, many forms**.

#### Method Overriding Example

\`\`\`php
class Shape {
   public function draw() {
      echo "Drawing Shape";
   }
}

class Circle extends Shape {
   public function draw() {
      echo "Drawing Circle";
   }
}
\`\`\`

> [!NOTE]
> **Exam Definition:**
> *Polymorphism allows the same method name to perform different tasks.*`,
         codeSnippet: `<?php\n  class Fruit {\n    public function intro() {\n      echo "I am a fruit";\n    }\n  }\n  class Apple extends Fruit {\n    public function intro() {\n      echo "I am an Apple";\n    }\n  }\n?>`,
         isCompleted: false
      },
      {
         id: 'php-oop-essentials',
         title: '18. OOP Essential Features',
         content: `### Constructor and Destructor

#### Constructor

Called automatically when an object is created.

\`\`\`php
class Demo {
   public function __construct() {
      echo "Object Created";
   }
}
\`\`\`

#### Destructor

Called automatically when an object is destroyed.

\`\`\`php
class Demo {
   public function __destruct() {
      echo "Object Destroyed";
   }
}
\`\`\`

> [!NOTE]
> **Exam Line:**
> *Constructors initialize objects, destructors free resources.*

---

### Constants in Class

Constants are fixed values inside a class.

\`\`\`php
class Math {
   const PI = 3.14;
}
echo Math::PI;
\`\`\`

> [!NOTE]
> **Exam Line:**
> *Class constants are accessed using the scope resolution operator (::).*

---

### Static Class Members

Static members belong to the **class, not objects**.

\`\`\`php
class Test {
   public static $count = 0;

   public static function show() {
      echo self::$count;
   }
}
Test::show();
\`\`\`

#### instanceof Keyword

Used to check object type.

\`\`\`php
if($obj instanceof Test){
   echo "Yes";
}
\`\`\``,
         codeSnippet: `<?php\n  class Greeting {\n    public static function welcome() {\n      echo "Hello World!";\n    }\n  }\n  Greeting::welcome();\n?>`,
         isCompleted: false
      },
      {
         id: 'php-advanced-oop',
         title: '19. Advanced OOP',
         content: `### Magic Method: __set()

The \`__set()\` method is called **automatically** when assigning a value to an **inaccessible property**.

\`\`\`php
class Test {
   private $data;

   public function __set($name, $value){
      $this->$name = $value;
   }
}
$obj = new Test();
$obj->data = 10;
\`\`\`

> [!TIP]
> **Exam Tip:**
> *__set() is used for controlled property assignment.*

---

### Object Cloning and Copy

#### Object Copy

Assigning object copies reference.

\`\`\`php
$o2 = $o1;
\`\`\`

#### Object Cloning

Creates a **new copy**.

\`\`\`php
$o2 = clone $o1;
\`\`\`

#### __clone() Method

\`\`\`php
class Sample {
   public function __clone() {
      echo "Object Cloned";
   }
}
\`\`\`

> [!NOTE]
> **Exam Line:**
> *clone creates a shallow copy of an object.*

---

### Reflection in PHP

Reflection allows **inspecting classes, methods, and properties at runtime**.

#### ReflectionClass Example

\`\`\`php
$class = new ReflectionClass('Student');
echo $class->getName();
\`\`\`

#### Uses of Reflection

*   Frameworks
*   Debugging
*   Dependency Injection
*   Code analysis

> [!NOTE]
> **Exam Definition:**
> *Reflection is the ability to examine program structure at runtime.*

---

### Helper Functions (Common OOP Helpers)

| Function | Purpose |
| :--- | :--- |
| get_class() | Returns class name |
| method_exists() | Checks method |
| property_exists() | Checks property |
| is_object() | Checks object |

---

### Advantages of OOP in PHP

*   Code reusability
*   Data security
*   Easy maintenance
*   Better scalability
*   Real-world modeling`,
         codeSnippet: `<?php\n  class Person { public $name; }\n  $p1 = new Person();\n  $p2 = clone $p1;\n?>`,
         isCompleted: false
      },
      {
         id: 'php-mysql-integration',
         title: '20. MySQL Integration & Functions',
         content: `### PHP with MySQL

PHP and MySQL are widely used together to create **dynamic, database-driven web applications** such as login systems, registration forms, e-commerce websites, etc.

#### What is MySQL?

**MySQL** is an **open-source relational database management system (RDBMS)** used to store and manage data in **tables**.

**Features of MySQL**

*   Open source and free
*   Fast and reliable
*   Uses SQL (Structured Query Language)
*   Works well with PHP
*   Supports large databases

> [!NOTE]
> **Exam Definition:**
> *MySQL is a relational database that stores data in the form of tables using SQL.*

---

### Integration of PHP with MySQL

PHP communicates with MySQL using **MySQLi** or **PDO** extensions.

#### Steps for PHP–MySQL Integration

1.  Create database
2.  Create table
3.  Connect PHP with MySQL
4.  Perform database operations (CRUD)

#### Database Connection (MySQLi)

\`\`\`php
$conn = mysqli_connect("localhost", "root", "", "testdb");

if(!$conn){
   die("Connection Failed");
}
\`\`\`

> [!TIP]
> **Exam Tip:**
> *mysqli_connect() is used to connect PHP with MySQL.*

---

### MySQL Functions in PHP

PHP provides built-in functions to work with MySQL databases.

#### Common MySQLi Functions

| Function | Purpose |
| :--- | :--- |
| mysqli_connect() | Connect database |
| mysqli_query() | Execute query |
| mysqli_fetch_assoc() | Fetch row as array |
| mysqli_fetch_array() | Fetch row |
| mysqli_num_rows() | Count rows |
| mysqli_close() | Close connection |

#### Example: Fetch Data

\`\`\`php
$result = mysqli_query($conn, "SELECT * FROM users");

while($row = mysqli_fetch_assoc($result)){
   echo $row['name'];
}
\`\`\``,
         codeSnippet: `<?php\n  // Example connection\n  $mysqli = new mysqli("localhost", "my_user", "my_password", "world");\n\n  if ($mysqli->connect_error) {\n    die('Connect Error (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);\n  }\n  echo 'Success... ' . $mysqli->host_info . "\\n";\n  $mysqli->close();\n?>`,
         isCompleted: false
      },
      {
         id: 'php-db-ops-security',
         title: '21. Database Operations & Security',
         content: `### Grid / Data Grid Options (Tabular Display)

Data grid means **displaying database records in table format**.

#### Common Grid Features

*   View records
*   Edit / Delete buttons
*   Sorting
*   Paging (Pagination)

#### Example: Display Records in Table

\`\`\`php
echo "<table border='1'>";
echo "<tr><th>ID</th><th>Name</th></tr>";

while($row = mysqli_fetch_assoc($result)){
   echo "<tr>";
   echo "<td>".$row['id']."</td>";
   echo "<td>".$row['name']."</td>";
   echo "</tr>";
}
echo "</table>";
\`\`\`

> [!NOTE]
> **Exam Line:**
> *Data grids are used to display database records in tabular format.*

---

### SQL Injection

**SQL Injection** is a security attack where malicious SQL code is inserted into input fields.

#### Example of SQL Injection

\`\`\`sql
' OR '1'='1
\`\`\`

#### Unsafe Query

\`\`\`php
$sql = "SELECT * FROM users WHERE username='$u' AND password='$p'";
\`\`\`

---

### Prevention of SQL Injection

#### 1. Prepared Statements

\`\`\`php
$stmt = mysqli_prepare($conn, "SELECT * FROM users WHERE username=?");
mysqli_stmt_bind_param($stmt, "s", $u);
mysqli_stmt_execute($stmt);
\`\`\`

#### 2. Input Validation

*   Use \`filter_input()\`
*   Use RegEx

> [!NOTE]
> **Exam Definition:**
> *SQL Injection is a technique to manipulate database queries using malicious input.*`,
         codeSnippet: `<?php\n  // Prepared statement example\n  $stmt = $conn->prepare("INSERT INTO MyGuests (firstname, lastname, email) VALUES (?, ?, ?)");\n  $stmt->bind_param("sss", $firstname, $lastname, $email);\n?>`,
         isCompleted: false
      },
      {
         id: 'php-advanced-db',
         title: '22. Advanced Database Features',
         content: `### Uploading Images into Database

#### Steps

1.  HTML file upload form
2.  Store image in folder
3.  Save image path in database

#### HTML Form

\`\`\`html
<form method="post" enctype="multipart/form-data">
<input type="file" name="img">
<input type="submit" name="upload">
</form>
\`\`\`

#### PHP Code

\`\`\`php
$img = $_FILES['img']['name'];
$tmp = $_FILES['img']['tmp_name'];

move_uploaded_file($tmp, "uploads/".$img);

mysqli_query($conn, "INSERT INTO images(img) VALUES('$img')");
\`\`\`

---

### Downloading / Displaying Images from Database

\`\`\`php
$result = mysqli_query($conn, "SELECT img FROM images");

while($row = mysqli_fetch_assoc($result)){
   echo "<img src='uploads/".$row['img']."' width='100'>";
}
\`\`\`

> [!TIP]
> **Exam Tip:**
> *Images are usually stored as file paths, not binary data.*

---

### Registration Form with Validation

#### Fields

*   Name
*   Email
*   Password

#### PHP Validation Example

\`\`\`php
if(empty($email)){
   echo "Email Required";
}
\`\`\`

#### Insert Query

\`\`\`php
mysqli_query($conn,
"INSERT INTO users(name,email,password)
VALUES('$name','$email','$pass')");
\`\`\`

---

### Login Form with Validation

\`\`\`php
$sql = "SELECT * FROM users WHERE email='$email' AND password='$pass'";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result)==1){
   echo "Login Success";
}else{
   echo "Invalid Login";
}
\`\`\`

> [!NOTE]
> **Exam Line:**
> *Registration stores data, login verifies credentials.*

---

### Pagination (Paging)

Pagination is used to **display limited records per page**.

#### Formula

\`\`\`php
$limit = 5;
$offset = ($page - 1) * $limit;
\`\`\`

#### Query

\`\`\`php
SELECT * FROM users LIMIT $limit OFFSET $offset;
\`\`\`

> [!NOTE]
> **Exam Definition:**
> *Pagination improves performance by limiting records per page.*

---

### Sorting Records

Sorting is done using **ORDER BY**.

\`\`\`php
SELECT * FROM users ORDER BY name ASC;
\`\`\`

\`\`\`php
SELECT * FROM users ORDER BY id DESC;
\`\`\`

---

### Advantages of PHP with MySQL

*   Easy database handling
*   Fast development
*   Secure with prepared statements
*   Widely supported
*   Scalable applications`,
         codeSnippet: `<?php\n  $sql = "SELECT id, firstname, lastname FROM MyGuests";\n  $result = $conn->query($sql);\n  // Process result...\n?>`,
         isCompleted: false
      },
      {
         id: 'php-strings',
         title: '23. Strings & String Functions',
         content: `### String Variables in PHP

A **string** is a sequence of characters enclosed within quotes.

> [!NOTE]
> **Exam Definition:**
> *A string is a collection of characters stored inside single or double quotes.*

---

### Declaration Styles of String Variables

PHP supports **multiple ways** to declare string variables.

#### 1. Single-Quoted Strings

*   Variables are **not parsed**
*   Faster than double quotes

\`\`\`php
$str = 'Welcome to PHP';
echo $str;
\`\`\`

\`\`\`php
$name = 'Rohit';
echo 'Hello $name';   // Output: Hello $name
\`\`\`

> [!NOTE]
> **Exam Point:**
> *Single quotes treat variables as plain text.*

#### 2. Double-Quoted Strings

*   Variables are **parsed**
*   Escape sequences are supported

\`\`\`php
$name = "Rohit";
echo "Hello $name";   // Output: Hello Rohit
\`\`\`

**Escape Sequences Example**

\`\`\`php
echo "Line1\\nLine2";
\`\`\`

| Escape | Meaning |
| :--- | :--- |
| \`\\n\` | New line |
| \`\\t\` | Tab |
| \`\\"\` | Double quote |
| \`\\\\\` | Backslash |

> [!TIP]
> **Exam Tip:**
> *Use double quotes when variable parsing is required.*

#### 3. Concatenation of Strings

Concatenation means **joining strings** using dot (\`.\`) operator.

\`\`\`php
$fname = "Rohit";
$lname = "Kumar";
echo $fname . " " . $lname;
\`\`\`

---

### Heredoc Style

Heredoc is used to write **multi-line strings** easily.

**Syntax**

\`\`\`php
$str = <<<TEXT
This is a
multi-line
string
TEXT;
\`\`\`

**Heredoc with Variables**

\`\`\`php
$name = "PHP";

$str = <<<DATA
Welcome to $name Programming
DATA;

echo $str;
\`\`\`

**Features**

*   No need for quotes
*   Variables are parsed
*   Useful for HTML output

> [!NOTE]
> **Exam Definition:**
> *Heredoc allows writing multi-line strings without escape characters.*

---

### String Functions in PHP

PHP provides **many built-in string functions** for manipulation.

#### Commonly Used String Functions

**1. strlen()**

Returns string length.

\`\`\`php
echo strlen("PHP");
\`\`\`

**2. str_word_count()**

Counts words in a string.

\`\`\`php
echo str_word_count("Welcome to PHP");
\`\`\`

**3. strtoupper()**

Converts to uppercase.

\`\`\`php
echo strtoupper("php");
\`\`\`

**4. strtolower()**

Converts to lowercase.

\`\`\`php
echo strtolower("PHP");
\`\`\`

**5. ucfirst()**

Capitalizes first character.

\`\`\`php
echo ucfirst("php");
\`\`\`

**6. substr()**

Extracts part of a string.

\`\`\`php
echo substr("Programming", 0, 4);
\`\`\`

**7. str_replace()**

Replaces text.

\`\`\`php
echo str_replace("PHP", "Java", "PHP is easy");
\`\`\`

**8. trim()**

Removes whitespace.

\`\`\`php
echo trim("  PHP  ");
\`\`\`

**9. strpos()**

Finds position of a word.

\`\`\`php
echo strpos("Learn PHP", "PHP");
\`\`\`

#### Summary Table: String Functions

| Function | Purpose |
| :--- | :--- |
| strlen() | Length |
| strtoupper() | Uppercase |
| strtolower() | Lowercase |
| substr() | Substring |
| str_replace() | Replace |
| trim() | Remove spaces |
| strpos() | Find position |

> [!TIP]
> **Exam Tip:**
> *String functions simplify text manipulation.*`,
         codeSnippet: `<?php\n  $str = "Hello World!";\n  echo "Original: $str\\n";\n  echo "Reversed: " . strrev($str);\n?>`,
         isCompleted: false
      },
      {
         id: 'php-regex-posix',
         title: '24. Regular Expressions (POSIX)',
         content: `### Regular Expressions (POSIX)

A **Regular Expression (RegEx)** is a pattern used to **search or match strings**.

> [!NOTE]
> **Exam Definition:**
> *Regular expressions are patterns used for string matching and validation.*

---

### Regular Expression Syntax (POSIX)

POSIX regular expressions use **character classes and operators**.

#### Basic POSIX Symbols

| Symbol | Meaning |
| :--- | :--- |
| \`^\` | Start of string |
| \`$\` | End of string |
| \`.\` | Any character |
| \`*\` | Zero or more |
| \`+\` | One or more |
| \`?\` | Zero or one |
| \`[]\` | Character class |
| \`[^ ]\` | Negation |
| \`{n}\` | Exact count |
| \`{n,m}\` | Range |

#### Character Classes

| Pattern | Meaning |
| :--- | :--- |
| \`[a-z]\` | Lowercase letters |
| \`[A-Z]\` | Uppercase letters |
| \`[0-9]\` | Digits |
| \`[a-zA-Z]\` | Alphabets |

**Example**

\`\`\`php
/^[a-zA-Z]+$/
\`\`\`

✔ Only alphabets allowed

---

### PHP’s Regular Expression Functions (POSIX Extended)

PHP supports **POSIX Extended RegEx** using built-in functions.

#### Important POSIX Functions

| Function | Purpose |
| :--- | :--- |
| ereg() | Match pattern |
| eregi() | Case-insensitive match |
| ereg_replace() | Replace text |
| split() | Split string |

> [!CAUTION]
> **Note (Exam-Oriented):**
> POSIX functions are **deprecated**, but still important for **theory and exams**.

#### 1. ereg() Example

\`\`\`php
if(ereg("^[0-9]+$", "12345")){
   echo "Valid Number";
}
\`\`\`

#### 2. eregi() Example

\`\`\`php
if(eregi("php", "PHP Programming")){
   echo "Matched";
}
\`\`\`

#### 3. ereg_replace() Example

\`\`\`php
echo ereg_replace("PHP", "Java", "PHP is easy");
\`\`\`

#### 4. split() Example

\`\`\`php
$arr = split(",", "Red,Green,Blue");
\`\`\`

---

### POSIX vs PCRE (Exam Comparison)

| Feature | POSIX | PCRE |
| :--- | :--- | :--- |
| Syntax | Simple | Advanced |
| Speed | Slower | Faster |
| Functions | ereg() | preg_match() |
| Status | Deprecated | Recommended |

> [!NOTE]
> **Exam Line:**
> *PCRE is preferred over POSIX in modern PHP.*

---

### Advantages of Regular Expressions

*   Powerful string validation
*   Reduces code length
*   Accurate pattern matching
*   Useful in form validation`,
         codeSnippet: `<?php\n  // Note: POSIX functions are deprecated in PHP 5.3+ and removed in PHP 7\n  // This code is for theoretical understanding\n  $str = "PHP is great";\n  if(eregi("php", $str)) {\n    echo "Match found!";\n  }\n?>`,
         isCompleted: false
      },
      {
         id: 'php-file-system',
         title: '25. File System & Disk Operations',
         content: `### Working with Files and Operating System in PHP

PHP provides **built-in functions** to interact with the **file system, directories, and disk resources**.
These features are widely used in **logs, uploads, backups, and system utilities**.

#### File Functions in PHP

File functions allow PHP to **create, read, write, update, and delete files**.

**Common File Functions**

| Function | Purpose |
| :--- | :--- |
| fopen() | Open file |
| fread() | Read file |
| fwrite() | Write file |
| fclose() | Close file |
| file_exists() | Check file |
| unlink() | Delete file |
| filesize() | File size |
| file_get_contents() | Read entire file |

---

### Opening Files

#### fopen() Function

\`\`\`php
$file = fopen("test.txt", "r");
\`\`\`

#### File Modes

| Mode | Meaning |
| :--- | :--- |
| r | Read only |
| w | Write (overwrite) |
| a | Append |
| r+ | Read + Write |
| w+ | Read + Write (overwrite) |

> [!TIP]
> **Exam Tip:**
> *Always close a file after use.*

---

### Reading Files

\`\`\`php
$file = fopen("test.txt", "r");
echo fread($file, filesize("test.txt"));
fclose($file);
\`\`\`

---

### Creating & Writing Files

\`\`\`php
$file = fopen("data.txt", "w");
fwrite($file, "Welcome to PHP File Handling");
fclose($file);
\`\`\`

> [!NOTE]
> **Exam Line:**
> *If file does not exist, fopen() creates it in write mode.*

---

### Deleting Files

\`\`\`php
unlink("data.txt");
\`\`\`

> [!NOTE]
> **Exam Point:**
> *unlink() permanently deletes a file.*

---

### Creating Directories

#### mkdir() Function

\`\`\`php
mkdir("uploads");
\`\`\`

#### Create Nested Directory

\`\`\`php
mkdir("files/images", 0777, true);
\`\`\`

---

### Manipulating Directories

| Function | Purpose |
| :--- | :--- |
| rmdir() | Remove directory |
| is_dir() | Check directory |
| scandir() | List files |
| chdir() | Change directory |

#### Example: List Files in Directory

\`\`\`php
$files = scandir("uploads");
print_r($files);
\`\`\`

---

### Information about Hard Disk

PHP provides disk-related functions to get **storage information**.

| Function | Description |
| :--- | :--- |
| disk_total_space() | Total disk space |
| disk_free_space() | Free disk space |

#### Example

\`\`\`php
echo disk_total_space("C:");
echo disk_free_space("C:");
\`\`\`

> [!NOTE]
> **Exam Line:**
> *Disk functions return size in bytes.*

---

### Directory Functions

Directory functions manage folders and file navigation.

| Function | Purpose |
| :--- | :--- |
| opendir() | Open directory |
| readdir() | Read directory |
| closedir() | Close directory |

#### Example

\`\`\`php
$dir = opendir("uploads");
while($file = readdir($dir)){
   echo $file;
}
closedir($dir);
\`\`\`

---

### Calculating File, Directory and Disk Sizes

#### File Size

\`\`\`php
echo filesize("test.txt");
\`\`\`

#### Directory Size (Logic Based)

\`\`\`php
$size = 0;
foreach(scandir("uploads") as $file){
   if(is_file("uploads/".$file)){
      $size += filesize("uploads/".$file);
   }
}
echo $size;
\`\`\`

#### Disk Size

\`\`\`php
echo disk_total_space("/");
\`\`\`

> [!TIP]
> **Exam Tip:**
> *Directory size is calculated by summing file sizes.*`,
         codeSnippet: `<?php\n  $file = fopen("newfile.txt", "w") or die("Unable to open file!");\n  $txt = "John Doe\\n";\n  fwrite($file, $txt);\n  fclose($file);\n?>`,
         isCompleted: false
      },
      {
         id: 'php-error-handling',
         title: '26. Error & Exception Handling',
         content: `### Error and Exception Handling in PHP

Error and exception handling helps in **detecting, managing, and debugging runtime problems** safely.

#### Error Logging

Error logging stores error messages in a **log file instead of showing to users**.

**Enable Error Logging**

\`\`\`ini
log_errors = On
error_log = error.log
\`\`\`

**Log Error Manually**

\`\`\`php
error_log("Custom Error Message");
\`\`\`

> [!NOTE]
> **Exam Definition:**
> *Error logging records errors for debugging and monitoring.*

---

### Configuration Directives (php.ini)

| Directive | Description |
| :--- | :--- |
| display_errors | Show errors |
| log_errors | Log errors |
| error_reporting | Error level |
| max_execution_time | Script time |
| memory_limit | Memory limit |

#### Example

\`\`\`php
ini_set("display_errors", 1);
error_reporting(E_ALL);
\`\`\`

---

### PHP’s Exception Class

PHP provides a built-in **Exception class** to handle runtime issues.

#### Basic Exception Handling

\`\`\`php
try {
   throw new Exception("Error Occurred");
}
catch(Exception $e){
   echo $e->getMessage();
}
\`\`\`

#### Common Exception Methods

| Method | Purpose |
| :--- | :--- |
| getMessage() | Error message |
| getCode() | Error code |
| getFile() | File name |
| getLine() | Line number |

---

### Throw New Exception

Exceptions are raised using the \`throw\` keyword.

\`\`\`php
function checkAge($age){
   if($age < 18){
      throw new Exception("Not Eligible");
   }
   return "Eligible";
}
\`\`\`

#### Usage

\`\`\`php
try{
   echo checkAge(15);
}
catch(Exception $e){
   echo $e->getMessage();
}
\`\`\`

> [!NOTE]
> **Exam Line:**
> *throw is used to generate exceptions manually.*

---

### Custom Exceptions

Custom exceptions are created by **extending the Exception class**.

#### Example: Custom Exception

\`\`\`php
class MyException extends Exception {
   public function errorMsg(){
      return "Custom Error: ".$this->getMessage();
   }
}
\`\`\`

#### Using Custom Exception

\`\`\`php
try{
   throw new MyException("Invalid Operation");
}
catch(MyException $e){
   echo $e->errorMsg();
}
\`\`\`

> [!TIP]
> **Exam Tip:**
> *Custom exceptions provide application-specific error handling.*

---

### Difference: Error vs Exception

| Feature | Error | Exception |
| :--- | :--- | :--- |
| Occurrence | Runtime issue | Logical issue |
| Handling | error_reporting | try–catch |
| Control | Limited | Full control |
| User Friendly | No | Yes |

---

### Advantages of Exception Handling

*   Clean error handling
*   Better debugging
*   Secure applications
*   Prevents system crash
*   Improves maintainability`,
         codeSnippet: `<?php\n  function divide($dividend, $divisor) {\n    if($divisor == 0) {\n      throw new Exception("Division by zero");\n    }\n    return $dividend / $divisor;\n  }\n\n  try {\n    echo divide(5, 0);\n  } catch(Exception $e) {\n    echo "Unable to divide. " . $e->getMessage();\n  }\n?>`,
         isCompleted: false
      },
      {
         id: 'php-date-time',
         title: '27. Date & Time Functions',
         content: `### Date and Time Functions in PHP

Date and time functions are used to **display, calculate, format, and manipulate date and time values** in PHP applications such as login systems, reports, logs, and bookings.

> [!NOTE]
> **Exam Definition:**
> *Date and time functions are used to handle and manipulate date and time values in PHP.*

---

### Setting Time Zone

Before working with date/time, set the correct time zone.

\`\`\`php
date_default_timezone_set("Asia/Kolkata");
\`\`\`

> [!TIP]
> **Exam Tip:**
> *Time zone should be set to avoid incorrect time.*

---

### date() Function

Used to format date and time.

**Syntax**

\`\`\`php
date(format, timestamp);
\`\`\`

**Example**

\`\`\`php
echo date("d-m-Y");
\`\`\`

#### Common Date Format Characters

| Format | Meaning |
| :--- | :--- |
| d | Day (01–31) |
| m | Month (01–12) |
| Y | Year (4-digit) |
| H | Hour (24-hour) |
| i | Minutes |
| s | Seconds |

**Example: Date & Time**

\`\`\`php
echo date("d-m-Y H:i:s");
\`\`\`

---

### time() Function

Returns **current timestamp** (seconds since 1 Jan 1970).

\`\`\`php
echo time();
\`\`\`

> [!NOTE]
> **Exam Line:**
> *Timestamp is the number of seconds since Unix Epoch.*

---

### mktime() Function

Creates a timestamp for a specific date/time.

\`\`\`php
$ts = mktime(10, 30, 0, 5, 20, 2026);
echo date("d-m-Y H:i:s", $ts);
\`\`\`

---

### strtotime() Function

Converts string to timestamp.

\`\`\`php
echo date("d-m-Y", strtotime("next Monday"));
\`\`\`

> [!NOTE]
> **Real-time Use:**
> Expiry date calculation.

---

### DateTime Class (Modern Way)

\`\`\`php
$date = new DateTime();
echo $date->format("d-m-Y");
\`\`\`

#### Date Difference

\`\`\`php
$d1 = new DateTime("2025-01-01");
$d2 = new DateTime("2026-01-01");
$diff = $d1->diff($d2);
echo $diff->days;
\`\`\`

#### Common Date & Time Functions Summary

| Function | Purpose |
| :--- | :--- |
| date() | Format date |
| time() | Current timestamp |
| mktime() | Custom timestamp |
| strtotime() | String → timestamp |
| DateTime | Object-oriented date |`,
         codeSnippet: `<?php\n  $t = time();\n  echo(date("Y-m-d", $t));\n?>`,
         isCompleted: false
      },
      {
         id: 'php-authentication',
         title: '28. Authentication in PHP',
         content: `### Authentication in PHP

Authentication is the process of **verifying the identity of a user** before allowing access to protected resources.

> [!NOTE]
> **Exam Definition:**
> *Authentication ensures that only authorized users can access a system.*

#### Why Authentication is Needed?

*   Secure applications
*   Prevent unauthorized access
*   Protect user data
*   Control permissions

---

### HTTP Authentication

HTTP authentication is a **browser-based authentication** mechanism.

#### Types of HTTP Authentication

**1. Basic Authentication**

*   Username & password sent with request
*   Not encrypted (unless HTTPS used)

**Example: HTTP Basic Authentication**

\`\`\`php
if(!isset($_SERVER['PHP_AUTH_USER'])){
   header('WWW-Authenticate: Basic realm="Secure Area"');
   header('HTTP/1.0 401 Unauthorized');
   exit;
}else{
   echo "Welcome ".$_SERVER['PHP_AUTH_USER'];
}
\`\`\`

**Features**

*   Simple
*   No database required
*   Less secure

> [!NOTE]
> **Exam Point:**
> *HTTP authentication uses browser pop-up login.*

---

### PHP Authentication

PHP authentication is **custom authentication** using **forms, sessions, and database**.

#### Steps in PHP Authentication

1.  Login form
2.  Validate credentials
3.  Start session
4.  Restrict pages
5.  Logout

#### Login Validation Example

\`\`\`php
session_start();

if($user == "admin" && $pass == "123"){
   $_SESSION['user'] = $user;
}
\`\`\`

#### Protecting a Page

\`\`\`php
session_start();
if(!isset($_SESSION['user'])){
   header("Location: login.php");
}
\`\`\`

#### Logout

\`\`\`php
session_start();
session_destroy();
\`\`\`

> [!NOTE]
> **Exam Line:**
> *Sessions are used to maintain login state.*

---

### Authentication Methodologies

Authentication methodologies define **how authentication is implemented**.

#### 1. Password-Based Authentication

*   Username & password
*   Most common
*   Should use hashing

\`\`\`php
password_hash($pass, PASSWORD_DEFAULT);
\`\`\`

#### 2. Token-Based Authentication

*   Token generated after login
*   Used in APIs (JWT)

> [!NOTE]
> **Exam Use:**
> REST APIs

#### 3. Session-Based Authentication

*   Uses server-side sessions
*   Common in PHP applications

#### 4. Cookie-Based Authentication

*   Stores login info in cookies
*   Used for “Remember Me”

#### 5. Multi-Factor Authentication (MFA)

*   Password + OTP
*   Higher security

#### Authentication Methodologies Comparison

| Method | Security | Usage |
| :--- | :--- | :--- |
| Password-Based | Medium | Websites |
| Session-Based | High | PHP apps |
| Token-Based | High | APIs |
| Cookie-Based | Medium | Remember Me |
| MFA | Very High | Banking apps |

---

### Security Best Practices (Exam-Important)

*   Use HTTPS
*   Hash passwords
*   Prevent SQL Injection
*   Use session regeneration
*   Set session timeout

#### Difference: HTTP vs PHP Authentication

| Feature | HTTP Auth | PHP Auth |
| :--- | :--- | :--- |
| UI | Browser popup | Custom form |
| Security | Low | High |
| Database | No | Yes |
| Flexibility | Low | High |`,
         codeSnippet: `<?php\n  // Example of password hashing\n  $password = "mypassword";\n  $hash = password_hash($password, PASSWORD_DEFAULT);\n\n  if (password_verify("mypassword", $hash)) {\n      echo 'Password is valid!';\n  } else {\n      echo 'Invalid password.';\n  }\n?>`,
         isCompleted: false
      },
      {
         id: 'php-cookies',
         title: '29. Cookies in PHP',
         content: `### Cookies in PHP

#### What is a Cookie?

A **cookie** is a **small piece of data** stored on the **user’s browser** by a website.
It is used to **remember user information** between multiple requests.

> [!NOTE]
> **Exam Definition:**
> *A cookie is a client-side storage mechanism used to store small amounts of data in the user’s browser.*

---

### Why Cookies are Needed

Cookies are required because **HTTP is stateless**, meaning it does not remember users between requests.

#### Uses of Cookies

*   Remember login details
*   Store user preferences (theme, language)
*   Track user activity
*   Enable “Remember Me” feature
*   Maintain shopping cart data

> [!NOTE]
> **Exam Line:**
> *Cookies help maintain state in web applications.*

---

### Types of Cookies

#### 1. Session Cookies

*   Temporary
*   Deleted when browser closes
*   No expiration time

> [!TIP]
> **Use Case:**
> Login sessions.

#### 2. Persistent Cookies

*   Stored for a fixed time
*   Remain even after browser closes

> [!TIP]
> **Use Case:**
> Remember Me functionality.

#### 3. Secure Cookies

*   Transmitted only over HTTPS
*   More secure

#### 4. HttpOnly Cookies

*   Not accessible via JavaScript
*   Protects against XSS attacks

#### Cookie Types Summary Table

| Type | Lifetime | Use |
| :--- | :--- | :--- |
| Session Cookie | Until browser closes | Login |
| Persistent Cookie | Fixed time | Remember Me |
| Secure Cookie | HTTPS only | Sensitive data |
| HttpOnly Cookie | Server access only | Security |

---

### How to Create Cookies

#### setcookie() Function

\`\`\`php
setcookie(name, value, expire, path);
\`\`\`

#### Example: Create Cookie

\`\`\`php
setcookie("user", "Rohit", time() + 3600, "/");
\`\`\`

✔ Stored for 1 hour

> [!TIP]
> **Exam Tip:**
> *Cookies must be set before any HTML output.*

---

### Accessing Cookies

\`\`\`php
echo $_COOKIE["user"];
\`\`\`

---

### Deleting a Cookie

\`\`\`php
setcookie("user", "", time() - 3600, "/");
\`\`\`

> [!NOTE]
> **Exam Line:**
> *Cookies are deleted by setting expiry time in the past.*

---

### Advantages of Cookies

*   Simple to use
*   Client-side storage
*   Improves user experience

### Limitations of Cookies

*   Limited size (≈4KB)
*   Less secure
*   Can be disabled by users`,
         codeSnippet: `<?php\n  $cookie_name = "user";\n  $cookie_value = "John Doe";\n  setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day\n\n  if(!isset($_COOKIE[$cookie_name])) {\n    echo "Cookie named '" . $cookie_name . "' is not set!";\n  } else {\n    echo "Cookie '" . $cookie_name . "' is set!<br>";\n    echo "Value is: " . $_COOKIE[$cookie_name];\n  }\n?>`,
         isCompleted: false
      },
      {
         id: 'php-sessions',
         title: '30. Sessions in PHP',
         content: `### Sessions in PHP

#### What is a Session?

A **session** is a **server-side storage mechanism** used to store user data across multiple pages.

> [!NOTE]
> **Exam Definition:**
> *A session stores user data on the server and is identified using a unique session ID.*

---

### Why Sessions are Needed

*   Store sensitive data securely
*   Maintain login status
*   Track user activity
*   Handle shopping carts

> [!NOTE]
> **Exam Line:**
> *Sessions are more secure than cookies.*

---

### Session Variables

Session variables store data inside the \`$_SESSION\` superglobal.

#### Starting a Session

\`\`\`php
session_start();
\`\`\`

#### Setting Session Variables

\`\`\`php
$_SESSION["username"] = "Rohit";
$_SESSION["role"] = "Admin";
\`\`\`

#### Accessing Session Variables

\`\`\`php
echo $_SESSION["username"];
\`\`\`

---

### Creating and Destroying a Session

#### Create Session

\`\`\`php
session_start();
$_SESSION["user"] = "Admin";
\`\`\`

#### Destroy Session (Logout)

\`\`\`php
session_start();
session_destroy();
\`\`\`

> [!TIP]
> **Exam Tip:**
> *session_destroy() removes all session data.*

---

### Retrieving and Setting the Session ID

#### Get Session ID

\`\`\`php
session_start();
echo session_id();
\`\`\`

#### Set Custom Session ID

\`\`\`php
session_id("ABC123");
session_start();
\`\`\`

> [!NOTE]
> **Exam Line:**
> *Session ID uniquely identifies a user session.*

---

### Encoding and Decoding Session Data

Session data can be encoded for **security and storage**.

#### Encoding Session Data

\`\`\`php
$data = serialize($_SESSION);
\`\`\`

#### Decoding Session Data

\`\`\`php
$_SESSION = unserialize($data);
\`\`\`

> [!NOTE]
> **Exam Definition:**
> *Serialization converts session data into a storable format.*

---

### Auto-Login Using Cookies + Sessions

Auto-login allows users to remain logged in even after closing the browser.

#### Working Logic

1.  User checks “Remember Me”
2.  Cookie stores user token
3.  On next visit, cookie validates user
4.  Session auto-starts

#### Example

\`\`\`php
// Set cookie
setcookie("remember_user", "Rohit", time()+86400*7, "/");

// Auto login
if(isset($_COOKIE["remember_user"])){
   session_start();
   $_SESSION["user"] = $_COOKIE["remember_user"];
}
\`\`\`

> [!TIP]
> **Exam Tip:**
> *Auto-login combines cookies and sessions.*

---

### Recently Viewed Document Index

This feature stores recently accessed pages using sessions.

#### Logic

*   Store page names in session array
*   Maintain limited history
*   Display recently viewed items

#### Example

\`\`\`php
session_start();

$page = "PHP_Tutorial";

$_SESSION["recent"][] = $page;

// Limit to last 5 pages
$_SESSION["recent"] = array_slice($_SESSION["recent"], -5);
\`\`\`

#### Display Recently Viewed Pages

\`\`\`php
foreach($_SESSION["recent"] as $p){
   echo $p."<br>";
}
\`\`\`

> [!NOTE]
> **Real-time Use:**
> E-learning platforms, documentation sites.

---

### Cookies vs Sessions (Exam Comparison)

| Feature | Cookies | Sessions |
| :--- | :--- | :--- |
| Storage | Client-side | Server-side |
| Security | Low | High |
| Data Size | Limited | Large |
| Expiry | User-defined | Server-controlled |
| Speed | Faster | Slightly slower |

---

### Security Best Practices

*   Avoid storing passwords in cookies
*   Use HttpOnly & Secure flags
*   Regenerate session ID after login
*   Set session timeout
*   Destroy session on logout`,
         codeSnippet: `<?php\n  // Start the session\n  session_start();\n\n  // Set session variables\n  $_SESSION["favcolor"] = "green";\n  $_SESSION["favanimal"] = "cat";\n  echo "Session variables are set.";\n?>`,
         isCompleted: false
      },
      {
         id: 'php-web-services',
         title: '31. Web Services (SOAP, RSS & REST)',
         content: `### Web Services

#### What is a Web Service?

A **Web Service** is a **software system** that allows **different applications to communicate with each other over the internet**, regardless of the programming language or platform.

> [!NOTE]
> **Exam Definition:**
> *A web service is a standardized way of enabling communication between applications using web protocols.*

#### Why Web Services are Needed

Modern applications are **distributed** and need to share data.

**Reasons for Using Web Services**

*   Platform independent communication
*   Language independent integration
*   Data sharing between systems
*   Remote access to services
*   Used in APIs, mobile apps, cloud systems

**Real-Time Examples**

*   Payment gateways
*   Weather APIs
*   Social media APIs
*   Online maps

> [!NOTE]
> **Exam Line:**
> *Web services enable interoperability between different systems.*

---

### Types of Web Services

1.  SOAP Web Services
2.  REST Web Services
3.  RSS Feeds

(For exams, **SOAP and RSS** are most important.)

---

### RSS (Really Simple Syndication)

#### What is RSS?

RSS is a **web feed format** used to publish **frequently updated information** such as news, blogs, or notifications.

> [!NOTE]
> **Exam Definition:**
> *RSS is an XML-based format used to distribute updated web content automatically.*

#### RSS Syntax

RSS documents are written in **XML format**.

**Basic RSS Structure**

\`\`\`xml
<?xml version="1.0"?>
<rss version="2.0">
  <channel>
    <title>My Website</title>
    <link>https://example.com</link>
    <description>Latest Updates</description>

    <item>
      <title>News Title</title>
      <link>https://example.com/news1</link>
      <description>News description</description>
    </item>

  </channel>
</rss>
\`\`\`

#### Important RSS Tags

| Tag | Purpose |
| :--- | :--- |
| \`<rss>\` | Root element |
| \`<channel>\` | Feed information |
| \`<title>\` | Title of feed/item |
| \`<link>\` | URL |
| \`<description>\` | Description |
| \`<item>\` | Individual content |

> [!TIP]
> **Exam Tip:**
> *RSS feeds are written using XML.*

---

### SOAP (Simple Object Access Protocol)

#### What is SOAP?

SOAP is a **protocol** for exchanging structured information using **XML over HTTP**.

> [!NOTE]
> **Exam Definition:**
> *SOAP is an XML-based protocol used for communication between applications.*

#### Features of SOAP

*   Uses XML only
*   Platform independent
*   Works over HTTP, SMTP
*   Supports security and transactions

#### SOAP Message Structure

\`\`\`xml
<soap:Envelope>
  <soap:Header/>
  <soap:Body>
     <!-- Request or Response -->
  </soap:Body>
</soap:Envelope>
\`\`\`

#### SOAP Components

| Component | Description |
| :--- | :--- |
| Envelope | Root element |
| Header | Metadata |
| Body | Actual message |
| Fault | Error information |

> [!NOTE]
> **Exam Line:**
> *SOAP messages are always written in XML.*

---

### How to Access Web Services in PHP

PHP can access web services using built-in functions.

#### Accessing RSS / XML Web Services

**Using simplexml_load_file()**

\`\`\`php
$xml = simplexml_load_file("feed.xml");

foreach($xml->channel->item as $item){
   echo $item->title."<br>";
}
\`\`\`

#### Accessing SOAP Web Services

**Using SoapClient**

\`\`\`php
$client = new SoapClient("service.wsdl");
$result = $client->getData();
\`\`\`

> [!TIP]
> **Exam Tip:**
> *SoapClient is used to consume SOAP web services in PHP.*`,
         codeSnippet: `<?php\n  // Example: Consuming a simple RSS feed\n  $rss = simplexml_load_file('https://www.php.net/news.rss');\n  echo 'Title: ' . $rss->channel->title;\n?>`,
         isCompleted: false
      },
      {
         id: 'php-xml-integration',
         title: '32. XML Integration in PHP',
         content: `### XML Integration in PHP

#### What is XML?

**XML (eXtensible Markup Language)** is a **markup language** used to store and transport data in a **structured and readable format**.

> [!NOTE]
> **Exam Definition:**
> *XML is a self-descriptive language used for data storage and exchange.*

#### Features of XML

*   Platform independent
*   Human and machine readable
*   Supports hierarchical data
*   Used in web services

#### XML vs HTML (Exam Comparison)

| XML | HTML |
| :--- | :--- |
| Stores data | Displays data |
| User-defined tags | Predefined tags |
| Case-sensitive | Not case-sensitive |

---

### Creating an XML File from PHP with Database Records

#### Steps

1.  Connect to database
2.  Fetch records
3.  Create XML structure
4.  Save XML file

#### Example: Create XML from Database

\`\`\`php
$conn = mysqli_connect("localhost","root","","testdb");
$result = mysqli_query($conn,"SELECT * FROM users");

$xml = new SimpleXMLElement("<users/>");

while($row = mysqli_fetch_assoc($result)){
   $user = $xml->addChild("user");
   $user->addChild("id",$row['id']);
   $user->addChild("name",$row['name']);
   $user->addChild("email",$row['email']);
}

$xml->asXML("users.xml");
\`\`\`

> [!NOTE]
> **Exam Line:**
> *SimpleXMLElement is used to create XML in PHP.*

---

### Reading Information from XML File

#### Using simplexml_load_file()

\`\`\`php
$xml = simplexml_load_file("users.xml");

foreach($xml->user as $u){
   echo $u->name."<br>";
}
\`\`\`

#### Using simplexml_load_string()

\`\`\`php
$data = file_get_contents("users.xml");
$xml = simplexml_load_string($data);
\`\`\`

---

### Advantages of XML Integration

*   Easy data sharing
*   Platform independent
*   Structured format
*   Used in APIs and web services

#### Web Services vs XML (Exam View)

| Aspect | Web Service | XML |
| :--- | :--- | :--- |
| Purpose | Communication | Data format |
| Usage | API interaction | Data storage |
| Dependency | Uses XML/JSON | Independent |`,
         codeSnippet: `<?php\n  $xml_str = '<?xml version="1.0"?><note><to>User</to><from>Admin</from><heading>Reminder</heading><body>Don\\'t forget me this weekend!</body></note>';\n  $xml = simplexml_load_string($xml_str);\n  echo $xml->body;\n?>`,
         isCompleted: false
      }
   ]
};
