(function(d,L,b,R,I,T){"use strict";function P(t,n,e){if(!t.name||!t?.description)throw new Error(`No name(${t?.name}) or description(${t?.description}) in the passed command (command name: ${t?.name})`);if(t.displayName??=n?.names?.[e]??t.name,t.displayDescription??=n?.names?.[e]??t.description,t.options){if(!Array.isArray(t.options))throw new Error(`Options is not an array (received: ${typeof t.options})`);for(var r=0;r<t.options.length;r++){const a=t.options[r];if(!a?.name||!a?.description)throw new Error(`No name(${a?.name}) or description(${a?.description} in the option with index ${r}`);if(a.displayName??=n?.options?.[r]?.names?.[e]??a.name,a.displayDescription??=n?.options?.[r]?.descriptions?.[e]??a.description,a?.choices){if(!Array.isArray(a?.choices))throw new Error(`Choices is not an array (received: ${typeof a.choices})`);for(var i=0;i<a.choices.length;i++){const o=a.choices[i];if(!o?.name)throw new Error(`No name of choice with index ${i} in option with index ${r}`);o.displayName??=n?.options?.[r]?.choices?.[i]?.names?.[e]??o.name}}}}return t}function V(t){const{metro:n}=t,{receiveMessage:e}=n.findByProps("sendMessage","receiveMessage"),{createBotMessage:r}=n.findByProps("createBotMessage"),i=n.findByProps("BOT_AVATARS");return function(a,o){if(a.channelId??=n.findByStoreName("SelectedChannelStore").getChannelId(),[null,void 0].includes(a.channelId))throw new Error("No channel id to receive the message into (channelId)");o!==void 0&&"author"in o&&"avatar"in o.author&&"avatarURL"in o.author&&(i.BOT_AVATARS[o.author.avatar]=o.author.avatarURL,delete o.author.avatarURL);let s=o===!0?a:r(a);return typeof o=="object"&&(s=t.metro.findByProps("merge").merge(s,o)),e(a.channelId,s),s}}const v={loadingDiscordSpinner:"a:loading:1105495814073229393",aol:"a:aol:1108834296359301161",linuth:":linuth:1110531631409811547",fuckyoy:":fuckyoy:1108360628302782564",getLoading(){return Math.random()<.01?this?.aol:this.loadingDiscordSpinner},getFailure(){return Math.random()<.01?this?.fuckyoy:this.linuth},getSuccess(){return""}},j={command:"https://cdn.discordapp.com/attachments/1099116247364407337/1112129955053187203/command.png"};function U(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:200,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return Array.from({length:n},function(){return`vibrate(duration = ${t})`}).join(e>0?`
wait(time = ${e})
`:`
`)}function k(t,n){return t<0?n??0:t}function y(t){return t.error=!0,t.toString=function(){var n=this;const e=`${this.line} | `,r=this.character+e.length;let i,a;return this.lines&&(i=this.lines.splice(this.line-3,this.line-1).reduce(function(o,s,$){return o+`${$+n.line-3} | ${s}
`},""),a=`
`+this.lines.slice(this.line,this.line+3).reduce(function(o,s,$){return o+`${$+n.line+1} | ${s}
`},"")),i+(`${e}${this.codeline}
`+" ".repeat(k(r-1))+(this.message.length<25?"^"+"-".repeat(k(e.length-r,1))+" ":`\u2191
`+" ".repeat(k(r-1-5)))+"Syntax Error: "+this.message)+a},t}function q(t,n){if(typeof t!="string")throw new Error("passed scheme isn't a string");const e=[],r=t.split(/\r?\n|\r/);for(var i=0;i<r.length;i++){const o=r[i].trimEnd(),[s,$]=o.split(";"),w={name:void 0,rawName:void 0,comment:$,args:[],rawArgs:void 0};if(n&&(w.line=i),!n&&s.length===0||(n&&(w.rawName=s),e.push(w),s.length===0))continue;const u=s.indexOf("("),h=s.indexOf(")");if(s.trimEnd().substring(0,h).length>s.trimEnd().length)return y({message:"Unnecessary symbols after funk brackets",character:h+1,codeline:s,line:i,lines:r});let g;if(u===0?g=s.substring(0,u):h===0?g=s.substring(0,h):g=s.substring(0,u!==-1?u:0),g.length===0&&(u===0||h===0))return y({message:"No funk name",character:1,codeline:s,line:i,lines:r});if(w.name=g.trim(),u===-1&&h===-1)return y({message:'No arg brackets ("(", ")")',character:g.length||1,codeline:s,line:i,lines:r});if(u===-1)return y({message:'No opening arg bracket ("(")',character:h!==-1?h+1:0,codeline:s,line:i,lines:r});if(h===-1)return y({message:'No closing arg bracket (")")',character:u!==-1?u+1:0,codeline:s,line:i,lines:r});const C=s.substring(u+1,h).split(",");n&&(w.rawArgs=C);for(var a=0;a<C.length;a++){const B=C[a],p={name:void 0,rawName:void 0,equalsUsed:void 0,value:void 0,rawValue:void 0};if(!n&&B.length===0){if(a!==0)return y({message:"Empty argument",character:g.length+C.splice(0,a).reduce(function(S,E){return S+E.length+1},1),codeline:s,line:i,lines:r});break}w.args.push(p),n&&(p.equalsUsed=B.indexOf("=")!==-1),n&&(p.rawName=f[0]);const f=B.split("=");if(f.length===2&&[f[0],f[1]].every(function(S){return S===""}))return y({message:"Empty argument name",character:g.length+C.splice(0,a).reduce(function(S,E){return S+E.length+1},1)+B.indexOf("="),codeline:s,line:i,lines:r});f[1]||(f[1]="true"),p.name=f[0].trim();const X=f[1];n&&p.rawValue;const N=X.trim(),F=parseInt(N);Number.isNaN(F)?N==="true"?p.value=!0:N==="false"?p.value=!1:p.value=N:p.value=F}}return e}const G={exeCute:async function(t){const n={...A,interaction:{name:"/vibrate start",user:b.findByStoreName("UserStore").getCurrentUser()}};try{const{args:e,channel:r}=t;if(!(e.get("scheme")||e.get("duration")||e.get("repeat")||e.get("gap")))return await l({channelId:r.id,embeds:[{color:c(),type:"rich",title:`<${v.getFailure()}> Please provide a \`scheme\` or choose \`duration\`, \`repeat\` and/or \`gap\``}]},n);const i=e.get("scheme")?.value||U(e.get("duration").value,e.get("repeat")?.value,e.get("gap")?.value);x({scheme:i,parseCB:async function(a){return await l({channelId:r.id,embeds:[{color:c(),type:"rich",title:"<:vibrating:1095354969965731921> Parsing vibration\u2026",footer:{text:`ID: ${a.id}
(if you stop now, it will stop after parsing)`}}]},n)},parseFailCB:async function(a){return await l({channelId:r.id,embeds:[{color:c(),type:"rich",title:`<${v.getFailure()}> An error ocurred while parsing the scheme`,description:`\`\`\`js
${a.scheme.toString()}\`\`\``}]},{...n,id:a.parseCallbackOutput.id,edited_timestamp:Date.now().toString()})},startCB:async function(a){return await l({channelId:r.id,embeds:[{color:c(),type:"rich",title:"<:vibrating:1095354969965731921> Playing vibration",footer:{text:`ID: ${a.id}`}}]},{...n,edited_timestamp:Date.now().toString(),id:a.parseCallbackOutput.id})},errorCB:async function(a){return await l({channelId:r.id,embeds:[{color:c(),type:"rich",title:`${v.getFailure()} An error ocurred while playing the vibration`,description:`\`\`\`${a.error.message}\`\`\``}]},{...n,edited_timestamp:Date.now().toString(),id:a.startCallbackOutput.id})},finishCB:async function(a){const o=a.startCallbackOutput.id;l({channelId:r.id,embeds:[{color:c(),type:"rich",title:`<:still:1095977283212296194> ${a.stopped?"Stopp":"Finish"}ed playing`,footer:{text:`ID: ${a.id}`}}]},{...n,type:19,message_reference:{channel_id:r.id,message_id:o,guild_id:t?.guild?.id},referenced_message:b.findByStoreName("MessageStore").getMessage(r.id,o)})}})}catch(e){console.error(e),l({channelId:channel.id,content:`\`\`\`js
${e.stack}\`\`\``,embeds:[{color:c(),type:"rich",title:`<${v.getFailure()}> An error ocurred while running the command`,description:`Send a screenshot of this error and explain how you came to it, here: ${O}, to hopefully get this error solved!`}]},n)}}},H={exeCute:async function(t){const{channel:n,args:e}=t,r={...A,interaction:{name:"/vibrate stop",user:b.findByStoreName("UserStore").getCurrentUser()}};try{const i=e.get("id").value;if(m.findIndex(function(o){return o.id===i})===-1){await l({channelId:n.id,embeds:[{color:c(),type:"rich",title:`<${v.getFailure()}> Vibration with id \`${i}\` not found`}]},r);return}const a=m[m.findIndex(function(o){return o.id===i})];a.stopping=!0,a.startCallbackOutput=l({channelId:n.id,embeds:[{color:c(),type:"rich",title:`<${v.getLoading()}> Stopping vibration\u2026`,footer:{text:`ID: ${a.id}`}}]},r)}catch(i){console.error(i),l({color:c(),channelId:n.id,content:`\`\`\`js
${i.stack}\`\`\``,embeds:[{type:"rich",title:`<${v.getFailure()}> An error ocurred while running the command`,description:`Send a screenshot of this error and explain how you came to it, here: ${O}, to hopefully get this error solved!`}]},r)}}},O="||not proxied||",J="1113021888109740083",A={author:{username:"Vibrate",avatar:"command",avatarURL:j.command}};"stats"in I.storage||(I.storage.stats={});{const t=I.storage.stats;"localRuns"in t||(t.localRuns=0),"publicRuns"in t||(t.publicRuns=0),"lastVibration"in t||(t.lastVibration={scheme:U(150,5)})}const{meta:{resolveSemanticColor:K}}=b.findByProps("colors","meta"),W=b.findByStoreName("ThemeStore"),c=function(){return parseInt(K(W.theme,T.semanticColors.BACKGROUND_SECONDARY).slice(1),16)};let _;function l(){return window.sendMessage?window.sendMessage?.(...arguments):(_||(_=V(vendetta)),_(...arguments))}const{triggerHaptic:D}=b.findByProps("triggerHaptic"),Y=R.ReactNative.Platform.select,M=function(t){return new Promise(function(n){return setTimeout(n,t)})};let z=0;const m=[];async function x(t){try{if(typeof t>"u"&&(t={}),!t?.scheme)throw new Error("No scheme provided");const e={id:z++,meta:{rawScheme:t.scheme},stopping:!1,stopped:!1,ios:!!Y({ios:!0})};if(t?.parseCB&&(e.parseCallbackOutput=await t.parseCB(e)),e.scheme=q(e.meta.rawScheme,t?.debug),m.push(e),console.log("VIBRATION",e),e.scheme.error===!0&&(e.errored=!0,t?.parseFailCB&&(e.errorCallbackOutput=await t.parseFailCB(e))),!e.errored&&t?.startCB&&(e.startCallbackOutput=await t.startCB?.(e)),!e.errored){I.storage.localRuns++;for(var n of e.scheme){if(!n.name)continue;const r=n.args.find(function(i){return i.name==="duration"})?.value;switch(n.name){case"vibrate":if(e.ios){D();const i=setInterval(D,1);await M(r??400),clearInterval(i)}else R.ReactNative.Vibration.vibrate(r??400),await M(r??400);break;case"wait":await M(r??5);break;default:e.errored=!0,e.stopping=!0,e.error={message:"Unknown funk: "+n.name},t?.errorCB&&(e.errorCallbackOutput=t.errorCB(e))}if(e.stopping===!0){e.stopped=!0;break}if(e.errored)break}}return m.splice(m.findIndex(function(r){return r.id===e.id}),1),e.errored?e.errorCallbackOutput:t?.finishCB?.(e)}catch(e){console.error(e),alert(`An error ocurred at vibrate()
`+e.stack)}}var Q={meta:vendetta.plugin,patches:[],onUnload(){this.patches.forEach(function(t){return t()}),this.patches=[]},onLoad(){var t=this;this.patches.push(function(){for(var n=0;n<m.length;n++)m[n].stopping=!0});try{const n=this;[P({async execute(e,r){return await H.exeCute({...r,args:new Map(e.map(function(i){return[i.name,i]})),command:this,plugin:n})},type:1,inputType:1,applicationId:"-1",name:"vibrate stop",description:"Stop a brrr",options:[{type:4,required:!0,name:"id",description:"Vibration id which you receive when starting a vibration"}]}),P({async execute(e,r){return await G.exeCute({...r,args:new Map(e.map(function(i){return[i.name,i]})),command:this,plugin:n})},type:1,inputType:1,applicationId:"-1",name:"vibrate start",description:"Start a brrr",options:[{type:3,name:"scheme",description:"A custom scheme to use (overwrites all other options)",min_length:1},{type:4,name:"duration",description:"Duration of one vibration (ms)",min_value:1},{type:4,name:"repeat",description:"Number of times to repeat"},{type:4,name:"gap",description:"Wait between vibrations (only matters if you have more than 1 repeat)"}]})].forEach(function(e){return t.patches.unshift(L.registerCommand(e))})}catch(n){console.error(n),alert(`There was an error while loading Vibrate
`+n.stack)}}};return d.APP_ID=J,d.EMBED_COLOR=c,d.PLUGIN_FORUM_POST_URL=O,d.authorMods=A,d.default=Q,d.sendMessage=l,d.vibrate=x,d.vibrations=m,Object.defineProperty(d,"__esModule",{value:!0}),d})({},vendetta.commands,vendetta.metro,vendetta.metro.common,vendetta.plugin,vendetta.ui);
