"use strict";(self["webpackChunksubscriptions"]=self["webpackChunksubscriptions"]||[]).push([[914],{5914:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});var s=n(6768),a=n(4232),r=n(5130);const i={class:"app"},c={class:"List"},l={class:"row justify-content-center"},o={class:"col-md-8"},u=(0,s.Lk)("h3",{class:"text-center"},"Subscriptions List",-1),d={class:"table align-middle"},k=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",null,"Subscription"),(0,s.Lk)("th",{class:"d-none d-sm-table-cell"},"Description"),(0,s.Lk)("th",null,"Amount"),(0,s.Lk)("th",null,"Frequency"),(0,s.Lk)("th",null,"Year Started"),(0,s.Lk)("th",null,"Actions")])],-1),b={class:"d-none d-sm-table-cell"},p=["onClick"];function L(t,e,n,L,h,m){const y=(0,s.g2)("Navbar"),v=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",i,[(0,s.bF)(y),(0,s.Lk)("div",c,[(0,s.Lk)("div",l,[(0,s.Lk)("div",o,[u,(0,s.Lk)("table",d,[k,(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(h.Subscriptions,(t=>((0,s.uX)(),(0,s.CE)("tr",{key:t.key},[(0,s.Lk)("td",null,(0,a.v_)(t.name),1),(0,s.Lk)("td",b,(0,a.v_)(t.description),1),(0,s.Lk)("td",null,"$"+(0,a.v_)(t.amount),1),(0,s.Lk)("td",null,(0,a.v_)(t.frequency),1),(0,s.Lk)("td",null,(0,a.v_)(t.year_started),1),(0,s.Lk)("td",null,[(0,s.bF)(v,{to:{name:"edit",params:{id:t.key}},class:"btn btn-primary btn-sm px-3"},{default:(0,s.k6)((()=>[(0,s.eW)(" Edit ")])),_:2},1032,["to"]),(0,s.Lk)("button",{onClick:(0,r.D$)((e=>m.deleteSubscription(t.key)),["prevent"]),class:"btn btn-danger btn-sm px-3"}," Delete ",8,p)])])))),128))])]),(0,s.Lk)("button",{onClick:e[0]||(e[0]=(...t)=>m.createSubscription&&m.createSubscription(...t))},"Add New Subscription")])])])])}n(4114);var h=n(9620),m=n(209),y={name:"List-vue",components:{Navbar:m.A},data(){return{Subscriptions:[]}},created(){h.A.collection("subscriptions").onSnapshot((t=>{this.Subscriptions=[],t.forEach((t=>{t.data().name&&this.Subscriptions.push({key:t.id,name:t.data().name,description:t.data().description,amount:t.data().amount,frequency:t.data().frequency,year_started:t.data().year_started})}))}))},methods:{deleteSubscription(t){window.confirm("Do you really want to delete?")&&h.A.collection("subscriptions").doc(t).delete().then((()=>{})).catch((t=>{console.error(t)}))},createSubscription(){this.$router.push("/create")}}},v=n(1241);const S=(0,v.A)(y,[["render",L]]);var f=S}}]);
//# sourceMappingURL=914.2fc6329a.js.map