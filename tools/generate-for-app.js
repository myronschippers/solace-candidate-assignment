const { generateTemplateFiles } = require('generate-template-files');

generateTemplateFiles([
  {
    option: 'Component as Client Feature',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/component',
    },
    stringReplacers: ['__name__'],
    output: {
      path: './src/components/features/__name__(pascalCase)',
    },
  },
  {
    option: 'Component as Client Template',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/component',
    },
    stringReplacers: ['__name__'],
    output: {
      path: './src/components/template/__name__(pascalCase)',
    },
  },
  {
    option: 'Component as Client UI',
    defaultCase: '(pascalCase)',
    entry: {
      folderPath: './tools/templates/component',
    },
    stringReplacers: ['__name__'],
    output: {
      path: './src/components/ui/__name__(pascalCase)',
    },
  },
]);
