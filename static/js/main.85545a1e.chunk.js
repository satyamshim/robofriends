(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,a,n){},13:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i),c=(n(12),n(3)),l=n(4),s=n(6),m=n(5),h=[{id:"MJK",name:"Mohal Lal ",username:"MJK",email:"9419255093"},{id:"R&D",name:"Rani Devi",username:"R&D",email:"9796219926"},{id:"yashika__sharma",name:"Yashika Sharma",username:"yashika__sharma",email:"9418966315"},{id:"KT",name:"Kavita Agnihotri",username:"KT",email:"6006341521"},{id:"aagnihotri_",name:"Aknush Agnihotri",username:"aagnihotri_",email:"9149521578"},{id:"_pre_et",name:"Preeti Agnihotri",username:"_pre_et",email:"9149630992",cell:"preetiagnihotri13@gmail.com"},{id:"shimbhat",name:"Satyam Bhat",username:"shimbhat",email:"8492848258",cell:"satyamshim@gmail.com"},{id:"__harrsh_",name:"Harsharan Singh Raina",username:"__harrsh_",email:"7006001507"},{id:"nehamarch2",name:"Neha Kashyap",username:"nehamarch2",email:"Working On It!"}],u=function(e){var a=e.name,n=e.email,t=e.id;return r.a.createElement("div",{className:"tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,t),r.a.createElement("p",null,n)))},d=function(e){var a=e.robots;return r.a.createElement("div",null,a.map((function(e,n){return r.a.createElement(u,{key:n,id:a[n].id,name:a[n].name,email:a[n].email})})))},f=function(e){e.searchfield;var a=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"aaa",placeholder:"search fam",onChange:a}))},g=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"800px"}},e.children)},v=(n(13),function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){var e;return Object(c.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:[],searchfield:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.setState({robots:h})}},{key:"render",value:function(){var e=this.state,a=e.robots,n=e.searchfield,t=a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return a.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"PreetFam"),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(g,null,r.a.createElement(d,{robots:t}))):r.a.createElement("h1",null,"Loading")}}]),n}(t.Component)),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(14);o.a.render(r.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/robofriends","/service-worker.js");b?function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):p(e)}))}}()},7:function(e,a,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.85545a1e.chunk.js.map