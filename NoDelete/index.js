(function(o,d,i,l){"use strict";const{React:r,ReactNative:m}=vendetta.metro.common,{plugin:{storage:a},storage:{useProxy:c},ui:{components:{Forms:u}}}=vendetta;"timestamps"in a||(a.timestamps=!1);const{FormRow:f,FormSection:E,FormSwitch:h}=u;function g(t){return c(a),r.createElement(m.ScrollView,{style:{flex:1}},[{label:"Show the time of deletion",default:!1,id:"timestamps"},{label:"Use AM/PM",default:!1,id:"ew"},{label:"The plugin does not keep the messages you've deleted"}].map(function(e){return r.createElement(f,{label:e.label,trailing:"id"in e?r.createElement(h,{value:a[e.id]??e.default,onValueChange:function(s){return a[e.id]=s}}):void 0})}))}let n=[];var p={settings:g,onLoad(){try{this.onUnload=l.before("dispatch",d.FluxDispatcher,function(t){const e=t[0];if(e&&e?.type==="MESSAGE_DELETE"){if(!e?.id||!e?.channelId)return;if(n.includes(e.id))return n.splice(n.indexOf(e.id),1),t;n.push(e.id);let s=i.storage.message?.trim?.()||"This message was deleted";return i.storage.timestamps&&(s+=` (${d.moment().format(i.storage.ew?"hh:mm:ss.SS a":"HH:mm:ss.SS")})`),t[0]={type:"MESSAGE_EDIT_FAILED_AUTOMOD",messageData:{type:1,message:{channelId:e.channelId,messageId:e.id}},errorResponseBody:{code:2e5,message:s}},t}})}catch(t){alert(`NoDelete died
`+t.stack),console.error(t)}}};return o.default=p,Object.defineProperty(o,"__esModule",{value:!0}),o})({},vendetta.metro.common,vendetta.plugin,vendetta.patcher);
