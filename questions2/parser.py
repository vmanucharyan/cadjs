#!python3
# -*- coding: utf-8 -*-

import re
import json


def parse_questions(name):
    reg = re.compile(
        r'\d+\.\s*(?P<question>(.+\n?)+)\s*Answer is:\s*(?P<answer>.+)')

    text = ''
    with open(name, 'r') as f:
        text = f.read()

    res = []

    for match in reg.findall(text):
        question = match[0]
        ans = match[2]

        if (ans.endswith(".")):
            ans = ans[0:len(ans)-1]

        res.append({'question': question, 'answer': ans})

    return res

if __name__ == '__main__':
    obj = {'categories': [
        {
            'name': 'Оптимизация',
            'questons': parse_questions('optimization.src')
        },
        {
            'name': 'Общие сведения о процессе проектирования',
            'questions': parse_questions('common.src')
        },
        {
            'name': 'Математические модели и методы',
            'questons': parse_questions('models_and_methods.src')
        },
        {
            'name': 'Математические модели микро-уровня',
            'questons': parse_questions('micro_level.src')
        },
    ]}

    with open('out.json', 'w') as of:
        json.dump(obj, of, ensure_ascii=False, indent=4)

    with open('out.min.json', 'w') as of:
        json.dump(obj, of, ensure_ascii=False)
