"use strict";(self.webpackChunk_purity_design_system=self.webpackChunk_purity_design_system||[]).push([[7853],{"./src/components/ButtonV2/ButtonV2.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DisabledPrimary:()=>DisabledPrimary,Gradient:()=>Gradient,IconOnly:()=>IconOnly,LeadingIcon:()=>LeadingIcon,Link:()=>Link,Primary:()=>Primary,Secondary:()=>Secondary,Tertiary:()=>Tertiary,TrailingIcon:()=>TrailingIcon,WithLeadingIcon:()=>WithLeadingIcon,WithTrailingIcon:()=>WithTrailingIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ButtonV2_stories});var ButtonV2_ButtonV2=__webpack_require__("./src/components/ButtonV2/ButtonV2.tsx"),Icons=__webpack_require__("./src/components/Icons/Icons.tsx");let icon_namespaceObject=__webpack_require__.p+"static/media/icon.b73db215.svg";var react=__webpack_require__("../node_modules/react/index.js");let ButtonV2_stories={title:"designsystem/ButtonV2",tags:["autodocs"],component:ButtonV2_ButtonV2.J};var Primary={args:{hierarchy:"primary",size:"md",shape:"rounded",children:"Primary Button"}},Secondary={args:{hierarchy:"secondary",size:"md",shape:"rounded",children:"Secondary Button"}},Tertiary={args:{hierarchy:"tertiary",size:"md",shape:"rounded",children:"Tertiary Button"}},Link={args:{hierarchy:"link",size:"md",shape:"rounded",children:"Link Button"}},DisabledPrimary={args:{hierarchy:"primary",size:"md",shape:"rounded",disabled:!0,children:"Disabled Primary Button"}},WithLeadingIcon={args:{hierarchy:"primary",size:"md",shape:"rounded",iconLeadingSrc:icon_namespaceObject,children:"Button with Leading Icon",buttonColor:"bg-warning-500"}},WithTrailingIcon={args:{hierarchy:"primary",size:"md",shape:"rounded",iconTrailingSrc:icon_namespaceObject,children:"Button with Trailing Icon"}},IconOnly={args:{hierarchy:"primary",size:"md",shape:"rounded",iconOnly:!0,iconLeadingSrc:icon_namespaceObject}},LeadingIcon={args:{hierarchy:"primary",size:"md",shape:"rounded",iconLeadingSrc:icon_namespaceObject,children:"Leading Icon Button"}},TrailingIcon={args:{hierarchy:"primary",size:"md",shape:"rounded",iconTrailingSrc:icon_namespaceObject,children:"Trailing Icon Button"}},Gradient={args:{hierarchy:"gradient",size:"md",shape:"rounded",children:"Gradient Button",iconLeadingSrc:react.createElement(Icons.F,{name:"star-01",size:"sm",color:"text-white"})}};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:`{
  args: {
    hierarchy: "primary",
    size: "md",
    shape: "rounded",
    children: "Primary Button"
  }
}`,...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:`{
  args: {
    hierarchy: "secondary",
    size: "md",
    shape: "rounded",
    children: "Secondary Button"
  }
}`,...Secondary.parameters?.docs?.source}}},Tertiary.parameters={...Tertiary.parameters,docs:{...Tertiary.parameters?.docs,source:{originalSource:`{
  args: {
    hierarchy: "tertiary",
    size: "md",
    shape: "rounded",
    children: "Tertiary Button"
  }
}`,...Tertiary.parameters?.docs?.source}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:`{
  args: {
    hierarchy: "link",
    size: "md",
    shape: "rounded",
    children: "Link Button"
  }
}`,...Link.parameters?.docs?.source}}},DisabledPrimary.parameters={...DisabledPrimary.parameters,docs:{...DisabledPrimary.parameters?.docs,source:{originalSource:`{
  args: {
    hierarchy: "primary",
    size: "md",
    shape: "rounded",
    disabled: true,
    children: "Disabled Primary Button"
  }
}`,...DisabledPrimary.parameters?.docs?.source}}},WithLeadingIcon.parameters={...WithLeadingIcon.parameters,docs:{...WithLeadingIcon.parameters?.docs,source:{originalSource:`{
  args: {
    hierarchy: "primary",
    size: "md",
    shape: "rounded",
    iconLeadingSrc: Icon,
    children: "Button with Leading Icon",
    buttonColor: "bg-warning-500"
  }
}`,...WithLeadingIcon.parameters?.docs?.source}}},WithTrailingIcon.parameters={...WithTrailingIcon.parameters,docs:{...WithTrailingIcon.parameters?.docs,source:{originalSource:`{
  args: {
    hierarchy: "primary",
    size: "md",
    shape: "rounded",
    iconTrailingSrc: Icon,
    children: "Button with Trailing Icon"
  }
}`,...WithTrailingIcon.parameters?.docs?.source}}},IconOnly.parameters={...IconOnly.parameters,docs:{...IconOnly.parameters?.docs,source:{originalSource:`{
  args: {
    hierarchy: "primary",
    size: "md",
    shape: "rounded",
    iconOnly: true,
    iconLeadingSrc: Icon
  }
}`,...IconOnly.parameters?.docs?.source}}},LeadingIcon.parameters={...LeadingIcon.parameters,docs:{...LeadingIcon.parameters?.docs,source:{originalSource:`{
  args: {
    hierarchy: "primary",
    size: "md",
    shape: "rounded",
    iconLeadingSrc: Icon,
    children: "Leading Icon Button"
  }
}`,...LeadingIcon.parameters?.docs?.source}}},TrailingIcon.parameters={...TrailingIcon.parameters,docs:{...TrailingIcon.parameters?.docs,source:{originalSource:`{
  args: {
    hierarchy: "primary",
    size: "md",
    shape: "rounded",
    iconTrailingSrc: Icon,
    children: "Trailing Icon Button"
  }
}`,...TrailingIcon.parameters?.docs?.source}}},Gradient.parameters={...Gradient.parameters,docs:{...Gradient.parameters?.docs,source:{originalSource:`{
  args: {
    hierarchy: "gradient",
    size: "md",
    shape: "rounded",
    children: "Gradient Button",
    iconLeadingSrc: <Icons name="star-01" size="sm" color="text-white" />
  }
}`,...Gradient.parameters?.docs?.source}}};let __namedExportsOrder=["Primary","Secondary","Tertiary","Link","DisabledPrimary","WithLeadingIcon","WithTrailingIcon","IconOnly","LeadingIcon","TrailingIcon","Gradient"];try{ButtonV2.displayName="ButtonV2",ButtonV2.__docgenInfo={description:"",displayName:"ButtonV2",props:{hierarchy:{defaultValue:{value:"primary"},description:"",name:"hierarchy",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"primary"'},{value:'"secondary"'},{value:'"gradient"'},{value:'"custom"'},{value:'"tertiary"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'}]}},shape:{defaultValue:{value:"rounded"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'}]}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"destructive"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},buttonColor:{defaultValue:null,description:"",name:"buttonColor",required:!1,type:{name:"string"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"string"}},customBorderColor:{defaultValue:null,description:"",name:"customBorderColor",required:!1,type:{name:"string"}},iconLeadingSrc:{defaultValue:null,description:"",name:"iconLeadingSrc",required:!1,type:{name:"ReactNode"}},iconTrailingSrc:{defaultValue:null,description:"",name:"iconTrailingSrc",required:!1,type:{name:"ReactNode"}},iconOnly:{defaultValue:{value:"false"},description:"",name:"iconOnly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ButtonV2/ButtonV2.stories.tsx#ButtonV2"]={docgenInfo:ButtonV2.__docgenInfo,name:"ButtonV2",path:"src/components/ButtonV2/ButtonV2.stories.tsx#ButtonV2"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/ButtonV2/ButtonV2.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>ButtonV21});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var ButtonV21=function(_param){var _param_hierarchy=_param.hierarchy,hierarchy=void 0===_param_hierarchy?"primary":_param_hierarchy,_param_size=_param.size,size=void 0===_param_size?"md":_param_size,_param_shape=_param.shape,_param_disabled=_param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,buttonColor=_param.buttonColor,textColor=_param.textColor,customBorderColor=_param.customBorderColor,iconLeadingSrc=_param.iconLeadingSrc,iconTrailingSrc=_param.iconTrailingSrc,children=_param.children,_param_iconOnly=_param.iconOnly,_param_variant=_param.variant,variant=void 0===_param_variant?"primary":_param_variant,props=_object_without_properties(_param,["hierarchy","size","shape","disabled","buttonColor","textColor","customBorderColor","iconLeadingSrc","iconTrailingSrc","children","iconOnly","variant"]),buttonStyles="flex items-center justify-center font-semibold group ".concat({rounded:"rounded-full",square:"rounded-none"}[void 0===_param_shape?"rounded":_param_shape]," ").concat(void 0!==_param_iconOnly&&_param_iconOnly?({xs:"p-2",sm:"p-2",md:"p-[10px]",lg:"p-3",xl:"p-[14px]","2xl":"p-4"})[size]:({xs:"text-sm px-3 py-2 gap-1 h-8",sm:"text-sm px-3 py-2 gap-1",md:"text-sm px-[14px] py-[10px] gap-1",lg:"text-md px-[14px] py-[10px] gap-[6px]",xl:"text-md px-[18px] py-3  gap-[6px]","2xl":"text-lg px-[22px] py-4  gap-[10px]"})[size]," ").concat(disabled?({primary:"bg-bg-disabled",secondary:"bg-bg-primary",tertiary:"bg-bg-primary",link:"",gradient:"bg-bg-disabled",custom:""})[hierarchy]:({primary:{primary:buttonColor||"bg-button-primaryBg hover:bg-button-primaryBgHover focus:ring-4 focus:ring-button-ringBrandShadowSm",secondary:buttonColor||"bg-button-secondaryBg hover:bg-button-secondaryBgHover focus:ring-4  focus:ring-button-ringGrayShadowSm",tertiary:buttonColor||"bg-button-tertiaryBg hover:bg-button-tertiaryBgHover",link:buttonColor||"bg-link-500 hover:bg-link-600",gradient:buttonColor||"bg-gradient ",custom:""},destructive:{primary:buttonColor||"bg-button-primaryErrorBg hover:bg-button-primaryErrorBgHover focus:ring-4 focus:ring-button-ringErrorShadowSm",secondary:buttonColor||"bg-button-secondaryErrorBg hover:bg-button-secondaryErrorBgHover focus:ring-4 focus:ring-button-ringErrorShadowSm",tertiary:buttonColor||"bg-button-tertiaryErrorBg hover:bg-button-tertiaryErrorBgHover",link:buttonColor||"bg-link-500 hover:bg-link-600",gradient:buttonColor||"bg-gradient ",custom:""}})[variant][hierarchy]," ").concat(disabled?({primary:"text-fg-disabled",secondary:"text-fg-disabled",tertiary:"text-fg-disabled",link:"text-fg-disabled",gradient:"text-fg-disabled",custom:""})[hierarchy]:({primary:{primary:textColor||"text-button-primaryFg hover:text-button-primaryFgHover",secondary:textColor||"text-button-secondaryFg hover:text-button-secondaryFgHover",tertiary:textColor||"text-button-tertiaryFg hover:text-button-tertiaryFgHover",link:textColor||"text-button-tertiaryFg hover:text-button-tertiaryFgHover",gradient:textColor||"text-button-primaryFg hover:text-button-primaryFgHover",custom:""},destructive:{primary:textColor||"text-button-primaryFg hover:text-button-primaryFgHover",secondary:textColor||"text-button-secondaryErrorFg hover:text-button-secondaryErrorFgHover",tertiary:textColor||"text-button-tertiaryErrorFg hover:text-button-tertiaryErrorFgHover",link:textColor||"text-button-tertiaryErrorFg hover:text-button-tertiaryErrorFgHover",gradient:textColor||"text-button-primaryFg hover:text-button-primaryFgHover",custom:""}})[variant][hierarchy]," ").concat(disabled?({primary:"border border-border-disabled_subtle",secondary:"border border-border-disabled_subtle",tertiary:"",link:"",gradient:"",custom:""})[hierarchy]:({primary:{primary:"border border-button-primaryBorder hover:border-button-primaryBorderHover",secondary:"border ".concat(customBorderColor||"border-button-secondaryBorder hover:border-button-secondaryBorderHover"),tertiary:"",link:"",gradient:"",custom:""},destructive:{primary:"border border-button-primaryErrorBorder hover:border-button-primaryErrorBorderHover",secondary:"border ".concat(customBorderColor||"border-button-secondaryErrorBorder hover:border-button-secondaryErrorBorderHover"),tertiary:"",link:"",gradient:"",custom:""}})[variant][hierarchy]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",_object_spread({className:"custom"!==hierarchy?buttonStyles:"",disabled:disabled},props),iconLeadingSrc&&("string"==typeof iconLeadingSrc?react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:iconLeadingSrc}):iconLeadingSrc),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,children),iconTrailingSrc&&("string"==typeof iconTrailingSrc?react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:iconTrailingSrc}):iconTrailingSrc))};try{ButtonV21.displayName="ButtonV2",ButtonV21.__docgenInfo={description:"",displayName:"ButtonV2",props:{hierarchy:{defaultValue:{value:"primary"},description:"",name:"hierarchy",required:!1,type:{name:"enum",value:[{value:'"link"'},{value:'"primary"'},{value:'"secondary"'},{value:'"gradient"'},{value:'"custom"'},{value:'"tertiary"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xs"'},{value:'"xl"'},{value:'"2xl"'}]}},shape:{defaultValue:{value:"rounded"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'}]}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"destructive"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},buttonColor:{defaultValue:null,description:"",name:"buttonColor",required:!1,type:{name:"string"}},textColor:{defaultValue:null,description:"",name:"textColor",required:!1,type:{name:"string"}},customBorderColor:{defaultValue:null,description:"",name:"customBorderColor",required:!1,type:{name:"string"}},iconLeadingSrc:{defaultValue:null,description:"",name:"iconLeadingSrc",required:!1,type:{name:"ReactNode"}},iconTrailingSrc:{defaultValue:null,description:"",name:"iconTrailingSrc",required:!1,type:{name:"ReactNode"}},iconOnly:{defaultValue:{value:"false"},description:"",name:"iconOnly",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ButtonV2/ButtonV2.tsx#ButtonV2"]={docgenInfo:ButtonV21.__docgenInfo,name:"ButtonV2",path:"src/components/ButtonV2/ButtonV2.tsx#ButtonV2"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-ButtonV2-ButtonV2-stories.44154ec5.iframe.bundle.js.map