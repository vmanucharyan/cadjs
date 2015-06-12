# -*- coding: utf-8 -*-


import json


def parse(source_file):
    with open(source_file, "r") as f:
        questions = []

        active_prefix = ""

        while True:
            ln = f.readline()
            print(ln)

            if not ln:
                break

            ln = ln.strip()

            if ln.endswith(u"{"):
                active_prefix = ln[0:len(ln) - 1]
            elif (ln.startswith(u"№")):
                question = f.readline().strip()
                answer = f.readline().strip()
                questions.append({
                    'question': active_prefix + ' ' + question,
                    'answer': answer
                })

                if (answer.endswith(u"}")):
                    active_prefix = ""
            else:
                pass

        return questions


if __name__ == "__main__":
    q = parse("questions.src")
    print(q)

    obj = {'questions': q}

    with open("out.json", "w") as of:
        json.dump(obj, of, ensure_ascii=False, indent=4)
