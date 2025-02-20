import{_ as V}from"./Guest.vue_vue_type_script_setup_true_lang-dff6157b.js";import{_ as f}from"./Button.vue_vue_type_script_setup_true_lang-269419a9.js";import{L as c}from"./AppLink.vue_vue_type_script_lang-fbce5424.js";import{_ as w}from"./Text.vue_vue_type_script_setup_true_lang-aee2f3f9.js";import{d as x,v as _,j as U,w as a,o as g,b as m,a as s,u as r,f as n,x as q,e as C}from"./main-2329afd4.js";import"./_plugin-vue_export-helper-c27b6911.js";const b=m("h1",{class:"text-primary-900 py-5 text-center text-2xl font-bold"},"New to promp.ly? Create your FREE account here.",-1),N=["onSubmit"],z={class:"mt-4 flex items-center justify-end"},P=x({__name:"Register",setup(k){const e=_({name:"",email:"",password:"",password_confirmation:"",captcha_response:"",company:"",phone:"",address:"",city:"",state:"",zip:"",country:"",terms:!1}),d=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(i,o)=>{const l=w,u=c,p=f,y=V;return g(),U(y,{title:"Register"},{default:a(()=>[b,m("form",{onSubmit:C(d,["prevent"])},[s(l,{class:"mt-4",type:"text",title:"Name",error:r(e).errors.name,modelValue:r(e).name,"onUpdate:modelValue":o[0]||(o[0]=t=>r(e).name=t),required:"",autofocus:"",autocomplete:"name"},null,8,["error","modelValue"]),s(l,{class:"mt-4",type:"email",title:"Email",error:r(e).errors.email,modelValue:r(e).email,"onUpdate:modelValue":o[1]||(o[1]=t=>r(e).email=t),required:"",autocomplete:"username"},null,8,["error","modelValue"]),s(l,{class:"mt-4",type:"password",title:"Password",error:r(e).errors.password,modelValue:r(e).password,"onUpdate:modelValue":o[2]||(o[2]=t=>r(e).password=t),required:"",autocomplete:"new-password"},null,8,["error","modelValue"]),s(l,{type:"password",title:"Confirm Password",class:"mt-4",error:r(e).errors.password_confirmation,modelValue:r(e).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=t=>r(e).password_confirmation=t),required:"",autocomplete:"new-password"},null,8,["error","modelValue"]),s(l,{class:"mt-4",type:"text",title:"Company Name",error:r(e).errors.company,modelValue:r(e).company,"onUpdate:modelValue":o[4]||(o[4]=t=>r(e).company=t)},null,8,["error","modelValue"]),s(l,{class:"mt-4",type:"text",title:"Telephone",error:r(e).errors.phone,modelValue:r(e).phone,"onUpdate:modelValue":o[5]||(o[5]=t=>r(e).phone=t),required:""},null,8,["error","modelValue"]),s(l,{class:"mt-4",type:"text",title:"Address",error:r(e).errors.address,modelValue:r(e).address,"onUpdate:modelValue":o[6]||(o[6]=t=>r(e).address=t),required:""},null,8,["error","modelValue"]),s(l,{class:"mt-4",type:"text",title:"City",error:r(e).errors.city,modelValue:r(e).city,"onUpdate:modelValue":o[7]||(o[7]=t=>r(e).city=t),required:""},null,8,["error","modelValue"]),s(l,{class:"mt-4",type:"text",title:"State",error:r(e).errors.state,modelValue:r(e).state,"onUpdate:modelValue":o[8]||(o[8]=t=>r(e).state=t),required:""},null,8,["error","modelValue"]),s(l,{class:"mt-4",type:"text",title:"Zip / Postal Code",error:r(e).errors.zip,modelValue:r(e).zip,"onUpdate:modelValue":o[9]||(o[9]=t=>r(e).zip=t),required:""},null,8,["error","modelValue"]),s(l,{class:"mt-4",type:"text",title:"Country",error:r(e).errors.country,modelValue:r(e).country,"onUpdate:modelValue":o[10]||(o[10]=t=>r(e).country=t),required:""},null,8,["error","modelValue"]),m("div",z,[s(u,{href:i.route("login"),class:"text-sm text-gray-600 underline hover:text-gray-900"},{default:a(()=>[n("Already registered?")]),_:1},8,["href"]),s(p,{class:q(["ml-4",{"opacity-25":r(e).processing}]),type:"submit",disabled:r(e).processing},{default:a(()=>[n("Register")]),_:1},8,["class","disabled"])])],40,N)]),_:1})}}});export{P as default};
