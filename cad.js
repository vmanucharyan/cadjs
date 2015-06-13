(function() {
    function diffChars(a, b) {
        var n = a.length;
        var m = b.length;
        var MAX = n + m;
        var v = []; //array [-MAX, MAX] of Integer
        v[1] = 0;
        for (var d = 0; d <= MAX; d++) {
            for (var k = -d; k <= d; k+=2) {
                var x;
                if ((k == -d) || (k != d) && (v[k-1] < v[k+1])) {
                    x = v[k+1];
                } else {
                    x = v[k-1] + 1;
                }
                var y = x - k;
                while ((x < n) && (y < m) && (a[x+1] == b[y+1])) {
                    x = x + 1;
                    y = y + 1;
                }
                v[k] = x;
                if ((x >= n) && (y >= m)) {
                    console.log("Length of an SES is D=", d);
                    return d; //TODO: flag = true;
                }
            }
        }
        console.log("Length of an SES is greater than MAX=", MAX);
        return MAX;
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
    var _b = "Решить след нестац-ю задачу: L=4, S=1, rт10, ст=20, p=1. Левый T 0= 500 на правом теплообмен Jправ=30*(T4-T*) T*=100 градусов - температура внешней среды . Нач усл: T10= T20=T30= T40=0. Исп явную выч-ю схему мет конеч разн, опр T31 и T41 при шаге ht=0.5?";
    diffChars(_a, _b);

})();