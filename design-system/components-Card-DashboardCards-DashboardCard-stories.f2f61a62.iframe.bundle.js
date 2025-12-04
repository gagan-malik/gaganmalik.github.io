"use strict";(self.webpackChunk_purity_design_system=self.webpackChunk_purity_design_system||[]).push([[7475],{"./src/components/Card/DashboardCards/DashboardCard.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CardKPILoadingData:()=>CardKPILoadingData,CardWithAreaChart:()=>CardWithAreaChart,CardWithBarChart:()=>CardWithBarChart,CardWithBarChartWithLoadingData:()=>CardWithBarChartWithLoadingData,CardWithBarChartWithoutData:()=>CardWithBarChartWithoutData,CardWithKPI:()=>CardWithKPI,CardWithPieChart:()=>CardWithPieChart,CardWithPieChartWithLoadingData:()=>CardWithPieChartWithLoadingData,CardWithPieChartWithoutData:()=>CardWithPieChartWithoutData,CardWithoutKPI:()=>CardWithoutKPI,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,sampleReportsPage:()=>sampleReportsPage});var _DashboardCard__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Card/DashboardCards/DashboardCard.tsx"),_PieChart__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/PieChart/index.ts"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../node_modules/react/index.js"),_InfoChart__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/InfoChart/index.ts"),_Stackchart__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Stackchart/index.ts"),_AreaChart__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/AreaChart/index.ts"),___WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/index.ts"),keysBarChart=["uv","pv"],colorsBarChart=["#0088FE","#00C49F","#FFBB28","#FF8042","red","pink"];let __WEBPACK_DEFAULT_EXPORT__={component:_DashboardCard__WEBPACK_IMPORTED_MODULE_0__.A,title:"designsystem/DashboardCard",tags:["autodocs"],argTypes:{},args:{title:"Incidents",subTitle:"ZAMIL GROUP"}};var CardWithPieChart={args:{gap:"sm",children:react__WEBPACK_IMPORTED_MODULE_2__.createElement(_PieChart__WEBPACK_IMPORTED_MODULE_1__.A,{isDonutChart:!0,data:[{label:"Type 1",value:200,color:"#0E9384"},{label:"Type 2",value:300,color:"#4A1FB8"},{label:"Type 3",value:400,color:"#06B6D4"},{label:"Type 4",value:500,color:"#194185"},{label:"others",value:250,color:"#7A5AF8"}]})}},CardWithPieChartWithoutData={args:{title:"Incidents with big title",subTitle:"ZAMIL GROUP",children:react__WEBPACK_IMPORTED_MODULE_2__.createElement(_PieChart__WEBPACK_IMPORTED_MODULE_1__.A,{isDonutChart:!0,data:[]})}},CardWithPieChartWithLoadingData={args:{title:"Incidents with big title",subTitle:"ZAMIL GROUP",children:react__WEBPACK_IMPORTED_MODULE_2__.createElement(_PieChart__WEBPACK_IMPORTED_MODULE_1__.A,{isDonutChart:!0,data:[],isDataLoading:!0})}},CardWithBarChart={args:{children:react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Stackchart__WEBPACK_IMPORTED_MODULE_4__.J,{data:[{name:"Page A",uv:4e3,pv:2400,amt:2400,gap:100},{name:"Page B",uv:3e3,pv:1398,amt:2210,gap:100},{name:"Page C",uv:2e3,pv:9800,amt:2290,gap:100},{name:"Page D",uv:2780,pv:3908,amt:2e3,gap:100},{name:"Page E",uv:1890,pv:4800,amt:2181,gap:100},{name:"Page F",uv:2390,pv:3800,amt:2500,gap:100},{name:"Page G",uv:3490,pv:4300,amt:2100,gap:100}],dataKeys:keysBarChart,colors:colorsBarChart,hideAxis:!1})}},CardWithBarChartWithoutData={args:{children:react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Stackchart__WEBPACK_IMPORTED_MODULE_4__.J,{data:[],dataKeys:keysBarChart,colors:colorsBarChart})}},CardWithBarChartWithLoadingData={args:{children:react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Stackchart__WEBPACK_IMPORTED_MODULE_4__.J,{isDataLoading:!0,data:[],dataKeys:keysBarChart,colors:colorsBarChart})}},CardWithKPI={args:{children:react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InfoChart__WEBPACK_IMPORTED_MODULE_3__.A,{data:18,percentageChange:30,trendDescription:"Compared to previous months"})}},CardKPILoadingData={args:{children:react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InfoChart__WEBPACK_IMPORTED_MODULE_3__.A,{isDataLaoding:!0,data:18,percentageChange:30,trendDescription:"Compared to previous months"})}},CardWithoutKPI={args:{children:react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InfoChart__WEBPACK_IMPORTED_MODULE_3__.A,{data:18})}},CardWithAreaChart={args:{gap:"sm",children:react__WEBPACK_IMPORTED_MODULE_2__.createElement(_AreaChart__WEBPACK_IMPORTED_MODULE_5__.Q,{data:[{amt:2400,gap:100,name:"Page A",pv:2400,uv:4e3},{amt:2210,gap:100,name:"Page B",pv:1398,uv:3e3},{amt:2290,gap:100,name:"Page C",pv:9800,uv:2e3},{amt:2e3,gap:100,name:"Page D",pv:3908,uv:2780},{amt:2181,gap:100,name:"Page E",pv:4800,uv:1890},{amt:2500,gap:100,name:"Page F",pv:3800,uv:2390},{amt:2100,gap:100,name:"Page G",pv:4300,uv:3490}],dataKeys:["uv","pv"],gradientColors:["#00C49F","#84caff","#FFBB28","#FF8042","red","pink"],hideAxis:!0,lineColors:["#00C49F","#175cd3","#FFBB28","#FF8042","red","pink"],height:100})}},sampleReportsPage={render:function(){return react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{className:"flex flex-col gap-4 bg-bg-primary dark p-4"},react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{className:"flex flex-col gap-4"},react__WEBPACK_IMPORTED_MODULE_2__.createElement("p",{className:"text-lg font-semibold text-text-primary"},"KPIs"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{className:"gap-6 grid grid-cols-3"},[{title:"KPI Name",data:10,percentageChange:100,trendDescription:"vs last month"},{title:"KPI Name",data:15,percentageChange:-100,trendDescription:"vs last month"},{title:"KPI Name",data:99,percentageChange:0,trendDescription:"vs last month"}].map(function(data,ind){return react__WEBPACK_IMPORTED_MODULE_2__.createElement(___WEBPACK_IMPORTED_MODULE_6__.qv,{key:ind,title:data.title,children:react__WEBPACK_IMPORTED_MODULE_2__.createElement(_InfoChart__WEBPACK_IMPORTED_MODULE_3__.A,{data:data.data,percentageChange:data.percentageChange,trendDescription:data.trendDescription})})}))),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{className:"flex flex-col gap-4"},react__WEBPACK_IMPORTED_MODULE_2__.createElement("p",{className:"text-lg font-semibold text-text-primary"},"Trends"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{className:"gap-6 grid grid-cols-3"},[{title:"KPI Name",trendData:{data:10,percentageChange:100,trendDescription:"vs last month"},data:[{amt:0,gap:100,name:"Page A",pv:2400,uv:500},{amt:2210,gap:100,name:"Page B",pv:1398,uv:3e3},{amt:2290,gap:100,name:"Page C",pv:9800,uv:2e3},{amt:2e3,gap:100,name:"Page D",pv:3908,uv:2780},{amt:2181,gap:100,name:"Page E",pv:4800,uv:1890},{amt:2500,gap:100,name:"Page F",pv:3800,uv:2390},{amt:2100,gap:100,name:"Page G",pv:4300,uv:3490}],dataKeys:["uv"],gradientColors:["#1570EF"],height:100,lineColors:["#1570EF"]},{title:"KPI Name",trendData:{data:15,percentageChange:-100,trendDescription:"vs last month"},data:[{amt:0,gap:100,name:"Page A",pv:2400,uv:500},{amt:2210,gap:100,name:"Page B",pv:1398,uv:3e3},{amt:2290,gap:100,name:"Page C",pv:9800,uv:2e3},{amt:2e3,gap:100,name:"Page D",pv:3908,uv:2780},{amt:2181,gap:100,name:"Page E",pv:4800,uv:1890},{amt:2500,gap:100,name:"Page F",pv:3800,uv:2390},{amt:2100,gap:100,name:"Page G",pv:4300,uv:3490}],dataKeys:["uv"],gradientColors:["#1570EF"],height:100,lineColors:["#1570EF"]},{title:"KPI Name",trendData:{data:99,percentageChange:0,trendDescription:"vs last month"},data:[{amt:0,gap:100,name:"Page A",pv:2400,uv:500},{amt:2210,gap:100,name:"Page B",pv:1398,uv:3e3},{amt:2290,gap:100,name:"Page C",pv:9800,uv:2e3},{amt:2e3,gap:100,name:"Page D",pv:3908,uv:2780},{amt:2181,gap:100,name:"Page E",pv:4800,uv:1890},{amt:2500,gap:100,name:"Page F",pv:3800,uv:2390},{amt:2100,gap:100,name:"Page G",pv:4300,uv:3490}],dataKeys:["uv"],gradientColors:["#1570EF"],height:100,lineColors:["#1570EF"]}].map(function(data,ind){return react__WEBPACK_IMPORTED_MODULE_2__.createElement(___WEBPACK_IMPORTED_MODULE_6__.qv,{key:ind,title:data.title,trendData:data.trendData,children:react__WEBPACK_IMPORTED_MODULE_2__.createElement(_AreaChart__WEBPACK_IMPORTED_MODULE_5__.Q,{data:[{amt:0,gap:100,name:"Page A",pv:2400,uv:500},{amt:2210,gap:100,name:"Page B",pv:1398,uv:3e3},{amt:2290,gap:100,name:"Page C",pv:9800,uv:2e3},{amt:2e3,gap:100,name:"Page D",pv:3908,uv:2780},{amt:2181,gap:100,name:"Page E",pv:4800,uv:1890},{amt:2500,gap:100,name:"Page F",pv:3800,uv:2390},{amt:2100,gap:100,name:"Page G",pv:4300,uv:3490}],dataKeys:["uv"],gradientColors:["#1570EF"],height:100,lineColors:["#1570EF"]})})}))),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{className:"flex flex-col gap-4"},react__WEBPACK_IMPORTED_MODULE_2__.createElement("p",{className:"text-lg font-semibold text-text-primary"},"Breakdowns"),react__WEBPACK_IMPORTED_MODULE_2__.createElement("div",{className:"gap-6 grid grid-cols-3"},[{title:"KPI Name",data:[{color:"#1570EF",label:"Series 1",value:200},{color:"#2E90FA",label:"Series 2",value:300},{color:"#53B1FD",label:"Series 3",value:400},{color:"#84CAFF",label:"Series 4",value:500},{color:"#EAECF0",label:"Series 5",value:250}]},{title:"KPI Name",data:[{color:"#1570EF",label:"Series 1",value:200},{color:"#2E90FA",label:"Series 2",value:300},{color:"#53B1FD",label:"Series 3",value:400},{color:"#84CAFF",label:"Series 4",value:500},{color:"#EAECF0",label:"Series 5",value:250}]},{title:"KPI Name",data:[{color:"#1570EF",label:"Series 1",value:200},{color:"#2E90FA",label:"Series 2",value:300},{color:"#53B1FD",label:"Series 3",value:400},{color:"#84CAFF",label:"Series 4",value:500},{color:"#EAECF0",label:"Series 5",value:250}]}].map(function(data,ind){return react__WEBPACK_IMPORTED_MODULE_2__.createElement(___WEBPACK_IMPORTED_MODULE_6__.qv,{key:ind,title:data.title,children:react__WEBPACK_IMPORTED_MODULE_2__.createElement(_PieChart__WEBPACK_IMPORTED_MODULE_1__.A,{isDonutChart:!0,data:data.data})})}))))}};CardWithPieChart.parameters={...CardWithPieChart.parameters,docs:{...CardWithPieChart.parameters?.docs,source:{originalSource:`{
  args: {
    gap: "sm",
    children: <PieChart isDonutChart data={dataPieChart} />
  }
}`,...CardWithPieChart.parameters?.docs?.source}}},CardWithPieChartWithoutData.parameters={...CardWithPieChartWithoutData.parameters,docs:{...CardWithPieChartWithoutData.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Incidents with big title",
    subTitle: "ZAMIL GROUP",
    children: <PieChart isDonutChart data={[]} />
  }
}`,...CardWithPieChartWithoutData.parameters?.docs?.source}}},CardWithPieChartWithLoadingData.parameters={...CardWithPieChartWithLoadingData.parameters,docs:{...CardWithPieChartWithLoadingData.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Incidents with big title",
    subTitle: "ZAMIL GROUP",
    children: <PieChart isDonutChart data={[]} isDataLoading={true} />
  }
}`,...CardWithPieChartWithLoadingData.parameters?.docs?.source}}},CardWithBarChart.parameters={...CardWithBarChart.parameters,docs:{...CardWithBarChart.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Stackchart data={dataBarChart} dataKeys={keysBarChart} colors={colorsBarChart} hideAxis={false} />
  }
}`,...CardWithBarChart.parameters?.docs?.source}}},CardWithBarChartWithoutData.parameters={...CardWithBarChartWithoutData.parameters,docs:{...CardWithBarChartWithoutData.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Stackchart data={[]} dataKeys={keysBarChart} colors={colorsBarChart} />
  }
}`,...CardWithBarChartWithoutData.parameters?.docs?.source}}},CardWithBarChartWithLoadingData.parameters={...CardWithBarChartWithLoadingData.parameters,docs:{...CardWithBarChartWithLoadingData.parameters?.docs,source:{originalSource:`{
  args: {
    children: <Stackchart isDataLoading={true} data={[]} dataKeys={keysBarChart} colors={colorsBarChart} />
  }
}`,...CardWithBarChartWithLoadingData.parameters?.docs?.source}}},CardWithKPI.parameters={...CardWithKPI.parameters,docs:{...CardWithKPI.parameters?.docs,source:{originalSource:`{
  args: {
    children: <InfoChart data={18} percentageChange={30} trendDescription="Compared to previous months" />
  }
}`,...CardWithKPI.parameters?.docs?.source}}},CardKPILoadingData.parameters={...CardKPILoadingData.parameters,docs:{...CardKPILoadingData.parameters?.docs,source:{originalSource:`{
  args: {
    children: <InfoChart isDataLaoding={true} data={18} percentageChange={30} trendDescription="Compared to previous months" />
  }
}`,...CardKPILoadingData.parameters?.docs?.source}}},CardWithoutKPI.parameters={...CardWithoutKPI.parameters,docs:{...CardWithoutKPI.parameters?.docs,source:{originalSource:`{
  args: {
    children: <InfoChart data={18} />
  }
}`,...CardWithoutKPI.parameters?.docs?.source}}},CardWithAreaChart.parameters={...CardWithAreaChart.parameters,docs:{...CardWithAreaChart.parameters?.docs,source:{originalSource:`{
  args: {
    gap: "sm",
    children: <AreaChart data={areaChartData} dataKeys={areaDataKeys} gradientColors={areaGradientColors} hideAxis lineColors={areaLineColors} height={100} />
  }
}`,...CardWithAreaChart.parameters?.docs?.source}}},sampleReportsPage.parameters={...sampleReportsPage.parameters,docs:{...sampleReportsPage.parameters?.docs,source:{originalSource:`{
  render: () => {
    const kpiCardData = [{
      title: "KPI Name",
      data: 10,
      percentageChange: 100,
      trendDescription: "vs last month"
    }, {
      title: "KPI Name",
      data: 15,
      percentageChange: -100,
      trendDescription: "vs last month"
    }, {
      title: "KPI Name",
      data: 99,
      percentageChange: 0,
      trendDescription: "vs last month"
    }];
    const pieChartData = [{
      title: "KPI Name",
      data: [{
        color: "#1570EF",
        label: "Series 1",
        value: 200
      }, {
        color: "#2E90FA",
        label: "Series 2",
        value: 300
      }, {
        color: "#53B1FD",
        label: "Series 3",
        value: 400
      }, {
        color: "#84CAFF",
        label: "Series 4",
        value: 500
      }, {
        color: "#EAECF0",
        label: "Series 5",
        value: 250
      }]
    }, {
      title: "KPI Name",
      data: [{
        color: "#1570EF",
        label: "Series 1",
        value: 200
      }, {
        color: "#2E90FA",
        label: "Series 2",
        value: 300
      }, {
        color: "#53B1FD",
        label: "Series 3",
        value: 400
      }, {
        color: "#84CAFF",
        label: "Series 4",
        value: 500
      }, {
        color: "#EAECF0",
        label: "Series 5",
        value: 250
      }]
    }, {
      title: "KPI Name",
      data: [{
        color: "#1570EF",
        label: "Series 1",
        value: 200
      }, {
        color: "#2E90FA",
        label: "Series 2",
        value: 300
      }, {
        color: "#53B1FD",
        label: "Series 3",
        value: 400
      }, {
        color: "#84CAFF",
        label: "Series 4",
        value: 500
      }, {
        color: "#EAECF0",
        label: "Series 5",
        value: 250
      }]
    }];
    const aChartData = [{
      title: "KPI Name",
      trendData: {
        data: 10,
        percentageChange: 100,
        trendDescription: "vs last month"
      },
      data: [{
        amt: 0,
        gap: 100,
        name: "Page A",
        pv: 2400,
        uv: 500
      }, {
        amt: 2210,
        gap: 100,
        name: "Page B",
        pv: 1398,
        uv: 3000
      }, {
        amt: 2290,
        gap: 100,
        name: "Page C",
        pv: 9800,
        uv: 2000
      }, {
        amt: 2000,
        gap: 100,
        name: "Page D",
        pv: 3908,
        uv: 2780
      }, {
        amt: 2181,
        gap: 100,
        name: "Page E",
        pv: 4800,
        uv: 1890
      }, {
        amt: 2500,
        gap: 100,
        name: "Page F",
        pv: 3800,
        uv: 2390
      }, {
        amt: 2100,
        gap: 100,
        name: "Page G",
        pv: 4300,
        uv: 3490
      }],
      dataKeys: ["uv"],
      gradientColors: ["#1570EF"],
      height: 100,
      lineColors: ["#1570EF"]
    }, {
      title: "KPI Name",
      trendData: {
        data: 15,
        percentageChange: -100,
        trendDescription: "vs last month"
      },
      data: [{
        amt: 0,
        gap: 100,
        name: "Page A",
        pv: 2400,
        uv: 500
      }, {
        amt: 2210,
        gap: 100,
        name: "Page B",
        pv: 1398,
        uv: 3000
      }, {
        amt: 2290,
        gap: 100,
        name: "Page C",
        pv: 9800,
        uv: 2000
      }, {
        amt: 2000,
        gap: 100,
        name: "Page D",
        pv: 3908,
        uv: 2780
      }, {
        amt: 2181,
        gap: 100,
        name: "Page E",
        pv: 4800,
        uv: 1890
      }, {
        amt: 2500,
        gap: 100,
        name: "Page F",
        pv: 3800,
        uv: 2390
      }, {
        amt: 2100,
        gap: 100,
        name: "Page G",
        pv: 4300,
        uv: 3490
      }],
      dataKeys: ["uv"],
      gradientColors: ["#1570EF"],
      height: 100,
      lineColors: ["#1570EF"]
    }, {
      title: "KPI Name",
      trendData: {
        data: 99,
        percentageChange: 0,
        trendDescription: "vs last month"
      },
      data: [{
        amt: 0,
        gap: 100,
        name: "Page A",
        pv: 2400,
        uv: 500
      }, {
        amt: 2210,
        gap: 100,
        name: "Page B",
        pv: 1398,
        uv: 3000
      }, {
        amt: 2290,
        gap: 100,
        name: "Page C",
        pv: 9800,
        uv: 2000
      }, {
        amt: 2000,
        gap: 100,
        name: "Page D",
        pv: 3908,
        uv: 2780
      }, {
        amt: 2181,
        gap: 100,
        name: "Page E",
        pv: 4800,
        uv: 1890
      }, {
        amt: 2500,
        gap: 100,
        name: "Page F",
        pv: 3800,
        uv: 2390
      }, {
        amt: 2100,
        gap: 100,
        name: "Page G",
        pv: 4300,
        uv: 3490
      }],
      dataKeys: ["uv"],
      gradientColors: ["#1570EF"],
      height: 100,
      lineColors: ["#1570EF"]
    }];
    return <div className="flex flex-col gap-4 bg-bg-primary dark p-4">
        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold text-text-primary">KPIs</p>
          <div className="gap-6 grid grid-cols-3">
            {kpiCardData.map((data, ind) => {
            return <DashboardCards key={ind} title={data.title} children={<InfoChart data={data.data} percentageChange={data.percentageChange} trendDescription={data.trendDescription} />} />;
          })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold text-text-primary">Trends</p>
          <div className="gap-6 grid grid-cols-3">
            {aChartData.map((data, ind) => {
            return <DashboardCards key={ind} title={data.title} trendData={data.trendData} children={
            // <AreaChart
            //   data={data.data}
            //   dataKeys={data.dataKeys}
            //   gradientColors={data.gradientColors}
            //   lineColors={data.lineColors}
            //   hideAxis={true}
            // />
            <AreaChart data={[{
              amt: 0,
              gap: 100,
              name: "Page A",
              pv: 2400,
              uv: 500
            }, {
              amt: 2210,
              gap: 100,
              name: "Page B",
              pv: 1398,
              uv: 3000
            }, {
              amt: 2290,
              gap: 100,
              name: "Page C",
              pv: 9800,
              uv: 2000
            }, {
              amt: 2000,
              gap: 100,
              name: "Page D",
              pv: 3908,
              uv: 2780
            }, {
              amt: 2181,
              gap: 100,
              name: "Page E",
              pv: 4800,
              uv: 1890
            }, {
              amt: 2500,
              gap: 100,
              name: "Page F",
              pv: 3800,
              uv: 2390
            }, {
              amt: 2100,
              gap: 100,
              name: "Page G",
              pv: 4300,
              uv: 3490
            }]} dataKeys={["uv"]} gradientColors={["#1570EF"]} height={100} lineColors={["#1570EF"]} />} />;
          })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-lg font-semibold text-text-primary">Breakdowns</p>
          <div className="gap-6 grid grid-cols-3">
            {pieChartData.map((data, ind) => {
            return <DashboardCards key={ind} title={data.title} children={<PieChart isDonutChart data={data.data} />} />;
          })}
          </div>
        </div>
      </div>;
  }
}`,...sampleReportsPage.parameters?.docs?.source}}};let __namedExportsOrder=["CardWithPieChart","CardWithPieChartWithoutData","CardWithPieChartWithLoadingData","CardWithBarChart","CardWithBarChartWithoutData","CardWithBarChartWithLoadingData","CardWithKPI","CardKPILoadingData","CardWithoutKPI","CardWithAreaChart","sampleReportsPage"]}}]);
//# sourceMappingURL=components-Card-DashboardCards-DashboardCard-stories.f2f61a62.iframe.bundle.js.map