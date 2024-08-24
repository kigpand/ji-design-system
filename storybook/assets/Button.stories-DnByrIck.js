import{d as a,j as r}from"./styled-components.browser.esm-Dtenumop.js";import"./index-RYns6xqu.js";const o={primiary:"#3dbfeb",secondary:"#ff5252",tertiary:"#50f050",speciality:"#ffc745"},z=e=>e.func==="primary"?r.jsx(D,{...e,children:e.label}):e.func==="secondary"?r.jsx(B,{...e,children:e.label}):e.func==="tertiary"?r.jsx(h,{...e,children:e.label}):e.func==="speciality"?r.jsx(j,{...e,children:e.label}):r.jsx(t,{...e,children:e.label}),t=a.button`
  padding: ${e=>e.size==="LG"?"16px 32px":e.size==="MD"?"8px 16px":"4px 8px"};
  font-weight: bold;
  color: white;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
`,D=a(t)`
  background-color: ${o.primiary};
`,B=a(t)`
  background-color: ${o.secondary};
`,h=a(t)`
  background-color: ${o.tertiary};
`,j=a(t)`
  background-color: ${o.speciality};
`;z.__docgenInfo={description:"",methods:[],displayName:"Button",props:{func:{required:!0,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary" | "speciality"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"speciality"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},size:{required:!0,tsType:{name:"union",raw:'"LG" | "MD" | "SM"',elements:[{name:"literal",value:'"LG"'},{name:"literal",value:'"MD"'},{name:"literal",value:'"SM"'}]},description:""}}};const $={title:"Button/Button",component:z,tags:["autodocs"],argTypes:{}},n={args:{label:"primary",func:"primary",size:"MD"}},i={args:{label:"secondary",func:"secondary",size:"MD"}},s={args:{label:"tertiary",func:"tertiary",size:"MD"}},c={args:{label:"speciality",func:"speciality",size:"MD"}};var l,u,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "primary",
    func: "primary",
    size: "MD"
  }
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,m,p;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "secondary",
    func: "secondary",
    size: "MD"
  }
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,b,g;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "tertiary",
    func: "tertiary",
    size: "MD"
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,M,S;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "speciality",
    func: "speciality",
    size: "MD"
  }
}`,...(S=(M=c.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};const k=["Primary","Secondary","Tertiary","Speciality"];export{n as Primary,i as Secondary,c as Speciality,s as Tertiary,k as __namedExportsOrder,$ as default};
