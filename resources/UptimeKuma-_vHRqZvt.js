import{s as b}from"./service-CvN87575.js";import{_ as f,G as p,r as g,o as i,c as _,w as u,a as h,t as n,b as c,F as o,d as l,e as d,n as k}from"./index-BBtURoPU.js";const S={name:"UptimeKuma",components:{Generic:p},mixins:[b],props:{item:Object},data:()=>({incident:null,heartbeat:null}),computed:{dashboard:function(){return this.item.slug?this.item.slug:"default"},status:function(){return this.incident?this.incident.incident==null?this.pageStatus:"bad":""},lastHeartBeatList:function(){let t={};for(let e in this.heartbeat.heartbeatList){let a=this.heartbeat.heartbeatList[e].length-1;t[e]=this.heartbeat.heartbeatList[e][a]}return t},pageStatus:function(){if(!this.heartbeat||Object.keys(this.heartbeat.heartbeatList).length===0)return"";let t="good",e=!1;for(let a in this.lastHeartBeatList)this.lastHeartBeatList[a].status==1?e=!0:t="warn";return e||(t="bad"),t},statusMessage:function(){if(!this.incident)return"";if(this.incident.incident)return this.incident.incident.title;let t="";switch(this.pageStatus){case"good":t="All Systems Operational";break;case"warn":t="Partially Degraded Service";break;case"bad":t="Degraded Service";break;default:t="Unknown service status"}return t},uptime:function(){if(!this.heartbeat)return 0;const t=Object.values(this.heartbeat.uptimeList);return((t.reduce((a,r)=>a+r,0)/t.length||0)*100).toFixed(1)}},created(){this.item.url=`${this.item.url}/status/${this.dashboard}`,this.fetchStatus()},methods:{fetchStatus:function(){const t=Date.now();this.fetch(`/api/status-page/${this.dashboard}?cachebust=${t}`).catch(e=>console.error(e)).then(e=>this.incident=e),this.fetch(`/api/status-page/heartbeat/${this.dashboard}?cachebust=${t}`).catch(e=>console.error(e)).then(e=>this.heartbeat=e)}}},v={class:"title is-4"},w={class:"subtitle is-6"};function x(t,e,a,r,L,s){const m=g("Generic");return i(),_(m,{item:a.item},{content:u(()=>[h("p",v,n(a.item.name),1),h("p",w,[a.item.subtitle?(i(),c(o,{key:0},[l(n(a.item.subtitle),1)],64)):s.status?(i(),c(o,{key:1},[l(n(s.statusMessage),1)],64)):d("",!0)])]),indicator:u(()=>[s.status?(i(),c("div",{key:0,class:k(["status",s.status])},n(s.uptime)+"% ",3)):d("",!0)]),_:1},8,["item"])}const C=f(S,[["render",x],["__scopeId","data-v-07f9e19c"]]);export{C as default};
