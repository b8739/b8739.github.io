---
title: Django Queryset을 통한 간단 검색 구현
author: Jae
categories: [Django]
tags: [django, 인프런 강의, 검색구현]
---

인프런 **_파이썬/장고 웹서비스 개발 완벽 가이드 with 리액트_** 강의를 보고 정리한 내용입니다.

---

각 앱에서 urls.py가 없다면 만들어주고, 프로젝트 urls.py에서 path를 지정해주어야 사용 가능

```python
#(프로젝트 디렉토리)/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("blog/", include("blog.urls")),
    path("instagram/", include("instagram.urls")),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
```

함수 기반으로 view를 생성해주는 과정

```python
#(앱 디렉토리)/urls.py (여기서 앱 이름은 instagram)

from django.shortcuts import render
from .models import Post

# Create your views here.
def post_list(request):
    qs = Post.objects.all()
    q = request.GET.get("q", "")  # 두번째 인자는, 첫번째 인자가 없을 때 대신 반환할 값
    # request.POST
    # request.FILES
    if q:
        qs = qs.filter(
            message__icontains=q
        )  # 검색어가 포함이 되었는지에 대한 조건이 추가가 되고, 이에 대한 새로운 queryset이 반환됨
        # instagram/templates/instagram/post_list.html (templates는 고정이고 그 이후 부분을 아래 두번째 인자에서 지정해준것)
    return render(
        request,
        "instagram/post_list.html",
        {  # 2번째 인자로 '앱이름/원하는이름의html' 을 넘김
            "post_list": qs,  # post_list.html 파일에서 {{post_list}}로 참조하게 됨 (공교롭게 지금 함수랑 이름이 같지만, 중요한건 3번째 인자로 들어간 이 이름)
        },
    )
```

instagram 디렉토리에 수동으로 templates/instagram/post_list.html을 만들어줌 (위에서 지정한 경로대로)

![](https://velog.velcdn.com/images/a87380/post/a5caf7a1-e6af-4eeb-a29f-a19eca26029f/image.png)

post_list.html에는 임시로 다음을 참조해서 화면에 보여주도록 함

```powershell
<!-- post_list.html -->

{% raw %}{{post_list}}{% endraw %}
```

다음과 같이 뜨면 정상 (새로고침해도 해당 url의 template이 없다고 뜬다면 서버를 재시동)

![](https://velog.velcdn.com/images/a87380/post/0aed116d-69cd-4a82-9f27-967e092cc197/image.png)

메세지를 추가하고 새로 고침해도 반영된다.

![](https://velog.velcdn.com/images/a87380/post/200adbdf-50b5-4c61-a5ba-aacc05c50ab6/image.png)

![](https://velog.velcdn.com/images/a87380/post/10fc2711-cb3f-43bd-abf6-34bdedbe944f/image.png)

Style이 너무 없다싶으면 아래처럼 table을 추가한다는식으로 추가해준다.

```html
<!-- post_list.html-->
...
<head>
  <meta charset="utf-8" />
  <!-- 인코딩 지정 -->
  <!-- Get Boostrap CSS  -->
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
    crossorigin="anonymous"
  />
  <title>Instagram/ Post List</title>
</head>
<body>
  <!-- 아래 class에 들어간것은 boostrap class -->
  <table class="table table-bordered table-hover">
    <tbody>
      {% for post in post_list%}
      <tr>
        <td>{{post.message}}</td>
        {% if post.photo %}
        <td>{{post.photo.url}}</td>
        {% endif %}
      </tr>
    </tbody>
  </table>
  {% endfor %} ...
</body>
```

## 검색창 구현

```html
...
<body>
  <form action="" method="get">
    <input type="text" name="q" />
    <input type="submit" value="검색" />
  </form>
  ...
</body>
```

`text` type의 input을 q라는 `이름(name)`으로 받아서 `submit`하면 `action`에 넣은 주소로 `get 방식`으로 보내겠다는 의미

검색이 동작한다.

![](https://velog.velcdn.com/images/a87380/post/6844dac6-1318-417a-a26b-bb4d93129151/image.png)

`검색` 버튼을 누르고 나면, 원래는 검색창이 refresh되는데 남겨둘려면 다음과 같이 하면 된다.

```python
#views.py
...
return render(
        request,
        "instagram/post_list.html",
        {
            "post_list": qs,
            "q": q,  # 이 부분을 추가해줌
        },
    )
```

```html
<form action="" method="get">
  <input type="text" name="q" value="{{q}}" />
  <!-- value 부분을 추가 -->
  <input type="submit" value="검색" />
</form>
```
