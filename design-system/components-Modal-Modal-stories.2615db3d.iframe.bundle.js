"use strict";(self.webpackChunk_purity_design_system=self.webpackChunk_purity_design_system||[]).push([[4607],{"./src/assets/icons/deleteRed.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/deleteRed.b7ec0d5a.svg"},"./src/components/Modal/Modal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FullWidthModal:()=>FullWidthModal,LargeModal:()=>LargeModal,ModalWithAvatar:()=>ModalWithAvatar,ModalWithDescription:()=>ModalWithDescription,ModalWithDisabledAction:()=>ModalWithDisabledAction,ModalWithIcon:()=>ModalWithIcon,ModalWithoutCrossIcon:()=>ModalWithoutCrossIcon,ModalWithoutFooter:()=>ModalWithoutFooter,ModalWithoutHeader:()=>ModalWithoutHeader,SmallModal:()=>SmallModal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Modal_stories});var src=__webpack_require__("./src/index.ts"),ModalHeader=__webpack_require__("./src/components/Modal/ModalHeader.tsx"),ModalFooter=__webpack_require__("./src/components/Modal/ModalFooter.tsx"),BasicForm=__webpack_require__("./src/components/Modal/common/BasicForm.tsx"),react=__webpack_require__("../node_modules/react/index.js");let removeUser_namespaceObject=__webpack_require__.p+"static/media/removeUser.34682837.svg";var deleteRed=__webpack_require__("./src/assets/icons/deleteRed.svg");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}let Modal_stories={component:src.aF,title:"designsystem/Modal",tags:["autodocs"],argTypes:{header:{control:"input"},footer:{control:"input"},children:{control:"input"},widthVariant:{control:"select",options:["small","default","large","full"]}}};var Default={args:{header:react.createElement(ModalHeader.A,{title:"Default Modal",showCrossIcon:!0}),children:react.createElement(BasicForm.A,null),footer:react.createElement(ModalFooter.A,{onCancel:function(){return console.log("modal closed")},onShown:function(){return console.log("Modal opened!")},closeActionLabel:"Close",actionLabel:"Save"}),widthVariant:"reportmodal"}},SmallModal={args:_object_spread_props(_object_spread({},Default.args),{widthVariant:"small"})},LargeModal={args:_object_spread_props(_object_spread({},Default.args),{widthVariant:"large"})},FullWidthModal={args:_object_spread_props(_object_spread({},Default.args),{widthVariant:"full"})},ModalWithIcon={args:{header:react.createElement(ModalHeader.A,{title:"Remove Username?",headerIconUrl:removeUser_namespaceObject,description:"Username will no longer have access to this workspace and any of its contents, including their documents, actions, and files."}),widthVariant:"small",footer:react.createElement(ModalFooter.A,{actionLabel:"Remove",actionButtonColor:"destructive",actionButtonShape:"circle",cancelButtonVariant:"outlined",closeActionLabel:"Cancel",cancelButtonColor:"secondary",onCancel:function(){return console.log("modal closed")},onShown:function(){return console.log("modal open")}})}},ModalWithAvatar={args:{header:react.createElement(ModalHeader.A,{title:"Remove Username?",headerIconUrl:react.createElement(src.eu,{size:"xl",border:"none",background:"bg-bg-error-secondary",icon:deleteRed}),description:"Username will no longer have access to this workspace and any of its contents, including their documents, actions, and files."}),widthVariant:"small",footer:react.createElement(ModalFooter.A,{actionLabel:"Remove",actionButtonColor:"destructive",actionButtonShape:"circle",cancelButtonVariant:"outlined",closeActionLabel:"Cancel",cancelButtonColor:"secondary",onCancel:function(){return console.log("modal closed")},onShown:function(){return console.log("modal open")}})}},ModalWithDescription={args:_object_spread_props(_object_spread({},Default.args),{header:react.createElement(ModalHeader.A,{title:"Modal with Description",description:"This is a description for the modal",highlightDescription:!0})})},ModalWithoutFooter={args:_object_spread_props(_object_spread({},Default.args),{footer:null})},ModalWithoutCrossIcon={args:_object_spread_props(_object_spread({},Default.args),{header:react.createElement(ModalHeader.A,{title:"Without Cross Icon",showCrossIcon:!1})})},ModalWithDisabledAction={args:_object_spread_props(_object_spread({},Default.args),{footer:react.createElement(ModalFooter.A,{onCancel:function(){return console.log("modal closed")},onShown:function(){return console.log("modal opened")},closeActionLabel:"Close",actionLabel:"Save",disableAction:!0})})},ModalWithoutHeader={args:_object_spread_props(_object_spread({},Default.args),{header:null})};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:`{
  args: {
    header: <ModalHeader title="Default Modal" showCrossIcon />,
    children: <BasicForm />,
    footer: <ModalFooter onCancel={() => console.log("modal closed")} onShown={() => console.log("Modal opened!")} closeActionLabel="Close" actionLabel="Save" />,
    widthVariant: "reportmodal"
  }
}`,...Default.parameters?.docs?.source}}},SmallModal.parameters={...SmallModal.parameters,docs:{...SmallModal.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    widthVariant: "small"
  }
}`,...SmallModal.parameters?.docs?.source}}},LargeModal.parameters={...LargeModal.parameters,docs:{...LargeModal.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    widthVariant: "large"
  }
}`,...LargeModal.parameters?.docs?.source}}},FullWidthModal.parameters={...FullWidthModal.parameters,docs:{...FullWidthModal.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    widthVariant: "full"
  }
}`,...FullWidthModal.parameters?.docs?.source}}},ModalWithIcon.parameters={...ModalWithIcon.parameters,docs:{...ModalWithIcon.parameters?.docs,source:{originalSource:`{
  args: {
    header: <ModalHeader title="Remove Username?" headerIconUrl={dangerIcon} description="Username will no longer have access to this workspace and any of its contents, including their documents, actions, and files." />,
    widthVariant: "small",
    footer: <ModalFooter actionLabel="Remove" actionButtonColor="destructive" actionButtonShape="circle" cancelButtonVariant="outlined" closeActionLabel="Cancel" cancelButtonColor="secondary" onCancel={() => console.log("modal closed")} onShown={() => console.log("modal open")} />
  }
}`,...ModalWithIcon.parameters?.docs?.source}}},ModalWithAvatar.parameters={...ModalWithAvatar.parameters,docs:{...ModalWithAvatar.parameters?.docs,source:{originalSource:`{
  args: {
    header: <ModalHeader title="Remove Username?" headerIconUrl={<Avatar size="xl" border="none" background="bg-bg-error-secondary" icon={deleteRed} />} description="Username will no longer have access to this workspace and any of its contents, including their documents, actions, and files." />,
    widthVariant: "small",
    footer: <ModalFooter actionLabel="Remove" actionButtonColor="destructive" actionButtonShape="circle" cancelButtonVariant="outlined" closeActionLabel="Cancel" cancelButtonColor="secondary" onCancel={() => console.log("modal closed")} onShown={() => console.log("modal open")} />
  }
}`,...ModalWithAvatar.parameters?.docs?.source}}},ModalWithDescription.parameters={...ModalWithDescription.parameters,docs:{...ModalWithDescription.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: <ModalHeader title="Modal with Description" description="This is a description for the modal" highlightDescription={true} />
  }
}`,...ModalWithDescription.parameters?.docs?.source}}},ModalWithoutFooter.parameters={...ModalWithoutFooter.parameters,docs:{...ModalWithoutFooter.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    footer: null
  }
}`,...ModalWithoutFooter.parameters?.docs?.source}}},ModalWithoutCrossIcon.parameters={...ModalWithoutCrossIcon.parameters,docs:{...ModalWithoutCrossIcon.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: <ModalHeader title="Without Cross Icon" showCrossIcon={false} />
  }
}`,...ModalWithoutCrossIcon.parameters?.docs?.source}}},ModalWithDisabledAction.parameters={...ModalWithDisabledAction.parameters,docs:{...ModalWithDisabledAction.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    footer: <ModalFooter onCancel={() => console.log("modal closed")} onShown={() => console.log("modal opened")} closeActionLabel="Close" actionLabel="Save" disableAction={true} />
  }
}`,...ModalWithDisabledAction.parameters?.docs?.source}}},ModalWithoutHeader.parameters={...ModalWithoutHeader.parameters,docs:{...ModalWithoutHeader.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    header: null
  }
}`,...ModalWithoutHeader.parameters?.docs?.source}}};let __namedExportsOrder=["Default","SmallModal","LargeModal","FullWidthModal","ModalWithIcon","ModalWithAvatar","ModalWithDescription","ModalWithoutFooter","ModalWithoutCrossIcon","ModalWithDisabledAction","ModalWithoutHeader"]}}]);
//# sourceMappingURL=components-Modal-Modal-stories.2615db3d.iframe.bundle.js.map