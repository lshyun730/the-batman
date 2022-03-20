# the-batman
<br>

### ✔ Project Schedule
2021.01 - 2021.02
<br><br>

### ✔ Project Outline
영화 The Batmen의 소개 사이트이다 /  映画The Batmenの紹介サイトだ。<br>
Click [demo](https://lshyun730.github.io/the-batman/)
<br><br>

### ✔ Technology Stack
HTML, CSS, JQuery
<br><br>

### ✔ Reference Site
#### Design Reference
- [terminator](https://terminator.ag.digital/) (page layout and interaction)
- [celltrionhealthcare](https://www.celltrionhealthcare.com/ko-kr/home/main#About%20Us) (full-page slide)
- [lionsgat](https://www.lionsgate.com/movies/kin)
- [hydra](http://www.hydra1000.com/kor/main/main.asp)

<br>

#### Code Reference
- [gb-afterlife](https://gb-afterlife.webflow.io/) (loading page)
- [textillate.js](https://textillate.js.org/)


<br><br>
### ✔ Specificity
- fullpage.js 를 이용하여 인터렉티브한 웹사이트를 만들었다 / fullpage.jsを利用して、よりインタラクティブなウェブサイトを作った
``` javascript
var fullpage = $("#fullpage").fullpage({
        css3: true,
        autoScroll: true,
        scrollHorizontally: true,
        navigation: true,
        autoScrolling: true,
        navigationTooltips: ["HOME", "STORY", "CAST", "PHOTO", "VIDEOS"],
        anchors: ['HOME', 'STORY', 'CAST', 'PHOTO', 'VIDEOS'],
        showActiveTooltip: true,
        scrollOverflow: true,
        onLeave: function (origin, destination, direction) {
            var leavingSection = this;
            if (destination.index == 0) {
                $(".header_inner,#fp-nav").removeClass("h_right")
            } else if (destination.index == 1) {
                $(".s2").find(".ani").addClass("animated")
                $(".header_inner,#fp-nav").removeClass("h_right")
            } else if (destination.index == 2) {
                $(".s3").find(".ani").addClass("animated")
                $(".header_inner,#fp-nav").removeClass("h_right")
            } else if (destination.index == 3) {
                $(".s4").find(".ani").addClass("animated");
                $(".header_inner,#fp-nav").addClass("h_right")
            } else if (destination.index == 4) {
                $(".s5").find(".ani").addClass("animated")
                $(".header_inner,#fp-nav").addClass("h_right")
            }
        },
    });

```
- 자연스러운 css 인터렉션이 가능하도록 노력하였다
<br><br>

### ✔ Areas for Improvement
- 더 다양한 해상도에 적용가능 하도록 미디어쿼리를 수정 / より多様な解像度に適用できるようメディアクエリーを修正

<br><br>

