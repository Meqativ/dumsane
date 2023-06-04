(function(c,y,f,s){"use strict";function m(e,r,i){if(!e.name||!e?.description)throw new Error(`No name(${e?.name}) or description(${e?.description}) in the passed command (command name: ${e?.name})`);if(e.displayName??=r?.names?.[i]??e.name,e.displayDescription??=r?.names?.[i]??e.description,e.options){if(!Array.isArray(e.options))throw new Error(`Options is not an array (received: ${typeof e.options})`);for(var a=0;a<e.options.length;a++){const n=e.options[a];if(!n?.name||!n?.description)throw new Error(`No name(${n?.name}) or description(${n?.description} in the option with index ${a}`);if(n.displayName??=r?.options?.[a]?.names?.[i]??n.name,n.displayDescription??=r?.options?.[a]?.descriptions?.[i]??n.description,n?.choices){if(!Array.isArray(n?.choices))throw new Error(`Choices is not an array (received: ${typeof n.choices})`);for(var o=0;o<n.choices.length;o++){const t=n.choices[o];if(!t?.name)throw new Error(`No name of choice with index ${o} in option with index ${a}`);t.displayName??=r?.options?.[a]?.choices?.[o]?.names?.[i]??t.name}}}}return e}function w(e){const{metro:r}=e,{receiveMessage:i}=r.findByProps("sendMessage","receiveMessage"),{createBotMessage:a}=r.findByProps("createBotMessage"),o=r.findByProps("BOT_AVATARS");return function(n,t){if(!n.channelId)throw new Error("No channel id to receive the message into (channelId)");typeof t<"u"&&"author"in t&&"avatar"in t.author&&"avatarURL"in t.author&&(o.BOT_AVATARS[t.author.avatar]=t.author.avatarURL,delete t.author.avatarURL);let h=t===!0?n:a(n);return typeof t=="object"&&(h=e.metro.findByProps("merge").merge(h,t)),i(n.channelId,h),h}}const g={loadingDiscordSpinner:"a:loading:1105495814073229393",aol:"a:aol:1108834296359301161",linuth:":linuth:1110531631409811547",fuckyoy:":fuckyoy:1108360628302782564",getLoading(){return Math.random()<.01?this?.aol:this.loadingDiscordSpinner},getFailure(){return Math.random()<.01?this?.fuckyoy:this.linuth},getSuccess(){return""}},k={command:"https://cdn.discordapp.com/attachments/1099116247364407337/1112129955053187203/command.png"},{meta:{resolveSemanticColor:v}}=s.findByProps("colors","meta"),T=s.findByStoreName("ThemeStore"),d=function(){return parseInt(v(T.theme,y.semanticColors.BACKGROUND_SECONDARY).slice(1),16)},u={author:{username:"TokenUtils",avatar:"command",avatarURL:k.command}};let l;function p(){return window.sendMessage?window.sendMessage?.(...arguments):(l||(l=w(vendetta)),l(...arguments))}var S={meta:vendetta.plugin,patches:[],onUnload(){this.patches.forEach(function(e){return e()}),this.patches=[]},onLoad(){var e=this;try{const r={get(i,a){try{const o={...u,interaction:{name:"/token get",user:s.findByStoreName("UserStore").getCurrentUser()}},{getToken:n}=s.findByProps("getToken");p({loggingName:"Token get output message",channelId:a.channel.id,embeds:[{color:d(),type:"rich",title:"Token of the current account",description:`${n()}`}]},o)}catch(o){console.error(o),alert(`There was an error while exeCuting /token get
`+o.stack)}},login(i,a){try{const o={...u,interaction:{name:"/token login",user:s.findByStoreName("UserStore").getCurrentUser()}},n=new Map(i.map(function(t){return[t.name,t]})).get("token").value;try{p({loggingName:"Token login process message",channelId:a.channel.id,embeds:[{color:d(),type:"rich",title:`<${g.getLoading()}> Switching accounts\u2026`}]},o),s.findByProps("login","logout","switchAccountToken").switchAccountToken(n)}catch(t){console.error(t),p({loggingName:"Token login failure message",channelId:a.channel.id,embeds:[{color:d(),type:"rich",title:`<${g.getFailure()}> Failed to switch accounts`,description:`${t.message}`}]},o)}}catch(o){console.error(o),alert(`There was an error while executing /token login
`+o.stack)}}};[m({type:1,inputType:1,applicationId:"-1",execute:r.get,name:"token get",description:"Shows your current user token"}),m({type:1,inputType:1,applicationId:"-1",execute:r.login,name:"token login",description:"Logs into an account using a token",options:[{required:!0,type:3,name:"token",description:"Token of the account to login into"}]})].forEach(function(i){return e.patches.push(f.registerCommand(i))})}catch(r){console.error(r),alert(`There was an error while loading TokenUtils
`+r.stack)}}};return c.EMBED_COLOR=d,c.authorMods=u,c.default=S,Object.defineProperty(c,"__esModule",{value:!0}),c})({},vendetta.ui,vendetta.commands,vendetta.metro);
