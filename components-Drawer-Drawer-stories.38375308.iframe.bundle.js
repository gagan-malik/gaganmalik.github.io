"use strict";(self.webpackChunk_purity_design_system=self.webpackChunk_purity_design_system||[]).push([[4527],{"./src/components/Drawer/Drawer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BottomDrawer:()=>BottomDrawer,RightDrawer:()=>RightDrawer,TopDrawer:()=>TopDrawer,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}let __WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_1__._s,title:"designsystem/Drawer",tags:["autodocs"]};var TopDrawer={render:function(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),openTop=_useState[0],setOpenTop=_useState[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"min-h-screen flex items-center justify-center flex-col"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"rounded m-4 bg-purple-400 w-40 h-10 flex items-center justify-center cursor-pointer",onClick:function(){return setOpenTop(!openTop)}},"open top drawer"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__._s,{open:openTop,side:"top",setOpen:setOpenTop,children:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Top Drawer content")}))}},BottomDrawer={render:function(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),openBottom=_useState[0],setOpenBottom=_useState[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"min-h-screen flex items-center justify-center flex-col"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"rounded m-4 bg-purple-400 w-40 h-10 flex items-center justify-center cursor-pointer",onClick:function(){return setOpenBottom(!openBottom)}},"open bottom drawer"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__._s,{open:openBottom,side:"bottom",setOpen:setOpenBottom,children:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Down Drawer content")}))}},RightDrawer={render:function(){var _useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),openRight=_useState[0],setOpenRight=_useState[1];return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"min-h-screen flex items-center justify-center flex-col"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"rounded m-4 bg-purple-400 w-40 h-10 flex items-center justify-center cursor-pointer",onClick:function(){return setOpenRight(!openRight)}},"open right drawer"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__._s,{open:openRight,side:"right",setOpen:setOpenRight,children:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,"Right Drawer content")}))}};TopDrawer.parameters={...TopDrawer.parameters,docs:{...TopDrawer.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openTop, setOpenTop] = useState(false);
    return <div className="min-h-screen flex
      items-center justify-center flex-col">
        <div className="rounded m-4
          bg-purple-400 w-40 h-10 flex
          items-center justify-center
          cursor-pointer" onClick={() => setOpenTop(!openTop)}>
          open top drawer
        </div>
        <Drawer open={openTop} side="top" setOpen={setOpenTop} children={<div>Top Drawer content</div>} />
      </div>;
  }
}`,...TopDrawer.parameters?.docs?.source}}},BottomDrawer.parameters={...BottomDrawer.parameters,docs:{...BottomDrawer.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openBottom, setOpenBottom] = useState(false);
    return <div className="min-h-screen flex
    items-center justify-center flex-col">
        <div className="rounded m-4
        bg-purple-400 w-40 h-10 flex
        items-center justify-center
        cursor-pointer" onClick={() => setOpenBottom(!openBottom)}>
          open bottom drawer
        </div>
        <Drawer open={openBottom} side="bottom" setOpen={setOpenBottom} children={<div>Down Drawer content</div>} />
      </div>;
  }
}`,...BottomDrawer.parameters?.docs?.source}}},RightDrawer.parameters={...RightDrawer.parameters,docs:{...RightDrawer.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [openRight, setOpenRight] = useState(false);
    return <div className="min-h-screen flex
      items-center justify-center flex-col">
        <div className="rounded m-4
          bg-purple-400 w-40 h-10 flex
          items-center justify-center
          cursor-pointer" onClick={() => setOpenRight(!openRight)}>
          open right drawer
        </div>
        <Drawer open={openRight} side="right" setOpen={setOpenRight} children={<div>Right Drawer content</div>} />
      </div>;
  }
}`,...RightDrawer.parameters?.docs?.source}}};let __namedExportsOrder=["TopDrawer","BottomDrawer","RightDrawer"]}}]);
//# sourceMappingURL=components-Drawer-Drawer-stories.38375308.iframe.bundle.js.map