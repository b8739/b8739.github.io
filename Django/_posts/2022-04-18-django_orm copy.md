---
title: Django 모델 (ORM)
author: Jae
categories: [Django]
tags: [django, 인프런 강의]
---

## 강의 내용 정리

강의명 : 파이썬/장고 웹서비스 개발 완벽 가이드 with 리액트

강의: 장고 ORM

---

## 데이터베이스와 SQL

SQL: 데이터베이스에 쿼리하기 위한 언어

직접 SQL을 만들어내기도 하지만, ORM (Object-relational mapping)을 통해 SQL을 생성/실행하기도 한다.

ORM을 쓰더라도, 작성한 ORM코드를 통해 어떤 SQL이 실행되고 있는지 파악을 해야 최적화 가능

- django-debug-toolbar 적극 활용

## 장고 ORM인 모델은 RDB만을 지원

## 다양한 파이썬 ORM

Rleational Databases

- django databases, sqlalchemy, orator, peewee, ponyORM 등

NoSQL Databases

- django-mongodb-engine, hot-redis, MongoEngine, PynamoDB 등

## 장고의 강점은 Model과 Form

물론 장고에서도 다양한 ORM 라이브러리를 사용 가능. 적절하게 섞어쓸 수 있음

SQL을 직접 실행할 수도 있지만, 간으하면 ORM tkdyd

- 직접 SQL문자열을 조합하지 말고, 인자로 처리 → SQL Injection 방지
  - SQL Injection이란 악의적인 사용자가 특정 SQL 쿼리 문을 전송하여 서버 DB를 공격하는 해킹 기법

## Django Model

데이터베이스 테이블과 파이썬 클래스를 1:1로 매핑

모델 클래스명은 단수형으로 지정 ex: Posts (x), Post (O)

- 클래스이기에 필히 첫 글자가 대문자인 PascalCase 네이밍

매핑되는 모델 클래스는 DB 테이블 필드내역이 일치해야 함

모델을 만들기 전에 서비스에 맞게 데이터베이스 설계가 필수

- 즉 관계형 데이터베이스 학습도 필요 (DB의 영역은 또 다름 )

앱 폴더에 있는 [models.py](http://models.py) 파일에 아래처럼 작성하게 됨

![](https://velog.velcdn.com/images/a87380/post/432c459e-5313-4631-96cc-81e9d91fc971/image.png)

## 모델 활용 순서

- 장고 모델을 만들고, 데이터 베이스 형상 관리
  1. 모델 클래스 작성
  2. 모델 클래스로부터 마이그레이션 파일 생성 → makemigrations 명령
  3. 마이그레이션 파일을 데이터베이스에 적용 → migrate 명령
  4. 모델 활용
- 기존 외부 DB를 현재 데이터베이스로 가져와서 형상 관리
  1. 데이터베이스로부터 모델 클래스 소스 생성 → Inspectdb 명령
  2. 모델 활용

## 모델명과 DB 테이블명

DB 테이블명: 디폴트 “앱이름\_모델명”

ex.

blog앱

- Post 모델: blog_post
- Comment 모델: blog_comment

shot 앱

- Item 모델: shot_item
- review 모델: shop_review

## 적용순서

**Item 모델 정의**

**마이그레이션 파일 생성**

```bash
python3 manage.py makemigrations 앱이름
```

**마이그레이션 파일 적용**

```bash
python3 manage.py migrate
```

**데이터베이스 확인**

```bash
#sqllite가 생성되어 있다면
python3 manage.py dbshell
```

## 위 순서대로 모델 만들어서 적용해보기

### **앱 등록**

인스타그램 이라는 이름의 앱 생성

```bash
python3 manage.py startapp instagram
```

settings.py에 앱 이름 추가

```bash
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'blog',
    'instagram',
]
```

![](https://velog.velcdn.com/images/a87380/post/fccf03f2-6a42-456d-af15-e9791fe53e9c/image.png)
urls.py 직접 추가

안에 다음과 같이 입력

```bash
urlpatterns = []
```

프로젝트 디렉토리 urls.py에 다음 한 줄 추가

![](https://velog.velcdn.com/images/a87380/post/1d69f7c9-682b-40c8-8bdc-b80cde21cfaf/image.png)

### 모델 생성

instagram 디렉토리 models.py에 다음과 같이 모델 생성

```bash
from django.db import models

# Create your models here.
class Post(models.Model):
    message = models.Textfield()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
```

### **마이그레이션 파일 적용**

```bash
python3 manage.py makemigrations instagram
```

오타가 있거나 하면 다음과 같은 에러가 남

```bash
AttributeError: module 'django.db.models' has no attribute 'Textfield'
```

혹은 settings.py에 앱을 추가안해주었거나, 추가해주고 저장을 안해주었다면 다음과 같은 에러

```bash
No installed app with label 'instagram'.
```

성공하면 다음과 같이 뜸

```bash
Migrations for 'instagram':
  instagram/migrations/0001_initial.py
    - Create model Post
```

### **마이그레이션 파일 적용**

다음 명령어 입력

```bash
python3 manage.py migrate instagram
```

아래와 같이 뜨면 models.py에 작성한대로 Post라는 테이블이 생성이 된 것

```bash
Operations to perform:
  Apply all migrations: instagram
Running migrations:
  Applying instagram.0001_initial... OK
```

### 데이터베이스에 들어간 코드 확인

```bash
python3 manage.py sqlmigrate instagram 0001_initial
```

아래와 같은 명령어가 입력된 것을 알 수 있음 (id는 따로 지정안해주었지만 primary key로 자동 생성되어씅ㅁ)

```bash
BEGIN;
--
-- Create model Post
--
CREATE TABLE "instagram_post" ("id" integer NOT NULL PRIMARY KEY AUTOINCREMENT, "message" text NOT NULL, "created_at" datetime NOT NULL, "updated_at" datetime NOT NULL);
COMMIT;
```
