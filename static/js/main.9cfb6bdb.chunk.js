(this["webpackJsonpburger-builder"]=this["webpackJsonpburger-builder"]||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"Ingredient_BreadBottom__1yBpX",BreadTop:"Ingredient_BreadTop__39rzb",Seeds1:"Ingredient_Seeds1__1qhDu",Seeds2:"Ingredient_Seeds2__RITvw",Meat:"Ingredient_Meat__D3_hK",Cheese:"Ingredient_Cheese__1kNyK",Salad:"Ingredient_Salad__xHcM-",Bacon:"Ingredient_Bacon__31U0x"}},function(e,t,a){e.exports={BuildControl:"BuildControl_BuildControl__hP1lS",Label:"BuildControl_Label__Z8X-r",Less:"BuildControl_Less__3nvK6",More:"BuildControl_More__1nZwQ"}},,,,,,,,function(e,t,a){e.exports={Content:"Layout_Content__3f-4c"}},function(e,t,a){e.exports={Burger:"Burger_Burger__1RC_O"}},function(e,t,a){e.exports={BuildControls:"BuildControls_BuildControls__31Ay0"}},,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),o=a.n(l),c=(a(19),function(e){return e.children}),s=a(10),i=a.n(s),u=function(e){return r.a.createElement(c,null,r.a.createElement("div",null,"Toolbar, Sidebar, Backdrop"),r.a.createElement("main",{className:i.a.Content},e.children))},d=a(3),m=a(4),b=a(6),_=a(5),p=a(7),h=a(13),B=a(11),E=a.n(B),f=a(1),v=a.n(f),g=function(e){function t(){return Object(d.a)(this,t),Object(b.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:v.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:v.a.BreadTop},r.a.createElement("div",{className:v.a.Seeds1}),r.a.createElement("div",{className:v.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:v.a.Meat});break;case"cheese":e=r.a.createElement("div",{className:v.a.Cheese});break;case"bacon":e=r.a.createElement("div",{className:v.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:v.a.Salad});break;default:e=null}return e}}]),t}(n.Component),y=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(h.a)(Array(e.ingredients[t])).map((function(e,a){return r.a.createElement(g,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:E.a.Burger},r.a.createElement(g,{type:"bread-top"}),t,r.a.createElement(g,{type:"bread-bottom"}))},C=a(12),k=a.n(C),N=a(2),O=a.n(N),j=function(e){return r.a.createElement("div",{className:O.a.BuildControl},r.a.createElement("div",{className:O.a.Label},e.label),r.a.createElement("button",{className:O.a.Less},"Less"),r.a.createElement("button",{className:O.a.More},"More"))},w=[{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"},{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"}],S=function(e){return r.a.createElement("div",{className:k.a.BuildControls},w.map((function(e){return r.a.createElement(j,{key:e.label,label:e.label})})))},I=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(b.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0}},a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(c,null,r.a.createElement(y,{ingredients:this.state.ingredients}),r.a.createElement(S,null))}}]),t}(n.Component);var M=function(){return r.a.createElement("div",null,r.a.createElement(u,null,r.a.createElement(I,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[14,1,2]]]);
//# sourceMappingURL=main.9cfb6bdb.chunk.js.map