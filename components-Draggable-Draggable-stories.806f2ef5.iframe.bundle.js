"use strict";(self.webpackChunk_purity_design_system=self.webpackChunk_purity_design_system||[]).push([[8123],{"./src/components/Draggable/Draggable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Base:()=>Base,DraggableHomeCardGroup:()=>DraggableHomeCardGroup,MultipleComponent:()=>MultipleComponent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/index.ts");let __WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_1__.sx,title:"designsystem/Draggable",tags:["autodocs"]};var getChild=function(){var title=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Incident";return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid grid-cols-3 gap-1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.oR,{title:title,data:18,percentageChange:45,trendDescription:"Compared to previous months"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.oR,{title:title,data:18,percentageChange:45,trendDescription:"Compared to previous months"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.oR,{title:title,data:18,percentageChange:45,trendDescription:"Compared to previous months"}))},Base={args:{items:[{id:"1",children:getChild()}]}},MultipleComponent={render:function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col gap-4 h-screen justify-around"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.sx,{className:"flex flex-col gap-4",items:[{id:"1",children:getChild()},{id:"2",children:getChild("Observation")},{id:"3",children:getChild("Permitech")}]}))}},homeCardGroup=react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.Dy,{data:[{coverImage:"static/media/src/assets/icons/companyAvatar.svg",firstName:"Md",lastName:"Saket",onCardClick:function(){},subtitle:"HT-1",timestamp:"2024-06-27T10:34:28.000Z",title:"Test",titleImage:"static/media/src/assets/icons/companyAvatar.svg",userAvatar:"static/media/src/assets/icons/ticketAvatar.svg"},{coverImage:"static/media/src/assets/icons/companyAvatar.svg",firstName:"Md",lastName:"Saket",onCardClick:function(){},subtitle:"HT-1",timestamp:"2024-06-27T10:34:28.000Z",title:"Test",titleImage:"static/media/src/assets/icons/companyAvatar.svg",userAvatar:"static/media/src/assets/icons/ticketAvatar.svg"},{coverImage:"static/media/src/assets/icons/companyAvatar.svg",firstName:"Md",lastName:"Saket",onCardClick:function(){},subtitle:"HT-1",timestamp:"2024-06-27T10:34:28.000Z",title:"Test",titleImage:"static/media/src/assets/icons/companyAvatar.svg",userAvatar:"static/media/src/assets/icons/ticketAvatar.svg"}],heading:"Test",isDraggable:!0}),DraggableHomeCardGroup={render:function(){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col gap-4 h-screen justify-around"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_index__WEBPACK_IMPORTED_MODULE_1__.sx,{className:"flex flex-col gap-4",backgroundColor:"bg-bg-primary",items:[{id:"1",children:homeCardGroup},{id:"2",children:homeCardGroup},{id:"3",children:homeCardGroup}],handleDragEnd:function(items){console.log("Items after drop123:",items)}}))}};Base.parameters={...Base.parameters,docs:{...Base.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "1",
      children: getChild()
    }]
  }
}`,...Base.parameters?.docs?.source}}},MultipleComponent.parameters={...MultipleComponent.parameters,docs:{...MultipleComponent.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex flex-col gap-4 h-screen justify-around">
        <Draggable className="flex flex-col gap-4" items={[{
        id: "1",
        children: getChild()
      }, {
        id: "2",
        children: getChild("Observation")
      }, {
        id: "3",
        children: getChild("Permitech")
      }]} />
      </div>;
  }
}`,...MultipleComponent.parameters?.docs?.source}}},DraggableHomeCardGroup.parameters={...DraggableHomeCardGroup.parameters,docs:{...DraggableHomeCardGroup.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex flex-col gap-4 h-screen justify-around">
        <Draggable className="flex flex-col gap-4" backgroundColor="bg-bg-primary" items={[{
        id: "1",
        children: homeCardGroup
      }, {
        id: "2",
        children: homeCardGroup
      }, {
        id: "3",
        children: homeCardGroup
      }]} handleDragEnd={items => {
        console.log("Items after drop123:", items);
      }} />
      </div>;
  }
}`,...DraggableHomeCardGroup.parameters?.docs?.source}}};let __namedExportsOrder=["Base","MultipleComponent","DraggableHomeCardGroup"]}}]);
//# sourceMappingURL=components-Draggable-Draggable-stories.806f2ef5.iframe.bundle.js.map