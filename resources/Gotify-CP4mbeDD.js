import{s as u}from"./service-CvN87575.js";import{_ as f,G as g,r as p,o as s,c as y,w as r,a as h,t as m,b as t,F as a,d as c,e as l,n as _}from"./index-BBtURoPU.js";const k={name:"Gotify",components:{Generic:g},mixins:[u],props:{item:Object},data:()=>({health:{},messages:0}),computed:{status:function(){const e=[this.health.health,this.health.database];return e.includes("red")?"red":e.includes("orange")?"orange":"green"}},created(){this.fetchStatus(),this.fetchMessages()},methods:{fetchStatus:async function(){await this.fetch("/health").catch(e=>console.log(e)).then(e=>this.health=e)},fetchMessages:async function(){const e={"X-Gotify-Key":this.item.apikey};await this.fetch("/message?limit=100",{headers:e}).catch(n=>console.log(n)).then(n=>this.messages=n.messages.length)}}},G={class:"title is-4"},b={class:"subtitle is-6"};function v(e,n,i,w,B,o){const d=p("Generic");return s(),y(d,{item:i.item},{content:r(()=>[h("p",G,m(i.item.name),1),h("p",b,[e.messages>0?(s(),t(a,{key:0},[e.messages>100?(s(),t(a,{key:0},[c("100+")],64)):(s(),t(a,{key:1},[c(m(e.messages),1)],64)),e.messages===1?(s(),t(a,{key:2},[c(" message")],64)):(s(),t(a,{key:3},[c(" messages")],64))],64)):l("",!0)])]),indicator:r(()=>[o.status?(s(),t("div",{key:0,class:_(["status",o.status])},null,2)):l("",!0)]),_:1},8,["item"])}const S=f(k,[["render",v],["__scopeId","data-v-c4c048db"]]);export{S as default};
