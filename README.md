# UI Scripts

UI Scripts is a CLI tool to generate components for React projects to avoid the repetition of setting up JS files, test files, story files etc.. every time you want to create a new component.

## Get Started

`cd scripts` - Navigate to the scripts directory (Usually at the root of the project)

Set your Node version to `v16.10.0` (`nvm use` with Node Version Manager) This may work with previous versions of Node, but hasn't been tested.

`node run new` - Run the 'new' command

### Alternatively

Set Node to the recommended version and add a line to your `package.json` to run from the root for each script you want to use, eg: `"new": "node scripts/new"`

Eg:

```
"new": "node ./scripts/generate-files.js",
"gen-colors": "node --experimental-json-modules ./scripts/generate-colors.js",
"gen-icons": "node ./scripts/generate-icons.js",
```

## Creating Files

Create component files (index, Storybook JS stories, Jest tests)

Using `yarn`:

`yarn new ComponentName`

Running this command will copy the new components import statement onto the clipboard for ease of working (Assumes you're using custom @ paths):

`import ComponentName from "@components/component-name"`

Component folder and file names need to be input as PascalCase and will be output as hyphenated lowercase where appropriate (folders and file names).

`component-name.js component-name.stories.js`

If a file already exists, use the `--force` argument to overwrite files with newly generated ones.

## Create Pages

Follow the same steps above to create a file, but appending `--page` will create a page using the page template.

## Create Hooks

Follow the same steps above to create a file, but appending `--hook` will create a basic React hook using the hook template.

## Generate StorybookJS colours from TailwindCSS config

-   TODO

## Generate StorybookJS Icons

-   TODO

## Generated Files

### Stories.js

Each story contains a parameter for the status of that particular story which relies on the addon: `@etchteam/storybook-addon-status`

### test.js

The Jest test is a simple 'Does the component render without crashing', and can be extended from there.

## Roadmap/TODO

-   Create a pages folder if none exists to prevent an error
-   Create a hooks folder if none exists to prevent an error
-   Tidy the readme with an arguments list
