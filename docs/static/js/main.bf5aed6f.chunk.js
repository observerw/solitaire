(this["webpackJsonpim-lying"]=this["webpackJsonpim-lying"]||[]).push([[0],{101:function(e,t,a){},134:function(e,t,a){e.exports=a.p+"static/media/Hayasaka.9f45a1b0.jpg"},164:function(e,t,a){e.exports=a(260)},170:function(e,t,a){},171:function(e,t,a){},202:function(e,t,a){},255:function(e,t,a){},256:function(e,t,a){},257:function(e,t,a){},258:function(e,t,a){},260:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=(a(101),a(9)),l=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(24),s=a.n(o),i=a(78),u=a(54),m=a(30),h=a(31),p=a(33),d=a(32),E=a(261),f=a(126),v=a(263),b=a(265),g=(a(170),a(171),a(266)),w=a(267),y=a(268),N=a(160),k=E.a.Header,x=E.a.Footer,j={color:"white","margin-left":"40px","font-size":"20px"};function C(){return r.a.createElement(k,{className:"NavBar"},r.a.createElement(N.a,{placeholder:"\u641c\u7d22",className:"NavBarInput"}),r.a.createElement("div",{className:"NavBarIcon"},r.a.createElement("a",{href:"/"},r.a.createElement(g.a,{style:j})),r.a.createElement("a",{href:"/homepage"},r.a.createElement(w.a,{style:j})),r.a.createElement("a",null,r.a.createElement(y.a,{style:j}))))}function O(){return r.a.createElement(x,{className:"Footer"},"\u6211\u5728\u8bf4\u8c0e 2020.9.5")}a(134);var M=a(269),I=a(270),S=(a(202),a(203),a(264)),D=a(59),F=a.n(D),T=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).tags=e.tags||[],n.style=n.props.class?{}:e.style||{"background-color":"white"},n.content||(n.style["text-align"]="center"),n}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Card Node "+this.props.class,style:this.style,onClick:this.props.onClick},r.a.createElement("img",{src:this.props.image,onClick:this.props.imageClick}),r.a.createElement("h1",null,this.props.title),r.a.createElement("p",null,this.props.content),this.props.children,r.a.createElement("div",{className:"NodeTag"},Array.from(new Set(this.tags)).map((function(e){return r.a.createElement(S.a,null,e)}))))}}]),a}(r.a.Component);function H(e){return r.a.createElement("a",{href:e.url,style:{color:"black",cursor:"pointer"}},r.a.createElement(T,e))}var R=a(158),_=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Author"},r.a.createElement(T,{title:this.props.name,content:this.props.intro,image:F.a,imageClick:function(){window.location.href="/homepage/"+e.props.ID}},r.a.createElement("a",{style:{display:"block"}},"\u5173\u6ce8"),r.a.createElement("a",{style:{display:"block"}},"\u9080\u8bf7ta\u4e00\u8d77\u521b\u4f5c"),this.props.children))}}]),a}(r.a.Component),P=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"get";return fetch("/"+n+"/"+e+"/"+t+"?"+a).then((function(e){return e.json()})).then((function(e){return e.mes.length>0?(console.log(e.mes),{}):e.data})).catch((function(e){console.log("error:"+e)}))},A=(E.a.Header,E.a.Content),B=(E.a.Footer,function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).ID=n.props.match.params.articleID,n.nextNodes=[{title:"\u6d4b\u8bd5",content:"2"},{title:"\u6d4b\u8bd5",content:"2"},{title:"\u6d4b\u8bd5",content:"2"},{title:"\u6d4b\u8bd5",content:"2"},{title:"\u6d4b\u8bd5",content:"2"},{title:"\u6d4b\u8bd5",content:"2"}],n.state={isShowNext:!1,author:{}},n}return Object(h.a)(a,[{key:"_getArticleData",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P("node",this.ID,"mode=simple");case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:a=Object(i.a)(t.children);try{for(a.s();!(n=a.n()).done;)r=n.value,this.nextNodes.push(P("node",r))}catch(c){a.e(c)}finally{a.f()}this.setState({time:t.time,title:t.title,content:t.content,author:t.author});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getArticleData();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return console.log(this.state),r.a.createElement("div",{className:"Read"},r.a.createElement(E.a,{className:"layout"},r.a.createElement(C,null),r.a.createElement(A,{style:{padding:"50px 50px"}},r.a.createElement(v.a,null,r.a.createElement(b.a,{span:4},r.a.createElement("div",{className:"ReadSidebar"},r.a.createElement(T,{title:"\u5f53\u524d\u6240\u5728",content:"\u6b66\u4fa0\u533a",class:"ReadSidebarNode"}),r.a.createElement(T,{title:"\u5317\u4eac\u65f6\u95f4",content:this.state.time,class:"ReadSidebarNode",style:{"text-align":"center"}}))),r.a.createElement(b.a,{span:16},r.a.createElement("div",{className:"Card ReadContent"},r.a.createElement("h1",null,this.props.match.params.articleName),r.a.createElement("p",null,this.state.content||"\u9c81\u9547\u7684\u9152\u5e97\u7684\u683c\u5c40\uff0c\u662f\u548c\u522b\u5904\u4e0d\u540c\u7684\uff1a\u90fd\u662f\u5f53\u8857\u4e00\u4e2a\u66f2\u5c3a\u5f62\u7684\u5927\u67dc\u53f0\uff0c\u67dc\u91cc\u9762\u9884\u5907\u7740\u70ed\u6c34\uff0c\u53ef\u4ee5\u968f\u65f6\u6e29\u9152\u3002\u505a\u5de5\u7684\u4eba\uff0c\u508d\u5348\u508d\u665a\u6563\u4e86\u5de5\uff0c\u6bcf\u6bcf\u82b1\u56db\u6587\u94dc\u94b1\uff0c\u4e70\u4e00\u7897\u9152\uff0c\u2014\u2014\u8fd9\u662f\u4e8c\u5341\u591a\u5e74\u524d\u7684\u4e8b\uff0c\u73b0\u5728\u6bcf\u7897\u8981\u6da8\u5230\u5341\u6587\uff0c\u2014\u2014\u9760\u67dc\u5916\u7ad9\u7740\uff0c\u70ed\u70ed\u7684\u559d\u4e86\u4f11\u606f\uff1b\u5018\u80af\u591a\u82b1\u4e00\u6587\uff0c\u4fbf\u53ef\u4ee5\u4e70\u4e00\u789f\u76d0\u716e\u7b0b\uff0c\u6216\u8005\u8334\u9999\u8c46\uff0c\u505a\u4e0b\u9152\u7269\u4e86\uff0c\u5982\u679c\u51fa\u5230\u5341\u51e0\u6587\uff0c\u90a3\u5c31\u80fd\u4e70\u4e00\u6837\u8364\u83dc\uff0c\u4f46\u8fd9\u4e9b\u987e\u5ba2\uff0c\u591a\u662f\u77ed\u8863\u5e2e\u2474\uff0c\u5927\u62b5\u6ca1\u6709\u8fd9\u6837\u9614\u7ef0\u2475\u3002\u53ea\u6709\u7a7f\u957f\u886b\u7684\uff0c\u624d\u8e31\u8fdb\u5e97\u9762\u9694\u58c1\u7684\u623f\u5b50\u91cc\uff0c\u8981\u9152\u8981\u83dc\uff0c\u6162\u6162\u5730\u5750\u559d\u3002\n\u6211\u4ece\u5341\u4e8c\u5c81\u8d77\uff0c\u4fbf\u5728\u9547\u53e3\u7684\u54b8\u4ea8\u9152\u5e97\u91cc\u5f53\u4f19\u8ba1\uff0c\u638c\u67dc\u8bf4\uff0c\u6837\u5b50\u592a\u50bb\uff0c\u6015\u4f8d\u5019\u4e0d\u4e86\u957f\u886b\u4e3b\u987e\uff0c\u5c31\u5728\u5916\u9762\u505a\u70b9\u4e8b\u7f62\u3002\u5916\u9762\u7684\u77ed\u8863\u4e3b\u987e\uff0c\u867d\u7136\u5bb9\u6613\u8bf4\u8bdd\uff0c\u4f46\u5520\u5520\u53e8\u53e8\u7f20\u5939\u4e0d\u6e05\u7684\u4e5f\u5f88\u4e0d\u5c11\u3002\u4ed6\u4eec\u5f80\u5f80\u8981\u4eb2\u773c\u770b\u7740\u9ec4\u9152\u4ece\u575b\u5b50\u91cc\u8200\u51fa\uff0c\u770b\u8fc7\u58f6\u5b50\u5e95\u91cc\u6709\u6c34\u6ca1\u6709\uff0c\u53c8\u4eb2\u770b\u5c06\u58f6\u5b50\u653e\u5728\u70ed\u6c34\u91cc\uff0c\u7136\u540e\u653e\u5fc3\uff1a\u5728\u8fd9\u4e25\u91cd\u76d1\u7763\u4e0b\uff0c\u7fbc\u2476\u6c34\u4e5f\u5f88\u4e3a\u96be\u3002\u6240\u4ee5\u8fc7\u4e86\u51e0\u5929\uff0c\u638c\u67dc\u53c8\u8bf4\u6211\u5e72\u4e0d\u4e86\u8fd9\u4e8b\u3002\u5e78\u4e8f\u8350\u5934\u2477\u7684\u60c5\u9762\u5927\uff0c\u8f9e\u9000\u4e0d\u5f97\uff0c\u4fbf\u6539\u4e3a\u4e13\u7ba1\u6e29\u9152\u7684\u4e00\u79cd\u65e0\u804a\u804c\u52a1\u4e86\u3002\n\u3000\u3000\u6211\u4ece\u6b64\u4fbf\u6574\u5929\u7684\u7ad9\u5728\u67dc\u53f0\u91cc\uff0c\u4e13\u7ba1\u6211\u7684\u804c\u52a1\u3002\u867d\u7136\u6ca1\u6709\u4ec0\u4e48\u5931\u804c\uff0c\u4f46\u603b\u89c9\u5f97\u6709\u4e9b\u5355\u8c03\uff0c\u6709\u4e9b\u65e0\u804a\u3002\u638c\u67dc\u662f\u4e00\u526f\u51f6\u8138\u5b54\uff0c\u4e3b\u987e\u4e5f\u6ca1\u6709\u597d\u58f0\u6c14\u2478\uff0c\u6559\u4eba\u6d3b\u6cfc\u4e0d\u5f97\uff1b\u53ea\u6709\u5b54\u4e59\u5df1\u5230\u5e97\uff0c\u624d\u53ef\u4ee5\u7b11\u51e0\u58f0\uff0c\u6240\u4ee5\u81f3\u4eca\u8fd8\u8bb0\u5f97\u3002\n\u3000\u3000\u5b54\u4e59\u5df1\u662f\u7ad9\u7740\u559d\u9152\u800c\u7a7f\u957f\u886b\u7684\u552f\u4e00\u7684\u4eba\u3002\u4ed6\u8eab\u6750\u5f88\u9ad8\u5927\uff1b\u9752\u767d\u8138\u8272\uff0c\u76b1\u7eb9\u95f4\u65f6\u5e38\u5939\u4e9b\u4f24\u75d5\uff1b\u4e00\u90e8\u4e71\u84ec\u84ec\u7684\u82b1\u767d\u7684\u80e1\u5b50\u3002\u7a7f\u7684\u867d\u7136\u662f\u957f\u886b\uff0c\u53ef\u662f\u53c8\u810f\u53c8\u7834\uff0c\u4f3c\u4e4e\u5341\u591a\u5e74\u6ca1\u6709\u8865\uff0c\u4e5f\u6ca1\u6709\u6d17\u3002\u4ed6\u5bf9\u4eba\u8bf4\u8bdd\uff0c\u603b\u662f\u6ee1\u53e3\u4e4b\u4e4e\u8005\u4e5f\u2479\uff0c\u6559\u4eba\u534a\u61c2\u4e0d\u61c2\u7684\u3002\u56e0\u4e3a\u4ed6\u59d3\u5b54\uff0c\u522b\u4eba\u4fbf\u4ece\u63cf\u7ea2\u7eb8\u4e0a\u7684\u201c\u4e0a\u5927\u4eba\u5b54\u4e59\u5df1\u247a\u201d\u8fd9\u534a\u61c2\u4e0d\u61c2\u7684\u8bdd\u91cc\uff0c\u66ff\u4ed6\u53d6\u4e0b\u4e00\u4e2a\u7ef0\u53f7\uff0c\u53eb\u4f5c\u5b54\u4e59\u5df1\u3002\u5b54\u4e59\u5df1\u4e00\u5230\u5e97\uff0c\u6240\u6709\u559d\u9152\u7684\u4eba\u4fbf\u90fd\u770b\u7740\u4ed6\u7b11\uff0c\u6709\u7684\u53eb\u9053\uff0c\u201c\u5b54\u4e59\u5df1\uff0c\u4f60\u8138\u4e0a\u53c8\u6dfb\u4e0a\u65b0\u4f24\u75a4\u4e86\uff01\u201d\u4ed6\u4e0d\u56de\u7b54\uff0c\u5bf9\u67dc\u91cc\u8bf4\uff0c\u201c\u6e29\u4e24\u7897\u9152\uff0c\u8981\u4e00\u789f\u8334\u9999\u8c46\u3002\u201d\u4fbf\u6392\u51fa\u4e5d\u6587\u5927\u94b1\u3002\u4ed6\u4eec\u53c8\u6545\u610f\u7684\u9ad8\u58f0\u56b7\u9053\uff0c\u201c\u4f60\u4e00\u5b9a\u53c8\u5077\u4e86\u4eba\u5bb6\u7684\u4e1c\u897f\u4e86\uff01\u201d\u5b54\u4e59\u5df1\u7741\u5927\u773c\u775b\u8bf4\uff0c\u201c\u4f60\u600e\u4e48\u8fd9\u6837\u51ed\u7a7a\u6c61\u4eba\u6e05\u767d\u2026\u2026\u201d\u201c\u4ec0\u4e48\u6e05\u767d\uff1f\u6211\u524d\u5929\u4eb2\u773c\u89c1\u4f60\u5077\u4e86\u4f55\u5bb6\u7684\u4e66\uff0c\u540a\u7740\u6253\u3002\u201d\u5b54\u4e59\u5df1\u4fbf\u6da8\u7ea2\u4e86\u8138\uff0c\u989d\u4e0a\u7684\u9752\u7b4b\u6761\u6761\u7efd\u51fa\uff0c\u4e89\u8fa9\u9053\uff0c\u201c\u7a83\u4e66\u4e0d\u80fd\u7b97\u5077\u2026\u2026\u7a83\u4e66\uff01\u2026\u2026\u8bfb\u4e66\u4eba\u7684\u4e8b\uff0c\u80fd\u7b97\u5077\u4e48\uff1f\u201d\u63a5\u8fde\u4fbf\u662f\u96be\u61c2\u7684\u8bdd\uff0c\u4ec0\u4e48\u201c\u541b\u5b50\u56fa\u7a77\u247b\u201d\uff0c\u4ec0\u4e48\u201c\u8005\u4e4e\u201d\u4e4b\u7c7b\uff0c\u5f15\u5f97\u4f17\u4eba\u90fd\u54c4\u7b11\u8d77\u6765\uff1a\u5e97\u5185\u5916\u5145\u6ee1\u4e86\u5feb\u6d3b\u7684\u7a7a\u6c14\u3002\n\u3000\u3000\u542c\u4eba\u5bb6\u80cc\u5730\u91cc\u8c08\u8bba\uff0c\u5b54\u4e59\u5df1\u539f\u6765\u4e5f\u8bfb\u8fc7\u4e66\uff0c\u4f46\u7ec8\u4e8e\u6ca1\u6709\u8fdb\u5b66\u247c\uff0c\u53c8\u4e0d\u4f1a\u8425\u751f\u247d\uff1b\u4e8e\u662f\u6108\u8fc7\u6108\u7a77\uff0c\u5f04\u5230\u5c06\u8981\u8ba8\u996d\u4e86\u3002\u5e78\u800c\u5199\u5f97\u4e00\u7b14\u597d\u5b57\uff0c\u4fbf\u66ff\u4eba\u5bb6\u949e\u247e\u949e\u4e66\uff0c\u6362\u4e00\u7897\u996d\u5403\u3002\u53ef\u60dc\u4ed6\u53c8\u6709\u4e00\u6837\u574f\u813e\u6c14\uff0c\u4fbf\u662f\u597d\u559d\u61d2\u505a\u3002\u5750\u4e0d\u5230\u51e0\u5929\uff0c\u4fbf\u8fde\u4eba\u548c\u4e66\u7c4d\u7eb8\u5f20\u7b14\u781a\uff0c\u4e00\u9f50\u5931\u8e2a\u3002\u5982\u662f\u51e0\u6b21\uff0c\u53eb\u4ed6\u6284\u4e66\u7684\u4eba\u4e5f\u6ca1\u6709\u4e86\u3002\u5b54\u4e59\u5df1\u6ca1\u6709\u6cd5\uff0c\u4fbf\u514d\u4e0d\u4e86\u5076\u7136\u505a\u4e9b\u5077\u7a83\u7684\u4e8b\u3002\u4f46\u4ed6\u5728\u6211\u4eec\u5e97\u91cc\uff0c\u54c1\u884c\u5374\u6bd4\u522b\u4eba\u90fd\u597d\uff0c\u5c31\u662f\u4ece\u4e0d\u62d6\u6b20\uff1b\u867d\u7136\u95f4\u6216\u6ca1\u6709\u73b0\u94b1\uff0c\u6682\u65f6\u8bb0\u5728\u7c89\u677f\u4e0a\uff0c\u4f46\u4e0d\u51fa\u4e00\u6708\uff0c\u5b9a\u7136\u8fd8\u6e05\uff0c\u4ece\u7c89\u677f\u4e0a\u62ed\u53bb\u4e86\u5b54\u4e59\u5df1\u7684\u540d\u5b57\u3002\n\u3000\u3000\u5b54\u4e59\u5df1\u559d\u8fc7\u534a\u7897\u9152\uff0c\u6da8\u7ea2\u7684\u8138\u8272\u6e10\u6e10\u590d\u4e86\u539f\uff0c\u65c1\u4eba\u4fbf\u53c8\u95ee\u9053\uff0c\u201c\u5b54\u4e59\u5df1\uff0c\u4f60\u5f53\u771f\u8ba4\u8bc6\u5b57\u4e48\uff1f\u201d\u5b54\u4e59\u5df1\u770b\u7740\u95ee\u4ed6\u7684\u4eba\uff0c\u663e\u51fa\u4e0d\u5c51\u7f6e\u8fa9\u7684\u795e\u6c14\u3002\u4ed6\u4eec\u4fbf\u63a5\u7740\u8bf4\u9053\uff0c\u201c\u4f60\u600e\u7684\u8fde\u534a\u4e2a\u79c0\u624d\u4e5f\u635e\u4e0d\u5230\u5462\uff1f\u201d\u5b54\u4e59\u5df1\u7acb\u523b\u663e\u51fa\u9893\u5510\u4e0d\u5b89\u6a21\u6837\uff0c\u8138\u4e0a\u7b3c\u4e0a\u4e86\u4e00\u5c42\u7070\u8272\uff0c\u5634\u91cc\u8bf4\u4e9b\u8bdd\uff1b\u8fd9\u56de\u53ef\u662f\u5168\u662f\u4e4b\u4e4e\u8005\u4e5f\u4e4b\u7c7b\uff0c\u4e00\u4e9b\u4e0d\u61c2\u4e86\u3002\u5728\u8fd9\u65f6\u5019\uff0c\u4f17\u4eba\u4e5f\u90fd\u54c4\u7b11\u8d77\u6765\uff1a\u5e97\u5185\u5916\u5145\u6ee1\u4e86\u5feb\u6d3b\u7684\u7a7a\u6c14\u3002\n\u3000\u3000\u5728\u8fd9\u4e9b\u65f6\u5019\uff0c\u6211\u53ef\u4ee5\u9644\u548c\u7740\u7b11\uff0c\u638c\u67dc\u662f\u51b3\u4e0d\u8d23\u5907\u7684\u3002\u800c\u4e14\u638c\u67dc\u89c1\u4e86\u5b54\u4e59\u5df1\uff0c\u4e5f\u6bcf\u6bcf\u8fd9\u6837\u95ee\u4ed6\uff0c\u5f15\u4eba\u53d1\u7b11\u3002\u5b54\u4e59\u5df1\u81ea\u5df1\u77e5\u9053\u4e0d\u80fd\u548c\u4ed6\u4eec\u8c08\u5929\uff0c\u4fbf\u53ea\u597d\u5411\u5b69\u5b50\u8bf4\u8bdd\u3002\u6709\u4e00\u56de\u5bf9\u6211\u8bf4\u9053\uff0c\u201c\u4f60\u8bfb\u8fc7\u4e66\u4e48\uff1f\u201d\u6211\u7565\u7565\u70b9\u4e00\u70b9\u5934\u3002\u4ed6\u8bf4\uff0c\u201c\u8bfb\u8fc7\u4e66\uff0c\u2026\u2026\u6211\u4fbf\u8003\u4f60\u4e00\u8003\u3002\u8334\u9999\u8c46\u7684\u8334\u5b57\uff0c\u600e\u6837\u5199\u7684\uff1f\u201d\u6211\u60f3\uff0c\u8ba8\u996d\u4e00\u6837\u7684\u4eba\uff0c\u4e5f\u914d\u8003\u6211\u4e48\uff1f\u4fbf\u56de\u8fc7\u8138\u53bb\uff0c\u4e0d\u518d\u7406\u4f1a\u3002\u5b54\u4e59\u5df1\u7b49\u4e86\u8bb8\u4e45\uff0c\u5f88\u6073\u5207\u7684\u8bf4\u9053\uff0c\u201c\u4e0d\u80fd\u5199\u7f62\uff1f\u2026\u2026\u6211\u6559\u7ed9\u4f60\uff0c\u8bb0\u7740\uff01\u8fd9\u4e9b\u5b57\u5e94\u8be5\u8bb0\u7740\u3002\u5c06\u6765\u505a\u638c\u67dc\u7684\u65f6\u5019\uff0c\u5199\u8d26\u8981\u7528\u3002\u201d\u6211\u6697\u60f3\u6211\u548c\u638c\u67dc\u7684\u7b49\u7ea7\u8fd8\u5f88\u8fdc\u5462\uff0c\u800c\u4e14\u6211\u4eec\u638c\u67dc\u4e5f\u4ece\u4e0d\u5c06\u8334\u9999\u8c46\u4e0a\u8d26\uff1b\u53c8\u597d\u7b11\uff0c\u53c8\u4e0d\u8010\u70e6\uff0c\u61d2\u61d2\u7684\u7b54\u4ed6\u9053\uff0c\u201c\u8c01\u8981\u4f60\u6559\uff0c\u4e0d\u662f\u8349\u5934\u5e95\u4e0b\u4e00\u4e2a\u6765\u56de\u7684\u56de\u5b57\u4e48\uff1f\u201d\u5b54\u4e59\u5df1\u663e\u51fa\u6781\u9ad8\u5174\u7684\u6837\u5b50\uff0c\u5c06\u4e24\u4e2a\u6307\u5934\u7684\u957f\u6307\u7532\u6572\u7740\u67dc\u53f0\uff0c\u70b9\u5934\u8bf4\uff0c\u201c\u5bf9\u5440\u5bf9\u5440\uff01\u2026\u2026\u56de\u5b57\u6709\u56db\u6837\u5199\u6cd5\u247f\uff0c\u4f60\u77e5\u9053\u4e48\uff1f\u201d\u6211\u6108\u4e0d\u8010\u70e6\u4e86\uff0c\u52aa\u7740\u5634\u8d70\u8fdc\u3002\u5b54\u4e59\u5df1\u521a\u7528\u6307\u7532\u8638\u4e86\u9152\uff0c\u60f3\u5728\u67dc\u4e0a\u5199\u5b57\uff0c\u89c1\u6211\u6beb\u4e0d\u70ed\u5fc3\uff0c\u4fbf\u53c8\u53f9\u4e00\u53e3\u6c14\uff0c\u663e\u51fa\u6781\u60cb\u60dc\u7684\u6837\u5b50\u3002\n\u3000\u3000\u6709\u51e0\u56de\uff0c\u90bb\u5c45\u5b69\u5b50\u542c\u5f97\u7b11\u58f0\uff0c\u4e5f\u8d76\u70ed\u95f9\uff0c\u56f4\u4f4f\u4e86\u5b54\u4e59\u5df1\u3002\u4ed6\u4fbf\u7ed9\u4ed6\u4eec\u8334\u9999\u8c46\u5403\uff0c\u4e00\u4eba\u4e00\u9897\u3002\u5b69\u5b50\u5403\u5b8c\u8c46\uff0c\u4ecd\u7136\u4e0d\u6563\uff0c\u773c\u775b\u90fd\u671b\u7740\u789f\u5b50\u3002\u5b54\u4e59\u5df1\u7740\u4e86\u614c\uff0c\u4f38\u5f00\u4e94\u6307\u5c06\u789f\u5b50\u7f69\u4f4f\uff0c\u5f2f\u8170\u4e0b\u53bb\u8bf4\u9053\uff0c\u201c\u4e0d\u591a\u4e86\uff0c\u6211\u5df2\u7ecf\u4e0d\u591a\u4e86\u3002\u201d\u76f4\u8d77\u8eab\u53c8\u770b\u4e00\u770b\u8c46\uff0c\u81ea\u5df1\u6447\u5934\u8bf4\uff0c\u201c\u4e0d\u591a\u4e0d\u591a\uff01\u591a\u4e4e\u54c9\uff1f\u4e0d\u591a\u4e5f\u2480\u3002\u201d\u4e8e\u662f\u8fd9\u4e00\u7fa4\u5b69\u5b50\u90fd\u5728\u7b11\u58f0\u91cc\u8d70\u6563\u4e86\u3002\n\u3000\u3000\u5b54\u4e59\u5df1\u662f\u8fd9\u6837\u7684\u4f7f\u4eba\u5feb\u6d3b\uff0c\u53ef\u662f\u6ca1\u6709\u4ed6\uff0c\u522b\u4eba\u4e5f\u4fbf\u8fd9\u4e48\u8fc7\u3002\n\u3000\u3000\u6709\u4e00\u5929\uff0c\u5927\u7ea6\u662f\u4e2d\u79cb\u524d\u7684\u4e24\u4e09\u5929\uff0c\u638c\u67dc\u6b63\u5728\u6162\u6162\u7684\u7ed3\u8d26\uff0c\u53d6\u4e0b\u7c89\u677f\uff0c\u5ffd\u7136\u8bf4\uff0c\u201c\u5b54\u4e59\u5df1\u957f\u4e45\u6ca1\u6709\u6765\u4e86\u3002\u8fd8\u6b20\u5341\u4e5d\u4e2a\u94b1\u5462\uff01\u201d\u6211\u624d\u4e5f\u89c9\u5f97\u4ed6\u7684\u786e\u957f\u4e45\u6ca1\u6709\u6765\u4e86\u3002\u4e00\u4e2a\u559d\u9152\u7684\u4eba\u8bf4\u9053\uff0c\u201c\u4ed6\u600e\u4e48\u4f1a\u6765\uff1f\u2026\u2026\u4ed6\u6253\u6298\u4e86\u817f\u4e86\u3002\u201d\u638c\u67dc\u8bf4\uff0c\u201c\u54e6\uff01\u201d\u201c\u4ed6\u603b\u4ecd\u65e7\u662f\u5077\u3002\u8fd9\u4e00\u56de\uff0c\u662f\u81ea\u5df1\u53d1\u660f\uff0c\u7adf\u5077\u5230\u4e01\u4e3e\u4eba\u5bb6\u91cc\u53bb\u4e86\u3002\u4ed6\u5bb6\u7684\u4e1c\u897f\uff0c\u5077\u5f97\u7684\u4e48\uff1f\u201d\u201c\u540e\u6765\u600e\u4e48\u6837\uff1f\u201d\u201c\u600e\u4e48\u6837\uff1f\u5148\u5199\u670d\u8fa9\u2481\uff0c\u540e\u6765\u662f\u6253\uff0c\u6253\u4e86\u5927\u534a\u591c\uff0c\u518d\u6253\u6298\u4e86\u817f\u3002\u201d\u201c\u540e\u6765\u5462\uff1f\u201d\u201c\u540e\u6765\u6253\u6298\u4e86\u817f\u4e86\u3002\u201d\u201c\u6253\u6298\u4e86\u600e\u6837\u5462\uff1f\u201d\u201c\u600e\u6837\uff1f\u2026\u2026\u8c01\u6653\u5f97\uff1f\u8bb8\u662f\u6b7b\u4e86\u3002\u201d\u638c\u67dc\u4e5f\u4e0d\u518d\u95ee\uff0c\u4ecd\u7136\u6162\u6162\u7684\u7b97\u4ed6\u7684\u8d26\u3002\n\u3000\u3000\u4e2d\u79cb\u4e4b\u540e\uff0c\u79cb\u98ce\u662f\u4e00\u5929\u51c9\u6bd4\u4e00\u5929\uff0c\u770b\u770b\u5c06\u8fd1\u521d\u51ac\uff1b\u6211\u6574\u5929\u7684\u9760\u7740\u706b\uff0c\u4e5f\u987b\u7a7f\u4e0a\u68c9\u8884\u4e86\u3002\u4e00\u5929\u7684\u4e0b\u534a\u5929\uff0c\u6ca1\u6709\u4e00\u4e2a\u987e\u5ba2\uff0c\u6211\u6b63\u5408\u4e86\u773c\u5750\u7740\u3002\u5ffd\u7136\u95f4\u542c\u5f97\u4e00\u4e2a\u58f0\u97f3\uff0c\u201c\u6e29\u4e00\u7897\u9152\u3002\u201d\u8fd9\u58f0\u97f3\u867d\u7136\u6781\u4f4e\uff0c\u5374\u5f88\u8033\u719f\u3002\u770b\u65f6\u53c8\u5168\u6ca1\u6709\u4eba\u3002\u7ad9\u8d77\u6765\u5411\u5916\u4e00\u671b\uff0c\u90a3\u5b54\u4e59\u5df1\u4fbf\u5728\u67dc\u53f0\u4e0b\u5bf9\u4e86\u95e8\u69db\u5750\u7740\u3002\u4ed6\u8138\u4e0a\u9ed1\u800c\u4e14\u7626\uff0c\u5df2\u7ecf\u4e0d\u6210\u6837\u5b50\uff1b\u7a7f\u4e00\u4ef6\u7834\u5939\u8884\uff0c\u76d8\u7740\u4e24\u817f\uff0c\u4e0b\u9762\u57ab\u4e00\u4e2a\u84b2\u5305\uff0c\u7528\u8349\u7ef3\u5728\u80a9\u4e0a\u6302\u4f4f\uff1b\u89c1\u4e86\u6211\uff0c\u53c8\u8bf4\u9053\uff0c\u201c\u6e29\u4e00\u7897\u9152\u3002\u201d\u638c\u67dc\u4e5f\u4f38\u51fa\u5934\u53bb\uff0c\u4e00\u9762\u8bf4\uff0c\u201c\u5b54\u4e59\u5df1\u4e48\uff1f\u4f60\u8fd8\u6b20\u5341\u4e5d\u4e2a\u94b1\u5462\uff01\u201d\u5b54\u4e59\u5df1\u5f88\u9893\u5510\u7684\u4ef0\u9762\u7b54\u9053\uff0c\u201c\u8fd9\u2026\u2026\u4e0b\u56de\u8fd8\u6e05\u7f62\u3002\u8fd9\u4e00\u56de\u662f\u73b0\u94b1\uff0c\u9152\u8981\u597d\u3002\u201d\u638c\u67dc\u4ecd\u7136\u540c\u5e73\u5e38\u4e00\u6837\uff0c\u7b11\u7740\u5bf9\u4ed6\u8bf4\uff0c\u201c\u5b54\u4e59\u5df1\uff0c\u4f60\u53c8\u5077\u4e86\u4e1c\u897f\u4e86\uff01\u201d\u4f46\u4ed6\u8fd9\u56de\u5374\u4e0d\u5341\u5206\u5206\u8fa9\uff0c\u5355\u8bf4\u4e86\u4e00\u53e5\u201c\u4e0d\u8981\u53d6\u7b11\uff01\u201d\u201c\u53d6\u7b11\uff1f\u8981\u662f\u4e0d\u5077\uff0c\u600e\u4e48\u4f1a\u6253\u65ad\u817f\uff1f\u201d\u5b54\u4e59\u5df1\u4f4e\u58f0\u8bf4\u9053\uff0c\u201c\u8dcc\u65ad\uff0c\u8dcc\uff0c\u8dcc\u2026\u2026\u201d\u4ed6\u7684\u773c\u8272\uff0c\u5f88\u50cf\u6073\u6c42\u638c\u67dc\uff0c\u4e0d\u8981\u518d\u63d0\u3002\u6b64\u65f6\u5df2\u7ecf\u805a\u96c6\u4e86\u51e0\u4e2a\u4eba\uff0c\u4fbf\u548c\u638c\u67dc\u90fd\u7b11\u4e86\u3002\u6211\u6e29\u4e86\u9152\uff0c\u7aef\u51fa\u53bb\uff0c\u653e\u5728\u95e8\u69db\u4e0a\u3002\u4ed6\u4ece\u7834\u8863\u888b\u91cc\u6478\u51fa\u56db\u6587\u5927\u94b1\uff0c\u653e\u5728\u6211\u624b\u91cc\uff0c\u89c1\u4ed6\u6ee1\u624b\u662f\u6ce5\uff0c\u539f\u6765\u4ed6\u4fbf\u7528\u8fd9\u624b\u8d70\u6765\u7684\u3002\u4e0d\u4e00\u4f1a\uff0c\u4ed6\u559d\u5b8c\u9152\uff0c\u4fbf\u53c8\u5728\u65c1\u4eba\u7684\u8bf4\u7b11\u58f0\u4e2d\uff0c\u5750\u7740\u7528\u8fd9\u624b\u6162\u6162\u8d70\u53bb\u4e86\u3002\n\u3000\u3000\u81ea\u6b64\u4ee5\u540e\uff0c\u53c8\u957f\u4e45\u6ca1\u6709\u770b\u89c1\u5b54\u4e59\u5df1\u3002\u5230\u4e86\u5e74\u5173\u2482\uff0c\u638c\u67dc\u53d6\u4e0b\u7c89\u677f\u8bf4\uff0c\u201c\u5b54\u4e59\u5df1\u8fd8\u6b20\u5341\u4e5d\u4e2a\u94b1\u5462\uff01\u201d\u5230\u7b2c\u4e8c\u5e74\u7684\u7aef\u5348\uff0c\u53c8\u8bf4\u201c\u5b54\u4e59\u5df1\u8fd8\u6b20\u5341\u4e5d\u4e2a\u94b1\u5462\uff01\u201d\u5230\u4e2d\u79cb\u53ef\u662f\u6ca1\u6709\u8bf4\uff0c\u518d\u5230\u5e74\u5173\u4e5f\u6ca1\u6709\u770b\u89c1\u4ed6\u3002\n\u6211\u5230\u73b0\u5728\u7ec8\u4e8e\u6ca1\u6709\u89c1\u2014\u2014\u5927\u7ea6\u5b54\u4e59\u5df1\u7684\u786e\u6b7b\u4e86\u3002"),r.a.createElement(f.a,{type:"primary",className:"ReadContentBtn",onClick:function(){window.scrollTo(0,document.body.scrollHeight),e.setState({isShowNext:!e.state.isShowNext})},size:"large",ghost:!0},"\u4e0b\u4e00\u8282\u70b9"))),r.a.createElement(b.a,{span:4},r.a.createElement("div",{className:"Card ReadAuthor"},r.a.createElement("img",{src:F.a,className:"ReadImage",onClick:function(){window.location.href="/homepage/"+e.props.authorID}}),r.a.createElement("h1",null,this.state.author.name),r.a.createElement("p",null," ",this.state.intro||"\u6b64\u7528\u6237\u6ca1\u6709\u7b80\u4ecb"),r.a.createElement("p",null,r.a.createElement(M.a,null),":100"),r.a.createElement("p",null,r.a.createElement(I.a,null),":200")))),r.a.createElement(v.a,null,r.a.createElement("div",{className:"ReadNext"},!this.state.isShowNext||r.a.createElement(R.a,{className:"NextNodeList"},this.nextNodes.map((function(e,t){return r.a.createElement(H,{href:"/article"+e.id,key:e.title+t,title:e.title,content:e.content,tags:e.tags,class:"NextNode"})})))))),r.a.createElement(O,null)))}}]),a}(r.a.Component)),z=a(262),J=(a(255),E.a.Header,E.a.Content),L=E.a.Sider,W=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomePage"},r.a.createElement(E.a,null,r.a.createElement(C,null),r.a.createElement(E.a,null,r.a.createElement(L,{width:200},r.a.createElement(z.a,{mode:"inline",theme:"dark",defaultSelectedKeys:["1"]},r.a.createElement(z.a.Item,{key:1},"\u6211\u7684\u5173\u6ce8"),r.a.createElement(z.a.Item,{key:2},"\u6211\u7684\u6536\u85cf"),r.a.createElement(z.a.Item,{key:3},"\u6211\u7684\u521b\u4f5c"),r.a.createElement(z.a.Item,{key:4},"\u6211\u7684\u79c1\u4fe1"))),r.a.createElement(E.a,{style:{padding:"24px 24px"}},r.a.createElement(J,{className:"HomePageContent"},r.a.createElement(_,{name:"\u6d4b\u8bd5",intro:"\u8fd9\u662f\u4e00\u4e2a\u6d4b\u8bd5",image:F.a}))))))}}]),a}(r.a.Component),K=a(159),Y=(a(256),E.a.Header,E.a.Content);E.a.Footer;function $(e){return console.log(e),r.a.createElement("div",{className:"TreeCombine"},r.a.createElement(T,{title:e.title,content:e.content,class:"TreeCombineNode"}),r.a.createElement(_,Object.assign({},e.author,{class:"TreeCombineAuthor"})))}var q=function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).ID=e.match.params.nodeID,n.state={showed:[],showing:[]},n}return Object(h.a)(a,[{key:"_getNodeData",value:function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P("node",this.ID,"mode=simple");case 2:if(e.t0=e.sent,e.t0){e.next=5;break}e.t0={};case 5:t=e.t0,this._moveToShowed(t);case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_moveToShowed",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n,c,l,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:if(a=r.a.createElement($,Object.assign({id:t.id},t)),this.state.showed.length>50?this.setState({showed:[a]}):this.setState({showed:[].concat(Object(K.a)(this.state.showed),[a])}),n=[],t.children){e.next=7;break}return e.abrupt("return");case 7:c=Object(i.a)(t.children),e.prev=8,c.s();case 10:if((l=c.n()).done){e.next=19;break}return o=l.value,e.t0=n,e.next=15,P("node",o,"mode=simple");case 15:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 17:e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t2=e.catch(8),c.e(e.t2);case 24:return e.prev=24,c.f(),e.finish(24);case 27:return e.next=29,this._getNodeChildren(n);case 29:case"end":return e.stop()}}),e,this,[[8,21,24,27]])})));return function(t){return e.apply(this,arguments)}}()},{key:"_getNodeChildren",value:function(){var e=Object(u.a)(s.a.mark((function e(t){var a,n,c,l,o=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return this.setState({showing:[]}),e.abrupt("return");case 3:a=[],n=Object(i.a)(t),e.prev=5,l=s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.value,e.next=3,P("node",t,"mode=simple");case 3:n=e.sent,a.push(r.a.createElement(T,{key:t,class:"TreeChild",title:n.title||"\u65e0\u6807\u9898",content:n.intro||"\u65e0\u5185\u5bb9",onClick:function(e){window.scrollTo(0,document.body.scrollHeight),o._moveToShowed(n)}}));case 5:case"end":return e.stop()}}),e)})),n.s();case 8:if((c=n.n()).done){e.next=12;break}return e.delegateYield(l(),"t0",10);case 10:e.next=8;break;case 12:e.next=17;break;case 14:e.prev=14,e.t1=e.catch(5),n.e(e.t1);case 17:return e.prev=17,n.f(),e.finish(17);case 20:return this.setState({showing:[].concat(a)}),e.abrupt("return",a);case 22:case"end":return e.stop()}}),e,this,[[5,14,17,20]])})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(u.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._getNodeData();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.state),r.a.createElement("div",{className:"Tree"},r.a.createElement(E.a,{className:"layout"},r.a.createElement(C,null),r.a.createElement(Y,{style:{padding:"50px 50px"}},r.a.createElement("div",{className:"TreeContent"},r.a.createElement("div",{className:"TreeNow"},this.state.showed),r.a.createElement("div",{className:"TreeChildren"},this.state.showing))),r.a.createElement(O,null)))}}]),a}(r.a.Component);a(257),a(258);function G(e){return r.a.createElement("div",{className:"MainColumn Card "+e.class},r.a.createElement("div",{className:"MainColumnTitle"},e.title),r.a.createElement("div",{className:"MainColumnContent"},e.children))}E.a.Header;var Q=E.a.Content,U=(E.a.Footer,[{path:"/",component:function(e){Object(p.a)(a,e);var t=Object(d.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Main"},r.a.createElement(E.a,{className:"layout"},r.a.createElement(C,null),r.a.createElement(Q,null,r.a.createElement("div",{className:"MainContent"},r.a.createElement(v.a,null,r.a.createElement(b.a,{span:6},r.a.createElement(G,{title:"\u5206\u533a"},r.a.createElement(H,{title:"\u79d1\u5e7b",class:"MainPart"}),r.a.createElement(H,{title:"\u63a8\u7406",class:"MainPart"}),r.a.createElement(H,{title:"\u730e\u5947",class:"MainPart"}),r.a.createElement(H,{title:"\u6b66\u4fa0",class:"MainPart"}),r.a.createElement(H,{title:"\u5176\u4ed6",class:"MainPart"}))),r.a.createElement(b.a,{span:12},r.a.createElement(G,{title:"\u5173\u6ce8",class:"Follow"},r.a.createElement(H,{url:"/article/1",title:"\u6545\u4e8b1",class:"MainFollow",content:"\u6545\u4e8b1"}),r.a.createElement(H,{url:"/article/1",title:"\u6545\u4e8b2",class:"MainFollow",content:"\u6545\u4e8b2"}),r.a.createElement(H,{url:"/article/1",title:"\u6545\u4e8b3",class:"MainFollow",content:"\u6545\u4e8b3"}),r.a.createElement(H,{url:"/article/1",title:"\u6545\u4e8b4",class:"MainFollow",content:"\u6545\u4e8b4"}))),r.a.createElement(b.a,{span:6},r.a.createElement(G,{title:"\u70ed\u95e8"},r.a.createElement(H,{url:"/node/1",title:"\u8fd9\u662f\u4e00\u4e2a\u6545\u4e8b",class:"MainFollow",content:"\u6545\u4e8b1"}),r.a.createElement(H,{url:"/node/2",title:"\u8fd9\u662f\u4e00\u4e2a\u6545\u4e8b",class:"MainFollow",content:"\u6545\u4e8b2"}),r.a.createElement(H,{url:"/node/3",title:"\u8fd9\u662f\u4e00\u4e2a\u6545\u4e8b",class:"MainFollow",content:"\u6545\u4e8b3"}),r.a.createElement(H,{url:"/node/4",title:"\u8fd9\u662f\u4e00\u4e2a\u6545\u4e8b",class:"MainFollow",content:"\u6545\u4e8b4"})))))),r.a.createElement(O,null)))}}]),a}(r.a.Component),exact:!0},{path:"/article/:articleID",component:B},{path:"/homepage",component:W,exact:!0},{path:"/homepage/:authorID",component:W,exact:!0},{path:"/node/:nodeID",component:q},{path:"/error",component:function(){return r.a.createElement("div",null,"404 Not Found")}}]),V=a(157),X=a(13);l.a.render(r.a.createElement(V.a,null,r.a.createElement(X.d,null,U.map((function(e){return r.a.createElement(X.b,Object.assign({key:e.path},e))})),r.a.createElement(X.a,{to:"/error"}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},59:function(e,t,a){e.exports=a.p+"static/media/Lenna.04ce5993.jpg"}},[[164,1,2]]]);
//# sourceMappingURL=main.bf5aed6f.chunk.js.map