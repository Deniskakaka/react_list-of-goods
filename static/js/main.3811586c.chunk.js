(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var s,r=n(4),c=n.n(r),o=n(1),i=n(5),a=n(6),u=n(9),l=n(7),b=n(8),j=n(2),h=n.n(j),d=(n(14),n(15),n(0)),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function O(t,e){var n=e.sortType,r=e.isReversed,c=Object(b.a)(t);return n===s.ALPHABET&&c.sort((function(t,e){return t.localeCompare(e)})),n===s.LENGTH&&c.sort((function(t,e){return t.length-e.length})),console.log(n,r),r?c.reverse():c}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(s||(s={}));var f=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={isReversed:!1,sortType:s.NONE},t}return Object(a.a)(n,[{key:"render",value:function(){var t=this;return Object(d.jsxs)("div",{className:"section content",children:[Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsx)("button",{type:"button",className:"button is-info ".concat(this.state.sortType!==s.ALPHABET&&"is-light"),onClick:function(){return t.setState((function(t){return Object(o.a)(Object(o.a)({},t),{},{sortType:s.ALPHABET})}))},children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:"button is-success ".concat(this.state.sortType!==s.LENGTH&&"is-light"),onClick:function(){return t.setState((function(t){return Object(o.a)(Object(o.a)({},t),{},{sortType:s.LENGTH})}))},children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:"button is-warning ".concat(!this.state.isReversed&&"is-light"),onClick:function(){return t.setState((function(t){return Object(o.a)(Object(o.a)({},t),{},{isReversed:!t.isReversed})}))},children:"Reverse"}),this.state.sortType||this.state.isReversed?Object(d.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){return t.setState((function(t){return Object(o.a)(Object(o.a)({},t),{},{sortType:s.NONE,isReversed:!1})}))},children:"Reset"}):""]}),Object(d.jsx)("ul",{children:O(p,this.state).map((function(t){return Object(d.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})}}]),n}(h.a.PureComponent);c.a.render(Object(d.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.3811586c.chunk.js.map