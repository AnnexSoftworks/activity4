"use strict";(self["webpackChunksubscriptions"]=self["webpackChunksubscriptions"]||[]).push([[230],{1230:function(t,o,s){s.r(o),s.d(o,{default:function(){return F}});var n=s(6768),i=s(5130);const e={class:"app"},r={class:"row justify-content-center"},u={class:"col-md-5"},a=(0,n.Lk)("h3",{class:"text-center"},"Update Subscription",-1),l={class:"form-group"},c=(0,n.Lk)("label",null,"Name",-1),p={class:"form-group"},b=(0,n.Lk)("label",null,"Description",-1),d={class:"form-group"},m=(0,n.Lk)("label",null,"Amount",-1),h={class:"form-group"},k=(0,n.Lk)("label",null,"Payment Frequency",-1),L=(0,n.Fv)('<option value="weekly">Weekly</option><option value="bimonthly">Bi-monthly</option><option value="monthly">Monthly</option><option value="quarterly">Quarterly</option><option value="biannually">Bi-annually</option><option value="annually">Annually</option>',6),y=[L],f={class:"form-group"},v=(0,n.Lk)("label",null,"Year Started",-1),g={class:"form-group"};function q(t,o,s,L,q,U){const $=(0,n.g2)("Navbar");return(0,n.uX)(),(0,n.CE)("div",e,[(0,n.bF)($),(0,n.Lk)("div",r,[(0,n.Lk)("div",u,[a,(0,n.Lk)("form",{onSubmit:o[7]||(o[7]=(0,i.D$)(((...t)=>U.onUpdateForm&&U.onUpdateForm(...t)),["prevent"]))},[(0,n.Lk)("div",l,[c,(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=t=>q.subscription.name=t),required:""},null,512),[[i.Jo,q.subscription.name]])]),(0,n.Lk)("div",p,[b,(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[1]||(o[1]=t=>q.subscription.description=t),required:""},null,512),[[i.Jo,q.subscription.description]])]),(0,n.Lk)("div",d,[m,(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[2]||(o[2]=t=>q.subscription.amount=t),required:""},null,512),[[i.Jo,q.subscription.amount]])]),(0,n.Lk)("div",h,[k,(0,n.bo)((0,n.Lk)("select",{id:"frequency",class:"form-control","onUpdate:modelValue":o[3]||(o[3]=t=>q.subscription.frequency=t),required:""},y,512),[[i.u1,q.subscription.frequency]])]),(0,n.Lk)("div",f,[v,(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[4]||(o[4]=t=>q.subscription.year_started=t),required:""},null,512),[[i.Jo,q.subscription.year_started]])]),(0,n.Lk)("div",g,[(0,n.Lk)("button",{class:"btn btn-primary btn-block",onClick:o[5]||(o[5]=(...t)=>U.updateSubscription&&U.updateSubscription(...t))},"Update Subscription"),(0,n.Lk)("button",{class:"btn btn-primary col-4",onClick:o[6]||(o[6]=(...t)=>U.cancelOperation&&U.cancelOperation(...t))},"Cancel")])],32)])])])}s(4114);var U=s(9620),$=s(209),A={name:"Edit",components:{Navbar:$.A},data(){return{subscription:{}}},created(){let t=U.A.collection("subscriptions").doc(this.$route.params.id);t.get().then((t=>{this.subscription=t.data()})).catch((t=>{console.log(t),alert("Error accessing database"),this.$router.push("/")}))},methods:{onUpdateForm(t){t.preventDefault(),U.A.collection("subscriptions").doc(this.$route.params.id).update(this.subscription).then((()=>{this.$router.push("/subscriptionsList")})).catch((t=>{console.log(t),alert("Error updating subscription"),this.$router.push("/subscriptionsList")}))},cancelOperation(){this.$router.push("/subscriptionsList")},updateSubscription(){U.A.collection("subscriptions").doc(this.$route.params.id).update(this.subscription).then((()=>{this.$router.push("/subscriptionsList")})).catch((t=>{console.log(t),alert("Error updating subscription"),this.$router.push("/subscriptionsList")}))}}},S=s(1241);const C=(0,S.A)(A,[["render",q]]);var F=C}}]);
//# sourceMappingURL=230.96decd48.js.map