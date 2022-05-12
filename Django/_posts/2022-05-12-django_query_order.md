---
title: Django Queryset의 정렬 및 범위 조건
author: Jae
categories: [Django]
tags: [django, 인프런 강의, sql]
---

정렬 조건을 추가하지 않으면 일관된 순서를 보장 못 함 ❌

DB에서 다수 필드에 대한 정렬을 지원

- 하지만 가급적 단일 필드로 하는 것이 성능에 이익
- 시간순 역순 정렬이 필요할 경우, id 필드를 활용해볼 수 있음

정렬 조건을 지정하는 2가지 방법

1. 모델 클래스의 meta 속성으로 ordering 설정: list로 지정
2. 모든 queryset에 order_by(...)에 지정

---

### Django Extensions 설치

```powershell
pip3 install django-extensions
```

settings.py에 추가

```python
#settings.py
INSTALLED_APPS = [
    # django apps
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    # third apps
    "django_extensions", #여기 추가됨
    # local apps
    "blog",
    "instagram",
]
```

```
python3 manage.py shell_plus --print-sql --ipython
```

shell_plus의 장점은 필요한 기본적인 것들을 미리 import해줌

```
(myenv) jeongjaeho@jeongjaehoui-MacBookPro djangostudy % python3 manage.py shell_plus --print-sql --ipython
# Shell Plus Model Imports
from django.contrib.admin.models import LogEntry
from django.contrib.auth.models import Group, Permission, User
from django.contrib.contenttypes.models import ContentType
from django.contrib.sessions.models import Session
from instagram.models import Post
# Shell Plus Django Imports
from django.core.cache import cache
from django.conf import settings
from django.contrib.auth import get_user_model
from django.db import transaction
from django.db.models import Avg, Case, Count, F, Max, Min, Prefetch, Q, Sum, When
from django.utils import timezone
from django.urls import reverse
from django.db.models import Exists, OuterRef, Subquery
Python 3.7.10 (default, Feb 27 2021, 02:19:57)
Type 'copyright', 'credits' or 'license' for more information
IPython 7.32.0 -- An enhanced Interactive Python. Type '?' for help.

In [1]:
```

```python
#models.py에 다음을 추가해주면 역순으로 정렬됨
#다시 order_by를 지정하면 이는 무시됨
class Meta:
    ordering = ["-id"]
```

![](https://velog.velcdn.com/images/a87380/post/6a073488-9e61-49ea-9826-f9a0c515d67b/image.png)

### 슬라이싱을 통한 범위조건 추가 (SELECT 쿼리에 “OFFSET/LIMIT” 추가)

역순 슬라이싱은 지원하지 않음

`사용법`: 객체[start:stop:step]

- offset → start
- limit → stop-start

`주의` step은 쿼리에 대응되지 않기 때문에 사용 비추천

```python
Post.objects.all[0:2:1]
```

**start와 stop은 sql이 처리하지만, step은 장고의 쿼리셋이 처리함.**

즉, `start`와 `stop`은 실제로 쿼리를 던지지 않고, lazy하게 동작하며, query set 객체를 반환

반면, `step`은 실제로 실제로 쿼리를 던지기 때문에, list를 반환하고, lazy하게 동작하지 않음
