modulex.add("tree",["component/extension/delegate-children","event-dom/gesture/tap","util","xtemplate/runtime","component/container","node","component/extension/content-box"],function(e,t,n){var a,s,r,l,c,i,d,o,u=e("component/extension/delegate-children"),h=e("event-dom/gesture/tap"),f=e("util"),p=e("xtemplate/runtime"),g=e("component/container"),v=e("node"),C=e("component/extension/content-box");a=function(e){var t=e=function(e){function t(e,t){e.data,e.affix;t.data+="\r\n        ",d.line=3;var n;return n=p(r,e,{escape:1,params:["selected"]},t,["getBaseCssClasses"]),t=t.writeEscaped(n),t.data+="\r\n     ",t}function n(e,t,n){var a=e.data,l=e.affix;t.data+='\r\n    <div class="',d.line=9;var c="checked",i=(s=l.checkState)!==n?s:(s=a.checkState)!==n?s:e.resolveLooseUp(["checkState"]);c="checked"+i;var o;o=p(r,e,{escape:1,params:[c]},t,["getBaseCssClasses"]),t=t.writeEscaped(o),t.data+=" ";var u;return u=p(r,e,{escape:1,params:["checked"]},t,["getBaseCssClasses"]),t=t.writeEscaped(u),t.data+='"></div>\r\n    ',t}function a(e,t){e.data,e.affix;return t.data+='\r\nstyle="display:none"\r\n',t}{var s,r=this,l=r.root,c=r.buffer,i=r.scope,d=(r.runtime,r.name,r.pos),o=i.data,u=i.affix,h=l.nativeCommands,f=l.utils,p=f.callFn,g=(f.callCommand,h.range,h.foreach,h.forin,h.each,h["with"],h["if"]);h.set,h.include,h.parse,h.extend,h.block,h.macro,h["debugger"]}c.data+='<div class="';var v;v=p(r,i,{escape:1,params:["row"]},c,["getBaseCssClasses"]),c=c.writeEscaped(v),c.data+="\r\n     ",d.line=2,d.line=2;var C=(s=u.selected)!==e?s:(s=o.selected)!==e?s:i.resolveLooseUp(["selected"]);c=g.call(r,i,{params:[C],fn:t},c),c.data+='\r\n     ">\r\n    <div class="',d.line=6;var x;x=p(r,i,{escape:1,params:["expand-icon"]},c,["getBaseCssClasses"]),c=c.writeEscaped(x),c.data+='">\r\n    </div>\r\n    ',d.line=8,d.line=8;var m=(s=u.checkable)!==e?s:(s=o.checkable)!==e?s:i.resolveLooseUp(["checkable"]);c=g.call(r,i,{params:[m],fn:n},c),c.data+='\r\n    <div class="',d.line=11;var k;k=p(r,i,{escape:1,params:["icon"]},c,["getBaseCssClasses"]),c=c.writeEscaped(k),c.data+='">\r\n\r\n    </div>\r\n    <div class="',d.line=14;var S;S=p(r,i,{escape:1,params:["content"]},c,["getBaseCssClasses"]),c=c.writeEscaped(S),c.data+='">';var E=(s=u.content)!==e?s:(s=o.content)!==e?s:i.resolveLooseUp(["content"]);c=c.write(E),c.data+='</div>\r\n</div>\r\n<div class="',d.line=16;var b;b=p(r,i,{escape:1,params:["children"]},c,["getBaseCssClasses"]),c=c.writeEscaped(b),c.data+='"\r\n',d.line=17;var I=(s=u.expanded)!==e?s:(s=o.expanded)!==e?s:i.resolveLooseUp(["expanded"]);return c=g.call(r,i,{params:[!I],fn:a},c),c.data+="\r\n>\r\n</div>",c};return t.TPL_NAME=n.id||n.name,e}(),s=function(e){function t(){}var n=u,a=h,s=f;return t.ATTRS={allowTextSelection:{value:!0},focusable:{value:!0},handleGestureEvents:{value:!0},showRootNode:{value:!0,render:1},selectedItem:{}},s.augment(t,n,{isTree:1,__bindUI:function(){var e=this,t=e.get("prefixCls"),n=t+"tree-node";e.$el.delegate(a.TAP,"."+n,e.handleChildrenEvents,e)},_onSetSelectedItem:function(e,t){e&&t.prevVal&&t.prevVal.set("selected",!1,{data:{byPassSetTreeSelectedItem:1}})},_onSetShowRootNode:function(e){this.get("rowEl")[e?"show":"hide"]()}}),e=t}(),r=function(e){var t=a,n=p,s=new n(t);return e=function(){return s.render.apply(s,arguments)}}(),l=function(e){function t(e){var t=this;e.target===t&&u(t,e.component,t.get("depth"),e.index)}function n(e){var t=this;e.target===t&&(h(t.get("tree"),e.component),p(t,e.index))}function a(e){var t=this;e.target===t&&t.el.setAttribute("aria-setsize",t.get("children").length)}function s(e){var t=e.get("parent"),n=t&&t.get("children"),a=n&&n[n.length-1];return!a||a===e}function l(e){var t=e.get("isLeaf");return!(t===!1||void 0===t&&e.get("children").length)}function c(e){var t=e.get("children");return e.get("expanded")&&t.length?c(t[t.length-1]):e}function i(e){var t=e.prev();return t=t?c(t):e.get("parent")}function d(e){var t,n,a=e.get("children");if(e.get("expanded")&&a.length)return a[0];for(t=e.next(),n=e;!t&&(n=n.get("parent"));)t=n.next();return t}function o(e){e.refreshCss(s(e),l(e))}function u(e,t,n,a){var s=e.get("tree");s&&(h(s,t,n+1),p(e,a))}function h(e,t,n){void 0!==n&&t.set("depth",n),m.each(t.get("children"),function(t){"number"==typeof n?h(e,t,n+1):h(e,t)})}function p(e,t){o(e),t=Math.max(0,t-1);for(var n,a=e.get("children"),s=a.length;s>t;t++)n=a[t],o(n),n.el.setAttribute("aria-posinset",t+1)}var x=g,m=f,k=v,S=v.Event.KeyCode,E="selected",b="expand-icon",I="expand-icon-{t}",w=[I].join(" "),T=[I+"minus"].join(" "),y=[I+"plus"].join(" "),B=["file-icon"].join(" "),A=["expanded-folder-icon"].join(" "),R=["collapsed-folder-icon"].join(" "),_="row",L="children",N="lchildren",D=r,U=C;return e=x.extend([U],{beforeCreateDom:function(e){m.mix(e.elAttrs,{role:"tree-node","aria-labelledby":"ks-content"+e.id,"aria-expanded":e.expanded?"true":"false","aria-selected":e.selected?"true":"false","aria-level":e.depth,title:e.tooltip})},bindUI:function(){this.on("afterAddChild",t),this.on("afterRemoveChild",n),this.on("afterAddChild afterRemoveChild",a)},syncUI:function(){o(this),a.call(this,{target:this})},handleKeyDownInternal:function(e){var t,n=this,a=!0,s=n.get("tree"),r=n.get("expanded"),l=n.get("isLeaf"),o=n.get("children"),u=e.keyCode;switch(u){case S.ENTER:return n.handleClickInternal(e);case S.HOME:t=s;break;case S.END:t=c(s);break;case S.UP:t=i(n);break;case S.DOWN:t=d(n);break;case S.LEFT:r&&(o.length||l===!1)?n.set("expanded",!1):t=n.get("parent");break;case S.RIGHT:(o.length||l===!1)&&(r?t=o[0]:n.set("expanded",!0));break;default:a=!1}return t&&t.select(),a},next:function(){var e,t,n=this,a=n.get("parent");return a?(e=a.get("children"),t=m.indexOf(n,e),t===e.length-1?null:e[t+1]):null},prev:function(){var e,t,n=this,a=n.get("parent");return a?(e=a.get("children"),t=m.indexOf(n,e),0===t?null:e[t-1]):null},select:function(){this.set("selected",!0)},handleClickInternal:function(e){e.stopPropagation();var t=this,n=k(e.target),a=t.get("expanded"),s=t.get("tree");return s.focus(),t.callSuper(e),n.equals(t.get("expandIconEl"))?t.set("expanded",!a):(t.select(),t.fire("click",{domEvent:e})),!0},createChildren:function(){var e=this;e.renderChildren.apply(e,arguments),e===e.get("tree")&&u(e,e,-1,0)},refreshCss:function(e,t){var n,a,s=this,r=s.get("iconEl"),l=s.get("expandIconEl"),c=s.getChildrenContainerEl();if(t)n=B,a=w;else{var i=s.get("expanded");i?(n=A,a=T):(n=R,a=y)}r[0].className=s.getBaseCssClasses(n),l[0].className=s.getBaseCssClasses([b,m.substitute(a,{t:e?"l":"t"})]),c[0].className=s.getBaseCssClasses(e?N:L)},_onSetDepth:function(e){this.el.setAttribute("aria-level",e)},getChildrenContainerEl:function(){return this.get("childrenEl")},_onSetExpanded:function(e){var t=this,n=t.getChildrenContainerEl();n[e?"show":"hide"](),t.el.setAttribute("aria-expanded",e),o(t),t.fire(e?"expand":"collapse")},_onSetSelected:function(e,t){var n=this,a=n.get("rowEl");a[e?"addClass":"removeClass"](n.getBaseCssClasses(E)),n.el.setAttribute("aria-selected",e);var s=this.get("tree");t&&t.byPassSetTreeSelectedItem||s.set("selectedItem",e?this:null)},expandAll:function(){var e=this;e.set("expanded",!0),m.each(e.get("children"),function(e){e.expandAll()})},collapseAll:function(){var e=this;e.set("expanded",!1),m.each(e.get("children"),function(e){e.collapseAll()})}},{ATTRS:{allowTextSelection:{value:!0},focusable:{value:!1},handleGestureEvents:{value:!1},contentTpl:{value:D},isLeaf:{render:1,sync:0,parse:function(e){var t=this;return e.hasClass(t.getBaseCssClass("leaf"))?!0:e.hasClass(t.getBaseCssClass("folder"))?!1:void 0}},rowEl:{selector:function(){return"."+this.getBaseCssClass(_)}},childrenEl:{selector:function(){return"."+this.getBaseCssClass(L)}},expandIconEl:{selector:function(){return"."+this.getBaseCssClass(b)}},iconEl:{selector:function(){return"."+this.getBaseCssClass("icon")}},selected:{render:1,sync:0},expanded:{sync:0,value:!1,render:1,parse:function(){return"none"!==this.get("childrenEl").css("display")}},tooltip:{render:1,sync:0},tree:{getter:function(){for(var e=this,t=e;t&&!t.isTree;)t=t.get("parent");return t}},depth:{render:1,sync:0},defaultChildCfg:{valueFn:function(){return{xclass:"tree-node"}}}},xclass:"tree-node"})}(),c=function(e){var t=l,n=f,a=v,s=2,r=1,c=0,i="checked",d="checked0 checked1 checked2",o=t.extend({handleClickInternal:function(e){var t,n=this,s=n.get("expanded"),l=n.get("expandIconEl"),i=n.get("tree"),d=a(e.target);return i.focus(),n.callSuper(e),d.equals(l)?(n.set("expanded",!s),void 0):(t=n.get("checkState"),t=t===r?c:r,n.set("checkState",t),!0)},_onSetCheckState:function(e){var t,a,l,o,u,h=this,f=h.get("parent"),p=h.getBaseCssClasses(i).split(/\s+/).join(e+" ")+e,g=h.get("checkIconEl");if(g.removeClass(h.getBaseCssClasses(d)).addClass(p),(e===r||e===c)&&n.each(h.get("children"),function(t){t.set("checkState",e)}),f){for(t=0,u=f.get("children"),a=0;a<u.length;a++){if(l=u[a],o=l.get("checkState"),o===s)return f.set("checkState",s),void 0;o===r&&t++}0===t?f.set("checkState",c):t===u.length?f.set("checkState",r):f.set("checkState",s)}}},{ATTRS:{checkIconEl:{selector:function(){return"."+this.getBaseCssClass(i)}},checkable:{value:!0,render:1,sync:0},checkState:{value:0,sync:0,render:1,parse:function(){var e=this.get("checkIconEl");if(e)for(var t=d.split(/\s+/),n=0;n<t.length;n++)if(e.hasClass(this.getBaseCssClass(t[n])))return n;return void 0}},defaultChildCfg:{valueFn:function(){return{xclass:"check-tree-node"}}}},xclass:"check-tree-node"});return o.CheckState={PARTIAL_CHECK:s,CHECK:r,EMPTY:c},e=o}(),i=function(e){var t=c,n=s;return e=t.extend([n],{handleKeyDownInternal:function(e){var t=this.get("selectedItem");return t===this?this.callSuper(e):t&&t.handleKeyDownInternal(e)},_onSetFocused:function(e,t){var n=this;n.callSuper(e,t),e&&!n.get("selectedItem")&&n.select()}},{ATTRS:{defaultChildCfg:{valueFn:function(){return{xclass:"check-tree-node"}}}},xclass:"check-tree"})}(),d=function(e){var t=l,n=s;return e=t.extend([n],{handleKeyDownInternal:function(e){var t=this.get("selectedItem");return t===this?this.callSuper(e):t&&t.handleKeyDownInternal(e)},_onSetFocused:function(e){var t=this;t.callSuper(e),e&&!t.get("selectedItem")&&t.select()}},{ATTRS:{defaultChildCfg:{valueFn:function(){return{xclass:"tree-node"}}}},xclass:"tree"})}(),o=function(e){var t=d,n=l,a=c,s=i;return t.Node=n,t.CheckNode=a,t.CheckTree=s,e=t}(),n.exports=o});