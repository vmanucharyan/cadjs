(function() {
    function se(d) {
        return d.selection ? d.selection.createRange().text : d.getSelection()
    }
    s = se(document);
    for (i=0; i<frames.length && !s; i++) s = se(frames[i].document);
    if (!s || s=='') s = prompt('Enter%20search%20terms%20for%20Wikipedia','');
    open('http://en.wikipedia.org' + (s ? '/w/index.php?title=Special:Search&search=' + encodeURIComponent(s) : '')).focus();
})();