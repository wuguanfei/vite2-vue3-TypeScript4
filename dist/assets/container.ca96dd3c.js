import{r as e,c as a,a as t,u as l,b as n,d as s,o as d,w as o,p as i,e as u,f as r,g as c,h as p,i as f,j as h,t as m,F as v,k as _,l as w,m as k}from"./index.48b02cb9.js";var g={setup(){const i=e(a),u=t("/form/select"),r=l(),c=n(),p=s(),f=t(p.state.userInfo.metaData);return d((()=>{console.log(p.getters.token)})),o((()=>{u.value=r.path})),{ChildRoutes:i,defaultActive:u,logout:()=>{c.replace("/login")},store:p,userInfo:f}}};const x=k();i("data-v-842f4984");const y=f("div",{class:"top-title"},"vite2-vue3-TypeScript4",-1),b={class:"header-dropdown"},C={class:"el-dropdown-link"},I=f("i",{class:"el-icon-arrow-down el-icon--right"},null,-1),j=h("退出登录");u();const A=x(((e,a,t,l,n,s)=>{const d=r("el-dropdown-item"),o=r("el-dropdown-menu"),i=r("el-dropdown"),u=r("el-header"),k=r("el-menu-item"),g=r("el-submenu"),A=r("el-menu"),R=r("el-aside"),S=r("router-view"),q=r("el-main"),z=r("el-container");return c(),p(z,{style:{height:"100vh"}},{default:x((()=>[f(u,{class:"header"},{default:x((()=>[y,f("div",b,[f(i,{size:"small"},{dropdown:x((()=>[f(o,null,{default:x((()=>[f(d,{onClick:l.logout},{default:x((()=>[j])),_:1},8,["onClick"])])),_:1})])),default:x((()=>[f("span",C,[h(m(l.userInfo.username),1),I])])),_:1})])])),_:1}),f(z,null,{default:x((()=>[f(R,{width:"200px",class:"menu"},{default:x((()=>[f(A,{"default-active":l.defaultActive,"unique-opened":!0,router:!0,"background-color":"#333853"},{default:x((()=>[(c(!0),p(v,null,_(l.ChildRoutes,((e,a)=>(c(),p(v,{key:e.path+a},[e.children&&e.children.length>0?(c(),p(g,{key:0,index:e.path},{title:x((()=>[h(m(e.name),1)])),default:x((()=>[(c(!0),p(v,null,_(e.children,((a,t)=>(c(),p(v,{key:a.path+t},[a.meta.isShow?(c(),p(k,{key:0,index:e.path+"/"+a.path},{default:x((()=>[h(m(a.name),1)])),_:2},1032,["index"])):w("",!0)],64)))),128))])),_:2},1032,["index"])):(c(),p(k,{key:1,index:e.path},{title:x((()=>[h(m(e.name),1)])),_:2},1032,["index"]))],64)))),128))])),_:1},8,["default-active"])])),_:1}),f(q,{class:"container-main"},{default:x((()=>[f(S)])),_:1})])),_:1})])),_:1})}));g.render=A,g.__scopeId="data-v-842f4984";export default g;