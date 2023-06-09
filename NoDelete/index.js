(function(h,r,t,b,p,o,v,g,F,w,m){"use strict";t.storage.ignore??={users:[],bots:!1},t.storage.timestamps??=!1,t.storage.onlyTimestamps??=!1,t.storage.ew??=!1;function y(a){return b.useProxy(t.storage),r.React.createElement(r.ReactNative.ScrollView,{style:{flex:1}},r.React.createElement(o.Forms.FormSection,{title:"Settings",titleStyleType:"no_border"},r.React.createElement(o.Forms.FormRow,{label:"Show the time of deletion",trailing:r.React.createElement(o.Forms.FormSwitch,{value:t.storage.timestamps,onValueChange:function(u){return t.storage.timestamps=u}})}),r.React.createElement(o.Forms.FormRow,{label:"Use AM/PM",trailing:r.React.createElement(o.Forms.FormSwitch,{value:t.storage.ew,onValueChange:function(u){return t.storage.ew=u}})}),r.React.createElement(o.Forms.FormDivider,null),r.React.createElement(o.Forms.FormRow,{label:"The plugin does not keep the messages you deleted yourself"})),r.React.createElement(o.Forms.FormSection,{title:"Filters"},r.React.createElement(o.Forms.FormRow,{label:"Ignore bots",trailing:r.React.createElement(o.Forms.FormSwitch,{value:t.storage.ignore.bots,onValueChange:function(u){return t.storage.ignore.bots=u}})}),r.React.createElement(o.Forms.FormRow,{label:`You have ${t.storage.ignore.users.length} user${t.storage.ignore.users===1?"":"s"} ignored`,trailing:r.React.createElement(o.Forms.FormRow.Icon,{source:v.getAssetIDByName("ic_trash_24px")}),onPress:function(){const u=t.storage?.ignore;u&&typeof u.users<"u"&&u.users.length!==0&&p.showConfirmationAlert({title:"Are you sure?",content:`This will clear all users (${u.users.length}) you have added to the ignore list. Do you want to proceed?`,confirmText:"Yes",cancelText:"Cancel",confirmColor:"brand",onConfirm:function(){u.users=[]}})}}),r.React.createElement(o.Forms.FormDivider,null),r.React.createElement(o.Forms.FormRow,{label:'To add users: Open their profile \u2192 Press \u2022\u2022\u2022 \u2192 "Add to NoDelete ignore list"'})))}const l={optionLabels:[{"en-GB":"Add to NoDelete ignore list",uk:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u0438 \u0434\u043E \u0441\u043F\u0438\u0441\u043A\u0443 \u0456\u0433\u043D\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F NoDelete",ru:"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0432 \u0441\u043F\u0438\u0441\u043E\u043A \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F NoDelete"},{"en-GB":"Remove from the NoDelete ignore list",uk:"\u041F\u0440\u0438\u0431\u0440\u0430\u0442\u0438 \u0437 \u0441\u043F\u0438\u0441\u043A\u0443 \u0456\u0433\u043D\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F NoDelete",ru:"\u0423\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F NoDelete"}],toastLabels:[{"en-GB":"Added ${user} to the ignore list",uk:"${user} \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u043E \u0434\u043E \u0441\u043F\u0438\u0441\u043A\u0443 \u0456\u0433\u043D\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F",ru:"${user} \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u044B \u0432 \u0441\u043F\u0438\u0441\u043E\u043A \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"},{"en-GB":"Removed ${user} from the ignore list",uk:"${user} \u043F\u0440\u0438\u0431\u0440\u0430\u043D\u043E \u0437\u0456 \u0441\u043F\u0438\u0441\u043A\u0443 \u0456\u0433\u043D\u043E\u0440\u0443\u0432\u0430\u043D\u043D\u044F",ru:"${user} \u0443\u0431\u0440\u0430\u043D\u044B \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u0438\u0433\u043D\u043E\u0440\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F"}],thisMessageWasDeleted:{"en-GB":"This message was deleted",uk:"\u0426\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0431\u0443\u043B\u043E \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E",ru:"\u042D\u0442\u043E \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0431\u044B\u043B\u043E \u0443\u0434\u0430\u043B\u0435\u043D\u043E"}};let R="undefined";const A="en-GB";function n(a){let u=l;for(const e of a.split("."))u?.hasOwnProperty(e)?u=u[e]:u=l;return u===l?a:u[R]??u[A]??a}let E,c=[];var S={settings:y,patches:[],onUnload(){this.patches.forEach(function(a){return a()}),this.patches=[]},onLoad(){try{this.patches.push(g.before("dispatch",r.FluxDispatcher,function(u){try{E||(E=F.findByStoreName("MessageStore"));const e=u[0];if(!e||e?.type!=="MESSAGE_DELETE"||!e?.id||!e?.channelId)return;const s=E.getMessage(e.channelId,e.id);if(t.storage.ignore.users.includes(s?.author?.id)||t.storage.ignore.bots&&s?.author?.bot)return;if(c.includes(e.id))return c.splice(c.indexOf(e.id),1),u;c.push(e.id);let d=n("thisMessageWasDeleted");return t.storage.timestamps&&(d+=` (${r.moment().format(t.storage.ew?"hh:mm:ss.SS a":"HH:mm:ss.SS")})`),u[0]={type:"MESSAGE_EDIT_FAILED_AUTOMOD",messageData:{type:1,message:{channelId:e.channelId,messageId:e.id}},errorResponseBody:{code:2e5,message:d}},u}catch(e){console.error(e),alert(`[Nodelete \u2192 dispatcher patch] died
`+e.stack)}}));const a=g.before("render",F.findByProps("ScrollView").View,function(u){try{let e=w.findInReactTree(u,function(i){return i.key===".$UserProfileOverflow"});if(!e||!e.props||e.props.sheetKey!=="UserProfileOverflow")return;const s=e.props.content.props,d=l.optionLabels.map(Object.values).flat();if(s.options.some(function(i){return d.includes(i?.label)}))return;const f=Object.keys(e._owner.stateNode._keyChildMapping).find(function(i){return e._owner.stateNode._keyChildMapping[i]&&i.match(/(?<=\$UserProfile)\d+/)})?.slice?.(13);let D=+s.options?.[1]?.isDestructive;t.storage.ignore.users.includes(f)?(s.options?.[2]?.isDestructive&&D++,s.options.splice(D+1,0,{label:n("optionLabels.1"),onPress:function(){t.storage.ignore.users.splice(t.storage.ignore.users.findIndex(function(i){return i===f}),1),m.showToast(n("toastLabels.1").replaceAll("${user}",s.header.title)),s.hideActionSheet()}})):s.options.splice(D+1,0,{isDestructive:!0,label:n("optionLabels.0"),onPress:function(){t.storage.ignore.users.push(f),m.showToast(n("toastLabels.0").replaceAll("${user}",s.header.title)),s.hideActionSheet()}})}catch(e){console.error(e);let s=!1;try{s=a()}catch{s=!1}alert(`[NoDelete \u2192 context menu patch] failed. Patch ${s?"dis":"en"}abled
`+e.stack)}});this.patches.push(a)}catch(a){console.error(a),alert(`[NoDelete] dead
`+a.stack)}}};return h.default=S,Object.defineProperty(h,"__esModule",{value:!0}),h})({},vendetta.metro.common,vendetta.plugin,vendetta.storage,vendetta.ui.alerts,vendetta.ui.components,vendetta.ui.assets,vendetta.patcher,vendetta.metro,vendetta.utils,vendetta.ui.toasts);
