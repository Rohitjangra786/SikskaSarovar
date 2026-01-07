
import React from 'react';
import { 
  Code, 
  Database, 
  Globe, 
  Layers, 
  Layout, 
  Terminal, 
  Cpu,
  Monitor
} from 'lucide-react';
import { Course } from './types';

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
        id: 'html-intro',
        title: 'HTML Introduction',
        content: 'HTML stands for Hyper Text Markup Language. It is the standard markup language for creating Web pages. HTML describes the structure of a Web page and consists of a series of elements that tell the browser how to display the content.',
        codeSnippet: '<!DOCTYPE html>\n<html>\n<head>\n<title>Page Title</title>\n</head>\n<body>\n\n<h1>My First Heading</h1>\n<p>My first paragraph.</p>\n\n</body>\n</html>',
        isCompleted: true
      },
      {
        id: 'html-elements',
        title: 'HTML Elements',
        content: 'An HTML element is defined by a start tag, some content, and an end tag. Everything from the start tag to the end tag is the element. Elements can be nested (elements can contain elements).',
        codeSnippet: '<h1>My First Heading</h1>\n<p>My first paragraph.</p>',
        isCompleted: false
      },
      {
        id: 'html-attributes',
        title: 'HTML Attributes',
        content: 'All HTML elements can have attributes. Attributes provide additional information about elements and are always specified in the start tag. They usually come in name/value pairs like: name="value".',
        codeSnippet: '<a href="https://www.sikshasarovar.com">Visit SikshaSarovar</a>',
        isCompleted: false
      }
    ]
  },
  {
    id: 'css-tutorial',
    title: 'CSS Tutorial',
    category: 'Web Development',
    icon: 'globe',
    level: 'Intermediate',
    progress: 20,
    lessons: [
      {
        id: 'css-intro',
        title: 'CSS Introduction',
        content: 'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed on screen, paper, or in other media. It saves a lot of work by controlling the layout of multiple web pages all at once.',
        codeSnippet: 'body {\n  background-color: #f0fdf4;\n}\n\nh1 {\n  color: #059669;\n  text-align: center;\n}\n\np {\n  font-family: verdana;\n  font-size: 20px;\n}',
        isCompleted: false
      },
      {
        id: 'css-selectors',
        title: 'CSS Selectors',
        content: 'CSS selectors are used to "find" (or select) the HTML elements you want to style. We can divide CSS selectors into five categories: Simple selectors, Combinator selectors, Pseudo-class selectors, Pseudo-elements selectors, and Attribute selectors.',
        codeSnippet: '/* Selects all p elements */\np {\n  text-align: center;\n  color: red;\n}\n\n/* Selects element with id="para1" */\n#para1 {\n  text-align: center;\n  color: blue;\n}',
        isCompleted: false
      }
    ]
  },
  {
    id: 'js-tutorial',
    title: 'JavaScript Tutorial',
    category: 'Programming',
    icon: 'code',
    level: 'Intermediate',
    progress: 10,
    lessons: [
      {
        id: 'js-intro',
        title: 'JS Introduction',
        content: 'JavaScript is the world\'s most popular programming language. It is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.',
        codeSnippet: 'document.getElementById("demo").innerHTML = "Hello JavaScript!";',
        isCompleted: false
      },
      {
        id: 'js-output',
        title: 'JS Output',
        content: 'JavaScript can "display" data in different ways: Writing into an HTML element, using innerHTML. Writing into the HTML output using document.write(). Writing into an alert box, using window.alert(). Writing into the browser console, using console.log().',
        codeSnippet: 'console.log("Hello World!");\nalert("Welcome to Siksha!");',
        isCompleted: false
      }
    ]
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  layout: <Layout size={18} />,
  globe: <Globe size={18} />,
  layers: <Layers size={18} />,
  terminal: <Terminal size={18} />,
  code: <Code size={18} />,
  database: <Database size={18} />,
  cpu: <Cpu size={18} />,
  monitor: <Monitor size={18} />
};
