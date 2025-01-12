import{g as S,a as T,n as g,f as i,s as A,c as L,m as F,b as m,u as R,j as M,d as P,e as j,h as U}from"./index-uXjfszPq.js";import{T as z,a as B,i as v}from"./useTranslation-DjAqwgvE.js";function N(e){return S("MuiLink",e)}const E=T("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),H=({theme:e,ownerState:r})=>{const t=r.color,n=g(e,`palette.${t}`,!1)||r.color,o=g(e,`palette.${t}Channel`);return"vars"in e&&o?`rgba(${o} / 0.4)`:i(n,.4)},k={primary:!0,secondary:!0,error:!0,info:!0,success:!0,warning:!0,textPrimary:!0,textSecondary:!0,textDisabled:!0},W=e=>{const{classes:r,component:t,focusVisible:n,underline:o}=e,l={root:["root",`underline${L(o)}`,t==="button"&&"button",n&&"focusVisible"]};return j(l,N,r)},O=A(z,{name:"MuiLink",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[`underline${L(t.underline)}`],t.component==="button"&&r.button]}})(F(({theme:e})=>({variants:[{props:{underline:"none"},style:{textDecoration:"none"}},{props:{underline:"hover"},style:{textDecoration:"none","&:hover":{textDecoration:"underline"}}},{props:{underline:"always"},style:{textDecoration:"underline","&:hover":{textDecorationColor:"inherit"}}},{props:({underline:r,ownerState:t})=>r==="always"&&t.color!=="inherit",style:{textDecorationColor:"var(--Link-underlineColor)"}},...Object.entries(e.palette).filter(U()).map(([r])=>({props:{underline:"always",color:r},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette[r].mainChannel} / 0.4)`:i(e.palette[r].main,.4)}})),{props:{underline:"always",color:"textPrimary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:i(e.palette.text.primary,.4)}},{props:{underline:"always",color:"textSecondary"},style:{"--Link-underlineColor":e.vars?`rgba(${e.vars.palette.text.secondaryChannel} / 0.4)`:i(e.palette.text.secondary,.4)}},{props:{underline:"always",color:"textDisabled"},style:{"--Link-underlineColor":(e.vars||e).palette.text.disabled}},{props:{component:"button"},style:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${E.focusVisible}`]:{outline:"auto"}}}]}))),I=m.forwardRef(function(r,t){const n=R({props:r,name:"MuiLink"}),o=B(),{className:l,color:s="primary",component:p="a",onBlur:d,onFocus:y,TypographyClasses:h,underline:b="always",variant:x="inherit",sx:u,...f}=n,[w,C]=m.useState(!1),D=a=>{v(a.target)||C(!1),d&&d(a)},$=a=>{v(a.target)&&C(!0),y&&y(a)},c={...n,color:s,component:p,focusVisible:w,underline:b,variant:x},V=W(c);return M.jsx(O,{color:s,className:P(V.root,l),classes:h,component:p,onBlur:D,onFocus:$,ref:t,ownerState:c,variant:x,...f,sx:[...k[s]===void 0?[{color:s}]:[],...Array.isArray(u)?u:[u]],style:{...f.style,...b==="always"&&s!=="inherit"&&!k[s]&&{"--Link-underlineColor":H({theme:o,ownerState:c})}}})});export{I as L};
