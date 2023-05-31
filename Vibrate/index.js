(function(p,D,S,U,N){"use strict";function R(e,r,t){if(!e.name||!e?.description)throw new Error(`No name(${e?.name}) or description(${e?.description}) in the passed command (command name: ${e?.name})`);if(e.displayName=r?.names?.[t]??e.name,e.displayDescription=r?.names?.[t]??e.description,e.options){if(!Array.isArray(e.options))throw new Error(`Options is not an array (received: ${typeof e.options})`);e.options=e.options.map(function(n,a){if(!n?.name||!n?.description)throw new Error(`No name(${n?.name}) or description(${n?.description} in the option with index ${a}`);return n.displayName=r?.options?.[a]?.names?.[t]??n.name,n.displayDescription=r?.options?.[a]?.descriptions?.[t]??n.description,n})}return e}function T(e){const{receiveMessage:r}=metro.findByProps("sendMessage","receiveMessage"),{createBotMessage:t}=metro.findByProps("createBotMessage"),n=metro.findByProps("BOT_AVATARS");return function(a,i){typeof i<"u"&&"author"in i&&"avatar"in i.author&&"avatarURL"in i.author&&(n.BOT_AVATARS[i.author.avatar]=i.author.avatarURL,delete i.author.avatarURL);let s=t(a);return typeof i=="object"&&(s=metro.findByProps("merge").merge(s,i)),r(a.channelId,s),s}}const v={loadingDiscordSpinner:"a:loading:1105495814073229393",aol:"a:aol:1108834296359301161",linuth:":linuth:1110531631409811547",fuckyoy:":fuckyoy:1108360628302782564",getLoading(){return Math.random()<.01?this?.aol:this.loadingDiscordSpinner},getFailure(){return Math.random()<.01?this?.fuckyoy:this.linuth},getSuccess(){return""}},L={command:"https://cdn.discordapp.com/attachments/1099116247364407337/1112129955053187203/command.png"};function x(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:200,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return Array.from({length:r},function(){return`vibrate(duration = ${e})`}).join(t>0?`
wait(time = ${t})
`:`
`)}function B(e,r){return e<0?r??0:e}function f(e){return e.error=!0,e.toString=function(){var r=this;const t=`${this.line} | `,n=this.character+t.length;let a,i;return this.lines&&(a=this.lines.splice(this.line-3,this.line-1).reduce(function(s,o,b){return s+`${b+r.line-3} | ${o}
`},""),i=`
`+this.lines.slice(this.line,this.line+3).reduce(function(s,o,b){return s+`${b+r.line+1} | ${o}
`},"")),a+(`${t}${this.codeline}
`+" ".repeat(B(n-1))+(this.message.length<25?"^"+"-".repeat(B(t.length-n,1))+" ":`\u2191
`+" ".repeat(B(n-1-5)))+"Syntax Error: "+this.message)+i},e}function F(e,r){if(typeof e!="string")throw new Error("passed scheme isn't a string");const t=[],n=e.split(/\r?\n|\r/);for(var a=0;a<n.length;a++){const s=n[a].trimEnd(),[o,b]=s.split(";"),y={name:void 0,rawName:void 0,comment:b,args:[],rawArgs:void 0};if(r&&(y.line=a),!r&&o.length===0||(r&&(y.rawName=o),t.push(y),o.length===0))continue;const u=o.indexOf("("),d=o.indexOf(")");if(o.trimEnd().substring(0,d).length>o.trimEnd().length)return f({message:"Unnecessary symbols after funk brackets",character:d+1,codeline:o,line:a,lines:n});let h;if(u===0?h=o.substring(0,u):d===0?h=o.substring(0,d):h=o.substring(0,u!==-1?u:0),h.length===0&&(u===0||d===0))return f({message:"No funk name",character:1,codeline:o,line:a,lines:n});if(y.name=h.trim(),u===-1&&d===-1)return f({message:'No arg brackets ("(", ")")',character:h.length||1,codeline:o,line:a,lines:n});if(u===-1)return f({message:'No opening arg bracket ("(")',character:d!==-1?d+1:0,codeline:o,line:a,lines:n});if(d===-1)return f({message:'No closing arg bracket (")")',character:u!==-1?u+1:0,codeline:o,line:a,lines:n});const w=o.substring(u+1,d).split(",");r&&(y.rawArgs=w);for(var i=0;i<w.length;i++){const k=w[i],m={name:void 0,rawName:void 0,equalsUsed:void 0,value:void 0,rawValue:void 0};if(!r&&k.length===0){if(i!==0)return f({message:"Empty argument",character:h.length+w.splice(0,i).reduce(function($,_){return $+_.length+1},1),codeline:o,line:a,lines:n});break}y.args.push(m),r&&(m.equalsUsed=k.indexOf("=")!==-1),r&&(m.rawName=g[0]);const g=k.split("=");if(g.length===2&&[g[0],g[1]].every(function($){return $===""}))return f({message:"Empty argument name",character:h.length+w.splice(0,i).reduce(function($,_){return $+_.length+1},1)+k.indexOf("="),codeline:o,line:a,lines:n});g[1]||(g[1]="true"),m.name=g[0].trim();const W=g[1];r&&m.rawValue;const I=W.trim(),V=parseInt(I);Number.isNaN(V)?I==="true"?m.value=!0:I==="false"?m.value=!1:m.value=I:m.value=V}}return t}const j={exeCute:async function(e){const r={...M,interaction:{name:"/vibrate start",user:S.findByStoreName("UserStore").getCurrentUser()}};try{const{args:t,channel:n}=e;if(!(t.get("scheme")||t.get("duration")||t.get("repeat")||t.get("gap")))return await c({channel_id:n.id,embeds:[{type:"rich",title:`<${v.getFailure()}> Please provide a \`scheme\` or choose \`duration\`, \`repeat\` and/or \`gap\``}]},r);const a=t.get("scheme")?.value||x(t.get("duration").value,t.get("repeat")?.value,t.get("gap")?.value);E({scheme:a,parseCB:async function(i){return await c({channelId:n.id,embeds:[{type:"rich",title:"<:vibrating:1095354969965731921> Parsing vibration\u2026",footer:{text:`ID: ${i.id}
(if you stop now, it will stop after parsing)`}}]},r)},startCB:async function(i){return await c({channelId:n.id,embeds:[{type:"rich",title:"<:vibrating:1095354969965731921> Playing vibration",footer:{text:`ID: ${i.id}`}}]},{...r,edited_timestamp:Date.now().toString(),id:i.parseCallbackOutput.id})},errorCB:async function(i){return await c({channelId:n.id,embeds:[{type:"rich",title:`${v.getFailure()} An error ocurred while playing the vibration`,description:`\`\`\`${i.error.message}\`\`\``}]},{...r,edited_timestamp:Date.now().toString(),id:i.parseOutput})},finishCB:async function(i){const s=i.startCallbackOutput.id;c({channelId:n.id,embeds:[{type:"rich",title:`<:still:1095977283212296194> ${i.stopped?"Stopp":"Finish"}ed playing`,footer:{text:`ID: ${i.id}`}}]},{...r,type:19,message_reference:{channel_id:n.id,message_id:s,guild_id:e?.guild?.id},referenced_message:S.findByStoreName("MessageStore").getMessage(n.id,s)})}})}catch(t){console.error(t),c({channelId:channel.id,content:`\`\`\`js
${t.stack}\`\`\``,embeds:[{type:"rich",title:`<${v.getFailure()}> An error ocurred while running the command`,description:`Send a screenshot of this error and explain how you came to it, here: ${C}, to hopefully get this error solved!`}]},r)}}},q={exeCute:async function(e){const{channel:r,args:t}=e,n={...M,interaction:{name:"/vibrate stop",user:S.findByStoreName("UserStore").getCurrentUser()}};try{const a=t.get("id").value;if(l.findIndex(function(s){return s.id===a})===-1){await c({channelId:r.id,embeds:[{type:"rich",title:`<${v.getFailure()}> Vibration with id \`${a}\` not found`}]},n);return}const i=l[l.findIndex(function(s){return s.id===a})];i.stopping=!0,i.startCallbackOutput=c({channelId:r.id,embeds:[{type:"rich",title:`<${v.getLoading()}> Stopping vibration\u2026`,footer:{text:`ID: ${i.id}`}}]},n)}catch(a){console.error(a),c({channelId:r.id,content:`\`\`\`js
${a.stack}\`\`\``,embeds:[{type:"rich",title:`<${v.getFailure()}> An error ocurred while running the command`,description:`Send a screenshot of this error and explain how you came to it, here: ${C}, to hopefully get this error solved!`}]},n)}}},C="||not proxied||",M={author:{username:"Vibrate",avatar:"command",avatarURL:L.command}};"stats"in N.storage||(N.storage.stats={});{const e=N.storage.stats;"localRuns"in e||(e.localRuns=0),"publicRuns"in e||(e.publicRuns=0),"debug"in e||"lastVibration"in e||(e.lastVibration={scheme:x(150,5)})}let O;function c(){return window.sendMessage?window.sendMessage?.(...arguments):(O||(O=T(vendetta)),O(...arguments))}const{triggerHaptic:P}=S.findByProps("triggerHaptic"),G=U.ReactNative.Platform.select,A=function(e){return new Promise(function(r){return setTimeout(r,e)})};let H=0;const l=[];async function E(e){try{if(typeof e>"u"&&(e={}),!e?.scheme)throw new Error("No scheme provided");const t={id:H++,meta:{rawScheme:e.scheme},stopping:!1,stopped:!1,ios:!!G({ios:!0})};if(e?.parseCB&&(t.parseCallbackOutput=await e.parseCB?.(t)),t.scheme=F(t.meta.rawScheme,e?.debug),l.push(t),console.log("VIBRATION",t),e?.startCB&&(t.startCallbackOutput=await e.startCB?.(t)),t.errored=t.scheme?.error===!0,!t.errored)for(var r of t.scheme){if(!r.name)continue;const n=r.args.find(function(a){return a.name==="duration"})?.value;switch(r.name){case"vibrate":if(t.ios){P();const a=setInterval(P,1);await A(n??400),clearInterval(a)}else U.ReactNative.Vibration.vibrate(n??400),await A(n??400);break;case"wait":await A(n??5);break;default:t.errored=!0,t.stopping=!0,t.error={message:"Unknown funk: "+r.name},e?.errorCB&&(t.errorCallbackOutput=e.errorCB(t))}if(t.stopping===!0){t.stopped=!0;break}if(t.errored)break}return l.splice(l.findIndex(function(n){return n.id===t.id}),1),t.errored?t.errorCallbackOutput:e?.finishCB?.(t)}catch(t){console.error(t),alert(`An error ocurred at vibrate()
`+t.stack)}}var J={patches:[function(){for(var e=0;e<l.length;e++)l[e].stopping=!0}],onUnload(){this.patches.every(function(e){return e(),!0})},onLoad(){var e=this;try{[R({execute:async function(r,t){return q.exeCute({...t,args:new Map(r.map(function(n){return[n.name,n]})),plugin:e})},type:1,inputType:1,applicationId:"-1",name:"vibrate stop",description:"Stop a brrr",options:[{type:4,required:!0,name:"id",description:"Vibration id which you receive when starting a vibration"}]}),R({execute:async function(r,t){return j.exeCute({...t,args:new Map(r.map(function(n){return[n.name,n]})),plugin:e})},type:1,inputType:1,applicationId:"-1",name:"vibrate start",description:"Start a brrr",options:[{type:3,name:"scheme",description:"A custom scheme to use (overwrites all other options)",min_length:1},{type:4,name:"duration",description:"Duration of one vibration (ms)",min_value:1},{type:4,name:"repeat",description:"Number of times to repeat"},{type:4,name:"gap",description:"Wait between vibrations (only matters if you have more than 1 repeat)"}]})].forEach(function(r){return e.patches.unshift(D.registerCommand(r))})}catch(r){console.error(r),alert(`There was an error while loading Vibrate
`+r.stack)}}};return p.PLUGIN_FORUM_POST_URL=C,p.authorMods=M,p.default=J,p.sendMessage=c,p.vibrate=E,p.vibrations=l,Object.defineProperty(p,"__esModule",{value:!0}),p})({},vendetta.commands,vendetta.metro,vendetta.metro.common,vendetta.plugin);
