(function(g){"use strict";function b(e,r,c){if(!e.name||!e?.description)throw new Error(`No name(${e?.name}) or description(${e?.description}) in the passed command. (command name: ${e?.name})`);return e.displayName=r?.names?.[c]??e.name,e.displayDescription=r?.names?.[c]??e.description,e.options&&(e.options=e.options.map(function(n,d){if(!n?.name||!n?.description)throw new Error(`No name(${n?.name}) or description(${n?.description} in the option with index ${d}`);return n.displayName=r?.options?.[d]?.names?.[c]??n.name,n.displayDescription=r?.options?.[d]?.descriptions?.[c]??n.description,n})),e}const h={loadingDiscordSpinner:":loading:1105495814073229393",aol:"a:aol:1108834296359301161",linuth:":linuth:1110531631409811547",fuckyoy:":fuckyoy:1108360628302782564",getLoading(){return Math.random()<.01?this?.aol:this.loadingDiscordSpinner},getFailure(){return Math.random()<.01?this?.fuckyoy:this.linuth},getSuccess(){return""}},{metro:u,logger:T,commands:f}=vendetta,{vibrate:A}=u.findByProps("vibrate"),v=function(e){return u.findByProps("View").Platform.select("ios"in e||"android"in e?e:{ios:[e],android:e})},y=function(e){return new Promise(function(r){return setTimeout(r,e)})},l={patches:[],onUnload:function(){this.patches.every(function(e){return e(),!0})}},I=[];async function B(e,r,c){try{typeof e>"u"&&(e={}),"duration"in e||(e.duration=400),"repeat"in e||(e.repeat=1),"gap"in e||(e.gap=0),v({ios:!0})&&duration>400&&(duration=400);const n={id:+Date.now(),aborting:!1,aborted:!1};r(n);for(let d=0;d<repeat;d++){if(A(v(e.duration),!0),await y(e.duration),n.aborting===!0){n.aborted=!0;break}await y(e.gap)}c(n)}catch(n){alert(n.stack)}}return l.onLoad=function(){try{let e=function(p,t){typeof t<"u"&&"author"in t&&"avatar"in t.author&&"avatarURL"in t.author&&(n.BOT_AVATARS[t.author.avatar]=t.author.avatarURL,delete t.author.avatarURL);let i=c.createBotMessage(p);return typeof t=="object"&&(i=u.findByProps("merge").merge(i,t)),r.receiveMessage(p.channelId,i),i};const r=u.findByProps("sendMessage","receiveMessage"),c=u.findByProps("createBotMessage"),n=u.findByProps("BOT_AVATARS"),d={abort(p,t){console.log("VIBATE","/vibrate abort - ran");const i={username:"/vibrate abort",avatar:"clyde"},s=new Map(p.map(function(m){return[m.name,m]})),a=s.get("id").value,o=I.findIndex(function(m){return m.id===a});if(console.log("VIBATE",{options:s,vibrationIndex:o,id:a}),o===-1){e({channelId:t.channel.id,embeds:{title:`${h.getFailure()} Invalid vibration ID`.trim,fields:[{value:vibration.id,name:"Vibration ID"}]}},i);return}I[o].aborting=!0,e({channelId:t.channel.id,embeds:[{title:`${h.getLoading()} Aborting vibration\u2026`,fields:[{value:a,name:"Vibration ID"}]}]},i)},begin(p,t){console.log("VIBATE","/vibrate begin - ran");const i={username:"/vibrate begin",avatar:"clyde"};try{const s=new Map(p.map(function(o){return[o.name,o]})),a={duration:s.get("duration").value,repeat:s.get("repeat")?.value,gap:s.get("gap")?.value};console.log("VIBATE",{cmdOptions:s,options:a}),B(a,function(o){console.log("VIBATE","before start"),e({channelId:t.channel.id,embeds:[{title:"<:vibrating:1095354969965731921> Started vibrating",description:`for ${a.duration}ms`+(a?.repeat?`, ${a.repeat} time${a.repeat===1?"":"s"}`:"")+"."+(a?.gap?`With a gap of ${a?.gap}ms.`:""),fields:[{value:o.id,name:"Vibration ID"}]}]},i),console.log("VIBATE","after start")},function(o){console.log("VIBATE","after finish"),e({channelId:t.channel.id,embeds:[{title:`<:still:1095977283212296194> ${o.aborted?"Abort":"Finish"}ed vibrating`,fields:[{value:o.id,name:"Vibration ID"}]}]},i),console.log("VIBATE","after after finish")})}catch(s){console.error(s),e({channelId:t.channel.id,content:`\`\`\`
${s.stack}\`\`\``,embeds:[{title:`${h.getFailure()} An error ocurred while running the command`.trim(),description:`Send a screenshot of this error and explain how you came to it, here: ${PLUGINS_FORUM_POST_URL}, to hopefully get this error solved!`}]},i)}}};l.patches.push(f.registerCommand(b({execute:d.begin,type:1,inputType:1,applicationId:"-1",name:"vibrate begin",description:"Begin a brrr",options:[{type:4,required:!0,name:"duration",description:"Duration of one vibration (in milliseconds)",min_value:1,max_value:9999},{type:4,name:"repeat",description:"Number of times to repeat",min_value:1,max_value:9999999},{type:4,name:"gap",description:"Wait between vibrates (only matters if you have more than 1 repeat)"}]}))),l.patches.push(f.registerCommand(b({execute:d.abort,type:1,inputType:1,applicationId:"-1",name:"vibrate abort",description:"Abort a brrr",options:[{type:4,required:!0,name:"id",description:"Vibration id, that you receive when running /vibrate begin"}]})))}catch(e){alert(e.stack)}},g.default=l,Object.defineProperty(g,"__esModule",{value:!0}),g})({});
