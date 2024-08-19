import{d as a,j as e}from"./styled-components.browser.esm-C5ebvetf.js";import"./index-RYns6xqu.js";const s={primiary:"#3dbfeb",secondary:"#ff5252",tertiary:"#50f050",speciality:"#ffc745"},h=r=>r.func==="primary"?e.jsx(j,{...r,children:r.label}):r.func==="secondary"?e.jsx(T,{...r,children:r.label}):r.func==="tertiary"?e.jsx(k,{...r,children:r.label}):r.func==="speciality"?e.jsx(v,{...r,children:r.label}):e.jsx(t,{...r,children:r.label}),t=a.button`
  padding: 8px 16px;
  font-weight: bold;
  color: white;
  border: none;
  outline: none;
  border-radius: 4px;
  cursor: pointer;
`,j=a(t)`
  background-color: ${s.primiary};
`,T=a(t)`
  background-color: ${s.secondary};
`,k=a(t)`
  background-color: ${s.tertiary};
`,v=a(t)`
  background-color: ${s.speciality};
`;h.__docgenInfo={description:"",methods:[],displayName:"Button",props:{func:{required:!0,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary" | "speciality"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'},{name:"literal",value:'"speciality"'}]},description:""},label:{required:!0,tsType:{name:"string"},description:""}}};const w={title:"Button/Button",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},n={args:{label:"primary",func:"primary"}},c={args:{label:"secondary",func:"secondary"}},o={args:{label:"tertiary",func:"tertiary"}},i={args:{label:"speciality",func:"speciality"}};var l,u,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: "primary",
    func: "primary"
  }
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,m,p;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: "secondary",
    func: "secondary"
  }
}`,...(p=(m=c.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var f,b,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: "tertiary",
    func: "tertiary"
  }
}`,...(g=(b=o.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,S,B;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: "speciality",
    func: "speciality"
  }
}`,...(B=(S=i.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const P=["Primary","Secondary","Tertiary","Speciality"];export{n as Primary,c as Secondary,i as Speciality,o as Tertiary,P as __namedExportsOrder,w as default};
