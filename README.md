# Wordle-Hint

A helper to play alongside Wordle

## Usage

Visit [Wordle-Hint](https://fildon.me/wordle-hint/) for instructions.

## Development

To run a build:

```ts
npm run build
```

This compiles, bundles and minifies all source to a single JS file using [esbuild](https://esbuild.github.io/).
Then the library [bookmarklet](https://github.com/mrcoles/bookmarklet) is used to prepare the JS for usage directly as a bookmarklet.

The final step is manual. When you have created a new build, copy the build output from `dist/bookmarklet.js` into the anchor in the `index.html`.
