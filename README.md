# Wordle-Hint

A helper to play alongside Wordle

## Usage

Copy+Paste the following code into the browser console while on [Wordle](https://www.powerlanguage.co.uk/wordle/)

```js
(()=>{var d=(t,e)=>{let r=["absent","absent","absent","absent","absent"],n=[!0,!0,!0,!0,!0];for(let o=0;o<5;o++)t[o]===e[o]&&(r[o]="correct",n[o]=!1);for(let o=0;o<5;o++)if(r[o]!=="correct"){for(let s=0;s<5;s++)if(n[s]&&t[o]===e[s]){r[o]="present",n[s]=!1;break}}return r},u=t=>e=>{let r=d(e._letters,t);for(let n=0;n<5;n++)if(r[n]!==e._evaluation[n])return!1;return!0},l=t=>e=>t.every(u(e));var a=()=>{let t=document.getElementsByTagName("game-app")[0].shadowRoot?.getElementById("board");return t?Array.from(t.childNodes).filter(e=>e._letters.length).map(e=>({_letters:e._letters,_evaluation:e._evaluation})):null},i=()=>fetch("https://cdn.jsdelivr.net/gh/fildon/wordle-hint/src/allwords.txt").then(t=>t.text()).then(t=>t.split(`
`));var c=t=>{for(let e=t.length-1;e>0;e--){let r=Math.floor(Math.random()*(e+1));[t[r],t[e]]=[t[e],t[r]]}return t},f=t=>i().then(e=>c(e).find(l(t))),h=()=>{let t=a();if(!t)return alert("No Wordle board found on this page!");f(t).then(e=>alert(e??"No solution found... this shouldn't be possible..."))};h();})();
```

## TODO

Any sort of UX

[Bookmarklet](https://mrcoles.com/bookmarklet/)
