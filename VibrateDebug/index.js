(function(d){"use strict";const{ReactNative:r,stylesheet:g}=vendetta.metro.common,{getAssetIDByName:i}=vendetta.ui.assets,{Forms:f}=vendetta.ui.components,{FormRow:l,FormSwitch:L,FormRadio:B}=f,{hideActionSheet:y}=vendetta.metro.findByProps("openLazy","hideActionSheet"),{showSimpleActionSheet:R}=vendetta.metro.findByProps("showSimpleActionSheet"),c=g.createThemedStyleSheet({card:{backgroundColor:vendetta.ui.semanticColors?.BACKGROUND_SECONDARY,borderRadius:5},header:{padding:0,backgroundColor:vendetta.ui.semanticColors?.BACKGROUND_TERTIARY,borderTopLeftRadius:5,borderTopRightRadius:5},actions:{flexDirection:"row-reverse",alignItems:"center"},icon:{width:22,height:22,marginLeft:5,tintColor:vendetta.ui.semanticColors?.INTERACTIVE_NORMAL}});function v(e){return React.createElement(r.View,{style:[c.card,{marginTop:e.index!==0?10:0}]},React.createElement(l,{style:c.header,label:e.headerLabel,leading:e.headerIcon&&React.createElement(l.Icon,{source:i(e.headerIcon)}),trailing:e.button}),React.createElement(l,{label:e.descriptionLabel,trailing:React.createElement(r.View,{style:c.actions},e.overflowActions&&React.createElement(r.TouchableOpacity,{onPress:function(){return R({key:"CardOverflow",header:{title:e.overflowTitle,icon:e.headerIcon&&React.createElement(l.Icon,{style:{marginRight:8},source:i(e.headerIcon)}),onClose:function(){return y()}},options:e.overflowActions?.map(function(n){return{...n,icon:i(n.icon)}})})}},React.createElement(r.Image,{style:c.icon,source:i("ic_more_24px")})),e.actions?.map(function(n){let{icon:o,onPress:t}=n;return React.createElement(r.TouchableOpacity,{onPress:t},React.createElement(r.Image,{style:c.icon,source:i(o)}))}))}))}const{React:a,ReactNative:b}=vendetta.metro.common,{plugin:{storage:s},storage:{useProxy:w},ui:{alerts:{showInputAlert:E},toasts:{showToast:C},components:{Forms:P},assets:{getAssetIDByName:T}}}=vendetta;s.schemes=[];const u=vendetta.metro.findByProps("ButtonColors","ButtonLooks","ButtonSizes").default;function $(e){w(s);const n={height:5,margin:8};return a.createElement(a.Fragment,null,a.createElement(u,{style:n,text:"hey",color:"brand",size:"small",disabled:!1,onPress:function(o){return E({title:"New scheme",initialValue:"",placeholder:"Name",onConfirm:function(t){s.schemes.push({name:t}),C(`Created ${t}`,T("check")),alert(JSON.stringify(s.schemes,0,4))},confirmText:"Create",confirmColor:void 0,cancelText:"Cancel"})}}),a.createElement(b.ScrollView,null,s.schemes.map(function(o,t){return toggleValue,index,headerLabel,descriptionLabel,overflowActions,overflowTitle,actions,headerIcon,toggleType,onToggleChange,a.createElement(v,{index:t,headerLabel:o?.name,descriptionLabel:o?.description,headerIcon:"check",toggleValue:!1,toggleType:a.createElement(u,{style:n,color:"brand",text:"Run",size:"small",disabled:!1,onPress:function(){return o?.run?.()}})})})))}function I(e,n,o){if(!e.name||!e?.description)throw new Error(`No name(${e?.name}) or description(${e?.description}) in the passed command. (command name: ${e?.name})`);return e.displayName=n?.names?.[o]??e.name,e.displayDescription=n?.names?.[o]??e.description,e.options&&(e.options=e.options.map(function(t,m){if(!t?.name||!t?.description)throw new Error(`No name(${t?.name}) or description(${t?.description} in the option with index ${m}`);return t.displayName=n?.options?.[m]?.names?.[o]??t.name,t.displayDescription=n?.options?.[m]?.descriptions?.[o]??t.description,t})),e}const{logger:x,commands:{registerCommand:A},metro:{findByProps:D},plugin:{storage:N}}=vendetta,p=[],h={settings:$,onUnload:function(){return p.every(function(e){return!0})}};function S(e,n,o){return{content:N.test}}return h.onLoad=function(){p[0]=A(I({execute:function(e,n){return S()},name:"vibrate basic",description:"Start a basic vibrating scheme",applicationId:"1097969072022487110",inputType:"1",type:"1"}))},d.default=h,Object.defineProperty(d,"__esModule",{value:!0}),d})({});
