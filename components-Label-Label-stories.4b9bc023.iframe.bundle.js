(self.webpackChunk_purity_design_system=self.webpackChunk_purity_design_system||[]).push([[6747],{"../node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=(function(){return classNames}).apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/Label/Label.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,FormExample:()=>FormExample,Required:()=>Required,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Label__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Label/Label.tsx"),_FormInput_Input__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/FormInput/Input/index.ts");let __WEBPACK_DEFAULT_EXPORT__={component:_Label__WEBPACK_IMPORTED_MODULE_0__.J,title:"designsystem/Label",tags:["autodocs"],argTypes:{},args:{}};var Basic={render:function(){return React.createElement("div",{className:"p-4"},React.createElement(_Label__WEBPACK_IMPORTED_MODULE_0__.J,{htmlFor:"name"},"Name"),React.createElement(_FormInput_Input__WEBPACK_IMPORTED_MODULE_1__.Input,{id:"name",placeholder:"Enter your name"}))}},Required={render:function(){return React.createElement("div",{className:"p-4"},React.createElement(_Label__WEBPACK_IMPORTED_MODULE_0__.J,{htmlFor:"email",required:!0},"Email Address"),React.createElement(_FormInput_Input__WEBPACK_IMPORTED_MODULE_1__.Input,{id:"email",type:"email",placeholder:"Enter your email"}))}},FormExample={render:function(){return React.createElement("div",{className:"p-4 space-y-4 max-w-md"},React.createElement("div",null,React.createElement(_Label__WEBPACK_IMPORTED_MODULE_0__.J,{htmlFor:"firstName",required:!0},"First Name"),React.createElement(_FormInput_Input__WEBPACK_IMPORTED_MODULE_1__.Input,{id:"firstName",placeholder:"John"})),React.createElement("div",null,React.createElement(_Label__WEBPACK_IMPORTED_MODULE_0__.J,{htmlFor:"lastName",required:!0},"Last Name"),React.createElement(_FormInput_Input__WEBPACK_IMPORTED_MODULE_1__.Input,{id:"lastName",placeholder:"Doe"})),React.createElement("div",null,React.createElement(_Label__WEBPACK_IMPORTED_MODULE_0__.J,{htmlFor:"bio"},"Bio"),React.createElement(_FormInput_Input__WEBPACK_IMPORTED_MODULE_1__.Input,{id:"bio",placeholder:"Tell us about yourself"})))}};Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-4">
      <Label htmlFor="name">Name</Label>
      <Input id="name" placeholder="Enter your name" />
    </div>
}`,...Basic.parameters?.docs?.source}}},Required.parameters={...Required.parameters,docs:{...Required.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-4">
      <Label htmlFor="email" required>
        Email Address
      </Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
}`,...Required.parameters?.docs?.source}}},FormExample.parameters={...FormExample.parameters,docs:{...FormExample.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-4 space-y-4 max-w-md">
      <div>
        <Label htmlFor="firstName" required>
          First Name
        </Label>
        <Input id="firstName" placeholder="John" />
      </div>
      <div>
        <Label htmlFor="lastName" required>
          Last Name
        </Label>
        <Input id="lastName" placeholder="Doe" />
      </div>
      <div>
        <Label htmlFor="bio">Bio</Label>
        <Input id="bio" placeholder="Tell us about yourself" />
      </div>
    </div>
}`,...FormExample.parameters?.docs?.source}}};let __namedExportsOrder=["Basic","Required","FormExample"]}}]);
//# sourceMappingURL=components-Label-Label-stories.4b9bc023.iframe.bundle.js.map