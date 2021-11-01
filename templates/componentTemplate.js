const template = (componentName) => `export default function ${componentName}() {
  return (
      <>${componentName}</>
  );
}
    `;
export default template;
