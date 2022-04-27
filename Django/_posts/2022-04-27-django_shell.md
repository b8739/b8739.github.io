---
title: Django 쉘 (Shell)
author: Jae
categories: [Django, shell]
tags: [django, 인프런 강의]
---

### 쉘 (Shell)이란?

코드 한 줄 입력받고 바로 실행결과 출력해주는 프로그램

python (python3)를 입력하면 나오는 파이썬 쉘은 장고 프로젝트 설정이 로딩되어 있지 않음

장고 프로젝트 설정이 로딩된 파이썬 쉘

```python
python3 manage.py shell

#-i (--interface): 인터프리터 인터페이스 커스텀 지정
#-c (--command): 실행할 파이썬 코드를 문자열로 지정
```

### 쉘 열리는 우선순위 (ipython, bpython 등이 설치되어 있다면):

ipython쉘 , bpython쉘, python쉘

Jupyter는 ipython을 사용함

아래처럼 쉘 내에서 환경변수를 추가해주어야 장고 모델 등을 import할 수 있음

실제 장고의 환경변수를 변경하는 것은 아니고, 쉘 내에서만 변경하는 것

```python
import os
os.environ['DJANGO_SETTINGS_MODULE'] = 'askcompany.settings'
os.environ['DJANGO_ALLOW_ASYNC_UNSAFE'] = 'true'

import django
django.setup()
```

Django 3부터는 비동기가 지원이되어서, 주피터에서 장고를 사용할 때 SynchronousOnlyOperation에러가 뜸

![](https://velog.velcdn.com/images/a87380/post/ed6bf002-3a1b-4092-9e2e-6fc20cdbc15f/image.png)

따라서 아래 코드를 추가해주어야 에러가 안 남

```python
os.environ['DJANGO_ALLOW_ASYNC_UNSAFE'] = 'true'
```
