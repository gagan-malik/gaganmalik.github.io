"use strict";(self.webpackChunk_purity_design_system=self.webpackChunk_purity_design_system||[]).push([[1732],{"./src/components/SegmentTabs/SegementTabs.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithBackground:()=>WithBackground,WithCallback:()=>WithCallback,WithDefaultTab:()=>WithDefaultTab,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={title:"designsystem/SegmentTab",tags:["autodocs"],component:__webpack_require__("./src/components/SegmentTabs/index.tsx").F};var Default={args:{tabs:[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2"},{id:"tab3",label:"Tab 3"}]}},WithDefaultTab={args:{tabs:[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2"},{id:"tab3",label:"Tab 3"}],defaultTab:"tab2"}},WithCallback={args:{tabs:[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2"},{id:"tab3",label:"Tab 3"}],onTabChange:function(tabId){return console.log("Tab changed to: ".concat(tabId))}}},WithBackground={args:{tabs:[{id:"tab1",label:"Home"},{id:"tab2",label:"Profile"},{id:"tab3",label:"Messages"}],defaultBackground:!0}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "tab1",
      label: "Tab 1"
    }, {
      id: "tab2",
      label: "Tab 2"
    }, {
      id: "tab3",
      label: "Tab 3"
    }]
  }
}`,...Default.parameters?.docs?.source}}},WithDefaultTab.parameters={...WithDefaultTab.parameters,docs:{...WithDefaultTab.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "tab1",
      label: "Tab 1"
    }, {
      id: "tab2",
      label: "Tab 2"
    }, {
      id: "tab3",
      label: "Tab 3"
    }],
    defaultTab: "tab2"
  }
}`,...WithDefaultTab.parameters?.docs?.source}}},WithCallback.parameters={...WithCallback.parameters,docs:{...WithCallback.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "tab1",
      label: "Tab 1"
    }, {
      id: "tab2",
      label: "Tab 2"
    }, {
      id: "tab3",
      label: "Tab 3"
    }],
    onTabChange: tabId => console.log(\`Tab changed to: \${tabId}\`)
  }
}`,...WithCallback.parameters?.docs?.source}}},WithBackground.parameters={...WithBackground.parameters,docs:{...WithBackground.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "tab1",
      label: "Home"
    }, {
      id: "tab2",
      label: "Profile"
    }, {
      id: "tab3",
      label: "Messages"
    }],
    defaultBackground: true
  }
}`,...WithBackground.parameters?.docs?.source}}};let __namedExportsOrder=["Default","WithDefaultTab","WithCallback","WithBackground"]},"./src/components/SegmentTabs/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>SegmentTabs_SegmentTab});var react=__webpack_require__("../node_modules/react/index.js");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var SegmentTabs_SegmentTab=function(param){var tabs=param.tabs,onTabChange=param.onTabChange,defaultTab=param.defaultTab,defaultBackground=param.defaultBackground,_param_orientation=param.orientation,orientation=void 0===_param_orientation?"horizontal":_param_orientation,_param_animated=param.animated,animated=void 0===_param_animated||_param_animated,_param_className=param.className,_useState=_sliced_to_array((0,react.useState)(defaultTab||tabs[0].id),2),activeTab=_useState[0],setActiveTab=_useState[1],indicatorRef=react.useRef(null),tabsRef=react.useRef(new Map),handleTabClick=function(tabId){setActiveTab(tabId),null==onTabChange||onTabChange(tabId)};react.useEffect(function(){if(animated){var activeButton=tabsRef.current.get(activeTab),indicator=indicatorRef.current,container=null==activeButton?void 0:activeButton.parentElement;if(activeButton&&indicator&&container){var containerRect=container.getBoundingClientRect(),buttonRect=activeButton.getBoundingClientRect();if("horizontal"===orientation){var left=buttonRect.left-containerRect.left,width=buttonRect.width;indicator.style.left="".concat(left,"px"),indicator.style.width="".concat(width,"px"),indicator.style.top="",indicator.style.height=""}else{var top=buttonRect.top-containerRect.top,height=buttonRect.height;indicator.style.top="".concat(top,"px"),indicator.style.height="".concat(height,"px"),indicator.style.left="",indicator.style.width=""}}}},[activeTab,orientation,animated,tabs]);var containerClasses=classNames("horizontal"===orientation?"flex":"flex flex-col",defaultBackground?"w-fit bg-bg-secondary rounded-full p-1":"rounded-md p-1 bg-bg-primary",void 0===_param_className?"":_param_className);return react.createElement("div",{className:containerClasses},react.createElement("div",{className:classNames("relative","horizontal"===orientation?"flex gap-1":"flex flex-col gap-1")},animated&&react.createElement("div",{ref:indicatorRef,className:classNames("absolute bg-bg-secondary_subtle rounded-full transition-all duration-300 ease-out","horizontal"===orientation?"h-[calc(100%-8px)] top-1":"w-[calc(100%-8px)] left-1"),style:{opacity:0}}),tabs.map(function(tab){var isActive=activeTab===tab.id;return react.createElement("button",{key:tab.id,ref:function(el){el&&tabsRef.current.set(tab.id,el)},className:classNames("relative px-3 py-2 rounded-full font-semibold text-base transition-colors","flex items-center gap-2",isActive?"bg-bg-secondary_subtle text-text-secondary":defaultBackground?"text-text-quaternary":"text-text-quaternary hover:bg-bg-primary_hover"),onClick:function(){return handleTabClick(tab.id)}},tab.icon&&react.createElement("span",{className:"w-5 h-5"},"string"==typeof tab.icon?react.createElement("img",{src:tab.icon,alt:""}):tab.icon),react.createElement("span",null,tab.label))})))};try{SegmentTabs_SegmentTab.displayName="SegmentTab",SegmentTabs_SegmentTab.__docgenInfo={description:"",displayName:"SegmentTab",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"{ id: string; label: string; icon?: ReactNode; }[]"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"((tabId: string) => void)"}},defaultTab:{defaultValue:null,description:"",name:"defaultTab",required:!1,type:{name:"string"}},defaultBackground:{defaultValue:null,description:"",name:"defaultBackground",required:!1,type:{name:"boolean"}},orientation:{defaultValue:{value:"horizontal"},description:"Orientation of tabs",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},animated:{defaultValue:{value:"true"},description:"Enable animations",name:"animated",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SegmentTabs/SegmentTabs.tsx#SegmentTab"]={docgenInfo:SegmentTabs_SegmentTab.__docgenInfo,name:"SegmentTab",path:"src/components/SegmentTabs/SegmentTabs.tsx#SegmentTab"})}catch(__react_docgen_typescript_loader_error){}try{SegmentTab.displayName="SegmentTab",SegmentTab.__docgenInfo={description:"",displayName:"SegmentTab",props:{tabs:{defaultValue:null,description:"",name:"tabs",required:!0,type:{name:"{ id: string; label: string; icon?: ReactNode; }[]"}},onTabChange:{defaultValue:null,description:"",name:"onTabChange",required:!1,type:{name:"((tabId: string) => void)"}},defaultTab:{defaultValue:null,description:"",name:"defaultTab",required:!1,type:{name:"string"}},defaultBackground:{defaultValue:null,description:"",name:"defaultBackground",required:!1,type:{name:"boolean"}},orientation:{defaultValue:{value:"horizontal"},description:"Orientation of tabs",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},animated:{defaultValue:{value:"true"},description:"Enable animations",name:"animated",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/SegmentTabs/index.tsx#SegmentTab"]={docgenInfo:SegmentTab.__docgenInfo,name:"SegmentTab",path:"src/components/SegmentTabs/index.tsx#SegmentTab"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-SegmentTabs-SegementTabs-stories.357d5f47.iframe.bundle.js.map