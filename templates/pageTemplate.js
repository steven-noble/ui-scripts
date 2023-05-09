const template = (componentName) => `import SEO from '@components/seo'
import Page from '@layouts/page'

export default function ${componentName}Page() {
    return (
        <>
            <Page>${componentName} Page</Page>
            <SEO
                title=""
                description=""
            />
        </>
    )
}`

export default template
