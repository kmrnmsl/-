"use strict";(self["webpackChunkvue2_finance"]=self["webpackChunkvue2_finance"]||[]).push([[535],{3286:function(s,e,t){t.r(e),t.d(e,{default:function(){return m}});var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"login"},[t("div",{staticClass:"close"},[t("van-icon",{attrs:{name:"cross"},on:{click:s.goBack}})],1),t("div",{staticClass:"logo"},[t("van-image",{attrs:{width:"3rem",height:"3rem",src:"/imgs/logo.png"}})],1),t("div",{staticClass:"logoForm"},[t("van-form",{on:{submit:s.onSubmit}},[t("van-cell-group",{attrs:{inset:""}},[s.isAccount?t("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:s.account,callback:function(e){s.account=e},expression:"account"}}):t("van-field",{attrs:{name:"手机号",label:"手机号",placeholder:"手机号",rules:s.mobileRules},model:{value:s.mobile,callback:function(e){s.mobile=e},expression:"mobile"}}),s.isAccount?t("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请输入密码"}]},model:{value:s.password,callback:function(e){s.password=e},expression:"password"}}):t("van-field",{attrs:{type:"text",name:"sms",label:"验证码",placeholder:"验证码",rules:s.smsRules},model:{value:s.sms,callback:function(e){s.sms=e},expression:"sms"}}),s.isAccount?s._e():t("van-button",{staticClass:"sms",attrs:{disabled:s.disabled,"native-type":"button",type:"info ",size:"mini"},on:{click:s.sendSms}},[s._v(s._s(s.disabled?s.num+"s":"发送验证码"))])],1),t("div",{staticStyle:{margin:"16px"}},[t("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[s._v("提交")])],1)],1),t("span",{staticClass:"tips",on:{click:function(e){s.isAccount=!s.isAccount}}},[s._v(s._s(s.isAccount?"切换手机验证码登录":"切换账号密码登录"))])],1)])},n=[],i=t(693),l=t(8256),o={data(){return{account:"",password:"",mobile:"",isAccount:!0,sms:"",disabled:!1,num:10,smsRules:[{required:!0,message:"请填写密码"},{pattern:/\d{4}/,message:"请输入4个字符的验证码"},{validator:async s=>{l.Z.loading("验证中...");var e=function(s){return new Promise(((e,t)=>{setTimeout((()=>{"1234"==s.code?e({result:"验证码验证成功!",msg:"ok"}):e({result:"验证码验证失败!",msg:"fail"})}),1e3)}))};let t=await e({code:s});return l.Z.clear(),"ok"==t.msg},message:"请输入正确的短信验证码"}],mobileRules:[{required:!0,message:"请填写手机号"},{validator:s=>11==s.length,message:"请输入正确的手机号"}]}},methods:{goBack(){this.$router.back()},async onSubmit(){let s=await this.$store.dispatch("login",{account:this.account,password:this.password});"操作成功"===s.msg&&this.$router.back()},async sendSms(s){console.log(s);let e=await i.Cq({mobile:this.account});l.Z.success(e.msg),this.disabled=!0;let t=setInterval((()=>{this.num--}),1e3);setTimeout((()=>{this.disabled=!1,clearInterval(t),this.num=10}),1e4)}}},c=o,r=t(1001),u=(0,r.Z)(c,a,n,!1,null,"27949b0e",null),m=u.exports}}]);
//# sourceMappingURL=login.c8b376be.js.map