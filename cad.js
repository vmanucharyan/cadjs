(function() {

    function Levenshtein_distance (s, t) {
        if (s.length == 0) return t.length;
        if (t.length == 0) return s.length;

        var v0 = new Array(t.length + 1);
        var v1 = new Array(t.length + 1);

        for (var i = 0; i < v0.length; i++)
            v0[i] = i;

        for (i = 0; i < s.length; i++) {
            v1[0] = i + 1;

            for (var j = 0; j < t.length; j++) {
                var cost = (s[i] == t[j]) ? 0 : 1;
                v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1] + 1, v0[j] + cost);
            }

            for (j = 0; j < v0.length; j++)
                v0[j] = v1[j];
        }

        return v1[t.length];
    }



    function getText(element) {
        var text = element.innerText || element.textContent;
        return text;
    }

    function formatText(text) {
        //return text.replace(/(\r\n|\n|\r)/gm,'').replace(/\s+/g,'');
        return text.replace(/^\s+|\s+$/gm,'').replace(/(\r\n|\n|\r)/gm,' ').replace(/\s\s+/gm,' ');
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

    var _a = "Дан цилиндрический стержень длиной L и площадью поперечного сечения S. Цилиндрическая поверхность стержня теплоизолирована. Удельная теплоемкость - cт, удельная теплопроводность - rт, плотность - p. Для решения задачи методом конечных разностей построена одномерная расчетная сетка с шагом hx=1, как это показано на рис.Решить следующую одномерную нестационарную задачу: L=4, S=1, r т=10, ст=20, p=1. Левый торец стержня имеет постоянную температуру T0=500 градусов (граничные условия первого рода), на правом торце имеет место теплообмен с внешней средой, описываемый выражением Jправ=30*(T4-T*) (граничные условия второго рода), где Jправ - плотность потока тепловой энергии, T*=100 градусов - температура внешней среды . Начальные условия: T10= T20=T30= T40=0. Используя явную вычислительную схему метода конечных разностей, определить T31 и T41 при шаге ht=1?";
    var _b = "Решить след нестац-ю задачу: L=4, S=1, rт10, ст=20, p=1. Левый T 0= 500 на правом теплообмен Jправ=30*(T4-T*) T*=100 градусов - температура внешней среды . Нач усл: T10= T20=T30= T40=0. Исп явную выч-ю схему мет конеч разн, опр T31 и T41 при шаге ht=0?";
    for (var i=0; i<1000; i++) {
        Levenshtein_distance(_a.split(" "), _b.split(" "))
    }
    console.log(Levenshtein_distance(_a.split(" "), _b.split(" ")));

})();