import{s as g}from"./service-CvN87575.js";import{_,G as p,r as k,o as t,c as y,w as u,a as n,t as d,b as i,F as c,d as l,n as h,e as r}from"./index-BBtURoPU.js";const w={name:"Proxmox",components:{Generic:p},mixins:[g],props:{item:Object},data:()=>({vms:{total:0,running:0},lxcs:{total:0,running:0},memoryUsed:0,diskUsed:0,cpuUsed:0,hide:[],error:!1,loading:!0}),created(){this.item.hide&&(this.hide=this.item.hide),this.fetchStatus()},methods:{statusClass(s){return s>this.item.danger_value?"danger":s>this.item.warning_value?"warning":"healthy"},fetchStatus:async function(){try{const s={headers:{Authorization:this.item.api_token}},e=await this.fetch(`/api2/json/nodes/${this.item.node}/status`,s),a=this.item.hide_decimals?0:1;if(this.memoryUsed=(e.data.memory.used*100/e.data.memory.total).toFixed(a),this.diskUsed=(e.data.rootfs.used*100/e.data.rootfs.total).toFixed(a),this.cpuUsed=(e.data.cpu*100).toFixed(a),this.isValueShown("vms")){const m=await this.fetch(`/api2/json/nodes/${this.item.node}/qemu`,s);this.parseVMsAndLXCs(m,this.vms)}if(this.isValueShown("lxcs")){const m=await this.fetch(`/api2/json/nodes/${this.item.node}/lxc`,s);this.parseVMsAndLXCs(m,this.lxcs)}this.error=!1}catch(s){console.log(s),this.error=!0}this.loading=!1},parseVMsAndLXCs(s,e){e.total+=s.data.length,e.running+=s.data.filter(a=>a.status==="running").length,e.total==0&&this.hide.push("lxcs")},isValueShown(s){return this.hide.indexOf(s)==-1}}},b={class:"title is-4"},x={class:"subtitle is-6"},V={key:0},v={key:1},S={key:0,class:"margined"},C={class:"is-number"},U={class:"has-text-weight-bold"},F={key:0},L={key:1,class:"margined"},M={class:"is-number"},j={class:"has-text-weight-bold"},A={key:0},B={key:2,class:"margined"},G={key:3,class:"margined"},X={key:4,class:"margined"},z={key:0,class:"fa fa-circle-notch fa-spin fa-2xl"},N={key:1,class:"fa fa-exclamation-circle fa-2xl danger"};function P(s,e,a,m,D,o){const f=k("Generic");return t(),y(f,{item:a.item},{content:u(()=>[n("p",b,d(a.item.name),1),n("p",x,[a.item.subtitle?(t(),i(c,{key:0},[l(d(a.item.subtitle),1)],64)):s.vms?(t(),i(c,{key:1},[s.loading?(t(),i("div",V,e[0]||(e[0]=[n("strong",null,"Loading...",-1)]))):s.error?(t(),i("div",v,e[1]||(e[1]=[n("strong",{class:"danger"},"Error loading info",-1)]))):(t(),i("div",{key:2,class:h(["metrics",{"is-size-7-mobile":a.item.small_font_on_small_screens,"is-small":a.item.small_font_on_desktop}])},[o.isValueShown("vms")?(t(),i("span",S,[e[2]||(e[2]=l("VMs: ")),n("span",C,[n("span",U,d(s.vms.running),1),o.isValueShown("vms_total")?(t(),i("span",F,"/"+d(s.vms.total),1)):r("",!0)])])):r("",!0),o.isValueShown("lxcs")?(t(),i("span",L,[e[3]||(e[3]=l("LXCs: ")),n("span",M,[n("span",j,d(s.lxcs.running),1),o.isValueShown("lxcs_total")?(t(),i("span",A,"/"+d(s.lxcs.total),1)):r("",!0)])])):r("",!0),o.isValueShown("disk")?(t(),i("span",B,[e[4]||(e[4]=l("Disk: ")),n("span",{class:h(["has-text-weight-bold is-number",o.statusClass(s.diskUsed)])},d(s.diskUsed)+"%",3)])):r("",!0),o.isValueShown("mem")?(t(),i("span",G,[e[5]||(e[5]=l("Mem: ")),n("span",{class:h(["has-text-weight-bold is-number",o.statusClass(s.memoryUsed)])},d(s.memoryUsed)+"%",3)])):r("",!0),o.isValueShown("cpu")?(t(),i("span",X,[e[6]||(e[6]=l("CPU: ")),n("span",{class:h(["has-text-weight-bold is-number",o.statusClass(s.cpuUsed)])},d(s.cpuUsed)+"%",3)])):r("",!0)],2))],64)):r("",!0)])]),indicator:u(()=>[s.loading?(t(),i("i",z)):r("",!0),s.error?(t(),i("i",N)):r("",!0)]),_:1},8,["item"])}const T=_(w,[["render",P],["__scopeId","data-v-dba3fa34"]]);export{T as default};
