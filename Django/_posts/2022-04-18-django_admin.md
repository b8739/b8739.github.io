---
title: Django admin을 통한 데이터 관리
author: Jae
categories: [Django]
tags: [django, 인프런 강의]
---

인프런 **_파이썬/장고 웹서비스 개발 완벽 가이드 with 리액트_** 강의를 보고 정리한 내용입니다.

---

## 강의 내용 정리

강의명 : 파이썬/장고 웹서비스 개발 완벽 가이드 with 리액트

강의: 장고 admin을 통한 데이터 관리

---

## django admin

django.contrib.admin 앱을 통해서 제공됨

- 디폴트 경로: /admin/
- 혹은 django-admin-honeypot앱을 통해 가짜 admin 페이지 노출
  - 동일한 기능 제공. 단 이 방법 사용시 admin을 다른 경로로 변경해두고, /admin/을 honeypot가 mapping 하게 됨. 이 앱에서는 로그인 할 사람의 IP을 기록해두게 됨.

모델 클래스 등록을 통해서 조회/추가/수정/삭제 웹 ui를 제공함

- 서비스 초기에 데이터베이스 관리도구로 유용
- 관리도구 만들 시간 줄이고 End-User 서비스에 집중 할 수 있음

내부적으로 django form 적극적으로 사용

**model을 만들어도 admin상에서 사용하기 위해서는 따로 등록하는 과정이 필요함!!!**

## Admin에 Model Class 등록 방법

model 등록은 한번만 됨

이미 등록된 model에 한해서는 unregister해야만 새롭게 등록 가능

### 등록법 #1

```python
admin.site.register(Item) #기본 ModelAdmin으로 동작
```

아래와 같이 앱 디렉토리의 admin.py파일에 입력해주고 저장한다.

![](https://velog.velcdn.com/images/a87380/post/21f612b6-dc1f-4063-a470-97c3cd8a2a7a/image.png)

그러면 아래와 같이 /instagram (등록한 앱 URL)로 가면 Model이 뜸

![](https://velog.velcdn.com/images/a87380/post/befa481a-41bd-40a5-a5f4-1bf10b105259/image.png)

### 등록법 #2

```python
class ItemAdmin(admin.ModelAdmin):
	pass
admin.site.register(Item,ItemAdmin) #지정한 ModelAdmin으로 동작
```

### 등록법 #3

```python
@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
	pass
```

---

## /**str** 표현

JAVA의 toString처럼 파이썬에서도 어떤 객체에 대해서 문자열로 표현해야 하는 경우가 있음

```python
# Create your models here.
class Post(models.Model):
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

		#아래처럼 작성
    def __str__(self):
        return f"Post object ({self.id})" #이 부분은 custom 가능
```

그럼 Post를 만들 경우 다음과 같이 이름이 지정도미

![](https://velog.velcdn.com/images/a87380/post/f95aebc6-3ea0-471f-8951-4aa89ef630b9/image.png)

## list display 표현

보여줄 컬럼을 지정할 수 있음

아래와 같이 list_display를 primary key로 지정한다면

```python
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['pk'] #pk는 primary key에 대한 별칭
```

아래와 같이 뜸 (primary key인 id가 1이기 때문에 1)

![](https://velog.velcdn.com/images/a87380/post/71bb3773-8584-4861-a414-e68a23dd9332/image.png)

좀 더 explicit하게 표시할 컬럼들을 명시해주었을때의 결과

```python
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['id','message','created_at','updated_at'] #pk는 primary key에 대한 별칭
```

![](https://velog.velcdn.com/images/a87380/post/09bbaf49-0002-4feb-8f8f-30535d9669c3/image.png)

## list_display_links

list_display 지정된 이름 중에, detail 링크를 걸 속성 리스트

```python
@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['id','message','created_at','updated_at'] #pk는 primary key에 대한 별칭
    list_display_links=['messages']
```

## Member Function 추가 (models.py에서)

![](https://velog.velcdn.com/images/a87380/post/90956f15-06b5-48cf-8cdf-62684da32b14/image.png)

```python
#instagram/admin.py

@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = ['id','message','message_length','created_at','updated_at'] #pk는 primary key에 대한 별칭
    list_display_links=['messages']
```

![](https://velog.velcdn.com/images/a87380/post/c34b6f22-3239-475b-a30a-5b20e236435b/image.png)

## 멤버 function 컬럼 이름 변경

![](https://velog.velcdn.com/images/a87380/post/141f83aa-491d-4eb8-a52f-584db113ac02/image.png)

![](https://velog.velcdn.com/images/a87380/post/1dc81987-f08e-4be3-a057-adc77ed5214e/image.png)

## Member Function 추가 (admin.py에서)

![](https://velog.velcdn.com/images/a87380/post/a014ccd8-c0c4-475c-917c-19eca0776cd9/image.png)

## Search_fields 속성 정의

admin내 검색 UI를 통해, DB를 통한 where 쿼리 대상 필드 리스트

![](https://velog.velcdn.com/images/a87380/post/852f6ab6-5054-4363-b93c-6506a452983a/image.png)

![](https://velog.velcdn.com/images/a87380/post/4e2021a5-8af8-4216-a75e-59cb55a17cea/image.png)

## list_filter 속성 정의

지정 필드값으로 필터링 옵션 제공

![](https://velog.velcdn.com/images/a87380/post/5387e24b-775e-4d26-b2e6-cf44fa44c4e5/image.png)

![](https://velog.velcdn.com/images/a87380/post/4bdb5c88-13cf-4247-9608-f4deb4295dc6/image.png)
