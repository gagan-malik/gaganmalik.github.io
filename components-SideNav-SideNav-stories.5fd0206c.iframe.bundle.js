"use strict";(self.webpackChunk_purity_design_system=self.webpackChunk_purity_design_system||[]).push([[5607],{"./src/components/SideNav/SideNav.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>SideNav_stories,navConfig:()=>navConfig});var react=__webpack_require__("../node_modules/react/index.js"),src=__webpack_require__("./src/index.ts");let search_namespaceObject=__webpack_require__.p+"static/media/search.58cdcbb1.svg",home_namespaceObject=__webpack_require__.p+"static/media/home.fbf60c58.svg",signal_namespaceObject=__webpack_require__.p+"static/media/signal.d0450c84.svg";var star=__webpack_require__("./src/assets/icons/star.svg");let inbox_namespaceObject=__webpack_require__.p+"static/media/inbox.ba94d191.svg";var ToastAlert=__webpack_require__("./src/components/ToastAlert/index.ts");let downarrow_namespaceObject=__webpack_require__.p+"static/media/downarrow.088b038d.svg";function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_without_holes(arr){if(Array.isArray(arr))return _array_like_to_array(arr)}function _iterable_to_array(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}function _non_iterable_spread(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _to_consumable_array(arr){return _array_without_holes(arr)||_iterable_to_array(arr)||_unsupported_iterable_to_array(arr)||_non_iterable_spread()}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}var navConfig=[{icon:search_namespaceObject,label:"Search",onNavClick:function(){console.log("Button Clicked!!!")}},{icon:home_namespaceObject,label:"Home",href:"/#"},{icon:inbox_namespaceObject,label:"Inbox",href:"/#"},{icon:signal_namespaceObject,label:"Access",href:"/",badge:react.createElement(src.Ex,{color:"primary",icon:star},"Coming")},{icon:search_namespaceObject,label:"Search",onNavClick:function(){console.log("Button Clicked!!!")}},{icon:home_namespaceObject,label:"Home",href:"/#"},{icon:inbox_namespaceObject,label:"Inbox",href:"/#"},{icon:signal_namespaceObject,label:"Access",href:"/",badge:react.createElement(src.Ex,{color:"primary",icon:star},"Coming")}],menuItems=[react.createElement("img",{src:downarrow_namespaceObject,alt:"select",className:"max-h-3 max-w-3"})];let SideNav_stories={component:src.f8,title:"designsystem/SideNav",tags:["autodocs"],argTypes:{navItems:{control:"array"},menuItems:{control:"array"}},args:{getIsExpanded:function(isExpanded){console.log("isExpanded",isExpanded)},navItems:_to_consumable_array(navConfig),companyName:"Permitech",supportText:"Free Plan · 8 members",companyAvatarUrl:"https://permitech.s3.amazonaws.com/6569ae1b3ca0__[PROXY]",menuItems:menuItems,footer:react.createElement(ToastAlert.y,{id:1,variant:"success",message:"Free Plan",description:"Your team has used 8 out of 10 of your available seats. Need more?",onActionClick:function(){},onClose:function(){}})}};navConfig.parameters={...navConfig.parameters,docs:{...navConfig.parameters?.docs,source:{originalSource:`[{
  icon: search,
  label: "Search",
  onNavClick: () => {
    console.log("Button Clicked!!!");
  }
}, {
  icon: home,
  label: "Home",
  href: "/#"
}, {
  icon: inbox,
  label: "Inbox",
  href: "/#"
}, {
  icon: signal,
  label: "Access",
  href: "/",
  badge: <Badge color="primary" icon={star}>
        Coming
      </Badge>
}, {
  icon: search,
  label: "Search",
  onNavClick: () => {
    console.log("Button Clicked!!!");
  }
}, {
  icon: home,
  label: "Home",
  href: "/#"
}, {
  icon: inbox,
  label: "Inbox",
  href: "/#"
}, {
  icon: signal,
  label: "Access",
  href: "/",
  badge: <Badge color="primary" icon={star}>
        Coming
      </Badge>
}]`,...navConfig.parameters?.docs?.source}}};let __namedExportsOrder=["navConfig"]}}]);
//# sourceMappingURL=components-SideNav-SideNav-stories.5fd0206c.iframe.bundle.js.map