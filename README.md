
## Notes

- Collections are defined by `tags`.
- For a `blog` collection, `blog/blog.json` can list collection attributes (like tags).
- Using Data. [Eleventy Documentation](https://www.11ty.dev/docs/data/)

## To Do

- Install from scratch.
- Update license
- Should package.json dependencies be dev dependencies?

## Plugins

- @11ty/eleventy-navigation


## Packages

- [PurgeCSS](https://purgecss.com)
- [Stimulus](https://stimulus.hotwired.dev/handbook/introduction)
- [Tailwind Forms](https://github.com/tailwindlabs/tailwindcss-forms) Not installed.
- [Tailwind](https://tailwindcss.com)
- [Turbo](https://turbo.hotwired.dev/handbook/introduction)
- [Webpack](https://webpack.js.org)


## Setup

1. `yarn install`


## Add/remove Node packages

- `yarn add --dev luxon`
- `yarn remove luxon`


## Package.json

### Top-level commands

1. `yarn run` List all available scripts from package.json.
1. `yarn build` Production build (for Netlify).
1. `yarn build:serve` Production build plus web server.
1. `yarn dev` Webpack watch and Eleventy server (for quick-turnaround development).

### npm-run-all

Provides sequential and parallel execution of scripts.

- `run-s` runs steps sequentially.
- `run-p` runs steps in parallel.
- `run-s -l` prints a label on each output line.


## Key Directories

### asset_src

Processed by Webpack. Contains CSS, JS, and images.

- `styles`
  - `basic.scss` Styles in addition to Tailwind.
  - `styles.scss` Setup Tailwind and import other styles.
- `controllers` Stimulus controllers are bundled and included.
- `images` All site images. Copied to public/assets/images.

### site

Processed by Eleventy. Contains HTML, Nunjucks templates, and site content.

### public

The Eleventy output directory Processed by web server. Contains the site's public files.


## Webpack

Webpack generates `main.js` and `main.css`.

These assets are then inserted into `html_head.njk`.


## Development

Webpack and Eleventy must run simultaneously.

`yarn dev`

## Acknowledgements

- [Eleventy Origin](https://github.com/scottwater/eleventy-origin): Thanks, Scott. This was a good starting point.


