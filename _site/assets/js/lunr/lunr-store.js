var store = [{
        "title": "머신러닝 웹 개발 프로젝트 소개",
        "excerpt":"프로젝트 참여 배경 현재 내가 인턴으로 소속된 R&amp;D 회사에서 머신러닝 웹 개발을 맡게 되었다. 설립된 지 2-3년 밖에 안 된 스타트업 규모의 회사이고, 오로지 Data Science 인력으로만 이루어진 회사이기 때문에, 사수나 동기 없이 대표님과 1대1로 커뮤니케이션을 해가면서 프로젝트를 진행하고 있다. 개발에 필요한 내용을 독학하는 것에 있어서 약간의 어려운 부분이 있지만...","categories": ["project_ml"],
        "tags": ["Machine Learning","웹 개발","Flask"],
        "url": "https://b8739.github.io/project_ml/about_project/",
        "teaser": null
      },{
        "title": "Markdown 문법 정리",
        "excerpt":"Header (헤더) 사용법 # h1 ## h2 ### h3 #### h4 ##### h5 ###### h6 결과 h1 h2 h3 h4 h5 h6 Italic (기울여 쓰기) 사용법 *안녕하세요* OR _안녕하세요_ 결과 안녕하세요 Bold (강조) 사용법 **안녕하세요** OR __안녕하세요__ 결과 안녕하세요 인용 (Blockquote) 사용법 &gt;&gt;안녕하세요 &gt;&gt;&gt;안녕하세요 &gt;&gt;&gt;&gt;안녕하세요 결과 안녕하세요 안녕하세요 안녕하세요 목록...","categories": ["markdown"],
        "tags": ["Markdown","Github","Git"],
        "url": "https://b8739.github.io/markdown/about-markdown/",
        "teaser": null
      },{
        "title": "[노트] 한시간만에 끝내는 Vue.js 입문 #1 - 환경세팅",
        "excerpt":"개발자의 품격 한시간만에 끝내는 Vue.js 입문 (유튜브 링크) Vue.js 소개 Vue.js는 웹 프론트엔드 프레임워크이다. 컴포넌트 기반의 SPA를 구축할 수 있게 해주는 프레임 워크 컴포넌트 (Component) - 웹을 구성하는 로고, 메뉴바, 버튼, 모달창 등 웹페이지 내의 다양한 UI 요소 - 재사용 가능하도록 구조화 한 것 SPA (Single Page Application) - 단일...","categories": ["vue"],
        "tags": ["Vue","Vue.js","Front-End"],
        "url": "https://b8739.github.io/vue/vue-studynote-1/",
        "teaser": null
      },{
        "title": "[노트] 한시간만에 끝내는 Vue.js 입문 #2 - 라우팅 세팅",
        "excerpt":"개발자의 품격 한시간만에 끝내는 Vue.js 입문 (유튜브 링크) layout/components/~.vue: 정적 components views/ ~.vue(ex. About.vue, Home.vue) - 동적 components App.vue: components들로 구성되어 최종적으로 보여질 페이지 main.js - 어떤 거를 쓰겠다고 선언해두는 파일로 이해 router.js - 라우팅 관리 파일 Components 생성 Bootstrap Vue에서 Nav코드를 복사해서 Header.vue에 복사 Components 삽입 및 선언 App.vue에...","categories": ["vue"],
        "tags": ["Vue","Vue.js","Front-End"],
        "url": "https://b8739.github.io/vue/vue-studynote-2/",
        "teaser": null
      },{
        "title": "[노트] 한시간만에 끝내는 Vue.js 입문 #3 - Data Binding",
        "excerpt":"개발자의 품격 한시간만에 끝내는 Vue.js 입문 (유튜브 링크) 대략적인 Vue Lifecycle Diagram을 이해 출처: Vue 공식 Document 데이터 바인딩 결과 양방향 데이터 바인딩 (two way) get버튼을 부르면 console에서 input값을 띄워주고, set버튼을 누르면 지정된 값으로 input값을 바꿔주도록 코드를 작성 결과 처음에 input창 안에는 abc라고 적혀있고, get을 눌러서 ‘abc’값이 console창의 띄워지고, set을...","categories": ["vue"],
        "tags": ["Vue","Vue.js","Front-End"],
        "url": "https://b8739.github.io/vue/vue-studynote-3/",
        "teaser": null
      },{
        "title": "Vue 기본 디렉토리 구조",
        "excerpt":"CLI로 설치한 Vue 디렉토리이다. 가장 자주 사용하는 파일들은 src에 밀집되어 있다. 내부를 살펴보자면 assets 폴더에는 주로 사용하는 이미지 파일이나 css파일이 들어간다. components 폴더에는 페이지를 구성하는 단일 컴포넌트들이 들어간다. router파일에는 라우팅을 관리하는 index.js (or router.js) 파일이 들어간다. Views 폴더에는 앞서 설명한 components 파일속의 컴포넌트로 구성된 ‘page’가 들어간다. (쉽게 설명하면, component 폴더의...","categories": ["vue"],
        "tags": ["Vue","Vue 디렉토리","Vue 구조"],
        "url": "https://b8739.github.io/vue/vue-directory_structure/",
        "teaser": null
      },{
        "title": "Vue 기본 스크립트 구조",
        "excerpt":"회사에서 머신러닝 웹 개발 프로젝트로 Vue를 사용하게 되면서 꽤 많이 익숙해졌다. 문법을 잘못 입력하면 빨간줄이 그어지기 때문에 그때마다 어찌저찌 매번 에러를 수정하기는 했는데, 자잘한 문법들이 헷갈리기 때문에 한번 정리하는 시간을 가져보고자 한다. 가장 기본적으로, Vue 컴포넌트 파일은 template 태그로 시작한다. template 태그를 만들어주고 사이에 div를 넣어주면 된다. (이 div 내부에는...","categories": ["vue"],
        "tags": ["Vue","Vue 스크립트","Vue 구조"],
        "url": "https://b8739.github.io/vue/vue-v-script/",
        "teaser": null
      }]
