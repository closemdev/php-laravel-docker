import{_ as f}from"./Button.vue_vue_type_script_setup_true_lang-269419a9.js";import{L as x,_ as g}from"./AppLink.vue_vue_type_script_lang-fbce5424.js";import{_ as h}from"./Text.vue_vue_type_script_setup_true_lang-aee2f3f9.js";import{d as b,v as w,A as v,B as y,c as V,a as n,b as e,e as k,u as s,q as L,C as B,w as r,o as S,f as a,X as j}from"./main-2329afd4.js";import"./_plugin-vue_export-helper-c27b6911.js";const q={class:"flex min-h-full"},C={class:"flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"},E={class:"mx-auto w-full max-w-sm lg:w-96"},P={class:"flex items-center"},U=e("span",{class:"ml-1 text-4xl font-medium text-indigo-900"},"Promp.ly",-1),A=e("h2",{class:"mt-3 text-3xl font-bold tracking-tight text-gray-900"},"Sign in to your account",-1),M={class:"mt-8"},N={class:"mt-6"},T=["onSubmit"],$={class:"flex items-center justify-between"},F={class:"flex items-center"},I=e("label",{for:"remember-me",class:"ml-2 block text-sm text-gray-900"},"Remember me",-1),R={class:"text-sm"},D=e("div",{class:"relative hidden w-0 flex-1 lg:block"},[e("img",{class:"absolute inset-0 h-full w-full object-cover",src:"/banner.jpg",alt:""})],-1),K=b({__name:"Login",props:{canResetPassword:Boolean,status:String},setup(H){const t=w({email:"",password:"",remember:!1}),m=()=>{t.post(route("login"),{onFinish:()=>t.reset("password")})};return v(()=>{document.documentElement.classList.add("bg-white")}),y(()=>{document.documentElement.classList.remove("bg-white")}),(d,o)=>{const c=j,u=g,i=h,p=x,_=f;return S(),V("div",q,[n(c,{title:"Log in"}),e("div",C,[e("div",E,[e("div",null,[e("div",P,[n(u,{class:"h-12 w-auto text-indigo-600",color1:"#fff",color2:"#fff"}),U]),A]),e("div",M,[e("div",N,[e("form",{action:"#",method:"POST",class:"space-y-6",onSubmit:k(m,["prevent"])},[n(i,{type:"email",title:"Email address",error:s(t).errors.email,modelValue:s(t).email,"onUpdate:modelValue":o[0]||(o[0]=l=>s(t).email=l),required:"",autocomplete:"email"},null,8,["error","modelValue"]),n(i,{class:"space-y-1",type:"password",title:"Password",error:s(t).errors.password,modelValue:s(t).password,"onUpdate:modelValue":o[1]||(o[1]=l=>s(t).password=l),required:"",autocomplete:"password"},null,8,["error","modelValue"]),e("div",$,[e("div",F,[L(e("input",{"onUpdate:modelValue":o[2]||(o[2]=l=>s(t).remember=l),id:"remember-me",name:"remember-me",type:"checkbox",class:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"},null,512),[[B,s(t).remember]]),I]),e("div",R,[n(p,{href:d.route("password.request"),class:"font-medium text-indigo-600 hover:text-indigo-500"},{default:r(()=>[a("Forgot your password?")]),_:1},8,["href"])])]),e("div",null,[n(_,{disabled:s(t).processing,type:"submit",class:"w-full justify-center"},{default:r(()=>[a("Sign in")]),_:1},8,["disabled"])])],40,T)])])])]),D])}}});export{K as default};
