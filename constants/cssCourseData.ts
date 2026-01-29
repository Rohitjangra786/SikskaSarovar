import { Course } from '../types';
import cssOverview from '../components/courses/CSS/Overview.png';
import cssMindmap from '../components/courses/CSS/CSSMind Map.png';

export const cssCourse: Course = {
  id: 'css-core-mastery',
  title: 'CSS Customization: Zero to Hero',
  category: 'Web Development',
  icon: 'layers',
  level: 'Beginner',
  progress: 0,
  lessons: [
    {
      id: 'css-overview',
      title: '1. CSS - Overview',
      image: cssOverview,
      mindMapImage: cssMindmap,
      content: `### What is CSS?

**CSS (Cascading Style Sheets)** is a simple design language intended to simplify the process of making web pages presentable.

CSS handles the **look and feel** part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, as well as a variety of other effects.

CSS is easy to learn and understand but it provides powerful control over the presentation of an HTML document. Most commonly, CSS is combined with the markup languages HTML or XHTML.

### Advantages of CSS

*   **CSS saves time**: You can write CSS once and then reuse the same sheet in multiple HTML pages. You can define a style for each HTML element and apply it to as many web pages as you want.
*   **Pages load faster**: If you are using CSS, you do not need to write HTML tag attributes every time. Just write one CSS rule of a tag and apply it to all the occurrences of that tag. So, less code means faster download times.
*   **Easy maintenance**: To make a global change, simply change the style, and all the elements in all the web pages will be updated automatically.
*   **Superior styles to HTML**: CSS has a much wider array of attributes than HTML, so you can give a far better look to your HTML page in comparison to HTML attributes.
*   **Multiple Device Compatibility**: Style sheets allow content to be optimized for more than one type of device. By using the same HTML document, different versions of a website can be presented for handheld devices such as PDAs and cellphones or for printing.
*   **Global web standards**: Now HTML attributes are being deprecated and it is being recommended to use CSS. So it’s a good idea to start using CSS in all the HTML pages to make them compatible with future browsers.

### Who Creates and Maintains CSS?

CSS is created and maintained through a group of people within the **W3C (World Wide Web Consortium)** called the **CSS Working Group**. The CSS Working Group creates documents called specifications. When a specification has been discussed and officially ratified by the W3C members, it becomes a recommendation.

### CSS Versions

*   **CSS1**: Came out in December 1996. Describes the CSS language as well as a simple visual formatting model.
*   **CSS2**: Recommendation in May 1998. Adds support for media-specific style sheets (e.g. printers and aural devices), downloadable fonts, element positioning and tables.
*   **CSS3**: The latest standard, divided into many different modules (Selectors, Box Model, Backgrounds, etc.).`,
      codeSnippet: `/* CSS Example */
body {
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}`,
      isCompleted: false
    },
    {
      id: 'css-syntax',
      title: '2. CSS - Syntax',
      content: `### CSS Syntax

A CSS rule-set consists of a selector and a declaration block.

\`\`\`css
selector {
  property: value;
}
\`\`\`

*   **Selector**: Defines the element you want to style (e.g., \`h1\`, \`table\`).
*   **Property**: A type of attribute of HTML tag. Put simply, all the HTML attributes are converted into CSS properties. They could be \`color\`, \`border\`, etc.
*   **Value**: Values are assigned to properties. For example, \`color\` property can have the value either \`red\` or \`#F1F1F1\`.

#### Example
You can define a table border as follows:
\`\`\`css
table {
  border: 1px solid #C00;
}
\`\`\`

### Selectors

#### The Type Selectors
Matches the name of an element type. To give a color to all level 1 headings:
\`\`\`css
h1 {
  color: #36CFFF;
}
\`\`\`

#### The Universal Selectors
Rather than selecting elements of a specific type, the universal selector quite simply matches the name of **any** element type:
\`\`\`css
* {
  color: #000000;
}
\`\`\`

#### The Descendant Selectors
Suppose you want to apply a style rule to a particular element only when it lies inside a particular element.
\`\`\`css
ul em {
  color: #000000;
}
\`\`\`
This rule applies to \`<em>\` elements only when they lie inside the \`<ul>\` tag.

#### The Class Selectors
You can define style rules based on the \`class\` attribute of the elements.
\`\`\`css
.black {
  color: #000000;
}
\`\`\`
This renders distinct elements with \`class="black"\` in black.

#### The ID Selectors
You can define style rules based on the \`id\` attribute of the elements. Use \`#\` followed by the ID name.
\`\`\`css
#black {
  color: #000000;
}
\`\`\`

#### Grouping Selectors
You can apply a style to many selectors if you like. Just separate the selectors with a comma.
\`\`\`css
h1, h2, h3 {
  color: #36C;
  font-weight: normal;
}
\`\`\``,
      codeSnippet: `h1 { color: red; text-align: center; }\np { font-family: verdana; font-size: 20px; }`,
      isCompleted: false
    },
    {
      id: 'css-inclusion',
      title: '3. CSS - Inclusion',
      content: `### Ways to Associate Style

There are four ways to associate styles with your HTML document.

#### 1. Embedded CSS - The \`<style>\` Element
You can put your CSS rules into an HTML document using the \`<style>\` element. This tag is placed inside the \`<head>\` tags.

\`\`\`html
<head>
<style type="text/css">
  h1 { color: #36C; }
</style>
</head>
\`\`\`

#### 2. Inline CSS - The \`style\` Attribute
You can use \`style\` attribute of any HTML element to define style rules. These rules will be applied to that element only.

\`\`\`html
<h1 style="color:#36C;"> This is inline CSS </h1>
\`\`\`

#### 3. External CSS - The \`<link>\` Element
The \`<link>\` element can be used to include an external stylesheet file in your HTML document. An external style sheet is a separate text file with \`.css\` extension.

\`\`\`html
<head>
<link type="text/css" href="mystyle.css" media="all" />
</head>
\`\`\`

#### 4. Imported CSS - \`@import\` Rule
\`@import\` is used to import an external stylesheet in a manner similar to the \`<link>\` element.
\`\`\`css
<style>
@import url("mystyle.css");
</style>
\`\`\`

### CSS Rules Overriding
*   **Inline style** takes the highest priority.
*   **Embedded styles** (\`<style>\`) override external style sheets.
*   **External style sheets** take the lowest priority (unless marked \`!important\`).`,
      codeSnippet: `<!-- External CSS Link -->\n<link rel="stylesheet" href="style.css">`,
      isCompleted: false
    },
    {
      id: 'css-measurement-units',
      title: '4. CSS - Measurement Units',
      content: `### CSS Measurement Units

CSS supports a number of measurements including absolute units such as inches, centimeters, points, and so on, as well as relative measures such as percentages and em units.

#### Relative Units

| Unit | Description | Example |
| :--- | :--- | :--- |
| **%** | Percentage relative to another value (typically parent). | \`font-size: 150%;\` |
| **em** | Relative to the font-size of the element (2em means 2 times the size of the current font). | \`letter-spacing: 7em;\` |
| **rem** | Relative to fontsize of the root element. | \`font-size: 1.5rem;\` |
| **vw** | Relative to 1% of the width of the viewport. | \`width: 50vw;\` |
| **vh** | Relative to 1% of the height of the viewport. | \`height: 100vh;\` |

#### Absolute Units

| Unit | Description | Example |
| :--- | :--- | :--- |
| **cm** | Centimeters | \`margin-bottom: 2cm;\` |
| **mm** | Millimeters | \`word-spacing: 15mm;\` |
| **in** | Inches | \`word-spacing: .15in;\` |
| **px** | Pixels (1px = 1/96th of 1in). | \`padding: 25px;\` |
| **pt** | Points (1pt = 1/72 of 1in). | \`font-size: 18pt;\` |
| **pc** | Picas (1pc = 12 pt). | \`font-size: 20pc;\` |`,
      codeSnippet: `div {\n  width: 100%;\n  margin: 10px;\n  padding: 1em;\n}`,
      isCompleted: false
    },
    {
      id: 'css-colors',
      title: '5. CSS - Colors',
      content: `### CSS Colors

CSS uses color values to specify a color. Typically, these are used to set a color either for the foreground of an element (i.e., its text) or for the background.

#### Color Formats

| Format | Syntax | Example |
| :--- | :--- | :--- |
| **Hex Code** | #RRGGBB | \`p { color:#FF0000; }\` |
| **Short Hex** | #RGB | \`p { color:#6A7; }\` |
| **RGB %** | rgb(r%,g%,b%) | \`p { color:rgb(50%,50%,50%); }\` |
| **RGB Absolute** | rgb(r,g,b) | \`p { color:rgb(0,0,255); }\` |
| **Keyword** | name | \`p { color:teal; }\` |

#### Hex Codes
A hexadecimal is a 6 digit representation of a color. The first two digits (RR) represent a red value, the next two are a green value (GG), and the last are the blue value (BB).
*   **Black**: \`#000000\`
*   **White**: \`#FFFFFF\`
*   **Red**: \`#FF0000\`
*   **Green**: \`#00FF00\`
*   **Blue**: \`#0000FF\`

#### Browser Safe Colors
There are 216 colors which are supposed to be most safe and computer independent colors. These colors vary from hex code 000000 to FFFFFF.`,
      codeSnippet: `h1 { color: #f00; }\np { color: rgb(255, 0, 0); }\ndiv { background-color: blue; }`,
      isCompleted: false
    },
    {
      id: 'css-background',
      title: '6. CSS - Backgrounds',
      content: `### CSS Backgrounds

The background properties are used to define the background effects for an element.

#### 1. background-color
Specifies the background color of an element.
\`\`\`css
body {
  background-color: lightblue;
}
\`\`\`

#### 2. background-image
Specifies an image to use as the background of an element.
\`\`\`css
body {
  background-image: url("paper.gif");
}
\`\`\`

#### 3. background-repeat
Sets how a background image will be repeated.
*   \`repeat\`: Repeats both vertically and horizontally (default).
*   \`repeat-x\`: Repeats only horizontally.
*   \`repeat-y\`: Repeats only vertically.
*   \`no-repeat\`: The image is not repeated.

#### 4. background-attachment
Sets whether a background image is fixed or scrolls with the rest of the page.
*   \`scroll\`: The background scrolls with the element.
*   \`fixed\`: The background is fixed with regard to the viewport.

#### 5. background-position
Sets the starting position of a background image.
\`\`\`css
body {
  background-position: right top;
}
\`\`\`

> [!TIP]
> **Shorthand Property**:
> You can specify all background properties in one single property:
> \`background: #ffffff url("img_tree.png") no-repeat right top;\``,
      codeSnippet: `div {\n  background: lightblue url("bg.jpg") no-repeat fixed center;\n}`,
      isCompleted: false
    },
    {
      id: 'css-fonts',
      title: '7. CSS - Fonts',
      content: `### CSS Fonts

The CSS font properties define the font family, boldness, size, and style of a text.

#### 1. font-family
The font family of a text is set with the \`font-family\` property.
*   Start with the name of the font you want to use.
*   Always end with a **generic family name** to let the browser pick a similar font in the generic family, if no other font is available.
\`\`\`css
p {
  font-family: "Times New Roman", Times, serif;
}
\`\`\`

#### 2. font-style
Mostly used to specify italic text.
*   \`normal\`: The text is shown normally (default).
*   \`italic\`: The text is shown in italics.
*   \`oblique\`: The text is "leaning" (oblique is very similar to italic, but less supported).

#### 3. font-size
Sets the size of the text.
*   **Absolute size**: Sets the text to a specified size (px, pt).
*   **Relative size**: Sets the size relative to surrounding elements (em, %).

#### 4. font-weight
Specifies the weight of a font.
*   Values: \`normal\`, \`bold\`, \`bolder\`, \`lighter\`, or \`100\`-\`900\`.

#### 5. font-variant
Specifies whether or not a text should be displayed in a small-caps font.
\`\`\`css
p.small {
  font-variant: small-caps;
}
\`\`\``,
      codeSnippet: `body {\n  font-family: Arial, sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n}`,
      isCompleted: false
    },
    {
      id: 'css-text',
      title: '8. CSS - Text',
      content: `### CSS Text Formatting

This chapter contains properties that allow you to format text.

#### 1. text-color
The \`color\` property is used to set the color of the text.
\`\`\`css
body {
  color: blue;
}
\`\`\`

#### 2. text-align
The \`text-align\` property is used to set the horizontal alignment of a text.
*   \`left\`, \`right\`, \`center\`, \`justify\`.

#### 3. text-decoration
The \`text-decoration\` property is used to set or remove decorations from text.
*   \`none\`: Often used to remove underlines from links.
*   \`underline\`, \`overline\`, \`line-through\`.

#### 4. text-transform
The \`text-transform\` property is used to specify uppercase and lowercase letters in a text.
*   \`uppercase\`: Converts text to all uppercase.
*   \`lowercase\`: Converts text to all lowercase.
*   \`capitalize\`: Capitalizes the first letter of each word.

#### 5. text-indent
Specifies the indentation of the first line of a text-block.
\`\`\`css
p {
  text-indent: 50px;
}
\`\`\`

#### 6. letter-spacing & word-spacing
*   \`letter-spacing\`: Increases or decreases space between characters.
*   \`word-spacing\`: Increases or decreases space between words.`,
      codeSnippet: `h1 {\n  text-align: center;\n  text-transform: uppercase;\n  color: #333;\n}`,
      isCompleted: false
    },
    {
      id: 'css-images',
      title: '9. CSS - Images',
      content: `### CSS Images

Images can be styled using borders, sizing, and opacity.

#### Image Borders
Property \`border\` is used to specify width, style, and color of the border around an image.
\`\`\`css
img {
  border: 1px solid #ddd;
  border-radius: 4px; /* Rounded corners */
  padding: 5px;
}
\`\`\`

#### Image Width and Height
The \`width\` and \`height\` properties can be used to set the width and height of an image.
\`\`\`css
img {
  width: 100%;
  height: auto; /* Maintains aspect ratio */
}
\`\`\`

#### Image Opacity / Transparency
The \`opacity\` property creates transparent images.
*   Value: 0.0 - 1.0 (lower is more transparent).
\`\`\`css
img {
  opacity: 0.5;
}
img:hover {
  opacity: 1.0;
}
\`\`\`

> [!NOTE]
> **Responsive Images**:
> Setting \`max-width: 100%;\` and \`height: auto;\` ensures images scale nicely on all devices.`,
      codeSnippet: `img.responsive {\n  max-width: 100%;\n  height: auto;\n  border-radius: 8px;\n}`,
      isCompleted: false
    },
    {
      id: 'css-links',
      title: '10. CSS - Links',
      content: `### Styling Links

Links can be styled with any CSS property (e.g., \`color\`, \`font-family\`, \`background\`, etc.).

#### The Four Link States
Links can be styled differently depending on what state they are in.
1.  **a:link**: a normal, unvisited link.
2.  **a:visited**: a link the user has visited.
3.  **a:hover**: a link when the user mouses over it.
4.  **a:active**: a link the moment it is clicked.

\`\`\`css
/* unvisited link */
a:link {
  color: red;
}

/* visited link */
a:visited {
  color: green;
}

/* mouse over link */
a:hover {
  color: hotpink;
}

/* selected link */
a:active {
  color: blue;
}
\`\`\`

> [!IMPORTANT]
> **Order Matters**:
> *   \`a:hover\` MUST come after \`a:link\` and \`a:visited\`.
> *   \`a:active\` MUST come after \`a:hover\`.

#### Text Decoration on Links
The \`text-decoration\` property is mostly used to remove underlines from links.
\`\`\`css
a:link {
  text-decoration: none;
}
\`\`\``,
      codeSnippet: `a.button {\n  background-color: #f44336;\n  color: white;\n  padding: 14px 25px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n}`,
      isCompleted: false
    },
    {
      id: 'css-tables',
      title: '11. CSS - Tables',
      content: `### CSS Tables

The look of an HTML table can be greatly improved with CSS.

#### 1. Table Border
To specify table borders in CSS, use the \`border\` property.
\`\`\`css
table, th, td {
  border: 1px solid black;
}
\`\`\`

#### 2. Collapse Borders
The \`border-collapse\` property sets whether the table borders should be collapsed into a single border.
\`\`\`css
table {
  border-collapse: collapse;
}
\`\`\`

#### 3. Table Width and Height
Width and height of a table are defined by the \`width\` and \`height\` properties.
\`\`\`css
table {
  width: 100%;
}
th {
  height: 50px;
}
\`\`\`

#### 4. Table Alignment
The \`text-align\` property sets the horizontal alignment (like left, right, or center) of the content in \`<th>\` or \`<td>\`.
\`\`\`css
td {
  text-align: center;
}
\`\`\`
The \`vertical-align\` property sets the vertical alignment (like top, bottom, or middle).

#### 5. Table Padding
To control the space between the border and the content in a table, use the \`padding\` property on \`<td>\` and \`<th>\` elements.`,
      codeSnippet: `table {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth, td {\n  padding: 8px;\n  text-align: left;\n  border-bottom: 1px solid #ddd;\n}`,
      isCompleted: false
    },
    {
      id: 'css-borders',
      title: '12. CSS - Borders',
      content: `### CSS Borders

The CSS border properties allow you to specify the style, width, and color of an element's border.

#### 1. Border Style
The \`border-style\` property specifies what kind of border to display.
*   \`dotted\`: Defines a dotted border.
*   \`dashed\`: Defines a dashed border.
*   \`solid\`: Defines a solid border.
*   \`double\`: Defines a double border.
*   \`none\`: Defines no border.
*   \`hidden\`: Defines a hidden border.

#### 2. Border Width
The \`border-width\` property specifies the width of the four borders.
The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: \`thin\`, \`medium\`, or \`thick\`.

#### 3. Border Color
The \`border-color\` property is used to set the color of the four borders.

#### 4. Individual Sides
You can specify the border for just one side.
*   \`border-top-style\`
*   \`border-right-style\`
*   \`border-bottom-style\`
*   \`border-left-style\`

#### 5. Shorthand Property
To shorten the code, it is possible to specify all the border properties in one property.
The \`border\` property is a shorthand property for the following individual border properties:
*   \`border-width\`
*   \`border-style\` (required)
*   \`border-color\`

\`\`\`css
p {
  border: 5px solid red;
}
\`\`\``,
      codeSnippet: `div {\n  border: 2px solid #4CAF50;\n  border-radius: 5px;\n}`,
      isCompleted: false
    },
    {
      id: 'css-margins',
      title: '13. CSS - Margins',
      content: `### CSS Margins

Margins are used to create space around elements, outside of any defined borders.

#### 1. Margin - Individual Sides
CSS has properties for specifying the margin for each side of an element:
*   \`margin-top\`
*   \`margin-right\`
*   \`margin-bottom\`
*   \`margin-left\`

Values can be:
*   **auto**: The browser calculates the margin.
*   **length**: Specifies a margin in px, pt, cm, etc.
*   **%**: Specifies a margin in % of the width of the containing element.
*   **inherit**: Specifies that the margin should be inherited from the parent element.

#### 2. Margin - Shorthand Property
To shorten the code, it is possible to specify all the margin properties in one property.

**Four values**:
\`margin: 25px 50px 75px 100px;\`
*   top margin is 25px
*   right margin is 50px
*   bottom margin is 75px
*   left margin is 100px

**Three values**:
\`margin: 25px 50px 75px;\`
*   top: 25px
*   right and left: 50px
*   bottom: 75px

**Two values**:
\`margin: 25px 50px;\`
*   top and bottom: 25px
*   right and left: 50px

**One value**:
\`margin: 25px;\`
*   all four margins are 25px

#### 3. The auto Value
You can set the margin property to \`auto\` to horizontally center the element within its container.
The element will then take up the specified width, and the remaining space will be split equally between the left and right margins.
\`\`\`css
div {
  width: 300px;
  margin: auto;
}
\`\`\``,
      codeSnippet: `div.container {\n  margin: 0 auto;\n  width: 80%;\n}`,
      isCompleted: false
    },
    {
      id: 'css-paddings',
      title: '15. CSS - Paddings',
      content: `### CSS Padding

Padding is used to create space around an element's content, inside of any defined borders.

#### 1. Padding - Individual Sides
CSS has properties for specifying the padding for each side of an element:
*   \`padding-top\`
*   \`padding-right\`
*   \`padding-bottom\`
*   \`padding-left\`

#### 2. Padding - Shorthand Property
To shorten the code, it is possible to specify all the padding properties in one property.

**Four values**:
\`padding: 25px 50px 75px 100px;\`
*   top: 25px
*   right: 50px
*   bottom: 75px
*   left: 100px

**Three values**:
\`padding: 25px 50px 75px;\`
*   top: 25px
*   right/left: 50px
*   bottom: 75px

**Two values**:
\`padding: 25px 50px;\`
*   top/bottom: 25px
*   right/left: 50px

**One value**:
\`padding: 25px;\`
*   all four paddings are 25px

#### Padding and Element Width
The CSS \`width\` property specifies the width of the element's content area. The content area is the portion inside the padding, border, and margin of an element (the Box Model).
So, if an element has a specified width, the padding added to that element will add to the total width of the element. This is often an undesirable result.

**Solution: box-sizing**
To keep the width at specific whatever the amount of padding, you can use the \`box-sizing\` property. This causes the element to maintain its width; if you increase the padding, the available content space will decrease.
\`\`\`css
div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}
\`\`\``,
      codeSnippet: `div {\n  padding: 20px;\n  border: 1px solid black;\n  box-sizing: border-box;\n}`,
      isCompleted: false
    },
    {
      id: 'css-lists',
      title: '14. CSS - Lists',
      content: `### CSS Lists

The CSS list properties allow you to:
*   Set different list item markers for ordered lists.
*   Set different list item markers for unordered lists.
*   Set an image as the list item marker.
*   Add background colors to lists and list items.

#### 1. list-style-type
Specifies the type of list item marker.
*   **Unordered List**: \`circle\`, \`square\`, \`disc\` (default), \`none\`.
*   **Ordered List**: \`decimal\` (1, 2, 3), \`lower-alpha\` (a, b, c), \`upper-roman\` (I, II, III).

\`\`\`css
ul.a {
  list-style-type: circle;
}
ol.d {
  list-style-type: lower-alpha;
}
\`\`\`

#### 2. list-style-image
Specifies an image as the list item marker.
\`\`\`css
ul {
  list-style-image: url('sqpurple.gif');
}
\`\`\`

#### 3. list-style-position
Specifies the position of the list-item markers (bullet points).
*   **outside**: Means that the bullet points will be outside the list item. The start of each line of a list item will be aligned vertically. This is default.
*   **inside**: Means that the bullet points will be inside the list item. As it is part of the list item text, it will push the text at the start.

#### 4. list-style (Shorthand)
It is a shorthand property. It sets all the list properties in one declaration:
\`list-style: type position image;\`
\`\`\`css
ul {
  list-style: square inside url("sqpurple.gif");
}
\`\`\``,
      codeSnippet: `ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}`,
      isCompleted: false
    },
    {
      id: 'css-cursors',
      title: '16. CSS - Cursors',
      content: `### CSS Cursors

The \`cursor\` property specifies the type of cursor to be displayed when pointing on an element.

#### Common Cursor Values

| Value | Description |
| :--- | :--- |
| **alias** | The cursor indicates an alias of something is to be created |
| **all-scroll** | The cursor indicates that something can be scrolled in any direction |
| **auto** | Default. The browser sets a cursor |
| **cell** | The cursor indicates that a cell (or set of cells) may be selected |
| **context-menu** | The cursor indicates that a context-menu is available |
| **col-resize** | The cursor indicates that the column can be resized horizontally |
| **copy** | The cursor indicates something is to be copied |
| **crosshair** | The cursor render as a crosshair |
| **default** | The default cursor (typically an arrow) |
| **e-resize** | The cursor indicates that an edge of a box is to be moved to the right (east) |
| **grab** | The cursor indicates that something can be grabbed |
| **grabbing** | The cursor indicates that something is being grabbed |
| **help** | The cursor indicates that help is available (often a question mark or a balloon) |
| **move** | The cursor indicates something is to be moved |
| **pointer** | The cursor is a pointer and indicates a link |
| **progress** | The cursor indicates that the program is busy (in progress) |
| **text** | The cursor indicates text that may be selected (typically an I-beam) |
| **wait** | The cursor indicates that the program is busy (often a watch or an hourglass) |
| **zoom-in** | The cursor indicates that something can be zoomed in |
| **zoom-out** | The cursor indicates that something can be zoomed out |

#### Example
\`\`\`css
span.help {
  cursor: help;
}
span.wait {
  cursor: wait;
}
\`\`\``,
      codeSnippet: `.btn {\n  cursor: pointer;\n}`,
      isCompleted: false
    },
    {
      id: 'css-outlines',
      title: '17. CSS - Outlines',
      content: `### CSS Outlines

An outline is a line that is drawn around elements, OUTSIDE the borders, to make the element "stand out".

#### Outline vs Border
1.  **Space**: Outlines do not take up space.
2.  **Position**: Outlines are drawn outside the element's border.
3.  **Shape**: Outlines may be non-rectangular (in some browsers), but mostly they are rectangular.

#### Outline Properties
*   \`outline-style\`: Specifies the style of the outline (dotted, dashed, solid, etc.).
*   \`outline-color\`: Specifies the color of the outline.
*   \`outline-width\`: Specifies the width of the outline (thin, medium, thick, px).
*   \`outline-offset\`: Adds space between an outline and the edge/border of an element.
*   \`outline\`: A shorthand property for setting \`outline-width\`, \`outline-style\`, and \`outline-color\`.

#### Example
\`\`\`css
p {
  border: 1px solid black;
  outline: 5px dotted red;
  outline-offset: 15px;
}
\`\`\``,
      codeSnippet: `input:focus {\n  outline: 2px solid blue;\n}`,
      isCompleted: false
    },
    {
      id: 'css-dimension',
      title: '18. CSS - Dimension',
      content: `### CSS Height, Width and Max-width

The CSS \`height\` and \`width\` properties are used to set the height and width of an element.
The \`max-width\` property is used to set the maximum width of an element.

#### 1. Height and Width
The height and width properties may take the following values:
*   **auto**: Default. The browser calculates the height and width.
*   **length**: Defines the height/width in px, cm, etc.
*   **%**: Defines the height/width in percent of the containing block.
*   **initial**: Sets this property to its default value.
*   **inherit**: Inherits this property from its parent element.

**Note**: The height and width values do not include padding, borders, or margins.

#### 2. Max-width
The problem with the \`width\` tag occurs when the browser window is smaller than the width of the element. The browser then adds a horizontal scrollbar to the page.
Using \`max-width\` instead, in this situation, will improve the browser's handling of small windows. This is important when making a site usable on small devices.

#### 3. Min-width and Min-height
*   \`min-width\`: Defines the minimum width of an element.
*   \`min-height\`: Defines the minimum height of an element.

\`\`\`css
div {
  max-width: 500px;
  min-height: 200px;
  background-color: yellow;
}
\`\`\``,
      codeSnippet: `img {\n  max-width: 100%;\n  height: auto;\n}`,
      isCompleted: false
    },
    {
      id: 'css-scrollbars',
      title: '19. CSS - Scrollbars',
      content: `### CSS Scrollbars

While standard CSS has properties like \`overflow\`, styling scrollbars is essentially done using vendor-specific pseudo-elements (mainly WebKit for Chrome, Safari, Edge).

#### Overflow Property
The \`overflow\` property specifies what should happen if content overflows an element's box.
*   **visible**: Default. The overflow is not clipped.
*   **hidden**: The overflow is clipped, and the rest of the content will be invisible.
*   **scroll**: The overflow is clipped, and a scrollbar is added to see the rest of the content.
*   **auto**: Similar to scroll, but it typically adds scrollbars only when necessary.

#### Styling Scrollbars (WebKit)
You can use the following pseudo-elements to customize scrollbars in WebKit browsers:
*   \`::-webkit-scrollbar\`: The scrollbar.
*   \`::-webkit-scrollbar-button\`: The buttons on the scrollbar (arrows pointing upwards and downwards).
*   \`::-webkit-scrollbar-thumb\`: The draggable scrolling handle.
*   \`::-webkit-scrollbar-track\`: The track (progress bar) of the scrollbar.
*   \`::-webkit-scrollbar-corner\`: The bottom corner of the scrollbar, where both horizontal and vertical scrollbars meet.

\`\`\`css
/* Width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
\`\`\``,
      codeSnippet: `body {\n  overflow-y: scroll;\n}`,
      isCompleted: false
    },
    {
      id: 'css-visibility',
      title: '20. CSS - Visibility',
      content: `### CSS Visibility

The \`visibility\` property specifies whether or not an element is visible.

#### 1. Visible
The default value. The element is visible.
\`visibility: visible;\`

#### 2. Hidden
The element is hidden (but still takes up space).
\`visibility: hidden;\`

#### 3. Collapse
Used for table rows/columns. It removes a row or column, but it does not affect the table layout.
\`visibility: collapse;\`

#### Visibility values vs Display values
*   **display: none**: The element is hidden, and the page will be displayed as if the element is not there (does NOT take up space).
*   **visibility: hidden**: The element is hidden, but it still takes up the same space as before. The element will be hidden, but it will affect the layout.

\`\`\`css
h1.hidden {
  visibility: hidden;
}

h1.none {
  display: none;
}
\`\`\``,
      codeSnippet: `.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n  position: absolute;\n  z-index: 1;\n}`,
      isCompleted: false
    },
    {
      id: 'css-positioning',
      title: '21. CSS - Positioning',
      content: `### CSS Position Property

The \`position\` property specifies the type of positioning method used for an element (static, relative, fixed, absolute, or sticky).

#### 1. position: static;
HTML elements are positioned static by default. Static positioned elements are not affected by the top, bottom, left, and right properties. They are positioned according to the normal flow of the page.

#### 2. position: relative;
An element with \`position: relative;\` is positioned relative to its normal position.
Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position.

#### 3. position: fixed;
An element with \`position: fixed;\` is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.
The top, right, bottom, and left properties are used to position the element.

#### 4. position: absolute;
An element with \`position: absolute;\` is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).
However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

#### 5. position: sticky;
An element with \`position: sticky;\` is positioned based on the user's scroll position.
A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed).

\`\`\`css
div.sticky {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
}
\`\`\``,
      codeSnippet: `.navbar {\n  position: fixed;\n  top: 0;\n  width: 100%;\n}`,
      isCompleted: false
    },
    {
      id: 'css-layers',
      title: '22. CSS - Layers (Z-index)',
      content: `### CSS Z-index (Layers)

When elements are positioned, they can overlap other elements. The \`z-index\` property specifies the stack order of an element (which element should be placed in front of, or behind, the others).

#### Stack Order
An element can have a positive or negative stack order.
*   **Higher Value**: In front.
*   **Lower Value**: Behind.

\`\`\`css
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
\`\`\`
In the above example, the image will be placed behind the text because it has a lower z-index.

> [!NOTE]
> **Requirement**:
> \`z-index\` only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky) and flex items.
>
> If two positioned elements overlap without a z-index specified, the element positioned last in the HTML code will be shown on top.`,
      codeSnippet: `.modal {\n  z-index: 1000;\n  position: fixed;\n  top: 0;\n  left: 0;\n}`,
      isCompleted: false
    },
    {
      id: 'css-pseudo-classes',
      title: '23. CSS - Pseudo-classes',
      content: `### CSS Pseudo-classes

A pseudo-class is used to define a special state of an element.
For example, it can be used to:
*   Style an element when a user mouses over it.
*   Style visited and unvisited links differently.
*   Style an element when it gets focus.

#### Syntax
\`\`\`css
selector:pseudo-class {
  property: value;
}
\`\`\`

#### Common Pseudo-classes
1.  **:link**: Selects all unvisited links.
2.  **:visited**: Selects all visited links.
3.  **:hover**: Selects elements when mouse is over them.
4.  **:active**: Selects the active element.
5.  **:focus**: Selects the element that has focus (e.g., input field).
6.  **:first-child**: Selects every element that is the first child of its parent.
7.  **:last-child**: Selects every element that is the last child of its parent.
8.  **:nth-child(n)**: Selects every element that is the nth child of its parent.

#### Example - Simple Tooltip Hover
\`\`\`css
div {
  display: none;
}
p:hover div {
  display: block;
}
\`\`\`

#### The :first-child Pseudo-class
Matches a specified element that is the first child of another element.
\`\`\`css
p:first-child {
  color: blue;
}
\`\`\`
Matches the first \`<p>\` element in all \`<div>\` elements:
\`\`\`css
div p:first-child {
  background-color: yellow;
}
\`\`\``,
      codeSnippet: `button:hover {\n  background-color: #4CAF50;\n  color: white;\n}`,
      isCompleted: false
    },
    {
      id: 'css-pseudo-elements',
      title: '24. CSS - Pseudo-elements',
      content: `### CSS Pseudo-elements

A CSS pseudo-element is used to style specified parts of an element.
For example, it can be used to:
*   Style the first letter, or line, of an element.
*   Insert content before, or after, the content of an element.

#### Syntax
\`\`\`css
selector::pseudo-element {
  property: value;
}
\`\`\`

#### The ::first-line Pseudo-element
Used to add a special style to the first line of a text.
\`\`\`css
p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}
\`\`\`

#### The ::first-letter Pseudo-element
Used to add a special style to the first letter of a text.
\`\`\`css
p::first-letter {
  color: #ff0000;
  font-size: xx-large;
}
\`\`\`

#### The ::before Pseudo-element
Used to insert some content **before** the content of an element.
\`\`\`css
h1::before {
  content: url(smiley.gif);
}
\`\`\`

#### The ::after Pseudo-element
Used to insert some content **after** the content of an element.
\`\`\`css
h1::after {
  content: url(smiley.gif);
}
\`\`\`

#### The ::selection Pseudo-element
Matches the portion of an element that is selected by a user (highlighted text).
\`\`\`css
::selection {
  color: red;
  background: yellow;
}
\`\`\``,
      codeSnippet: `.clearfix::after {\n  content: "";\n  clear: both;\n  display: table;\n}`,
      isCompleted: false
    },
    {
      id: 'css-at-rules',
      title: '25. CSS - @ Rules',
      content: `### CSS At-Rules

At-rules are standard CSS statements that instruct CSS how to behave. They begin with an at sign (\`@\`), followed by an identifier and (if it's a block statement) a pair of braces \`{}\`.

#### 1. @import
Used to import a style sheet into another style sheet.
\`@import url("navigation.css");\`

#### 2. @media
Used to apply styles based on the result of one or more media queries (e.g. screen width, print, etc.).
\`\`\`css
@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
\`\`\`

#### 3. @font-face
Used to define custom fonts to be used in the document.
\`\`\`css
@font-face {
  font-family: myFirstFont;
  src: url(sansation_light.woff);
}

div {
  font-family: myFirstFont;
}
\`\`\`

#### 4. @keyframes
Used to specify the intermediate steps in a CSS animation sequence.
\`\`\`css
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
\`\`\`

#### 5. @charset
Specifies the character encoding used in the style sheet.
\`@charset "UTF-8";\``,
      codeSnippet: `@media only screen and (max-width: 600px) {\n  body {\n    background-color: lightblue;\n  }\n}`,
      isCompleted: false
    },
    {
      id: 'css-filters',
      title: '26. CSS - Filters',
      content: `### CSS Filters

The \`filter\` property defines visual effects (like blur and saturation) to an element (often \`<img>\`).

#### Common Filter Functions

1.  **blur(px)**: Applies a blur effect to the image.
    \`filter: blur(5px);\`
2.  **brightness(%)**: Adjusts the brightness of the image to appear more bright or dark.
    \`filter: brightness(200%);\`
3.  **contrast(%)**: Adjusts the contrast of the grayscale image.
    \`filter: contrast(200%);\`
4.  **drop-shadow(h-shadow v-shadow blur spread color)**: Applies a drop shadow effect.
    \`filter: drop-shadow(8px 8px 10px gray);\`
5.  **grayscale(%)**: Converts the image to grayscale. \`100%\` is completely gray.
    \`filter: grayscale(100%);\`
6.  **hue-rotate(deg)**: Applies a hue rotation on the image.
    \`filter: hue-rotate(90deg);\`
7.  **invert(%)**: Inverts the samples in the image.
    \`filter: invert(100%);\`
8.  **opacity(%)**: Sets the opacity level.
    \`filter: opacity(50%);\`
9.  **saturate(%)**: Saturates the image.
    \`filter: saturate(8);\`
10. **sepia(%)**: Converts the image to sepia (reddish-brown).
    \`filter: sepia(100%);\`

#### Example
\`\`\`css
img {
  filter: grayscale(100%);
  transition: filter 0.5s;
}

img:hover {
  filter: grayscale(0%);
}
\`\`\``,
      codeSnippet: `.profile-pic {\n  filter: drop-shadow(0 0 0.75rem crimson);\n}`,
      isCompleted: false
    },
    {
      id: 'css-media-types',
      title: '27. CSS - Media Types',
      content: `### CSS Media Types

Media types allow you to specify how documents will be presented on different media. The document should be displayed in a font on screen, but clearly on print.

#### Common Media Types
*   **all**: Used for all media type devices.
*   **print**: Used for printers.
*   **screen**: Used for computer screens, tablets, smart-phones etc.
*   **speech**: Used for screenreaders that "read" the page.

#### Syntax
\`\`\`css
@media media-type {
  selector {
    property: value;
  }
}
\`\`\`

#### Example: Print Styles
You can hide elements that are not necessary for printing (like navigation bars).

\`\`\`css
@media print {
  .no-print {
    display: none;
  }
  body {
    font-size: 12pt;
    color: black;
  }
}
\`\`\`

#### Example: Screen Styles
\`\`\`css
@media screen {
  body {
    font-size: 16px;
  }
}
\`\`\``,
      codeSnippet: `@media print {\n  header, footer, nav, aside {\n    display: none;\n  }\n}`,
      isCompleted: false
    },
    {
      id: 'css-paged-media',
      title: '28. CSS - Paged Media',
      content: `### CSS Paged Media

Content in Paged Media is split into one or more discrete pages. Paged media properties handle how content is distributed across pages (e.g., for printing or PDF generation).

#### The @page Rule
The \`@page\` rule is used to set the page properties for printed pages.

\`\`\`css
@page {
  size: A4;
  margin: 2cm;
}
\`\`\`

#### Page Breaks
CSS provides properties to control page breaks when printing.

1.  **page-break-before**:
    *   \`always\`: Insert a page break before the element.
    *   \`auto\`: Automatic.
    *   \`avoid\`: Avoid a page break before the element.

2.  **page-break-after**:
    *   \`always\`: Insert a page break after the element.
    *   \`auto\`: Automatic.

3.  **page-break-inside**:
    *   \`avoid\`: Avoid a page break inside the element (useful for images or tables).

#### Example
Start a new page before every \`<h1>\` element:
\`\`\`css
@media print {
  h1 {
    page-break-before: always;
  }
}
\`\`\``,
      codeSnippet: `@page :first {\n  margin-top: 10cm;\n}`,
      isCompleted: false
    },
    {
      id: 'css-aural-media',
      title: '29. CSS - Aural Media',
      content: `### CSS Aural Media (Speech)

Aural media sheets allowed control over the quality of synthetic speech (volume, pitch, speed, etc.).
NOTE: Many of these properties are now part of the **CSS Speech Module**.

#### Common Speech Properties (Conceptual)
1.  **speak**: Specifies whether text will be rendered aurally and, if so, how.
    *   \`auto\`: Default.
    *   \`none\`: Suppresses aural rendering.
    *   \`normal\`: Uses normal pronunciation rules.

2.  **volume**: Controls the volume of the speech.
    *   \`silent\`, \`x-soft\`, \`soft\`, \`medium\`, \`loud\`, \`x-loud\`.

3.  **voice-family**: Specifies the specific voice or generic voice family to be used.

4.  **pitch**: Applies a pitch to the speaking voice.
    *   \`x-low\`, \`low\`, \`medium\`, \`high\`, \`x-high\`.

5.  **rate**: Specifies the speaking rate.

#### Example (CSS Speech)
\`\`\`css
h1 {
  speak: always;
  volume: loud;
  pause-before: 200ms;
  pause-after: 200ms;
}
\`\`\`

> [!NOTE]
> **Use Case**:
> These styles are primarily used for accessibility tools (Screen Readers) to improve the experience for visually impaired users.`,
      codeSnippet: `.secret-text {\n  speak: none;\n}`,
      isCompleted: false
    },
    {
      id: 'css-printing',
      title: '30. CSS - Printing',
      content: `### CSS for Printing

Optimizing web pages for printing is a key part of CSS. It involves hiding unnecessary elements, adjusting fonts, and setting page margins.

#### Best Practices for Print Stylesheets

1.  **Remove Navigation and Ads**:
    \`\`\`css
    nav, aside, footer, .ad-banner {
      display: none;
    }
    \`\`\`

2.  **Use High Contrast**: Change background to white and text to black.
    \`\`\`css
    body {
      background: white;
      color: black;
    }
    \`\`\`

3.  **Expand Links**: Show the URL after the link text so it's readable on paper.
    \`\`\`css
    a[href]:after {
      content: " (" attr(href) ")";
    }
    \`\`\`

4.  **Avoid Page Breaks in Blocks**: Prevent code blocks or images from being cut in half.
    \`\`\`css
    pre, blockquote, img {
      page-break-inside: avoid;
    }
    \`\`\`

5.  **Set Page Margins**:
    \`\`\`css
    @page {
      margin: 2cm;
    }
    \`\`\``,
      codeSnippet: `@media print {\n  body {\n    font-size: 12pt;\n  }\n  a:after {\n    content: " (" attr(href) ")";\n  }\n}`,
      isCompleted: false
    },
    {
      id: 'css-layouts',
      title: '31. CSS - Layouts (Flexbox & Grid)',
      content: `### CSS Layout Techniques

There are four main layout modes in CSS:
1.  **Block layout**: For laying out documents (block/inline).
2.  **Multi-column layout**: For laying out text in multiple columns.
3.  **Flexbox layout**: For laying out elements in a single dimension (row or column).
4.  **Grid layout**: For laying out elements in two dimensions (rows and columns).

#### 1. CSS Flexbox
The Flexbox Layout module allows you to design flexible responsive layout structures without using float or positioning.

**Container Properties**:
*   \`display: flex;\`
*   \`flex-direction\`: \`row\`, \`column\`, \`row-reverse\`, \`column-reverse\`.
*   \`justify-content\` (Horizontal): \`center\`, \`flex-start\`, \`flex-end\`, \`space-between\`.
*   \`align-items\` (Vertical): \`center\`, \`flex-start\`, \`stretch\`.

\`\`\`css
.flex-container {
  display: flex;
  justify-content: center;
}
\`\`\`

#### 2. CSS Grid
The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.

**Container Properties**:
*   \`display: grid;\`
*   \`grid-template-columns\`: \`auto auto auto\`; (Three columns).
*   \`grid-gap\`: Space between items.

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
}
\`\`\`

#### 3. CSS Float (Legacy)
Before Flexbox and Grid, \`float\` was commonly used for layouts.
\`\`\`css
.col {
  float: left;
  width: 50%;
}
/* Clearfix hack is needed after floated elements */
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
\`\`\``,
      codeSnippet: `.container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}`,
      isCompleted: false
    },
    {
      id: 'css-validations',
      title: '32. CSS - Validation',
      content: `### CSS Validation

CSS Validation is the process of checking your CSS code against the official W3C standards.

#### Why Validate?
1.  **Cross-browser compatibility**: Valid code is more likely to work consistently across different browsers (Chrome, Firefox, Safari).
2.  **Debugging**: The validator finds syntax errors (missing semicolons, typos) that might be causing layout issues.
3.  **Future-proofing**: Ensures code adheres to specifications, making it less likely to break in future browser updates.
4.  **Professionalism**: Valid code is a sign of quality web development.

#### Tools
*   **W3C CSS Validator**: The official checking tool. (jigsaw.w3.org/css-validator)

#### Common Errors
*   Missing units (e.g., writing \`width: 100\` instead of \`width: 100px\`).
*   Typing errors in property names (e.g., \`font-colour\` instead of \`color\` or \`font-color\`).
*   Missing semicolons \`;\`.
*   Missing closing braces \`}\`.`,
      codeSnippet: `/* Always validate your CSS to ensure no syntax errors exist */`,
      isCompleted: false
    },
    {
      id: 'css-reference-guide',
      title: '33. CSS2 - Reference Guide',
      content: `### CSS2 Reference Guide Summary

This lesson provides a quick look at the core CSS2 properties that are safe to use in all browsers.

#### Box Model
*   \`width\`, \`height\`, \`padding\`, \`margin\`, \`border\`.

#### Text
*   \`font-family\`, \`font-size\`, \`font-weight\`.
*   \`color\`, \`text-align\`, \`text-decoration\`, \`line-height\`.

#### Positioning
*   \`position\`: static, relative, absolute, fixed.
*   \`top\`, \`right\`, \`bottom\`, \`left\`.
*   \`z-index\`.
*   \`float\`, \`clear\`.

#### List
*   \`list-style-type\`.
*   \`list-style-image\`.

#### Table
*   \`border-collapse\`.
*   \`caption-side\`.

> [!TIP]
> **Modern CSS**: While CSS2 is the foundation, modern web development relies heavily on CSS3 features like **Flexbox**, **Grid**, **Transitions**, and **Animations** which are covered in earlier modules.`,
      codeSnippet: `/* Complete CSS2 Stylesheet Structure */`,
      isCompleted: false
    },
    {
      id: 'css-color-reference',
      title: '34. CSS - Color References',
      content: `### CSS Color Reference

A quick reference for standard CSS color names and values.

#### Standard Color Names (140 names)
Modern browsers support 140 standard color names.
*   **Red Colors**: \`DarkRed\`, \`Red\`, \`Crimson\`, \`Tomato\`, \`Coral\`.
*   **Pink Colors**: \`MediumVioletRed\`, \`DeepPink\`, \`HotPink\`, \`Pink\`.
*   **Orange Colors**: \`OrangeRed\`, \`DarkOrange\`, \`Orange\`, \`Gold\`.
*   **Yellow Colors**: \`Yellow\`, \`LightYellow\`, \`LemonChiffon\`.
*   **Green Colors**: \`DarkGreen\`, \`Green\`, \`Lime\`, \`Chartreuse\`.
*   **Blue Colors**: \`MidnightBlue\`, \`Navy\`, \`Blue\`, \`RoyalBlue\`, \`SkyBlue\`.
*   **Purple Colors**: \`Indigo\`, \`Purple\`, \`DarkMagenta\`, \`Violet\`.
*   **Brown Colors**: \`Maroon\`, \`Brown\`, \`Sienna\`, \`Chocolate\`.
*   **Gray Colors**: \`Black\`, \`DimGray\`, \`Gray\`, \`Silver\`, \`White\`.

#### "Transparent" Keyword
The \`transparent\` keyword can be used as a color value. It is equivalent to \`rgba(0,0,0,0)\`.

#### "CurrentColor" Keyword
The \`currentColor\` keyword refers to the value of the \`color\` property of the element.
\`\`\`css
div {
  color: blue;
  border: 2px solid currentColor; /* Border will be blue */
}
\`\`\``,
      codeSnippet: `div {\n  background-color: AliceBlue;\n  color: Navy;\n}`,
      isCompleted: false
    }
  ]
};
