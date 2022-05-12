---
title: Jekyll "The following destination is shared by multiple files."
author: Jae
categories: [Jekyll]
tags: [jekyll, error]
---

만약에 tags에 앞글자를 대문자로 Django를 넣으면 다음과 같은 충돌이 생김

```powershell
Generating...
          Conflict: The following destination is shared by multiple files.
                    The written file may end up with unexpected contents.
                    /Users/jeongjaeho/Downloads/gitblog/_site/tags/django/index.html
                     - tags/django/index.html
                     - tags/django/index.html
```

해결방법: django (소문자)로 변경
