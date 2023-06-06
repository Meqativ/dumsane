(function(n,a,e,l,o,m,c){"use strict";e.storage.ignore||(e.storage.ignore={users:[],bots:!1}),"timestamps"in e.storage||(e.storage.timestamps=!1),"onlyTimestamps"in e.storage||(e.storage.onlyTimestamps=!1),"ew"in e.storage||(e.storage.ew=!1);function g(r){return l.useProxy(e.storage),a.React.createElement(a.ReactNative.ScrollView,{style:{flex:1}},[{type:"switch",label:"Show the time of deletion",propId:"timestamps"},{type:"switch",label:"Use AM/PM",propId:"ew"},{type:"separator"},{type:"switch",label:"Ignore bots"},{type:"text",label:"The plugin does not keep the messages you've deleted"}].map(function(t){if(t.type==="switch")return a.React.createElement(o.Forms.FormRow,{label:t.label,trailing:a.React.createElement(o.Forms.FormSwitch,{value:e.storage[t.propId],onValueChange:function(s){return e.storage[t.propId]=s}})});if(t.type==="text")return a.React.createElement(o.Forms.FormLabel,{label:t.label});if(t.type==="separator")return a.React.createElement(o.Forms.FormDivider,null)}))}let i;var h={settings:g,onLoad(){e.storage.ignore.users=["571661221854707713"];try{this.onUnload=m.before("dispatch",a.FluxDispatcher,function(r){i||(i=c.findByStoreName("MessageStore"));const t=r[0];if(t&&t?.type==="MESSAGE_DELETE"){if(!("guildId"in t)||!t?.id||!t?.channelId)return;const s=i.getMessage(t.channelId,t.id);if(console.log(s,t),e.storage.ignore.users.includes(s?.author?.id)||e.storage.ignore.bots&&s?.author?.bot)return;let d=e.storage.onlyTimestamp?"":e.storage.message?.trim?.()||"This message was deleted";return(e.storage.timestamps||e.storage.onlyTimestamp)&&(d+=` (${a.moment().format(e.storage.ew?"hh:mm:ss.SS a":"HH:mm:ss.SS")})`),console.log("meow",{redText:d,event:t}),r[0]={type:"MESSAGE_EDIT_FAILED_AUTOMOD",messageData:{type:1,message:{channelId:t.channelId,messageId:t.id}},errorResponseBody:{code:2e5,message:d}},r}})}catch(r){alert(`NoDelete died
`+r.stack),console.error(r)}}};return n.default=h,Object.defineProperty(n,"__esModule",{value:!0}),n})({},vendetta.metro.common,vendetta.plugin,vendetta.storage,vendetta.ui.components,vendetta.patcher,vendetta.metro);
