(window["webpackJsonpgoit-react-hw-01"]=window["webpackJsonpgoit-react-hw-01"]||[]).push([[0],[,function(a,e,t){a.exports={profile:"Profile_profile__2ElJ-",description:"Profile_description__2zIvL",avatar:"Profile_avatar__114wS",name:"Profile_name__23SgI",tag:"Profile_tag__1rUMz",location:"Profile_location__1TSCs",stats:"Profile_stats__2o8h4"}},function(a,e,t){a.exports={statsSection:"Stats_statsSection__1klbq",title:"Stats_title__35Bvo",statList:"Stats_statList__2UCOF",statItem:"Stats_statItem__2oNgz",label:"Stats_label__2PNMI",percentage:"Stats_percentage__1yCq8"}},function(a,e,t){a.exports={stat:"UserStats_stat__1yg7j",label:"UserStats_label__3_grk",quantity:"UserStats_quantity__A_Pld"}},,,function(a){a.exports=JSON.parse('{"name":"Jacques Gluke","tag":"@jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(a){a.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(a,e,t){a.exports=t(13)},,,,,function(a,e,t){"use strict";t.r(e);var l=t(0),s=t.n(l),n=t(5),r=t.n(n),c=t(3),o=t.n(c),i=function(a){var e=a.label,t=a.quantity;return s.a.createElement("li",{className:o.a.stat},s.a.createElement("span",{className:o.a.label},e),s.a.createElement("span",{className:o.a.quantity},t))},m=t(1),_=t.n(m),p=function(a){var e=a.info;return s.a.createElement("div",{className:_.a.profile},s.a.createElement("div",{className:_.a.description},s.a.createElement("img",{src:e.avatar,alt:"info avatar",className:_.a.avatar}),s.a.createElement("p",{className:_.a.name},e.name),s.a.createElement("p",{className:_.a.tag},e.tag),s.a.createElement("p",{className:_.a.location},e.location)),s.a.createElement("ul",{className:_.a.stats},s.a.createElement(i,{label:"Followers",quantity:e.stats.followers.toLocaleString()}),s.a.createElement(i,{label:"Views",quantity:e.stats.views.toLocaleString()}),s.a.createElement(i,{label:"Likes",quantity:e.stats.likes.toLocaleString()})))};p.defaultProps={info:{name:"USER NAME IS REQUIRED"}};var u=p,f=t(2),d=t.n(f),g=function(a){var e=a.title,t=a.statProps;return s.a.createElement("section",{className:d.a.statsSection},e&&s.a.createElement("h2",{className:d.a.title},e),s.a.createElement("ul",{className:d.a.statList},t.map(function(a){var e=50*Math.floor(6*Math.random());return s.a.createElement("li",{className:d.a.statItem,key:a.id,style:{backgroundColor:"rgb(".concat(e,", ").concat(e,", ").concat(e,")"),color:"rgb(".concat(255-e,", ").concat(255-e,", ").concat(255-e,")")}},s.a.createElement("span",{className:d.a.label},a.label),s.a.createElement("span",{className:d.a.percentage},a.percentage,"%"))})))};g.defaultProps={title:""};var E=g,b=t(6),S=t(7),N=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(u,{info:b}),s.a.createElement(E,{title:"Upload stats",statProps:S}))};r.a.render(s.a.createElement(N,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.630b7378.chunk.js.map