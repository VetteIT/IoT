import{j as e,i as re,k as oe,b as a,B as j}from"./index-uXjfszPq.js";import{u as A,G as m,C as se,a as ne,b as ae,F as ie,c as ce,d as de}from"./url-join-Bq5OuPDb.js";import{c as O,a as le,u as ue,T as v,G as me,F as W,I as he}from"./useTranslation-DjAqwgvE.js";import{u as M}from"./index-DD3hdzit.js";import{C as xe,B as C,T as z,S as pe,A as fe}from"./TextField-CFRbq1Vu.js";import{T as N}from"./Tooltip-BVZKaCrU.js";import{a as ve,V as je}from"./VisibilityOff-Dz_I50Aw.js";const ge=O(e.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete"),G=O(e.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings");function ze(){const V=re(),u=le(),{getTokenFromStorage:H}=oe(),{t:r}=ue(),l=M(u.breakpoints.down("sm")),h=M(u.breakpoints.down("xs")),[g,w]=a.useState([]),[_,D]=a.useState(""),[x,T]=a.useState(""),[S,E]=a.useState(""),[$,y]=a.useState([]),[F,q]=a.useState(!1),[R,n]=a.useState(!1),[U,o]=a.useState(""),[J,i]=a.useState("success"),[L,K]=a.useState(!1),I="http://147.232.205.77:8000",P=A(I,"devices"),b=()=>H(),Q=async()=>{try{const t=b();if(!t)throw new Error("No authentication token found");const s=await fetch(P,{method:"GET",headers:{Authorization:`Bearer ${t}`}});if(!s.ok)throw new Error("Failed to fetch devices");const c=await s.json();w(c);const p=c.map(d=>d.product_id);y(p)}catch(t){console.error(t),o(r("home.no_devices")),i("error"),n(!0)}};a.useEffect(()=>{Q(),K(!0)},[]);const X=async t=>{if(t.preventDefault(),!_||!x||!S){o(r("home.fill_all_fields")),i("error"),n(!0);return}if($.includes(x)){o(r("common.device_id_exists")),i("error"),n(!0);return}try{const s=b();if(!s)throw new Error("No authentication token found");const c=await fetch(P,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`},body:JSON.stringify({name:_,product_id:x,product_password:S})});if(!c.ok){c.status===404?o(r("home.device_not_found")):c.status===400?o(r("home.device_exists_or_invalid")):o(r("common.error_occurred")),i("error"),n(!0);return}const p=await c.json();w(d=>[...d,p]),y(d=>[...d,x]),D(""),T(""),E(""),o(r("home.device_added_success")),i("success"),n(!0)}catch(s){console.error(s),o(r("common.error_occurred")),i("error"),n(!0)}},Y=async t=>{try{const s=b();if(!s)throw new Error("No authentication token found");const c=g.find(f=>f.id===t);if(!c){o(r("home.device_not_found")),i("error"),n(!0);return}const p=A(I,"devices",t.toString()),d=await fetch(p,{method:"DELETE",headers:{Authorization:`Bearer ${s}`}});if(!d.ok){d.status===404?o(r("home.device_not_found")):o(r("common.error_occurred")),i("error"),n(!0);return}w(f=>f.filter(k=>k.id!==t)),y(f=>f.filter(k=>k!==c.product_id)),o(r("home.device_deleted_success")),i("success"),n(!0)}catch(s){console.error(s),o(r("common.error_occurred")),i("error"),n(!0)}},Z=t=>{V(`/app/window-control/${t}`)},B=()=>{n(!1)},ee=()=>{q(t=>!t)},te=t=>{switch(t){case"wind":return e.jsx(de,{size:24,color:u.palette.primary.main});case"rain":return e.jsx(ce,{size:24,color:u.palette.secondary.main});case"fire":return e.jsx(ie,{size:24,color:"#ff9800"});default:return e.jsx(G,{size:24,color:u.palette.text.secondary})}};return e.jsxs(xe,{component:"main",maxWidth:"md",sx:{mt:4,mb:4},children:[e.jsx(v,{variant:"h4",gutterBottom:!0,align:"center",children:r("home.title")}),e.jsxs(j,{sx:{mt:2},children:[g.length===0&&e.jsx(v,{variant:"body1",align:"center",children:r("home.no_devices")}),e.jsx(m,{container:!0,spacing:2,children:g.map(t=>e.jsx(me,{in:!0,timeout:500,children:e.jsx(m,{item:!0,xs:12,children:e.jsxs(se,{sx:{display:"flex",flexDirection:l?"column":"row",alignItems:"center",justifyContent:"space-between",p:2,transition:"transform 0.3s","&:hover":{transform:"scale(1.02)"}},children:[e.jsxs(j,{sx:{display:"flex",alignItems:"center",width:l?"100%":"auto"},children:[te(t.type||"default"),e.jsxs(ne,{sx:{pl:2},children:[e.jsx(v,{variant:"h6",children:t.name}),e.jsxs(v,{variant:"body2",color:"text.secondary",children:[r("home.device_id"),": ",t.id]})]})]}),e.jsxs(ae,{sx:{display:"flex",gap:1,mt:l?2:0,width:l?"100%":"auto",justifyContent:l?"space-between":"flex-end"},children:[e.jsx(N,{title:r("home.control_tooltip")||"Kontrolovať zariadenie",children:e.jsx(C,{size:h?"small":"medium",variant:"contained",color:"primary",onClick:()=>Z(t.id),startIcon:e.jsx(G,{}),fullWidth:l,children:!h&&r("home.control")})}),e.jsx(N,{title:r("home.delete_tooltip")||"Vymazať zariadenie",children:e.jsx(C,{size:h?"small":"medium",variant:"outlined",color:"error",onClick:()=>Y(t.id),startIcon:e.jsx(ge,{}),fullWidth:l,children:!h&&r("home.delete")})})]})]})})},t.id))})]}),e.jsx(W,{in:L,timeout:1e3,children:e.jsxs(j,{component:"form",onSubmit:X,sx:{mt:4,p:3,border:"1px solid",borderColor:"divider",borderRadius:2,boxShadow:1,transition:"all 0.5s",backgroundColor:u.palette.background.paper},children:[e.jsx(v,{variant:"h6",gutterBottom:!0,align:"center",children:r("home.add_device")}),e.jsxs(m,{container:!0,spacing:2,children:[e.jsx(m,{item:!0,xs:12,sm:6,md:4,children:e.jsx(z,{margin:"normal",required:!0,fullWidth:!0,label:r("home.device_name"),value:_,onChange:t=>D(t.target.value),variant:"outlined"})}),e.jsx(m,{item:!0,xs:12,sm:6,md:4,children:e.jsx(z,{margin:"normal",required:!0,fullWidth:!0,label:r("home.device_id"),value:x,onChange:t=>T(t.target.value),variant:"outlined"})}),e.jsx(m,{item:!0,xs:12,sm:12,md:4,children:e.jsx(z,{margin:"normal",required:!0,fullWidth:!0,label:r("home.device_password"),type:F?"text":"password",value:S,onChange:t=>E(t.target.value),variant:"outlined",InputProps:{endAdornment:e.jsx(he,{onClick:ee,edge:"end",children:F?e.jsx(ve,{}):e.jsx(je,{})})}})})]}),e.jsx(j,{sx:{mt:3},children:e.jsx(W,{in:!0,timeout:1e3,children:e.jsx(C,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,size:h?"small":"large",children:r("home.add_device_button")})})})]})}),e.jsx(pe,{open:R,autoHideDuration:6e3,onClose:B,anchorOrigin:{vertical:"bottom",horizontal:"center"},children:e.jsx(fe,{onClose:B,severity:J,sx:{width:"100%"},children:U})})]})}export{ze as default};
