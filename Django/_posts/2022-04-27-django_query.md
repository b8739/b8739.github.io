---
title: Django 모델을 통한 조회 (기초)
author: Jae
categories: [Django, query]
tags: [django, 인프런 강의]
---

## Model Manager

데이터베이스 질의 인터페이스를 제공

디폴트 Manager로서 ModelCls.objects가 제공

아래처럼 사용

```python
ModelCls.objects.all()
ModelCls.objects.all().order_by('-id')[:10]
ModelCls.objects.create(title="New Title")
```

![](https://velog.velcdn.com/images/a87380/post/537da36e-1f84-4bee-9ebd-12f7c74388de/image.png)

## QuerySet

SQL을 생성해주는 인터페이스

순회가능한 객체

![](https://velog.velcdn.com/images/a87380/post/db769368-d0c9-4b79-af11-935c3c358046/image.png)

Model Manager를 통해, 해당 Model에 대한 QuerySet을 획은

- Post.object.all() ... → “SELECT \* FROM Post”
- Post.objects.create(...) “INSERT INTO ...”

### QuerySet의 Lazy한 특성이 있음

무슨 의미인가 하면, 아무리 아래처럼 쿼리 셋에 조건을 추가해도 아직 실제로 쿼리를 날리지는 않는다.

```python
qs = Post.objects.all().order_by('-id')[:2}
```

실제로 쿼리를 해서 데이터를 가져오는 시점은 qs를 호출할 때이다. (실제로 데이터가 필요할 때)

### Query는 Chaining 가능

Post.objects.all(...).filter.exclude(...).filter(...) → QuerySet

- 마치 mongoDB의 aggregation pipeline

enter를 쳐서 line을 구분하려면 아래처럼 backslash를 넣어주어야 함

![](https://velog.velcdn.com/images/a87380/post/ef741ef0-2331-400d-ad46-c9b78e9be625/image.png)

### Query Set 모델객체 획득

queryset[숫자인덱스]

- 모델객체 혹은 없으면 예외발생 (IndexError)

```python
queryset.get(...)
```

- 모델객체 혹은 없으면 예외발생 (DoesNotExist, MultipleObjectsReturned)

```python
queryset.first()
```

- 모델객체 혹은 None

```python
queryset.last()
```

- 모델객체 혹은 None

**예시**

![](https://velog.velcdn.com/images/a87380/post/afa900db-6f0b-40bb-a2de-91134d652e59/image.png)

### 조건 추가

![](https://velog.velcdn.com/images/a87380/post/96f88318-1f04-47a8-bffb-c9ed570fa6f1/image.png)
