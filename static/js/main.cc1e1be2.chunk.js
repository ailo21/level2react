(this.webpackJsonplevel2react=this.webpackJsonplevel2react||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(7),o=a.n(c),s=(a(13),a(14),[{id:"1",header:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",composition:"\u0441 \u0444\u0443\u0430-\u0433\u0440\u0430",description:["10 \u043f\u043e\u0440\u0446\u0438\u0439","\u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"],volume_langth:"0,5",volume_unit:"\u043a\u0433",soldout:!1},{id:"2",header:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",composition:"\u0441 \u0440\u044b\u0431\u043e\u0439",description:["40 \u043f\u043e\u0440\u0446\u0438\u0439","2 \u043c\u044b\u0448\u0438 \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"],volume_langth:"2",volume_unit:"\u043a\u0433",soldout:!1},{id:"3",header:"\u0421\u043a\u0430\u0437\u043e\u0447\u043d\u043e\u0435 \u0437\u0430\u043c\u043e\u0440\u0441\u043a\u043e\u0435 \u044f\u0441\u0442\u0432\u043e",title:"\u041d\u044f\u043c\u0443\u0448\u043a\u0430",composition:"\u0441 \u043a\u0443\u0440\u0438\u0446\u0435\u0439",description:["10 \u043f\u043e\u0440\u0446\u0438\u0439","\u043c\u044b\u0448\u044c \u0432 \u043f\u043e\u0434\u0430\u0440\u043e\u043a"],volume_langth:"5",volume_unit:"\u043a\u0433",soldout:!0}]),i=a(1),r=a(2),u=a(5),m=a(4),d=a(3),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={selected:!1},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(r.a)(a,[{key:"handleClick",value:function(){console.log(this.props.pack.soldout),this.props.pack.soldout||this.setState({selected:!this.state.selected})}},{key:"render",value:function(){var e=this.props.pack,t=e.description.map((function(e,t){return l.a.createElement("span",{key:t},e)})),a=e.soldout?"pack is-soldout":this.state.selected?"pack is-selected":"pack",n=e.soldout?l.a.createElement("span",null,"\u041f\u0435\u0447\u0430\u043b\u044c\u043a\u0430, \u0441 \u043a\u0443\u0440\u043e\u0439 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f."):this.state.selected?l.a.createElement("span",null,"\u0413\u043e\u043b\u043e\u0432\u044b \u0449\u0443\u0447\u044c\u0438 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0434\u0430 \u0441\u0432\u0435\u0436\u0430\u0439\u0448\u0430\u044f \u0441\u0451\u043c\u0433\u0443\u0448\u043a\u0430."):l.a.createElement("span",null,"\u0427\u0435\u0433\u043e \u0441\u0438\u0434\u0438\u0448\u044c? \u041f\u043e\u0440\u0430\u0434\u0443\u0439 \u043a\u043e\u0442\u044d, ",l.a.createElement("span",{className:"pack_buy",onClick:this.handleClick},"\u043a\u0443\u043f\u0438"));return l.a.createElement("div",{key:e.id,className:a,onClick:this.handleClick},l.a.createElement("div",{className:"pack_header"},l.a.createElement("span",null,e.header)),l.a.createElement("div",{className:"pack_content"},l.a.createElement("h4",null,e.title),l.a.createElement("span",{className:"pack_postname"},e.composition),l.a.createElement("p",null,t),l.a.createElement("div",{className:"volume"},l.a.createElement("div",{className:"volume_lemgth"},e.volume_langth),l.a.createElement("div",{className:"volume_unit"},e.volume_unit))),l.a.createElement("div",{className:"pack_bottom"},n))}}]),a}(n.PureComponent),h=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.packs.map((function(e){return l.a.createElement(p,{pack:e,key:e.id})}));return l.a.createElement("div",{className:"pack-list"},e)}}]),a}(n.PureComponent);var v=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"packs-block"},l.a.createElement("h2",null,"\u0422\u044b \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043a\u043e\u0440\u043c\u0438\u043b \u043a\u043e\u0442\u0430?"),l.a.createElement(h,{packs:s})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.cc1e1be2.chunk.js.map