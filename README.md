# Wordle-Hint

A helper to play alongside Wordle

## Usage

Drag this button to your bookmarks bar to save it as a bookmarklet:

[![Wordle-Hint](./wordle_logo_192x192.png)](javascript:(function()%7B(()%3D%3E%7Bvar%20e%3De%3D%3Efetch(%22https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Ffildon%2Fwordle-hint%2Fsrc%2Fallwords.txt%22).then((e%3D%3Ee.text())).then((e%3D%3Ee.split(%22%5Cn%22))).then((t%3D%3E(e%3D%3E%7Bfor(let%20t%3De.length-1%3Bt%3E0%3Bt--)%7Blet%20r%3DMath.floor(Math.random()*(t%2B1))%3B%5Be%5Br%5D%2Ce%5Bt%5D%5D%3D%5Be%5Bt%5D%2Ce%5Br%5D%5D%7Dreturn%20e%7D)(t).find((e%3D%3Et%3D%3Ee.every((e%3D%3Et%3D%3E%7Blet%20r%3D((e%2Ct)%3D%3E%7Blet%20r%3D%5B%22absent%22%2C%22absent%22%2C%22absent%22%2C%22absent%22%2C%22absent%22%5D%2Cl%3D%5B!0%2C!0%2C!0%2C!0%2C!0%5D%3Bfor(let%20n%3D0%3Bn%3C5%3Bn%2B%2B)e%5Bn%5D%3D%3D%3Dt%5Bn%5D%26%26(r%5Bn%5D%3D%22correct%22%2Cl%5Bn%5D%3D!1)%3Bfor(let%20n%3D0%3Bn%3C5%3Bn%2B%2B)if(%22correct%22!%3D%3Dr%5Bn%5D)for(let%20o%3D0%3Bo%3C5%3Bo%2B%2B)if(l%5Bo%5D%26%26e%5Bn%5D%3D%3D%3Dt%5Bo%5D)%7Br%5Bn%5D%3D%22present%22%2Cl%5Bo%5D%3D!1%3Bbreak%7Dreturn%20r%7D)(t._letters%2Ce)%3Bfor(let%20e%3D0%3Be%3C5%3Be%2B%2B)if(r%5Be%5D!%3D%3Dt._evaluation%5Be%5D)return!1%3Breturn!0%7D)(t)))(e))))%3B(()%3D%3E%7Blet%20t%3D(()%3D%3E%7Blet%20e%3Ddocument.getElementsByTagName(%22game-app%22)%5B0%5D.shadowRoot%3F.getElementById(%22board%22)%3Breturn%20e%3FArray.from(e.childNodes).filter((e%3D%3Ee._letters.length)).map((e%3D%3E(%7B_letters%3Ae._letters%2C_evaluation%3Ae._evaluation%7D)))%3Anull%7D)()%3Bif(!t)return%20alert(%22No%20Wordle%20board%20found%20on%20this%20page!%22)%3Be(t).then((e%3D%3Ealert(e%3F%3F%22No%20solution%20found...%20this%20shouldn't%20be%20possible...%22)))%7D)()%7D)()%3B%7D)())

Then simply visit [Wordle](https://www.powerlanguage.co.uk/wordle/) and click the bookmarklet to get a random valid guess.

## Development

To run a build:

```ts
npm run build
```

This compiles, bundles and minifies all source to a single JS file using [esbuild](https://esbuild.github.io/).
Then the library [bookmarklet](https://github.com/mrcoles/bookmarklet) is used to prepare the JS for usage directly as a bookmarklet.

The final step is manual. When you have created a new build, copy the build output from `dist/bookmarklet.js` into the usage section in the README.
