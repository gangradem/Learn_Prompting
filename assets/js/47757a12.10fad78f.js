"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[7127],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),h=l(a),u=r,d=h["".concat(p,".").concat(u)]||h[u]||c[u]||s;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[h]="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12549:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const s=a.p+"assets/images/music+image-079c274bd7f568398866dbbc12701d8e.png",i={sidebar_position:200},o="\ud83d\udfe2 Understanding AI Minds",p={unversionedId:"basics/world",id:"basics/world",title:"\ud83d\udfe2 Understanding AI Minds",description:"Hello reader, congratulations on getting through the intro chapter. You are off to a great start in this very exciting field. There are a few simple things you should know about different AIs and how they work before you start reading the rest of the course.",source:"@site/docs/basics/world.md",sourceDirName:"basics",slug:"/basics/world",permalink:"/docs/basics/world",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.1.3/docs/basics/world.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe2 Chatbot Basics",permalink:"/docs/basics/chatbot_basics"},next:{title:"\ud83e\uddd9\u200d\u2642\ufe0f Intermediate",permalink:"/docs/category/\ufe0f-intermediate"}},l={},m=[{value:"Different AIs",id:"different-ais",level:2},{value:"How these AIs work",id:"how-these-ais-work",level:2},{value:"Notes",id:"notes",level:2}],h={toc:m},c="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-understanding-ai-minds"},"\ud83d\udfe2 Understanding AI Minds"),(0,r.kt)("p",null,"Hello reader, congratulations on getting through the intro chapter. You are off to a great start in this very exciting field. There are a few simple things you should know about different AIs and how they work before you start reading the rest of the course."),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("img",{src:s,style:{width:"850px"}})),(0,r.kt)("div",{style:{textAlign:"center"}},"Audio being generated from an image."),(0,r.kt)("h2",{id:"different-ais"},"Different AIs"),(0,r.kt)("p",null,"Thousands, if not millions of AIs exist. Some are better than others. Different AIs can produce ",(0,r.kt)("a",{parentName:"p",href:"https://openai.com/product/dall-e-2"},"images"),", ",(0,r.kt)("a",{parentName:"p",href:"https://google-research.github.io/seanet/musiclm/examples/"},"music"),", ",(0,r.kt)("a",{parentName:"p",href:"https://platform.openai.com/playground"},"text"),", and even ",(0,r.kt)("a",{parentName:"p",href:"https://makeavideo.studio/"},"videos"),". Note that these are all ",(0,r.kt)("em",{parentName:"p"},"generative")," AIs, basically AIs that ",(0,r.kt)("em",{parentName:"p"},"make")," things. There are also ",(0,r.kt)("em",{parentName:"p"},"discriminative")," AIs, which are AIs that ",(0,r.kt)("em",{parentName:"p"},"classify")," things. For example, you can use an image classifier to tell if an image is a cat or a dog. We will not be using any discriminative AIs in this course."),(0,r.kt)("p",null,"Only a few generative AIs are currently advanced enough to be especially useful for prompt engineering. We mainly use GPT-3 and ChatGPT in this course. As we mentioned in the last page, ChatGPT is a chat bot, while GPT-3 is not. ",(0,r.kt)("strong",{parentName:"p"},"They will usually produce different responses when asked the same question"),". If you are a developer, I recommend using GPT-3, since it is more reproducible. If you are a non-developer, I recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/category/%EF%B8%8F-image-prompting"},"ChatGPT"),", since it is easier to use. Most techniques in this course can be applied to both AIs. However, some of them will be GPT-3 only, so we encourage you to use GPT-3 if you want to use all of the techniques in this course."),(0,r.kt)("p",null,"We will also use ",(0,r.kt)("a",{parentName:"p",href:"https://beta.dreamstudio.ai/home"},"Stable Diffusion")," and ",(0,r.kt)("a",{parentName:"p",href:"https://openai.com/product/dall-e-2"},"DALLE")," in the image generation section. See more relevant AIs ",(0,r.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/products#chatbots"},"here"),"."),(0,r.kt)("h2",{id:"how-these-ais-work"},"How these AIs work"),(0,r.kt)("p",null,"This section describes aspects of popular generative ",(0,r.kt)("strong",{parentName:"p"},"text")," AIs. These AIs have brains that are made up of billions of artificial neurons. The way these neurons are structured is called a transformer architecture. It is a fairly complex type of neural network. What you should understand is:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"These AIs are just math functions. Instead of ",(0,r.kt)("span",{parentName:"li",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"f"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"x"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("msup",{parentName:"mrow"},(0,r.kt)("mi",{parentName:"msup"},"x"),(0,r.kt)("mn",{parentName:"msup"},"2"))),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f(x) = x^2")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"x"),(0,r.kt)("span",{parentName:"span",className:"msupsub"},(0,r.kt)("span",{parentName:"span",className:"vlist-t"},(0,r.kt)("span",{parentName:"span",className:"vlist-r"},(0,r.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,r.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,r.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,r.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,r.kt)("span",{parentName:"span",className:"mord mtight"},"2")))))))))))),", they are more like f(thousands of variables) = thousands of possible outputs."),(0,r.kt)("li",{parentName:"ol"},"These AIs understand sentences by breaking them into words/subwords called tokens (e.g. the AI might read ",(0,r.kt)("inlineCode",{parentName:"li"},"I don't like")," as ",(0,r.kt)("inlineCode",{parentName:"li"},'"I", "don", "\'t" "like"'),"). Each token is then converted into a list of numbers, so the AI can process it."),(0,r.kt)("li",{parentName:"ol"},"These AIs predict the next word/token in the sentence based on the previous words/tokens (e.g. the AI might predict ",(0,r.kt)("inlineCode",{parentName:"li"},"apples")," after ",(0,r.kt)("inlineCode",{parentName:"li"},"I don't like"),"). Each token they write is based on the previous tokens they have seen and written; every time they write a new token, they pause to think about what the next token should be."),(0,r.kt)("li",{parentName:"ol"},"These AIs look at every token at the same time. They don't read left to right, or right to left like humans do. ")),(0,r.kt)("p",null,'Please understand that the words "think", "brain", and "neuron" are zoomorphisms, which are essentially metaphors for what the model is actually doing. These models are not really thinking, they are just math functions. They are not actually brains, they are just artificial neural networks. They are not actually biological neurons, they are just numbers.'),(0,r.kt)("p",null,"This is an area of active research and philosophizing. This description is rather cynical about their nature and is meant to temper popular media depiction of AIs as beings that think/act like humans. This being said, if you want to anthropomorphize the AI, go ahead! It seems that most people do this and it may even be helpful for learning."),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.d2l.ai"},"d2l.ai")," is a good resource for learning about how AI works")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Please note that the authors do, in fact, enjoy apples. They are delicious."))))}u.isMDXComponent=!0}}]);