(function(l,L,b,P,B,T){"use strict";function U(e,n,t){if(!e.name||!e?.description)throw new Error(`No name(${e?.name}) or description(${e?.description}) in the passed command (command name: ${e?.name})`);if(e.displayName??=n?.names?.[t]??e.name,e.displayDescription??=n?.names?.[t]??e.description,e.options){if(!Array.isArray(e.options))throw new Error(`Options is not an array (received: ${typeof e.options})`);e.options=e.options.map(function(r,i){if(!r?.name||!r?.description)throw new Error(`No name(${r?.name}) or description(${r?.description} in the option with index ${i}`);return r.displayName??=n?.options?.[i]?.names?.[t]??r.name,r.displayDescription??=n?.options?.[i]?.descriptions?.[t]??r.description,r})}return e}function V(e){const{metro:n}=e,{receiveMessage:t}=n.findByProps("sendMessage","receiveMessage"),{createBotMessage:r}=n.findByProps("createBotMessage"),i=n.findByProps("BOT_AVATARS");return function(a,s){typeof s<"u"&&"author"in s&&"avatar"in s.author&&"avatarURL"in s.author&&(i.BOT_AVATARS[s.author.avatar]=s.author.avatarURL,delete s.author.avatarURL);let o=r(a);return typeof s=="object"&&(o=n.findByProps("merge").merge(o,s)),t(a.channelId,o),o}}const v={loadingDiscordSpinner:"a:loading:1105495814073229393",aol:"a:aol:1108834296359301161",linuth:":linuth:1110531631409811547",fuckyoy:":fuckyoy:1108360628302782564",getLoading(){return Math.random()<.01?this?.aol:this.loadingDiscordSpinner},getFailure(){return Math.random()<.01?this?.fuckyoy:this.linuth},getSuccess(){return""}},j={command:"https://cdn.discordapp.com/attachments/1099116247364407337/1112129955053187203/command.png"};function D(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:200,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;return Array.from({length:n},function(){return`vibrate(duration = ${e})`}).join(t>0?`
wait(time = ${t})
`:`
`)}function O(e,n){return e<0?n??0:e}function y(e){return e.error=!0,e.toString=function(){var n=this;const t=`${this.line} | `,r=this.character+t.length;let i,a;return this.lines&&(i=this.lines.splice(this.line-3,this.line-1).reduce(function(s,o,$){return s+`${$+n.line-3} | ${o}
`},""),a=`
`+this.lines.slice(this.line,this.line+3).reduce(function(s,o,$){return s+`${$+n.line+1} | ${o}
`},"")),i+(`${t}${this.codeline}
`+" ".repeat(O(r-1))+(this.message.length<25?"^"+"-".repeat(O(t.length-r,1))+" ":`\u2191
`+" ".repeat(O(r-1-5)))+"Syntax Error: "+this.message)+a},e}function q(e,n){if(typeof e!="string")throw new Error("passed scheme isn't a string");const t=[],r=e.split(/\r?\n|\r/);for(var i=0;i<r.length;i++){const s=r[i].trimEnd(),[o,$]=s.split(";"),w={name:void 0,rawName:void 0,comment:$,args:[],rawArgs:void 0};if(n&&(w.line=i),!n&&o.length===0||(n&&(w.rawName=o),t.push(w),o.length===0))continue;const d=o.indexOf("("),p=o.indexOf(")");if(o.trimEnd().substring(0,p).length>o.trimEnd().length)return y({message:"Unnecessary symbols after funk brackets",character:p+1,codeline:o,line:i,lines:r});let g;if(d===0?g=o.substring(0,d):p===0?g=o.substring(0,p):g=o.substring(0,d!==-1?d:0),g.length===0&&(d===0||p===0))return y({message:"No funk name",character:1,codeline:o,line:i,lines:r});if(w.name=g.trim(),d===-1&&p===-1)return y({message:'No arg brackets ("(", ")")',character:g.length||1,codeline:o,line:i,lines:r});if(d===-1)return y({message:'No opening arg bracket ("(")',character:p!==-1?p+1:0,codeline:o,line:i,lines:r});if(p===-1)return y({message:'No closing arg bracket (")")',character:d!==-1?d+1:0,codeline:o,line:i,lines:r});const C=o.substring(d+1,p).split(",");n&&(w.rawArgs=C);for(var a=0;a<C.length;a++){const k=C[a],h={name:void 0,rawName:void 0,equalsUsed:void 0,value:void 0,rawValue:void 0};if(!n&&k.length===0){if(a!==0)return y({message:"Empty argument",character:g.length+C.splice(0,a).reduce(function(S,R){return S+R.length+1},1),codeline:o,line:i,lines:r});break}w.args.push(h),n&&(h.equalsUsed=k.indexOf("=")!==-1),n&&(h.rawName=f[0]);const f=k.split("=");if(f.length===2&&[f[0],f[1]].every(function(S){return S===""}))return y({message:"Empty argument name",character:g.length+C.splice(0,a).reduce(function(S,R){return S+R.length+1},1)+k.indexOf("="),codeline:o,line:i,lines:r});f[1]||(f[1]="true"),h.name=f[0].trim();const X=f[1];n&&h.rawValue;const I=X.trim(),F=parseInt(I);Number.isNaN(F)?I==="true"?h.value=!0:I==="false"?h.value=!1:h.value=I:h.value=F}}return t}const G={exeCute:async function(e){const n={..._,interaction:{name:"/vibrate start",user:b.findByStoreName("UserStore").getCurrentUser()}};try{const{args:t,channel:r}=e;if(!(t.get("scheme")||t.get("duration")||t.get("repeat")||t.get("gap")))return await u({channel_id:r.id,embeds:[{color:c(),type:"rich",title:`<${v.getFailure()}> Please provide a \`scheme\` or choose \`duration\`, \`repeat\` and/or \`gap\``}]},n);const i=t.get("scheme")?.value||D(t.get("duration").value,t.get("repeat")?.value,t.get("gap")?.value);x({scheme:i,parseCB:async function(a){return await u({channelId:r.id,embeds:[{color:c(),type:"rich",title:"<:vibrating:1095354969965731921> Parsing vibration\u2026",footer:{text:`ID: ${a.id}
(if you stop now, it will stop after parsing)`}}]},n)},parseFailCB:async function(a){return await u({channelId:r.id,embeds:[{color:c(),type:"rich",title:`<${v.getFailure()}> An error ocurred while parsing the scheme`,description:`\`\`\`js
${a.scheme.toString()}\`\`\``}]},{...n,id:a.parseCallbackOutput.id,edited_timestamp:Date.now().toString()})},startCB:async function(a){return await u({channelId:r.id,embeds:[{color:c(),type:"rich",title:"<:vibrating:1095354969965731921> Playing vibration",footer:{text:`ID: ${a.id}`}}]},{...n,edited_timestamp:Date.now().toString(),id:a.parseCallbackOutput.id})},errorCB:async function(a){return await u({channelId:r.id,embeds:[{color:c(),type:"rich",title:`${v.getFailure()} An error ocurred while playing the vibration`,description:`\`\`\`${a.error.message}\`\`\``}]},{...n,edited_timestamp:Date.now().toString(),id:a.startCallbackOutput.id})},finishCB:async function(a){const s=a.startCallbackOutput.id;u({channelId:r.id,embeds:[{color:c(),type:"rich",title:`<:still:1095977283212296194> ${a.stopped?"Stopp":"Finish"}ed playing`,footer:{text:`ID: ${a.id}`}}]},{...n,type:19,message_reference:{channel_id:r.id,message_id:s,guild_id:e?.guild?.id},referenced_message:b.findByStoreName("MessageStore").getMessage(r.id,s)})}})}catch(t){console.error(t),u({channelId:channel.id,content:`\`\`\`js
${t.stack}\`\`\``,embeds:[{color:c(),type:"rich",title:`<${v.getFailure()}> An error ocurred while running the command`,description:`Send a screenshot of this error and explain how you came to it, here: ${N}, to hopefully get this error solved!`}]},n)}}},H={exeCute:async function(e){const{channel:n,args:t}=e,r={..._,interaction:{name:"/vibrate stop",user:b.findByStoreName("UserStore").getCurrentUser()}};try{const i=t.get("id").value;if(m.findIndex(function(s){return s.id===i})===-1){await u({channelId:n.id,embeds:[{color:c(),type:"rich",title:`<${v.getFailure()}> Vibration with id \`${i}\` not found`}]},r);return}const a=m[m.findIndex(function(s){return s.id===i})];a.stopping=!0,a.startCallbackOutput=u({channelId:n.id,embeds:[{color:c(),type:"rich",title:`<${v.getLoading()}> Stopping vibration\u2026`,footer:{text:`ID: ${a.id}`}}]},r)}catch(i){console.error(i),u({color:c(),channelId:n.id,content:`\`\`\`js
${i.stack}\`\`\``,embeds:[{type:"rich",title:`<${v.getFailure()}> An error ocurred while running the command`,description:`Send a screenshot of this error and explain how you came to it, here: ${N}, to hopefully get this error solved!`}]},r)}}},N="||not proxied||",J="1113021888109740083",_={author:{username:"Vibrate",avatar:"command",avatarURL:j.command}};"stats"in B.storage||(B.storage.stats={});{const e=B.storage.stats;"localRuns"in e||(e.localRuns=0),"publicRuns"in e||(e.publicRuns=0),"lastVibration"in e||(e.lastVibration={scheme:D(150,5)})}const{meta:{resolveSemanticColor:K}}=b.findByProps("colors","meta"),W=b.findByStoreName("ThemeStore"),c=function(){return parseInt(K(W.theme,T.semanticColors.BACKGROUND_SECONDARY).slice(1),16)};let A;function u(){return window.sendMessage?window.sendMessage?.(...arguments):(A||(A=V(vendetta)),A(...arguments))}const{triggerHaptic:E}=b.findByProps("triggerHaptic"),Y=P.ReactNative.Platform.select,M=function(e){return new Promise(function(n){return setTimeout(n,e)})};let z=0;const m=[];async function x(e){try{if(typeof e>"u"&&(e={}),!e?.scheme)throw new Error("No scheme provided");const t={id:z++,meta:{rawScheme:e.scheme},stopping:!1,stopped:!1,ios:!!Y({ios:!0})};if(e?.parseCB&&(t.parseCallbackOutput=await e.parseCB(t)),t.scheme=q(t.meta.rawScheme,e?.debug),m.push(t),console.log("VIBRATION",t),t.scheme.error===!0&&(t.errored=!0,e?.parseFailCB&&(t.errorCallbackOutput=await e.parseFailCB(t))),!t.errored&&e?.startCB&&(t.startCallbackOutput=await e.startCB?.(t)),!t.errored){B.storage.localRuns++;for(var n of t.scheme){if(!n.name)continue;const r=n.args.find(function(i){return i.name==="duration"})?.value;switch(n.name){case"vibrate":if(t.ios){E();const i=setInterval(E,1);await M(r??400),clearInterval(i)}else P.ReactNative.Vibration.vibrate(r??400),await M(r??400);break;case"wait":await M(r??5);break;default:t.errored=!0,t.stopping=!0,t.error={message:"Unknown funk: "+n.name},e?.errorCB&&(t.errorCallbackOutput=e.errorCB(t))}if(t.stopping===!0){t.stopped=!0;break}if(t.errored)break}}return m.splice(m.findIndex(function(r){return r.id===t.id}),1),t.errored?t.errorCallbackOutput:e?.finishCB?.(t)}catch(t){console.error(t),alert(`An error ocurred at vibrate()
`+t.stack)}}var Q={patches:[function(){for(var e=0;e<m.length;e++)m[e].stopping=!0}],onUnload(){this.patches.every(function(e){return e(),!0})},onLoad(){var e=this;try{[U({execute:async function(n,t){return H.exeCute({...t,args:new Map(n.map(function(r){return[r.name,r]})),plugin:e})},type:1,inputType:1,applicationId:"-1",name:"vibrate stop",description:"Stop a brrr",options:[{type:4,required:!0,name:"id",description:"Vibration id which you receive when starting a vibration"}]}),U({execute:async function(n,t){return G.exeCute({...t,args:new Map(n.map(function(r){return[r.name,r]})),plugin:e})},type:1,inputType:1,applicationId:"-1",name:"vibrate start",description:"Start a brrr",options:[{type:3,name:"scheme",description:"A custom scheme to use (overwrites all other options)",min_length:1},{type:4,name:"duration",description:"Duration of one vibration (ms)",min_value:1},{type:4,name:"repeat",description:"Number of times to repeat"},{type:4,name:"gap",description:"Wait between vibrations (only matters if you have more than 1 repeat)"}]})].forEach(function(n){return e.patches.unshift(L.registerCommand(n))})}catch(n){console.error(n),alert(`There was an error while loading Vibrate
`+n.stack)}}};return l.APP_ID=J,l.EMBED_COLOR=c,l.PLUGIN_FORUM_POST_URL=N,l.authorMods=_,l.default=Q,l.sendMessage=u,l.vibrate=x,l.vibrations=m,Object.defineProperty(l,"__esModule",{value:!0}),l})({},vendetta.commands,vendetta.metro,vendetta.metro.common,vendetta.plugin,vendetta.ui);
