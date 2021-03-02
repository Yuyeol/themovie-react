# [개인 프로젝트] 무비포스터 뷰어

[[프로젝트 열기]](http://Yuyeol.github.io/themovie-react)

### 개요
* `TMDB API`를 활용하여 테마 및 카테고리별 TV Show와 Movie 정보를 제공
  
### 활용기술
* React : Hooks, Router
* CSS : Styled Components
* Axios

### 주요기능 
* Home
  - 슬라이드 배너
  - 테마별 리스트 : Movie, Show 종합
* Movie
  - 테마별 리스트 : Top Rated / Now Playing / Popular / Upcomming
* Show
  - 테마별 리스트 : Top Rated / Airing Today / Popular / Popular
* Search
  - 제목 검색기능

* Media Query : PC, 모바일에서 보기 쉽게 반응형웹 구현

### 상세설명

* 슬라이드 배너  
![slide banner](https://user-images.githubusercontent.com/52055504/109618141-8c007980-7b7a-11eb-9085-d99aa4bb05df.gif)
  - React Slick 라이브러리 사용
  - 일정 초단위로 자동 슬라이드
  - 클릭 시 해당 Movie 또는 Show Detail로 이동
  - 좌측 하단 카테고리(Movie / Show) 라디오 버튼

* 테마별 리스트  
![Theme List](https://user-images.githubusercontent.com/52055504/109620078-d5ea5f00-7b7c-11eb-8fd3-eb8f9d5f31f2.jpg)
  - Grid 적용
  - 최대 포스터 갯수 20개
  - 포스터 Hover 시 Rating 정보 노출
  - width 변화에 따라 행과 열 자동 정렬

* 제목 검색기능  
![search](https://user-images.githubusercontent.com/52055504/109622158-26fb5280-7b7f-11eb-9ed3-cdfe2e36c7dc.gif)
  - Movie와 Show Section을 구분하여 검색
  - 클릭 시 해당 Movie 또는 Show Detail로 이동

* Media Query  
![mobile home](https://user-images.githubusercontent.com/52055504/109631547-66c73780-7b89-11eb-928d-db2cfc8092c0.gif)  
[홈 적용]  
![mobile detail](https://user-images.githubusercontent.com/52055504/109631662-85c5c980-7b89-11eb-8973-84a6cea14c44.gif)  
[디테일 적용]
  - 헤더 : 지정 길이 이하 width일 때 Menu 버튼으로 Header 아이템 숨김
  - 슬라이드배너 : width 길이에 따라 슬라이드당 포스터 갯수 변화





