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
