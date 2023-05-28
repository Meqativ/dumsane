(function(h){"use strict";function g(n,r,s){if(!n.name||!n?.description)throw new Error(`No name(${n?.name}) or description(${n?.description}) in the passed command (command name: ${n?.name})`);if(n.displayName=r?.names?.[s]??n.name,n.displayDescription=r?.names?.[s]??n.description,n.options){if(!Array.isArray(n.options))throw new Error(`Options is not an array (received: ${typeof n.options})`);n.options=n.options.map(function(c,u){if(!c?.name||!c?.description)throw new Error(`No name(${c?.name}) or description(${c?.description} in the option with index ${u}`);return c.displayName=r?.options?.[u]?.names?.[s]??c.name,c.displayDescription=r?.options?.[u]?.descriptions?.[s]??c.description,c})}return n}const m={loadingDiscordSpinner:":loading:1105495814073229393",aol:"a:aol:1108834296359301161",linuth:":linuth:1110531631409811547",fuckyoy:":fuckyoy:1108360628302782564",getLoading(){return Math.random()<.01?this?.aol:this.loadingDiscordSpinner},getFailure(){return Math.random()<.01?this?.fuckyoy:this.linuth},getSuccess(){return""}},y={command:"https://cdn.discordapp.com/attachments/1099116247364407337/1112129955053187203/command.png"},v=[];var w={patches:[function(){for(var n=0;n<v.length;n++)v[n].stopping=!0}],onUnload(){this.patches.every(function(n){return n(),!0})},onLoad(){var n=this;try{let r=function(t,a){typeof a<"u"&&"author"in a&&"avatar"in a.author&&"avatarURL"in a.author&&(M.BOT_AVATARS[a.author.avatar]=a.author.avatarURL,delete a.author.avatarURL);let o=P(t);return typeof a=="object"&&(o=s.findByProps("merge").merge(o,a)),S(t.channelId,o),console.log("VIBATE SEND MSG",{msg:o}),o};const{metro:s,logger:c,commands:u}=vendetta,b=vendetta.metro.common.ReactNative.Vibration,{triggerHaptic:$}=vendetta.metro.findByProps("triggerHaptic"),D="||not proxied||",I=function(t){return s.findByProps("View").Platform.select(typeof t=="object"&&(t.hasOwnProperty("ios")||t.hasOwnProperty("android"))?t:{ios:[t],android:t})},f=function(t){return new Promise(function(a){return setTimeout(a,t)})},l=[];async function A(t,a,o){try{typeof t>"u"&&(t={}),t.repeat||(t.repeat=1);const e={id:+Date.now(),stopping:!1,stopped:!1,ios:I({ios:!0,android:!1})};l.push(e),console.log(e),a(e);for(let i=0;i<t.repeat;i++){if(e.ios){const d=setInterval(function(){return $()},5);await f(t.duration),clearInterval(d)}else b.vibrate(1e69),await f(t.duration),b.clear();if(e.stopping===!0){e.stopped=!0;break}t.gap&&await f(t.gap)}e.deleted=delete l[l.findIndex(function(i){return i.id===e.id})],o(e)}catch(e){alert(e.stack),console.error(e.stack)}}const{receiveMessage:S}=s.findByProps("sendMessage","receiveMessage"),{createBotMessage:P}=s.findByProps("createBotMessage"),M=s.findByProps("BOT_AVATARS");[g({execute:function(t,a){const o={author:{username:"/vibrate start",avatar:"command",avatarURL:y.command}};console.log(o);try{const e=new Map(t.map(function(p){return[p.name,p]})),i={duration:e.get("duration").value,repeat:e.get("repeat")?.value,gap:e.get("gap")?.value},d=`for ${i.duration}ms`+(i?.repeat?`, ${i.repeat} time${i.repeat===1?"":"s"}`:"")+(i?.gap?`. With a gap of ${i?.gap}ms.`:"");A(i,async function(p){r({channelId:a.channel.id,embeds:[{type:"rich",title:"<:vibrating:1095354969965731921> Started vibrating",description:d,fields:[{value:`${p.id}`,name:"Vibration ID"}]}]},o)},async function(p){r({channelId:a.channel.id,embeds:[{type:"rich",title:`<:still:1095977283212296194> ${p.stopped?"Abort":"Finish"}ed vibrating`,fields:[{value:`${p.id}`,name:"Vibration ID"}]}]},o)})}catch(e){alert(e.stack),console.error(e),r({channelId:a.channel.id,content:`\`\`\`
${e.stack}\`\`\``,embeds:[{type:"rich",title:`<${m.getFailure()}> An error ocurred while running the command`.trim(),description:`Send a screenshot of this error and explain how you came to it, here: ${PLUGINS_FORUM_POST_URL}, to hopefully get this error solved!`}]},o)}},type:1,inputType:1,applicationId:"-1",name:"vibrate start",description:"Begin a brrr",options:[{type:4,required:!0,name:"duration",description:"Duration of one vibration (in milliseconds)",min_value:1},{type:4,name:"repeat",description:"Number of times to repeat"},{type:4,name:"gap",description:"Wait between vibrates (only matters if you have more than 1 repeat)"}]}),g({execute:function(t,a){const o={author:{username:"/vibrate stop",avatar:"command",avatarURL:y.command}};console.log(o);try{const e=new Map(t.map(function(d){return[d.name,d]})).get("id").value,i=l.findIndex(function(d){return d.id===e});if(i===-1){r({channelId:a.channel.id,embeds:{type:"rich",title:`<${m.getFailure()}> Invalid vibration ID`.trim,fields:[{value:`${e}`,name:"Vibration ID"}]}},o);return}l[i].stopping=!0,r({channelId:a.channel.id,embeds:[{type:"rich",title:`<${m.getLoading()}> Aborting vibration\u2026`,fields:[{value:`${e}`,name:"Vibration ID"}]}]},o)}catch(e){alert(e.stack),console.error(e),r({channelId:a.channel.id,content:`\`\`\`
${e.stack}\`\`\``,embeds:[{type:"rich",title:`<${m.getFailure()}> An error ocurred while running the command`.trim(),description:`Send a screenshot of this error and explain how you came to it, here: ${PLUGINS_FORUM_POST_URL}, to hopefully get this error solved!`}]},o)}},type:1,inputType:1,applicationId:"-1",name:"vibrate stop",description:"Stop a brrr",options:[{type:4,required:!0,name:"id",description:"Vibration id which you receive when starting a vibration"}]})].forEach(function(t){return n.patches.push(u.registerCommand(t))})}catch(r){console.error(r),alert(r.stack)}}};return h.default=w,Object.defineProperty(h,"__esModule",{value:!0}),h})({});
