# cadjs

# Add to bookmarklet URL
```js
javascript:(function(){
    var script = document.createElement('cadscript');
    script.type = 'text/javascript';
    script.src = 'https://rawgit.com/IvanDyachenko/cadjs/feature/testBookmarklet/testBookmarklet.js';
    document.body.appendChild(script);})()
```
