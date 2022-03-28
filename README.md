
## Setup

1. `yarn install`


## Development

Webpack and Eleventy must run simultaneously. Use the following:

`yarn dev`

### Add/Remove Node packages

- `yarn add --dev postcss`
- `yarn remove postcss`


## Package.json

### Top-level commands

1. `yarn run` List all available scripts from package.json.
1. `yarn build` Production build (for Netlify).
1. `yarn build:serve` Production build plus web server.
1. `yarn dev` For quick-turnaround development (Webpack watch and Eleventy server).

### npm-run-all

Provides sequential and parallel execution of scripts.

- `run-s` runs steps sequentially.
- `run-p` runs steps in parallel.
- `run-s -l` prints a label on each output line.


## Key Directories

### site

The website content, processed by Eleventy. Contains Nunjucks templates, layouts, and included templates.

### asset_src

Processed by Webpack. Contains CSS, JS, and images.

- `styles`
  - `basic.scss` Styles in addition to Tailwind.
  - `styles.scss` Setup Tailwind and import other styles.
- `controllers` Stimulus controllers are bundled and included.
- `images` All site images. Copied to public/assets/images.

### public

The Eleventy output directory. Delivered by the Netlify web server. Contains the site's public files.


## Plugins

- @11ty/eleventy-navigation


## Packages

- [PurgeCSS](https://purgecss.com)
- [Stimulus](https://stimulus.hotwired.dev/handbook/introduction)
- [Tailwind Forms](https://github.com/tailwindlabs/tailwindcss-forms) Not installed.
- [Tailwind](https://tailwindcss.com)
- [Turbo](https://turbo.hotwired.dev/handbook/introduction)
- [Webpack](https://webpack.js.org)


## Webpack

Webpack generates `main.js` and `main.css`.

These assets are then inserted into `html_head.njk`.


## Notes

- Collections are defined by `tags`.
- For a `blog` collection, `blog/blog.json` can list collection attributes (like tags).
- Using Data. [Eleventy Documentation](https://www.11ty.dev/docs/data/)


## Acknowledgments

- [Eleventy Origin](https://github.com/scottwater/eleventy-origin): Thanks, Scott, for a good Eleventy starting point.
- [Hotwire, Turbo, Stimulus](https://hotwired.dev/): Thanks, Basecamp, for the Javascript libraries, documentation, and examples.
- [Sample Tailwind Template](https://github.com/colmtuite/tailwind-template): Thanks, Colm, for the landing page template.
- [Tailwind Blog Template](https://templates.digizu.co.uk/): Thanks, Ross, for the blog template.
- [Tailwind UI](https://tailwindui.com/preview): Thanks, Tailwind, for the preview examples of your full Tailwind UI toolkit.
