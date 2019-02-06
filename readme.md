# TODO

- [x] Add "knobs" functionality
- [ ] Investigate "Rollup" for the components instead of webpack as it's simpler
- [ ] Add Lerna
- [x] Add scss support
- [ ] https://blog.bitsrc.io/11-react-ui-component-playgrounds-for-2018-eef5a87a1bf8

## Structure

```
dist                                - Folder containing the build styleguide to see the components in action
components
└── Component
    ├── dist
    │   └── index.js                - The dist folder contains an index.js file containing the bundled and compiled js
    ├── src
    │   ├── index.js                - The src folder contains an index.js file used as an entry point
    │   ├── Component.js            - The Component itself lives in it's own file
    │   └── Component.stories.js    - Storybook uses so called stories to display information about a component
    ├── package.json                - Each component gets its own package.json file so it can be indiviualy versioned
    └── .yarnrc                     - We're using yarn to publish to our own registry
package.json
rollup.config.js                    - The rollup configuration lives at the root folder
lerna.json                          - We're using lerna to maintain the mono-repo
```

## Rollup

npm install --global rollup

Install with `$ npm install --global rollup`.

## Refrences

https://medium.com/@BartWaardenburg/creating-a-react-component-library-using-storybook-e7c3fd105fd5
https://rollupjs.org/guide/en
https://medium.com/tech-grandata-com/how-i-set-up-a-react-component-library-with-rollup-be6ccb700333
https://github.com/jaebradley/example-rollup-react-component-npm-package
https://hackernoon.com/publishing-baller-react-modules-2b039d84bce7
