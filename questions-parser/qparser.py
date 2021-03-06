# -*- coding: utf-8 -*-


import json


def parse(source_file):
    with open(source_file, "r") as f:
        questions = []

        active_prefix = ""
        cat_index = -1

        while True:
            ln = f.readline()

            if not ln:
                break

            ln = ln.strip()

            if ln.endswith("{"):
                active_prefix = ln[0:len(ln) - 1]

            elif ln.startswith("##"):
                cat_name = f.readline().strip()
                questions.append({'name': cat_name, 'questions': []})
                cat_index += 1

            elif ln.startswith("№"):
                question = f.readline().strip()
                answer = f.readline() \
                    .replace("Ответ:", "") \
                    .strip()

                if (answer.endswith("}")):
                    answer = answer[0:len(answer)-1]

                if active_prefix != "":
                    question = active_prefix + ' ' + question

                questions[cat_index]['questions'].append({
                    'question': question,
                    'answer': answer.strip()
                })

                if (answer.endswith("}")):
                    active_prefix = ""

            else:
                pass

        return questions


if __name__ == "__main__":
    q = parse("questions.src")

    obj = {'categories': q}

    with open("out.json", "w") as of:
        json.dump(obj, of, ensure_ascii=False, indent=4)

    with open("out.min.json", "w") as of:
        json.dump(obj, of, ensure_ascii=False)
