webpackJsonp([31],{"7bVT":function(t,e,a){function s(t){a("BOup")}var i=a("VU/8")(a("tS7/"),a("IN9H"),s,"data-v-468f7451",null);t.exports=i.exports},BOup:function(t,e,a){var s=a("Mt6w");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a("rjj0")("53a9975e",s,!0)},IN9H:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("code",[t._v("会补动态换肤的教程")]),t._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{slot:"header"},[a("span",{staticStyle:{"line-height":"36px"}},[t._v("偏好设置")])]),t._v(" "),a("div",{staticClass:"box-item"},[a("span",{staticClass:"field-label"},[t._v("换肤:")]),t._v(" "),a("el-switch",{attrs:{"on-text":"","off-text":""},model:{value:t.theme,callback:function(e){t.theme=e},expression:"theme"}})],1)]),t._v(" "),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[t._v("Button: ")]),t._v(" "),a("span",{staticClass:"wrapper"},[a("el-button",{attrs:{type:"success"}},[t._v("成功按钮")]),t._v(" "),a("el-button",{attrs:{type:"warning"}},[t._v("警告按钮")]),t._v(" "),a("el-button",{attrs:{type:"danger"}},[t._v("危险按钮")]),t._v(" "),a("el-button",{attrs:{type:"info"}},[t._v("信息按钮")])],1)]),t._v(" "),a("div",{staticClass:"block"},t._l(t.tags,function(e){return a("el-tag",{key:e.type,staticClass:"tag-item",attrs:{type:e.type}},[t._v("\n      "+t._s(e.name)+"\n    ")])})),t._v(" "),a("div",{staticClass:"block"},[a("el-alert",{staticClass:"alert-item",attrs:{title:"成功提示的文案",type:"success"}}),t._v(" "),a("el-alert",{staticClass:"alert-item",attrs:{title:"消息提示的文案",type:"info"}}),t._v(" "),a("el-alert",{staticClass:"alert-item",attrs:{title:"警告提示的文案",type:"warning"}}),t._v(" "),a("el-alert",{staticClass:"alert-item",attrs:{title:"错误提示的文案",type:"error"}})],1)],1)},staticRenderFns:[]}},Mt6w:function(t,e,a){e=t.exports=a("FZ+f")(!1),e.push([t.i,".box-card[data-v-468f7451]{width:400px;margin:20px auto}.block[data-v-468f7451]{padding:30px 24px}.alert-item[data-v-468f7451]{margin-bottom:10px}.tag-item[data-v-468f7451]{margin-right:15px}",""])},"tS7/":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("0xDb");e.default={data:function(){return{theme:!1,tags:[{name:"标签一",type:""},{name:"标签二",type:"gray"},{name:"标签三",type:"primary"},{name:"标签四",type:"success"},{name:"标签五",type:"warning"},{name:"标签六",type:"danger"}],inputVisible:!1,inputValue:""}},watch:{theme:function(){a.i(s.a)(document.body,"custom-theme")}}}}});