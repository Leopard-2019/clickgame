(this.webpackJsonpclickgame=this.webpackJsonpclickgame||[]).push([[0],[,,,,,,,,,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Batman","image":"./images/Batman.png","occupation":"Super Hero","location":"Gotham City"},{"id":2,"name":"Superman","image":"./images/superman.jpeg","occupation":"Super Hero","location":"Metropolis"},{"id":3,"name":"Spiderman","image":"./images/spiderman.jpeg","occupation":"Super Hero","location":"New York"},{"id":4,"name":"Captain America","image":"./images/CaptainAmerica.jpeg","occupation":"Super Hero","location":"Washington DC"},{"id":5,"name":"Hulk","image":"./images/Hulk.png","occupation":"Super Hero","location":"San Francisco Bay Area"},{"id":6,"name":"Iron Man","image":"./images/IronMan.jpeg","occupation":"Super Hero","location":"New York"},{"id":7,"name":"Green Lantern","image":"./images/GreenLantern.jpeg","occupation":"Super Hero","location":"Gotham City"},{"id":8,"name":"Thor","image":"./images/Thor.jpeg","occupation":"Super Hero","location":"Asgard"},{"id":9,"name":"Wonder Woman","image":"./images/wonderwoman.jpeg","occupation":"Super Hero","location":"Themyscira"},{"id":10,"name":"Aquaman","image":"./images/Aquaman.jpeg","occupation":"Super Hero","location":"Poseidonis"},{"id":11,"name":"Human Torch","image":"./images/HumanTorch.jpeg","occupation":"Super Hero","location":"New York"},{"id":12,"name":"Black Panther","image":"./images/blackPanther.jpeg","occupation":"Super Hero","location":"Wakanda"}]')},,,function(e,a,t){e.exports=t(32)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),c=t.n(o),i=(t(22),t(9)),l=t(10),m=t(3),u=t(11),s=t(12),p=t(15),g=(t(23),function(e){return r.a.createElement("div",{className:"card",key:e.id,"data-id":e.id,name:e.name,style:{backgroundImage:"url(".concat(e.image,")")},onClick:e.StartGame})}),d=(t(24),function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"/"},r.a.createElement("span",{style:{color:"black"}},r.a.createElement("strong",null,"Click SuperHero Game")))),r.a.createElement("li",{style:{padding:"0px 0px 0px 500px"}},r.a.createElement("p",null,r.a.createElement("strong",null,"Score: ",e.score))),r.a.createElement("li",{style:{padding:"0px 0px 0px 200px"}},r.a.createElement("p",null,r.a.createElement("strong",null,"Top Score: ",e.topScore))))))}),h=(t(25),function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"Click SuperHero Game!"),r.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!")))}),f=t(43),E=function(e){return r.a.createElement(f.a,e,e.children)},S=(t(30),function(e){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar1"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,r.a.createElement("small",null,r.a.createElement("img",{alt:"react",src:"./images/react.jpeg",style:{width:"25px",height:"25px"}}),r.a.createElement("strong",null,"Copyright ",e.currentYear,", Miguel Galarraga")))))))});t(31);var k=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},v=t(14),H=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(u.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={friends:v,count:[],topScore:0},t.StartGame=function(e){var a=e.target.attributes.getNamedItem("name").value;t.shufflefriends(),t.HandleIncremental(a)},t.shufflefriends=function(){t.setState(t.state.friends=t.shuffleArray(t.state.friends))},t.shuffleArray=function(e){var a,t,n;for(a=0;a<e.length;a++)t=Math.floor(12*Math.random()),n=e[a],e[a]=e[t],e[t]=n;return e},t.HandleIncremental=function(e){var a=Object(i.a)({},t.state);a.count.includes(e)?(alert("TRY AGAIN!"),a.count=[],t.setState(t.state=a)):(a.count.push(e),t.setState(t.state=a),a.count.length>a.topScore&&(a.topScore++,t.setState(t.state=a),12===a.topScore&&(alert("YOU HAVE WON!"),a.count=[],t.setState(t.state=a))))},t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(k,null,r.a.createElement(d,{topScore:this.state.topScore,score:this.state.count.length}),r.a.createElement(h,null),this.state.friends.map((function(a){return r.a.createElement(E,{item:!0,lg:3},r.a.createElement(g,{id:a.id,name:a.name,image:a.image,key:a.id,StartGame:e.StartGame}))})),r.a.createElement(S,{currentYear:"2020"}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[17,1,2]]]);
//# sourceMappingURL=main.7e202f3b.chunk.js.map