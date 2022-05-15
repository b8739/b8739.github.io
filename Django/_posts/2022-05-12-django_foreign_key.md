---
title: Django 관계를 표현하는 모델 필드 (ForeignKey)
author: Jae
categories: [Django]
tags: [django, 인프런 강의, Foreign Key]
---

인프런 **_파이썬/장고 웹서비스 개발 완벽 가이드 with 리액트_** 강의를 보고 정리한 내용입니다.

---

# Django 관계를 표현하는 모델 필드 (ForeignKey)

ORM은 SQL 생성을 도와주는 라이브러리

DB에 대한 모든 것을 알아서 처리해주지는 않음

성능 높은 애플리케이션을 만들고자 한다면, 사용할 DB 엔진과 SQL에 대한 높은 이해가 필요

---

## ForeignKey?

가상 Key임.

실제로 저장되는 값은 대상 모델의 pk

1:N 관계에서 N측에 명시

`주의` Django 2 부터는 아래 두 인자를 필수로 지정해야 함

- ForeignKey(to, on_delete)

**to**: 대상모델

클래스를 직접 지정하거나,

클래스명을 문자열로 지정. 자기 참조는 self로 지정

**on_delete:** Record 삭제 시 rule

- CASCADE: FK로 참조하는 다른 모델의 Record도 삭제 (장고 1.X에서의 디폴트값)
- PROJECT: ProtectedError를 발생시키며 삭제 방지
- SET_NULL: null로 대체. 필드에 null=True 옵션 필수
- SET_DEFAULT: 디폴트 값으로 대체. 필드에 디폴트값 지정 피수
- SET: 대체할 값이나 함수 지정. 함수의 경우 호출하여 리턴값을 사용.
- DO_NOTHING: 어떠한 액션 X. DB에 따라 오류가 발생할 수도 있음

## RDBMS에서의 관계 예시

설계하기 나름.

### ✑ 1:N 관계 → models.ForeignKey로 표현

: N쪽에 ForeignKey를 지정

- `1명`의 `유저`(User)가 쓰는 `다수`의 `포스팅` (Post)
- `1명`의 `유저`(User)가 쓰는 `다수`의 `댓글`(Comment)
- `1개`의 `포스팅`(Post)에 `다수`의 `댓글` (Comment)

### ✑ 1:1 관계 → models.OneToOneField로 표현

: 양측 중 어느쪽에 ForeignKey를 지정해도 상관없음

user↔ profile 관계의 경우, 대개는 profile측에 지정 (왜냐하면 User의 경우는 Django auth에서 제공해줌. customize를 할 수는 있지만, 사용하고자하는 user class를 변경하는것일뿐, 실제 해당 class자체를 변경하지는 않음)

`1명`의 `유저`(User)는 `1개`의 `프로필` (Profile)

### ✑ M:N 관계 → models.ManyToManyField로 표현

:

`1개`의 `포스팅`(Post)에는 `다수`의 `태그`(Tag)

`1개`의 `태그`(Tag)에는 `다수`의 `포스팅`(Post)

```python
#앱 (instagram)의 models.py
class Comment(models.Model):
    post = models.ForignKey(Post, on_delete=models.CASCADE)
		#다른 앱을 참조하고자 하는 경우, 최상단에 앱을 import하고 아래처럼 앱 이름을 명시해주면 됨
		#post = models.ForignKey((다른앱).Post, on_delete=models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
```

### 직접 만든 User Model를 사용하고자 할 때

settings.py에 AUTH_USER_MODEL 변수를 만들어줌

```python
#settings.py
AUTH_USER_MODEL = "instagram.User" #Default값은 auth user.
#기본 User말고 직접 만든 앱의 User를 사용하고자 할 때
#앱 만들자마자 이 라인을 추가해주는게 삽질을 줄일 수 있음
#근데 instagram.User 만들기전에 일단 주석처리
```

그럼 아래와 같이 settings.AUTH_USER_MODEL을 추가해서 사용 가능

```python
from django.db import models
# from django.contrib.auth.models import User <-- Default Auth User
from django.conf import settings # <-- 이 부분을 추가

# Create your models here.
class Post(models.Model):
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    message = models.TextField()
```

---

### admin.py에 Comment Admin 추가

```python
#앱 admin.py
from .models import Post, Comment
...
@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    pass
```

### makemigraions, migrate

### admin에서 Comment 생성

![](https://velog.velcdn.com/images/a87380/post/552bb127-6607-40d0-92ef-ae1bd0228bc2/image.png)

### 다음과 같이 shell에서 접근 가능

```powershell
In [2]: Comment.objects.all()
Out[2]: SELECT "instagram_comment"."id",
       "instagram_comment"."post_id",
       "instagram_comment"."message",
       "instagram_comment"."created_at",
       "instagram_comment"."updated_at"
  FROM "instagram_comment"
 LIMIT 21

Execution time: 0.001503s [Database: default]
<QuerySet [<Comment: Comment object (1)>]>

In [3]: comment = Comment.objects.first()
SELECT "instagram_comment"."id",
       "instagram_comment"."post_id",
       "instagram_comment"."message",
       "instagram_comment"."created_at",
       "instagram_comment"."updated_at"
  FROM "instagram_comment"
 ORDER BY "instagram_comment"."id" ASC
 LIMIT 1

Execution time: 0.000419s [Database: default]

In [4]: comment
Out[4]: <Comment: Comment object (1)>

In [5]: comment.post
SELECT "instagram_post"."id",
       "instagram_post"."author_id",
       "instagram_post"."message",
       "instagram_post"."is_public",
       "instagram_post"."created_at",
       "instagram_post"."updated_at"
  FROM "instagram_post"
 WHERE "instagram_post"."id" = 2
 LIMIT 21

Execution time: 0.000434s [Database: default]
Out[5]: <Post: 샘플 메세지>
```

### related_name (reverse 역 참조)

N:1 관계에서 N측에서는 바로 1측을 참조할 수 있음(정참조)

```python
Comment.objects.filter(post_id=4)
```

하지만 반대로 1측에서 N측을 참조하면 역참조를 하여야 함 (class이름+`_set.all`를 사용)

즉, 1측에서 N측을 참조할 때 related_name 을사용

post가 1, comment가 N이라고 할 때 `post.comment_set.all()`로 참조 가능

하지만 앱 이름은 고려하지 않고, 모델명만 고려하기 때문에 만약 post라는 모델이 여러 앱에 있는데 related_name을 사용하려고 한다면 충돌이 일어날 수 있음

`해결방법`

1. 어느 한 쪽의 FK에 대해, related*name을 포기 → related_name=’+’ → \*\**+는 related*name을 사용안한다는 의미*\*\*
2. 어느 한 쪽의 (혹은 모두) FK의 related_name을 변경
   1. ex) FK(User,...,related_name=”blog_post_set”)
   2. ex) FK(User,...,related_name=”shop_post_set”
