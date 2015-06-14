# Cadjs

Предназначен для использования на ресурсе [tester.comcor.ru](http://tester.comcor.ru/).

## Add to [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) URL
* Если есть доступ к [rawgit.com](https://rawgit.com/):
```js
javascript:(function(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://rawgit.com/IvanDyachenko/cadjs/master/cad.js';
    document.body.appendChild(script);})()
```
* Если доступ к [rawgit.com](https://rawgit.com/) отсутсвуте (все внимание к `script.src`):
```js
javascript:(function(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'file:///path/to/cad.js';
    document.body.appendChild(script);})()
```

## Using
[[ https://github.com/IvanDyachenko/cadjs/blob/master/cadjs.gif | height = 200px ]]

