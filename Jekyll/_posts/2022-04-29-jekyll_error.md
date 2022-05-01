---
title: Jekyll Theme Chirpy로 바꾸던 중 발생했던 에러
author: Jae
categories: [Jekyll]
tags: [jekyll, error]
---

Jekyll 테마를 한 대여섯번 바꿨었는데, 이런 오류가 난 적은 처음이다.

일단 테마 변경할때마다 기존 블로그 디렉토리에서 포스트만 긁어와서 넣어주고, config.yml만 적당히 수정해주면 됐었는데, 이번에는 push하고 블로그를 들어가보려고 하면 아래 사진의 문구만 떴다.

![](https://velog.velcdn.com/images/a87380/post/8c1cb5ef-3f72-4e8d-a531-e27326dba410/image.png)

Commit에 들어가보면 뭔가 오류가 나면, 아래처럼 commit 옆에 ❌  가 생기고, 최상단 commit처럼 문제가 없다면 오른쪽에 ✅  가 뜬다.

![](https://velog.velcdn.com/images/a87380/post/cc24668c-41e7-4eea-9647-04f999d2167f/image.png)

어떤 오류인지 log를 확인해보려고 한다면 x를 클릭해서, 오류가 난 부분에 Details를 클릭해보면 된다.

![](https://velog.velcdn.com/images/a87380/post/9b026cbc-6292-4e8e-9d76-ada6371b7437/image.png)

음... 우선 아래 log가 처음 발생했던 오류인데, 이 오류는 원인을 못찾았는데, 최종적으로는 어떻게 해결이 됐다.

![](https://velog.velcdn.com/images/a87380/post/1760c441-ecf1-492a-bf43-0bc37d24beb7/image.png)

구글링을 하다가 비슷한 에러를 경험했던 블로거를 찾았다.

[[Jekyll] Chirpy 테마 적용하는 방법 및 에러](https://blog.kimzinu.com/posts/jekyll-4/#fn:fn-nth-2)

여기서는 bash tools/init.sh를 먼저 해주라고 한다. (근데 테마 제작자 github 주소 가보니 ReadMe 설명에 별 내용이 없었는데, 어디서 다들 이 내용을 찾은지는 모르겠다.)

아무튼 그래서 bundle도 처음에 했었지만 다시 해주고, bash tools/init.sh를 해주고 나니 gitignore 내용도 좀 바뀌고, Gemfile.lock도 다시 생겼다.

Gemfile.lock이 리포에 올라가게 되면 오류가 생긴다고 해서, gitignore에 추가해주었다.

그러고 나니 위에 발생했던 오류는 사라지고 새로운 오류가 났는데, 이건 .md 파일 (내 블로그 포스트들)에서 난 오류였다. U+ACC4 이런 용어가 있는거보니 유추할수있는바로는 어떤 정규표현식 문법에 어긋난 용어가 들어가서 그런 것 같았다.

![](https://velog.velcdn.com/images/a87380/post/7f0dcc9e-30da-45c6-b3e7-9d95e4f8b3d4/image.png)

의아한점은 이전 지킬 테마에서는 다 문제 없이 작동했었다는 점이다.

이것과 관련해서 서칭을 해보니 아래 블로그를 찾았는데, 이분은 꺽쇠 부분에 \를 넣어주었다.

[git action 자동 배포 에러 해결기 (ERROR: Invalid first code point of tag name U+C804.) | Seob'log](https://seobie.github.io/blog/git-action-struggles)

‘< >’ 이게 문법적으로 충돌이 생겨서 backslash로 취소효과를 주는 것 같다.

log에서 오류가 발생한 파일을 찾아서 단어 탐색으로 꺽쇠를 찾아주고 '< >’ 부분에 나도 backslash를 추가해주니 오류가 나지 않고 정상 빌드되었다.

그리고 마지막으로 github repository → Setting → Pages → Source에 가서 기본 브랜치를 gh-pages로 변경해주어야 한다. (정상 빌드되었다면 gh-pages가 자동으로 생겼을 것이다.)

여기까지 해주면 링크를 들어가면 블로그가 정상적으로업데이트되어있다.
