webpackJsonp([11],{"1s6x":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twoDndList"},[n("div",{staticClass:"twoDndList-list",style:{width:t.width1}},[n("h3",[t._v(t._s(t.list1Title))]),t._v(" "),n("draggable",{staticClass:"dragArea",attrs:{list:t.list1,options:{group:"article"}}},t._l(t.list1,function(e){return n("div",{key:e,staticClass:"list-complete-item"},[n("div",{staticClass:"list-complete-item-handle"},[t._v("["+t._s(e.author)+"] "+t._s(e.title))]),t._v(" "),n("div",{staticStyle:{position:"absolute",right:"0px"}},[n("span",{staticStyle:{float:"right","margin-top":"-20px","margin-right":"5px"},on:{click:function(n){t.deleteEle(e)}}},[n("i",{staticClass:"el-icon-delete",staticStyle:{color:"#ff4949"}})])])])}))],1),t._v(" "),n("div",{staticClass:"twoDndList-list",style:{width:t.width2}},[n("h3",[t._v(t._s(t.list2Title))]),t._v(" "),n("draggable",{staticClass:"dragArea",attrs:{list:t.filterList2,options:{group:"article"}}},t._l(t.filterList2,function(e){return n("div",{key:e,staticClass:"list-complete-item"},[n("div",{staticClass:"list-complete-item-handle2",on:{click:function(n){t.pushEle(e)}}},[t._v(" ["+t._s(e.author)+"] "+t._s(e.title))])])}))],1)])},staticRenderFns:[]}},"3Crn":function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"components-container"},[t._m(0),t._v(" "),n("div",{staticClass:"editor-container"},[n("dnd-list",{attrs:{list1:t.list1,list2:t.list2,list1Title:"头条列表",list2Title:"文章池"}})],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("code",[t._v("drag-list base on "),n("a",{attrs:{href:"https://github.com/SortableJS/Vue.Draggable",target:"_blank"}},[t._v("Vue.Draggable")])])}]}},DAYN:function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};!function(){function e(t){function e(t){t.parentElement.removeChild(t)}function n(t,e,n){n<t.children.length?t.insertBefore(e,t.children[n]):t.appendChild(e)}function r(t,e){return t.map(function(t){return t.elm}).indexOf(e)}function a(t,e){if(!t)return[];var n=t.map(function(t){return t.elm});return[].concat(i(e)).map(function(t){return n.indexOf(t)})}function s(t,e){var n=this;this.$nextTick(function(){return n.$emit(t.toLowerCase(),e)})}function l(t){var e=this;return function(n){null!==e.realList&&e["onDrag"+t](n),s.call(e,t,n)}}var c=["Start","Add","Remove","Update","End"],d=["Choose","Sort","Filter","Clone"],u=["Move"].concat(c,d).map(function(t){return"on"+t}),h=null;return{name:"draggable",props:{options:Object,list:{type:Array,required:!1,default:null},value:{type:Array,required:!1,default:null},noTransitionOnDrag:{type:Boolean,default:!1},clone:{type:Function,default:function(t){return t}},element:{type:String,default:"div"},move:{type:Function,default:null}},data:function(){return{transitionMode:!1,componentMode:!1}},render:function(t){if(this.$slots.default&&1===this.$slots.default.length){var e=this.$slots.default[0];e.componentOptions&&"transition-group"===e.componentOptions.tag&&(this.transitionMode=!0)}return t(this.element,null,this.$slots.default)},mounted:function(){var e=this;if(this.componentMode=this.element.toLowerCase()!==this.$el.nodeName.toLowerCase(),this.componentMode&&this.transitionMode)throw new Error("Transition-group inside component is not supported. Please alter element value or remove transition-group. Current element value: "+this.element);var n={};c.forEach(function(t){n["on"+t]=l.call(e,t)}),d.forEach(function(t){n["on"+t]=s.bind(e,t)});var i=o({},this.options,n,{onMove:function(t,n){return e.onDragMove(t,n)}});!("draggable"in i)&&(i.draggable=">*"),this._sortable=new t(this.rootContainer,i),this.computeIndexes()},beforeDestroy:function(){this._sortable.destroy()},computed:{rootContainer:function(){return this.transitionMode?this.$el.children[0]:this.$el},isCloning:function(){return!!this.options&&!!this.options.group&&"clone"===this.options.group.pull},realList:function(){return this.list?this.list:this.value}},watch:{options:{handler:function(t){for(var e in t)-1==u.indexOf(e)&&this._sortable.option(e,t[e])},deep:!0},realList:function(){this.computeIndexes()}},methods:{getChildrenNodes:function(){if(this.componentMode)return this.$children[0].$slots.default;var t=this.$slots.default;return this.transitionMode?t[0].child.$slots.default:t},computeIndexes:function(){var t=this;this.$nextTick(function(){t.visibleIndexes=a(t.getChildrenNodes(),t.rootContainer.children)})},getUnderlyingVm:function(t){var e=r(this.getChildrenNodes(),t);return{index:e,element:this.realList[e]}},getUnderlyingPotencialDraggableComponent:function(t){var e=t.__vue__;return e&&e.$options&&"transition-group"===e.$options._componentTag?e.$parent:e},emitChanges:function(t){var e=this;this.$nextTick(function(){e.$emit("change",t)})},alterList:function(t){if(this.list)t(this.list);else{var e=[].concat(i(this.value));t(e),this.$emit("input",e)}},spliceList:function(){var t=arguments,e=function(e){return e.splice.apply(e,t)};this.alterList(e)},updatePosition:function(t,e){var n=function(n){return n.splice(e,0,n.splice(t,1)[0])};this.alterList(n)},getRelatedContextFromMoveEvent:function(t){var e=t.to,n=t.related,i=this.getUnderlyingPotencialDraggableComponent(e);if(!i)return{component:i};var r=i.realList,a={list:r,component:i};if(e!==n&&r&&i.getUnderlyingVm){var s=i.getUnderlyingVm(n);return o(s,a)}return a},getVmIndex:function(t){var e=this.visibleIndexes,n=e.length;return t>n-1?n:e[t]},getComponent:function(){return this.$slots.default[0].componentInstance},resetTransitionData:function(t){if(this.noTransitionOnDrag&&this.transitionMode){this.getChildrenNodes()[t].data=null;var e=this.getComponent();e.children=[],e.kept=void 0}},onDragStart:function(t){this.context=this.getUnderlyingVm(t.item),t.item._underlying_vm_=this.clone(this.context.element),h=t.item},onDragAdd:function(t){var n=t.item._underlying_vm_;if(void 0!==n){e(t.item);var i=this.getVmIndex(t.newIndex);this.spliceList(i,0,n),this.computeIndexes();var o={element:n,newIndex:i};this.emitChanges({added:o})}},onDragRemove:function(t){if(n(this.rootContainer,t.item,t.oldIndex),this.isCloning)return void e(t.clone);var i=this.context.index;this.spliceList(i,1);var o={element:this.context.element,oldIndex:i};this.resetTransitionData(i),this.emitChanges({removed:o})},onDragUpdate:function(t){e(t.item),n(t.from,t.item,t.oldIndex);var i=this.context.index,o=this.getVmIndex(t.newIndex);this.updatePosition(i,o);var r={element:this.context.element,oldIndex:i,newIndex:o};this.emitChanges({moved:r})},computeFutureIndex:function(t,e){if(!t.element)return 0;var n=[].concat(i(e.to.children)).filter(function(t){return"none"!==t.style.display}),o=n.indexOf(e.related),r=t.component.getVmIndex(o);return-1==n.indexOf(h)&&e.willInsertAfter?r+1:r},onDragMove:function(t,e){var n=this.move;if(!n||!this.realList)return!0;var i=this.getRelatedContextFromMoveEvent(t),r=this.context,a=this.computeFutureIndex(i,t);return o(r,{futureIndex:a}),o(t,{relatedContext:i,draggedContext:r}),n(t,e)},onDragEnd:function(t){this.computeIndexes(),h=null}}}}Array.from||(Array.from=function(t){return[].slice.call(t)});var r=n("guG4");t.exports=e(r)}()},Q0ty:function(t,e,n){var i=n("gtoQ");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("9f4c7560",i,!0)},cwWJ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("wYK6"),o=n.n(i),r=n("viA7");e.default={components:{DndList:o.a},data:function(){return{list1:[],list2:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,n.i(r.a)(this.listQuery).then(function(e){t.list1=e.data.splice(0,5),t.list2=e.data,console.log(t.list1,t.list2)})}}}},gtoQ:function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,'.twoDndList[data-v-0dcfd92e]{background:#fff;padding-bottom:40px}.twoDndList[data-v-0dcfd92e]:after{content:"";display:table;clear:both}.twoDndList .twoDndList-list[data-v-0dcfd92e]{float:left;padding-bottom:30px}.twoDndList .twoDndList-list[data-v-0dcfd92e]:first-of-type{margin-right:2%}.twoDndList .twoDndList-list .dragArea[data-v-0dcfd92e]{margin-top:15px;min-height:50px;padding-bottom:30px}.list-complete-item[data-v-0dcfd92e]{cursor:pointer;position:relative;font-size:14px;padding:5px 12px;margin-top:4px;border:1px solid #bfcbd9;-webkit-transition:all 1s;transition:all 1s}.list-complete-item-handle[data-v-0dcfd92e]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-right:50px}.list-complete-item-handle2[data-v-0dcfd92e]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-right:20px}.list-complete-item.sortable-chosen[data-v-0dcfd92e]{background:#4ab7bd}.list-complete-item.sortable-ghost[data-v-0dcfd92e]{background:#30b08f}.list-complete-enter[data-v-0dcfd92e],.list-complete-leave-active[data-v-0dcfd92e]{opacity:0}',""])},guG4:function(t,e,n){var i,o;/**!
 * Sortable
 * @author	RubaXa   <trash@rubaxa.org>
 * @license MIT
 */
!function(r){"use strict";i=r,void 0!==(o="function"==typeof i?i.call(e,n,e,t):i)&&(t.exports=o)}(function(){"use strict";function t(t,e){if(!t||!t.nodeType||1!==t.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(t);this.el=t,this.options=e=_({},e),t[W]=this;var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0}};for(var i in n)!(i in e)&&(e[i]=n[i]);at(e);for(var o in this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this));this.nativeDraggable=!e.forceFallback&&K,r(t,"mousedown",this._onTapStart),r(t,"touchstart",this._onTapStart),r(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(r(t,"dragover",this),r(t,"dragenter",this)),ot.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function e(t,e){"clone"!==t.lastPullMode&&(e=!0),T&&T.state!==e&&(l(T,"display",e?"none":""),e||T.state&&(t.options.group.revertClone?(E.insertBefore(T,S),t._animate(x,T)):E.insertBefore(T,x)),T.state=e)}function n(t,e,n){if(t){n=n||H;do{if(">*"===e&&t.parentNode===n||m(t,e))return t}while(t=i(t))}return null}function i(t){var e=t.host;return e&&e.nodeType?e:t.parentNode}function o(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.preventDefault()}function r(t,e,n){t.addEventListener(e,n,z)}function a(t,e,n){t.removeEventListener(e,n,z)}function s(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(U," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(U," ")}}function l(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return H.defaultView&&H.defaultView.getComputedStyle?n=H.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function c(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,r=i.length;if(n)for(;o<r;o++)n(i[o],o);return i}return[]}function d(t,e,n,i,o,r,a){t=t||e[W];var s=H.createEvent("Event"),l=t.options,c="on"+n.charAt(0).toUpperCase()+n.substr(1);s.initEvent(n,!0,!0),s.to=e,s.from=o||e,s.item=i||e,s.clone=T,s.oldIndex=r,s.newIndex=a,e.dispatchEvent(s),l[c]&&l[c].call(t,s)}function u(t,e,n,i,o,r,a,s){var l,c,d=t[W],u=d.options.onMove;return l=H.createEvent("Event"),l.initEvent("move",!0,!0),l.to=e,l.from=t,l.dragged=n,l.draggedRect=i,l.related=o||e,l.relatedRect=r||e.getBoundingClientRect(),l.willInsertAfter=s,t.dispatchEvent(l),u&&(c=u.call(d,l,a)),c}function h(t){t.draggable=!1}function f(){tt=!1}function p(t,e){var n=t.lastElementChild,i=n.getBoundingClientRect();return e.clientY-(i.top+i.height)>5||e.clientX-(i.left+i.width)>5}function g(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function v(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!m(t,e)||n++;return n}function m(t,e){if(t){e=e.split(".");var n=e.shift().toUpperCase(),i=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");return!(""!==n&&t.nodeName.toUpperCase()!=n||e.length&&((" "+t.className+" ").match(i)||[]).length!=e.length)}return!1}function b(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,setTimeout(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function _(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function y(t){return G?G(t).clone(!0)[0]:J&&J.dom?J.dom(t).cloneNode(!0):t.cloneNode(!0)}function D(t){for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var i=e[n];i.checked&&it.push(i)}}if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var x,w,C,T,E,S,L,I,k,N,A,O,M,B,Y,$,P,R,X,V,F={},U=/\s+/g,j=/left|right|inline/,W="Sortable"+(new Date).getTime(),q=window,H=q.document,Q=q.parseInt,G=q.jQuery||q.Zepto,J=q.Polymer,z=!1,K=!!("draggable"in H.createElement("div")),Z=function(t){return!navigator.userAgent.match(/Trident.*rv[ :]?11\./)&&(t=H.createElement("x"),t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents)}(),tt=!1,et=Math.abs,nt=Math.min,it=[],ot=[],rt=b(function(t,e,n){if(n&&e.scroll){var i,o,r,a,s,l,c=n[W],d=e.scrollSensitivity,u=e.scrollSpeed,h=t.clientX,f=t.clientY,p=window.innerWidth,g=window.innerHeight;if(k!==n&&(I=e.scroll,k=n,N=e.scrollFn,!0===I)){I=n;do{if(I.offsetWidth<I.scrollWidth||I.offsetHeight<I.scrollHeight)break}while(I=I.parentNode)}I&&(i=I,o=I.getBoundingClientRect(),r=(et(o.right-h)<=d)-(et(o.left-h)<=d),a=(et(o.bottom-f)<=d)-(et(o.top-f)<=d)),r||a||(r=(p-h<=d)-(h<=d),a=(g-f<=d)-(f<=d),(r||a)&&(i=q)),F.vx===r&&F.vy===a&&F.el===i||(F.el=i,F.vx=r,F.vy=a,clearInterval(F.pid),i&&(F.pid=setInterval(function(){if(l=a?a*u:0,s=r?r*u:0,"function"==typeof N)return N.call(c,s,l,t);i===q?q.scrollTo(q.pageXOffset+s,q.pageYOffset+l):(i.scrollTop+=l,i.scrollLeft+=s)},24)))}},30),at=function(t){function e(t,e){return void 0!==t&&!0!==t||(t=n.name),"function"==typeof t?t:function(n,i){var o=i.options.group.name;return e?t:t&&(t.join?t.indexOf(o)>-1:o==t)}}var n={},i=t.group;i&&"object"==typeof i||(i={name:i}),n.name=i.name,n.checkPull=e(i.pull,!0),n.checkPut=e(i.put),n.revertClone=i.revertClone,t.group=n};t.prototype={constructor:t,_onTapStart:function(t){var e,i=this,o=this.el,r=this.options,a=r.preventOnFilter,s=t.type,l=t.touches&&t.touches[0],c=(l||t).target,u=t.target.shadowRoot&&t.path&&t.path[0]||c,h=r.filter;if(D(o),!x&&!(/mousedown|pointerdown/.test(s)&&0!==t.button||r.disabled)&&(c=n(c,r.draggable,o))&&L!==c){if(e=v(c,r.draggable),"function"==typeof h){if(h.call(this,t,c,this))return d(i,u,"filter",c,o,e),void(a&&t.preventDefault())}else if(h&&(h=h.split(",").some(function(t){if(t=n(u,t.trim(),o))return d(i,t,"filter",c,o,e),!0})))return void(a&&t.preventDefault());r.handle&&!n(u,r.handle,o)||this._prepareDragStart(t,l,c,e)}},_prepareDragStart:function(t,e,n,i){var o,a=this,l=a.el,u=a.options,f=l.ownerDocument;n&&!x&&n.parentNode===l&&(R=t,E=l,x=n,w=x.parentNode,S=x.nextSibling,L=n,$=u.group,B=i,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,x.style["will-change"]="transform",o=function(){a._disableDelayedDrag(),x.draggable=a.nativeDraggable,s(x,u.chosenClass,!0),a._triggerDragStart(t,e),d(a,E,"choose",x,E,B)},u.ignore.split(",").forEach(function(t){c(x,t.trim(),h)}),r(f,"mouseup",a._onDrop),r(f,"touchend",a._onDrop),r(f,"touchcancel",a._onDrop),r(f,"pointercancel",a._onDrop),r(f,"selectstart",a),u.delay?(r(f,"mouseup",a._disableDelayedDrag),r(f,"touchend",a._disableDelayedDrag),r(f,"touchcancel",a._disableDelayedDrag),r(f,"mousemove",a._disableDelayedDrag),r(f,"touchmove",a._disableDelayedDrag),r(f,"pointermove",a._disableDelayedDrag),a._dragStartTimer=setTimeout(o,u.delay)):o())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),a(t,"mouseup",this._disableDelayedDrag),a(t,"touchend",this._disableDelayedDrag),a(t,"touchcancel",this._disableDelayedDrag),a(t,"mousemove",this._disableDelayedDrag),a(t,"touchmove",this._disableDelayedDrag),a(t,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(t,e){e=e||("touch"==t.pointerType?t:null),e?(R={target:x,clientX:e.clientX,clientY:e.clientY},this._onDragStart(R,"touch")):this.nativeDraggable?(r(x,"dragend",this),r(E,"dragstart",this._onDragStart)):this._onDragStart(R,!0);try{H.selection?setTimeout(function(){H.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){if(E&&x){var e=this.options;s(x,e.ghostClass,!0),s(x,e.dragClass,!1),t.active=this,d(this,E,"start",x,E,B)}else this._nulling()},_emulateDragOver:function(){if(X){if(this._lastX===X.clientX&&this._lastY===X.clientY)return;this._lastX=X.clientX,this._lastY=X.clientY,Z||l(C,"display","none");var t=H.elementFromPoint(X.clientX,X.clientY),e=t,n=ot.length;if(e)do{if(e[W]){for(;n--;)ot[n]({clientX:X.clientX,clientY:X.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);Z||l(C,"display","")}},_onTouchMove:function(e){if(R){var n=this.options,i=n.fallbackTolerance,o=n.fallbackOffset,r=e.touches?e.touches[0]:e,a=r.clientX-R.clientX+o.x,s=r.clientY-R.clientY+o.y,c=e.touches?"translate3d("+a+"px,"+s+"px,0)":"translate("+a+"px,"+s+"px)";if(!t.active){if(i&&nt(et(r.clientX-this._lastX),et(r.clientY-this._lastY))<i)return;this._dragStarted()}this._appendGhost(),V=!0,X=r,l(C,"webkitTransform",c),l(C,"mozTransform",c),l(C,"msTransform",c),l(C,"transform",c),e.preventDefault()}},_appendGhost:function(){if(!C){var t,e=x.getBoundingClientRect(),n=l(x),i=this.options;C=x.cloneNode(!0),s(C,i.ghostClass,!1),s(C,i.fallbackClass,!0),s(C,i.dragClass,!0),l(C,"top",e.top-Q(n.marginTop,10)),l(C,"left",e.left-Q(n.marginLeft,10)),l(C,"width",e.width),l(C,"height",e.height),l(C,"opacity","0.8"),l(C,"position","fixed"),l(C,"zIndex","100000"),l(C,"pointerEvents","none"),i.fallbackOnBody&&H.body.appendChild(C)||E.appendChild(C),t=C.getBoundingClientRect(),l(C,"width",2*e.width-t.width),l(C,"height",2*e.height-t.height)}},_onDragStart:function(t,e){var n=t.dataTransfer,i=this.options;this._offUpEvents(),$.checkPull(this,this,x,t)&&(T=y(x),T.draggable=!1,T.style["will-change"]="",l(T,"display","none"),s(T,this.options.chosenClass,!1),E.insertBefore(T,x),d(this,E,"clone",x)),s(x,i.dragClass,!0),e?("touch"===e?(r(H,"touchmove",this._onTouchMove),r(H,"touchend",this._onDrop),r(H,"touchcancel",this._onDrop),r(H,"pointermove",this._onTouchMove),r(H,"pointerup",this._onDrop)):(r(H,"mousemove",this._onTouchMove),r(H,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,50)):(n&&(n.effectAllowed="move",i.setData&&i.setData.call(this,n,x)),r(H,"drop",this),setTimeout(this._dragStarted,0))},_onDragOver:function(i){var o,r,a,s,c=this.el,d=this.options,h=d.group,g=t.active,v=$===h,m=!1,b=d.sort;if(void 0!==i.preventDefault&&(i.preventDefault(),!d.dragoverBubble&&i.stopPropagation()),!x.animated&&(V=!0,g&&!d.disabled&&(v?b||(s=!E.contains(x)):P===this||(g.lastPullMode=$.checkPull(this,g,x,i))&&h.checkPut(this,g,x,i))&&(void 0===i.rootEl||i.rootEl===this.el))){if(rt(i,d,this.el),tt)return;if(o=n(i.target,d.draggable,c),r=x.getBoundingClientRect(),P!==this&&(P=this,m=!0),s)return e(g,!0),w=E,void(T||S?E.insertBefore(x,T||S):b||E.appendChild(x));if(0===c.children.length||c.children[0]===C||c===i.target&&p(c,i)){if(0!==c.children.length&&c.children[0]!==C&&c===i.target&&(o=c.lastElementChild),o){if(o.animated)return;a=o.getBoundingClientRect()}e(g,v),!1!==u(E,c,x,r,o,a,i)&&(x.contains(c)||(c.appendChild(x),w=c),this._animate(r,x),o&&this._animate(a,o))}else if(o&&!o.animated&&o!==x&&void 0!==o.parentNode[W]){A!==o&&(A=o,O=l(o),M=l(o.parentNode)),a=o.getBoundingClientRect();var _=a.right-a.left,y=a.bottom-a.top,D=j.test(O.cssFloat+O.display)||"flex"==M.display&&0===M["flex-direction"].indexOf("row"),L=o.offsetWidth>x.offsetWidth,I=o.offsetHeight>x.offsetHeight,k=(D?(i.clientX-a.left)/_:(i.clientY-a.top)/y)>.5,N=o.nextElementSibling,B=!1;if(D){var Y=x.offsetTop,R=o.offsetTop;B=Y===R?o.previousElementSibling===x&&!L||k&&L:o.previousElementSibling===x||x.previousElementSibling===o?(i.clientY-a.top)/y>.5:R>Y}else m||(B=N!==x&&!I||k&&I);var X=u(E,c,x,r,o,a,i,B);!1!==X&&(1!==X&&-1!==X||(B=1===X),tt=!0,setTimeout(f,30),e(g,v),x.contains(c)||(B&&!N?c.appendChild(x):o.parentNode.insertBefore(x,B?N:o)),w=x.parentNode,this._animate(r,x),this._animate(a,o))}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();1===t.nodeType&&(t=t.getBoundingClientRect()),l(e,"transition","none"),l(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,l(e,"transition","all "+n+"ms"),l(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=setTimeout(function(){l(e,"transition",""),l(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;a(H,"touchmove",this._onTouchMove),a(H,"pointermove",this._onTouchMove),a(t,"mouseup",this._onDrop),a(t,"touchend",this._onDrop),a(t,"pointerup",this._onDrop),a(t,"touchcancel",this._onDrop),a(t,"pointercancel",this._onDrop),a(t,"selectstart",this)},_onDrop:function(e){var n=this.el,i=this.options;clearInterval(this._loopId),clearInterval(F.pid),clearTimeout(this._dragStartTimer),a(H,"mousemove",this._onTouchMove),this.nativeDraggable&&(a(H,"drop",this),a(n,"dragstart",this._onDragStart)),this._offUpEvents(),e&&(V&&(e.preventDefault(),!i.dropBubble&&e.stopPropagation()),C&&C.parentNode&&C.parentNode.removeChild(C),E!==w&&"clone"===t.active.lastPullMode||T&&T.parentNode&&T.parentNode.removeChild(T),x&&(this.nativeDraggable&&a(x,"dragend",this),h(x),x.style["will-change"]="",s(x,this.options.ghostClass,!1),s(x,this.options.chosenClass,!1),d(this,E,"unchoose",x,E,B),E!==w?(Y=v(x,i.draggable))>=0&&(d(null,w,"add",x,E,B,Y),d(this,E,"remove",x,E,B,Y),d(null,w,"sort",x,E,B,Y),d(this,E,"sort",x,E,B,Y)):x.nextSibling!==S&&(Y=v(x,i.draggable))>=0&&(d(this,E,"update",x,E,B,Y),d(this,E,"sort",x,E,B,Y)),t.active&&(null!=Y&&-1!==Y||(Y=B),d(this,E,"end",x,E,B,Y),this.save()))),this._nulling()},_nulling:function(){E=x=w=C=S=T=L=I=k=R=X=V=Y=A=O=P=$=t.active=null,it.forEach(function(t){t.checked=!0}),it.length=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragover":case"dragenter":x&&(this._onDragOver(t),o(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],i=this.el.children,o=0,r=i.length,a=this.options;o<r;o++)t=i[o],n(t,a.draggable,this.el)&&e.push(t.getAttribute(a.dataIdAttr)||g(t));return e},sort:function(t){var e={},i=this.el;this.toArray().forEach(function(t,o){var r=i.children[o];n(r,this.options.draggable,i)&&(e[t]=r)},this),t.forEach(function(t){e[t]&&(i.removeChild(e[t]),i.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return n(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&at(n)},destroy:function(){var t=this.el;t[W]=null,a(t,"mousedown",this._onTapStart),a(t,"touchstart",this._onTapStart),a(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(a(t,"dragover",this),a(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),ot.splice(ot.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},r(H,"touchmove",function(e){t.active&&e.preventDefault()});try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){z={capture:!1,passive:!1}}}))}catch(t){}return t.utils={on:r,off:a,css:l,find:c,is:function(t,e){return!!n(t,e,t)},extend:_,throttle:b,closest:n,toggleClass:s,clone:y,index:v},t.create=function(e,n){return new t(e,n)},t.version="1.6.1",t})},h6Vq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("BO1k"),o=n.n(i),r=n("DAYN"),a=n.n(r);e.default={name:"twoDndList",components:{draggable:a.a},computed:{filterList2:function(){var t=this;return this.list2.filter(function(e){return!!t.isNotInList1(e)&&e})}},props:{list1:{type:Array,default:function(){return[]}},list2:{type:Array,default:function(){return[]}},list1Title:{type:String,default:"list1"},list2Title:{type:String,default:"list2"},width1:{type:String,default:"48%"},width2:{type:String,default:"48%"}},methods:{isNotInList1:function(t){return this.list1.every(function(e){return t.id!==e.id})},isNotInList2:function(t){return this.list2.every(function(e){return t.id!==e.id})},deleteEle:function(t){var e=!0,n=!1,i=void 0;try{for(var r,a=o()(this.list1);!(e=(r=a.next()).done);e=!0){var s=r.value;if(s.id===t.id){var l=this.list1.indexOf(s);this.list1.splice(l,1);break}}}catch(t){n=!0,i=t}finally{try{!e&&a.return&&a.return()}finally{if(n)throw i}}this.isNotInList2(t)&&this.list2.unshift(t)},pushEle:function(t){this.list1.push(t)}}}},uxvo:function(t,e,n){var i=n("VU/8")(n("cwWJ"),n("3Crn"),null,null,null);t.exports=i.exports},viA7:function(t,e,n){"use strict";function i(){return n.i(o.a)({url:"/article/list",method:"get"})}e.a=i;var o=n("Vo7i")},wYK6:function(t,e,n){function i(t){n("Q0ty")}var o=n("VU/8")(n("h6Vq"),n("1s6x"),i,"data-v-0dcfd92e",null);t.exports=o.exports}});