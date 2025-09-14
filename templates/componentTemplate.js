const template = (
    componentName,
    componentKebabCase
) => `import propTypes from "prop-types";

interface Props {
    prop: any;
}

const ${componentName} = ({ prop }: Props) => {
    console.log(prop)
    return (
        <div className="">${componentName}</div>
    );
}

${componentName}.propTypes = {
    prop: propTypes.any,
}

export default ${componentName}`
export default template
