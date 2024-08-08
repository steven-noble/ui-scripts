const template = (componentName, componentKebabCase, props, scss) => {
    return `${props ? 'import propTypes from "prop-types";\n' : ""}
${scss ? `import styles from "./${componentKebabCase}.module.scss";` : ""}

${
    props
        ? `interface Props {
    ${props.map((prop) => `${prop}: any;\n`).join("")}
}`
        : ""
}

const ${componentName} = (${
        props
            ? `{
    ${props.map((prop) => prop)}
}: Props`
            : ""
    }) => {
    ${props ? props.map((prop) => `console.log(${prop})\n`).join("") : ""}
    return (
        <div${
            scss ? ` className={styles['${componentKebabCase}']}` : ""
        }>${componentName}</div>
    );
}

${
    props
        ? `${componentName}.propTypes = {
    ${props.map((prop) => `${prop}: propTypes.any`)}
}
`
        : ""
}

export default ${componentName}`.trim();
};
export default template;
