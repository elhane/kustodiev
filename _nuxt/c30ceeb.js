(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{232:function(t,e,n){"use strict";n.r(e);var r=new class{constructor(){this.attached=!1,this.loaded=!1,this.error=!1,this.stack=[]}attach(){return new Promise((t,e)=>{if(!this.attached){const script=document.createElement("script");script.setAttribute("src","https://yastatic.net/share2/share.js"),script.setAttribute("async",""),document.head.appendChild(script),script.onload=()=>{t(),this.loaded=!0,this.stack.forEach(t=>{t[0]()}),this.stack=[]},script.onerror=()=>{e(),this.loaded=!0,this.error=!0,this.stack.forEach(t=>{t[1]()}),this.stack=[]},this.attached=!0}this.error&&e(),this.loaded?t():this.stack.push([t,e])})}},o={components:{YandexShare:{name:"YandexShare",props:{services:{type:Array,required:!0},counter:{type:Boolean,default:!1},url:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},image:{type:String,default:void 0},contentByService:{type:Object,default:()=>({})},vertical:{type:Boolean,default:!1},small:{type:Boolean,default:!1},lang:{type:String,default:"ru"},limit:{type:Number,default:void 0},bare:{type:Boolean,default:!1},copy:{type:String,default:"last"},popupTop:{type:Boolean,default:!1},popupOuter:{type:Boolean,default:!1}},mounted(){r.attach().then(()=>{window.Ya.share2(this.$el,{content:{url:this.url||window.location.href,title:this.title||document.title,description:this.description,image:this.image},contentByService:this.contentByService,theme:{bare:this.bare,copy:this.copy,counter:this.counter,direction:this.vertical?"vertical":"horizontal",lang:this.lang,limit:this.limit,popupDirection:this.popupTop?"top":"bottom",popupPosition:this.popupOuter?"outer":"inner",services:this.services.join(","),size:this.small?"s":"m"},hooks:{onready:()=>{this.$emit("ready")},onshare:t=>{this.$emit("share",t)}}})})},render:t=>t("div")}}},l=n(17),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("YandexShare",{staticClass:"social",attrs:{"data-curtain":"","data-size":"l","data-color-scheme":"whiteblack",services:["vkontakte","twitter","facebook"]}})],1)}),[],!1,null,null,null);e.default=component.exports},325:function(t,e,n){var content=n(366);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("0c5c8315",content,!0,{sourceMap:!1})},326:function(t,e,n){var content=n(368);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("1d542f95",content,!0,{sourceMap:!1})},327:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},328:function(t,e,n){var content=n(370);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("66ac5442",content,!0,{sourceMap:!1})},329:function(t,e,n){var content=n(372);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("004ce63f",content,!0,{sourceMap:!1})},330:function(t,e,n){var content=n(374);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("5597e4a2",content,!0,{sourceMap:!1})},331:function(t,e,n){var content=n(376);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("87e92622",content,!0,{sourceMap:!1})},334:function(t,e,n){"use strict";n.r(e);var r=n(231),o=n(342),l=n(233),c={components:{Header:r.default,Intro:o.default,AffinageLink:l.default}},d=(n(367),n(17)),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"first-screen"},[e("div",{staticClass:"first-screen__image-wrapper"}),this._v(" "),e("div",{staticClass:"first-screen__inner"},[e("Header"),this._v(" "),e("Intro"),this._v(" "),e("AffinageLink")],1)])}),[],!1,null,"f8473d60",null);e.default=component.exports;installComponents(component,{Header:n(231).default,Intro:n(342).default,AffinageLink:n(233).default})},335:function(t,e,n){"use strict";n.r(e);n(12);var r={components:{Socials:n(232).default},data:function(){return{facts:{},readMore:!1}},mounted:function(){var t=this;fetch("https://api.npoint.io/89f2d4712a74200e70b4").then((function(t){return t.json()})).then((function(e){t.facts=e}))}},o=(n(369),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container biography section",attrs:{id:"biography"}},[t._m(0),t._v(" "),n("div",{staticClass:"biography__facts-list"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t.readMore?n("div",[n("transition-group",{attrs:{tag:"div",name:"slide",appear:""}},t._l(t.facts,(function(e){return n("div",{key:e.id,staticClass:"biography__fact"},[n("span",{staticClass:"biography__fact-year"},[t._v(t._s(e.year))]),t._v(" "),n("p",{staticClass:"biography__fact-text"},[t._v(t._s(e.text))])])})),0)],1):t._e()]),t._v(" "),n("div",{staticClass:"biography__bottom section__bottom"},[n("Socials"),t._v(" "),n("button",{staticClass:"section__button",on:{click:function(e){t.readMore=!t.readMore}}},[n("span",[t._v(t._s(t.readMore?"cкрыть":"читать больше"))]),t._v(" "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"121",height:"15"}},[n("path",{attrs:{fill:"#202020",d:"M120.7,7.3l-6.4-6.4c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.7,4.7H0v2h117.6l-4.7,4.7c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l6.4-6.4C121.1,8.3,121.1,7.7,120.7,7.3z"}})])])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"biography__top section__top"},[e("h2",{staticClass:"biography__title section__title"},[this._v("биография")]),this._v(" "),e("p",{staticClass:"biography__description"},[this._v("\n      Борис Кустодиев родился 7 марта 1878 года в Астрахани. Отца,\n      преподавателя духовной семинарии, не стало, когда мальчику было чуть\n      больше года. Мать осталась вдовой в 25 лет и содержала четверых детей\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"biography__fact"},[e("span",{staticClass:"biography__fact-year"},[this._v("1887")]),this._v(" "),e("p",{staticClass:"biography__fact-text"},[this._v("\n        Борис сначала учился в церковно-приходской школе, потом в гимназии.\n        Когда ему было девять лет, в город привезли выставку\n        художников-передвижников. Мальчика настолько впечатлила живопись, что\n        он твердо решил научиться рисовать так же искусно. Мать нашла деньги,\n        чтобы Борис смог брать уроки у известного в Астрахани художника Павла\n        Власова.\n      ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"biography__fact"},[e("span",{staticClass:"biography__fact-year"},[this._v("1896")]),this._v(" "),e("p",{staticClass:"biography__fact-text"},[this._v("\n        Окончив семинарию, в 1896 году Кустодиев отправился учиться в Москву,\n        но в художественную школу его не приняли: Борису уже исполнилось 18 и\n        он был слишком взрослым. Тогда Кустодиев поехал в Петербург, где подал\n        документы в Высшее художественное училище при Академии художеств.\n      ")])])}],!1,null,"52ce4cea",null);e.default=component.exports;installComponents(component,{Socials:n(232).default})},336:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{activePicture:0,windowWidth:1024,startX:null,pictures:[{name:"Купчиха за чаем",src:"slide1@1x.jpg"},{name:"Купчихи",src:"slide2@1x.jpg"},{name:"Осенний сельский праздник",src:"slide3@1x.jpg"},{name:"Масленица",src:"slide4@1x.jpg"},{name:"Осень в провинции. Чаепитие",src:"slide5@1x.jpg"}]}},computed:{isMobile:function(){return this.windowWidth<1023}},mounted:function(){var t=this;this.changePicture(0),document.addEventListener("keydown",(function(e){"ArrowLeft"===e.code&&t.previousPicture(),"ArrowRight"===e.code&&t.nextPicture()})),window.addEventListener("resize",(function(e){t.windowWidth=window.innerWidth})),this.$refs.slider.addEventListener("touchstart",(function(e){t.startX=(e.touches||e.originalEvent.touches)[0].clientX})),this.$refs.slider.addEventListener("touchmove",(function(e){if(t.startX){var n=t.startX-(e.touches||e.originalEvent.touches)[0].clientX;n>30?(t.activePicture+1<t.pictures.length&&t.changePicture(t.activePicture+1),t.startX=null):n<-30&&(t.activePicture-1>=0&&t.changePicture(t.activePicture-1),t.startX=null)}}))},methods:{changePicture:function(t){this.activePicture=t},nextPicture:function(){this.changePicture(this.activePicture+1<this.pictures.length?this.activePicture+1:0)},previousPicture:function(){this.changePicture(this.activePicture-1>=0?this.activePicture-1:this.pictures.length-1)}}},o=(n(371),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"gallery"},[r("div",{staticClass:"gallery__slider"},[r("div",{ref:"slider1",staticClass:"gallery__slider-mobile"},[r("div",{ref:"slider",staticClass:"gallery__thumbnails",attrs:{"aria-label":"миниатюры"}},t._l(t.pictures,(function(picture,e){return r("div",{key:e,class:{active:t.activePicture==e},style:{backgroundImage:"url("+n(234)("./"+picture.src)+")"},on:{click:function(n){return t.changePicture(e)}}})})),0)]),t._v(" "),r("p",{staticClass:"gallery__pictute-name"},[t._v(t._s(t.pictures[t.activePicture].name))]),t._v(" "),r("p",{staticClass:"gallery__pictute-number"},[r("span",[t._v(t._s(t.pictures.indexOf(t.pictures[t.activePicture])+1))]),t._v(" /\n      "+t._s(t.pictures.length)+"\n    ")]),t._v(" "),r("button",{staticClass:"gallery__btn gallery__btn--prev",attrs:{type:"button","aria-label":"Предыдущий слайд"},on:{click:function(e){return t.previousPicture()}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"42",height:"12"}},[r("path",{attrs:{fill:"#bfbfbf",d:"M41 5.2H2.8l3.5-3.5c.3-.3.3-.8 0-1.1C6 .4 5.5.4 5.2.7L.5 5.5c-.3.3-.3.8 0 1.1l4.8 4.8c.3.3.8.3 1.1 0 .3-.3.3-.8 0-1.1L2.8 6.8H41V5.2z"}})])]),t._v(" "),r("button",{staticClass:"gallery__btn gallery__btn--next",attrs:{type:"button","aria-label":"Следующий слайд"},on:{click:function(e){return t.nextPicture()}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"42",height:"12"}},[r("path",{attrs:{fill:"#bfbfbf",d:"M41 5.2H2.8l3.5-3.5c.3-.3.3-.8 0-1.1C6 .4 5.5.4 5.2.7L.5 5.5c-.3.3-.3.8 0 1.1l4.8 4.8c.3.3.8.3 1.1 0 .3-.3.3-.8 0-1.1L2.8 6.8H41V5.2z"}})])]),t._v(" "),r("nuxt-link",{staticClass:"gallery__link",attrs:{to:"/pictures"}},[t._v("все картины\n      "),r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"4",height:"7"}},[r("path",{attrs:{fill:"#bfbfbf",d:"M1 7l-.8-.9 2.5-2.6L.2 1 1 .1l3.4 3.4z"}})])]),t._v(" "),r("div",{staticClass:"gallery__activePicture",style:{backgroundImage:"url("+n(234)("./"+t.pictures[t.activePicture].src)+")"}})],1)])}),[],!1,null,"0e9afb5f",null);e.default=component.exports},337:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"artwork__top section__top"},[e("h2",{staticClass:"artwork__title section__title"},[this._v("творчество")]),this._v(" "),e("p",{staticClass:"artwork__description"},[this._v("\n      Трудно найти другого живописца, настолько горячо влюбленного в\n      провинциальную Россию: самобытную, яркую, удивляющую.\n    ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"artwork__inner artwork__inner--top"},[e("p",{staticClass:"artwork__feature"},[this._v("\n      Как и большинство работ автора, пейзажные полотна Кустодиева отличаются\n      особой выразительностью, яркостью и насыщенностью цветовых планов. На\n      картинах Кустодиева природа всегда представляет собой нечто гораздо\n      большее, чем просто пейзажное изображение.\n    ")]),this._v(" "),e("picture",[e("source",{attrs:{media:"(max-width: 1023px)",srcset:n(237)+" 1x, "+n(238)+" 2x"}}),this._v(" "),e("img",{attrs:{src:n(235),srcset:n(236)+" 2x",width:"240",height:"173",loading:"lazy",alt:"картина Кустодиева «Осень», 1924"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{attrs:{media:"(max-width: 1023px)",srcset:n(241)+" 1x, "+n(242)+" 2x"}}),this._v(" "),e("img",{attrs:{src:n(239),srcset:n(240)+" 2x",width:"920",height:"667",loading:"lazy",alt:"картина Кустодиева «Осеннее гулянье», 1922"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"artwork__inner artwork__inner--bottom"},[e("p",{staticClass:"artwork__feature"},[this._v("\n      Особенности творчества художника Бориса Кустодиева: любил жанр\n      портрета-картины, когда характер героя раскрывается через окружающий его\n      пейзаж, интерьер или даже служащую фоном жанровую сцену; не жалел для\n      бытовых сцен декоративности и зрелищности; с большой симпатией писал\n      жизнь провинции.\n    ")]),this._v(" "),e("p",{staticClass:"artwork__feature"},[this._v("\n      Даже в самые беспросветные времена полотна Кустодиева лучились\n      здоровьем, радостью и любовью к жизни. Сахарные сугробы и плавящиеся под\n      солнцем купола. Полыхающие арбузы и красавицы, не уступающие арбузам ни\n      интенсивностью румянца, ни гладкой округлостью форм.\n    ")])])}],o={components:{Socials:n(232).default}},l=(n(373),n(17)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container artwork section",attrs:{id:"artwork"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("div",{staticClass:"artwork__bottom section__bottom"},[n("Socials"),t._v(" "),n("a",{staticClass:"artwork__button section__button",attrs:{href:""}},[n("span",[t._v("читать больше")]),t._v(" "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"121",height:"15"}},[n("path",{attrs:{fill:"#202020",d:"M120.7,7.3l-6.4-6.4c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4l4.7,4.7H0v2h117.6l-4.7,4.7c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l6.4-6.4C121.1,8.3,121.1,7.7,120.7,7.3z"}})])])],1)])}),r,!1,null,"bd44f1aa",null);e.default=component.exports;installComponents(component,{Socials:n(232).default})},338:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{museums:[{id:1,name:"Русский музей",addres:"191186, Санкт-Петербург, Инженерная ул, 4",phone:"+7 (812) 595-42-40",phoneLink:"tel:+78125954240"},{id:2,name:"Третьяковская галерея",addres:"119017, Москва, Лаврушинский переулок,10",phone:"+7 (495) 957-07-27",phoneLink:"tel:+74959570727"},{id:3,name:"Мультимедиа Арт Музей",addres:"105064, Москва, Гороховский переулок, 7",phone:"+7 (495) 632–16–81",phoneLink:"tel:+74956321681"}]}}},o=(n(375),n(17)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"museums",attrs:{id:"museums"}},[n("h2",{staticClass:"museums__title section__title"},[t._v("музеи")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"container"},[n("ul",{staticClass:"museums__list"},t._l(t.museums,(function(e){return n("li",{key:e.id,staticClass:"museums__list-item"},[n("div",{staticClass:"museums__list-item-top"},[n("span",[n("svg",{attrs:{width:"18",height:"18",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M8.9997 0C5.346 0 2.3732 2.9728 2.3732 6.6269c0 .953.195 1.8631.5795 2.705 1.6568 3.6255 4.8334 7.4532 5.7677 8.5399a.369.369 0 00.559 0c.9339-1.0865 4.1104-4.9141 5.7678-8.54.3846-.8418.5795-1.7518.5795-2.705C15.6264 2.9729 12.6535 0 8.9997 0zm0 10.0689c-1.898 0-3.4422-1.5443-3.4422-3.4422 0-1.8981 1.5442-3.4424 3.4422-3.4424 1.8979 0 3.4422 1.5443 3.4422 3.4424.0002 1.898-1.5441 3.4422-3.4422 3.4422z",fill:"#202020"}})])]),t._v(" "),n("a",{staticClass:"museums__link museums__link--name",attrs:{href:""}},[t._v("\n            "+t._s(e.name))])]),t._v(" "),n("p",[t._v(t._s(e.addres))]),t._v(" "),n("a",{staticClass:"museums__link",attrs:{href:e.phoneLink}},[t._v("\n          "+t._s(e.phone)+"\n        ")])])})),0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"museums__map-wrapper"},[e("iframe",{attrs:{src:"https://yandex.ru/map-widget/v1/?um=constructor%3A92906c2f81c15e567e29dba4a39b4f22d402036a8f804a78dbcfba8a7a33ce3a&source=constructor",width:"100%",height:"514",frameborder:"0"}})])}],!1,null,"73a7b3a8",null);e.default=component.exports},342:function(t,e,n){"use strict";n.r(e);n(365);var r=n(17),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"intro"},[e("p",{staticClass:"intro__date"},[this._v("1878-1927")]),this._v(" "),e("h1",{staticClass:"intro__title"},[this._v("борис кустодиев")]),this._v(" "),e("p",{staticClass:"intro__text"},[this._v("\n    Художник, запечатлевший на своих ярких и жизнерадостных полотнах сцены\n    русских будней и праздников. Обладал редким безграничным талантом,\n    которому, в первую очередь, было присуще особое чувство и восприятие\n    родной природы.\n  ")])])}],!1,null,"6be548bb",null);e.default=component.exports},365:function(t,e,n){"use strict";n(325)},366:function(t,e,n){(e=n(30)(!1)).push([t.i,'.intro[data-v-6be548bb]{position:relative;display:flex;flex-direction:column;justify-content:center;height:100%;padding-left:140px;padding-top:0;color:#f5f5f5}.intro__date[data-v-6be548bb],.intro__title[data-v-6be548bb]{font-family:"Yeseva One",cursive}.intro__date[data-v-6be548bb]{font-size:64px;line-height:59px;font-weight:400}@media (min-width:1024px){.intro__date[data-v-6be548bb]{position:absolute;transform:translate3d(-66%,0,0) rotate(-90deg)}}.intro__title[data-v-6be548bb]{max-width:460px;font-size:80px;line-height:80px;font-weight:400;margin:7px 0 33px 41px}.intro__text[data-v-6be548bb]{max-width:561px;font-size:16px;line-height:29px;font-weight:300;margin:0 0 0 41px}@media (max-width:1023px){.intro[data-v-6be548bb]{justify-content:flex-start;padding:17px 20px 0}.intro__date[data-v-6be548bb]{font-size:20px;line-height:18px;font-weight:400;margin-bottom:17px}.intro__title[data-v-6be548bb]{font-size:40px;line-height:44px;font-weight:400;margin:0 0 19px}.intro__text[data-v-6be548bb]{margin:0}}',""]),t.exports=e},367:function(t,e,n){"use strict";n(326)},368:function(t,e,n){var r=n(30),o=n(327),l=n(311),c=n(312),d=n(309),f=n(310);e=r(!1);var _=o(l),h=o(c),m=o(d),v=o(f);e.push([t.i,".first-screen[data-v-f8473d60]{display:flex;justify-content:space-between;flex-wrap:wrap;width:100%;height:100vh;background-color:#202020}.first-screen__image-wrapper[data-v-f8473d60]{width:32%;height:100%;background-image:url("+_+");background-repeat:no-repeat;background-size:cover;background-position:50%}@media (-webkit-min-device-pixel-ratio:1.5),(-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:144dpi){.first-screen__image-wrapper[data-v-f8473d60]{background-image:url("+h+")}}.first-screen__inner[data-v-f8473d60]{display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;width:68%;padding:0}@media (max-width:1023px){.first-screen[data-v-f8473d60]{flex-direction:column-reverse}.first-screen__image-wrapper[data-v-f8473d60]{width:100%;height:18%;min-height:125px;background-image:url("+m+")}}@media (max-width:1023px) and (-webkit-min-device-pixel-ratio:1.5),(max-width:1023px) and (-webkit-min-device-pixel-ratio:2),(max-width:1023px) and (min-resolution:2dppx),(max-width:1023px) and (min-resolution:144dpi){.first-screen__image-wrapper[data-v-f8473d60]{background-image:url("+v+")}}@media (max-width:1023px){.first-screen__inner[data-v-f8473d60]{width:100%;padding:0}}@media (min-width:360px) and (max-width:1023px){.first-screen__image-wrapper[data-v-f8473d60]{height:30%;max-height:500px}}",""]),t.exports=e},369:function(t,e,n){"use strict";n(328)},370:function(t,e,n){(e=n(30)(!1)).push([t.i,".biography__description[data-v-52ce4cea],.biography__fact-text[data-v-52ce4cea]{max-width:520px;margin:0}.biography__description[data-v-52ce4cea],.biography__facts-list[data-v-52ce4cea]{font-size:16px;line-height:26px;font-weight:400}.biography__facts-list[data-v-52ce4cea]{display:flex;flex-direction:column;align-items:flex-end;margin-left:auto}.biography__fact[data-v-52ce4cea]{display:flex;margin:22px 0 0}.biography__fact-year[data-v-52ce4cea]{display:block;font-size:20px;line-height:40px;font-weight:700;color:#bfbfbf;margin-right:30px}@media (max-width:1023px){.biography__fact[data-v-52ce4cea]{flex-direction:column}.biography__facts-list[data-v-52ce4cea]{align-items:flex-start}.biography__description[data-v-52ce4cea],.biography__fact-text[data-v-52ce4cea]{max-width:none}}.slide-enter-active[data-v-52ce4cea]{transition:all 1.5s ease}.slide-leave-active[data-v-52ce4cea]{transition:all 1.5s cubic-bezier(1,.5,.8,1)}.slide-enter[data-v-52ce4cea],.slide-leave-to[data-v-52ce4cea]{transform:translateX(-150px)}",""]),t.exports=e},371:function(t,e,n){"use strict";n(329)},372:function(t,e,n){(e=n(30)(!1)).push([t.i,".gallery[data-v-0e9afb5f]{background-color:#202020;padding:0 0 20px}.gallery__slider[data-v-0e9afb5f]{position:relative;display:flex;flex-wrap:wrap;justify-content:flex-start;align-items:center;max-width:920px;padding-bottom:80px;margin:0 auto}.gallery__slider-mobile[data-v-0e9afb5f]{width:85%}.gallery__link[data-v-0e9afb5f]{display:flex;align-items:center;font-size:14px;line-height:20px;font-weight:400;color:#bfbfbf;margin-left:auto}.gallery__link svg[data-v-0e9afb5f]{margin-left:10px}.gallery__link[data-v-0e9afb5f]:hover{color:#ffa600}.gallery__link:hover svg path[data-v-0e9afb5f]{fill:#ffa600}.gallery__link[data-v-0e9afb5f]:focus{outline:2px dashed rgba(255,166,0,.5);outline-offset:5px}.gallery__link[data-v-0e9afb5f]:active{opacity:.7}.gallery__activePicture[data-v-0e9afb5f]{position:relative;width:100%;padding-bottom:65%;background-size:cover;background-position:50%;background-repeat:no-repeat;transition:background .9s linear}.gallery__pictute-name[data-v-0e9afb5f]{bottom:40px;line-height:20px;font-weight:300;color:#f5f5f5}.gallery__pictute-name[data-v-0e9afb5f],.gallery__pictute-number[data-v-0e9afb5f]{position:absolute;left:0;right:0;text-align:center;font-size:14px;margin:0}.gallery__pictute-number[data-v-0e9afb5f]{bottom:20px;line-height:13px;font-weight:400;color:#848484}.gallery__pictute-number span[data-v-0e9afb5f]{color:#f5f5f5}.gallery__btn[data-v-0e9afb5f]{position:absolute;bottom:36px;height:30px;font-size:32px;color:#fff;opacity:1;border:none;background-color:transparent;outline:none}.gallery__btn svg[data-v-0e9afb5f]{pointer-events:none}.gallery__btn--prev[data-v-0e9afb5f]{left:0;padding:0}.gallery__btn--next[data-v-0e9afb5f]{right:0;padding:0}.gallery__btn--next svg[data-v-0e9afb5f]{transform:rotate(180deg)}.gallery__btn[data-v-0e9afb5f]:hover{opacity:1}.gallery__btn:hover svg path[data-v-0e9afb5f]{fill:#ffa600}.gallery__btn[data-v-0e9afb5f]:active{opacity:.7}.gallery__thumbnails[data-v-0e9afb5f]{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;padding:40px 0}.gallery__thumbnails div[data-v-0e9afb5f]{width:120px;height:90px;opacity:.6;background-size:cover;background-position:50%;background-repeat:no-repeat;cursor:pointer}.gallery__thumbnails div[data-v-0e9afb5f]:hover{opacity:.8}.gallery__thumbnails div.active[data-v-0e9afb5f]{opacity:1}@media (max-width:1023px){.gallery[data-v-0e9afb5f]{padding-top:60px;padding-bottom:70px}.gallery__slider[data-v-0e9afb5f]{display:inline-block;vertical-align:top;width:100%;padding-bottom:0;overflow:hidden}.gallery__slider-mobile[data-v-0e9afb5f]{overflow:hidden;width:100%;padding:0;margin:0 0 -60px}.gallery__thumbnails[data-v-0e9afb5f]{position:relative;display:inline-block;vertical-align:top;font-size:0;width:100%;white-space:nowrap;padding:40px 0 90px;overflow:auto}.gallery__thumbnails div[data-v-0e9afb5f]{display:inline-block;vertical-align:top;width:59%;padding-bottom:46%;opacity:1;background:none no-repeat 50% 50%;background-size:cover;margin:0 20px 0 0}.gallery__thumbnails div[data-v-0e9afb5f]:last-child{margin-right:0}.gallery__activePicture[data-v-0e9afb5f],.gallery__btn[data-v-0e9afb5f]{display:none}.gallery__link[data-v-0e9afb5f]{margin-left:unset;justify-content:center;align-self:flex-end}.gallery__pictute-name[data-v-0e9afb5f]{top:0;max-height:30px}.gallery__pictute-number[data-v-0e9afb5f]{bottom:30px}}",""]),t.exports=e},373:function(t,e,n){"use strict";n(330)},374:function(t,e,n){(e=n(30)(!1)).push([t.i,".artwork[data-v-bd44f1aa],.artwork__top[data-v-bd44f1aa]{border-bottom:1px solid #e5e5e5}.artwork__top[data-v-bd44f1aa]{justify-content:flex-start;padding-bottom:16px}.artwork__title[data-v-bd44f1aa]{margin-right:44px}.artwork__description[data-v-bd44f1aa]{max-width:490px;font-size:20px;line-height:30px;font-weight:400;color:#bfbfbf;margin-top:0}.artwork__inner[data-v-bd44f1aa]{display:flex;justify-content:space-between;padding-top:40px}.artwork__inner--top[data-v-bd44f1aa]{padding:40px 80px}.artwork__feature[data-v-bd44f1aa]{max-width:440px;font-size:16px;line-height:26px;font-weight:400;color:#4b4b4b;margin:0}.artwork__bottom[data-v-bd44f1aa]{justify-content:flex-start}.artwork__button[data-v-bd44f1aa]{margin-left:191px}@media (max-width:1023px){.artwork img[data-v-bd44f1aa]{width:100%;height:auto}.artwork__description[data-v-bd44f1aa]{max-width:none}.artwork__title[data-v-bd44f1aa]{margin-right:0}.artwork__inner[data-v-bd44f1aa]{flex-direction:column;padding-bottom:20px}.artwork__inner--top[data-v-bd44f1aa]{padding:40px 20px 20px;margin:0 -20px}.artwork__inner--top img[data-v-bd44f1aa]{margin-top:20px}.artwork__feature[data-v-bd44f1aa]{max-width:none;margin-bottom:20px}.artwork__button[data-v-bd44f1aa]{margin-left:0}}",""]),t.exports=e},375:function(t,e,n){"use strict";n(331)},376:function(t,e,n){var r=n(30),o=n(327),l=n(315),c=n(316),d=n(313),f=n(314);e=r(!1);var _=o(l),h=o(c),m=o(d),v=o(f);e.push([t.i,".museums[data-v-73a7b3a8]{padding-bottom:57px}.museums__title[data-v-73a7b3a8]{text-align:center;margin:40px auto}.museums__map-wrapper[data-v-73a7b3a8]{max-width:1200px;height:514px;margin:0 auto;background-image:url("+_+");background-repeat:no-repeat;background-size:cover}@media (-webkit-min-device-pixel-ratio:1.5),(-webkit-min-device-pixel-ratio:2),(min-resolution:2dppx),(min-resolution:144dpi){.museums__map-wrapper[data-v-73a7b3a8]{background-image:url("+h+")}}.museums__list[data-v-73a7b3a8]{list-style:none;margin:0;display:flex;flex-wrap:wrap;padding:40px 0}.museums__list-item-top[data-v-73a7b3a8]{display:flex}.museums__list-item[data-v-73a7b3a8]{width:30.3%;padding-bottom:45px}@media (min-width:1024px){.museums__list-item[data-v-73a7b3a8]:not(:nth-child(3n-2)){padding-left:41px;border-left:1px solid #e5e5e5;margin-right:41px}}.museums__list-item span[data-v-73a7b3a8]{margin-right:10px;margin-top:4px}.museums__list-item p[data-v-73a7b3a8]{max-width:195px;margin-bottom:2px}.museums__link[data-v-73a7b3a8],.museums__list-item p[data-v-73a7b3a8]{font-size:14px;line-height:24px;font-weight:400;color:#bfbfbf}.museums__link--name[data-v-73a7b3a8]{font-size:16px;line-height:26px;font-weight:700;color:#202020;margin:0 0 7px}.museums__link[data-v-73a7b3a8]:hover{color:#ffa600;text-decoration:underline}.museums__link[data-v-73a7b3a8]:focus{outline:2px dashed rgba(255,166,0,.5);outline-offset:5px}.museums__link[data-v-73a7b3a8]:active{opacity:.7}@media (max-width:1023px){.museums__map-wrapper[data-v-73a7b3a8]{background-image:url("+m+")}}@media (max-width:1023px) and (-webkit-min-device-pixel-ratio:1.5),(max-width:1023px) and (-webkit-min-device-pixel-ratio:2),(max-width:1023px) and (min-resolution:2dppx),(max-width:1023px) and (min-resolution:144dpi){.museums__map-wrapper[data-v-73a7b3a8]{background-image:url("+v+")}}@media (max-width:1023px){.museums__list[data-v-73a7b3a8]{flex-direction:column;padding:0;margin:0 -20px}.museums__list-item[data-v-73a7b3a8]{width:100%;padding:40px 20px;border-bottom:1px solid #e5e5e5}}",""]),t.exports=e},378:function(t,e,n){"use strict";n.r(e);var r=n(334),o=n(335),l=n(336),c=n(337),d=n(338),f={components:{MainPageFirstScreen:r.default,Biography:o.default,Gallery:l.default,Artwork:c.default,Museums:d.default},layout:"default"},_=n(17),component=Object(_.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("MainPageFirstScreen"),this._v(" "),e("Biography"),this._v(" "),e("Gallery"),this._v(" "),e("Artwork"),this._v(" "),e("Museums")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MainPageFirstScreen:n(334).default,Biography:n(335).default,Gallery:n(336).default,Artwork:n(337).default,Museums:n(338).default})}}]);