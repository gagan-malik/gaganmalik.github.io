"use strict";(self.webpackChunk_purity_design_system=self.webpackChunk_purity_design_system||[]).push([[2975],{"./src/assets/icons/notificationBellMobile.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/notificationBellMobile.4dc9792c.svg"},"./src/assets/icons/ticketAvatar.svg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/ticketAvatar.527a9fc0.svg"},"./src/components/FileManager/FileManager.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DocumentGalleryOverview:()=>DocumentGalleryOverview,GalleryOverview:()=>GalleryOverview,ListOverview:()=>ListOverview,MarketplaceOverview:()=>MarketplaceOverview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>FileManager_stories});var FileManager=__webpack_require__("./src/components/FileManager/index.ts");let folder_namespaceObject=__webpack_require__.p+"static/media/folder.f63daccb.svg",tripleDots_namespaceObject=__webpack_require__.p+"static/media/tripleDots.7745515e.svg";var notificationBellMobile=__webpack_require__("./src/assets/icons/notificationBellMobile.svg"),Button=__webpack_require__("./src/components/Button/index.ts"),src=__webpack_require__("./src/index.ts"),react=__webpack_require__("../node_modules/react/index.js"),MenuPopover=__webpack_require__("./src/components/MenuPopover/index.ts"),ticketAvatar=__webpack_require__("./src/assets/icons/ticketAvatar.svg");let FileManager_stories={component:FileManager.a,title:"designsystem/FileManager",tags:["autodocs"]};var handleOptions=function(option){console.log("Option clicked: ".concat(option))},GalleryOverview={args:{heading:"Folder",grid:3,view:"gallery",data:[{icon:folder_namespaceObject,title:"My Spaces",description:"test",timestamp:"2024-06-27T10:34:28.000Z",onClickHandler:function(){window.alert("Card clicked")}},{icon:folder_namespaceObject,title:react.createElement("span",{className:"text-base font-semibold"},"My Spaces2"),description:react.createElement("span",{className:"text-sm font-normal"},"10 Files"),timestamp:"2024-06-26T10:34:28.000Z",onClickHandler:function(){window.alert("Card clicked")}},{icon:folder_namespaceObject,title:"My Spaces",description:"test",timestamp:"2024-06-27T10:34:28.000Z",onClickHandler:function(){window.alert("Card clicked")}},{icon:folder_namespaceObject,title:"My Spaces4",description:"test",timestamp:"2024-06-27T10:34:28.000Z",onClickHandler:function(){window.alert("Card clicked")}}]}},DocumentGalleryOverview={args:{heading:"Files",grid:3,view:"gallery",fileType:"document",data:[{icon:folder_namespaceObject,title:"My Spaces",description:"test",timestamp:"2024-06-27T10:34:28.000Z",optionsDiv:react.createElement(MenuPopover.bi,{children:react.createElement(Button.$,{variant:"outlined",color:"label",shape:"circle"},react.createElement("img",{src:tripleDots_namespaceObject,alt:"TripleDot"})),width:"200px",placement:MenuPopover.D$.bottomLeft,transform:{left:-70},datas:[[{title:"Rename",hover:!0,onClick:function(){handleOptions("rename")}},{title:"Delete ",hover:!0,onClick:function(){handleOptions("delete")}}]]}),onClickHandler:function(){window.alert("Card clicked")},user:{fullname:"User",avatar:notificationBellMobile}},{icon:folder_namespaceObject,title:react.createElement("span",{className:"text-base font-semibold"},"My Spaces2"),description:react.createElement("span",{className:"text-sm font-normal"},"10 Files"),timestamp:"2024-06-26T10:34:28.000Z",optionsDiv:react.createElement(Button.$,{onClick:function(){},variant:"outlined",color:"label",shape:"circle"},react.createElement("img",{src:tripleDots_namespaceObject,alt:"TripleDot"})),onClickHandler:function(){window.alert("Card clicked")},user:{fullname:"User",avatar:null}},{icon:folder_namespaceObject,title:"My Spaces",description:"test",timestamp:"2024-06-27T10:34:28.000Z",optionsDiv:react.createElement(Button.$,{onClick:function(){},variant:"outlined",color:"label",shape:"circle"},react.createElement("img",{src:tripleDots_namespaceObject,alt:"TripleDot"})),onClickHandler:function(){window.alert("Card clicked")}},{icon:folder_namespaceObject,title:"My Spaces4",description:"test",timestamp:"2024-06-27T10:34:28.000Z",optionsDiv:react.createElement(Button.$,{onClick:function(){},variant:"outlined",color:"label"},react.createElement("img",{src:tripleDots_namespaceObject,alt:"TripleDot"})),onClickHandler:function(){window.alert("Card clicked")}}]}},ListOverview={args:{heading:"Folder",grid:2,view:"list",data:[{icon:folder_namespaceObject,title:"My Spaces",description:"test",timestamp:"2024-06-27T10:34:28.000Z",optionsDiv:react.createElement(Button.$,{onClick:function(){},variant:"outlined",color:"label"},react.createElement("img",{src:tripleDots_namespaceObject,alt:"TripleDot"})),onClickHandler:function(){window.alert("Card clicked")},user:{fullname:"User",avatar:notificationBellMobile}},{icon:folder_namespaceObject,title:react.createElement("span",{className:"text-base font-semibold"},"My Spaces2"),description:react.createElement("span",{className:"text-sm font-normal"},"10 Files"),timestamp:"2024-06-26T10:34:28.000Z",optionsDiv:react.createElement(Button.$,{onClick:function(){},variant:"outlined",color:"label",shape:"circle"},react.createElement("img",{src:tripleDots_namespaceObject,alt:"TripleDot"})),onClickHandler:function(){window.alert("Card clicked")},user:{fullname:"User",avatar:null}},{icon:folder_namespaceObject,title:"My Spaces",description:"test",timestamp:"2024-06-27T10:34:28.000Z",optionsDiv:react.createElement(Button.$,{onClick:function(){},variant:"outlined",color:"label",shape:"circle"},react.createElement("img",{src:tripleDots_namespaceObject,alt:"TripleDot"})),onClickHandler:function(){window.alert("Card clicked")},user:{fullname:"User",avatar:null}},{icon:folder_namespaceObject,title:"My Spaces4",description:"test",timestamp:"2024-06-27T10:34:28.000Z",optionsDiv:react.createElement(Button.$,{onClick:function(){},variant:"outlined",color:"label"},react.createElement("img",{src:tripleDots_namespaceObject,alt:"TripleDot"})),onClickHandler:function(){window.alert("Card clicked")},user:{fullname:"User11",avatar:null}}]}},MarketplaceOverview={args:{heading:"Templates",grid:3,view:"gallery",fileType:"marketplace",data:[{icon:react.createElement(src.eu,{size:"lg",imageUrl:ticketAvatar}),title:"My Spaces",timestamp:"2024-06-27T10:34:28.000Z",button:"Get",onClickButton:function(){window.alert("Card clicked")},user:{fullname:"User",avatar:notificationBellMobile}},{icon:react.createElement(src.eu,{size:"xl",imageUrl:ticketAvatar}),title:react.createElement("span",{className:"text-base font-semibold"},"My Spaces2"),description:react.createElement("span",{className:"text-sm font-normal"},"10 Files"),timestamp:"2024-06-26T10:34:28.000Z",button:"Get",user:{fullname:"User",avatar:null}},{icon:react.createElement(src.eu,{size:"xl",imageUrl:ticketAvatar}),title:"My Spaces",description:"test",timestamp:"2024-06-27T10:34:28.000Z",button:"Get",onClickHandler:function(){window.alert("Card clicked")}},{icon:react.createElement(src.eu,{size:"xl",imageUrl:ticketAvatar}),title:"My Spaces4",description:"test",timestamp:"2024-06-27T10:34:28.000Z",button:"Get",onClickHandler:function(){window.alert("Card clicked")}}]}};GalleryOverview.parameters={...GalleryOverview.parameters,docs:{...GalleryOverview.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Folder",
    grid: 3,
    view: "gallery",
    data: [{
      icon: FolderIcon,
      title: "My Spaces",
      description: "test",
      timestamp: "2024-06-27T10:34:28.000Z",
      onClickHandler: () => {
        window.alert("Card clicked");
      }
    }, {
      icon: FolderIcon,
      title: <span className="text-base font-semibold">My Spaces2</span>,
      description: <span className="text-sm font-normal">10 Files</span>,
      timestamp: "2024-06-26T10:34:28.000Z",
      onClickHandler: () => {
        window.alert("Card clicked");
      }
    }, {
      icon: FolderIcon,
      title: "My Spaces",
      description: "test",
      timestamp: "2024-06-27T10:34:28.000Z",
      onClickHandler: () => {
        window.alert("Card clicked");
      }
    }, {
      icon: FolderIcon,
      title: "My Spaces4",
      description: "test",
      timestamp: "2024-06-27T10:34:28.000Z",
      onClickHandler: () => {
        window.alert("Card clicked");
      }
    }]
  }
}`,...GalleryOverview.parameters?.docs?.source}}},DocumentGalleryOverview.parameters={...DocumentGalleryOverview.parameters,docs:{...DocumentGalleryOverview.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Files",
    grid: 3,
    view: "gallery",
    fileType: "document",
    data: [{
      icon: FolderIcon,
      title: "My Spaces",
      description: "test",
      timestamp: "2024-06-27T10:34:28.000Z",
      optionsDiv: <MenuPopover children={<Button variant="outlined" color="label" shape="circle">
            <img src={TripleDot} alt="TripleDot" />
          </Button>} width="200px" placement={PopoverPlacement.bottomLeft} transform={{
        left: -70
      }} datas={[[{
        title: "Rename",
        hover: true,
        onClick: () => {
          handleOptions("rename");
        }
      }, {
        title: "Delete ",
        hover: true,
        onClick: () => {
          handleOptions("delete");
        }
      }]]} />,
      onClickHandler: () => {
        window.alert("Card clicked");
      },
      user: {
        fullname: "User",
        avatar: notificationAvatar
      }
    }, {
      icon: FolderIcon,
      title: <span className="text-base font-semibold">My Spaces2</span>,
      description: <span className="text-sm font-normal">10 Files</span>,
      timestamp: "2024-06-26T10:34:28.000Z",
      optionsDiv: <Button onClick={() => {}} variant="outlined" color="label" shape="circle">
        <img src={TripleDot} alt="TripleDot" />
      </Button>,
      onClickHandler: () => {
        window.alert("Card clicked");
      },
      user: {
        fullname: "User",
        avatar: null
      }
    }, {
      icon: FolderIcon,
      title: "My Spaces",
      description: "test",
      timestamp: "2024-06-27T10:34:28.000Z",
      optionsDiv: <Button onClick={() => {}} variant="outlined" color="label" shape="circle">
        <img src={TripleDot} alt="TripleDot" />
      </Button>,
      onClickHandler: () => {
        window.alert("Card clicked");
      }
    }, {
      icon: FolderIcon,
      title: "My Spaces4",
      description: "test",
      timestamp: "2024-06-27T10:34:28.000Z",
      optionsDiv: <Button onClick={() => {}} variant="outlined" color="label">
        <img src={TripleDot} alt="TripleDot" />
      </Button>,
      onClickHandler: () => {
        window.alert("Card clicked");
      }
    }]
  }
}`,...DocumentGalleryOverview.parameters?.docs?.source}}},ListOverview.parameters={...ListOverview.parameters,docs:{...ListOverview.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Folder",
    grid: 2,
    view: "list",
    data: [{
      icon: FolderIcon,
      title: "My Spaces",
      description: "test",
      timestamp: "2024-06-27T10:34:28.000Z",
      optionsDiv: <Button onClick={() => {}} variant="outlined" color="label">
        <img src={TripleDot} alt="TripleDot" />
      </Button>,
      onClickHandler: () => {
        window.alert("Card clicked");
      },
      user: {
        fullname: "User",
        avatar: notificationAvatar
      }
    }, {
      icon: FolderIcon,
      title: <span className="text-base font-semibold">My Spaces2</span>,
      description: <span className="text-sm font-normal">10 Files</span>,
      timestamp: "2024-06-26T10:34:28.000Z",
      optionsDiv: <Button onClick={() => {}} variant="outlined" color="label" shape="circle">
        <img src={TripleDot} alt="TripleDot" />
      </Button>,
      onClickHandler: () => {
        window.alert("Card clicked");
      },
      user: {
        fullname: "User",
        avatar: null
      }
    }, {
      icon: FolderIcon,
      title: "My Spaces",
      description: "test",
      timestamp: "2024-06-27T10:34:28.000Z",
      optionsDiv: <Button onClick={() => {}} variant="outlined" color="label" shape="circle">
        <img src={TripleDot} alt="TripleDot" />
      </Button>,
      onClickHandler: () => {
        window.alert("Card clicked");
      },
      user: {
        fullname: "User",
        avatar: null
      }
    }, {
      icon: FolderIcon,
      title: "My Spaces4",
      description: "test",
      timestamp: "2024-06-27T10:34:28.000Z",
      optionsDiv: <Button onClick={() => {}} variant="outlined" color="label">
        <img src={TripleDot} alt="TripleDot" />
      </Button>,
      onClickHandler: () => {
        window.alert("Card clicked");
      },
      user: {
        fullname: "User11",
        avatar: null
      }
    }]
  }
}`,...ListOverview.parameters?.docs?.source}}},MarketplaceOverview.parameters={...MarketplaceOverview.parameters,docs:{...MarketplaceOverview.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Templates",
    grid: 3,
    view: "gallery",
    fileType: "marketplace",
    data: [{
      icon: <Avatar size="lg" imageUrl={userImage} />,
      title: "My Spaces",
      timestamp: "2024-06-27T10:34:28.000Z",
      button: "Get",
      onClickButton: () => {
        window.alert("Card clicked");
      },
      user: {
        fullname: "User",
        avatar: notificationAvatar
      }
    }, {
      icon: <Avatar size="xl" imageUrl={userImage} />,
      title: <span className="text-base font-semibold">My Spaces2</span>,
      description: <span className="text-sm font-normal">10 Files</span>,
      timestamp: "2024-06-26T10:34:28.000Z",
      button: "Get",
      user: {
        fullname: "User",
        avatar: null
      }
    }, {
      icon: <Avatar size="xl" imageUrl={userImage} />,
      title: "My Spaces",
      description: "test",
      timestamp: "2024-06-27T10:34:28.000Z",
      button: "Get",
      onClickHandler: () => {
        window.alert("Card clicked");
      }
    }, {
      icon: <Avatar size="xl" imageUrl={userImage} />,
      title: "My Spaces4",
      description: "test",
      timestamp: "2024-06-27T10:34:28.000Z",
      button: "Get",
      onClickHandler: () => {
        window.alert("Card clicked");
      }
    }]
  }
}`,...MarketplaceOverview.parameters?.docs?.source}}};let __namedExportsOrder=["GalleryOverview","DocumentGalleryOverview","ListOverview","MarketplaceOverview"]}}]);
//# sourceMappingURL=components-FileManager-FileManager-stories.0425919d.iframe.bundle.js.map