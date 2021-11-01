export const componentPascalCase = (componentName) => {
  const lowerCase = componentName.toLowerCase();
  const capitalise = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
  return capitalise.replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase();
  });
};

export const componentCamelCase = (componentName) => {
  return componentName
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "")
    .replace(/-/g, "");
};

export const componentLowerCase = (componentName) => {
  return componentName.toLowerCase()
};

export const componentHyphenated = (componentName) => {
  return componentName.replace( /([a-z])([A-Z])/g, '$1-$2' ).toLowerCase();
};
