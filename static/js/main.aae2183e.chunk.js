(this["webpackJsonpyilbegan-website"]=this["webpackJsonpyilbegan-website"]||[]).push([[0],{23:function(e,t,i){},30:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},36:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i.n(n),s=i(7),c=i.n(s),o=i(17),r=i(2),l=i(3),d=i(5),A=i(4),u=(i(23),i(14)),h=i(15),m=i.n(h),j=(i(30),i(0)),p=function(e){Object(d.a)(i,e);var t=Object(A.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props,t=e.title,i=e.logo,n=e.children,a=e.position,s=e.onClose,c=e.onMinimize,o=e.onMaximize;return Object(j.jsx)(m.a,{defaultPosition:a,handle:".Window__header",bounds:"parent",children:Object(j.jsx)("div",{className:"Window",children:Object(j.jsxs)("div",{className:"Window__content",children:[Object(j.jsxs)("div",{className:"Window__header",children:[Object(j.jsxs)("div",{className:"Window__header-left",children:[Object(j.jsx)("img",{className:"Window__icon",src:i,alt:""}),Object(j.jsx)("div",{className:"Window__title",children:t})]}),Object(j.jsxs)("div",{className:"Window__header-right",children:[Object(j.jsx)("button",{className:"Window__header-minimize",onClick:c}),Object(j.jsx)("button",{className:"Window__header-maximize",onClick:o}),Object(j.jsx)("button",{className:"Window__header-close",onClick:s})]})]}),Object(j.jsx)("div",{className:"Window__separator"}),Object(j.jsx)("div",{className:"Window__container",children:n})]})})})}}]),i}(a.a.Component),b="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAgUlEQVQ4jdWSUQrEIAxEZ8SDebQ5WjxZ9qObrmAsXfvVByEiyTiRAA+hmfkTgQoArbWtZkkocZAEwM8wszRHHPUAviNshSQvoyV3h/v8JdldUMYikiB5Nlw1TgIjJKe8EksFthzEKzHK6ODKRc2sr+i9rx3cIVu4vwQyKoDfVr2SDxtLVQLgBFkzAAAAAElFTkSuQmCC",g=i(16),f={terminal:{fontSize:16,fontFamily:"More Perfect DOS VGA",letterSpacing:0,cursorStyle:"underline",cursorBlink:!0}},O="\x1b[95m",v="\x1b[39m",y="\r\nY:\\>",w="A short list of the most often used commands:\r\n<".concat(O,"HELP     ").concat(v,"> Show this message.\r\n<").concat(O,"WHOAMI   ").concat(v,"> Show information about me.\r\n<").concat(O,"DIR      ").concat(v,"> Show my recent activity.\r\n<").concat(O,"WMPLAYER ").concat(v,"> Open music player.\r\n<").concat(O,"CLS      ").concat(v,"> Clear screen.\r\n"),x=function(e){Object(d.a)(i,e);var t=Object(A.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.terminalRef.current&&this.terminal.loadWebfontAndOpen(this.terminalRef.current)}}]),i}(u.a),k=function(e){Object(d.a)(i,e);var t=Object(A.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).terminalRef=a.a.createRef(),n.state={input:""},n}return Object(l.a)(i,[{key:"componentDidMount",value:function(){var e=this.terminalRef.current.terminal;e.write("Microsoft(R) Windows 95\r\n   (C)Copyright Microsoft Corp 1981-1996.\r\n"),e.write(y)}},{key:"processCommand",value:function(e){var t=this.terminalRef.current.terminal;switch(e.toUpperCase()){case"HELP":t.write(w);break;case"WHOAMI":t.write("NAME\r\n    Evgeniy.\r\n\r\nSYNOPSIS\r\n    Fullstack developer from Russia.\r\n\r\nSUPPORTED FORMATS\r\n    *.py, *.js, *.html, *.css,\r\n    *.ts, *.scss, *.cpp, *.ino\r\n");break;case"DIR":break;case"WMPLAYER":this.props.openWindow("media_player");break;case"CLS":t.clear();break;default:t.write("Illegal command: ".concat(e,".\r\n"))}this.setState({input:""})}},{key:"onData",value:function(e){var t=e.charCodeAt(0),i=this.terminalRef.current.terminal,n=this.state.input;13===t&&this.state.input.length>0?(i.write("\r\n"),this.processCommand(n),this.terminalRef.current.terminal.write(y)):32<t<127&&(n+=e,i.write(e),this.setState({input:n}))}},{key:"render",value:function(){var e=this.props.closeWindow;return Object(j.jsx)(p,{title:"Terminal",logo:b,onClose:e,children:Object(j.jsx)("div",{style:{padding:2,backgroundColor:"black"},children:Object(j.jsx)(x,{ref:this.terminalRef,options:f.terminal,onData:this.onData.bind(this),addons:[new g]})})})}}]),i}(a.a.Component),_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAA9hAAAPYQGoP6dpAAAA6ElEQVQ4y5VTgQrFIAjM6L/qz2qwD6v/GvRUsmVzjCeMqLzbeZpz/0cfHwdYGaWUbpzBQuBMAgHmXHjfWp13tVbJcdd1uRAC78MKLjkjvSnKpZTUXkj8DS5DUn8tXkjO85xnXqfAJ3gPT3+nyzrrhYeKGKPygvLFA6WgLqYdR+FEArTWeBUjVzVhl0QkKQL6gv3qaCnABBoB3p6Uzu0iMK1pKWFtqamA6iXJJJMVsCNIFjuqa6aJIIwClmgbQJQMD0CZuIOfZYEiUSWMOe9vvYb5grAg0ANjvoWVKMW0Z8Ln6AkRdeAr9wd82Ha7V2KewwAAAABJRU5ErkJggg==",C=i.p+"static/media/media_player_image.72ef6531.gif",W=i.p+"static/media/risen.c51123b1.mp3",S=(i(33),i(10)),N=i(18),E=(i(34),["text","icon","children","className"]),M=function(e){Object(d.a)(i,e);var t=Object(A.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this.props,t=e.text,i=e.icon,n=(e.children,e.className),a=Object(N.a)(e,E),s=["Button",n];return Object(j.jsxs)("button",Object(S.a)(Object(S.a)({className:s.join(" ")},a),{},{children:[i&&Object(j.jsx)("img",{src:i,alt:"",style:{paddingRight:void 0!==t?4:0}}),Object(j.jsx)("div",{className:"Button__label",children:t})]}))}}]),i}(a.a.Component),B=function(e){Object(d.a)(i,e);var t=Object(A.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={isPlaying:!1,time:"00:00",canPlay:!1},n}return Object(l.a)(i,[{key:"componentDidMount",value:function(){this.initializeAudio()}},{key:"initializeAudio",value:function(){var e=this;this.audio=new Audio(W),this.audio.volume=.3,this.audio.loop=!0,this.audio.addEventListener("canplaythrough",(function(){return e.setState({canPlay:!0})})),this.audio.addEventListener("timeupdate",(function(){var t=e.audio.currentTime,i=Math.floor(t%60).toString().padStart(2,"0"),n=Math.floor(t/60).toString().padStart(2,"0");e.setState({time:"".concat(n,":").concat(i)})}))}},{key:"play",value:function(){this.setState({isPlaying:!0}),this.audio.play()}},{key:"pause",value:function(){this.setState({isPlaying:!1}),this.audio.pause()}},{key:"stop",value:function(){this.setState({isPlaying:!1}),this.audio.pause(),this.audio.currentTime=0}},{key:"render",value:function(){var e=this.state,t=e.isPlaying,i=e.time,n=e.canPlay,a=this.props.closeWindow;return Object(j.jsx)(p,{title:"Media Player",logo:_,onClose:a,children:Object(j.jsxs)("div",{className:"MediaPlayer",children:[Object(j.jsx)("img",{src:C,alt:"",className:"MediaPlayer__image"}),Object(j.jsxs)("div",{className:"MediaPlayer__bottom",children:[Object(j.jsxs)("div",{className:"MediaPlayer__timer",children:["[1] ",i]}),Object(j.jsxs)("div",{className:"MediaPlayer__control",children:[Object(j.jsx)("div",{className:"MediaPlayer__track",children:Object(j.jsx)("span",{children:"Terry\xa0A.\xa0Davis\xa0-\xa0Risen\xa0(Piano\xa0Cover\xa0by\xa0Dave\xa0Eddy)"})}),Object(j.jsxs)("div",{className:"MediaPlayer__buttons",children:[Object(j.jsx)(M,{style:{width:100,height:24},disabled:t||!n,onClick:this.play.bind(this),icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAO0lEQVQ4jWNgoBL4j4QpNoAsg7AZQJJB+AwgyiBiDMBrECkGYDWIHAP+D7gBZHsBK6BpNBIFqJqU6QsAolV7hYbr+hAAAAAASUVORK5CYII="}),Object(j.jsx)(M,{style:{height:24},disabled:!t,onClick:this.pause.bind(this),icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGklEQVQ4jWNgGIzgPxLGJzZqwKgBw90A+gIATrtHuRRaNmcAAAAASUVORK5CYII="}),Object(j.jsx)(M,{style:{height:24},disabled:!t,onClick:this.stop.bind(this),icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGElEQVQ4jWNgGEzgP4l41IBRA4arAQMDAJlmj3Eub8xCAAAAAElFTkSuQmCC"})]})]})]})]})})}}]),i}(a.a.Component),Q=function(e){Object(d.a)(i,e);var t=Object(A.a)(i);function i(e){var n;return Object(r.a)(this,i),(n=t.call(this,e)).state={openedWindows:["terminal"],time:n.getTime()},console.log(n.getTime()),n}return Object(l.a)(i,[{key:"getTime",value:function(){return(new Date).toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})}},{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.setState({time:e.getTime()})}),1e3)}},{key:"openWindow",value:function(e){this.state.openedWindows.includes(e)||this.setState({openedWindows:[e].concat(Object(o.a)(this.state.openedWindows))})}},{key:"closeWindow",value:function(e){var t=this.state.openedWindows.filter((function(t){return t!==e}));this.setState({openedWindows:t})}},{key:"render",value:function(){var e=this,t=this.state,i=t.openedWindows,n=t.time;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("div",{className:"App__desktop",children:[i.includes("terminal")&&Object(j.jsx)(k,{closeWindow:function(){return e.closeWindow("terminal")},openWindow:this.openWindow.bind(this)}),i.includes("media_player")&&Object(j.jsx)(B,{closeWindow:function(){return e.closeWindow("media_player")}})]}),Object(j.jsxs)("div",{className:"App__panel",children:[Object(j.jsx)(M,{style:{fontWeight:"bold",height:30,paddingLeft:4,paddingRight:4,marginLeft:2,marginRight:2},text:"Github",icon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAbElEQVQ4jb2SMQ7AMAgD8/9PX5eKIjBx1CFIEQs+MGGtS0F5v4USNBGjkCyiQ0iC1hUFoE8xjmsBGAsosALkLEVmkSHUAD5LfYmYX6ABKuQF5IzsPgCiYXEx+64Ae0huidtDGhocH5KLk5p9PDZ/yTdfhqhGAAAAAElFTkSuQmCC",onClick:function(){return window.open("https://github.com/yilbegan")}}),Object(j.jsx)("div",{className:"App__panel-separator"}),Object(j.jsx)("img",{src:b,alt:"",style:{paddingLeft:6,paddingRight:6},onClick:function(){return e.openWindow("terminal")}}),Object(j.jsx)("img",{src:_,alt:"",style:{paddingLeft:6,paddingRight:6},onClick:function(){return e.openWindow("media_player")}}),Object(j.jsx)("div",{className:"App__panel-separator"}),i.includes("terminal")&&Object(j.jsx)(M,{className:"App__panel-button",text:"Terminal",icon:b}),i.includes("media_player")&&Object(j.jsx)(M,{className:"App__panel-button",text:"Media Player",icon:_}),Object(j.jsx)("div",{className:"App__panel-separator",style:{marginLeft:"auto"}}),Object(j.jsx)("div",{className:"App__panel-clock",children:n})]})]})}}]),i}(a.a.Component),R=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,37)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),n(e),a(e),s(e),c(e)}))};i(35);c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(Q,{})}),document.getElementById("root")),R()}},[[36,1,2]]]);
//# sourceMappingURL=main.aae2183e.chunk.js.map