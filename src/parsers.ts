import packageJson from '../package.json';

export interface IParser {
  id: string;
  name: string;
  wasmUrl: string;
  initCode: string;
  version: string;
  homepage: string;
}

export const parsers: IParser[] = [
  {
    id: 'tree-sitter-bash',
    name: 'Bash',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-bash.wasm`,
    version: packageJson.dependencies['tree-sitter-bash'],
    initCode: [
      `#!/bin/bash`,
      `: '`,
      `The following script calculates`,
      `the square value of the number, 5.`,
      `'`,
      `((area=5*5))`,
      `echo $area`,
    ].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-bash',
  },
  {
    id: 'tree-sitter-c',
    name: 'C',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-c.wasm`,
    version: packageJson.dependencies['tree-sitter-c'],
    initCode: [
      `#include <stdio.h>`,
      `int main() {`,
      `    int number;`,
      ``,
      `    printf("Enter an integer: ");`,
      ``,
      `    // reads and stores input`,
      `    scanf("%d", &number);`,
      ``,
      `    // displays output`,
      `    printf("You entered: %d", number);`,
      ``,
      `    return 0;`,
      `}`,
    ].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-c',
  },
  {
    id: 'tree-sitter-c-sharp',
    name: 'C#',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-c_sharp.wasm`,
    version: packageJson.dependencies['tree-sitter-c-sharp'],
    initCode: [
      `using System;`,
      ``,
      `namespace HelloWorld`,
      `{`,
      `  class Program`,
      `  {`,
      `    static void Main(string[] args)`,
      `    {`,
      `      Console.WriteLine("Hello World!");`,
      `    }`,
      `  }`,
      `}`,
    ].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-c-sharp',
  },
  {
    id: 'tree-sitter-cpp',
    name: 'C++',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-cpp.wasm`,
    version: packageJson.dependencies['tree-sitter-cpp'],
    initCode: [
      `// Your First C++ Program`,
      ``,
      `#include <iostream>`,
      `int main() {`,
      `    std::cout << "Hello World!";`,
      `    return 0;`,
      `}`,
    ].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-cpp',
  },
  {
    id: 'tree-sitter-css',
    name: 'CSS',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-css.wasm`,
    version: packageJson.dependencies['tree-sitter-css'],
    initCode: [
      `p.center {`,
      `  text-align: center;`,
      `  color: red;`,
      `}`,
    ].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-css',
  },
  {
    id: 'tree-sitter-go',
    name: 'Go',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-go.wasm`,
    version: packageJson.dependencies['tree-sitter-go'],
    initCode: [
      `package main`,
      ``,
      `import "fmt"`,
      ``,
      `func main() {`,
      `    fmt.Println("hello world")`,
      `}`,
    ].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-go',
  },
  {
    id: 'tree-sitter-html',
    name: 'html',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-html.wasm`,
    version: packageJson.dependencies['tree-sitter-html'],
    initCode: [
      `<!DOCTYPE html>`,
      `<html>`,
      `    <head>`,
      `        <title>My Webpage</title>`,
      `    </head>`,
      `    <body>`,
      `        <ul id="navigation">`,
      `            <li><a href="#">Link</a></li>`,
      `        </ul>`,
      `    </body>`,
      `</html>`,
    ].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-html',
  },
  {
    id: 'tree-sitter-java',
    name: 'java',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-java.wasm`,
    version: packageJson.dependencies['tree-sitter-java'],
    initCode: [
      `class Main {`,
      `  public static void main(String[] args) {`,
      `    int first = 10;`,
      `    int second = 20;`,
      `    // add two numbers`,
      `    int sum = first + second;`,
      `    System.out.println(first + " + " + second + " = "  + sum);`,
      `  }`,
      `}`,
    ].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-java',
  },
  {
    id: 'tree-sitter-javascript',
    name: 'JavaScript',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-javascript.wasm`,
    version: packageJson.dependencies['tree-sitter-javascript'],
    initCode: [
      "console.log('Hello World');",
      '',
      'const num1 = 5;',
      'const num2 = 3;',
      '',
      'function sum(a, b) {',
      '  return a + b',
      '}',
      '',
      'sum(num1, num2);',
    ].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-javascript',
  },
  {
    id: 'tree-sitter-json',
    name: 'json',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-json.wasm`,
    version: packageJson.dependencies['tree-sitter-json'],
    initCode: [
      `{`,
      `  "name":"John",`,
      `  "age":30,`,
      `  "car":null`,
      `}`,
    ].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-json',
  },
  {
    id: 'tree-sitter-julia',
    name: 'julia',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-julia.wasm`,
    version: packageJson.dependencies['tree-sitter-julia'],
    initCode: [
      `function mandelbrot(a)`,
      `    z = 0`,
      `    for i=1:50`,
      `        z = z^2 + a`,
      `    end`,
      `    return z`,
      `end`,
    ].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-julia',
  },
  {
    id: 'tree-sitter-twig',
    name: 'Twig',
    wasmUrl: 'https://unpkg.com/tree-sitter-twig@0.4.0/tree-sitter-twig.wasm',
    version: '0.4.0',
    initCode: [
      '<ul id="navigation">',
      '{% for item in navigation %}',
      '    <li><a href="{{ item.href }}">{{ item.caption }}</a></li>',
      '{% endfor %}',
      '</ul>',
      '',
      '<h1>My Webpage</h1>',
      '{{ a_variable }}',
    ].join('\n'),
    homepage: 'https://github.com/kaermorchen/tree-sitter-twig',
  },
  {
    id: 'tree-sitter-php',
    name: 'PHP',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-php.wasm`,
    version: packageJson.dependencies['tree-sitter-php'],
    initCode: [
      '<?php',
      'class Car {',
      '    function Car() {',
      '        $this->model = "Tesla";',
      '    }',
      '}',
      '',
      '// create an object',
      '$Lightning = new Car();',
      '',
      '// show object properties',
      'echo $Lightning->model;',
    ].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-php',
  },
  {
    id: 'tree-sitter-python',
    name: 'python',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-python.wasm`,
    version: packageJson.dependencies['tree-sitter-python'],
    initCode: [
      `# This program adds two numbers`,
      ``,
      `num1 = 1.5`,
      `num2 = 6.3`,
      ``,
      `# Add two numbers`,
      `sum = num1 + num2`,
      ``,
      `# Display the sum`,
      `print('The sum of {0} and {1} is {2}'.format(num1, num2, sum))`,
    ].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-python',
  },
  {
    id: 'tree-sitter-regex',
    name: 'regex',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-regex.wasm`,
    version: packageJson.dependencies['tree-sitter-regex'],
    initCode: [`/((\\d{3})(?:\\.|-))?(\\d{3})(?:\\.|-)(\\d{4})/`].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-regex',
  },
  {
    id: 'tree-sitter-ruby',
    name: 'ruby',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-ruby.wasm`,
    version: packageJson.dependencies['tree-sitter-ruby'],
    initCode: [
      `def alternating_characters?(s)`,
      `  type = [/[aeiou]/, /[^aeiou]/].cycle`,
      ``,
      `  if s.start_with?(/[^aeiou]/)`,
      `   type.next`,
      `  end`,
      ``,
      `  s.chars.all? { |ch| ch.match?(type.next) }`,
      `end`,
    ].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-ruby',
  },
  {
    id: 'tree-sitter-scala',
    name: 'Scala',
    wasmUrl: `/tree-sitter-explorer/parsers/tree-sitter-scala.wasm`,
    version: packageJson.dependencies['tree-sitter-scala'],
    initCode: [
      'val fruits =',
      '  List("apple", "banana", "avocado", "papaya")',
      '',
      "val countsToFruits = // count how many 'a' in each fruit",
      "  fruits.groupBy(fruit => fruit.count(_ == 'a'))",
      '',
      'for (count, fruits) <- countsToFruits do',
      '  println(s"with \'a\' × $count = $fruits")',
    ].join('\n'),
    homepage: 'https://github.com/tree-sitter/tree-sitter-scala',
  },
];
