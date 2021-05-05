(this.webpackJsonpui=this.webpackJsonpui||[]).push([[0],{164:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(16),r=a.n(n),s=a(62),i=a(17),l=a(11),u=a(57),d=(a(74),a(178)),o="FETCH_SEARCH_OPTIONS",j="FETCH_WEATHER_FOR_WOEID",h="FETCH_SEARCH_OPTIONS_READY",b="FETCH_SEARCH_OPTIONS_IN_PROGRESS",O="FETCH_SEARCH_OPTIONS_SUCCESS",p="FETCH_SEARCH_OPTIONS_FAILURE",m="FETCH_WEATHER_FOR_WOEID_READY",x="FETCH_WEATHER_FOR_WOEID_IN_PROGRESS",f="FETCH_WEATHER_FOR_WOEID_SUCCESS",v="FETCH_WEATHER_FOR_WOEID_FAILURE",_="UNIT_TOGGLE",N="RESET_WEATHER_DATA_AND_STATUS",w=function(e){return{type:j,woeid:e}},y=function(e){return{type:o,search:e}},S=function(e){return{type:_,unit:e}},g=function(){return{type:N}},E=(a(75),a(7)),R=a(63),T=(a(58),"CELCIUS"),D="FAHRENHEIT",C=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"],W=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],k=function(e){var t=new Date(e);return"".concat(C[t.getDay()],", ").concat(t.getDate()," ").concat(W[t.getMonth()])},A=function(e){return"https://www.metaweather.com/static/img/weather/".concat(e,".svg")},F=function(e){var t=e.consolidated_weather,a=e.title,c=t[0],n=(c.created,c.max_temp,c.min_temp,c.predictability,Object(R.a)(c,["created","max_temp","min_temp","predictability"]));return n.readableDate=k(n.applicable_date),n.wind_direction=Math.round(n.wind_direction),n.wind_speed=n.wind_speed.toPrecision(2),n.visibility=Math.round(n.visibility),n.the_temp=Math.round(n.the_temp),t.shift(),{futureData:t.map((function(e,t){return{min_temp:Math.round(e.min_temp),max_temp:Math.round(e.max_temp),readableDate:t?k(e.applicable_date):"Tomorrow",weather_state_abbr:e.weather_state_abbr}})),todayRelevantData:n,unit:T,title:a}},H=function(e){return Math.round(1.8*e+32)},I=function(e){return Math.round(5/9*(e-32))},M=function(e,t){var a=t.futureData,c=t.todayRelevantData;return a&&c?(c.the_temp=e===D?H(c.the_temp):I(c.the_temp),a.forEach((function(t){t.min_temp=e===D?H(t.min_temp):I(t.min_temp),t.max_temp=e===D?H(t.max_temp):I(t.max_temp)})),Object(E.a)(Object(E.a)({},t),{},{futureData:a,todayRelevantData:c,unit:e})):t};var P=function(e){return e===T?"\u2103":"\u2109"},U=(a(77),a(2)),L=function(e){var t=e.data,a=e.unit;return Object(U.jsxs)("div",{className:"snapshot",children:[Object(U.jsx)("p",{className:"future-date",children:t.readableDate}),Object(U.jsx)("img",{src:A(t.weather_state_abbr),alt:"pic",className:"weather-image"}),Object(U.jsxs)("div",{className:"temperatures",children:[Object(U.jsx)("p",{className:"max-temp",children:"".concat(t.max_temp).concat(P(a))}),Object(U.jsx)("p",{className:"min-temp",children:"".concat(t.min_temp).concat(P(a))})]})]})},G=(a(23),function(e){var t=e.pressure;return Object(U.jsxs)("div",{className:"card",children:[Object(U.jsx)("p",{className:"title",children:"Air Pressure"}),Object(U.jsxs)("div",{className:"inline-data",children:[Object(U.jsxs)("p",{className:"pressure",children:[t," "]}),Object(U.jsx)("p",{className:"unit",children:"mb"})]})]})}),J=(a(79),function(e){var t=e.value;return Object(U.jsxs)("div",{className:"guage",children:[Object(U.jsxs)("div",{className:"numbers",children:[Object(U.jsx)("p",{className:"reading",children:"0%"}),Object(U.jsx)("p",{className:"reading",children:"50%"}),Object(U.jsx)("p",{className:"reading",children:"100%"})]}),Object(U.jsx)("div",{className:"filler-guage"}),Object(U.jsx)("div",{className:"filled",style:{width:"".concat(229*t/100,"px")}})]})}),z=function(e){var t=e.humidity;return Object(U.jsxs)("div",{className:"card",children:[Object(U.jsx)("p",{className:"title",children:"Humidity"}),Object(U.jsxs)("div",{className:"inline-data",children:[Object(U.jsx)("p",{className:"humidity",children:t}),Object(U.jsx)("p",{className:"unit",children:"%"})]}),Object(U.jsx)(J,{value:t})]})},B=function(e){var t=e.visibility;return Object(U.jsxs)("div",{className:"card",children:[Object(U.jsx)("p",{className:"title",children:"Visibility"}),Object(U.jsxs)("div",{className:"inline-data",children:[Object(U.jsxs)("p",{className:"visibility",children:[t," "]}),Object(U.jsx)("p",{className:"unit",children:"miles"})]})]})},V=a(59),X=a.n(V),Y=function(e){var t=e.speed,a=e.direction,c=e.compass;return Object(U.jsxs)("div",{className:"card",children:[Object(U.jsx)("p",{className:"title",children:"Wind status"}),Object(U.jsxs)("div",{className:"inline-data",children:[Object(U.jsxs)("p",{className:"speed",children:[t," "]}),Object(U.jsx)("p",{className:"unit",children:"mph"})]}),Object(U.jsxs)("div",{className:"inline-data",children:[Object(U.jsx)(X.a,{className:"compass",fontSize:"large",style:{transform:"rotate(".concat(a,"deg)")}}),Object(U.jsx)("p",{className:"direction",children:c})]})]})},q=Object(i.b)((function(e){return{weather:e.weather,fetchWeatherStatus:e.fetchWeatherStatus}}),(function(e){return Object(l.b)({onUnitClick:S},e)}))((function(e){var t=e.weather,a=e.fetchWeatherStatus,c=e.onUnitClick,n=t.futureData,r=t.todayRelevantData,s=t.unit;if(r)var i=r.air_pressure,l=r.humidity,u=r.visibility,o=r.wind_direction,j=r.wind_direction_compass,h=r.wind_speed;var b=function(e){var t=e.target.id;t!==s&&c(t)};return Object(U.jsx)("div",{className:"forecast",children:function(){switch(a){case x:return Object(U.jsx)(d.a,{className:"wait-spinner",size:50});case m:return Object(U.jsx)("p",{className:"default-screen",children:"Welcome to the Weather app. Please search and select a city to see its weather forecast."});case f:return n&&n.length&&r&&Object(U.jsxs)("div",{children:[Object(U.jsxs)("div",{className:"unit-toggle",children:[Object(U.jsxs)("div",{style:{display:"inline-block",marginRight:"20px"},children:[Object(U.jsx)("input",{type:"radio",name:"toggle-group",value:"1",id:T,checked:"checked",onClick:b}),Object(U.jsx)("label",{class:"radio",for:T,children:"\u2103"})]}),Object(U.jsxs)("div",{style:{display:"inline-block"},children:[Object(U.jsx)("input",{type:"radio",name:"toggle-group",value:"2",id:D,onClick:b}),Object(U.jsx)("label",{class:"radio",for:D,children:"\u2109"})]})]}),Object(U.jsx)("div",{className:"future",children:n&&n.map((function(e){return Object(U.jsx)(L,{data:e,unit:s})}))}),Object(U.jsx)("h2",{className:"heading",children:"Today's Highlights"}),Object(U.jsxs)("div",{className:"highlights",children:[Object(U.jsx)(G,{pressure:i}),Object(U.jsx)(z,{humidity:l}),Object(U.jsx)(B,{visibility:u}),Object(U.jsx)(Y,{speed:h,direction:o,compass:j})]})]});case v:return Object(U.jsx)("p",{className:"default-screen",children:"Failed to retrieve weather data."})}}()})})),K=a(61),Q=a(43),Z=(a(84),Object(i.b)((function(e){return{searchOptions:e.searchOptions,fetchSearchOptionsStatus:e.fetchSearchOptionsStatus,fetchWeatherStatus:e.fetchWeatherStatus,weather:e.weather}}),(function(e){return Object(l.b)({fetchSearchOptions:y,fetchWeather:w,resetWeatherDataAndStatus:g},e)}))((function(e){var t=e.searchOptions,a=e.fetchSearchOptions,n=e.fetchSearchOptionsStatus,r=e.fetchWeather,s=e.weather,i=e.fetchWeatherStatus,l=e.resetWeatherDataAndStatus,u=Object(c.useState)(""),o=Object(Q.a)(u,2),j=o[0],_=o[1],N=Object(c.useState)([]),w=Object(Q.a)(N,2),y=w[0],S=w[1],g=function(e){_(e.target.value)},E=function(e){var t=e.target,a=t.id,c=t.textContent;-1===y.findIndex((function(e){return e.woeid==a}))&&S([].concat(Object(K.a)(y),[{title:c,woeid:parseInt(a,10)}]))},R=function(e){r(parseInt(e.target.id,10))},T=function(){switch(n){case h:return Object(U.jsx)("p",{children:"Enter name of city or co-ordinates"});case b:return Object(U.jsx)(d.a,{className:"wait-spinner",size:25});case O:return t&&t.length&&Object(U.jsx)("ol",{className:"city-list",children:t.map((function(e){return Object(U.jsx)("li",{id:e.woeid,onClick:E,children:e.title})}))});case p:return Object(U.jsx)("p",{children:"Failed to retrieve search options"})}};return Object(U.jsx)("div",{className:"tabBar",children:function(){switch(i){case x:return Object(U.jsx)(d.a,{className:"wait-spinner",size:50});case m:return Object(U.jsxs)(c.Fragment,{children:[Object(U.jsxs)("div",{className:"search",children:[Object(U.jsxs)("div",{children:[Object(U.jsx)("input",{placeholder:"search location",onChange:g,value:j}),Object(U.jsx)("div",{className:"popover",children:T()})]}),Object(U.jsx)("button",{className:"search-btn",onClick:function(){return a(j)},children:"Search"})]}),Object(U.jsx)("div",{className:"cities",children:y.map((function(e){return Object(U.jsx)("button",{id:e.woeid,className:"city",onClick:R,children:e.title})}))})]});case f:return Object(U.jsxs)("div",{className:"today-weather",children:[Object(U.jsx)("button",{class:"go-back-btn",onClick:function(){return l()},children:"Go back"}),Object(U.jsx)("img",{src:A(s.todayRelevantData.weather_state_abbr),alt:"pic",className:"today-weather-image"}),Object(U.jsxs)("div",{className:"today-inline-data",children:[Object(U.jsx)("p",{className:"today-temp",children:s.todayRelevantData.the_temp}),Object(U.jsx)("p",{className:"today-unit",children:P(s.unit)})]}),Object(U.jsx)("p",{className:"today-weather-state",children:s.todayRelevantData.weather_state_name}),Object(U.jsxs)("div",{className:"footer-text",children:[Object(U.jsx)("p",{style:{marginRight:"5px"},children:"Today"}),Object(U.jsx)("p",{style:{marginRight:"5px"},children:"."}),Object(U.jsx)("p",{children:s.todayRelevantData.readableDate})]}),Object(U.jsx)("div",{className:"footer-text",children:Object(U.jsx)("p",{children:s.title})})]});case v:return Object(U.jsx)("p",{className:"default-screen",children:"Failed to retrieve weather data."})}}()})}))),$=(a(85),function(){return Object(U.jsxs)("div",{className:"outerDiv",children:[Object(U.jsx)(Z,{}),Object(U.jsx)(q,{})]})});var ee=function(){return Object(U.jsx)("div",{className:"App",children:Object(U.jsx)($,{})})},te=a(14),ae=a.n(te),ce=a(8),ne=a(60),re=a.n(ne),se=a(42),ie=a.n(se),le="https://guarded-hamlet-95273.herokuapp.com/https://www.metaweather.com/api/location",ue=function(e){return ie.a.get("".concat(le,"/search/?").concat(e)).then((function(e){return e})).then((function(e){return e}))},de=function(e){return ie.a.get("".concat(le,"/").concat(e)).then((function(e){return e})).then((function(e){return e}))},oe=ae.a.mark(be),je=ae.a.mark(Oe),he=ae.a.mark(pe);function be(e){var t,a,c,n;return ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.search,r.next=3,Object(ce.b)({type:b});case 3:if(r.prev=3,!t||!t.length){r.next=20;break}if(2!==(a=t.split(",")).length||Number.isNaN(parseFloat(a[0]))||Number.isNaN(parseFloat(a[1]))){r.next=12;break}return r.next=9,Object(ce.a)(ue,"lattlong=".concat(t));case 9:c=r.sent,r.next=15;break;case 12:return r.next=14,Object(ce.a)(ue,"query=".concat(t));case 14:c=r.sent;case 15:return n=c.data.map((function(e){return re()(e,"title","woeid")})),r.next=18,Object(ce.b)({type:O,results:n});case 18:r.next=22;break;case 20:return r.next=22,Object(ce.b)({type:p,error:"search cannot be an empty string"});case 22:r.next=28;break;case 24:return r.prev=24,r.t0=r.catch(3),r.next=28,Object(ce.b)({type:p,error:r.t0});case 28:case"end":return r.stop()}}),oe,null,[[3,24]])}function Oe(e){var t,a,c;return ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.woeid,n.next=3,Object(ce.b)({type:x});case 3:if(n.prev=3,!t||"number"!==typeof t){n.next=13;break}return n.next=7,Object(ce.a)(de,t);case 7:return a=n.sent,c=a.data,n.next=11,Object(ce.b)({type:f,data:F(c)});case 11:n.next=15;break;case 13:return n.next=15,Object(ce.b)({type:v,error:"woeid must be a number"});case 15:n.next=21;break;case 17:return n.prev=17,n.t0=n.catch(3),n.next=21,Object(ce.b)({type:v,error:n.t0});case 21:case"end":return n.stop()}}),je,null,[[3,17]])}function pe(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ce.c)(o,be);case 2:return e.next=4,Object(ce.c)(j,Oe);case 4:case"end":return e.stop()}}),he)}var me={fetchSearchOptionsStatus:h,fetchWeatherStatus:m,weather:{},searchOptions:[]},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(E.a)(Object(E.a)({},e),{},{fetchSearchOptionsStatus:b});case O:return Object(E.a)(Object(E.a)({},e),{},{searchOptions:t.results,fetchSearchOptionsStatus:O});case p:return Object(E.a)(Object(E.a)({},e),{},{searchOptions:[t.error],fetchSearchOptionsStatus:p});case x:return Object(E.a)(Object(E.a)({},e),{},{fetchWeatherStatus:x});case f:return Object(E.a)(Object(E.a)({},e),{},{weather:t.data,fetchWeatherStatus:f});case v:return Object(E.a)(Object(E.a)({},e),{},{weather:[t.error],fetchWeatherStatus:v});case _:return Object(E.a)(Object(E.a)({},e),{},{weather:M(t.unit,e.weather)});case N:return Object(E.a)(Object(E.a)({},e),{},{fetchWeatherStatus:m,weather:me.weather});default:return e}},fe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.c,ve=Object(s.a)(),_e=Object(u.createLogger)({level:"info"}),Ne=Object(l.d)(xe,fe(Object(l.a)(ve),Object(l.a)(_e)));ve.run(pe),r.a.render(Object(U.jsx)(i.a,{store:Ne,children:Object(U.jsx)(ee,{})}),document.getElementById("root"))},23:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},77:function(e,t,a){},79:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){}},[[164,1,2]]]);
//# sourceMappingURL=main.7dbf42c1.chunk.js.map