(function() {
    function getText(element) {
        var text = element.innerText || element.textContent;
        return text;
    }

    function formatText(text) {
        return text.replace(/(\r\n|\n|\r)/gm,'').replace(/\s+/g,'')
    }

    function spanToTheme(span) {
        var theme = getText(span);
        theme = formatText(theme);
        return theme;
    }

    function tableToQuestion(table) {
        var cells = table.getElementsByTagName('td');
        var question = '';
        for (var i=0; i < cells.length; i++) {
            var children = cells[i].childNodes;
            for (var j=0; j < children.length; j++) {
                question = question.concat(getText(children[j]));
            }
        }
        question = formatText(question);
        return question;
    }

    function getTheme() {
        var THEME_SPAN_INDEX = 0;
        var span = document.getElementsByTagName('span');
        var theme = spanToTheme(span[THEME_SPAN_INDEX]);
        console.log(theme);
    }

    function getQuestion() {
        var QUESTION_TABLE_INDEX = 1;
        var tables = document.getElementsByTagName('table');
        var question = tableToQuestion(tables[QUESTION_TABLE_INDEX]);
        console.log(question);
    }

    getTheme();
    getQuestion();

})();