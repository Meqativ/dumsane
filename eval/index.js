(function(l,B,m,p,y){"use strict";function E(t,a,i){if(!t.name||!t?.description)throw new Error(`No name(${t?.name}) or description(${t?.description}) in the passed command (command name: ${t?.name})`);if(t.displayName??=a?.names?.[i]??t.name,t.displayDescription??=a?.names?.[i]??t.description,t.options){if(!Array.isArray(t.options))throw new Error(`Options is not an array (received: ${typeof t.options})`);for(var o=0;o<t.options.length;o++){const e=t.options[o];if(!e?.name||!e?.description)throw new Error(`No name(${e?.name}) or description(${e?.description} in the option with index ${o}`);if(e.displayName??=a?.options?.[o]?.names?.[i]??e.name,e.displayDescription??=a?.options?.[o]?.descriptions?.[i]??e.description,e?.choices){if(!Array.isArray(e?.choices))throw new Error(`Choices is not an array (received: ${typeof e.choices})`);for(var s=0;s<e.choices.length;s++){const n=e.choices[s];if(!n?.name)throw new Error(`No name of choice with index ${s} in option with index ${o}`);n.displayName??=a?.options?.[o]?.choices?.[s]?.names?.[i]??n.name}}}}return t}function C(t){const{metro:a}=t,{receiveMessage:i}=a.findByProps("sendMessage","receiveMessage"),{createBotMessage:o}=a.findByProps("createBotMessage"),s=a.findByProps("BOT_AVATARS");return function(e,n){if(!e.channelId)throw new Error("No channel id to receive the message into (channelId)");typeof n<"u"&&"author"in n&&"avatar"in n.author&&"avatarURL"in n.author&&(s.BOT_AVATARS[n.author.avatar]=n.author.avatarURL,delete n.author.avatarURL);let c=n===!0?e:o(e);return typeof n=="object"&&(c=t.metro.findByProps("merge").merge(c,n)),i(e.channelId,c),c}}const N={author:{username:"eval",avatar:"command",avatarURL:{command:"https://cdn.discordapp.com/attachments/1099116247364407337/1112129955053187203/command.png"}.command}};"stats"in p.storage||(p.storage.stats={});{const t=p.storage.stats;"runs"in t||(t.runs={failed:0,succeeded:0})}const{meta:{resolveSemanticColor:w}}=m.findByProps("colors","meta"),g=m.findByStoreName("ThemeStore"),u=function(t){parseInt(w(g.theme,y.semanticColors.BACKGROUND_SECONDARY).slice(1),16)};let h;function A(){return window.sendMessage?window.sendMessage?.(...arguments):(h||(h=C(vendetta)),h(...arguments))}const $={meta:vendetta.plugin,onLoad(){var t=this;try{this.onUnload=B.registerCommand(E({type:1,inputType:1,applicationId:"-1",name:"!eval",displayName:"eval",description:"Evaluates code",options:[{required:!0,type:3,name:"code",description:"The code to evaluate",min_length:1},{type:4,name:"type",description:"How to handle the evaluation",choices:[{name:"no await & show output",value:0},{name:"await & no output",value:1},{name:"no await & no output",value:2},{name:"await & output [default]",value:-1}]},{type:5,name:"return",description:"Whether to return the returned value so it works as a real slash command (default: false)"}],execute:async function(a,i){const o={...i,args:new Map(a.map(function(e){return[e.name,e]})),plugin:t},s={...N,interaction:{name:"/eval",user:m.findByStoreName("UserStore").getCurrentUser()}};try{const{channel:e,args:n}=o,c=[0,2].includes(n.get("type")?.value),R=[1,2].includes(n.get("type")?.value),v=n.get("code")?.value;window.currentEvalInteraction=o;let r,d,M=+new Date;try{r=(0,eval)(v),r instanceof Promise&&!c&&(r=await r)}catch(S){r=S,d=!0}let f=+new Date-M;if(window.currentEvalInteraction=void 0,console.log("[eval \u203A evaluate() result]",{result:r,errored:d,elapsed:f}),R||(d&&A({channelId:e.id,embeds:[{type:"rich",color:u("exploded"),description:r.stack.split(`
    at next (native)`)[0],footer:{text:`type: ${typeof r}
took: ${f}ms`}}]},{...s,rawCode:v}),d||A({channelId:e.id,content:`\`\`\`js
${vendetta.metro.findByProps("inspect").inspect(r)}\`\`\``,embeds:[{type:"rich",color:u("satisfactory"),footer:{text:`type: ${typeof r}
took: ${f}ms`}}]},{...s,rawCode:v})),!d&&n.get("return")?.value)return r}catch(e){console.error(e),alert(`An uncatched error was thrown while running /eval
`+e.stack)}}}))}catch(a){console.error(a),alert(`There was an error while loading the plugin "${$.meta.name}"
${a.stack}`)}}};return l.EMBED_COLOR=u,l.default=$,Object.defineProperty(l,"__esModule",{value:!0}),l})({},vendetta.commands,vendetta.metro,vendetta.plugin,vendetta.ui);
