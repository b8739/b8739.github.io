---
title: Django OneToOneField
author: Jae
categories: [Django]
tags: [django, 인프런 강의, sql]
---

인프런 **_파이썬/장고 웹서비스 개발 완벽 가이드 with 리액트_** 강의를 보고 정리한 내용입니다.

---

1:1 관계에서 어느 쪽이라도 가능

ForeignKey(unique=True)와 유사하지만, reverse 차이

`User:Profile`을 FK로 지정한다면 → profile.user_set.first() → user

`User:Profile`를 O2O로 지정한다면 → profile.user → user

## OneToOneField(to, on_delete)

Foreign Key와 마찬가지로, to와 on_delete를 인자로 주어야 함

---

## 실습

accounts라는 앱을 만들어줌

```powershell
python3 manage.py startapp accounts
```

settings.py에 추가

```python
INSTALLED_APPS = [
...
    "accounts",
]
```

accounts 디렉토리에 [urls.py](http://urls.py) 추가

```python
#urls.py
urlpatterns = []
```

프로젝트 디렉토리 urls.py에 urlpatterns에 추가

```python
urlpatterns = [
		...
    path("accounts/", include("accounts,urls")),
		...
]
```

accounts/models.py에 Profile이라는 모델 추가

```python
from django.conf import settings
from django.db import models

# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    address= models.CharField(max_length=100)
    zipcode = models.CharField(max_length=6)
```

makemigrations 하고 migrate

```powershell
python3 manage.py makemigrations accounts
python3 manage.py migrate accounts
```
