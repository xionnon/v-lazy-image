var e=Object.defineProperty,r=Object.defineProperties,t=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,c=(r,t,s)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s;import{ref as i,reactive as a,computed as l,onMounted as d,onBeforeUnmount as u,h as p}from"vue";var v={props:{src:{type:String,required:!0},srcPlaceholder:{type:String,default:"data:,"},srcset:{type:String},intersectionOptions:{type:Object,default:()=>({})},usePicture:{type:Boolean,default:!1}},inheritAttrs:!1,setup(e,{attrs:v,slots:b,emit:f}){const y=i(null),O=a({observer:null,intersected:!1,loaded:!1}),g=l((()=>O.intersected&&e.src?e.src:e.srcPlaceholder)),P=l((()=>!(!O.intersected||!e.srcset)&&e.srcset)),m=()=>{y.value.getAttribute("src")!==e.srcPlaceholder&&(O.loaded=!0,f("load"))},w=()=>f("error",y.value);return d((()=>{"IntersectionObserver"in window&&(O.observer=new IntersectionObserver((e=>{e[0].isIntersecting&&(O.intersected=!0,O.observer.disconnect(),f("intersect"))}),e.intersectionOptions),O.observer.observe(y.value))})),u((()=>{"IntersectionObserver"in window&&O.observer.disconnect()})),()=>{const i=p("img",(a=((e,r)=>{for(var t in r||(r={}))o.call(r,t)&&c(e,t,r[t]);if(s)for(var t of s(r))n.call(r,t)&&c(e,t,r[t]);return e})({ref:y,src:g.value,srcset:P.value||null},v),l={class:[v.class,"v-lazy-image",{"v-lazy-image-loaded":O.loaded}],onLoad:m,onError:w},r(a,t(l))));var a,l;return e.usePicture?p("picture",{ref:y,onLoad:m},O.intersected?[b.default,i]:[i]):i}}};export{v as default};