import{s as m}from"./service-CvN87575.js";import{_ as d,G as h,r as f,o as a,c as p,w as _,a as n,t as o,b as i,F as l,f as b,n as v,d as g,e as c}from"./index-BBtURoPU.js";const k={name:"Glances",components:{Generic:h},mixins:[m],props:{item:Object},data:()=>({stats:[],error:null}),created(){const t=parseInt(this.item.updateInterval,10)||0;t>0&&setInterval(()=>this.fetchStat(),t),this.fetchStat()},methods:{fetchStat:async function(){this.fetch("/api/4/quicklook").then(t=>{this.stats.load={value:t.load,label:"System load",icon:"fa-solid fa-bolt",unit:"%"},this.stats.cpu={value:t.cpu,label:`CPU usage (${t.cpu_name})`,icon:"fa-solid fa-microchip",unit:"%"},this.stats.mem={value:t.mem,label:"RAM usage",icon:"fa-solid fa-memory",unit:"%"},this.stats.swap={value:t.swap,label:"Swap usage",icon:"fa-solid fa-file-arrow-down",unit:"%"}}).catch(t=>{console.log(t),this.error="Unable to get metrics"})}}},w={class:"title is-4"},y={class:"subtitle is-6"},G=["title"],S={key:0};function C(t,B,s,N,V,F){const r=f("Generic");return a(),p(r,{item:s.item},{content:_(()=>[n("p",w,o(s.item.name),1),n("p",y,[(a(!0),i(l,null,b(s.item.stats,(e,u)=>(a(),i(l,{key:e},[t.stats[e]?(a(),i("span",{key:0,title:t.stats[e].label},[n("i",{class:v(t.stats[e].icon)},null,2),g(" "+o(t.stats[e].value)+" "+o(t.stats[e].unit)+" ",1),u!=s.item.stats.length-1?(a(),i("span",S," / ")):c("",!0)],8,G)):c("",!0)],64))),128))])]),_:1},8,["item"])}const q=d(k,[["render",C]]);export{q as default};
