(function(f){"use strict";function y(e,o,c){if(!e.name||!e?.description)throw new Error(`No name(${e?.name}) or description(${e?.description}) in the passed command. (command name: ${e?.name})`);return e.displayName=o?.names?.[c]??e.name,e.displayDescription=o?.names?.[c]??e.description,e.options&&(e.options=e.options.map(function(n,a){if(!n?.name||!n?.description)throw new Error(`No name(${n?.name}) or description(${n?.description} in the option with index ${a}`);return n.displayName=o?.options?.[a]?.names?.[c]??n.name,n.displayDescription=o?.options?.[a]?.descriptions?.[c]??n.description,n})),e}const g={loadingDiscordSpinner:":loading:1105495814073229393",aol:"a:aol:1108834296359301161",linuth:":linuth:1110531631409811547",fuckyoy:":fuckyoy:1108360628302782564",getLoading(){return Math.random()<.01?this?.aol:this.loadingDiscordSpinner},getFailure(){return Math.random()<.01?this?.fuckyoy:this.linuth},getSuccess(){return""}},{metro:l,logger:P,commands:b}=vendetta,{vibrate:$}=l.findByProps("vibrate"),v=function(e){return l.findByProps("View").Platform.select(typeof e=="object"&&(e.hasOwnProperty("ios")||e.hasOwnProperty("android"))?e:{ios:[e],android:e})},w=function(e){return new Promise(function(o){return setTimeout(o,e)})},h={patches:[],onUnload:function(){this.patches.every(function(e){return e(),!0})}},p=[];patches.push(function(){for(var e=0;e<p.length;e++)p[e].aborting=!0});async function I(e,o,c){typeof e>"u"&&(e={}),e.hasOwnProperty("duration")||(e.duration=400),e.repeat||(e.repeat=1),e.hasOwnProperty("gap")||(e.gap=0),v({ios:!0,android:!1})&&duration>400&&(duration=400);const n=+Date.now(),a={id:n,aborting:!1,aborted:!1};p.push(a),o(a);for(let i=0;i<e.repeat;i++){if($(v(e.duration),!0),await w(e.duration),a.aborting===!0){a.aborted=!0;break}await w(e.gap)}a.deleted=delete p[p.findIndex(function(i){return i.id===n})],c(a)}return h.onLoad=function(){try{let e=function(i,t){typeof t<"u"&&"author"in t&&"avatar"in t.author&&"avatarURL"in t.author&&(n.BOT_AVATARS[t.author.avatar]=t.author.avatarURL,delete t.author.avatarURL);let r=c(i);return typeof t=="object"&&(r=l.findByProps("merge").merge(r,t)),o(i.channelId,r),r};const{receiveMessage:o}=l.findByProps("sendMessage","receiveMessage"),{createBotMessage:c}=l.findByProps("createBotMessage"),n=l.findByProps("BOT_AVATARS"),a={abort(i,t){const r={username:"/vibrate abort",avatar:"clyde"},s=new Map(i.map(function(m){return[m.name,m]})).get("id").value,d=p.findIndex(function(m){return m.id===s});if(d===-1){e({channelId:t.channel.id,embeds:{type:"rich",title:`${g.getFailure()} Invalid vibration ID`.trim,fields:[{value:`${s}`,name:"Vibration ID"}]}},r);return}p[d].aborting=!0,e({channelId:t.channel.id,embeds:[{type:"rich",title:`${g.getLoading()} Aborting vibration\u2026`,fields:[{value:`${s}`,name:"Vibration ID"}]}]},r)},begin(i,t){const r={username:"/vibrate begin",avatar:"clyde"};try{const s=new Map(i.map(function(u){return[u.name,u]})),d={duration:s.get("duration").value,repeat:s.get("repeat")?.value,gap:s.get("gap")?.value},m=`for ${d.duration}ms`+(d?.repeat?`, ${d.repeat} time${d.repeat===1?"":"s"}`:"")+(d?.gap?`. With a gap of ${d?.gap}ms.`:"");I(d,async function(u){e({channelId:t.channel.id,embeds:[{type:"rich",title:"<:vibrating:1095354969965731921> Started vibrating",description:m,fields:[{value:`${u.id}`,name:"Vibration ID"}]}]},r)},async function(u){e({channelId:t.channel.id,embeds:[{type:"rich",title:`<:still:1095977283212296194> ${u.aborted?"Abort":"Finish"}ed vibrating`,fields:[{value:`${u.id}`,name:"Vibration ID"}]}]},r)})}catch(s){console.error(s),e({channelId:t.channel.id,content:`\`\`\`
${s.stack}\`\`\``,embeds:[{type:"rich",title:`${g.getFailure()} An error ocurred while running the command`.trim(),description:`Send a screenshot of this error and explain how you came to it, here: ${PLUGINS_FORUM_POST_URL}, to hopefully get this error solved!`}]},r)}}};h.patches.push(b.registerCommand(y({execute:a.begin,type:1,inputType:1,applicationId:"-1",name:"vibrate begin",description:"Begin a brrr",options:[{type:4,required:!0,name:"duration",description:"Duration of one vibration (in milliseconds)",min_value:1,max_value:9999},{type:4,name:"repeat",description:"Number of times to repeat",min_value:1,max_value:9999999},{type:4,name:"gap",description:"Wait between vibrates (only matters if you have more than 1 repeat)"}]}))),h.patches.push(b.registerCommand(y({execute:a.abort,type:1,inputType:1,applicationId:"-1",name:"vibrate abort",description:"Abort a brrr",options:[{type:4,required:!0,name:"id",description:"Vibration id, that you receive when running /vibrate begin"}]})))}catch(e){alert(e.stack)}},f.default=h,Object.defineProperty(f,"__esModule",{value:!0}),f})({});
