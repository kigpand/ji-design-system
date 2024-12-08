import{d as i,j as r,m as d,l as u}from"./styled-components.browser.esm-B9PbkTCc.js";import{r as a}from"./index-RYns6xqu.js";function l({value:e,handleSelectItem:n}){return r.jsx(m,{onClick:()=>n(e),children:e})}const m=i.li`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 4px;
  border-bottom: 1px solid gray;
  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }

  &:last-of-type {
    border: none;
  }
`;l.__docgenInfo={description:"",methods:[],displayName:"SelectItem",props:{value:{required:!0,tsType:{name:"string"},description:""},handleSelectItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(select: string) => void",signature:{arguments:[{type:{name:"string"},name:"select"}],return:{name:"void"}}},description:""}}};function g(e){const[n,p]=a.useState(e.placeholder),[s,o]=a.useState(null);function c(t){p(t),e.handleChangeSelect(t),o(!1)}return r.jsxs(h,{$width:e.width,children:[r.jsx(x,{tabIndex:0,onFocus:()=>o(!0),onBlur:()=>o(!1),children:n}),s!==null&&r.jsx(f,{$isOpen:s,children:e.values.map(t=>r.jsx(l,{value:t,handleSelectItem:c},t))})]})}const h=i.div`
  position: relative;
  width: ${e=>e.$width};
`,x=i.div`
  width: 100%;
  height: 35px;
  padding: 0px 8px;
  background-color: white;
  border-radius: 4px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  padding-left: 4px;
  color: gray;
  cursor: pointer;
`,y=e=>u`
  animation: ${e?b:w} 0.15s ease-in forwards;
`,f=i.ul`
  opacity: 0;
  position: absolute;
  top: 40px;
  left: 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
  border: 1px solid gray;
  ${e=>y(e.$isOpen)};
`,b=d`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,w=d`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;g.__docgenInfo={description:"",methods:[],displayName:"Select",props:{width:{required:!0,tsType:{name:"string"},description:""},placeholder:{required:!0,tsType:{name:"string"},description:""},values:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},handleChangeSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(select: string) => void",signature:{arguments:[{type:{name:"string"},name:"select"}],return:{name:"void"}}},description:""}}};export{g as S};
