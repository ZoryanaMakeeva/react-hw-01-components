(this["webpackJsonpreact-hw-01-components"]=this["webpackJsonpreact-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"styles_profile__hVznA",description:"styles_description__2txLQ",avatar:"styles_avatar__15ERA",name:"styles_name__kR0f3",tag:"styles_tag__2z5ZW",location:"styles_location__HcFF0",stats:"styles_stats__2YXHb",stat:"styles_stat__zCeuk",label:"styles_label__3C96X",quantity:"styles_quantity__23Zr2"}},function(e,a,t){e.exports={statistics:"styles_statistics__y1A9U",title:"styles_title__RjGg1","stat-list":"styles_stat-list__1DZKL",item:"styles_item__21SlM",label:"styles_label__MxNdO"}},function(e){e.exports=JSON.parse('{"name":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,a,t){e.exports={item:"styles_item__3Xoiu","status-online":"styles_status-online__3-uPQ","status-offline":"styles_status-offline__31-xa",avatar:"styles_avatar__ifxWk",name:"styles_name__3RH-x"}},function(e,a,t){e.exports={"transaction-history":"styles_transaction-history__1TtFP","transaction-type":"styles_transaction-type__2UbuD"}},,,function(e,a,t){e.exports={"friend-list":"styles_friend-list__357l-"}},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/shojberg/128.jpg","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/r_oy/128.jpg","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mugukamil/128.jpg","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/sweetdelisa/128.jpg","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(7),r=t.n(c),i=t(19),l=t(1),m=t.n(l),o=function(e){var a=e.avatar,t=e.name,n=e.tag,c=e.location,r=e.stats;return s.a.createElement("div",{className:m.a.profile},s.a.createElement("div",{className:m.a.description},s.a.createElement("img",{src:a,alt:"user avatar",className:m.a.avatar}),s.a.createElement("p",{className:m.a.name},t),s.a.createElement("p",{className:m.a.tag},"@",n),s.a.createElement("p",{className:m.a.location},c)),s.a.createElement("ul",{className:m.a.stats},Object.keys(r).map((function(e){return s.a.createElement("li",{className:m.a.stat,key:Object(i.a)()},s.a.createElement("span",{className:m.a.label},e),s.a.createElement("span",{className:m.a.quantity},r[e]))}))))},u=t(2),d=t.n(u),p=function(e){var a=e.title,t=e.stats;return s.a.createElement("section",{className:d.a.statistics},a&&s.a.createElement("h3",{className:d.a.title},a),s.a.createElement("ul",{className:d.a["stat-list"]},t.map((function(e){var a=e.id,t=e.label,n=e.percentage;return s.a.createElement("li",{className:d.a.item,key:a},s.a.createElement("span",{className:d.a.label},t),s.a.createElement("span",{className:d.a.percentage},n,"%"))}))))},y=t(8),f=t.n(y),b=t(4),_=t.n(b),E=function(e){var a=e.avatar,t=e.name,n=e.isOnline;return s.a.createElement("li",{className:_.a.item},s.a.createElement("span",{className:_.a["status-".concat(n?"online":"offline")]}),s.a.createElement("img",{className:_.a.avatar,src:a,alt:"friend avatar",width:"48"}),s.a.createElement("p",{className:_.a.name},t))},v=function(e){var a=e.friends;return s.a.createElement("ul",{className:f.a["friend-list"]},a.map((function(e){var a=e.avatar,t=e.name,n=e.isOnline;return s.a.createElement(E,{key:Object(i.a)(),avatar:a,name:t,isOnline:n})})))},w=t(5),g=t.n(w),N=function(e){var a=e.items;return s.a.createElement("table",{className:g.a["transaction-history"]},s.a.createElement("thead",null,s.a.createElement("tr",null,["Type","Amount","Currency"].map((function(e){return s.a.createElement("th",{key:e},e)})))),s.a.createElement("tbody",null,a.map((function(e){var a=e.id,t=e.type,n=e.amount,c=e.currency;return s.a.createElement("tr",{key:a},s.a.createElement("td",{className:g.a["transaction-type"]},t),s.a.createElement("td",null,n),s.a.createElement("td",null,c))}))))},h=t(3),O=t(9),x=t(10),k=t(11),j=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(o,{name:h.name,tag:h.tag,location:h.location,avatar:h.avatar,stats:h.stats}),s.a.createElement(p,{title:"Upload Statistics",stats:O}),s.a.createElement(v,{friends:x}),s.a.createElement(N,{items:k}))};r.a.render(s.a.createElement(j,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.8fa73625.chunk.js.map