"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7127],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=o,f=d["".concat(l,".").concat(p)]||d[p]||c[p]||a;return n?r.createElement(f,i(i({ref:t},h),{},{components:n})):r.createElement(f,i({ref:t},h))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},52397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:200},i="\ud83d\udfe2 Understanding AI Minds",s={unversionedId:"basics/world",id:"basics/world",title:"\ud83d\udfe2 Understanding AI Minds",description:"Hello reader, congratulations on getting through the intro chapter. You are off to a great start in this very exciting field. There are a few things you should know about different AIs and how they work before you start reading the rest of the course.",source:"@site/docs/basics/world.md",sourceDirName:"basics",slug:"/basics/world",permalink:"/zh-Hans/docs/basics/world",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/basics/world.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Chatbot Basics",permalink:"/zh-Hans/docs/basics/chatbot_basics"},next:{title:"\ud83e\uddd9\u200d\u2642\ufe0f Intermediate",permalink:"/zh-Hans/docs/category/\ufe0f-intermediate"}},l={},u=[{value:"Different AIs",id:"different-ais",level:2},{value:"How AIs work",id:"how-ais-work",level:2},{value:"Notes",id:"notes",level:2}],h={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-understanding-ai-minds"},"\ud83d\udfe2 Understanding AI Minds"),(0,o.kt)("p",null,"Hello reader, congratulations on getting through the intro chapter. You are off to a great start in this very exciting field. There are a few things you should know about different AIs and how they work before you start reading the rest of the course."),(0,o.kt)("h2",{id:"different-ais"},"Different AIs"),(0,o.kt)("p",null,"Thousands if not millions of AIs exist. Some are better than others. Only a few are currently advanced enough to be especially useful for prompt engineering. We mainly use GPT-3 and ChatGPT in this course."),(0,o.kt)("p",null,"As we mentioned in the last page, ChatGPT is a chat bot, while GPT-3 is not. They will usually produce different responses when asked the same question. If you are a developer, I recommend using GPT-3, since it is more reproducible. If you are a non-developer, I recommend using ChatGPT, since it is easier to use. Most techniques in this course can be applied to both AIs."),(0,o.kt)("h2",{id:"how-ais-work"},"How AIs work"),(0,o.kt)("p",null,"These AIs have brains that are made up of billions of artificial neurons. The way these neurons are structured is called a transformer architecture. It is a fairly complex type of neural network. What you should understand is:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"These AIs are just math functions. Instead of f(x) = x^2, they are more like f(thousands of variables) = thousands of possible outputs."),(0,o.kt)("li",{parentName:"ol"},"These AIs understand sentences by breaking them into words/subwords (tokens). (e.g. the AI might read ",(0,o.kt)("inlineCode",{parentName:"li"},"I don't like")," as ",(0,o.kt)("inlineCode",{parentName:"li"},'"I", "don", "\'t" "like"'),"). Each token is then converted into a list of numbers, so the AI can process it."),(0,o.kt)("li",{parentName:"ol"},"These AIs predict the next word/token in the sentence based on the previous words/tokens (e.g. the AI might predict ",(0,o.kt)("inlineCode",{parentName:"li"},"apples")," after ",(0,o.kt)("inlineCode",{parentName:"li"},"I don't like"),"). Each token they write is based on the previous tokens they have seen and written; every time they write a new token, they pause to think about what the next token should be."),(0,o.kt)("li",{parentName:"ol"},"These AIs look at every token at the same time. They don't read left to right, or right to left. ")),(0,o.kt)("p",null,'Please understand that the words "think", "brain", and "neuron" are zoomorphisms, which are essentially metaphors for what the model is actually doing. These models are not really thinking, they are just math functions. They are not actually brains, they are just artificial neural networks. They are not actually biological neurons, they are just numbers.'),(0,o.kt)("p",null,"This is an area of active research and philosophizing. This description is rather cynical about their nature and is meant to temper popular media depiction of AIs as beings that think/act like humans. This being said, if you want to anthropomorphize the AI, go ahead! It seems that most people do this."),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.d2l.ai"},"d2l.ai")," is a good resource to learn about how AI works")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Please note that the authors do, in fact, enjoy apples. They are delicious."))))}c.isMDXComponent=!0}}]);