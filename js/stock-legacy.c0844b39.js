"use strict";(self["webpackChunkvue2_finance"]=self["webpackChunkvue2_finance"]||[]).push([[131],{5791:function(t,n,s){s.r(n),s.d(n,{default:function(){return f}});var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"stock"},[s("van-cell",{attrs:{"is-link":"",icon:"./imgs/stock_icon.png",size:"large"},scopedSlots:t._u([{key:"title",fn:function(){return[s("h5",[t._v("股票榜单")])]},proxy:!0}])}),s("van-tabs",{model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},t._l(t.stocks,(function(n,e){return s("van-tab",{key:e,attrs:{title:t.markets[e]}},[s("van-cell-group",{attrs:{inset:""}},[s("van-cell",[t._l(t.stocks[e],(function(n,e){return s("div",{key:e,staticClass:"stock_item"},[s("span",{staticClass:"num"},[t._v(t._s(e+1))]),s("span",{staticClass:"name"},[t._v(t._s(n.name))]),s("span",{staticClass:"arrow",class:n.percent>=0?"up":"down"},[s("van-icon",{attrs:{name:"down"}})],1),s("span",{staticClass:"value"},[t._v(t._s(n.value))])])}))],2)],1)],1)})),1)],1)},a=[],c=s(7906),r=s(6198),i=(s(1539),s(4747),s(693)),u={data:function(){return{active:0,markets:["全球","沪深","港股","美股"],stocks:[]}},mounted:function(){var t=this;this.markets.forEach(function(){var n=(0,r.Z)((0,c.Z)().mark((function n(s,e){var a;return(0,c.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,i.Sn({type:e});case 2:a=n.sent,t.$set(t.stocks,e,a.data.items);case 4:case"end":return n.stop()}}),n)})));return function(t,s){return n.apply(this,arguments)}}())}},l=u,o=s(1001),v=(0,o.Z)(l,e,a,!1,null,"2c126308",null),f=v.exports}}]);
//# sourceMappingURL=stock-legacy.c0844b39.js.map