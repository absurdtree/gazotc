(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09a9984c"],{2384:function(e,t,a){"use strict";a("2ea2")},"25f0":function(e,t,a){"use strict";var n=a("6eeb"),i=a("825a"),s=a("d039"),u=a("ad6d"),r="toString",c=RegExp.prototype,l=c[r],p=s((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),o=l.name!=r;(p||o)&&n(RegExp.prototype,r,(function(){var e=i(this),t=String(e.source),a=e.flags,n=String(void 0===a&&e instanceof RegExp&&!("flags"in c)?u.call(e):a);return"/"+t+"/"+n}),{unsafe:!0})},"2ea2":function(e,t,a){},"979b":function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balancePf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pro","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pro","type":"address"}],"name":"faucet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"num","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pro","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"setwad","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"tim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pro","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},ad6d:function(e,t,a){"use strict";var n=a("825a");e.exports=function(){var e=n(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},babc:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"pro","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pro","type":"address"}],"name":"faucet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_time","type":"uint256"}],"name":"settime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"pro","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"setwad","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"pro","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balancePf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"num","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"tim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]')},f6a2:function(e,t,a){"use strict";a.r(t);var n,i,s,u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lqcsb"},[a("van-nav-bar",{staticClass:"lqcsb_w_top",attrs:{title:"Receive test currency","left-arrow":"",fixed:!0,placeholder:!0,"z-index":"55","safe-area-inset-top":!0},on:{"click-left":e.goback}}),"huobi"==e.key?a("div",{staticClass:"lqcsb_w"},[a("div",{staticClass:"lqcsb_w_ul"},[a("div",{staticClass:"lqcsb_w_ul_t"},[e._v("Please select an asset")]),a("div",{staticClass:"lqcsb_w_ul_item"},[a("div",{staticClass:"lqcsb_w_ul_item_l"},[a("el-select",{attrs:{placeholder:"Please select"},model:{value:e.zckey,callback:function(t){e.zckey=t},expression:"zckey"}},e._l(e.zclisthb,(function(e){return a("el-option",{key:e["id"],attrs:{label:e["id"],value:e["heyue"]}})})),1)],1),a("div",{staticClass:"lqcsb_w_ul_item_r"},[a("van-button",{attrs:{type:"primary",loading:e.jiazai},on:{click:e.lqajax}},[e._v("receive")])],1)]),e._m(0),a("div",{staticClass:"qianbao_view_head_item_li",staticStyle:{opacity:"1.5"}},[e._v("Your test currency balance(Test)：")]),a("div",{staticClass:"qianbao_view_head_item_li_num"},[e._v(e._s(e.user_sc.toFixed(2)))])])]):e._e(),"huobi"!=e.key?a("div",{staticClass:"lqcsb_w"},[a("div",{staticClass:"lqcsb_w_ul"},[a("div",{staticClass:"lqcsb_w_ul_t"},[e._v("Please select an asset")]),a("div",{staticClass:"lqcsb_w_ul_item"},[a("div",{staticClass:"lqcsb_w_ul_item_l"},[a("el-select",{attrs:{placeholder:"Please select"},model:{value:e.zckey,callback:function(t){e.zckey=t},expression:"zckey"}},e._l(e.zclist,(function(e){return a("el-option",{key:e["id"],attrs:{label:e["id"],value:e["key"]}})})),1)],1),a("div",{staticClass:"lqcsb_w_ul_item_r"},[a("van-button",{attrs:{type:"primary",loading:e.jiazai},on:{click:e.lqajax}},[e._v("receive")])],1)]),e._m(1)])]):e._e()],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lqcsb_w_ul_item temsg"},[e._v(" If receiving test currency fails"),a("br"),e._v(" Please contact wechat: lusun2016 ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"lqcsb_w_ul_item temsg"},[e._v(" To receive the test currency, you need to have Ethereum rinkeby test network eth in your account!"),a("br"),e._v(" If not, please contact wechat: lulusun2016 ")])}],c=(a("d3b7"),a("25f0"),a("96cf"),a("1da1")),l=a("979b"),p=a("babc"),o=a("2241"),y=a("f564"),d=a("db49"),b=a("6314"),m=a.n(b),f=a("5aac"),_=a.n(f),v=d["a"]["hyue"][d["a"]["key"]]["test"]["abi"],w=d["a"]["hyue"][d["a"]["key"]]["test"]["heyue"],h={data:function(){return{key:d["a"]["key"],jiazai:!1,user_sc:0,zclisthb:[{id:"Test",key:"0x7465737400000000000000000000000000000000000000000000000000000000",heyue:"0x489B639BC2D68bB6D6f21d8Ee0f3bdbf41fE1C88",num:1e4}],zclist:[{id:"USDT",key:"0xEc8053A77D432A08b2C59363D98eCA903a12df5a",num:1e4},{id:"WETH",key:"0xf537270EdB6B5792c20D204bdc9Eb9735c6A790F",num:10},{id:"GAZ",key:"0x429E01aC4534682a5f3dDc186334d9160460348E",num:3e3}],zckey:"huobi"!=d["a"]["key"]?"0xEc8053A77D432A08b2C59363D98eCA903a12df5a":"0x489B639BC2D68bB6D6f21d8Ee0f3bdbf41fE1C88"}},created:function(){"undefined"===typeof ethereum||t();var e=this;function t(){return a.apply(this,arguments)}function a(){return a=Object(c["a"])(regeneratorRuntime.mark((function t(){var a,u,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={},u=new _.a({providerOptions:a}),t.next=4,u.connect();case 4:r=t.sent,i=new m.a(r),i&&r&&(n=r.selectedAddress,s=new i.eth.Contract(v,w),e.getsczc());case 7:case"end":return t.stop()}}),t)}))),a.apply(this,arguments)}},methods:{getsczc:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s.methods.balanceOf(n).call();case 2:a=t.sent,e.user_sc=a/Math.pow(10,6);case 4:case"end":return t.stop()}}),t)})))()},goback:function(){this.$router.go(-1)},lqajax:function(){var e,t=this,a="",s=0;if("huobi"==this.key){e=new i.eth.Contract(p,"0xA03A26810b4091dB521d13379bc7551FB807C9C1");for(var u=0;u<t.zclisthb.length;u++)if(t.zclisthb[u]["heyue"]==t.zckey){a=t.zclisthb[u]["id"],s=t.zclisthb[u]["num"];break}}else{e=new i.eth.Contract(l,"0x4648336c4C2Bf8671FdeD5bF7B8F97c5fCD3a0A4");for(var r=0;r<t.zclist.length;r++)if(t.zclist[r]["key"]==t.zckey){a=t.zclist[r]["id"],s=t.zclist[r]["num"];break}}var d=Date.parse(new Date).toString().substr(0,10);function b(){return m.apply(this,arguments)}function m(){return m=Object(c["a"])(regeneratorRuntime.mark((function a(){var i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.methods.tim(t.zckey+"",n+"").call();case 2:i=a.sent,d-i>=3600?f():(t.jiazai=!1,s=3600-(d-i),o["a"].alert({title:"Tips",message:"You have received it!, Please in"+s/60+"Pick it up again in minutes!"}));case 4:case"end":return a.stop()}}),a)}))),m.apply(this,arguments)}function f(){e.methods.faucet(t.zckey+"").send({from:n},(function(e,n){if(t.jiazai=!1,n){var i=s+a+"Sent to your account!";o["a"].alert({title:"Tips",message:i})}else Object(y["a"])({type:"warning",message:"Please agree to authorize!"})}))}t.jiazai=!0,b()}}},k=h,T=(a("2384"),a("2877")),g=Object(T["a"])(k,u,r,!1,null,null,null);t["default"]=g.exports}}]);