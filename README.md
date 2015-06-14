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
* Если доступ к [rawgit.com](https://rawgit.com/) отсутсвует (все внимание к `script.src`):
```js
javascript:(function(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'file:///path/to/cad.js';
    document.body.appendChild(script);})()
```

## Using
`Cadjs` довольно самостоятельный скрипт, он сам выбирает/заполняет ответы, которые, в отличие от тебя, он знает, в соответствии с вопросом. Поэтому просто нажимай на созданную шагом ранее `bookmarklet` и :tada:.

