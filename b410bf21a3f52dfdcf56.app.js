(self.webpackChunkfree_your_brain=self.webpackChunkfree_your_brain||[]).push([[143],{9634:(e,t,n)=>{"use strict";var r,a,o,i,l,c=n(7294),u=n(3935),s=n(5513),m=n(6709),d=n(1120),f=n(7623),p=n(7369),v=n(3832);!function(e){e.Progress="progress",e.Removed="removed",e.Done="done"}(r||(r={})),function(e){e.Project="project",e.Information="information"}(a||(a={})),function(e){e.Main="",e.ChaosBox="chaos-box",e.Projects="projects",e.Information="information",e.Tags="tags",e.Calendar="calendar",e.Settings="settings",e.SigIn="sign-in"}(o||(o={})),function(e){e.AcUnit="acUnit",e.Apple="apple",e.Apartment="apartment"}(i||(i={}));var g="/tags",h=((l={})[o.Main]="Free your brain",l[o.ChaosBox]="Chaos box",l[o.Calendar]="Calendar",l[o.Information]="Information",l[o.Tags]="Tags",l[o.Projects]="Projects",l[o.Settings]="Settings",l[o.SigIn]="SigIn",l),b=n(6486),y=n(9603);function E(e,t){var n=(0,c.useState)(),r=n[0],a=n[1];return(0,c.useEffect)((function(){a(void 0)}),t),(0,c.useEffect)((function(){var t=e(),n={event:function(e,t){a(t)},end:b.noop,error:b.noop},r=t.run(n,(0,y.e4)());return function(){r.dispose()}}),t),r}var Z,T,_=n(4586),w=n(2305),x=n(8571),k=n(2608),A=[{id:(0,_.Z)(),status:r.Progress,created_at:"2021-03-01T13:00+03:00",title:"Первая таска",body:"Описание таски"},{id:(0,_.Z)(),status:r.Progress,created_at:"2021-03-01T13:00+03:00",title:"Вторая таска",body:"Описание таски"},{id:(0,_.Z)(),status:r.Progress,created_at:"2021-03-01T13:00+03:00",title:"Третья таска",body:"Описание таски"}],P=function(e,t){var n=(0,x.Uh)(),r=n[0],a=n[1],o=e;return{stream$:(0,k.z)(a,(0,w.O4)(e)),actions:Object.entries({}).reduce((function(e,t){var n=t[0],a=t[1];return e[n]=function(e){o=a(o,e),r(o)},e}),{}),initialState:e}}((Z=A,T="FYB_TASK_STORAGE",localStorage.getItem(T)||localStorage.setItem(T,JSON.stringify(Z)),{set:function(e){return localStorage.setItem(T,JSON.stringify(e)),e},get:function(){var e=localStorage.getItem(T)||"";try{return JSON.parse(e)}catch(e){return Z}}}).get()),N=n(2822),S=n(998),j=n(6869),O=n(5757),I=n(293);const C=(0,c.memo)((function(){var e=E((function(){return P.stream$}),[]);return c.createElement(N.Z,{component:"nav","aria-label":"main mailbox folders"},null==e?void 0:e.map((function(e){var t,n;return c.createElement(S.Z,{button:!0,key:e.id},c.createElement(j.Z,null,c.createElement(I.Z,null)),c.createElement(O.Z,{primary:null!==(t=e.title)&&void 0!==t?t:"Нет темы",secondary:null!==(n=e.body)&&void 0!==n?n:"Нет Описания"}))})))})),F=c.createElement(m.AW,{component:C,path:"/",exact:!0}),D=(0,c.memo)((function(){return c.createElement("div",null,"chaos-box")})),W=c.createElement(m.AW,{component:D,path:"/chaos-box",exact:!0}),B=(0,c.memo)((function(){return c.createElement("div",null,"calendar")})),M=c.createElement(m.AW,{component:B,path:"/calendar",exact:!0});function U(e){return!function(e){return null==e}(e)}var G=function(e){return(0,b.isString)(e)?!!(null==e?void 0:e.trim()):Array.isArray(e)?!!e.length:!(0,b.isNaN)(e)&&(!!(0,b.isNumber)(e)||(function(e){return U(e)&&!Array.isArray(e)&&!(0,b.isNaN)(e)&&"object"==typeof e}(e)?!function(e){return!Object.keys(null!=e?e:{}).length}(e):U(e)))},z=function(){return(z=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},R="__root__",q=function(e,t){var n=t[e];if(G(n))return(0,b.sortBy)(n,["type"]).map((function(e){if("type"in e){var n=q(e.id,t);return z(z({},n?{children:n}:{}),{data:e})}return{data:e}}))},J=[{id:"4",name:"Folder 1",type:a.Information},{id:"6",name:"Folder 34",type:a.Information},{id:"7",name:"Folder ffd",type:a.Information},{id:"73",name:"Folder ffd",type:a.Information,folder:"7"}],H=[{id:(0,_.Z)(),title:"Title number 1",body:"Description",created_at:"2019-01-01T13:00",icon:i.Apple,status:r.Progress,folder:"4"},{id:(0,_.Z)(),title:"Title number 2",body:"Description",created_at:"2019-01-01T13:00",icon:i.Apple,status:r.Progress,folder:"4"},{id:(0,_.Z)(),title:"Title number 3",body:"Description",created_at:"2019-01-01T13:00",icon:i.Apple,status:r.Progress,folder:"6"},{id:(0,_.Z)(),title:"Title number 4",body:"Description",created_at:"2019-01-01T13:00",icon:i.Apple,status:r.Progress,tags:[{id:"33",name:"Tag",color:"#2fc036"},{id:"66",name:"Tag",color:"#2fc036"},{id:"77",name:"Tag",color:"#2fc036"},{id:"22",name:"Tag",color:"#2fc036"}].map((function(e){return e.id}))},{id:(0,_.Z)(),title:"Title number 5",body:"Description",created_at:"2019-01-01T13:00",icon:i.Apple,status:r.Progress},{id:(0,_.Z)(),title:"Title number 6",body:"Description",created_at:"2019-01-01T13:00",icon:i.Apple,status:r.Progress},{id:(0,_.Z)(),title:"Title number 7",body:"Description",created_at:"2019-01-01T13:00",icon:i.Apple,status:r.Progress,folder:"4"},{id:(0,_.Z)(),title:"Title number 8",body:"Description",created_at:"2019-01-01T13:00",icon:i.Apple,status:r.Progress,folder:"4"},{id:(0,_.Z)(),title:"Title number 9",body:"Description",created_at:"2019-01-01T13:00",icon:i.Apple,status:r.Progress,folder:"7"},{id:(0,_.Z)(),title:"Title number 10",body:"Description",created_at:"2019-01-01T13:00",icon:i.Apple,status:r.Progress,folder:"7"},{id:(0,_.Z)(),title:"Title number 11",body:"Description",created_at:"2019-01-01T13:00",icon:i.Apple,status:r.Progress,folder:"73"}],L=n(6037),$=n(5025),K=n(4566),Q=n(2093);const V=(0,c.memo)((function(e){var t=e.item,n=e.className,r=e.space,a=e.openFolderIds,o=e.onFolderClick,i=(0,c.useMemo)((function(){return a.some((function(e){return e===t.data.id}))}),[a,t.data.id]),l=(0,c.useMemo)((function(){return G(t.children)}),[t.children]),u=(0,c.useCallback)((function(){o(t.data.id)}),[o,t.data.id]);return c.createElement(c.Fragment,null,c.createElement(S.Z,{className:n,button:!0,onClick:u},c.createElement(j.Z,null,c.createElement(Q.Z,null)),c.createElement(O.Z,{primary:t.data.name}),l&&(i?c.createElement($.Z,null):c.createElement(K.Z,null))),l&&c.createElement(L.Z,{in:i,timeout:"auto",unmountOnExit:!0},c.createElement(te,{list:t.children,space:r+1})))}));var Y=n(502);const X=(0,c.memo)((function(e){var t=e.item,n=e.className;return c.createElement(S.Z,{button:!0,className:n},c.createElement(j.Z,null,c.createElement(Y.Z,null)),c.createElement(O.Z,{primary:t.data.title}))}));var ee=(0,d.Z)((function(e){return(0,f.Z)({root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},nested:function(t){var n=t.space;return{paddingLeft:e.spacing(4*n)}}})}));const te=(0,c.memo)((function(e){var t=e.list,n=e.space,r=(0,c.useState)([]),a=r[0],o=r[1],i=(0,c.useCallback)((function(e){o((0,b.xor)(a,[e]))}),[o,a]),l=ee({space:n});return c.createElement(N.Z,{component:"div",className:l.root},null==t?void 0:t.map((function(e){return c.createElement(c.Fragment,{key:e.data.id},function(e){return"type"in e.data}(e)&&c.createElement(V,{item:e,className:l.nested,space:n,openFolderIds:a,onFolderClick:i}),function(e){return"status"in e.data}(e)&&c.createElement(X,{item:e,className:l.nested}))})))}));var ne=q(R,function(e,t){var n,r=((n={}).__root__=[],n),a=e.reduce((function(e,t){var n;return z(z({},e),((n={})[t.id]=[],n))}),r);return e.forEach((function(e){var t,n,r,o=null!==(t=e.folder)&&void 0!==t?t:R;null===(r=null!==(n=a[o])&&void 0!==n?n:a.__root__)||void 0===r||r.push(e)})),t.forEach((function(e){var t,n,r,o=null!==(t=e.folder)&&void 0!==t?t:R;null===(r=null!==(n=a[o])&&void 0!==n?n:a.__root__)||void 0===r||r.push(e)})),a}(J,H));const re=(0,c.memo)((function(){return c.createElement(c.Fragment,null,G(ne)&&c.createElement(te,{list:ne,space:1}))})),ae=c.createElement(m.AW,{component:re,path:"/information",exact:!0}),oe=(0,c.memo)((function(){return c.createElement("div",null,"projects")})),ie=c.createElement(m.AW,{component:oe,path:"/projects",exact:!0}),le=(0,c.memo)((function(){return c.createElement("div",null,"settings")})),ce=c.createElement(m.AW,{component:le,path:"/settings",exact:!0}),ue=(0,c.memo)((function(){return c.createElement("div",null,"sign-in")})),se=c.createElement(m.AW,{component:ue,path:"/sign-in",exact:!0});var me,de=function(){return(de=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},fe=n(9669),pe=n.n(fe);!function(e){e.Get="get",e.Delete="delete",e.Head="head",e.Options="options",e.Post="post",e.Put="put",e.Patch="patch"}(me||(me={}));var ve,ge=function(e){return function(e){return t=void 0,n=void 0,a=function(){return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}}(this,(function(t){switch(t.label){case 0:return[4,pe().request(e)];case 1:return[2,t.sent().data]}}))},new((r=void 0)||(r=Promise))((function(e,o){function i(e){try{c(a.next(e))}catch(e){o(e)}}function l(e){try{c(a.throw(e))}catch(e){o(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(i,l)}c((a=a.apply(t,n||[])).next())}));var t,n,r,a}(e)},he=function(e){return function(t,n){return ge({method:e,url:t,params:n})}},be=function(e){return function(t,n,r){return ge({method:e,url:t,params:n,data:r})}},ye={get:he(me.Get),delete:he(me.Delete),head:he(me.Head),options:he(me.Options),post:be(me.Post),put:be(me.Put),patch:be(me.Patch)},Ee=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function l(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))},Ze=function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},Te="https://reqres.in/api/users",_e=(ve={request:function(){return Ee(void 0,void 0,void 0,(function(){return Ze(this,(function(e){switch(e.label){case 0:return[4,ye.get(Te)];case 1:return[2,e.sent().data]}}))}))},findById:function(e){return Ee(void 0,void 0,void 0,(function(){return Ze(this,(function(t){switch(t.label){case 0:return[4,ye.get(Te+"/"+e)];case 1:return[2,t.sent().data]}}))}))}},Object.entries(ve)).reduce((function(e,t){var n,r=t[0],a=t[1];return de(de({},e),((n={})[r]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return(0,w.p4)(a.apply(void 0,e))},n))}),{}),we=_e.request();const xe=(0,c.memo)((function(){var e=E((function(){return we}),[]);return c.createElement("div",null,"tags",null==e?void 0:e.map((function(e){return c.createElement("div",{key:e.id},e.first_name,", ",e.last_name,c.createElement("span",null,c.createElement(s.rU,{to:"/tags/"+e.id}," More info...")))})))}));var ke=function(){return(ke=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};const Ae=(0,c.memo)((function(){var e=(0,m.UO)().id,t=E((function(){var t=0;return(0,k.z)((0,w.at)(3e3,void 0),(0,w.tS)((function(){return _e.findById(e)})),(0,w.tS)((function(e){return(0,k.z)((0,w.kU)(1e3),(0,w.UI)((function(){return t+=1,ke(ke({},e),{chainableNumber:t})})))})))}),[e]);return c.createElement("div",null,t?c.createElement("div",null,c.createElement("div",null,t.avatar),c.createElement("div",null,t.email),c.createElement("div",null,t.first_name),c.createElement("div",null,t.id),c.createElement("div",null,t.last_name),c.createElement("div",null,t.chainableNumber)):"Loading...")})),Pe=c.createElement(c.Fragment,null,c.createElement(m.AW,{component:Ae,path:"/tags/:id",exact:!0}),c.createElement(m.AW,{component:xe,path:g,exact:!0})),Ne=(0,c.memo)((function(){return c.createElement("div",null,"404: Not Found Page")}));var Se=n(5258),je=n(8358),Oe=n(2285),Ie=n(2318),Ce=n(7812),Fe=n(5955),De=n(1843),We=n(8995),Be=n(2795),Me=n(3901),Ue=n(7673),Ge=function(){return(Ge=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},ze=(0,d.Z)((function(e){return(0,f.Z)({title:{flexGrow:1,display:"flex",justifyContent:"center"},searchInput:{backgroundColor:e.palette.background.default}})}));const Re=(0,c.memo)((function(e){var t=e.trigger,n=(0,c.useState)(!1),r=n[0],a=n[1],i=ze(),l=function(){var e=(0,m.TH)();return(0,c.useMemo)((function(){return t=e.pathname,r=(null==t?void 0:t.startsWith("/"))?t.slice(1):null!=t?t:"",n=r,Object.values(o).some((function(e){return e===n}))?r:o.Main;var t,n,r}),[e.pathname])}(),u=(0,m.k6)(),s=h[l];return c.createElement(Oe.Z,{appear:!1,direction:"down",in:!t},c.createElement(Se.Z,{position:"sticky"},c.createElement(je.Z,null,l===o.Main&&c.createElement(c.Fragment,null,r?c.createElement(Be.Z,{onClickAway:function(){a(!1)}},c.createElement(Fe.Z,{label:"Поиск",id:"outlined-size-small",defaultValue:"",variant:"outlined",size:"small",className:i.searchInput})):c.createElement(Ce.Z,{edge:"start",color:"inherit"},c.createElement(We.Z,{onClick:function(){a(!r)}}))),l!==o.Main&&c.createElement(Ce.Z,{onClick:function(){u.push(function(e){var t=e.params,n=e.query,r=e.withQuery,a=function(e){return e.map((function(e){return e.startsWith("/")?e.slice(1):e})).join("/")}(function(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),a=0;for(t=0;t<n;t++)for(var o=arguments[t],i=0,l=o.length;i<l;i++,a++)r[a]=o[i];return r}([e.pageType],null!=t?t:[])),o=(0,Ue.J)(location.search.slice(1));return["/"+a,(0,Ue.stringify)(Ge(Ge({},r?o:{}),n))].filter(Boolean).join("?")}({pageType:o.Main}))},edge:"start",color:"inherit"},c.createElement(De.Z,null)),c.createElement(Ie.Z,{variant:"h6",className:i.title},r?"":s),c.createElement(Me.Z,{src:"https://d.newsweek.com/en/full/425257/02-10-putin-economy.jpg"}))))}));var qe=n(3758),Je=n(8513),He=n(3957),Le=n(8497),$e=n(2674),Ke=n(3657),Qe=(0,d.Z)((function(e){return(0,f.Z)({iconRight:{marginRight:e.spacing(2)},appBar:{top:"auto",bottom:0},grow:{flexGrow:1},fabButton:{position:"absolute",zIndex:1,top:-30,left:0,right:0,margin:"0 auto"}})}));const Ve=(0,c.memo)((function(e){e.trigger;var t=Qe();return c.createElement(Se.Z,{position:"fixed",color:"primary",className:t.appBar},c.createElement(je.Z,null,c.createElement(Ce.Z,{className:t.iconRight,edge:"start",color:"inherit"},c.createElement(Le.Z,null)),c.createElement(Ce.Z,{edge:"end",color:"inherit"},c.createElement(Ke.Z,null)),c.createElement(qe.Z,{color:"secondary",className:t.fabButton},c.createElement(He.Z,null)),c.createElement("div",{className:t.grow}),c.createElement(Ce.Z,{className:t.iconRight,edge:"start",color:"inherit"},c.createElement($e.Z,null)),c.createElement(Ce.Z,{edge:"end",color:"inherit"},c.createElement(Je.Z,null))))}));var Ye=(0,d.Z)((function(){return(0,f.Z)({container:{height:"100hv",display:"flex",flexDirection:"column"}})}));const Xe=(0,c.memo)((function(){var e=Ye(),t=(0,p.Z)();return c.createElement(c.Fragment,null,c.createElement("div",{className:e.container},c.createElement(Re,{trigger:t}),c.createElement(v.Z,null,c.createElement(m.rs,null,F,W,M,ae,ie,ce,se,Pe,c.createElement(m.AW,null,c.createElement(Ne,null)))),c.createElement(Ve,{trigger:t})))}));u.render(c.createElement(s.UT,null,c.createElement(Xe,null)),document.getElementById("root"))}},0,[[9634,907,263,323]]]);