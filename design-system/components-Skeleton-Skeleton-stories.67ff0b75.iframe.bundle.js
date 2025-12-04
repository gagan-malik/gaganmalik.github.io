(self.webpackChunk_purity_design_system=self.webpackChunk_purity_design_system||[]).push([[2175],{"../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return classNames}).apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/Skeleton/Skeleton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardExample:()=>CardExample,Circular:()=>Circular,ListExample:()=>ListExample,MultipleLines:()=>MultipleLines,Rectangular:()=>Rectangular,Text:()=>Text,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Skeleton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Skeleton/Skeleton.tsx");let __WEBPACK_DEFAULT_EXPORT__={component:_Skeleton__WEBPACK_IMPORTED_MODULE_0__.E,title:"designsystem/Skeleton",tags:["autodocs"],argTypes:{},args:{}};var Text={args:{variant:"text"}},MultipleLines={args:{variant:"text",lines:3}},Circular={args:{variant:"circular",width:40,height:40}},Rectangular={args:{variant:"rectangular",width:"100%",height:200}},CardExample={render:function(){return React.createElement("div",{className:"p-4 border border-border-secondary rounded-lg space-y-4 max-w-md"},React.createElement("div",{className:"flex items-center gap-3"},React.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_0__.E,{variant:"circular",width:48,height:48}),React.createElement("div",{className:"flex-1 space-y-2"},React.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_0__.E,{width:"60%",height:16}),React.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_0__.E,{width:"40%",height:14}))),React.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_0__.E,{variant:"rectangular",width:"100%",height:200}),React.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_0__.E,{variant:"text",lines:2}))}},ListExample={render:function(){return React.createElement("div",{className:"p-4 space-y-3 max-w-md"},[1,2,3].map(function(i){return React.createElement("div",{key:i,className:"flex items-center gap-3"},React.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_0__.E,{variant:"circular",width:40,height:40}),React.createElement("div",{className:"flex-1 space-y-2"},React.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_0__.E,{width:"70%",height:16}),React.createElement(_Skeleton__WEBPACK_IMPORTED_MODULE_0__.E,{width:"50%",height:14})))}))}};Text.parameters={...Text.parameters,docs:{...Text.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text"
  }
}`,...Text.parameters?.docs?.source}}},MultipleLines.parameters={...MultipleLines.parameters,docs:{...MultipleLines.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "text",
    lines: 3
  }
}`,...MultipleLines.parameters?.docs?.source}}},Circular.parameters={...Circular.parameters,docs:{...Circular.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "circular",
    width: 40,
    height: 40
  }
}`,...Circular.parameters?.docs?.source}}},Rectangular.parameters={...Rectangular.parameters,docs:{...Rectangular.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "rectangular",
    width: "100%",
    height: 200
  }
}`,...Rectangular.parameters?.docs?.source}}},CardExample.parameters={...CardExample.parameters,docs:{...CardExample.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-4 border border-border-secondary rounded-lg space-y-4 max-w-md">
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" width={48} height={48} />
        <div className="flex-1 space-y-2">
          <Skeleton width="60%" height={16} />
          <Skeleton width="40%" height={14} />
        </div>
      </div>
      <Skeleton variant="rectangular" width="100%" height={200} />
      <Skeleton variant="text" lines={2} />
    </div>
}`,...CardExample.parameters?.docs?.source}}},ListExample.parameters={...ListExample.parameters,docs:{...ListExample.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-4 space-y-3 max-w-md">
      {[1, 2, 3].map(i => <div key={i} className="flex items-center gap-3">
          <Skeleton variant="circular" width={40} height={40} />
          <div className="flex-1 space-y-2">
            <Skeleton width="70%" height={16} />
            <Skeleton width="50%" height={14} />
          </div>
        </div>)}
    </div>
}`,...ListExample.parameters?.docs?.source}}};let __namedExportsOrder=["Text","MultipleLines","Circular","Rectangular","CardExample","ListExample"]},"./src/components/Skeleton/Skeleton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>Skeleton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),Skeleton=function(param){var width=param.width,height=param.height,_param_variant=param.variant,variant=void 0===_param_variant?"rectangular":_param_variant,_param_lines=param.lines,lines=void 0===_param_lines?1:_param_lines,_param_animation=param.animation,_param_className=param.className,_param_testId=param.testId,testId=void 0===_param_testId?"skeleton":_param_testId,baseClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()("bg-bg-secondary rounded",{pulse:"animate-pulse",wave:"animate-[shimmer_2s_infinite]",none:""}[void 0===_param_animation?"pulse":_param_animation],void 0===_param_className?"":_param_className);return"text"===variant&&lines>1?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"space-y-2","data-testid":testId},Array.from({length:lines}).map(function(_,index){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:index,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(baseClasses,index===lines-1?"w-3/4":"w-full"),style:{height:height||"1rem"}})})):react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(baseClasses,{text:"rounded",circular:"rounded-full",rectangular:"rounded-md"}[variant]),style:{width:width||("circular"===variant?height||"40px":"100%"),height:height||("circular"===variant?width||"40px":"1rem")},"data-testid":testId})};try{Skeleton.displayName="Skeleton",Skeleton.__docgenInfo={description:`Skeleton - Loading placeholder component
Shows content placeholders during data loading`,displayName:"Skeleton",props:{width:{defaultValue:null,description:"Width of the skeleton",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"Height of the skeleton",name:"height",required:!1,type:{name:"string | number"}},variant:{defaultValue:{value:"rectangular"},description:"Shape variant",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"circular"'},{value:'"rectangular"'}]}},lines:{defaultValue:{value:"1"},description:"Number of lines (for text variant)",name:"lines",required:!1,type:{name:"number"}},animation:{defaultValue:{value:"pulse"},description:"Animation speed",name:"animation",required:!1,type:{name:"enum",value:[{value:'"pulse"'},{value:'"wave"'},{value:'"none"'}]}},className:{defaultValue:{value:""},description:"Additional CSS classes",name:"className",required:!1,type:{name:"string"}},testId:{defaultValue:{value:"skeleton"},description:"Test ID for testing",name:"testId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Skeleton/Skeleton.tsx#Skeleton"]={docgenInfo:Skeleton.__docgenInfo,name:"Skeleton",path:"src/components/Skeleton/Skeleton.tsx#Skeleton"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Skeleton-Skeleton-stories.67ff0b75.iframe.bundle.js.map