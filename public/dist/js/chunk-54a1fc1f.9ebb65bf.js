(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-54a1fc1f"],{5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,a){var n=a("1d80"),r=a("5899"),i="["+r+"]",c=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),o=function(e){return function(t){var a=String(n(t));return 1&e&&(a=a.replace(c,"")),2&e&&(a=a.replace(s,"")),a}};e.exports={start:o(1),end:o(2),trim:o(3)}},"5e87":function(e,t,a){},7156:function(e,t,a){var n=a("861d"),r=a("d2bb");e.exports=function(e,t,a){var i,c;return r&&"function"==typeof(i=t.constructor)&&i!==a&&n(c=i.prototype)&&c!==a.prototype&&r(e,c),e}},"94f9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"chongzhi"},[a("van-nav-bar",{attrs:{title:"bond","right-text":"","left-arrow":"",fixed:!0,placeholder:!0,"z-index":"99"},on:{"click-left":e.goback}}),a("div",{staticClass:"czhiview"},[a("div",{staticClass:"czhiview_form"},[a("div",{staticClass:"czhiview_form_shurk"},[a("div",{staticClass:"czhiview_form_shurk_t"},[e._v("bond")]),a("div",{staticClass:"czhiview_form_shurk_input"},[a("div",{staticClass:"czhiview_form_shurk_input_l"},[e._v("USDT")]),a("el-input",{attrs:{placeholder:e.$t("message.enterContent")},model:{value:e.je,callback:function(t){e.je=t},expression:"je"}})],1),a("span",[e._v("Current margin balance:"+e._s(e.balancemar_num))]),a("span",[e._v("Usdt balance:"+e._s(e.usdt_num))])]),a("div",{staticClass:"czhiview_form_czhi"},[a("van-button",{attrs:{type:"primary"},on:{click:e.chongzhi}},[e._v("转 入")]),a("van-button",{staticStyle:{"margin-left":"2%"},attrs:{type:"info"},on:{click:e.zhuanchu}},[e._v("转 出")])],1)])])],1)},r=[],i=(a("a9e3"),a("96cf"),a("1da1")),c=a("d399"),s=a("f564"),o=a("2241"),u=a("6314"),l=a.n(u),f=a("5aac"),h=a.n(f),m=a("db49"),d=m["a"]["hyue"][m["a"]["key"]]["dotc"]["abi"],p=m["a"]["hyue"][m["a"]["key"]]["dotc"]["heyue"],b=m["a"]["hbi"][m["a"]["key"]]["USDT"]["heyue"],v=m["a"]["hyue"][m["a"]["key"]]["Bzj"]["num"],g="",_="",w={data:function(){return{je:0,balancemar_num:0,usdt_num:0}},mounted:function(){c["a"].setDefaultOptions("loading",{forbidClick:!1,closeOnClickOverlay:!1,duration:0,overlay:!0}),"undefined"===typeof ethereum?alert("Please install the metamask plug-in first"):t();var e=this;function t(){return a.apply(this,arguments)}function a(){return a=Object(i["a"])(regeneratorRuntime.mark((function t(){var a,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={},n=new h.a({network:"mainnet",cacheProvider:!0,providerOptions:a}),t.next=4,n.connect();case 4:r=t.sent,_=new l.a(r),_&&r&&(g=r.selectedAddress,e.balancemarajax());case 7:case"end":return t.stop()}}),t)}))),a.apply(this,arguments)}},methods:{goback:function(){this.$router.go(-1)},balancemarajax:function(){c["a"].loading({message:"请求中..."});var e=this,t=0,a=new _.eth.Contract(d,p);a.methods.balancemar(g+"").call((function(a,n){if(n){t++;var r=Number(n)/Math.pow(10,v);e.balancemar_num=r,2==t&&c["a"].clear()}})),a.methods.balancepro(g+"",b).call((function(a,n){if(n){t++;var r=Number(n)/Math.pow(10,v);e.usdt_num=r,2==t&&c["a"].clear()}}))},chongzhi:function(){if(this.je<=0)Object(s["a"])({type:"warning",message:"请输入正确的金额"});else if(this.je>this.usdt_num)Object(s["a"])({type:"warning",message:"转入金额不能大于usdt余额"});else{var e=this;c["a"].loading({message:"转入中。。。"});var t="",a=new _.eth.Contract(d,p);a.methods.transfer("1",Number(this.je)*Math.pow(10,v)+"").send({from:g},(function(e,t){t&&n()}))}function n(){a.methods.balancemar(g+"").call((function(a,r){if(r){var i=Number(r)/Math.pow(10,v);i>=e.balancemar_num+Number(e.je)?(c["a"].clear(),clearTimeout(t),o["a"].alert({title:"转入成功",message:"转入 "+e.je}).then((function(){e.balancemarajax(),e.je=0}))):t=setTimeout((function(){n()}),3e3)}}))}},zhuanchu:function(){if(this.je<=0)Object(s["a"])({type:"warning",message:"请输入正确的金额"});else if(this.je>this.balancemar_num)Object(s["a"])({type:"warning",message:"转出金额不能大于存款余额"});else{var e=this;c["a"].loading({message:"转出中..."});var t="",a=new _.eth.Contract(d,p);a.methods.transfer("2",Number(this.je)*Math.pow(10,v)+"").send({from:g},(function(e,t){t&&n()}))}function n(){a.methods.balancemar(g+"").call((function(a,r){if(r){var i=Number(r)/Math.pow(10,v);i==e.balancemar_num-Number(e.je)?(c["a"].clear(),clearTimeout(t),o["a"].alert({title:"转出成功！",message:"转出 "+e.je}).then((function(){e.balancemarajax(),e.je=0}))):t=setTimeout((function(){n()}),3e3)}}))}}}},y=w,j=(a("d0eb"),a("2877")),N=Object(j["a"])(y,n,r,!1,null,"6255ea0a",null);t["default"]=N.exports},a9e3:function(e,t,a){"use strict";var n=a("83ab"),r=a("da84"),i=a("94ca"),c=a("6eeb"),s=a("5135"),o=a("c6b6"),u=a("7156"),l=a("c04e"),f=a("d039"),h=a("7c73"),m=a("241c").f,d=a("06cf").f,p=a("9bf2").f,b=a("58a8").trim,v="Number",g=r[v],_=g.prototype,w=o(h(_))==v,y=function(e){var t,a,n,r,i,c,s,o,u=l(e,!1);if("string"==typeof u&&u.length>2)if(u=b(u),t=u.charCodeAt(0),43===t||45===t){if(a=u.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(u.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+u}for(i=u.slice(2),c=i.length,s=0;s<c;s++)if(o=i.charCodeAt(s),o<48||o>r)return NaN;return parseInt(i,n)}return+u};if(i(v,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var j,N=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof N&&(w?f((function(){_.valueOf.call(a)})):o(a)!=v)?u(new g(y(t)),a,N):y(t)},k=n?m(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),C=0;k.length>C;C++)s(g,j=k[C])&&!s(N,j)&&p(N,j,d(g,j));N.prototype=_,_.constructor=N,c(r,v,N)}},d0eb:function(e,t,a){"use strict";a("5e87")}}]);