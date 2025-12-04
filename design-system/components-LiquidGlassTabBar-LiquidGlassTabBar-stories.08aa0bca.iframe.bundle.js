(self.webpackChunk_purity_design_system=self.webpackChunk_purity_design_system||[]).push([[9959],{"../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return classNames}).apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/LiquidGlassTabBar/LiquidGlassTabBar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,Compact:()=>Compact,Interactive:()=>Interactive,ManyTabs:()=>ManyTabs,TopPosition:()=>TopPosition,WithDefaultTab:()=>WithDefaultTab,WithDisabledTabs:()=>WithDisabledTabs,WithIcons:()=>WithIcons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_LiquidGlassTabBar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/LiquidGlassTabBar/LiquidGlassTabBar.tsx");let __WEBPACK_DEFAULT_EXPORT__={component:_LiquidGlassTabBar__WEBPACK_IMPORTED_MODULE_1__.p,title:"designsystem/LiquidGlassTabBar",tags:["autodocs"],argTypes:{position:{control:{type:"select"},options:["top","bottom"]},variant:{control:{type:"select"},options:["default","compact"]}},args:{}};var defaultTabs=[{id:"home",label:"Home"},{id:"explore",label:"Explore"},{id:"messages",label:"Messages"},{id:"profile",label:"Profile"}],Base={args:{tabs:defaultTabs,position:"bottom",variant:"default"}},WithIcons={args:{tabs:[{id:"home",label:"Home",icon:"/icons/home.svg"},{id:"explore",label:"Explore",icon:"/icons/searchIcon.svg"},{id:"messages",label:"Messages",icon:"/icons/notification.svg"},{id:"profile",label:"Profile",icon:"/icons/icon.svg"}],position:"bottom",variant:"default"}},Compact={args:{tabs:defaultTabs,position:"bottom",variant:"compact"}},TopPosition={args:{tabs:defaultTabs,position:"top",variant:"default"}},WithDisabledTabs={args:{tabs:[{id:"home",label:"Home"},{id:"explore",label:"Explore",disabled:!0},{id:"messages",label:"Messages"},{id:"profile",label:"Profile"}],position:"bottom",variant:"default"}},WithDefaultTab={args:{tabs:defaultTabs,defaultTab:"messages",position:"bottom",variant:"default"}},ManyTabs={args:{tabs:[{id:"tab1",label:"Tab 1"},{id:"tab2",label:"Tab 2"},{id:"tab3",label:"Tab 3"},{id:"tab4",label:"Tab 4"},{id:"tab5",label:"Tab 5"},{id:"tab6",label:"Tab 6"}],position:"bottom",variant:"default"}},Interactive={render:function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{width:"100%",height:"100vh",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",position:"relative",padding:"2rem"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{marginTop:"2rem",color:"white"}},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2",null,"Liquid Glass Tab Bar Navigation"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",null,"Click on different tabs to see the smooth liquid indicator animation.")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LiquidGlassTabBar__WEBPACK_IMPORTED_MODULE_1__.p,args))},args:{tabs:defaultTabs,position:"bottom",variant:"default"}};Base.parameters={...Base.parameters,docs:{...Base.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    position: "bottom",
    variant: "default"
  }
}`,...Base.parameters?.docs?.source}}},WithIcons.parameters={...WithIcons.parameters,docs:{...WithIcons.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "home",
      label: "Home",
      icon: "/icons/home.svg"
    }, {
      id: "explore",
      label: "Explore",
      icon: "/icons/searchIcon.svg"
    }, {
      id: "messages",
      label: "Messages",
      icon: "/icons/notification.svg"
    }, {
      id: "profile",
      label: "Profile",
      icon: "/icons/icon.svg"
    }],
    position: "bottom",
    variant: "default"
  }
}`,...WithIcons.parameters?.docs?.source}}},Compact.parameters={...Compact.parameters,docs:{...Compact.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    position: "bottom",
    variant: "compact"
  }
}`,...Compact.parameters?.docs?.source}}},TopPosition.parameters={...TopPosition.parameters,docs:{...TopPosition.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    position: "top",
    variant: "default"
  }
}`,...TopPosition.parameters?.docs?.source}}},WithDisabledTabs.parameters={...WithDisabledTabs.parameters,docs:{...WithDisabledTabs.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: "home",
      label: "Home"
    }, {
      id: "explore",
      label: "Explore",
      disabled: true
    }, {
      id: "messages",
      label: "Messages"
    }, {
      id: "profile",
      label: "Profile"
    }],
    position: "bottom",
    variant: "default"
  }
}`,...WithDisabledTabs.parameters?.docs?.source}}},WithDefaultTab.parameters={...WithDefaultTab.parameters,docs:{...WithDefaultTab.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: defaultTabs,
    defaultTab: "messages",
    position: "bottom",
    variant: "default"
  }
}`,...WithDefaultTab.parameters?.docs?.source}}},ManyTabs.parameters={...ManyTabs.parameters,docs:{...ManyTabs.parameters?.docs,source:{originalSource:`{
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
    }, {
      id: "tab4",
      label: "Tab 4"
    }, {
      id: "tab5",
      label: "Tab 5"
    }, {
      id: "tab6",
      label: "Tab 6"
    }],
    position: "bottom",
    variant: "default"
  }
}`,...ManyTabs.parameters?.docs?.source}}},Interactive.parameters={...Interactive.parameters,docs:{...Interactive.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    width: "100%",
    height: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    position: "relative",
    padding: "2rem"
  }}>
      <div style={{
      marginTop: "2rem",
      color: "white"
    }}>
        <h2>Liquid Glass Tab Bar Navigation</h2>
        <p>Click on different tabs to see the smooth liquid indicator animation.</p>
      </div>
      <LiquidGlassTabBar {...args} />
    </div>,
  args: {
    tabs: defaultTabs,
    position: "bottom",
    variant: "default"
  }
}`,...Interactive.parameters?.docs?.source}}};let __namedExportsOrder=["Base","WithIcons","Compact","TopPosition","WithDisabledTabs","WithDefaultTab","ManyTabs","Interactive"]},"./src/components/LiquidGlassTabBar/LiquidGlassTabBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>LiquidGlassTabBar});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var VARIANTS_COMPACT="compact",LiquidGlassTabBar=function(param){var tabs=param.tabs,controlledActiveTab=param.activeTab,defaultTab=param.defaultTab,onTabChange=param.onTabChange,_param_position=param.position,position=void 0===_param_position?"bottom":_param_position,_param_className=param.className,className=void 0===_param_className?"":_param_className,_param_variant=param.variant,variant=void 0===_param_variant?"default":_param_variant,_param_testId=param.testId,_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function(){if(defaultTab)return defaultTab;var _tabs_,firstEnabledTab=tabs.find(function(tab){return!tab.disabled});return(null==firstEnabledTab?void 0:firstEnabledTab.id)||(null==(_tabs_=tabs[0])?void 0:_tabs_.id)||""}),2),internalActiveTab=_useState[0],setInternalActiveTab=_useState[1],_useState1=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({left:"0px",width:"0px",opacity:0}),2),indicatorStyle=_useState1[0],setIndicatorStyle=_useState1[1],tabRefs=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map),containerRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),resizeTimeoutRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),activeTab=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return void 0!==controlledActiveTab?controlledActiveTab:internalActiveTab},[controlledActiveTab,internalActiveTab]),isControlled=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return void 0!==controlledActiveTab},[controlledActiveTab]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){tabs&&0!==tabs.length||console.warn("LiquidGlassTabBar: tabs array is empty or undefined")},[tabs]);var updateIndicator=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){var activeTabElement=tabRefs.current.get(activeTab),container=containerRef.current;if(activeTabElement&&container){var containerRect=container.getBoundingClientRect(),tabRect=activeTabElement.getBoundingClientRect(),left=tabRect.left-containerRect.left,width=tabRect.width;setIndicatorStyle({left:"".concat(left,"px"),width:"".concat(width,"px"),opacity:1})}},[activeTab]),handleResize=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(){resizeTimeoutRef.current&&clearTimeout(resizeTimeoutRef.current),resizeTimeoutRef.current=setTimeout(function(){updateIndicator()},100)},[updateIndicator]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var timeoutId=setTimeout(function(){updateIndicator()},0);return window.addEventListener("resize",handleResize),window.addEventListener("orientationchange",handleResize),function(){clearTimeout(timeoutId),window.removeEventListener("resize",handleResize),window.removeEventListener("orientationchange",handleResize),resizeTimeoutRef.current&&clearTimeout(resizeTimeoutRef.current)}},[activeTab,tabs,updateIndicator,handleResize]);var handleTabClick=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(tabId,disabled){disabled||(isControlled||setInternalActiveTab(tabId),null==onTabChange||onTabChange(tabId))},[isControlled,onTabChange]),handleKeyDown=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(event,tabId,index){var enabledTabs=tabs.filter(function(tab){return!tab.disabled}),currentIndex=enabledTabs.findIndex(function(tab){return tab.id===tabId}),targetIndex=currentIndex;switch(event.key){case"ArrowRight":case"ArrowDown":event.preventDefault(),targetIndex=currentIndex<enabledTabs.length-1?currentIndex+1:0;break;case"ArrowLeft":case"ArrowUp":event.preventDefault(),targetIndex=currentIndex>0?currentIndex-1:enabledTabs.length-1;break;case"Home":event.preventDefault(),targetIndex=0;break;case"End":event.preventDefault(),targetIndex=enabledTabs.length-1;break;case"Enter":case" ":event.preventDefault(),handleTabClick(tabId);return;default:return}var targetTab=enabledTabs[targetIndex];if(targetTab){var targetElement=tabRefs.current.get(targetTab.id);null==targetElement||targetElement.focus(),handleTabClick(targetTab.id,targetTab.disabled)}},[tabs,handleTabClick]),setTabRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(tabId,element){element?tabRefs.current.set(tabId,element):tabRefs.current.delete(tabId)},[]),containerClasses=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return classnames__WEBPACK_IMPORTED_MODULE_1___default()("fixed left-1/2 transform -translate-x-1/2 z-50 rounded-full shadow-2xl transition-all duration-300","top"===position?"top-0":"bottom-0",variant===VARIANTS_COMPACT?"px-3 py-2":"px-4 py-3",className)},[position,variant,className]),containerStyle=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return{background:"rgba(255, 255, 255, 0.1)",backdropFilter:"blur(20px) saturate(180%)",WebkitBackdropFilter:"blur(20px) saturate(180%)",boxShadow:"0 8px 32px 0 rgba(31, 38, 135, 0.37)",border:"1px solid rgba(255, 255, 255, 0.18)"}},[]),indicatorHeight=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return variant===VARIANTS_COMPACT?"calc(100% - 8px)":"calc(100% - 12px)"},[variant]),indicatorTop=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return variant===VARIANTS_COMPACT?"4px":"6px"},[variant]),tabPaddingClasses=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function(){return variant===VARIANTS_COMPACT?"px-4 py-2":"px-6 py-3"},[variant]),renderTab=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function(tab,index){var _tab_disabled,isActive=activeTab===tab.id,isDisabled=null!=(_tab_disabled=tab.disabled)&&_tab_disabled,ariaLabel=tab.ariaLabel||tab.label,tabClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()("relative rounded-full font-semibold text-sm transition-all duration-300","flex items-center gap-2 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2",tabPaddingClasses,{"text-text-primary":isActive,"text-text-disabled cursor-not-allowed":isDisabled,"text-text-quaternary hover:text-text-secondary":!isActive&&!isDisabled,"hover:bg-bg-primary_hover/30":!isDisabled&&!isActive}),dotPosition="top"===position?"-bottom-1":"-top-1";return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{key:tab.id,ref:function(el){return setTabRef(tab.id,el)},onClick:function(){return handleTabClick(tab.id,isDisabled)},onKeyDown:function(e){return handleKeyDown(e,tab.id,index)},disabled:isDisabled,role:"tab","aria-selected":isActive,"aria-label":ariaLabel,"aria-controls":"tabpanel-".concat(tab.id),tabIndex:isActive&&!isDisabled?0:-1,className:tabClasses,"data-testid":"tab-".concat(tab.id)},tab.icon&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"flex items-center justify-center","aria-hidden":"true"},"string"==typeof tab.icon?react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:tab.icon,alt:"",className:"w-5 h-5",role:"presentation"}):tab.icon),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",null,tab.label),isActive&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("absolute left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary-500 transition-all duration-300",dotPosition),style:{boxShadow:"0 0 8px rgba(59, 130, 246, 0.8)"},"aria-hidden":"true"}))},[activeTab,position,tabPaddingClasses,handleTabClick,handleKeyDown,setTabRef]);return tabs&&0!==tabs.length?react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav",{ref:containerRef,className:containerClasses,style:containerStyle,role:"tablist","aria-label":"Tab navigation","data-testid":void 0===_param_testId?"liquid-glass-tab-bar":_param_testId},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"relative flex items-center gap-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"absolute h-full bg-bg-secondary/40 rounded-full pointer-events-none",style:_object_spread_props(_object_spread({},indicatorStyle),{height:indicatorHeight,top:indicatorTop,borderRadius:"9999px",backdropFilter:"blur(10px)",boxShadow:"inset 0 2px 4px rgba(255, 255, 255, 0.2), 0 2px 8px rgba(0, 0, 0, 0.1)",transition:"left ".concat(500,"ms ease-out, width ").concat(500,"ms ease-out, opacity ").concat(500,"ms ease-out")}),"aria-hidden":"true"}),tabs.map(function(tab,index){return renderTab(tab,index)}))):null};try{LiquidGlassTabBar.displayName="LiquidGlassTabBar",LiquidGlassTabBar.__docgenInfo={description:`LiquidGlassTabBar - A beautiful tab bar navigation component with glassmorphism effect
and smooth animated indicator`,displayName:"LiquidGlassTabBar",props:{tabs:{defaultValue:null,description:"Array of tab items to display",name:"tabs",required:!0,type:{name:"LiquidGlassTabItem[]"}},activeTab:{defaultValue:null,description:"Controlled active tab ID",name:"activeTab",required:!1,type:{name:"string"}},defaultTab:{defaultValue:null,description:"Default active tab ID (uncontrolled mode)",name:"defaultTab",required:!1,type:{name:"string"}},onTabChange:{defaultValue:null,description:"Callback fired when tab changes",name:"onTabChange",required:!1,type:{name:"((tabId: string) => void)"}},position:{defaultValue:{value:"bottom"},description:"Position of the tab bar",name:"position",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"default"},description:"Size variant of the tab bar",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"compact"'}]}},testId:{defaultValue:{value:"liquid-glass-tab-bar"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/LiquidGlassTabBar/LiquidGlassTabBar.tsx#LiquidGlassTabBar"]={docgenInfo:LiquidGlassTabBar.__docgenInfo,name:"LiquidGlassTabBar",path:"src/components/LiquidGlassTabBar/LiquidGlassTabBar.tsx#LiquidGlassTabBar"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-LiquidGlassTabBar-LiquidGlassTabBar-stories.08aa0bca.iframe.bundle.js.map