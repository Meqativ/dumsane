(function(a,i,d,l,r){"use strict";function s(e,o){if(e===void 0)throw new Error("No object passed to make defaults for");if(o===void 0)throw new Error("No defaults object passed to make defaults off of");for(const t in o)typeof o[t]=="object"&&!Array.isArray(o[t])?(typeof e[t]!="object"&&(e[t]={}),s(e[t],o[t])):e[t]??=o[t];return e}let n={},c;s(r.storage,{blockedWebhooks:[{name:"Example",id:"0",avatarURL:"https://github.com/meqativ.png"}]}),n={...vendetta.plugin,patches:[],onUnload(){this.patches.forEach(function(e){return e()}),this.patches=[]},onLoad(){try{c??=i.findByStoreName("RelationshipStore"),d.after("isBlocked",c,function(e,o){return r.storage.blockedWebhooks.some(function(t){return t.id===e[0]})?!0:o}),window.blockedWebhooks=r.storage.blockedWebhooks}catch(e){console.error(e),console.log(e.stack),alert(`There was an error while loading the plugin "${n.name}"
${e.stack}`)}}};var f=n;return a.default=f,Object.defineProperty(a,"__esModule",{value:!0}),a})({},vendetta.metro,vendetta.patcher,vendetta.ui.toasts,vendetta.plugin);