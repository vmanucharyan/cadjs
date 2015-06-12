(function() {
    function getText(element) {
        var text = element.nnerText || element.textContent;
        return text;
    }

    function formatText(x) {
        return x.replace(/^\s+|\s+$/gm,'').replace(/(\r\n|\n|\r)/gm,' ').replace(/\s\s+/gm,' ');
    }

    function tableToQuestion(table) {
        var cells = table.getElementsByTagName('td');
        var question = '';
        for (var i=0; i < cells.length; i++) {
            var children = cells[i].childNodes;
            for (var j=0; j < children.length; j++) {
                question = question.concat(getText(children[j]) + " ");
            }
        }
        question = formatText(question);
        return question;
    }

    function getQuestion() {
        var tables = document.getElementsByTagName('table');
        var question = tableToQuestion(tables[1]);
        console.log(question);
    }

    getQuestion();

})();