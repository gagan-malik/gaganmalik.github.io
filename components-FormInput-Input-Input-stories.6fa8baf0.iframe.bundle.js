"use strict";(self.webpackChunk_purity_design_system=self.webpackChunk_purity_design_system||[]).push([[5894],{"./src/components/FormInput/Input/Input.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicInput:()=>BasicInput,CopyButtonInput:()=>CopyButtonInput,CurrencyInputRightAligned:()=>CurrencyInputRightAligned,EmailInput:()=>EmailInput,PasswordInput:()=>PasswordInput,PhoneNumberInput:()=>PhoneNumberInput,TextareaInput:()=>TextareaInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});let __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/components/index.ts").pd,title:"designsystem/Input",tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},type:{control:{type:"select"},options:["text","number","date","tel","button","color","datetime-local","email","file","hidden","image","month","password","radio","range","search","reset","submit","time","url","week","checkbox"]},dropdownOptions:{control:"object"}},args:{label:"Name",placeholder:"John Doe",type:"text",showHelpTooltip:!0,helpText:"Enter your full name here."}};var BasicInput={args:{onChange:function(e){return console.log(e.target.value)}}},EmailInput={args:{label:"Email",type:"email",placeholder:"john@doe.com",hintText:"Enter your workspace email ID.",required:!0,helpText:"Enter your workspace email ID here.",onChange:function(e){return console.log(e.target.value)}}},PasswordInput={args:{label:"Password",type:"password",placeholder:"Admin@123",hintText:"Enter a strong password, including letters, numbers and symbols.",required:!0,onChange:function(e){return console.log(e.target.value)}}},PhoneNumberInput={args:{label:"Phone Number",type:"tel",placeholder:"Enter phone number",dropdownOptions:[{value:"+1",label:"US"},{value:"+44",label:"UK"},{value:"+91",label:"IN"}],onDropdownChange:function(value){return console.log("Selected country code:",value)},onChange:function(e){return console.log("Phone number:",e.target.value)},hintText:"Enter your phone number and select country code",helpText:"This is a help text."}},CurrencyInputRightAligned={args:{label:"Amount",type:"number",placeholder:"1,000.00",dropdownOptions:[{value:"USD",label:"USD"},{value:"EUR",label:"EUR"},{value:"GBP",label:"GBP"}],dropdownAlignment:"right",onDropdownChange:function(value){return console.log("Selected currency:",value)},onChange:function(e){return console.log("Amount:",e.target.value)},hintText:"This is a hint text to help user.",helpText:"This is a help text to help user."}},CopyButtonInput={args:{label:"Workspace ID",type:"text",placeholder:"workspace-id-1234",hintText:"This is a hint text to help user.",helpText:"This is a help text to help user.",showCopyButton:!0,onChange:function(e){return console.log(e.target.value)}}},TextareaInput={args:{label:"Description",type:"textarea",placeholder:"Enter your description here."}};BasicInput.parameters={...BasicInput.parameters,docs:{...BasicInput.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: e => console.log(e.target.value)
  }
}`,...BasicInput.parameters?.docs?.source}}},EmailInput.parameters={...EmailInput.parameters,docs:{...EmailInput.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    type: "email",
    placeholder: "john@doe.com",
    hintText: "Enter your workspace email ID.",
    required: true,
    helpText: "Enter your workspace email ID here.",
    onChange: e => console.log(e.target.value)
  }
}`,...EmailInput.parameters?.docs?.source}}},PasswordInput.parameters={...PasswordInput.parameters,docs:{...PasswordInput.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Password",
    type: "password",
    placeholder: "Admin@123",
    hintText: "Enter a strong password, including letters, numbers and symbols.",
    required: true,
    onChange: e => console.log(e.target.value)
  }
}`,...PasswordInput.parameters?.docs?.source}}},PhoneNumberInput.parameters={...PhoneNumberInput.parameters,docs:{...PhoneNumberInput.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter phone number",
    dropdownOptions: [{
      value: "+1",
      label: "US"
    }, {
      value: "+44",
      label: "UK"
    }, {
      value: "+91",
      label: "IN"
    }],
    onDropdownChange: value => console.log("Selected country code:", value),
    onChange: e => console.log("Phone number:", e.target.value),
    hintText: "Enter your phone number and select country code",
    helpText: "This is a help text."
  }
}`,...PhoneNumberInput.parameters?.docs?.source}}},CurrencyInputRightAligned.parameters={...CurrencyInputRightAligned.parameters,docs:{...CurrencyInputRightAligned.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Amount",
    type: "number",
    placeholder: "1,000.00",
    dropdownOptions: [{
      value: "USD",
      label: "USD"
    }, {
      value: "EUR",
      label: "EUR"
    }, {
      value: "GBP",
      label: "GBP"
    }],
    dropdownAlignment: "right",
    onDropdownChange: value => console.log("Selected currency:", value),
    onChange: e => console.log("Amount:", e.target.value),
    hintText: "This is a hint text to help user.",
    helpText: "This is a help text to help user."
  }
}`,...CurrencyInputRightAligned.parameters?.docs?.source}}},CopyButtonInput.parameters={...CopyButtonInput.parameters,docs:{...CopyButtonInput.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Workspace ID",
    type: "text",
    placeholder: "workspace-id-1234",
    hintText: "This is a hint text to help user.",
    helpText: "This is a help text to help user.",
    showCopyButton: true,
    onChange: e => console.log(e.target.value)
  }
}`,...CopyButtonInput.parameters?.docs?.source}}},TextareaInput.parameters={...TextareaInput.parameters,docs:{...TextareaInput.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description",
    type: "textarea",
    placeholder: "Enter your description here."
  }
}`,...TextareaInput.parameters?.docs?.source}}};let __namedExportsOrder=["BasicInput","EmailInput","PasswordInput","PhoneNumberInput","CurrencyInputRightAligned","CopyButtonInput","TextareaInput"]}}]);
//# sourceMappingURL=components-FormInput-Input-Input-stories.6fa8baf0.iframe.bundle.js.map