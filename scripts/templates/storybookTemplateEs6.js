import { componentPascalCase, componentCamelCase } from '../functions/index.js'

const template = (componentName) => `import ${componentPascalCase(componentName)} from './index';
import notes from './notes.md';

export default {
  title: 'Components/${componentPascalCase(componentName)}',
  component: ${componentPascalCase(componentName)},
  parameters: {
    notes: notes
  },
};

const Template = (args) => <${componentPascalCase(componentName)} {...args} />;

export const ${componentCamelCase(componentName)} = Template.bind({});
${componentCamelCase(componentName)}.args = {};
`
export default template
