webpackJsonp([25],{"1qJE":function(n,t,i){t=n.exports=i("FZ+f")(!1),t.push([n.i,".social-signup-container[data-v-6afafb00]{margin:20px 0}.social-signup-container .sign-btn[data-v-6afafb00]{display:inline-block;cursor:pointer}.social-signup-container .icon[data-v-6afafb00]{color:#fff;font-size:30px;margin-top:6px}.social-signup-container .qq-svg-container[data-v-6afafb00],.social-signup-container .wx-svg-container[data-v-6afafb00]{display:inline-block;width:40px;height:40px;line-height:40px;text-align:center;padding-top:1px;border-radius:4px;margin-bottom:20px;margin-right:5px}.social-signup-container .wx-svg-container[data-v-6afafb00]{background-color:#8dc349}.social-signup-container .qq-svg-container[data-v-6afafb00]{background-color:#6ba2d6;margin-left:50px}",""])},GM5V:function(n,t){n.exports={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"social-signup-container"},[i("div",{staticClass:"sign-btn",on:{click:function(t){n.wechatHandleClick("wechat")}}},[i("span",{staticClass:"wx-svg-container"},[i("icon-svg",{staticClass:"icon",attrs:{"icon-class":"weixin"}})],1),n._v(" 微信\n\t")]),n._v(" "),i("div",{staticClass:"sign-btn",on:{click:function(t){n.tencentHandleClick("tencent")}}},[i("span",{staticClass:"qq-svg-container"},[i("icon-svg",{staticClass:"icon",attrs:{"icon-class":"QQ"}})],1),n._v(" QQ\n\t")])])},staticRenderFns:[]}},UWiJ:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=i("V5Rg");t.default={name:"social-signin",methods:{wechatHandleClick:function(n){this.$store.commit("SET_AUTH_TYPE",n);var t=encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect"),o="https://open.weixin.qq.com/connect/qrconnect?appid=xxxxx&redirect_uri="+t+"&response_type=code&scope=snsapi_login#wechat_redirect";i.i(e.a)(o,n,540,540)},tencentHandleClick:function(n){this.$store.commit("SET_AUTH_TYPE",n);var t=encodeURIComponent("xxx/redirect?redirect="+window.location.origin+"/authredirect"),o="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=xxxxx&redirect_uri="+t;i.i(e.a)(o,n,540,540)}}}},V5Rg:function(n,t,i){"use strict";function e(n,t,i,e){var o=void 0!==window.screenLeft?window.screenLeft:screen.left,c=void 0!==window.screenTop?window.screenTop:screen.top,a=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,s=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height,r=a/2-i/2+o,d=s/2-e/2+c,l=window.open(n,t,"toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=yes, copyhistory=no, width="+i+", height="+e+", top="+d+", left="+r);window.focus&&l.focus()}t.a=e},dZXH:function(n,t,i){function e(n){i("tzxP")}var o=i("VU/8")(i("UWiJ"),i("GM5V"),e,"data-v-6afafb00",null);n.exports=o.exports},tzxP:function(n,t,i){var e=i("1qJE");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);i("rjj0")("2d132e74",e,!0)}});