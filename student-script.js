"use client"

// Student Dashboard Interactive Features

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all lesson cards
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".lesson-card, .action-card")
  cards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = `all 0.6s cubic-bezier(0.16, 0.84, 0.44, 1) ${index * 0.1}s`
    observer.observe(card)
  })
})

const lessonData = {
  html: {
    title: "HTML Fundamentals",
    icon: "fa-brands fa-html5",
    color: "#e44d26",
    content: {
      learn: `
        <h3>Introduction to HTML</h3>
        <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages. It describes the structure of web pages using markup.</p>
        
        <h3>Basic Structure</h3>
        <p>Every HTML document follows a basic structure:</p>
        <ul>
          <li><code>&lt;!DOCTYPE html&gt;</code> - Declares the document type</li>
          <li><code>&lt;html&gt;</code> - Root element of the page</li>
          <li><code>&lt;head&gt;</code> - Contains meta information</li>
          <li><code>&lt;body&gt;</code> - Contains visible page content</li>
        </ul>

        <h3>Common HTML Elements</h3>
        <ul>
          <li><strong>Headings:</strong> &lt;h1&gt; to &lt;h6&gt;</li>
          <li><strong>Paragraphs:</strong> &lt;p&gt;</li>
          <li><strong>Links:</strong> &lt;a href="url"&gt;</li>
          <li><strong>Images:</strong> &lt;img src="image.jpg" alt="description"&gt;</li>
          <li><strong>Lists:</strong> &lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</li>
          <li><strong>Divisions:</strong> &lt;div&gt; and &lt;span&gt;</li>
        </ul>

        <h3>Semantic HTML</h3>
        <p>Use semantic elements to give meaning to your content:</p>
        <ul>
          <li>&lt;header&gt; - Page or section header</li>
          <li>&lt;nav&gt; - Navigation links</li>
          <li>&lt;main&gt; - Main content</li>
          <li>&lt;article&gt; - Independent content</li>
          <li>&lt;section&gt; - Thematic grouping</li>
          <li>&lt;footer&gt; - Page or section footer</li>
        </ul>

         <h3>HTML Attributes</h3>
        <p>Attributes provide additional information about elements:</p>
        <ul>
          <li><strong>id:</strong> Unique identifier for an element</li>
          <li><strong>class:</strong> Group elements for styling</li>
          <li><strong>style:</strong> Inline CSS styling</li>
          <li><strong>title:</strong> Tooltip text</li>
          <li><strong>data-*:</strong> Custom data attributes</li>
        </ul>

        <h3>HTML Forms</h3>
        <p>Forms collect user input:</p>
        <ul>
          <li><strong>Input types:</strong> text, email, password, number, date, file, checkbox, radio</li>
          <li><strong>Textarea:</strong> Multi-line text input</li>
          <li><strong>Select:</strong> Dropdown menus</li>
          <li><strong>Button:</strong> Submit, reset, or custom buttons</li>
          <li><strong>Labels:</strong> Improve accessibility</li>
        </ul>

        <h3>HTML Tables</h3>
        <p>Organize data in rows and columns:</p>
        <ul>
          <li>&lt;table&gt; - Table container</li>
          <li>&lt;thead&gt; - Table header</li>
          <li>&lt;tbody&gt; - Table body</li>
          <li>&lt;tr&gt; - Table row</li>
          <li>&lt;th&gt; - Header cell</li>
          <li>&lt;td&gt; - Data cell</li>
        </ul>

        <h3>HTML5 New Features</h3>
        <ul>
          <li><strong>Video & Audio:</strong> Native media support</li>
          <li><strong>Canvas:</strong> Draw graphics with JavaScript</li>
          <li><strong>SVG:</strong> Scalable vector graphics</li>
          <li><strong>Geolocation:</strong> Get user location</li>
          <li><strong>Local Storage:</strong> Store data in browser</li>
        </ul>
      `,
      examples: [
        {
          title: "Basic HTML Page",
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Page</title>
</head>
<body>
  <h1>Welcome to HTML!</h1>
  <p>This is my first web page.</p>
</body>
</html>`,
        },
        {
          title: "HTML Form Example",
          code: `<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <button type="submit">Submit</button>
</form>`,
        },
      ],
      exercises: [
        {
          number: 1,
          difficulty: "easy",
          title: "Create a Personal Profile Page",
          description:
            "Build a simple HTML page with your name, a photo, and a short bio about yourself. Use headings, paragraphs, and an image tag.",
          hint: "Start with basic HTML structure. Use h1 for your name, p for bio, and img for your photo. Remember to add alt text for images.",
        },
        {
          number: 2,
          difficulty: "medium",
          title: "Build a Contact Form",
          description:
            "Create a contact form with fields for name, email, subject, and message. Include proper labels and input types.",
          hint: "Use the &lt;form&gt; tag with method='POST'. For inputs, use type='text' for name/subject and type='email' for email. Use &lt;textarea&gt; for the message. Always use &lt;label&gt; tags for accessibility.",
        },
        {
          number: 3,
          difficulty: "hard",
          title: "Design a Blog Layout",
          description:
            "Create a semantic HTML structure for a blog with header, navigation, main content area with articles, sidebar, and footer.",
          hint: "Utilize semantic tags like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;aside&gt; (for sidebar), and &lt;footer&gt;. Structure your articles within the &lt;main&gt; section.",
        },
      ],
      quiz: [
        {
          question: "What does HTML stand for?",
          options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
          ],
          correct: 0,
        },
        {
          question: "Which HTML element is used for the largest heading?",
          options: ["<heading>", "<h6>", "<h1>", "<head>"],
          correct: 2,
        },
        {
          question: "What is the correct HTML element for inserting a line break?",
          options: ["<break>", "<lb>", "<br>", "<newline>"],
          correct: 2,
        },
        {
          question: "Which attribute is used to provide alternative text for an image?",
          options: ["title", "alt", "src", "text"],
          correct: 1,
        },
        {
          question: "What is the purpose of the <meta> tag?",
          options: ["To create metadata", "To style the page", "To add scripts", "To create links"],
          correct: 0,
        },
        {
          question: "Which HTML element defines the title of a document?",
          options: ["<meta>", "<title>", "<head>", "<header>"],
          correct: 1,
        },
        {
          question: "What is the correct HTML for creating a hyperlink?",
          options: [
            "<a url='http://example.com'>Link</a>",
            "<a href='http://example.com'>Link</a>",
            "<link>http://example.com</link>",
            "<a>http://example.com</a>",
          ],
          correct: 1,
        },
        {
          question: "Which HTML element is used to specify a footer for a document?",
          options: ["<bottom>", "<section>", "<footer>", "<foot>"],
          correct: 2,
        },
        {
          question: "What is the correct HTML for making a checkbox?",
          options: ["<input type='check'>", "<input type='checkbox'>", "<checkbox>", "<check>"],
          correct: 1,
        },
        {
          question: "Which HTML attribute specifies an alternate text for an image?",
          options: ["title", "alt", "src", "longdesc"],
          correct: 1,
        },
      ],
    },
  },
  css: {
    title: "CSS Styling",
    icon: "fa-brands fa-css3-alt",
    color: "#264de4",
    content: {
      learn: `
        <h3>Introduction to CSS</h3>
        <p>CSS (Cascading Style Sheets) is used to style and layout web pages. It controls colors, fonts, spacing, positioning, and responsive design.</p>
        
        <h3>CSS Syntax</h3>
        <p>CSS rules consist of selectors and declarations:</p>
        <ul>
          <li><strong>Selector:</strong> Targets HTML elements</li>
          <li><strong>Property:</strong> The style attribute to change</li>
          <li><strong>Value:</strong> The setting for the property</li>
        </ul>

        <h3>Ways to Add CSS</h3>
        <ul>
          <li><strong>Inline:</strong> Using the style attribute</li>
          <li><strong>Internal:</strong> Using &lt;style&gt; tag in &lt;head&gt;</li>
          <li><strong>External:</strong> Linking to a .css file (recommended)</li>
        </ul>

        <h3>CSS Selectors</h3>
        <ul>
          <li><strong>Element:</strong> p { color: blue; }</li>
          <li><strong>Class:</strong> .classname { color: red; }</li>
          <li><strong>ID:</strong> #idname { color: green; }</li>
          <li><strong>Universal:</strong> * { margin: 0; }</li>
        </ul>

        <h3>The Box Model</h3>
        <p>Every element is a box with:</p>
        <ul>
          <li>Content - The actual content</li>
          <li>Padding - Space around content</li>
          <li>Border - Edge around padding</li>
          <li>Margin - Space outside border</li>
        </ul>

        <h3>Flexbox & Grid</h3>
        <p>Modern layout systems for responsive design:</p>
        <ul>
          <li><strong>Flexbox:</strong> One-dimensional layouts (rows or columns)</li>
          <li><strong>Grid:</strong> Two-dimensional layouts (rows and columns)</li>
        </ul>
      `,
      examples: [
        {
          title: "Basic CSS Styling",
          code: `/* Styling a button */
.btn {
  background-color: #00bcd4;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #0097a7;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,188,212,0.3);
}`,
        },
        {
          title: "Flexbox Layout",
          code: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.item {
  flex: 1;
  padding: 20px;
  background: #f0f0f0;
}`,
        },
      ],
      exercises: [
        {
          number: 1,
          difficulty: "easy",
          title: "Style a Card Component",
          description:
            "Create a card with an image, title, description, and button. Style it with colors, padding, borders, and shadows.",
          hint: "Use a div for the card. Apply background color, padding, border, and box-shadow. Style the title, description, and button within the card.",
        },
        {
          number: 2,
          difficulty: "medium",
          title: "Build a Navigation Bar",
          description:
            "Create a responsive navigation bar using Flexbox with logo, menu items, and a button. Add hover effects.",
          hint: "Use a nav element. Apply 'display: flex' to the nav. Use justify-content: space-between to push logo and menu apart. Add hover effects to menu items.",
        },
        {
          number: 3,
          difficulty: "hard",
          title: "Create a Grid Gallery",
          description:
            "Build a responsive image gallery using CSS Grid that adapts from 4 columns on desktop to 1 column on mobile.",
          hint: "Use 'display: grid' on the gallery container. Define 'grid-template-columns' with responsive values (e.g., 'repeat(auto-fit, minmax(250px, 1fr))'). Use media queries for smaller screens.",
        },
      ],
      quiz: [
        {
          question: "What does CSS stand for?",
          options: [
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Colorful Style Sheets",
          ],
          correct: 0,
        },
        {
          question: "Which property is used to change the background color?",
          options: ["color", "bg-color", "background-color", "bgcolor"],
          correct: 2,
        },
        {
          question: "How do you select an element with class 'header'?",
          options: ["#header", ".header", "header", "*header"],
          correct: 1,
        },
        {
          question: "Which property is used to change text color?",
          options: ["text-color", "font-color", "color", "text"],
          correct: 2,
        },
        {
          question: "What is the correct CSS syntax for making all paragraphs bold?",
          options: ["p {font-weight: bold;}", "<p style='bold'>", "p {text-size: bold;}", "p {font: bold;}"],
          correct: 0,
        },
      ],
    },
  },
  javascript: {
    title: "JavaScript Programming",
    icon: "fa-brands fa-js-square",
    color: "#f7df1e",
    content: {
      learn: `
        <h3>Introduction to JavaScript</h3>
        <p>JavaScript is a programming language that enables interactive web pages. It's an essential part of web applications alongside HTML and CSS.</p>
        
        <h3>Variables and Data Types</h3>
        <p>JavaScript has several ways to declare variables:</p>
        <ul>
          <li><code>let</code> - Block-scoped, can be reassigned</li>
          <li><code>const</code> - Block-scoped, cannot be reassigned</li>
          <li><code>var</code> - Function-scoped (older, avoid using)</li>
        </ul>

        <h3>Data Types</h3>
        <ul>
          <li><strong>String:</strong> "Hello World"</li>
          <li><strong>Number:</strong> 42, 3.14</li>
          <li><strong>Boolean:</strong> true, false</li>
          <li><strong>Array:</strong> [1, 2, 3]</li>
          <li><strong>Object:</strong> {name: "John", age: 30}</li>
          <li><strong>Null & Undefined</strong></li>
        </ul>

        <h3>Functions</h3>
        <p>Functions are reusable blocks of code:</p>
        <ul>
          <li>Function declarations</li>
          <li>Arrow functions</li>
          <li>Function expressions</li>
        </ul>

        <h3>DOM Manipulation</h3>
        <p>JavaScript can interact with HTML elements:</p>
        <ul>
          <li>Select elements: <code>document.querySelector()</code></li>
          <li>Change content: <code>element.textContent</code></li>
          <li>Change styles: <code>element.style.property</code></li>
          <li>Add events: <code>element.addEventListener()</code></li>
        </ul>

        <h3>Events</h3>
        <p>Respond to user interactions:</p>
        <ul>
          <li>click, mouseover, mouseout</li>
          <li>keydown, keyup, keypress</li>
          <li>submit, change, input</li>
          <li>load, scroll, resize</li>
        </ul>
      `,
      examples: [
        {
          title: "Variables and Functions",
          code: `// Variables
const name = "John";
let age = 25;
let isStudent = true;

// Function
function greet(person) {
  return \`Hello, \${person}!\`;
}

// Arrow function
const add = (a, b) => a + b;

console.log(greet(name)); // "Hello, John!"
console.log(add(5, 3));   // 8`,
        },
        {
          title: "DOM Manipulation",
          code: `// Select element
const button = document.querySelector('.btn');
const output = document.querySelector('#output');

// Add event listener
button.addEventListener('click', function() {
  output.textContent = 'Button clicked!';
  output.style.color = '#00bcd4';
});

// Change multiple elements
const items = document.querySelectorAll('.item');
items.forEach(item => {
  item.classList.add('active');
});`,
        },
      ],
      exercises: [
        {
          number: 1,
          difficulty: "easy",
          title: "Create a Counter",
          description:
            "Build a simple counter with increment, decrement, and reset buttons. Display the current count on the page.",
          hint: "Use document.getElementById() to select your buttons and display element. Add event listeners to buttons. Update a variable to store the count and update the display element's textContent.",
        },
        {
          number: 2,
          difficulty: "medium",
          title: "Build a To-Do List",
          description:
            "Create a to-do list where users can add items, mark them as complete, and delete them. Store items in an array.",
          hint: "You'll need an input for new tasks, a button to add, and a list to display tasks. Use event delegation for click events on list items to toggle completion or delete. Store tasks in an array.",
        },
        {
          number: 3,
          difficulty: "hard",
          title: "Create a Quiz App",
          description:
            "Build an interactive quiz with multiple questions, track score, show results, and allow users to restart.",
          hint: "Store questions in an array of objects. Display one question at a time. Handle user selections, update score, and show results. Consider using localStorage to save high scores.",
        },
      ],
      quiz: [
        {
          question: "Which keyword is used to declare a constant variable?",
          options: ["var", "let", "const", "constant"],
          correct: 2,
        },
        {
          question: "What is the correct way to write a JavaScript array?",
          options: [
            "var colors = 'red', 'green', 'blue'",
            "var colors = ['red', 'green', 'blue']",
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = 1 = 'red', 2 = 'green', 3 = 'blue'",
          ],
          correct: 1,
        },
        {
          question: "How do you call a function named 'myFunction'?",
          options: ["call myFunction()", "myFunction()", "call function myFunction", "Call.myFunction()"],
          correct: 1,
        },
        {
          question: "Which method is used to select an element by its ID?",
          options: [
            "document.querySelector('#id')",
            "document.getElementById('id')",
            "Both A and B",
            "document.selectId('id')",
          ],
          correct: 2,
        },
        {
          question: "What does '===' check in JavaScript?",
          options: ["Value only", "Type only", "Both value and type", "Neither value nor type"],
          correct: 2,
        },
      ],
    },
  },
  php: {
    title: "PHP Backend Development",
    icon: "fa-brands fa-php",
    color: "#777bb3",
    content: {
      learn: `
        <h3>Introduction to PHP</h3>
        <p>PHP (Hypertext Preprocessor) is a server-side scripting language designed for web development. It's embedded in HTML and executed on the server.</p>
        
        <h3>PHP Basics</h3>
        <p>PHP code is written between <code>&lt;?php</code> and <code>?&gt;</code> tags:</p>
        <ul>
          <li>Variables start with $</li>
          <li>Statements end with semicolon</li>
          <li>Case-sensitive for variables</li>
          <li>Comments: // or /* */</li>
        </ul>

        <h3>Data Types</h3>
        <ul>
          <li><strong>String:</strong> "Hello"</li>
          <li><strong>Integer:</strong> 42</li>
          <li><strong>Float:</strong> 3.14</li>
          <li><strong>Boolean:</strong> true/false</li>
          <li><strong>Array:</strong> array(1, 2, 3)</li>
          <li><strong>Object:</strong> Custom classes</li>
        </ul>

        <h3>Superglobals</h3>
        <p>Built-in variables available in all scopes:</p>
        <ul>
          <li><code>$_GET</code> - URL parameters</li>
          <li><code>$_POST</code> - Form data</li>
          <li><code>$_SESSION</code> - Session variables</li>
          <li><code>$_COOKIE</code> - Cookie data</li>
          <li><code>$_SERVER</code> - Server information</li>
        </ul>

        <h3>Functions</h3>
        <p>Create reusable code blocks:</p>
        <ul>
          <li>Function declaration</li>
          <li>Parameters and return values</li>
          <li>Default parameters</li>
          <li>Variable scope</li>
        </ul>

        <h3>Working with Forms</h3>
        <p>Process user input securely:</p>
        <ul>
          <li>Validate input data</li>
          <li>Sanitize user input</li>
          <li>Prevent SQL injection</li>
          <li>Handle file uploads</li>
        </ul>
      `,
      examples: [
        {
          title: "Basic PHP Syntax",
          code: `<?php
// Variables
$name = "John";
$age = 25;
$isStudent = true;

// Function
function greet($person) {
    return "Hello, " . $person . "!";
}

// Output
echo greet($name);

// Array
$colors = array("red", "green", "blue");
foreach ($colors as $color) {
    echo $color . "<br>";
}
?>`,
        },
        {
          title: "Form Processing",
          code: `<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get and sanitize input
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    
    // Validate email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Welcome, " . $name;
    } else {
        echo "Invalid email";
    }
}
?>`,
        },
      ],
      exercises: [
        {
          number: 1,
          difficulty: "easy",
          title: "Create a Simple Calculator",
          description:
            "Build a PHP calculator that takes two numbers and an operation (+, -, *, /) from a form and displays the result.",
          hint: "Create an HTML form with inputs for numbers and an operation. In PHP, use $_POST to get values. Use an if/else if or switch statement to perform the calculation. Display the result.",
        },
        {
          number: 2,
          difficulty: "medium",
          title: "Build a Login System",
          description:
            "Create a login form that validates username and password, uses sessions to maintain login state, and has a logout function.",
          hint: "Use HTML forms for login/logout. In PHP, use $_POST to check credentials. Use $_SESSION to store login status. Hash passwords securely using password_hash() and verify with password_verify().",
        },
        {
          number: 3,
          difficulty: "hard",
          title: "Create a File Upload System",
          description:
            "Build a secure file upload system that validates file types, limits file size, and stores files with unique names.",
          hint: "Use an HTML form with 'enctype='multipart/form-data''. In PHP, check $_FILES['userfile']['error']. Validate file type and size. Use move_uploaded_file() to save the file, preferably with a unique name (e.g., using uniqid()).",
        },
      ],
      quiz: [
        {
          question: "What does PHP stand for?",
          options: [
            "Personal Home Page",
            "PHP: Hypertext Preprocessor",
            "Private Home Page",
            "Public Hypertext Processor",
          ],
          correct: 1,
        },
        {
          question: "How do you start a PHP code block?",
          options: ["<php>", "<?php", "<script>", "<?"],
          correct: 1,
        },
        {
          question: "Which superglobal is used to collect form data sent with POST method?",
          options: ["$_GET", "$_POST", "$_REQUEST", "$_FORM"],
          correct: 1,
        },
        {
          question: "How do you create a variable in PHP?",
          options: ["var $name", "$name", "variable name", "v:name"],
          correct: 1,
        },
        {
          question: "Which function is used to include a file in PHP?",
          options: ["import()", "include()", "require()", "Both B and C"],
          correct: 3,
        },
      ],
    },
  },
  mysql: {
    title: "MySQL Database",
    icon: "fa-solid fa-database",
    color: "#00758f",
    content: {
      learn: `
        <h3>Introduction to MySQL</h3>
        <p>MySQL is a popular open-source relational database management system (RDBMS) that uses SQL (Structured Query Language) to manage data.</p>
        
        <h3>Database Basics</h3>
        <p>Key concepts in MySQL:</p>
        <ul>
          <li><strong>Database:</strong> Container for tables</li>
          <li><strong>Table:</strong> Collection of related data</li>
          <li><strong>Row:</strong> Single record in a table</li>
          <li><strong>Column:</strong> Field in a table</li>
          <li><strong>Primary Key:</strong> Unique identifier</li>
          <li><strong>Foreign Key:</strong> Links tables together</li>
        </ul>

        <h3>SQL Commands</h3>
        <p>Four main categories:</p>
        <ul>
          <li><strong>DDL (Data Definition):</strong> CREATE, ALTER, DROP</li>
          <li><strong>DML (Data Manipulation):</strong> INSERT, UPDATE, DELETE</li>
          <li><strong>DQL (Data Query):</strong> SELECT</li>
          <li><strong>DCL (Data Control):</strong> GRANT, REVOKE</li>
        </ul>

        <h3>Common Data Types</h3>
        <ul>
          <li><strong>INT:</strong> Integer numbers</li>
          <li><strong>VARCHAR(n):</strong> Variable-length strings</li>
          <li><strong>TEXT:</strong> Long text</li>
          <li><strong>DATE:</strong> Date values</li>
          <li><strong>DATETIME:</strong> Date and time</li>
          <li><strong>BOOLEAN:</strong> True/False</li>
        </ul>

        <h3>Relationships</h3>
        <p>Connect tables together:</p>
        <ul>
          <li><strong>One-to-One:</strong> Each record relates to one record</li>
          <li><strong>One-to-Many:</strong> One record relates to many</li>
          <li><strong>Many-to-Many:</strong> Many records relate to many</li>
        </ul>

        <h3>Joins</h3>
        <p>Combine data from multiple tables:</p>
        <ul>
          <li>INNER JOIN - Matching records</li>
          <li>LEFT JOIN - All from left table</li>
          <li>RIGHT JOIN - All from right table</li>
          <li>FULL JOIN - All records</li>
        </ul>
      `,
      examples: [
        {
          title: "Create Table",
          code: `-- Create a users table
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create a posts table
CREATE TABLE posts (
    id INT PRIMARYKEY AUTO_INCREMENT,
    user_id INT,
    title VARCHAR(200) NOT NULL,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);`,
        },
        {
          title: "CRUD Operations",
          code: `-- INSERT data
INSERT INTO users (username, email, password)
VALUES ('john_doe', 'john@example.com', 'hashed_password');

-- SELECT data
SELECT * FROM users WHERE username = 'john_doe';

-- UPDATE data
UPDATE users 
SET email = 'newemail@example.com'
WHERE id = 1;

-- DELETE data
DELETE FROM users WHERE id = 1;

-- JOIN tables
SELECT users.username, posts.title
FROM users
INNER JOIN posts ON users.id = posts.user_id;`,
        },
      ],
      exercises: [
        {
          number: 1,
          difficulty: "easy",
          title: "Create a Student Database",
          description:
            "Design and create a students table with fields for ID, name, email, grade, and enrollment date. Insert 5 sample records.",
          hint: "Use CREATE TABLE. Define columns like 'id' (INT PRIMARY KEY AUTO_INCREMENT), 'name' (VARCHAR), 'email' (VARCHAR), 'grade' (DECIMAL or VARCHAR), 'enrollment_date' (DATE). Then use INSERT statements.",
        },
        {
          number: 2,
          difficulty: "medium",
          title: "Build a Library System",
          description:
            "Create tables for books, authors, and borrowers. Establish relationships and write queries to find all books by an author.",
          hint: "Create 'authors' and 'books' tables with a foreign key in 'books' linking to 'authors.id'. Create a 'borrowers' table and a linking table for 'many-to-many' relationships between books and borrowers. Use INNER JOIN to query.",
        },
        {
          number: 3,
          difficulty: "hard",
          title: "E-commerce Database",
          description:
            "Design a complete e-commerce database with products, categories, customers, orders, and order_items tables. Write complex JOIN queries.",
          hint: "Tables needed: customers, products, orders, order_items, categories. Use foreign keys to link them: orders to customers, order_items to orders and products, products to categories. Practice JOINs to get order details with customer and product info.",
        },
      ],
      quiz: [
        {
          question: "What does SQL stand for?",
          options: [
            "Structured Query Language",
            "Simple Question Language",
            "Strong Query Language",
            "Structured Question Language",
          ],
          correct: 0,
        },
        {
          question: "Which SQL statement is used to extract data from a database?",
          options: ["GET", "EXTRACT", "SELECT", "OPEN"],
          correct: 2,
        },
        {
          question: "Which SQL keyword is used to sort the result set?",
          options: ["SORT", "ORDER BY", "SORT BY", "ORDER"],
          correct: 1,
        },
        {
          question: "What is a PRIMARY KEY?",
          options: [
            "A key that opens the database",
            "A unique identifier for each record",
            "The first column in a table",
            "A password for the database",
          ],
          correct: 1,
        },
        {
          question: "Which JOIN returns all records when there is a match in either table?",
          options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
          correct: 3,
        },
      ],
    },
  },
  security: {
    title: "Cyber Security",
    icon: "fa-solid fa-shield-halved",
    color: "#ef4444",
    content: {
      learn: `
        <h3>Introduction to Cyber Security</h3>
        <p>Cyber security protects systems, networks, and data from digital attacks. It's essential for protecting sensitive information and maintaining user trust.</p>
        
        <h3>Core Principles (CIA Triad)</h3>
        <ul>
          <li><strong>Confidentiality:</strong> Keep data private</li>
          <li><strong>Integrity:</strong> Ensure data accuracy</li>
          <li><strong>Availability:</strong> Ensure access when needed</li>
        </ul>

        <h3>Common Threats</h3>
        <ul>
          <li><strong>Malware:</strong> Viruses, trojans, ransomware</li>
          <li><strong>Phishing:</strong> Fake emails/websites</li>
          <li><strong>SQL Injection:</strong> Database attacks</li>
          <li><strong>XSS:</strong> Cross-site scripting</li>
          <li><strong>DDoS:</strong> Denial of service attacks</li>
          <li><strong>Man-in-the-Middle:</strong> Intercepting communications</li>
        </ul>

        <h3>Authentication & Authorization</h3>
        <p>Verify identity and control access:</p>
        <ul>
          <li>Strong passwords (12+ characters, mixed types)</li>
          <li>Multi-factor authentication (MFA)</li>
          <li>Biometric authentication</li>
          <li>Role-based access control (RBAC)</li>
        </ul>

        <h3>Encryption</h3>
        <p>Protect data in transit and at rest:</p>
        <ul>
          <li><strong>Symmetric:</strong> Same key for encrypt/decrypt</li>
          <li><strong>Asymmetric:</strong> Public/private key pairs</li>
          <li><strong>Hashing:</strong> One-way transformation</li>
          <li><strong>SSL/TLS:</strong> Secure web communications</li>
        </ul>

        <h3>Secure Coding Practices</h3>
        <ul>
          <li>Input validation and sanitization</li>
          <li>Parameterized queries (prevent SQL injection)</li>
          <li>Output encoding (prevent XSS)</li>
          <li>Secure session management</li>
          <li>Error handling without exposing details</li>
          <li>Regular security updates</li>
        </ul>

        <h3>Best Practices</h3>
        <ul>
          <li>Keep software updated</li>
          <li>Use strong, unique passwords</li>
          <li>Enable two-factor authentication</li>
          <li>Regular backups</li>
          <li>Security awareness training</li>
          <li>Principle of least privilege</li>
        </ul>
      `,
      examples: [
        {
          title: "Password Hashing (PHP)",
          code: `<?php
// NEVER store plain text passwords!

// Hash password when user registers
$password = $_POST['password'];
$hashed = password_hash($password, PASSWORD_DEFAULT);

// Store $hashed in database

// Verify password when user logs in
$input_password = $_POST['password'];
$stored_hash = // get from database

if (password_verify($input_password, $stored_hash)) {
    echo "Login successful!";
} else {
    echo "Invalid password!";
}
?>`,
        },
        {
          title: "Prevent SQL Injection",
          code: `<?php
// BAD - Vulnerable to SQL injection
$username = $_POST['username'];
$query = "SELECT * FROM users WHERE username = '$username'";

// GOOD - Use prepared statements
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = ?");
$stmt->execute([$username]);
$user = $stmt->fetch();

// Or with named parameters
$stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
$stmt->execute(['username' => $username]);
?>`,
        },
      ],
      exercises: [
        {
          number: 1,
          difficulty: "easy",
          title: "Create a Password Strength Checker",
          description:
            "Build a JavaScript function that checks password strength based on length, uppercase, lowercase, numbers, and special characters.",
          hint: "Create a JavaScript function that takes a password string. Use regular expressions to check for different character types and length. Return a score or level based on the checks.",
        },
        {
          number: 2,
          difficulty: "medium",
          title: "Implement Input Validation",
          description:
            "Create a form with validation that prevents XSS attacks by sanitizing user input and encoding output properly.",
          hint: "On the server-side (e.g., PHP), use functions like htmlspecialchars() for output encoding and filter_var() or similar for input sanitization. Client-side validation with JavaScript can provide immediate feedback.",
        },
        {
          number: 3,
          difficulty: "hard",
          title: "Build a Secure Login System",
          description:
            "Create a complete login system with password hashing, session management, CSRF protection, and rate limiting.",
          hint: "Combine techniques: Hash passwords (bcrypt), use secure session handling, implement CSRF tokens for forms, and consider rate limiting on login attempts to prevent brute force attacks.",
        },
      ],
      quiz: [
        {
          question: "What does the CIA triad stand for in cyber security?",
          options: [
            "Computer, Internet, Access",
            "Confidentiality, Integrity, Availability",
            "Central Intelligence Agency",
            "Cyber, Information, Authentication",
          ],
          correct: 1,
        },
        {
          question: "Which attack involves injecting malicious SQL code?",
          options: ["XSS", "DDoS", "SQL Injection", "Phishing"],
          correct: 2,
        },
        {
          question: "What is the purpose of encryption?",
          options: ["Speed up data transfer", "Compress data", "Protect data confidentiality", "Delete data"],
          correct: 2,
        },
        {
          question: "What is two-factor authentication?",
          options: [
            "Using two passwords",
            "Logging in twice",
            "Using two different verification methods",
            "Having two user accounts",
          ],
          correct: 2,
        },
        {
          question: "Which is the most secure way to store passwords?",
          options: ["Plain text", "Encrypted", "Hashed with salt", "Base64 encoded"],
          correct: 2,
        },
      ],
    },
  },
  cpp: {
    title: "C++ Programming",
    icon: "fa-solid fa-code",
    color: "#00599C",
    content: {
      learn: `
        <h3>Introduction to C++</h3>
        <p>C++ is a powerful general-purpose programming language that supports procedural, object-oriented, and generic programming. It's widely used for system software, game development, and performance-critical applications.</p>
        
        <h3>Basic Syntax</h3>
        <p>C++ programs start with the main() function:</p>
        <ul>
          <li><code>#include</code> - Include libraries</li>
          <li><code>int main()</code> - Entry point</li>
          <li><code>std::cout</code> - Output to console</li>
          <li><code>std::cin</code> - Input from console</li>
          <li>Statements end with semicolon (;)</li>
        </ul>

        <h3>Data Types</h3>
        <ul>
          <li><strong>int:</strong> Integer numbers</li>
          <li><strong>float/double:</strong> Decimal numbers</li>
          <li><strong>char:</strong> Single character</li>
          <li><strong>string:</strong> Text (requires #include &lt;string&gt;)</li>
          <li><strong>bool:</strong> true/false</li>
        </ul>

        <h3>Control Structures</h3>
        <ul>
          <li><strong>if/else:</strong> Conditional execution</li>
          <li><strong>switch:</strong> Multiple conditions</li>
          <li><strong>for loop:</strong> Iterate fixed times</li>
          <li><strong>while loop:</strong> Iterate while condition is true</li>
          <li><strong>do-while:</strong> Execute at least once</li>
        </ul>

        <h3>Functions</h3>
        <p>Reusable blocks of code:</p>
        <ul>
          <li>Function declaration and definition</li>
          <li>Parameters and return values</li>
          <li>Function overloading</li>
          <li>Default parameters</li>
        </ul>

        <h3>Object-Oriented Programming</h3>
        <ul>
          <li><strong>Classes:</strong> Blueprint for objects</li>
          <li><strong>Objects:</strong> Instances of classes</li>
          <li><strong>Encapsulation:</strong> Data hiding</li>
          <li><strong>Inheritance:</strong> Code reuse</li>
          <li><strong>Polymorphism:</strong> Multiple forms</li>
        </ul>

        <h3>Pointers and Memory</h3>
        <ul>
          <li>Pointer basics and dereferencing</li>
          <li>Dynamic memory allocation (new/delete)</li>
          <li>References vs pointers</li>
          <li>Memory management best practices</li>
        </ul>

        <h3>Standard Template Library (STL)</h3>
        <ul>
          <li><strong>Vectors:</strong> Dynamic arrays</li>
          <li><strong>Maps:</strong> Key-value pairs</li>
          <li><strong>Sets:</strong> Unique elements</li>
          <li><strong>Algorithms:</strong> sort, find, etc.</li>
        </ul>
      `,
      examples: [
        {
          title: "Hello World",
          code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
        },
        {
          title: "Class Example",
          code: `#include <iostream>
#include <string>
using namespace std;

class Student {
private:
    string name;
    int age;
public:
    Student(string n, int a) : name(n), age(a) {}
    
    void display() {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

int main() {
    Student s1("John", 20);
    s1.display();
    return 0;
}`,
        },
      ],
      exercises: [
        {
          number: 1,
          difficulty: "easy",
          title: "Calculator Program",
          description: "Create a simple calculator that performs basic arithmetic operations (+, -, *, /).",
          hint: "Use cin to get two numbers and an operator. Use if-else or switch to perform the operation. Display the result with cout.",
        },
        {
          number: 2,
          difficulty: "medium",
          title: "Student Grade System",
          description: "Build a class-based system to store student information and calculate average grades.",
          hint: "Create a Student class with name and grades array. Add methods to calculate average and display info. Use vectors to store multiple students.",
        },
        {
          number: 3,
          difficulty: "hard",
          title: "Bank Account System",
          description:
            "Implement a banking system with classes for accounts, deposits, withdrawals, and balance checking.",
          hint: "Create Account class with private balance. Implement deposit(), withdraw(), and getBalance() methods. Add validation for sufficient funds. Consider using inheritance for different account types.",
        },
      ],
      quiz: [
        {
          question: "What is the correct way to declare a variable in C++?",
          options: ["int x;", "variable x;", "x = int;", "declare int x;"],
          correct: 0,
        },
        {
          question: "Which header file is needed for cout?",
          options: ["<stdio.h>", "<iostream>", "<string>", "<conio.h>"],
          correct: 1,
        },
        {
          question: "What is the correct syntax for a for loop?",
          options: ["for (int i = 0; i < 10; i++)", "for i = 0 to 10", "for (i < 10)", "loop (int i = 0; i < 10)"],
          correct: 0,
        },
        {
          question: "Which access specifier makes class members private?",
          options: ["public:", "private:", "protected:", "hidden:"],
          correct: 1,
        },
        {
          question: "What does 'new' keyword do in C++?",
          options: [
            "Creates a new file",
            "Allocates memory dynamically",
            "Creates a new class",
            "Starts a new program",
          ],
          correct: 1,
        },
        {
          question: "What is the size of int data type in C++ (typically)?",
          options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
          correct: 2,
        },
        {
          question: "Which operator is used to access members of a class through a pointer?",
          options: [".", "->", "::", "*"],
          correct: 1,
        },
        {
          question: "What is inheritance in C++?",
          options: [
            "A way to hide data",
            "A way to reuse code from existing classes",
            "A way to allocate memory",
            "A way to create loops",
          ],
          correct: 1,
        },
        {
          question: "Which STL container stores unique elements?",
          options: ["vector", "map", "set", "list"],
          correct: 2,
        },
        {
          question: "What is the correct way to create a pointer in C++?",
          options: ["int *ptr;", "int ptr*;", "pointer int ptr;", "*int ptr;"],
          correct: 0,
        },
      ],
    },
  },
  python: {
    title: "Python Programming",
    icon: "fa-brands fa-python",
    color: "#3776AB",
    content: {
      learn: `
        <h3>Introduction to Python</h3>
        <p>Python is a high-level, interpreted programming language known for its simplicity and readability. It's widely used in web development, data science, AI, automation, and more.</p>
        
        <h3>Python Basics</h3>
        <p>Python syntax is clean and easy to read:</p>
        <ul>
          <li>No semicolons needed</li>
          <li>Indentation defines code blocks</li>
          <li>Dynamic typing (no type declarations)</li>
          <li>Comments start with #</li>
        </ul>

        <h3>Data Types</h3>
        <ul>
          <li><strong>int:</strong> Integer numbers</li>
          <li><strong>float:</strong> Decimal numbers</li>
          <li><strong>str:</strong> Strings (text)</li>
          <li><strong>bool:</strong> True/False</li>
          <li><strong>list:</strong> Ordered, mutable collection</li>
          <li><strong>tuple:</strong> Ordered, immutable collection</li>
          <li><strong>dict:</strong> Key-value pairs</li>
          <li><strong>set:</strong> Unordered, unique elements</li>
        </ul>

        <h3>Control Flow</h3>
        <ul>
          <li><strong>if/elif/else:</strong> Conditional statements</li>
          <li><strong>for loop:</strong> Iterate over sequences</li>
          <li><strong>while loop:</strong> Loop while condition is true</li>
          <li><strong>break/continue:</strong> Control loop execution</li>
        </ul>

        <h3>Functions</h3>
        <p>Define reusable code blocks:</p>
        <ul>
          <li>def keyword to define functions</li>
          <li>Parameters and return values</li>
          <li>Default parameters</li>
          <li>*args and **kwargs</li>
          <li>Lambda functions (anonymous)</li>
        </ul>

        <h3>Object-Oriented Programming</h3>
        <ul>
          <li><strong>Classes:</strong> Define with class keyword</li>
          <li><strong>__init__:</strong> Constructor method</li>
          <li><strong>self:</strong> Reference to instance</li>
          <li><strong>Inheritance:</strong> Extend classes</li>
          <li><strong>Methods:</strong> Functions inside classes</li>
        </ul>

        <h3>File Handling</h3>
        <ul>
          <li>open() function to read/write files</li>
          <li>with statement for automatic closing</li>
          <li>read(), write(), readline() methods</li>
          <li>JSON and CSV file handling</li>
        </ul>

        <h3>Popular Libraries</h3>
        <ul>
          <li><strong>NumPy:</strong> Numerical computing</li>
          <li><strong>Pandas:</strong> Data analysis</li>
          <li><strong>Matplotlib:</strong> Data visualization</li>
          <li><strong>Django/Flask:</strong> Web frameworks</li>
          <li><strong>Requests:</strong> HTTP library</li>
        </ul>
      `,
      examples: [
        {
          title: "Hello World",
          code: `# Simple print statement
print("Hello, World!")

# Variables
name = "John"
age = 25
print(f"My name is {name} and I'm {age} years old")`,
        },
        {
          title: "Class Example",
          code: `class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def display(self):
        print(f"Name: {self.name}, Age: {self.age}")

# Create object
student1 = Student("John", 20)
student1.display()`,
        },
      ],
      exercises: [
        {
          number: 1,
          difficulty: "easy",
          title: "Number Guessing Game",
          description: "Create a game where the computer picks a random number and the user has to guess it.",
          hint: "Use the random module to generate a number. Use a while loop to keep asking for guesses. Compare the guess with the number and give hints (higher/lower).",
        },
        {
          number: 2,
          difficulty: "medium",
          title: "To-Do List Application",
          description: "Build a command-line to-do list app where users can add, view, and remove tasks.",
          hint: "Use a list to store tasks. Create functions for add_task(), view_tasks(), and remove_task(). Use a while loop for the main menu. Consider saving tasks to a file.",
        },
        {
          number: 3,
          difficulty: "hard",
          title: "Web Scraper",
          description: "Create a web scraper that extracts data from a website and saves it to a CSV file.",
          hint: "Use requests library to fetch web pages. Use BeautifulSoup to parse HTML. Extract specific data using CSS selectors. Use csv module to save data. Handle exceptions for network errors.",
        },
      ],
      quiz: [
        {
          question: "What is the correct way to create a variable in Python?",
          options: ["int x = 5", "x = 5", "var x = 5", "variable x = 5"],
          correct: 1,
        },
        {
          question: "Which keyword is used to define a function in Python?",
          options: ["function", "def", "func", "define"],
          correct: 1,
        },
        {
          question: "What is the output of: print(type([1, 2, 3]))?",
          options: ["<class 'array'>", "<class 'list'>", "<class 'tuple'>", "<class 'set'>"],
          correct: 1,
        },
        {
          question: "How do you start a comment in Python?",
          options: ["//", "/*", "#", ""],
          correct: 2,
        },
        {
          question: "Which method is used to add an element to a list?",
          options: ["add()", "append()", "insert()", "push()"],
          correct: 1,
        },
        {
          question: "What does the 'self' keyword represent in a class?",
          options: ["The class itself", "The instance of the class", "The parent class", "A static variable"],
          correct: 1,
        },
        {
          question: "Which operator is used for exponentiation in Python?",
          options: ["^", "**", "exp", "pow"],
          correct: 1,
        },
        {
          question: "What is the correct way to open a file for reading?",
          options: ["open('file.txt', 'r')", "read('file.txt')", "file.open('r')", "open('file.txt').read()"],
          correct: 0,
        },
        {
          question: "Which data structure is immutable in Python?",
          options: ["list", "dict", "set", "tuple"],
          correct: 3,
        },
        {
          question: "What does the 'with' statement do in Python?",
          options: ["Creates a loop", "Defines a function", "Manages resources automatically", "Imports a module"],
          correct: 2,
        },
      ],
    },
  },
  frontend: {
    title: "Frontend Development",
    icon: "fa-solid fa-laptop-code",
    color: "#61DAFB",
    content: {
      learn: `
        <h3>Introduction to Frontend Development</h3>
        <p>Frontend development focuses on creating the user interface and experience of web applications. It combines HTML, CSS, JavaScript, and modern frameworks to build interactive, responsive websites.</p>
        
        <h3>Core Technologies</h3>
        <ul>
          <li><strong>HTML:</strong> Structure and content</li>
          <li><strong>CSS:</strong> Styling and layout</li>
          <li><strong>JavaScript:</strong> Interactivity and logic</li>
        </ul>

        <h3>Modern Frameworks</h3>
        <ul>
          <li><strong>React:</strong> Component-based UI library</li>
          <li><strong>Vue.js:</strong> Progressive framework</li>
          <li><strong>Angular:</strong> Full-featured framework</li>
          <li><strong>Svelte:</strong> Compile-time framework</li>
        </ul>

        <h3>React Fundamentals</h3>
        <ul>
          <li><strong>Components:</strong> Reusable UI pieces</li>
          <li><strong>JSX:</strong> JavaScript XML syntax</li>
          <li><strong>Props:</strong> Pass data to components</li>
          <li><strong>State:</strong> Component data management</li>
          <li><strong>Hooks:</strong> useState, useEffect, etc.</li>
        </ul>

        <h3>Responsive Design</h3>
        <ul>
          <li>Mobile-first approach</li>
          <li>Media queries</li>
          <li>Flexbox and Grid layouts</li>
          <li>Viewport units</li>
          <li>Responsive images</li>
        </ul>

        <h3>State Management</h3>
        <ul>
          <li><strong>Context API:</strong> Built-in React state</li>
          <li><strong>Redux:</strong> Predictable state container</li>
          <li><strong>Zustand:</strong> Lightweight state management</li>
          <li><strong>Recoil:</strong> Atom-based state</li>
        </ul>

        <h3>API Integration</h3>
        <ul>
          <li>Fetch API for HTTP requests</li>
          <li>Axios library</li>
          <li>RESTful API consumption</li>
          <li>GraphQL queries</li>
          <li>Error handling</li>
        </ul>

        <h3>Performance Optimization</h3>
        <ul>
          <li>Code splitting</li>
          <li>Lazy loading</li>
          <li>Image optimization</li>
          <li>Caching strategies</li>
          <li>Bundle size reduction</li>
        </ul>

        <h3>Build Tools</h3>
        <ul>
          <li><strong>Vite:</strong> Fast build tool</li>
          <li><strong>Webpack:</strong> Module bundler</li>
          <li><strong>npm/yarn:</strong> Package managers</li>
          <li><strong>ESLint:</strong> Code linting</li>
        </ul>
      `,
      examples: [
        {
          title: "React Component",
          code: `import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`,
        },
        {
          title: "Fetch API Example",
          code: `async function fetchUsers() {
  try {
    const response = await fetch('https://api.example.com/users');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}

fetchUsers();`,
        },
      ],
      exercises: [
        {
          number: 1,
          difficulty: "easy",
          title: "Build a Todo Component",
          description: "Create a React todo list component with add, delete, and toggle complete functionality.",
          hint: "Use useState to manage todos array. Create functions for addTodo, deleteTodo, and toggleTodo. Map over todos to display them. Use input for new todos.",
        },
        {
          number: 2,
          difficulty: "medium",
          title: "Weather App with API",
          description: "Build a weather app that fetches data from a weather API and displays current conditions.",
          hint: "Use fetch or axios to get weather data. Use useState for weather data and loading state. Use useEffect to fetch on component mount. Display temperature, conditions, and icon.",
        },
        {
          number: 3,
          difficulty: "hard",
          title: "E-commerce Product Page",
          description:
            "Create a complete product page with image gallery, size selection, cart functionality, and responsive design.",
          hint: "Use multiple components (Gallery, ProductInfo, Cart). Implement state management for cart. Add image carousel. Make it responsive with CSS Grid/Flexbox. Consider using Context API for cart state.",
        },
      ],
      quiz: [
        {
          question: "What is JSX in React?",
          options: ["A JavaScript library", "A syntax extension for JavaScript", "A CSS framework", "A database"],
          correct: 1,
        },
        {
          question: "Which hook is used for side effects in React?",
          options: ["useState", "useEffect", "useContext", "useReducer"],
          correct: 1,
        },
        {
          question: "What is the virtual DOM?",
          options: [
            "A copy of the real DOM",
            "A JavaScript object representation of the DOM",
            "A CSS framework",
            "A database",
          ],
          correct: 1,
        },
        {
          question: "Which CSS property is used for flexbox?",
          options: ["display: flex", "flex: box", "layout: flex", "flexbox: true"],
          correct: 0,
        },
        {
          question: "What does npm stand for?",
          options: [
            "Node Package Manager",
            "New Programming Method",
            "Network Protocol Manager",
            "Node Program Module",
          ],
          correct: 0,
        },
        {
          question: "Which method is used to update state in React?",
          options: ["updateState()", "setState()", "changeState()", "modifyState()"],
          correct: 1,
        },
        {
          question: "What is the purpose of props in React?",
          options: ["To style components", "To pass data between components", "To create routes", "To manage state"],
          correct: 1,
        },
        {
          question: "Which tool is used for fast builds in modern frontend development?",
          options: ["Grunt", "Gulp", "Vite", "Bower"],
          correct: 2,
        },
        {
          question: "What is responsive design?",
          options: [
            "Fast loading websites",
            "Websites that adapt to different screen sizes",
            "Websites with animations",
            "Websites with good SEO",
          ],
          correct: 1,
        },
        {
          question: "Which HTTP method is used to retrieve data from an API?",
          options: ["POST", "GET", "PUT", "DELETE"],
          correct: 1,
        },
      ],
    },
  },
  backend: {
    title: "Backend Development",
    icon: "fa-solid fa-server",
    color: "#68A063",
    content: {
      learn: `
        <h3>Introduction to Backend Development</h3>
        <p>Backend development focuses on server-side logic, databases, APIs, and application architecture. It handles data processing, business logic, and communication between the frontend and database.</p>
        
        <h3>Core Concepts</h3>
        <ul>
          <li><strong>Server:</strong> Handles requests and responses</li>
          <li><strong>Database:</strong> Stores and manages data</li>
          <li><strong>API:</strong> Interface for communication</li>
          <li><strong>Authentication:</strong> User identity verification</li>
        </ul>

        <h3>Node.js Basics</h3>
        <ul>
          <li>JavaScript runtime for server-side</li>
          <li>Event-driven, non-blocking I/O</li>
          <li>npm package ecosystem</li>
          <li>Module system (CommonJS/ES6)</li>
        </ul>

        <h3>Express.js Framework</h3>
        <ul>
          <li><strong>Routing:</strong> Define URL endpoints</li>
          <li><strong>Middleware:</strong> Request processing</li>
          <li><strong>Request/Response:</strong> Handle HTTP</li>
          <li><strong>Error handling:</strong> Catch and manage errors</li>
        </ul>

        <h3>RESTful API Design</h3>
        <ul>
          <li><strong>GET:</strong> Retrieve data</li>
          <li><strong>POST:</strong> Create new data</li>
          <li><strong>PUT/PATCH:</strong> Update data</li>
          <li><strong>DELETE:</strong> Remove data</li>
          <li>Status codes (200, 404, 500, etc.)</li>
        </ul>

        <h3>Database Integration</h3>
        <ul>
          <li><strong>SQL:</strong> MySQL, PostgreSQL</li>
          <li><strong>NoSQL:</strong> MongoDB, Redis</li>
          <li><strong>ORMs:</strong> Sequelize, Mongoose</li>
          <li>Query optimization</li>
          <li>Migrations and seeding</li>
        </ul>

        <h3>Authentication & Authorization</h3>
        <ul>
          <li><strong>JWT:</strong> JSON Web Tokens</li>
          <li><strong>Sessions:</strong> Server-side storage</li>
          <li><strong>OAuth:</strong> Third-party auth</li>
          <li><strong>Bcrypt:</strong> Password hashing</li>
          <li>Role-based access control</li>
        </ul>

        <h3>Security Best Practices</h3>
        <ul>
          <li>Input validation and sanitization</li>
          <li>SQL injection prevention</li>
          <li>XSS protection</li>
          <li>CORS configuration</li>
          <li>Rate limiting</li>
          <li>HTTPS/SSL certificates</li>
        </ul>

        <h3>Deployment</h3>
        <ul>
          <li><strong>Hosting:</strong> Heroku, AWS, DigitalOcean</li>
          <li><strong>Containers:</strong> Docker</li>
          <li><strong>CI/CD:</strong> Automated deployment</li>
          <li><strong>Monitoring:</strong> Logs and metrics</li>
        </ul>
      `,
      examples: [
        {
          title: "Express Server",
          code: `const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json({ users: ['John', 'Jane'] });
});

app.post('/api/users', (req, res) => {
  const { name } = req.body;
  res.json({ message: \`User \${name} created\` });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
        },
        {
          title: "JWT Authentication",
          code: `const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Register user
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  // Save to database
  res.json({ message: 'User registered' });
});

// Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  // Get user from database
  const validPassword = await bcrypt.compare(password, user.password);
  
  if (validPassword) {
    const token = jwt.sign({ id: user.id }, 'secret_key');
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});`,
        },
      ],
      exercises: [
        {
          number: 1,
          difficulty: "easy",
          title: "Build a Simple REST API",
          description: "Create a REST API with CRUD operations for a todo list using Express.js.",
          hint: "Set up Express server. Create routes for GET, POST, PUT, DELETE. Use an array to store todos initially. Test with Postman or curl.",
        },
        {
          number: 2,
          difficulty: "medium",
          title: "User Authentication System",
          description:
            "Implement a complete authentication system with registration, login, and protected routes using JWT.",
          hint: "Use bcrypt to hash passwords. Generate JWT tokens on login. Create middleware to verify tokens. Protect routes by checking for valid tokens. Store user data in a database.",
        },
        {
          number: 3,
          difficulty: "hard",
          title: "E-commerce API",
          description: "Build a complete e-commerce backend with products, cart, orders, and payment integration.",
          hint: "Design database schema for products, users, carts, orders. Implement authentication. Create endpoints for product management, cart operations, order processing. Consider integrating Stripe for payments. Add validation and error handling.",
        },
      ],
      quiz: [
        {
          question: "What is Node.js?",
          options: ["A JavaScript framework", "A JavaScript runtime", "A database", "A CSS library"],
          correct: 1,
        },
        {
          question: "Which HTTP method is used to create a new resource?",
          options: ["GET", "POST", "PUT", "DELETE"],
          correct: 1,
        },
        {
          question: "What does REST stand for?",
          options: [
            "Representational State Transfer",
            "Remote State Transfer",
            "Representational System Transfer",
            "Remote System Transfer",
          ],
          correct: 0,
        },
        {
          question: "What is middleware in Express.js?",
          options: [
            "A database",
            "Functions that execute during request-response cycle",
            "A frontend framework",
            "A CSS preprocessor",
          ],
          correct: 1,
        },
        {
          question: "Which library is commonly used for password hashing?",
          options: ["jwt", "bcrypt", "express", "mongoose"],
          correct: 1,
        },
        {
          question: "What does JWT stand for?",
          options: ["JavaScript Web Token", "JSON Web Token", "Java Web Token", "JavaScript Web Tool"],
          correct: 1,
        },
        {
          question: "Which status code indicates a successful request?",
          options: ["404", "500", "200", "301"],
          correct: 2,
        },
        {
          question: "What is MongoDB?",
          options: ["A SQL database", "A NoSQL database", "A frontend framework", "A programming language"],
          correct: 1,
        },
        {
          question: "What is the purpose of CORS?",
          options: ["To style web pages", "To allow cross-origin requests", "To create databases", "To hash passwords"],
          correct: 1,
        },
        {
          question: "Which tool is used for API testing?",
          options: ["Photoshop", "Postman", "Figma", "Canva"],
          correct: 1,
        },
      ],
    },
  },
  canva: {
    title: "Canva Design",
    icon: "fa-solid fa-palette",
    color: "#00C4CC",
    content: {
      learn: `
        <h3>Introduction to Canva</h3>
        <p>Canva is a user-friendly graphic design platform that allows you to create professional designs without extensive design experience. It's perfect for social media graphics, presentations, posters, and more.</p>
        
        <h3>Getting Started</h3>
        <ul>
          <li>Create a free Canva account</li>
          <li>Explore templates and design types</li>
          <li>Understand the canvas and workspace</li>
          <li>Navigate the toolbar and elements</li>
        </ul>

        <h3>Design Principles</h3>
        <ul>
          <li><strong>Balance:</strong> Visual weight distribution</li>
          <li><strong>Contrast:</strong> Make elements stand out</li>
          <li><strong>Alignment:</strong> Create order and organization</li>
          <li><strong>Proximity:</strong> Group related elements</li>
          <li><strong>Repetition:</strong> Consistency in design</li>
          <li><strong>White Space:</strong> Give designs room to breathe</li>
        </ul>

        <h3>Typography</h3>
        <ul>
          <li>Font pairing techniques</li>
          <li>Hierarchy with font sizes</li>
          <li>Readability and legibility</li>
          <li>Text effects and styling</li>
          <li>Custom fonts upload</li>
        </ul>

        <h3>Color Theory</h3>
        <ul>
          <li>Color wheel basics</li>
          <li>Complementary colors</li>
          <li>Analogous color schemes</li>
          <li>Brand color consistency</li>
          <li>Color psychology</li>
        </ul>

        <h3>Elements and Graphics</h3>
        <ul>
          <li><strong>Photos:</strong> Stock images and uploads</li>
          <li><strong>Shapes:</strong> Basic and custom shapes</li>
          <li><strong>Icons:</strong> Thousands of icons</li>
          <li><strong>Illustrations:</strong> Vector graphics</li>
          <li><strong>Stickers:</strong> Fun decorative elements</li>
        </ul>

        <h3>Templates</h3>
        <ul>
          <li>Social media posts (Instagram, Facebook, Twitter)</li>
          <li>Presentations and slideshows</li>
          <li>Posters and flyers</li>
          <li>Business cards and resumes</li>
          <li>Infographics and charts</li>
        </ul>

        <h3>Brand Kit</h3>
        <ul>
          <li>Upload brand logos</li>
          <li>Save brand colors</li>
          <li>Store brand fonts</li>
          <li>Create brand templates</li>
          <li>Maintain consistency</li>
        </ul>

        <h3>Export and Share</h3>
        <ul>
          <li>Download formats (PNG, JPG, PDF, MP4)</li>
          <li>Quality settings</li>
          <li>Share links</li>
          <li>Collaborate with teams</li>
          <li>Print-ready files</li>
        </ul>
      `,
      examples: [
        {
          title: "Social Media Post Design",
          code: `Design Steps:
1. Choose Instagram Post template (1080x1080px)
2. Select a background color or image
3. Add your main text with bold font
4. Include supporting text with smaller font
5. Add relevant icons or illustrations
6. Apply brand colors
7. Ensure text is readable
8. Export as PNG for best quality`,
        },
        {
          title: "Presentation Slide",
          code: `Design Steps:
1. Start with Presentation template
2. Choose a consistent color scheme
3. Use large, readable fonts for titles
4. Add bullet points for key information
5. Include relevant images or icons
6. Maintain white space
7. Keep design consistent across slides
8. Export as PDF or PowerPoint`,
        },
      ],
      exercises: [
        {
          number: 1,
          difficulty: "easy",
          title: "Create a Social Media Post",
          description:
            "Design an Instagram post promoting a fictional coffee shop. Include logo, text, and appealing visuals.",
          hint: "Use Instagram Post template. Choose warm colors (browns, creams). Add coffee-related images. Use 2-3 fonts maximum. Include call-to-action text.",
        },
        {
          number: 2,
          difficulty: "medium",
          title: "Design a Business Flyer",
          description:
            "Create a professional flyer for a tech conference with event details, speakers, and registration info.",
          hint: "Use Flyer template. Create clear hierarchy with headings. Use tech-themed colors (blues, grays). Add speaker photos. Include date, time, location prominently. Add QR code for registration.",
        },
        {
          number: 3,
          difficulty: "hard",
          title: "Build a Brand Identity Kit",
          description:
            "Create a complete brand identity including logo, business card, letterhead, and social media templates.",
          hint: "Start with logo design. Choose 2-3 brand colors. Select 2 complementary fonts. Design business card with logo and contact info. Create letterhead template. Design matching social media templates. Ensure consistency across all materials.",
        },
      ],
      quiz: [
        {
          question: "What is Canva primarily used for?",
          options: ["Video editing", "Graphic design", "3D modeling", "Music production"],
          correct: 1,
        },
        {
          question: "Which design principle refers to visual weight distribution?",
          options: ["Contrast", "Balance", "Proximity", "Repetition"],
          correct: 1,
        },
        {
          question: "What is the recommended image format for social media posts?",
          options: ["GIF", "BMP", "PNG", "TIFF"],
          correct: 2,
        },
        {
          question: "What is a Brand Kit in Canva?",
          options: [
            "A collection of templates",
            "A storage for brand assets like logos and colors",
            "A photo editing tool",
            "A video maker",
          ],
          correct: 1,
        },
        {
          question: "Which color scheme uses colors next to each other on the color wheel?",
          options: ["Complementary", "Triadic", "Analogous", "Monochromatic"],
          correct: 2,
        },
        {
          question: "What is the standard size for an Instagram post?",
          options: ["1920x1080px", "1080x1080px", "800x600px", "1200x628px"],
          correct: 1,
        },
        {
          question: "What does white space refer to in design?",
          options: ["Empty areas in a design", "White colored backgrounds", "Text spacing", "Image borders"],
          correct: 0,
        },
        {
          question: "How many fonts should you typically use in a single design?",
          options: ["1", "2-3", "5-6", "As many as possible"],
          correct: 1,
        },
        {
          question: "What is the purpose of a template in Canva?",
          options: [
            "To slow down design process",
            "To provide a starting point for designs",
            "To limit creativity",
            "To increase file size",
          ],
          correct: 1,
        },
        {
          question: "Which file format is best for print-ready designs?",
          options: ["JPG", "PNG", "PDF", "GIF"],
          correct: 2,
        },
      ],
    },
  },
  photoshop: {
    title: "Adobe Photoshop",
    icon: "fa-solid fa-image",
    color: "#31A8FF",
    content: {
      learn: `
        <h3>Introduction to Photoshop</h3>
        <p>Adobe Photoshop is the industry-standard software for photo editing, digital art, and graphic design. It offers powerful tools for image manipulation, retouching, and creative composition.</p>
        
        <h3>Interface Basics</h3>
        <ul>
          <li><strong>Workspace:</strong> Customizable panels and tools</li>
          <li><strong>Toolbar:</strong> Selection, painting, and editing tools</li>
          <li><strong>Panels:</strong> Layers, Properties, Adjustments</li>
          <li><strong>Canvas:</strong> Your working area</li>
        </ul>

        <h3>Essential Tools</h3>
        <ul>
          <li><strong>Move Tool (V):</strong> Move and arrange layers</li>
          <li><strong>Selection Tools:</strong> Marquee, Lasso, Magic Wand</li>
          <li><strong>Crop Tool (C):</strong> Trim and resize images</li>
          <li><strong>Brush Tool (B):</strong> Paint and draw</li>
          <li><strong>Eraser Tool (E):</strong> Remove pixels</li>
          <li><strong>Text Tool (T):</strong> Add and edit text</li>
        </ul>

        <h3>Layers</h3>
        <ul>
          <li>Understanding layer stack</li>
          <li>Layer types (pixel, adjustment, text)</li>
          <li>Blending modes</li>
          <li>Layer opacity and fill</li>
          <li>Layer masks</li>
          <li>Smart objects</li>
        </ul>

        <h3>Selections and Masks</h3>
        <ul>
          <li>Quick Selection tool</li>
          <li>Select and Mask workspace</li>
          <li>Refine Edge technique</li>
          <li>Layer masks for non-destructive editing</li>
          <li>Clipping masks</li>
        </ul>

        <h3>Color Correction</h3>
        <ul>
          <li><strong>Levels:</strong> Adjust tonal range</li>
          <li><strong>Curves:</strong> Precise color control</li>
          <li><strong>Hue/Saturation:</strong> Modify colors</li>
          <li><strong>Color Balance:</strong> Adjust color tones</li>
          <li><strong>Vibrance:</strong> Enhance color intensity</li>
        </ul>

        <h3>Retouching</h3>
        <ul>
          <li><strong>Spot Healing:</strong> Remove blemishes</li>
          <li><strong>Clone Stamp:</strong> Duplicate areas</li>
          <li><strong>Patch Tool:</strong> Blend corrections</li>
          <li><strong>Content-Aware Fill:</strong> Remove objects</li>
          <li><strong>Dodge & Burn:</strong> Lighten and darken</li>
        </ul>

        <h3>Filters and Effects</h3>
        <ul>
          <li>Blur filters (Gaussian, Motion, Radial)</li>
          <li>Sharpen filters</li>
          <li>Artistic filters</li>
          <li>Neural Filters (AI-powered)</li>
          <li>Filter Gallery</li>
        </ul>

        <h3>Text and Typography</h3>
        <ul>
          <li>Character and paragraph formatting</li>
          <li>Text effects and styles</li>
          <li>Warp text</li>
          <li>Text on path</li>
          <li>Layer styles for text</li>
        </ul>

        <h3>Export and Save</h3>
        <ul>
          <li><strong>PSD:</strong> Native Photoshop format</li>
          <li><strong>JPG:</strong> Compressed photos</li>
          <li><strong>PNG:</strong> Transparent backgrounds</li>
          <li><strong>TIFF:</strong> High-quality prints</li>
          <li>Export for web and devices</li>
        </ul>
      `,
      examples: [
        {
          title: "Basic Photo Retouching",
          code: `Steps:
1. Open image in Photoshop
2. Duplicate background layer (Ctrl+J)
3. Use Spot Healing Brush to remove blemishes
4. Create Curves adjustment layer
5. Adjust midtones for better exposure
6. Add Hue/Saturation layer
7. Slightly increase saturation
8. Sharpen with Unsharp Mask filter
9. Save as PSD and export as JPG`,
        },
        {
          title: "Remove Background",
          code: `Steps:
1. Open image
2. Select Quick Selection Tool (W)
3. Click and drag over subject
4. Click "Select and Mask" in top toolbar
5. Refine edge detection
6. Output to "New Layer with Layer Mask"
7. Add new background layer
8. Adjust colors to match
9. Export as PNG with transparency`,
        },
      ],
      exercises: [
        {
          number: 1,
          difficulty: "easy",
          title: "Photo Color Correction",
          description: "Take a dull photo and enhance it using Levels, Curves, and Hue/Saturation adjustments.",
          hint: "Open image. Add Levels adjustment to fix exposure. Use Curves for contrast. Adjust Hue/Saturation to enhance colors. Use adjustment layers for non-destructive editing.",
        },
        {
          number: 2,
          difficulty: "medium",
          title: "Portrait Retouching",
          description: "Retouch a portrait photo by removing blemishes, smoothing skin, and enhancing features.",
          hint: "Duplicate layer. Use Spot Healing for blemishes. Create new layer for Frequency Separation. Use Dodge & Burn for contouring. Sharpen eyes. Whiten teeth with Hue/Saturation.",
        },
        {
          number: 3,
          difficulty: "hard",
          title: "Photo Manipulation Composite",
          description:
            "Create a surreal photo composite by combining multiple images with realistic lighting and shadows.",
          hint: "Plan your composition. Use layer masks for blending. Match lighting with Curves. Add shadows with soft brushes. Use Color Balance to match tones. Apply blur for depth. Add final color grading.",
        },
      ],
      quiz: [
        {
          question: "What is the keyboard shortcut for the Move Tool?",
          options: ["M", "V", "T", "C"],
          correct: 1,
        },
        {
          question: "Which tool is best for removing small blemishes?",
          options: ["Clone Stamp", "Spot Healing Brush", "Eraser", "Brush"],
          correct: 1,
        },
        {
          question: "What does a layer mask do?",
          options: ["Deletes pixels permanently", "Hides pixels non-destructively", "Changes layer color", "Adds text"],
          correct: 1,
        },
        {
          question: "Which adjustment is best for precise color control?",
          options: ["Brightness/Contrast", "Levels", "Curves", "Exposure"],
          correct: 2,
        },
        {
          question: "What file format preserves layers?",
          options: ["JPG", "PNG", "PSD", "GIF"],
          correct: 2,
        },
        {
          question: "What is the purpose of Smart Objects?",
          options: [
            "To make files smaller",
            "To enable non-destructive transformations",
            "To add text",
            "To remove backgrounds",
          ],
          correct: 1,
        },
        {
          question: "Which filter is used to sharpen images?",
          options: ["Gaussian Blur", "Unsharp Mask", "Motion Blur", "Radial Blur"],
          correct: 1,
        },
        {
          question: "What does Content-Aware Fill do?",
          options: ["Adds color", "Removes objects intelligently", "Sharpen images", "Adds text"],
          correct: 1,
        },
        {
          question: "Which tool is used to select areas of similar color?",
          options: ["Lasso Tool", "Magic Wand Tool", "Crop Tool", "Brush Tool"],
          correct: 1,
        },
        {
          question: "What is the best format for web images with transparency?",
          options: ["JPG", "PNG", "GIF", "TIFF"],
          correct: 1,
        },
      ],
    },
  },
}

const userSubscription = {
  active: false,
  plan: null,
  expiryDate: null,
}

function openLesson(lessonType) {
  const lesson = lessonData[lessonType]
  if (!lesson) return

  // Create modal overlay
  const modal = document.createElement("div")
  modal.className = "lesson-modal"
  modal.innerHTML = `
    <div class="lesson-modal-content">
      <button class="modal-close" onclick="this.closest('.lesson-modal').remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <div class="modal-header">
        <h2><i class="${lesson.icon}" style="color: ${lesson.color}"></i> ${lesson.title}</h2>
        <p>Interactive learning experience with examples, exercises, and quizzes</p>
         
        <div class="lesson-progress-indicator">
          <div class="progress-step" data-step="learn">
            <i class="fa-solid fa-book"></i>
            <span>Learn</span>
          </div>
          <div class="progress-step" data-step="examples">
            <i class="fa-solid fa-code"></i>
            <span>Examples</span>
          </div>
          <div class="progress-step" data-step="practice">
            <i class="fa-solid fa-dumbbell"></i>
            <span>Practice</span>
          </div>
          <div class="progress-step" data-step="quiz">
            <i class="fa-solid fa-question-circle"></i>
            <span>Quiz</span>
          </div>
          <div class="progress-step" data-step="editor">
            <i class="fa-solid fa-laptop-code"></i>
            <span>Code</span>
          </div>
        </div>
      </div>

      <div class="lesson-tabs">
        <button class="tab-btn active" onclick="switchTab(event, 'learn', '${lessonType}')">
          <i class="fa-solid fa-book"></i> Learn
        </button>
        <button class="tab-btn" onclick="switchTab(event, 'examples', '${lessonType}')">
          <i class="fa-solid fa-code"></i> Examples
        </button>
        <button class="tab-btn" onclick="switchTab(event, 'practice', '${lessonType}')">
          <i class="fa-solid fa-dumbbell"></i> Practice
        </button>
        <button class="tab-btn" onclick="switchTab(event, 'quiz', '${lessonType}')">
          <i class="fa-solid fa-question-circle"></i> Quiz
        </button>
        <button class="tab-btn" onclick="switchTab(event, 'editor', '${lessonType}')">
          <i class="fa-solid fa-laptop-code"></i> Code Editor
        </button>
      </div>

      <div id="learn" class="tab-content active">
        
        <div class="interactive-lesson-content">
          ${generateInteractiveLearning(lesson.content.learn, lessonType)}
        </div>
      </div>

      <div id="examples" class="tab-content">
        ${generateInteractiveExamples(lesson.content.examples, lessonType)}
      </div>

      <div id="practice" class="tab-content">
        ${generatePracticeHTML(lesson.content.exercises)}
      </div>

      <div id="quiz" class="tab-content">
        ${generateQuizHTML(lesson.content.quiz, lessonType)}
      </div>

      <div id="editor" class="tab-content">
        ${generateEditorHTML(lessonType)}
      </div>
    </div>
  `

  document.body.appendChild(modal)

  // Close on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove()
    }
  })

  // Initialize quiz if needed
  if (lesson.content.quiz) {
    initializeQuiz(lessonType)
  }

  initializeCodeEditor()
  initializeInteractiveLearning(lessonType)
}

function generateInteractiveLearning(content, lessonType) {
  return `
    <div class="learn-tab">
      ${content}
      <div class="interactive-checkpoint">
        <h3 style="color: var(--cyan); margin-top: 2rem;">
          <i class="fa-solid fa-check-circle"></i> Ready to Continue?
        </h3>
        <p style="color: var(--muted); margin-bottom: 1rem;">
          Make sure you understand the concepts above before moving forward.
        </p>
        <button class="btn-checkpoint" onclick="markSectionComplete('learn', '${lessonType}')">
          <i class="fa-solid fa-arrow-right"></i> I understand, continue to Examples
        </button>
      </div>
    </div>
  `
}

function generateInteractiveExamples(examples, lessonType) {
  return (
    examples
      .map(
        (example, index) => `
    <div class="code-example interactive-example">
      <div class="code-example-header">
        <span class="code-example-title">
          <i class="fa-solid fa-lightbulb"></i> ${example.title}
        </span>
        <div class="example-actions">
          <button class="copy-btn" onclick="copyCode(this)">
            <i class="fa-solid fa-copy"></i> Copy
          </button>
          <button class="edit-btn" onclick="toggleEditMode(this, ${index}, '${lessonType}')">
            <i class="fa-solid fa-edit"></i> Try It
          </button>
        </div>
      </div>
      <div class="code-display">
        <pre><code id="code-${lessonType}-${index}">${escapeHtml(example.code)}</code></pre>
      </div>
      <div class="code-editor-inline" style="display: none;">
        <textarea class="inline-editor" id="editor-${lessonType}-${index}" spellcheck="false">${example.code}</textarea>
        <div class="inline-editor-actions">
          <button class="btn-inline primary" onclick="runInlineCode(${index}, '${lessonType}')">
            <i class="fa-solid fa-play"></i> Run Code
          </button>
          <button class="btn-inline secondary" onclick="resetInlineCode(${index}, '${lessonType}', \`${example.code.replace(/`/g, "\\`")}\`)">
            <i class="fa-solid fa-rotate-left"></i> Reset
          </button>
        </div>
        <div class="inline-output" id="output-${lessonType}-${index}"></div>
      </div>
    </div>
  `,
      )
      .join("") +
    `
    <div class="interactive-checkpoint">
      <h3 style="color: var(--cyan); margin-top: 2rem;">
        <i class="fa-solid fa-check-circle"></i> Examples Complete!
      </h3>
      <p style="color: var(--muted); margin-bottom: 1rem;">
        You've reviewed all the code examples. Ready to practice?
      </p>
      <button class="btn-checkpoint" onclick="markSectionComplete('examples', '${lessonType}')">
        <i class="fa-solid fa-arrow-right"></i> Continue to Practice Exercises
      </button>
    </div>
  `
  )
}

function generatePracticeHTML(exercises) {
  return `
    <div class="exercise-list">
      ${exercises
        .map(
          (exercise, index) => `
        <div class="exercise-item" id="exercise-${index}">
          <div class="exercise-header">
            <span class="exercise-number">Exercise ${exercise.number}</span>
            <span class="exercise-difficulty ${exercise.difficulty}">${exercise.difficulty.toUpperCase()}</span>
          </div>
          <h3 class="exercise-title">${exercise.title}</h3>
          <p class="exercise-description">${exercise.description}</p>
          <div class="exercise-hint" id="hint-${index}" style="display: none; margin-top: 1rem; padding: 1rem; background: rgba(255, 204, 0, 0.1); border: 1px solid rgba(255, 204, 0, 0.3); border-radius: 8px; color: var(--gold);">
            <strong><i class="fa-solid fa-lightbulb"></i> Hint:</strong> ${exercise.hint || "Try breaking down the problem into smaller steps. Review the examples in the Learn tab for guidance."}
          </div>
          <div class="exercise-actions">
            <button class="btn-exercise primary" onclick="openExerciseEditor(${index}, '${exercise.title.replace(/'/g, "\\'")}', '${exercise.description.replace(/'/g, "\\'")}')">
              <i class="fa-solid fa-code"></i> Start Exercise
            </button>
            <button class="btn-exercise secondary" onclick="showHint(${index})">
              <i class="fa-solid fa-lightbulb"></i> View Hint
            </button>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  `
}

function showHint(exerciseIndex) {
  const hintElement = document.getElementById(`hint-${exerciseIndex}`)
  if (hintElement) {
    if (hintElement.style.display === "none") {
      hintElement.style.display = "block"
      hintElement.style.animation = "fadeIn 0.3s ease"
    } else {
      hintElement.style.display = "none"
    }
  }
}

function openExerciseEditor(exerciseIndex, title, description) {
  const editorModal = document.createElement("div")
  editorModal.className = "lesson-modal"
  editorModal.innerHTML = `
    <div class="lesson-modal-content">
      <button class="modal-close" onclick="this.closest('.lesson-modal').remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <div class="modal-header">
        <h2><i class="fa-solid fa-code"></i> ${title}</h2>
        <p>${description}</p>
      </div>
      
      <div style="padding: 2rem;">
        <div class="code-editor-container">
          <div class="editor-panel">
            <div class="editor-header">
              <span class="editor-title">
                <i class="fa-solid fa-code"></i> Your Code
              </span>
              <div class="editor-actions">
                <button class="editor-btn" onclick="runExerciseCode()">
                  <i class="fa-solid fa-play"></i> Run
                </button>
                <button class="editor-btn" onclick="resetExerciseCode()">
                  <i class="fa-solid fa-rotate-right"></i> Reset
                </button>
              </div>
            </div>
            <textarea class="code-editor" id="exercise-code-editor" spellcheck="false"><!DOCTYPE html>
<html>
<head>
  <title>Exercise</title>
  <style>
    /* Add your CSS here */
  </style>
</head>
<body>
   Add your HTML here 
  
  <script>
    // Add your JavaScript here
  </script>
</body>
</html></textarea>
          </div>
          
          <div class="editor-panel">
            <div class="editor-header">
              <span class="editor-title">
                <i class="fa-solid fa-eye"></i> Preview
              </span>
            </div>
            <iframe class="preview-frame" id="exercise-preview"></iframe>
          </div>
        </div>
        
        <div style="margin-top: 1.5rem; text-align: center;">
          <button class="btn-exercise primary" onclick="submitExercise(${exerciseIndex})">
            <i class="fa-solid fa-check"></i> Submit Exercise
          </button>
        </div>
      </div>
    </div>
  `

  document.body.appendChild(editorModal)
}

function runExerciseCode() {
  const code = document.getElementById("exercise-code-editor").value
  const preview = document.getElementById("exercise-preview")
  const previewDoc = preview.contentDocument || preview.contentWindow.document
  previewDoc.open()
  previewDoc.write(code)
  previewDoc.close()
}

function resetExerciseCode() {
  document.getElementById("exercise-code-editor").value = `<!DOCTYPE html>
<html>
<head>
  <title>Exercise</title>
  <style>
    /* Add your CSS here */
  </style>
</head>
<body>
   Add your HTML here 
  
  <script>
    // Add your JavaScript here
  </script>
</body>
</html>`
  const preview = document.getElementById("exercise-preview")
  const previewDoc = preview.contentDocument || preview.contentWindow.document
  previewDoc.open()
  previewDoc.write("")
  previewDoc.close()
}

function submitExercise(exerciseIndex) {
  alert("Great job! Your exercise has been submitted. Keep practicing to improve your skills!")
  document.querySelector(".lesson-modal").remove()
  showHint(exerciseIndex)
}

function generateQuizHTML(questions, lessonType) {
  return `
    <div class="quiz-container" id="quiz-${lessonType}">
      <div class="quiz-progress">
        <span class="quiz-progress-text">Question <span id="current-question">1</span> of ${questions.length}</span>
        <span class="quiz-score">Score: <span id="quiz-score">0</span>/${questions.length}</span>
      </div>
      <div id="quiz-questions"></div>
      <div class="quiz-actions">
        <button class="btn-quiz secondary" onclick="resetQuiz('${lessonType}')" style="display: none;" id="reset-btn-${lessonType}">
          <i class="fa-solid fa-rotate-right"></i> Restart Quiz
        </button>
      </div>
    </div>
  `
}

function generateEditorHTML(lessonType) {
  const templates = {
    html: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>My Page</title>\n</head>\n<body>\n  <h1>Hello World!</h1>\n</body>\n</html>',
    css: "/* Write your CSS here */\nbody {\n  font-family: Arial, sans-serif;\n  background: #f0f0f0;\n  padding: 20px;\n}\n\nh1 {\n  color: #00bcd4;\n}",
    javascript:
      '// Write your JavaScript here\nconst greeting = "Hello, World!";\nconsole.log(greeting);\n\n// Try changing the DOM\ndocument.body.innerHTML = `<h1>${greeting}</h1>`;',
    php: '<?php\n// Write your PHP here\n$name = "Student";\necho "Hello, " . $name . "!";\n\n// This is a simulation - real PHP runs on server\n?>',
    mysql:
      "-- Write your SQL queries here\nSELECT * FROM users;\n\n-- Note: This is a simulation\n-- Real SQL runs on a database server",
    security:
      "// Password strength checker\nfunction checkPasswordStrength(password) {\n  let strength = 0;\n  if (password.length >= 8) strength++;\n  if (/[a-z]/.test(password)) strength++;\n  if (/[A-Z]/.test(password)) strength++;\n  if (/[0-9]/.test(password)) strength++;\n  if (/[^a-zA-Z0-9]/.test(password)) strength++;\n  return strength;\n}",
    cpp: `#include <iostream>
#include <string>

int main() {
    std::cout << "Hello from C++!" << std::endl;
    return 0;
}`,
    python: `print("Hello from Python!")

# Variables
name = "Student"
print(f"Welcome, {name}!")`,
    frontend: `import React from 'react';

function App() {
  return (
    <div>
      <h1>Hello from Frontend!</h1>
    </div>
  );
}

export default App;`,
    backend: `const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

app.listen(3000, () => console.log('Server ready.'));`,
    canva: `Design Elements:
- Title: Your Design Title
- Colors: #XXXXXX, #YYYYYY
- Fonts: Your Font Choice
- Elements: Use shapes, photos, icons.
- Layout: Arrange elements for balance and contrast.`,
    photoshop: `// Photoshop Script Simulation
// Actions:
// 1. Open image
// 2. Apply adjustments
// 3. Use selection tools
// 4. Save or export`,
  }

  return `
    <div class="code-editor-container">
      <div class="editor-panel">
        <div class="editor-header">
          <span class="editor-title"><i class="fa-solid fa-code"></i> Code Editor</span>
          <div class="editor-actions">
            <button class="editor-btn" onclick="runCode('${lessonType}')">
              <i class="fa-solid fa-play"></i> Run
            </button>
            <button class="editor-btn" onclick="clearEditor('${lessonType}')">
              <i class="fa-solid fa-trash"></i> Clear
            </button>
          </div>
        </div>
        <textarea class="code-editor" id="editor-${lessonType}" spellcheck="false">${templates[lessonType] || "// Start coding here..."}</textarea>
      </div>
      <div class="editor-panel">
        <div class="editor-header">
          <span class="editor-title"><i class="fa-solid fa-eye"></i> Output</span>
          <button class="editor-btn" onclick="clearOutput('${lessonType}')">
            <i class="fa-solid fa-eraser"></i> Clear
          </button>
        </div>
        <iframe class="preview-frame" id="preview-${lessonType}"></iframe>
      </div>
    </div>
  `
}

function toggleEditMode(button, index, lessonType) {
  const example = button.closest(".interactive-example")
  const display = example.querySelector(".code-display")
  const editor = example.querySelector(".code-editor-inline")

  if (editor.style.display === "none") {
    display.style.display = "none"
    editor.style.display = "block"
    button.innerHTML = '<i class="fa-solid fa-eye"></i> View'
  } else {
    display.style.display = "block"
    editor.style.display = "none"
    button.innerHTML = '<i class="fa-solid fa-edit"></i> Try It'
  }
}

function runInlineCode(index, lessonType) {
  const editor = document.getElementById(`editor-${lessonType}-${index}`)
  const output = document.getElementById(`output-${lessonType}-${index}`)
  const code = editor.value

  output.style.display = "block"

  if (lessonType === "html" || lessonType === "css" || lessonType === "javascript") {
    output.innerHTML = `
      <div style="background: white; padding: 15px; border-radius: 8px; margin-top: 10px;">
        <iframe style="width: 100%; min-height: 200px; border: none;" srcdoc="${escapeHtml(code)}"></iframe>
      </div>
    `
  } else {
    // For PHP, MySQL, and Security - show simulated output
    output.innerHTML = `
      <div style="background: rgba(0, 188, 212, 0.1); padding: 15px; border-radius: 8px; margin-top: 10px; border: 1px solid rgba(0, 188, 212, 0.3);">
        <p style="color: var(--cyan); margin-bottom: 10px;"><i class="fa-solid fa-check-circle"></i> Code executed successfully!</p>
        <pre style="color: var(--text); margin: 0;">${escapeHtml(code)}</pre>
      </div>
    `
  }
}

function resetInlineCode(index, lessonType, originalCode) {
  const editor = document.getElementById(`editor-${lessonType}-${index}`)
  const output = document.getElementById(`output-${lessonType}-${index}`)
  editor.value = originalCode
  output.style.display = "none"
}

function markSectionComplete(section, lessonType) {
  const progressSteps = document.querySelectorAll(".progress-step")
  const currentStep = document.querySelector(`.progress-step[data-step="${section}"]`)

  if (currentStep) {
    currentStep.classList.add("completed")
  }

  // Advance to next section
  const nextSections = {
    learn: "examples",
    examples: "practice",
    practice: "quiz",
    quiz: "editor",
  }

  const nextSection = nextSections[section]
  if (nextSection) {
    const nextTab = document.querySelector(`.tab-btn[onclick*="${nextSection}"]`)
    if (nextTab) {
      nextTab.click()

      // Show celebration animation
      showCelebration(`Great job! Moving to ${nextSection}...`)
    }
  }
}

function showCelebration(message) {
  const celebration = document.createElement("div")
  celebration.className = "celebration-toast"
  celebration.innerHTML = `
    <i class="fa-solid fa-star"></i>
    <span>${message}</span>
  `
  document.body.appendChild(celebration)

  setTimeout(() => {
    celebration.classList.add("show")
  }, 100)

  setTimeout(() => {
    celebration.classList.remove("show")
    setTimeout(() => celebration.remove(), 300)
  }, 3000)
}

function initializeInteractiveLearning(lessonType) {
  // Add keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    // Ctrl/Cmd + Enter to run code
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      const activeEditor = document.querySelector(".code-editor:focus, .inline-editor:focus")
      if (activeEditor) {
        e.preventDefault()
        const runButton = activeEditor.closest(".editor-panel, .code-editor-inline")?.querySelector('[onclick*="run"]')
        if (runButton) runButton.click()
      }
    }
  })
}

function switchTab(event, tabName, lessonType) {
  // Remove active class from all tabs and contents
  document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"))
  document.querySelectorAll(".tab-content").forEach((content) => content.classList.remove("active"))

  // Add active class to clicked tab and corresponding content
  event.target.closest(".tab-btn").classList.add("active")
  document.getElementById(tabName).classList.add("active")

  const progressStep = document.querySelector(`.progress-step[data-step="${tabName}"]`)
  if (progressStep) {
    document.querySelectorAll(".progress-step").forEach((step) => step.classList.remove("active"))
    progressStep.classList.add("active")
  }

  document.querySelector(".lesson-modal-content").scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

function copyCode(button) {
  const codeBlock = button.closest(".code-example").querySelector("code")
  const text = codeBlock.textContent

  navigator.clipboard.writeText(text).then(() => {
    const originalHTML = button.innerHTML
    button.innerHTML = '<i class="fa-solid fa-check"></i> Copied!'
    setTimeout(() => {
      button.innerHTML = originalHTML
    }, 2000)
  })
}

function escapeHtml(text) {
  const div = document.createElement("div")
  div.textContent = text
  return div.innerHTML
}

function initializeQuiz(lessonType) {
  const lesson = lessonData[lessonType]
  let currentQuestion = 0
  let score = 0
  let answered = false

  function showQuestion() {
    const question = lesson.content.quiz[currentQuestion]
    const questionsContainer = document.getElementById("quiz-questions")

    questionsContainer.innerHTML = `
      <div class="quiz-question">
        <div class="question-number">Question ${currentQuestion + 1}</div>
        <div class="question-text">${question.question}</div>
        <div class="quiz-options">
          ${question.options
            .map(
              (option, index) => `
            <div class="quiz-option" onclick="selectAnswer(${index}, ${question.correct}, '${lessonType}')">
              <span class="option-letter">${String.fromCharCode(65 + index)}</span>
              <span>${option}</span>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    `

    document.getElementById("current-question").textContent = currentQuestion + 1
    answered = false
  }

  window.selectAnswer = (selected, correct, type) => {
    if (answered) return
    answered = true

    const options = document.querySelectorAll(".quiz-option")
    options[selected].classList.add(selected === correct ? "correct" : "incorrect")
    options[correct].classList.add("correct")

    if (selected === correct) {
      score++
      document.getElementById("quiz-score").textContent = score
    }

    setTimeout(() => {
      currentQuestion++
      if (currentQuestion < lesson.content.quiz.length) {
        showQuestion()
      } else {
        showResults()
      }
    }, 1500)
  }

  function showResults() {
    const questionsContainer = document.getElementById("quiz-questions")
    const percentage = Math.round((score / lesson.content.quiz.length) * 100)

    questionsContainer.innerHTML = `
      <div class="quiz-question" style="text-align: center;">
        <h3 style="color: var(--cyan); margin-bottom: 1rem;">Quiz Complete!</h3>
        <div style="font-size: 3rem; color: var(--gold); margin: 2rem 0;">
          ${percentage}%
        </div>
        <p style="color: var(--text); font-size: 1.2rem; margin-bottom: 1rem;">
          You scored ${score} out of ${lesson.content.quiz.length}
        </p>
        <p style="color: var(--muted);">
          ${
            percentage >= 80
              ? "Excellent work! You have mastered this topic."
              : percentage >= 60
                ? "Good job! Review the material to improve further."
                : "Keep practicing! Review the lesson content and try again."
          }
        </p>
        <div class="completion-badge">
          <i class="fa-solid fa-trophy"></i> Lesson Progress Updated
        </div>
      </div>
    `

    document.getElementById(`reset-btn-${lessonType}`).style.display = "block"
    updateLessonProgress(lessonType, percentage)
  }

  window.resetQuiz = (type) => {
    currentQuestion = 0
    score = 0
    answered = false
    document.getElementById("quiz-score").textContent = "0"
    document.getElementById(`reset-btn-${type}`).style.display = "none"
    showQuestion()
  }

  showQuestion()
}

function updateLessonProgress(lessonType, percentage) {
  const lessonCard = document
    .querySelector(`.lesson-card [onclick="openLesson('${lessonType}')"]`)
    .closest(".lesson-card")
  const progressFill = lessonCard.querySelector(".progress-fill")
  const progressText = lessonCard.querySelector(".progress-text")
  const statusBadge = lessonCard.querySelector(".lesson-status")

  progressFill.style.width = percentage + "%"
  progressText.textContent = percentage + "%"

  if (percentage >= 100) {
    statusBadge.className = "lesson-status completed"
    statusBadge.innerHTML = '<i class="fa-solid fa-circle"></i> Completed'
    lessonCard.dataset.status = "completed"
  } else if (percentage > 0) {
    statusBadge.className = "lesson-status in-progress"
    statusBadge.innerHTML = '<i class="fa-solid fa-circle"></i> In Progress'
    lessonCard.dataset.status = "in-progress"
  }

  // Update overall progress
  updateOverallProgress()
}

function updateOverallProgress() {
  const allCards = document.querySelectorAll(".lesson-card")
  let totalProgress = 0
  let completedLessons = 0

  allCards.forEach((card) => {
    const progress = Number.parseInt(card.querySelector(".progress-text").textContent)
    totalProgress += progress
    if (progress >= 100) completedLessons++
  })

  const overallProgress = Math.round(totalProgress / allCards.length)

  document.querySelector(".progress-overview .progress-info h3").textContent = `${completedLessons}/${allCards.length}`
  document.querySelectorAll(".progress-overview .progress-info h3")[1].textContent = overallProgress + "%"
}

function initializeCodeEditor() {
  // Add tab key support for code editor
  document.querySelectorAll(".code-editor").forEach((editor) => {
    editor.addEventListener("keydown", function (e) {
      if (e.key === "Tab") {
        e.preventDefault()
        const start = this.selectionStart
        const end = this.selectionEnd
        this.value = this.value.substring(0, start) + "  " + this.value.substring(end)
        this.selectionStart = this.selectionEnd = start + 2
      }
    })
  })
}

function runCode(lessonType) {
  const editor = document.getElementById(`editor-${lessonType}`)
  const preview = document.getElementById(`preview-${lessonType}`)
  const code = editor.value

  if (lessonType === "html" || lessonType === "css" || lessonType === "javascript") {
    const doc = preview.contentDocument || preview.contentWindow.document
    doc.open()
    doc.write(code)
    doc.close()
  } else {
    // For PHP, MySQL, and Security - show simulated output
    const doc = preview.contentDocument || preview.contentWindow.document
    doc.open()
    doc.write(`
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; background: #1a1a1a; color: #00bcd4; }
            pre { background: #0d1117; padding: 15px; border-radius: 5px; border: 1px solid #00bcd4; }
          </style>
        </head>
        <body>
          <h3>Code Output (Simulated)</h3>
          <pre>${escapeHtml(code)}</pre>
          <p style="color: #ffcc00; margin-top: 20px;">
            <strong>Note:</strong> ${lessonType.toUpperCase()} code requires a server environment to execute.
            This is a code preview. Use a proper development environment for actual execution.
          </p>
        </body>
      </html>
    `)
    doc.close()
  }
}

function clearEditor(lessonType) {
  const editor = document.getElementById(`editor-${lessonType}`)
  editor.value = "// Start coding here..."
}

function clearOutput(lessonType) {
  const preview = document.getElementById(`preview-${lessonType}`)
  const doc = preview.contentDocument || preview.contentWindow.document
  doc.open()
  doc.write("")
  doc.close()
}

// Add particle effect on hover
document.addEventListener("DOMContentLoaded", () => {
  const lessonCards = document.querySelectorAll(".lesson-card")

  lessonCards.forEach((card) => {
    card.addEventListener("mouseenter", function (e) {
      if (this.dataset.status === "locked") return

      // Create sparkle effect
      const sparkle = document.createElement("div")
      sparkle.className = "sparkle"
      sparkle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: var(--cyan);
        border-radius: 50%;
        pointer-events: none;
        animation: sparkleFloat 1s ease-out forwards;
        left: ${e.offsetX}px;
        top: ${e.offsetY}px;
        box-shadow: 0 0 10px var(--cyan);
      `

      this.appendChild(sparkle)

      setTimeout(() => sparkle.remove(), 1000)
    })
  })

  // Add sparkle animation
  const sparkleStyle = document.createElement("style")
  sparkleStyle.textContent = `
    @keyframes sparkleFloat {
      0% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      100% {
        opacity: 0;
        transform: translateY(-30px) scale(0);
      }
    }
  `
  document.head.appendChild(sparkleStyle)
})

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

let chatOpen = false

function openAIChat() {
  // Check if user has active subscription
  if (!userSubscription.active) {
    showSubscriptionLock("Live Chat")
    return
  }

  if (chatOpen) return
  chatOpen = true

  const chatModal = document.createElement("div")
  chatModal.className = "chat-modal"
  chatModal.id = "ai-chat"
  chatModal.innerHTML = `
    <div class="chat-header">
      <h3><i class="fa-solid fa-robot"></i> AI Tutor</h3>
      <button class="chat-close" onclick="closeAIChat()">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
    <div class="chat-messages" id="chat-messages">
      <div class="chat-message ai">
        <div class="chat-avatar">
          <i class="fa-solid fa-robot"></i>
        </div>
        <div class="chat-bubble">
          Hello! I'm your AI tutor. Ask me anything about HTML, CSS, JavaScript, PHP, MySQL, or Cyber Security!
        </div>
      </div>
    </div>
    <div class="chat-input-area">
      <input type="text" class="chat-input" id="chat-input" placeholder="Ask a question..." onkeypress="if(event.key==='Enter') sendMessage()">
      <button class="chat-send-btn" onclick="sendMessage()">
        <i class="fa-solid fa-paper-plane"></i>
      </button>
    </div>
  `

  document.body.appendChild(chatModal)
}

function closeAIChat() {
  const chat = document.getElementById("ai-chat")
  if (chat) {
    chat.remove()
    chatOpen = false
  }
}

function sendMessage() {
  const input = document.getElementById("chat-input")
  const message = input.value.trim()

  if (!message) return

  const messagesContainer = document.getElementById("chat-messages")

  // Add user message
  const userMessage = document.createElement("div")
  userMessage.className = "chat-message user"
  userMessage.innerHTML = `
    <div class="chat-avatar">
      <i class="fa-solid fa-user"></i>
    </div>
    <div class="chat-bubble">${message}</div>
  `
  messagesContainer.appendChild(userMessage)

  input.value = ""

  // Simulate AI thinking
  setTimeout(() => {
    const aiResponse = generateAIResponse(message.toLowerCase())
    const aiMessage = document.createElement("div")
    aiMessage.className = "chat-message ai"
    aiMessage.innerHTML = `
      <div class="chat-avatar">
        <i class="fa-solid fa-robot"></i>
      </div>
      <div class="chat-bubble">${aiResponse}</div>
    `
    messagesContainer.appendChild(aiMessage)
    messagesContainer.scrollTop = messagesContainer.scrollHeight
  }, 500)

  messagesContainer.scrollTop = messagesContainer.scrollHeight
}

function generateAIResponse(message) {
  // HTML responses
  if (message.includes("html") || message.includes("tag") || message.includes("element")) {
    if (message.includes("what") || message.includes("explain")) {
      return "HTML (HyperText Markup Language) is the standard markup language for creating web pages. It uses tags like &lt;div&gt;, &lt;p&gt;, &lt;h1&gt; to structure content. Each tag has an opening and closing part, like &lt;p&gt;text&lt;/p&gt;."
    }
    if (message.includes("form")) {
      return "HTML forms use the &lt;form&gt; tag with input elements like &lt;input&gt;, &lt;textarea&gt;, and &lt;button&gt;. Use the 'action' attribute to specify where to send data and 'method' for GET or POST requests."
    }
    if (message.includes("semantic")) {
      return "Semantic HTML uses meaningful tags like &lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;article&gt;, &lt;section&gt;, and &lt;footer&gt;. These improve accessibility and SEO by clearly describing content structure."
    }
    return "HTML is the foundation of web development! It structures your content using tags. Start with basic tags like &lt;h1&gt;, &lt;p&gt;, &lt;div&gt;, and &lt;a&gt;. Check the Learn tab for detailed examples!"
  }

  // CSS responses
  if (message.includes("css") || message.includes("style") || message.includes("design")) {
    if (message.includes("flexbox") || message.includes("flex")) {
      return "Flexbox is a CSS layout model that makes it easy to align and distribute items. Use 'display: flex' on a container, then control items with properties like 'justify-content', 'align-items', and 'flex-direction'."
    }
    if (message.includes("grid")) {
      return "CSS Grid is perfect for 2D layouts. Use 'display: grid' and define columns with 'grid-template-columns'. For example: 'grid-template-columns: repeat(3, 1fr)' creates 3 equal columns."
    }
    if (message.includes("responsive")) {
      return "Make your site responsive using media queries! Example: @media (max-width: 768px) { /* mobile styles */ }. Also use relative units like %, em, rem, and vw/vh instead of fixed pixels."
    }
    if (message.includes("animation")) {
      return "CSS animations use @keyframes to define animation steps, then apply with 'animation' property. Example: @keyframes slide { from { left: 0; } to { left: 100px; } } then use 'animation: slide 2s ease'."
    }
    return "CSS brings your HTML to life with colors, layouts, and animations! Start with selectors, properties, and values. Use Flexbox for 1D layouts and Grid for 2D layouts. Check the Examples tab!"
  }

  // JavaScript responses
  if (
    message.includes("javascript") ||
    message.includes("js") ||
    message.includes("function") ||
    message.includes("variable")
  ) {
    if (message.includes("variable") || message.includes("let") || message.includes("const")) {
      return "JavaScript has 3 ways to declare variables: 'var' (old way), 'let' (block-scoped, can change), and 'const' (block-scoped, cannot change). Use 'const' by default, 'let' when you need to reassign."
    }
    if (message.includes("function")) {
      return "Functions are reusable code blocks. Declare with: function myFunc() { } or const myFunc = () => { }. Arrow functions (=>) are modern and concise. Functions can take parameters and return values."
    }
    if (message.includes("dom") || message.includes("element")) {
      return "The DOM (Document Object Model) lets JavaScript interact with HTML. Use document.querySelector() to select elements, .innerHTML to change content, .style to modify CSS, and .addEventListener() for events."
    }
    if (message.includes("array")) {
      return "Arrays store multiple values: const arr = [1, 2, 3]. Use methods like .push(), .pop(), .map(), .filter(), .forEach(). Access items with arr[0]. Arrays are zero-indexed!"
    }
    if (message.includes("async") || message.includes("promise")) {
      return "Async JavaScript handles operations that take time. Use Promises with .then() and .catch(), or async/await for cleaner code. Example: async function getData() { const data = await fetch(url); }"
    }
    return "JavaScript adds interactivity to websites! Learn variables (let, const), functions, DOM manipulation, and events. Practice with the code editor to see results instantly!"
  }

  // PHP responses
  if (message.includes("php") || message.includes("server") || message.includes("backend")) {
    if (message.includes("what") || message.includes("explain")) {
      return "PHP is a server-side scripting language for building dynamic websites. It runs on the server and generates HTML. PHP files end with .php and code goes between &lt;?php ?&gt; tags."
    }
    if (message.includes("variable")) {
      return "PHP variables start with $. Example: $name = 'John'; $age = 25; PHP is loosely typed, so you don't declare types. Use . (dot) to concatenate strings: $greeting = 'Hello ' . $name;"
    }
    if (message.includes("form") || message.includes("post") || message.includes("get")) {
      return "PHP handles forms with $_POST and $_GET superglobals. Use $_POST for sensitive data (passwords) and $_GET for URLs. Example: $name = $_POST['username']; Always validate and sanitize user input!"
    }
    if (message.includes("database") || message.includes("mysql")) {
      return "PHP connects to MySQL using mysqli or PDO. Example: $conn = new mysqli($host, $user, $pass, $db); Then use $conn->query() to run SQL. Always use prepared statements to prevent SQL injection!"
    }
    return "PHP powers the backend of websites! It handles forms, databases, sessions, and generates dynamic content. Start with variables ($var), functions, and form handling. Check the Learn tab!"
  }

  // MySQL responses
  if (
    message.includes("mysql") ||
    message.includes("database") ||
    message.includes("sql") ||
    message.includes("query")
  ) {
    if (message.includes("what") || message.includes("explain")) {
      return "MySQL is a relational database that stores data in tables with rows and columns. Use SQL (Structured Query Language) to interact with data: SELECT to read, INSERT to add, UPDATE to modify, DELETE to remove."
    }
    if (message.includes("select") || message.includes("query")) {
      return "SELECT retrieves data from tables. Basic syntax: SELECT column1, column2 FROM table WHERE condition; Use * for all columns. Add ORDER BY to sort, LIMIT to restrict results."
    }
    if (message.includes("join")) {
      return "JOINs combine data from multiple tables. INNER JOIN returns matching rows, LEFT JOIN returns all from left table, RIGHT JOIN all from right. Example: SELECT * FROM users INNER JOIN orders ON users.id = orders.user_id"
    }
    if (message.includes("create") || message.includes("table")) {
      return "Create tables with CREATE TABLE: CREATE TABLE users (id INT PRIMARY KEY AUTO_INCREMENT, name VARCHAR(100), email VARCHAR(100) UNIQUE); Define data types and constraints for each column."
    }
    if (message.includes("index")) {
      return "Indexes speed up queries by creating quick lookup tables. Add with: CREATE INDEX idx_name ON table(column); Use on columns frequently searched or joined. Primary keys are automatically indexed."
    }
    return "MySQL stores and manages your data! Learn SQL commands: SELECT, INSERT, UPDATE, DELETE. Understand tables, relationships, and JOINs. Practice with the code editor!"
  }

  // Cyber Security responses
  if (
    message.includes("security") ||
    message.includes("cyber") ||
    message.includes("hack") ||
    message.includes("safe")
  ) {
    if (message.includes("what") || message.includes("explain")) {
      return "Cyber Security protects systems, networks, and data from digital attacks. Key concepts: encryption, authentication, authorization, firewalls, and secure coding practices. Always validate input and use HTTPS!"
    }
    if (message.includes("password")) {
      return "Strong passwords: 12+ characters, mix uppercase, lowercase, numbers, symbols. Never reuse passwords! Use password managers. For websites, hash passwords with bcrypt or Argon2, never store plain text!"
    }
    if (message.includes("sql injection") || message.includes("injection")) {
      return "SQL Injection is when attackers insert malicious SQL code. Prevent it with prepared statements and parameterized queries. Never concatenate user input directly into SQL queries!"
    }
    if (message.includes("xss") || message.includes("cross-site")) {
      return "XSS (Cross-Site Scripting) injects malicious scripts into websites. Prevent by sanitizing user input, escaping output, and using Content Security Policy (CSP) headers. Never trust user input!"
    }
    if (message.includes("https") || message.includes("ssl") || message.includes("encryption")) {
      return "HTTPS encrypts data between browser and server using SSL/TLS certificates. Always use HTTPS for sensitive data! It prevents man-in-the-middle attacks and protects user privacy."
    }
    return "Cyber Security is crucial for protecting data and systems! Learn about encryption, secure authentication, common vulnerabilities (SQL injection, XSS), and best practices. Stay safe online!"
  }

  // General learning responses
  if (message.includes("help") || message.includes("stuck") || message.includes("difficult")) {
    return "Don't worry! Learning takes time. Break problems into smaller steps, review the examples, and practice regularly. Use the hints in exercises, and remember - every expert was once a beginner!"
  }

  if (message.includes("start") || message.includes("begin") || message.includes("first")) {
    return "Great! Start with HTML to structure content, then CSS for styling, and JavaScript for interactivity. Take it step by step, complete the exercises, and practice with the code editor. You've got this!"
  }

  if (message.includes("project") || message.includes("build") || message.includes("create")) {
    return "Building projects is the best way to learn! Check out the Practice Projects section for real-world applications. Start with simple projects and gradually increase complexity. Apply what you learn!"
  }

  if (message.includes("quiz") || message.includes("test")) {
    return "Quizzes help reinforce your learning! Complete the quiz in each lesson to test your knowledge. Don't worry about mistakes - they're part of learning. Review the material and try again!"
  }

  // Default response
  return "I'm here to help you learn HTML, CSS, JavaScript, PHP, MySQL, and Cyber Security! Ask me about specific topics, concepts, or if you need help with exercises. What would you like to know?"
}

function openProjects() {
  // Check if user has active subscription
  if (!userSubscription.active) {
    showSubscriptionLock("Practice Projects")
    return
  }

  const modal = document.createElement("div")
  modal.className = "projects-modal"
  modal.innerHTML = `
    <div class="projects-content">
      <button class="modal-close" onclick="this.closest('.projects-modal').remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <h2 style="color: var(--text); margin-bottom: 0.5rem;">
        <i class="fa-solid fa-file-code"></i> Practice Projects
      </h2>
      <p style="color: var(--muted); margin-bottom: 2rem;">
        Build real-world applications to solidify your skills
      </p>
      
      <div class="projects-grid">
        ${generateProjectCards()}
      </div>
    </div>
  `

  document.body.appendChild(modal)

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove()
  })
}

function generateProjectCards() {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "Create a responsive portfolio showcasing your skills, projects, and contact information.",
      difficulty: "easy",
      tech: ["HTML", "CSS"],
      icon: "fa-user",
      status: "Not Started",
    },
    {
      title: "Todo List App",
      description: "Build an interactive todo list with add, delete, and mark complete functionality.",
      difficulty: "easy",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "fa-list-check",
      status: "Not Started",
    },
    {
      title: "Weather Dashboard",
      description: "Fetch and display weather data from an API with search functionality.",
      difficulty: "medium",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "fa-cloud-sun",
      status: "Not Started",
    },
    {
      title: "Blog Platform",
      description: "Create a blog with posts, comments, and user authentication.",
      difficulty: "medium",
      tech: ["HTML", "CSS", "PHP", "MySQL"],
      icon: "fa-blog",
      status: "Not Started",
    },
    {
      title: "E-commerce Product Page",
      description: "Design a product page with image gallery, cart, and checkout.",
      difficulty: "medium",
      tech: ["HTML", "CSS", "JavaScript"],
      icon: "fa-shopping-cart",
      status: "Not Started",
    },
    {
      title: "User Authentication System",
      description: "Build a secure login/register system with password hashing.",
      difficulty: "hard",
      tech: ["PHP", "MySQL", "Security"],
      icon: "fa-lock",
      status: "Not Started",
    },
    {
      title: "Real-time Chat Application",
      description: "Create a chat app with real-time messaging and user presence.",
      difficulty: "hard",
      tech: ["HTML", "CSS", "JavaScript", "PHP"],
      icon: "fa-comments",
      status: "Not Started",
    },
    {
      title: "Content Management System",
      description: "Build a full CMS with admin panel, CRUD operations, and file uploads.",
      difficulty: "hard",
      tech: ["HTML", "CSS", "PHP", "MySQL"],
      icon: "fa-database",
      status: "Not Started",
    },
  ]

  return projects
    .map(
      (project, index) => `
    <div class="project-card">
      <div class="project-header">
        <div class="project-icon ${project.difficulty}-icon" style="background: linear-gradient(135deg, rgba(0, 188, 212, 0.2), rgba(0, 188, 212, 0.05)); color: var(--cyan);">
          <i class="fa-solid ${project.icon}"></i>
        </div>
        <span class="project-difficulty ${project.difficulty}">${project.difficulty.toUpperCase()}</span>
      </div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tech">
        ${project.tech.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
      </div>
      <div class="project-status">
        <i class="fa-solid fa-circle-info"></i>
        <span>${project.status}</span>
      </div>
      <div class="project-actions">
        <button class="btn-project primary" onclick="startProject('${project.title.replace(/'/g, "\\'").replace(/"/g, '\\"')}', '${project.description.replace(/'/g, "\\'").replace(/"/g, '\\"')}')">
          <i class="fa-solid fa-play"></i> Start Project
        </button>
      </div>
    </div>
  `,
    )
    .join("")
}

function startProject(title, description) {
  const projectModal = document.createElement("div")
  projectModal.className = "lesson-modal"
  projectModal.innerHTML = `
    <div class="lesson-modal-content">
      <button class="modal-close" onclick="this.closest('.lesson-modal').remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <div class="modal-header">
        <h2><i class="fa-solid fa-file-code"></i> ${title}</h2>
        <p>${description}</p>
      </div>
      
      <div style="padding: 2rem;">
        <div class="code-editor-container">
          <div class="editor-panel">
            <div class="editor-header">
              <span class="editor-title">
                <i class="fa-solid fa-code"></i> Your Code
              </span>
              <div class="editor-actions">
                <button class="editor-btn" onclick="runProjectCode()">
                  <i class="fa-solid fa-play"></i> Run
                </button>
                <button class="editor-btn" onclick="saveProject()">
                  <i class="fa-solid fa-save"></i> Save
                </button>
              </div>
            </div>
            <textarea class="code-editor" id="project-code-editor" spellcheck="false"><!DOCTYPE html>
<html>
<head>
  <title>${title}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      background: #f5f5f5;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>${title}</h1>
    <p>Start building your project here!</p>
  </div>
  
  <script>
    // Add your JavaScript here
  </script>
</body>
</html></textarea>
          </div>
          
          <div class="editor-panel">
            <div class="editor-header">
              <span class="editor-title">
                <i class="fa-solid fa-eye"></i> Preview
              </span>
            </div>
            <iframe class="preview-frame" id="project-preview"></iframe>
          </div>
        </div>
      </div>
    </div>
  `

  document.body.appendChild(projectModal)

  // Auto-run the initial code
  setTimeout(() => runProjectCode(), 100)
}

function runProjectCode() {
  const code = document.getElementById("project-code-editor").value
  const preview = document.getElementById("project-preview")
  const previewDoc = preview.contentDocument || preview.contentWindow.document
  previewDoc.open()
  previewDoc.write(code)
  previewDoc.close()
}

function saveProject() {
  alert("Project saved successfully! Your progress has been saved.")
}

function openCertificates() {
  // Check if user has active subscription
  if (!userSubscription.active) {
    showSubscriptionLock("Certificates")
    return
  }

  const modal = document.createElement("div")
  modal.className = "projects-modal"
  modal.innerHTML = `
    <div class="projects-content">
      <button class="modal-close" onclick="this.closest('.projects-modal').remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <h2 style="color: var(--text); margin-bottom: 0.5rem;">
        <i class="fa-solid fa-certificate"></i> Your Certificates
      </h2>
      <p style="color: var(--muted); margin-bottom: 2rem;">
        Complete lessons and quizzes to earn certificates
      </p>
      
      <div class="certificates-grid">
        ${generateCertificateCards()}
      </div>
    </div>
  `

  document.body.appendChild(modal)

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove()
  })
}

function generateCertificateCards() {
  const certificates = [
    { name: "HTML Fundamentals", progress: 0, required: 100 },
    { name: "CSS Styling", progress: 0, required: 100 },
    { name: "JavaScript Programming", progress: 0, required: 100 },
    { name: "PHP Backend Development", progress: 0, required: 100 },
    { name: "MySQL Database", progress: 0, required: 100 },
    { name: "Cyber Security", progress: 0, required: 100 },
  ]

  return certificates
    .map((cert) => {
      const isEarned = cert.progress >= cert.required
      const date = isEarned ? new Date().toLocaleDateString() : "Not earned yet"

      return `
      <div class="certificate-card ${isEarned ? "" : "certificate-locked"}">
        <div class="certificate-icon">
          <i class="fa-solid ${isEarned ? "fa-award" : "fa-lock"}"></i>
        </div>
        <h3 class="certificate-title">${cert.name}</h3>
        <p class="certificate-date">${date}</p>
        <div class="certificate-progress">
          <p class="certificate-progress-text">${cert.progress}% Complete</p>
          <p style="color: var(--muted); font-size: 0.85rem; margin-top: 0.5rem;">
            ${isEarned ? "Congratulations!" : "Complete the lesson and quiz to earn this certificate"}
          </p>
        </div>
        <button class="btn-download" ${isEarned ? "" : "disabled"} onclick="${isEarned ? "downloadCertificate('" + cert.name + "')" : ""}">
          <i class="fa-solid ${isEarned ? "fa-download" : "fa-lock"}"></i>
          ${isEarned ? "Download" : "Locked"}
        </button>
      </div>
    `
    })
    .join("")
}

function downloadCertificate(certName) {
  alert(
    `Downloading certificate for ${certName}...\n\nYour certificate will be generated as a PDF with your name, completion date, and course details.`,
  )
}

function openAchievements() {
  const modal = document.createElement("div")
  modal.className = "projects-modal"
  modal.innerHTML = `
    <div class="projects-content">
      <button class="modal-close" onclick="this.closest('.projects-modal').remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <h2 style="color: var(--text); margin-bottom: 0.5rem;">
        <i class="fa-solid fa-trophy"></i> Achievements
      </h2>
      <p style="color: var(--muted); margin-bottom: 2rem;">
        Unlock badges by completing lessons, quizzes, and projects
      </p>
      
      <div class="achievements-grid">
        ${generateAchievementCards()}
      </div>
    </div>
  `

  document.body.appendChild(modal)

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove()
  })
}

function generateAchievementCards() {
  const achievements = [
    {
      name: "First Steps",
      description: "Complete your first lesson",
      icon: "fa-shoe-prints",
      unlocked: false,
    },
    {
      name: "Quick Learner",
      description: "Complete 3 lessons",
      icon: "fa-bolt",
      unlocked: false,
    },
    {
      name: "Knowledge Seeker",
      description: "Complete all 12 lessons",
      icon: "fa-book-open",
      unlocked: false,
    },
    {
      name: "Quiz Master",
      description: "Score 100% on any quiz",
      icon: "fa-star",
      unlocked: false,
    },
    {
      name: "Perfect Score",
      description: "Score 100% on all quizzes",
      icon: "fa-crown",
      unlocked: false,
    },
    {
      name: "Code Warrior",
      description: "Complete 5 practice exercises",
      icon: "fa-code",
      unlocked: false,
    },
    {
      name: "Project Builder",
      description: "Complete your first project",
      icon: "fa-hammer",
      unlocked: false,
    },
    {
      name: "Full Stack",
      description: "Complete all projects",
      icon: "fa-layer-group",
      unlocked: false,
    },
    {
      name: "Night Owl",
      description: "Study after 10 PM",
      icon: "fa-moon",
      unlocked: false,
    },
    {
      name: "Early Bird",
      description: "Study before 6 AM",
      icon: "fa-sun",
      unlocked: false,
    },
    {
      name: "Streak Master",
      description: "Maintain a 7-day streak",
      icon: "fa-fire",
      unlocked: false,
    },
    {
      name: "Certified Pro",
      description: "Earn all certificates",
      icon: "fa-certificate",
      unlocked: false,
    },
  ]

  return achievements
    .map(
      (achievement) => `
    <div class="achievement-card ${achievement.unlocked ? "unlocked" : "locked"}">
      <div class="achievement-badge">
        <i class="fa-solid ${achievement.icon}"></i>
      </div>
      <h3 class="achievement-name">${achievement.name}</h3>
      <p class="achievement-description">${achievement.description}</p>
      ${achievement.unlocked ? '<p class="achievement-unlocked-date">Unlocked: ' + new Date().toLocaleDateString() + "</p>" : ""}
    </div>
  `,
    )
    .join("")
}

function openProfile() {
  const modal = document.createElement("div")
  modal.className = "projects-modal"
  modal.innerHTML = `
    <div class="projects-content" style="max-width: 600px;">
      <button class="modal-close" onclick="this.closest('.projects-modal').remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <div style="text-align: center; margin-bottom: 2rem;">
        <div style="width: 100px; height: 100px; border-radius: 50%; background: linear-gradient(135deg, var(--cyan), var(--gold)); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: white;">
          <i class="fa-solid fa-user"></i>
        </div>
        <h2 style="color: var(--text); margin-bottom: 0.5rem;">Student Profile</h2>
        <p style="color: var(--muted);">student@infotechpro.com</p>
      </div>

      <div style="background: rgba(0, 188, 212, 0.1); border: 1px solid var(--cyan); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">
        <h3 style="color: var(--text); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-chart-line"></i> Learning Progress
        </h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; text-align: center;">
          <div>
            <p style="color: var(--cyan); font-size: 1.5rem; font-weight: bold; margin: 0;">0/12</p>
            <p style="color: var(--muted); font-size: 0.85rem; margin: 0.25rem 0 0 0;">Lessons</p>
          </div>
          <div>
            <p style="color: var(--gold); font-size: 1.5rem; font-weight: bold; margin: 0;">0</p>
            <p style="color: var(--muted); font-size: 0.85rem; margin: 0.25rem 0 0 0;">Achievements</p>
          </div>
          <div>
            <p style="color: var(--cyan); font-size: 1.5rem; font-weight: bold; margin: 0;">0</p>
            <p style="color: var(--muted); font-size: 0.85rem; margin: 0.25rem 0 0 0;">Certificates</p>
          </div>
        </div>
      </div>

      <div style="background: rgba(255, 204, 0, 0.1); border: 1px solid var(--gold); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
        <h3 style="color: var(--text); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-crown"></i> Subscription Plans
        </h3>
        <p style="color: var(--muted); margin-bottom: 1.5rem; font-size: 0.9rem;">
          Unlock premium features and get full access to all lessons
        </p>
        
        <div style="display: grid; gap: 1rem;">
          <div class="subscription-plan" onclick="openPayment('1 Week', 100)" style="cursor: pointer;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <p style="color: var(--text); font-weight: 600; font-size: 1.1rem;">1 Week Access</p>
                <p style="color: var(--muted); font-size: 0.85rem;">Perfect for quick learning</p>
              </div>
              <div style="text-align: right;">
                <p style="color: var(--cyan); font-size: 1.5rem; font-weight: bold;">₱100</p>
              </div>
            </div>
          </div>

          <div class="subscription-plan" onclick="openPayment('1 Month', 350)" style="border: 2px solid var(--cyan); cursor: pointer;">
            <div style="position: absolute; top: -12px; right: 20px; background: var(--cyan); color: var(--bg); padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: bold;">
              POPULAR
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <p style="color: var(--text); font-weight: 600; font-size: 1.1rem;">1 Month Access</p>
                <p style="color: var(--muted); font-size: 0.85rem;">Best value for learners</p>
              </div>
              <div style="text-align: right;">
                <p style="color: var(--cyan); font-size: 1.5rem; font-weight: bold;">₱350</p>
                <p style="color: var(--muted); font-size: 0.75rem; text-decoration: line-through;">₱400</p>
              </div>
            </div>
          </div>

          <div class="subscription-plan" onclick="openPayment('1 Year', 1150)" style="cursor: pointer;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <p style="color: var(--text); font-weight: 600; font-size: 1.1rem;">1 Year Access</p>
                <p style="color: var(--muted); font-size: 0.85rem;">Maximum savings & benefits</p>
              </div>
              <div style="text-align: right;">
                <p style="color: var(--gold); font-size: 1.5rem; font-weight: bold;">₱1,150</p>
                <p style="color: var(--muted); font-size: 0.75rem; text-decoration: line-through;">₱1,400</p>
              </div>
            </div>
          </div>
        </div>

        <div style="margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255, 255, 255, 0.1);">
          <label style="display: flex; align-items: center; gap: 0.5rem; color: var(--text); cursor: pointer; margin-bottom: 1rem;">
            <input type="checkbox" id="deped-account" style="width: 18px; height: 18px; cursor: pointer;">
            <span>I have a DepEd Account (Get 10% discount)</span>
          </label>
          <p style="color: var(--muted); font-size: 0.85rem; text-align: center;">
            Click on any plan above to proceed to payment
          </p>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <button class="btn secondary" style="width: 100%;" onclick="alert('Settings feature coming soon!')">
          <i class="fa-solid fa-gear"></i> Settings
        </button>
        <button class="btn secondary" style="width: 100%;" onclick="if(confirm('Are you sure you want to logout?')) window.location.href='index.html'">
          <i class="fa-solid fa-sign-out-alt"></i> Logout
        </button>
      </div>
    </div>
  `

  document.body.appendChild(modal)

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.remove()
  })
}

function openPayment(plan, price) {
  const depedCheckbox = document.getElementById("deped-account")
  const hasDepedDiscount = depedCheckbox && depedCheckbox.checked
  const finalPrice = hasDepedDiscount ? Math.round(price * 0.9) : price
  const discount = hasDepedDiscount ? price - finalPrice : 0

  const paymentModal = document.createElement("div")
  paymentModal.className = "projects-modal"
  paymentModal.style.zIndex = "10001"
  paymentModal.innerHTML = `
    <div class="projects-content" style="max-width: 500px;">
      <button class="modal-close" onclick="this.closest('.projects-modal').remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <div style="text-align: center; margin-bottom: 2rem;">
        <div style="width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, var(--cyan), var(--gold)); margin: 0 auto 1rem; display: flex; align-items: center; justify-content: center; font-size: 2rem; color: white;">
          <i class="fa-solid fa-credit-card"></i>
        </div>
        <h2 style="color: var(--text); margin-bottom: 0.5rem;">Payment via GCash</h2>
        <p style="color: var(--muted);">Scan QR code to complete payment</p>
      </div>

      <div style="background: rgba(0, 188, 212, 0.1); border: 1px solid var(--cyan); border-radius: 12px; padding: 1.5rem; margin-bottom: 1.5rem;">
        <h3 style="color: var(--text); margin-bottom: 1rem;">Order Summary</h3>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="color: var(--muted);">Plan:</span>
          <span style="color: var(--text); font-weight: 600;">${plan} Access</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="color: var(--muted);">Original Price:</span>
          <span style="color: var(--text);">₱${price}</span>
        </div>
        ${
          hasDepedDiscount
            ? `
        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="color: var(--gold);">DepEd Discount (10%):</span>
          <span style="color: var(--gold);">-₱${discount}</span>
        </div>
        `
            : ""
        }
        <div style="border-top: 1px solid rgba(255, 255, 255, 0.1); margin: 1rem 0; padding-top: 1rem; display: flex; justify-content: space-between;">
          <span style="color: var(--text); font-weight: 600; font-size: 1.2rem;">Total:</span>
          <span style="color: var(--cyan); font-weight: bold; font-size: 1.5rem;">₱${finalPrice}</span>
        </div>
      </div>

      <div style="background: white; padding: 2rem; border-radius: 12px; text-align: center; margin-bottom: 1.5rem;">
        <img src="/gcash-qr-code-for-payment.jpg" alt="GCash QR Code" style="width: 250px; height: 250px; margin: 0 auto;">
        <p style="color: #333; margin-top: 1rem; font-weight: 600;">Scan with GCash App</p>
        <p style="color: #666; font-size: 0.85rem;">GCash Number: 0917-123-4567</p>
      </div>

      <div style="background: rgba(255, 204, 0, 0.1); border: 1px solid var(--gold); border-radius: 8px; padding: 1rem; margin-bottom: 1.5rem;">
        <p style="color: var(--text); font-size: 0.9rem; margin-bottom: 0.5rem;">
          <i class="fa-solid fa-info-circle"></i> <strong>Payment Instructions:</strong>
        </p>
        <ol style="color: var(--muted); font-size: 0.85rem; margin-left: 1.5rem; line-height: 1.6;">
          <li>Open your GCash app</li>
          <li>Scan the QR code above</li>
          <li>Confirm the amount: ₱${finalPrice}</li>
          <li>Complete the payment</li>
          <li>Take a screenshot of the receipt</li>
        </ol>
      </div>

      <button class="btn-action" style="width: 100%; background: linear-gradient(135deg, var(--cyan), var(--gold)); border: none; padding: 1rem; font-weight: bold;" onclick="confirmPayment('${plan}', ${finalPrice})">
        <i class="fa-solid fa-check"></i> I've Completed Payment
      </button>
    </div>
  `

  document.body.appendChild(paymentModal)

  paymentModal.addEventListener("click", (e) => {
    if (e.target === paymentModal) paymentModal.remove()
  })
}

function confirmPayment(plan, amount) {
  // Activate subscription
  userSubscription.active = true
  userSubscription.plan = plan
  const expiryDate = new Date()
  if (plan.includes("Week")) {
    expiryDate.setDate(expiryDate.getDate() + 7)
  } else if (plan.includes("Month")) {
    expiryDate.setMonth(expiryDate.getMonth() + 1)
  } else if (plan.includes("Year")) {
    expiryDate.setFullYear(expiryDate.getFullYear() + 1)
  }
  userSubscription.expiryDate = expiryDate

  alert(
    `Thank you for your payment!\n\nPlan: ${plan} Access\nAmount: ₱${amount}\n\nYour subscription has been activated! You now have full access to all premium features.\n\nExpiry Date: ${expiryDate.toLocaleDateString()}`,
  )

  // Close all modals
  document.querySelectorAll(".projects-modal").forEach((modal) => modal.remove())
}

function showSubscriptionLock(featureName) {
  const lockModal = document.createElement("div")
  lockModal.className = "projects-modal"
  lockModal.innerHTML = `
    <div class="projects-content" style="max-width: 500px; text-align: center;">
      <button class="modal-close" onclick="this.closest('.projects-modal').remove()">
        <i class="fa-solid fa-xmark"></i>
      </button>
      
      <div style="width: 100px; height: 100px; border-radius: 50%; background: rgba(255, 204, 0, 0.2); margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center; font-size: 3rem; color: var(--gold);">
        <i class="fa-solid fa-lock"></i>
      </div>
      
      <h2 style="color: var(--text); margin-bottom: 1rem;">
        ${featureName} is Locked
      </h2>
      <p style="color: var(--muted); margin-bottom: 2rem; line-height: 1.6;">
        Subscribe to unlock ${featureName} and get full access to all premium features including AI tutoring, practice projects, and certificates.
      </p>

      <div style="background: rgba(0, 188, 212, 0.1); border: 1px solid var(--cyan); border-radius: 12px; padding: 1.5rem; margin-bottom: 2rem;">
        <h3 style="color: var(--text); margin-bottom: 1rem;">
          <i class="fa-solid fa-crown"></i> Unlock with Subscription
        </h3>
        <div style="display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <p style="color: var(--cyan); font-size: 2rem; font-weight: bold;">₱350</p>
            <p style="color: var(--muted); font-size: 0.85rem;">per month</p>
          </div>
        </div>
        <ul style="text-align: left; color: var(--muted); font-size: 0.9rem; line-height: 2;">
          <li><i class="fa-solid fa-check" style="color: var(--cyan);"></i> AI Tutor Chat Support</li>
          <li><i class="fa-solid fa-check" style="color: var(--cyan);"></i> 8 Practice Projects</li>
          <li><i class="fa-solid fa-check" style="color: var(--cyan);"></i> Course Certificates</li>
          <li><i class="fa-solid fa-check" style="color: var(--cyan);"></i> Unlimited Code Editor</li>
          <li><i class="fa-solid fa-check" style="color: var(--cyan);"></i> Progress Tracking</li>
        </ul>
      </div>

      <button class="btn-action" style="width: 100%; background: linear-gradient(135deg, var(--cyan), var(--gold)); border: none; padding: 1rem; font-weight: bold; margin-bottom: 1rem;" onclick="openProfile(); this.closest('.projects-modal').remove()">
        <i class="fa-solid fa-crown"></i> Subscribe Now
      </button>
      
      <button class="btn secondary" style="width: 100%;" onclick="this.closest('.projects-modal').remove()">
        Maybe Later
      </button>
    </div>
  `

  document.body.appendChild(lockModal)

  lockModal.addEventListener("click", (e) => {
    if (e.target === lockModal) lockModal.remove()
  })
}
