import styled from 'styled-components'
export const CreatePostStyles = styled.div`
.content-type-wrapper {
    margin: auto;
    height: 650px;
    width: 1400px;
    background: #BDBDBD;
    box-shadow: 20px 20px 30px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.content-type-container {
    height: 80%;
    width: 80%;
    margin: auto;
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    overflow: hidden;
}

.content-type {
    background: #D9D9D9;
    width: 20%;
    height: 190px;
    border-radius: 8px;
    justify-content: center;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    transition: .3s ease;
    font-family: 'Signika Negative', sans-serif;
    font-size: 18px;
}

.content-type:hover {
    background: #FFF9D7;
    transition: .3s ease;
}

.text-content-type, .photo-content-type, .video-content-type {
    font-family: 'Signika Negative',sans-serif;
    width: 100%;
    height: 80%;
}

.text-content-type p {
    font-family: 'Signika Negative',sans-serif;
    font-size: 18px;
}

.text-content-title {
    font-family: 'Signika Negative',sans-serif;
    font-size: 14px;
    width: calc(100% - 20px);
    padding: 0 10px;
    height: 40px;
    border-radius: 10px;
    border: none;
    margin-bottom: 20px;
}

.text-content-value {
    font-family: 'Signika Negative',sans-serif;
    font-size: 14px;
    width: calc(100% - 20px);
    padding: 10px 10px;
    height: 40vh;
    border-radius: 10px;
    border: none;
}

.pictures-upload {
    max-height: 160px;
    width: 20%;
    flex-direction: column;
    align-items: center;
}

.photo-content-type-title {
    font-size: 18px;
    margin-bottom: 10px;
}

.video-content-type-title {
    font-size: 18px;
    margin-bottom: 10px;
}

.content-type-slider {
    width: 90%;
    height: 100%;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    transition: .9s ease;
}

.content-type-slide {
    height: 100%;
    width: 100%;
    scroll-snap-align: start;
}

.next-button {
    font-family: 'Signika Negative',sans-serif;
    font-size: 18px;
    padding: 8px 30px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
}

.content-type-slider-switches {
    width: 10%;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
    justify-content: center;
    align-items: center;
}

.content-type-slider-switches button {
    width: 80px;
    padding: 10px 0;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: .4s ease;
}

.content-type-slider-switches button:hover {
    transition: .4s ease;
    background: #BDB4B4;
}

.content-type-slider-wrapper {
    width: 100%;
    height: 100%;
}

.cancel-button {
    font-family: 'Signika Negative',sans-serif;
    font-size: 18px;
    padding: 8px 30px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    background: #F32828;
}

.content-slider-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
}

.previewTitle {
    font-family: 'Signika Negative',sans-serif;
    font-weight: 600;
    font-size: 20px;
}

.previewBody {
    font-family: 'Signika Negative',sans-serif;
    font-size: 18px;
}

.previewCard {
    height: 300px;
    width: 200px;
    border: solid black 2px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content-type-slidr {
    display: flex;
}

.content-type-slider-wrappe {
    width: 100%;
}

.content-type-slidr {
  height: 490px;
    overflow: scroll;
    width: 100%;
    flex-wrap: wrap;
    gap: 10px;
}

.photo-card-img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.preview-video {
    height: 100%;
    width: 100%;
    object-fit: cover;
}





.ag-format-container {
    width: 1142px;
    margin: 0 auto;
  }
  
  
  body {
    background-color: #000;
  }
  .ag-courses_box {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    justify-content: center;
    padding: 50px 0;
  }
  .ag-courses_item {
    -ms-flex-preferred-size: calc(33.33333% - 30px);
  
    margin: 0 15px 30px;
  
    overflow: hidden;
  
    border-radius: 28px;
  }
  .ag-courses-item_link {
    border: none;
    cursor: pointer;
    display: block;
    padding: 30px 20px;
    background-color: #121212;
  
    overflow: hidden;
  
    position: relative;
  }
  .ag-courses-item_link:hover,
  .ag-courses-item_link:hover .ag-courses-item_date {
    text-decoration: none;
    color: #FFF;
  }
  .ag-courses-item_link:hover .ag-courses-item_bg {
    -webkit-transform: scale(10);
    -ms-transform: scale(10);
    transform: scale(10);
  }
  .ag-courses-item_title {
    min-height: 87px;
    margin: 0 0 25px;
  
    overflow: hidden;
  
    font-weight: bold;
    font-size: 30px;
    color: #FFF;
  
    z-index: 2;
    position: relative;
  }
  .ag-courses-item_date-box {
    font-size: 18px;
    color: #FFF;
  
    z-index: 2;
    position: relative;
  }
  .ag-courses-item_date {
    font-weight: bold;
    color: #f9b234;
  
    -webkit-transition: color .5s ease;
    -o-transition: color .5s ease;
    transition: color .5s ease
  }
  .ag-courses-item_bg {
    height: 128px;
    width: 128px;
    background-color: #f9b234;
  
    z-index: 1;
    position: absolute;
    top: -75px;
    right: -75px;
  
    border-radius: 50%;
  
    -webkit-transition: all .5s ease;
    -o-transition: all .5s ease;
    transition: all .5s ease;
  }
  .ag-courses_item:nth-child(2n) .ag-courses-item_bg {
    background-color: #3ecd5e;
  }
  .ag-courses_item:nth-child(3n) .ag-courses-item_bg {
    background-color: #e44002;
  }
  .ag-courses_item:nth-child(4n) .ag-courses-item_bg {
    background-color: #952aff;
  }
  .ag-courses_item:nth-child(5n) .ag-courses-item_bg {
    background-color: #cd3e94;
  }
  .ag-courses_item:nth-child(6n) .ag-courses-item_bg {
    background-color: #4c49ea;
  }
  
  
  
  @media only screen and (max-width: 979px) {
    .ag-courses_item {
      -ms-flex-preferred-size: calc(50% - 30px);
      flex-basis: calc(50% - 30px);
    }
    .ag-courses-item_title {
      font-size: 24px;
    }
  }
  
  @media only screen and (max-width: 767px) {
    .ag-format-container {
      width: 96%;
    }
  
  }
  @media only screen and (max-width: 639px) {
    .ag-courses_item {
      -ms-flex-preferred-size: 100%;
      flex-basis: 100%;
    }
    .ag-courses-item_title {
      min-height: 72px;
      line-height: 1;
  
      font-size: 24px;
    }
    .ag-courses-item_link {
      padding: 22px 40px;
    }
    .ag-courses-item_date-box {
      font-size: 16px;
    }
  }

  .content-type-contain {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 100%;
  }

  .or-separator {
    min-height: 87px;
    margin: 0 0 25px;
    overflow: hidden;
    font-weight: bold;
    font-size: 30px;
    color: #121212;
    z-index: 2;
    align-self: center;
    position: relative;
  }





  article {
    --img-scale: 1.001;
    --title-color: black;
    --link-icon-translate: -20px;
    --link-icon-opacity: 0;
    position: relative;
    border-radius: 16px;
    box-shadow: none;
    background: #fff;
    transform-origin: center;
    transition: all 0.4s ease-in-out;
    overflow: hidden;
  }

  
  /* basic article elements styling */
  article h2 {
    margin: 0 0 18px 0;
    font-family: "Bebas Neue", cursive;
    font-size: 1.9rem;
    letter-spacing: 0.06em;
    color: var(--title-color);
    transition: color 0.3s ease-out;
  }
  
  figure {
    margin: 0;
    padding: 0;
    aspect-ratio: 16 / 9;
    overflow: hidden;
  }
  
  article img {
    max-width: 100%;
    transform-origin: center;
    transform: scale(var(--img-scale));
    transition: transform 0.4s ease-in-out;
  }
  
  .article-body {
    padding: 24px;
    display: flex;
    justify-content: space-between;
  }
  
  article a {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    color: #28666e;
  }
  
  article a:focus {
    outline: 1px dotted #28666e;
  }
  
  article a .icon {
    min-width: 24px;
    width: 24px;
    height: 24px;
    margin-left: 5px;
    transform: translateX(var(--link-icon-translate));
    opacity: var(--link-icon-opacity);
    transition: all 0.3s;
  }
  
  /* using the has() relational pseudo selector to update our custom properties */
  article:has(:hover, :focus) {
    --img-scale: 1.1;
    --title-color: #28666e;
    --link-icon-translate: 0;
    --link-icon-opacity: 1;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 48px 0;
    font-family: "Figtree", sans-serif;
    font-size: 1.2rem;
    line-height: 1.6rem;
    background-image: linear-gradient(45deg, #7c9885, #b5b682);
    min-height: 100vh;
  }
  
  .articles {
    display: grid;
    max-width: 1200px;
    margin-inline: auto;
    padding-inline: 24px;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 24px;
  }
  
  @media screen and (max-width: 960px) {
    article {
      container: card/inline-size;
    }
    .article-body p {
      display: none;
    }
  }
  
  @container card (min-width: 380px) {
    .article-wrapper {
      display: grid;
      grid-template-columns: 100px 1fr;
      gap: 16px;
    }
    .article-body {
      padding-left: 0;
    }
    figure {
      width: 100%;
      height: 100%;
      overflow: hidden;
    }
    figure img {
      height: 100%;
      aspect-ratio: 1;
      object-fit: cover;
    }
  }
  
  .sr-only:not(:focus):not(:active) {
    clip: rect(0 0 0 0); 
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap; 
    width: 1px;
  }







  .file-drop-area {
    width: 100%;
    height: 80%;
    z-index: 1;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 6px;
    width: 50%;
    margin: auto;
    align-items: center;
    justify-content: center;
    width: 450px;
    max-width: 100%;
    padding: 25px;
    border: 2px dashed #FC6E74;
    border-radius: 3px;
    transition: 0.2s;
  }

  .file-drop-are .is-active {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  .fake-btn {
    padding: 10px 25px;
    font-size: 14px;
    font-weight: 300;
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s;
  }
  
  .file-msg {
    font-size: 18px;
    font-weight: 300;
    color: #fff;
  }
  
  .file-input {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
    opacity: 0;
  }

  .file-input:focus {
    outline: none;
  }

  h6 {
    font-size: 20px;
    font-weight: 300;
    color: #fff;
  }

  .file-select-status {
    height: 128px;
    width: 128px;
    background-color: #b1bce6;
    z-index: 1;
    position: absolute;
    top: -75px;
    right: -75px;
    border-radius: 50%;
    -webkit-transition: all .5s ease;
    -o-transition: all .5s ease;
    -webkit-transition: all .5s ease;
    transition: all .5s ease;
    z-index: -1;
  }

  .pink {
    background-color: #dfb1e6;
  }

  .vanila {
    background-color: #FFF9D7;
  }













  :root{
    /* color type A */
    --line_color : #555555 ;
    --back_color : #FFECF6  ;

    /* color type B */
    /* --line_color : #1b1919 ;
    --back_color : #E9ECFF  ; */

    /* color type C */
    /* --line_color : #00135C ;
    --back_color : #DEFFFA  ; */
}

.button{
    cursor: pointer;
    border: none;
    background: none;
    position : relative ;
    z-index : 0 ;
    width : 240px ;
    height : 56px ;
    text-decoration : none ;
    font-size : 14px ; 
    font-weight : bold ;
    color : #555555 ;
    letter-spacing : 2px ;
    transition : all .3s ease ;
}
.button__text{
    display : flex ;
    justify-content : center ;
    align-items : center ;
    width : 100% ;
    height : 100% ;
}
.button::before,
.button::after,
.button__text::before,
.button__text::after{
    content : '' ;
    position : absolute ;
    height : 3px ;
    border-radius : 2px ;
    background : #555555;
    transition : all .5s ease ;
}
.button::before{
    top : 0 ;
    left : 54px ;
    width : calc( 100% - 56px * 2 - 16px ) ;
}
.button::after{
    top : 0 ;
    right : 54px ;
    width : 8px ;
}
.button__text::before{
    bottom : 0 ;
    right : 54px ;
    width : calc( 100% - 56px * 2 - 16px ) ;
}
.button__text::after{
    bottom : 0 ;
    left : 54px ;
    width : 8px ;
}
.button__line{
    position : absolute ;
    top : 0 ;
    width : 56px ;
    height : 100% ;
    overflow : hidden ;
}
.button__line::before{
    content : '' ;
    position : absolute ;
    top : 0 ;
    width : 150% ;
    height : 100% ;
    box-sizing : border-box ;
    border-radius : 300px ;
    border : solid 3px #555555 ;
}
.button__line:nth-child(1),
.button__line:nth-child(1)::before{
    left : 0 ;
}
.button__line:nth-child(2),
.button__line:nth-child(2)::before{
    right : 0 ;
}
.button:hover{
    letter-spacing : 6px ;
}
.button:hover::before,
.button:hover .button__text::before{
    width : 8px ;
}
.button:hover::after,
.button:hover .button__text::after{
    width : calc( 100% - 56px * 2 - 16px ) ;
}
.button__drow1,
.button__drow2{
    position : absolute ;
    z-index : -1 ;
    border-radius : 16px ;
    transform-origin : 16px 16px ;
}
.button__drow1{
    top : -16px ;
    left : 40px ;
    width : 32px ;
    height : 0;
    transform : rotate( 30deg ) ;
}
.button__drow2{
    top : 44px ;
    left : 77px ;
    width : 32px ;
    height : 0 ;
    transform : rotate(-127deg ) ;
}
.button__drow1::before,
.button__drow1::after,
.button__drow2::before,
.button__drow2::after{
    content : '' ;
    position : absolute ;
}
.button__drow1::before{
    bottom : 0 ;
    left : 0 ;
    width : 0 ;
    height : 32px ;
    border-radius : 16px ;
    transform-origin : 16px 16px ;
    transform : rotate( -60deg ) ;
}
.button__drow1::after{
    top : -10px ;
    left : 45px ;
    width : 0 ;
    height : 32px ;
    border-radius : 16px ;
    transform-origin : 16px 16px ;
    transform : rotate( 69deg ) ;
}
.button__drow2::before{
    bottom : 0 ;
    left : 0 ;
    width : 0 ;
    height : 32px ;
    border-radius : 16px ;
    transform-origin : 16px 16px ;
    transform : rotate( -146deg ) ;
}
.button__drow2::after{
    bottom : 26px ;
    left : -40px ;
    width : 0 ;
    height : 32px ;
    border-radius : 16px ;
    transform-origin : 16px 16px ;
    transform : rotate( -262deg ) ;
}
.button__drow1,
.button__drow1::before,
.button__drow1::after,
.button__drow2,
.button__drow2::before,
.button__drow2::after{
    background : #FFECF6 ;
}
.button:hover .button__drow1{
    animation : drow1 ease-in .06s ;
    animation-fill-mode : forwards ;
}
.button:hover .button__drow1::before{
    animation : drow2 linear .08s .06s ;
    animation-fill-mode : forwards ;
}
.button:hover .button__drow1::after{
    animation : drow3 linear .03s .14s ;
    animation-fill-mode : forwards ;
}
.button:hover .button__drow2{
    animation : drow4 linear .06s .2s ;
    animation-fill-mode : forwards ;
}
.button:hover .button__drow2::before{
    animation : drow3 linear .03s .26s ;
    animation-fill-mode : forwards ;
}
.button:hover .button__drow2::after{
    animation : drow5 linear .06s .32s ;
    animation-fill-mode : forwards ;
}
@keyframes drow1{
    0%   { height : 0 ; }
    100% { height : 100px ; }
}
@keyframes drow2{
    0%   { width : 0 ; opacity : 0 ;}
    10%  { opacity : 0 ;}
    11%  { opacity : 1 ;}
    100% { width : 120px ; }
}
@keyframes drow3{
    0%   { width : 0 ; }
    100% { width : 80px ; }
}
@keyframes drow4{
    0%   { height : 0 ; }
    100% { height : 120px ; }
}
@keyframes drow5{
    0%   { width : 0 ; }
    100% { width : 124px ; }
}


.container{
    width : 100% ;
    display : flex ;
    flex-direction : column ;
    justify-content : center ;
    align-items : center ;
}

.tag-add {
  padding: 7px 10px;
  border: solid white 2px;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  font-family: 'Signika Negative', sans-serif;
  background: #212121;
}

.tag-add-btn {
  font-family: 'Signika Negative', sans-serif;
  cursor: pointer;
  padding: 8px 12px;
    background: #FFF9D7;
    border: none;
    font-size: 16px;
    font-weight: 600;
    border-radius: 4px;
}

.tag-add-container {
  display: flex;
    gap: 10px;
}

.back-btn {
  margin-bottom: 10px;
  border: none;
  padding: 6px 10px;
  font-size: 18px;
  position: relative;
  background: transparent;
  color: black;
  font-weight: 600;
  text-transform: uppercase;
  border: 3px solid #ff4040;
  cursor: pointer;
  -webkit-transition: all 0.7s;
  transition: all 0.7s;
  overflow: hidden;
  border-radius: 100px;
}

.back-btn:hover {
  color: #ff4040;
}
.back-btn span {
  transition: all 0.7s;
  z-index: -1;
}

.back-btn .first {
  content: "";
  position: absolute;
  right: 100%;
  top: 0;
  width: 25%;
  height: 100%;
  background: black;
}

.back-btn:hover .first {
  top: 0;
  right: 0;
}
.back-btn .second {
  content: "";
  position: absolute;
  left: 25%;
  top: -100%;
  height: 100%;
  width: 25%;
  background: black;
}

.back-btn:hover .second {
  top: 0;
  left: 50%;
}

.back-btn .third {
  content: "";
  position: absolute;
  left: 50%;
  height: 100%;
  top: 100%;
  width: 25%;
  background: #ffa500;
}

.back-btn:hover .third {
  top: 0;
  left: 25%;
}

.back-btn .fourth {
  content: "";
  position: absolute;
  left: 100%;
  top: 0;
  height: 100%;
  width: 25%;
  background: #ffa500;
}

.back-btn:hover .fourth {
  top: 0;
  left: 0;
}

.tag-slide {
  background: #212121;
  color: white;
  padding: 10px;
  border-radius: 6px;
  flex-direction: column;
}

.tag-item {
  font-family: 'Signika Negative',sans-serif;
    font-size: 17px;
    display: flex;
    gap: 4px;
}

.delete-tag {
  padding: 2px 10px;
  border: none;
  border-radius: 2px;
  font-weight: bold;
  cursor: pointer;
}

`