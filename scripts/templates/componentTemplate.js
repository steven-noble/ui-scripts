const templateEs5 = (componentName, addSass, addScss) => `import React from 'react'
${addScss ? `import './styles.scss'
` : addSass ? `import './styles.sass'
` : null}
export default function ${componentName}() {
  return (
      <>${componentName}</>
  );
}
`

const templateEs6 = (componentName, addSass, addScss) => `${addScss ? `import styles from './styles.scss'
` : ``}
${addSass ? `import './styles.sass'
` : ``}
export default function ${componentName}() {
  return (
      <>${componentName}</>
  );
}
`

const template = (componentName, isEs5, addSass, addScss) => {
    if (isEs5) {
        return templateEs5(componentName, addSass, addScss)
    } else {
        return templateEs6(componentName, addSass, addScss)
    }
}
export default template
