"use strict";(self.webpackChunk_purity_design_system=self.webpackChunk_purity_design_system||[]).push([[4287],{"./src/components/Alert/Alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,Info:()=>Info,Primary:()=>Primary,Success:()=>Success,Transparent:()=>Transparent,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Alert__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Alert/Alert.tsx");__webpack_require__("../node_modules/react/index.js");let __WEBPACK_DEFAULT_EXPORT__={title:"designsystem/Alert",component:_Alert__WEBPACK_IMPORTED_MODULE_0__.F,tags:["autodocs"]};var Base={args:{message:"This is an alert message",onClose:function(){return alert("Close")},alertType:"error"}},Warning={args:{message:"This is an alert message",onClose:function(){return alert("Close")},alertType:"warning"}},Info={args:{message:"This is an alert message",onClose:function(){return alert("Close")},alertType:"info"}},Success={args:{message:"This is an alert message",onClose:function(){return alert("Close")},alertType:"success"}},Transparent={args:{message:"This is an alert message",onClose:function(){return alert("Close")},alertType:"transparent"}},Primary={args:{message:"This is an alert message",onClose:function(){return alert("Close")},alertType:"primary"}};Base.parameters={...Base.parameters,docs:{...Base.parameters?.docs,source:{originalSource:`{
  args: {
    message: "This is an alert message",
    onClose: () => alert("Close"),
    alertType: "error"
  }
}`,...Base.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:`{
  args: {
    message: "This is an alert message",
    onClose: () => alert("Close"),
    alertType: "warning"
  }
}`,...Warning.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:`{
  args: {
    message: "This is an alert message",
    onClose: () => alert("Close"),
    alertType: "info"
  }
}`,...Info.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:`{
  args: {
    message: "This is an alert message",
    onClose: () => alert("Close"),
    alertType: "success"
  }
}`,...Success.parameters?.docs?.source}}},Transparent.parameters={...Transparent.parameters,docs:{...Transparent.parameters?.docs,source:{originalSource:`{
  args: {
    message: "This is an alert message",
    onClose: () => alert("Close"),
    alertType: "transparent"
  }
}`,...Transparent.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:`{
  args: {
    message: "This is an alert message",
    onClose: () => alert("Close"),
    alertType: "primary"
  }
}`,...Primary.parameters?.docs?.source}}};let __namedExportsOrder=["Base","Warning","Info","Success","Transparent","Primary"]},"./src/components/Alert/Alert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>Alert});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/Icons/Icons.tsx"),Alert=function(param){var message=param.message,onClose=param.onClose,actionDiv=param.actionDiv,alertType=param.alertType,messageColor=param.messageColor,backgroundColor=param.backgroundColor,messageText=param.messageText,_param_showCloseButton=param.showCloseButton;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex w-full  h-11  justify-center items-center ".concat({error:"bg-button-tertiaryErrorFg",warning:"bg-bg-warning-solid",info:"bg-bg-brand-solid",success:"bg-bg-success-solid",transparent:"",primary:"bg-bg-brand-solid",default:"bg-bg-primary-solid",custom:backgroundColor}[alertType])},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex w-2xl justify-between items-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"".concat({error:"text-sm  font-semibold",warning:"text-sm  font-semibold",info:"text-sm  font-semibold",success:"text-sm  font-semibold",transparent:"text-sm  font-semibold",primary:"text-sm  font-semibold",default:"text-sm  font-semibold",custom:messageText}[alertType]," ").concat({error:"text-white",warning:"text-white",info:"text-white",success:"text-white",transparent:"text-text-primary",primary:"text-white",default:"text-white",custom:messageColor}[alertType])},message),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center gap-2"},actionDiv,(void 0===_param_showCloseButton||_param_showCloseButton)&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"cursor-pointer",onClick:onClose},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Icons_Icons__WEBPACK_IMPORTED_MODULE_1__.F,{name:"close",size:"xs",color:"text-white"}))))))};try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},actionDiv:{defaultValue:null,description:"",name:"actionDiv",required:!1,type:{name:"ReactNode"}},alertType:{defaultValue:null,description:"",name:"alertType",required:!0,type:{name:"enum",value:[{value:'"success"'},{value:'"default"'},{value:'"transparent"'},{value:'"primary"'},{value:'"custom"'},{value:'"error"'},{value:'"warning"'},{value:'"info"'}]}},messageColor:{defaultValue:null,description:"",name:"messageColor",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},messageText:{defaultValue:null,description:"",name:"messageText",required:!1,type:{name:"string"}},closeButton:{defaultValue:null,description:"",name:"closeButton",required:!1,type:{name:"ReactNode"}},showCloseButton:{defaultValue:{value:"true"},description:"",name:"showCloseButton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Alert/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"src/components/Alert/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}}}]);
//# sourceMappingURL=components-Alert-Alert-stories.34c2ec52.iframe.bundle.js.map