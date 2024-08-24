import{d as i,j as r}from"./styled-components.browser.esm-Dtenumop.js";import{r as d}from"./index-RYns6xqu.js";function a({value:e,handleSelectItem:n}){return r.jsx(c,{onClick:()=>n(e),children:e})}const c=i.li`
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
`;a.__docgenInfo={description:"",methods:[],displayName:"SelectItem",props:{value:{required:!0,tsType:{name:"string"},description:""},handleSelectItem:{required:!0,tsType:{name:"signature",type:"function",raw:"(select: string) => void",signature:{arguments:[{type:{name:"string"},name:"select"}],return:{name:"void"}}},description:""}}};function u(e){const[n,l]=d.useState(e.placeholder),[o,s]=d.useState(!1);function p(t){l(t),e.handleChangeSelect(t),s(!1)}return r.jsxs(g,{children:[r.jsx(m,{$isOpen:o,onClick:()=>s(!o),children:n}),o&&r.jsx(h,{children:e.values.map(t=>r.jsx(a,{value:t,handleSelectItem:p},t))})]})}const g=i.div`
  position: relative;
  width: 100%;
`,m=i.div`
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
`,h=i.ul`
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
`;u.__docgenInfo={description:"",methods:[],displayName:"Select",props:{placeholder:{required:!0,tsType:{name:"string"},description:""},values:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},handleChangeSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(select: string) => void",signature:{arguments:[{type:{name:"string"},name:"select"}],return:{name:"void"}}},description:""}}};export{u as S};
