# -*- coding: utf-8 -*-


import json


def parse(source_file):
    with open(source_file, "r") as f:
        questions = []

        active_prefix = ""

        while True:
            ln = f.readline()

            if not ln:
                break

            ln = ln.strip()

            if ln.endswith("{"):
                active_prefix = ln[0:len(ln) - 1]
            elif (ln.startswith("№")):
                question = f.readline().strip()
                answer = f.readline() \
                    .replace("Ответ:", "") \
                    .strip()

                if (answer.endswith("}")):
                    answer = answer[0:len(answer)-1]
                    active_prefix = ""

                questions.append({
                    'question': active_prefix + ' ' + question,
                    'answer': answer
                })

            else:
                pass

        return questions


if __name__ == "__main__":
    q = parse("questions.src")
    print("questions count {}".format(len(q)))

    obj = {'questions': q}

    with open("out.json", "w") as of:
        json.dump(obj, of, ensure_ascii=False, indent=4)
