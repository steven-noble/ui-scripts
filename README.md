# UI Scripts

UI Scripts is a CLI tool to generate components for React projects to avoid the reppetition of setting up JS files, test files, story files etc.. every time you want to create a new component.

## Get Started

`cd scripts` - Go into the scripts directory (Usually at the root of the project)

Set your Node version to `v16.5.0`

`nvm run new` - Run the 'new' command

### Alternatively

Set Node to the recommended version and add a line to your `package.json` to run from the root for each script you want to use, eg: `"new": "node scripts/new"`

## Creating Components

Create component files (index, stories, test, notes)

Using `yarn`:

`yarn new ComponentName`

Running this command will copy the new components import statement onto the clipboard for ease of working (Assumes you're using custom @ paths):

`import ComponentName from "@components/component-name"`

Component folder and file names need to be input as PascalCase and will be output as hyphenated lowercase where appropriate (folders and file names).

`component-name.js component-name.stories.js`

### Output Folder

The output can be changed using config.js to set the root folder.
