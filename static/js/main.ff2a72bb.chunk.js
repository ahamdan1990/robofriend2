(this.webpackJsonprobo_friend=this.webpackJsonprobo_friend||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(16)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),l=(n(12),n(1)),i=n(2),u=n(4),s=n(3),m=(n(13),function(e){var t=e.onInputSearch;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))}),h=function(e){var t=e.onInputSearch;return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(m,{onInputSearch:t}),r.a.createElement("hr",null))},d=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"Robot"}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},f=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(d,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})})))},p=(n(14),function(e){return r.a.createElement("div",{id:"scroll"},e.children)}),v=function(e){var t=e.robots;return r.a.createElement("div",null,r.a.createElement(p,null,r.a.createElement(f,{robots:t})))},b=function(){return r.a.createElement("div",{className:"pa3"},r.a.createElement("hr",null),"Done with love @Ali Hamdan")},E=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={error:!1},a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({error:!0})}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.error?r.a.createElement("h1",null,"Oooops Error Occured"):this.props.children)}}]),n}(r.a.Component),g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onInputSearch=function(t){e.setState({searchField:t.target.value})},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement(h,{onInputSearch:this.onInputSearch}),r.a.createElement(E,null,t.length?r.a.createElement(v,{robots:a}):r.a.createElement("h1",null,"Loading ...")),r.a.createElement(b,null))}}]),n}(a.Component);n(15),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.ff2a72bb.chunk.js.map