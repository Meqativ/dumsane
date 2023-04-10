(function(r){"use strict";const{metro:o,logger:y,commands:m}=vendetta,{vibrate:l}=o.findByProps("vibrate"),c=function(e){return o.findByProps("View").Platform.select({ios:[e],android:e})},{sendBotMessage:u}=o.findByProps("sendBotMessage"),s={},d=[];s.onUnload=function(){return d.every(function(e){return e(),!0})},s.onLoad=function(){d[0]=m.registerCommand({execute:g,type:1,inputType:1,applicationId:0,name:"vibrate",displayName:"vibrate",description:"b"+"r".repeat(50),displayDescription:"b"+"r".repeat(50),options:[{type:4,required:!0,name:"duration",displayName:"duration",description:"Duration of one vibration (in milliseconds)",displayDescription:"Duration of one vibration (in milliseconds)",min_value:1,max_value:9999},{type:4,name:"repeat",displayName:"repeat",description:"Number of times to repeat",displayDescription:"Number of times to repeat",min_value:1,max_value:9999999},{type:4,name:"gap",displayName:"gap",description:"Wait between vibrates (only matters if you have more than 1 repeat)",displayDescription:"Wait between vibrates (only matters if you have more than 1 repeat)"}]})};async function g(e,n){const t=new Map(e.map(function(i){return[i.name,i]}));u(n.channel.id,`Vibrating for ${t.get("duration").value}ms`),v(t.get("duration").value,t.get("repeat").value,t.get("gap").value,function(){u(n.channel.id,"Finished vibrating")})}async function v(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=arguments.length>3?arguments[3]:void 0;const p=function(a){return new Promise(function(f){return setTimeout(f,a)})};for(let a=0;a<n;a++)l(c(e),!0),await p(e),await p(t);i()}return r.default=s,Object.defineProperty(r,"__esModule",{value:!0}),r})({});
