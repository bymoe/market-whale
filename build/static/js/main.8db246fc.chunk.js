(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(66)},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},53:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(18),i=a.n(s),o=(a(45),a(36)),c=a(11),l=a(2),m=a(3),u=a(5),p=a(4),d=a(6);a(46);function h(e){return isNaN(e)&&(e=0),e.toLocaleString("en-US",{style:"currency",currency:"USD"})}function f(e){return e[Math.floor(Math.random()*e.length)]}function g(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"];return"".concat(f(e),"-").concat(f(e),"-").concat(f(["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"]))}var b=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).goToStore=function(t){t.preventDefault();var a=e.myInput.current.value;e.props.history.push("/store/".concat(a))},e.myInput=n.a.createRef(),e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:"store-selector",onSubmit:this.goToStore},n.a.createElement("h2",null,"Please Enter A Store"),n.a.createElement("input",{type:"text",ref:this.myInput,required:!0,placeholder:"store-name",defaultValue:g()}),n.a.createElement("button",{type:"submit"},"Visit Store"))}}]),t}(n.a.Component),v=a(12),y=(a(47),function(e){return n.a.createElement("header",{className:"header"},n.a.createElement("h1",null,n.a.createElement("img",{src:"../logo.png",alt:"Market Whale",width:"35px"})," Market",n.a.createElement("span",null,"Whale")),n.a.createElement("h3",{className:"tagline"},e.tagline))}),E=a(68),O=a(69),I=(a(48),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).renderOrder=function(e){var t=a.props.items[e],r=a.props.order[e],s={classNames:"order",key:e,timeout:{enter:150,exit:150}},i={classNames:"count",key:r,timeout:{enter:300,exit:300}};return t?t.status?n.a.createElement(E.a,s,n.a.createElement("li",{key:e},n.a.createElement("span",{className:"order-count"},n.a.createElement(O.a,{component:"span",className:"count"},n.a.createElement(E.a,i,n.a.createElement("span",null,r))),"lbs"),n.a.createElement("span",{className:"order-name"},t.name),n.a.createElement("span",{className:"order-price"},h(r*t.price)),n.a.createElement("button",{className:"order-delete",onClick:function(){return a.props.deletefromOrder(e)}},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"15",viewBox:"0 0 24 24",fill:"#FFFFFF"},n.a.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))))):n.a.createElement(E.a,s,n.a.createElement("li",{key:e},"Sorry ",t?t.name:"Item"," is no longer available")):null},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.order),a=t.reduce(function(t,a){var r=e.props.items[a],n=e.props.order[a];return r&&r.status?t+n*r.price:t},0);return n.a.createElement("div",{className:"order"},n.a.createElement("h1",null,"Order"),n.a.createElement(O.a,{component:"ul",className:"order-list"},t.map(this.renderOrder)),n.a.createElement("div",{className:"total"},"Total: ",n.a.createElement("span",null,h(a))))}}]),t}(n.a.Component)),j=(a(53),a(34)),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).nameRef=n.a.createRef(),a.priceRef=n.a.createRef(),a.statusRef=n.a.createRef(),a.descRef=n.a.createRef(),a.imageRef=n.a.createRef(),a.createItem=function(e){e.preventDefault();var t={name:a.nameRef.current.value,price:Object(j.isNumber)(a.priceRef.current.value)?parseFloat(a.priceRef.current.value):0,status:"true"===a.statusRef.current.value,description:a.descRef.current.value,image:a.imageRef.current.value};a.props.addItem(t),e.currentTarget.reset()},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return n.a.createElement("form",{className:"item-add",onSubmit:this.createItem},n.a.createElement("input",{name:"name",type:"text",placeholder:"Item Name",ref:this.nameRef,required:!0}),n.a.createElement("input",{name:"price",type:"text",placeholder:"Item Price",ref:this.priceRef}),n.a.createElement("select",{name:"status",ref:this.statusRef},n.a.createElement("option",{value:"true"},"Fresh"),n.a.createElement("option",{value:"false"},"Sold Out!")),n.a.createElement("textarea",{name:"description",placeholder:"Item Description",ref:this.descRef}),n.a.createElement("input",{name:"image",type:"text",placeholder:"Item Image",ref:this.imageRef}),n.a.createElement("button",{type:"submit"},"+ Add Item"))}}]),t}(n.a.Component),w=a(17),S=(a(56),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).mySelect=n.a.createRef(),a.handleChange=function(e){var t,r=Object(v.a)({},a.props.item,(t={},Object(w.a)(t,e.currentTarget.name,e.currentTarget.value),Object(w.a)(t,"status","true"===a.mySelect.current.value),t));a.props.updateItem(a.props.index,r)},a.handleDelete=function(){a.props.deleteItem(a.props.index)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("form",{className:"item-create",onSubmit:this.createItem},n.a.createElement("input",{name:"name",type:"text",onChange:this.handleChange,value:this.props.item.name}),n.a.createElement("input",{name:"price",type:"text",onChange:this.handleChange,value:this.props.item.price}),n.a.createElement("select",{name:"status",onChange:this.handleChange,value:this.props.item.status,ref:this.mySelect},n.a.createElement("option",{value:"true"},"Fresh"),n.a.createElement("option",{value:"false"},"Sold Out!")),n.a.createElement("textarea",{name:"description",onChange:this.handleChange,value:this.props.item.description}),n.a.createElement("input",{name:"image",type:"text",onChange:this.handleChange,value:this.props.item.image}),n.a.createElement("button",{type:"submit",onClick:function(){return e.props.deleteItem(e.props.index)}},"- Remove Item"))}}]),t}(n.a.Component)),N=(a(57),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"inventory"},n.a.createElement("h1",null,"Inventory"),Object.keys(this.props.items).map(function(t){return n.a.createElement(S,{key:t,index:t,item:e.props.items[t],updateItem:e.props.updateItem,deleteItem:e.props.deleteItem})}),n.a.createElement(k,{addItem:this.props.addItem}),n.a.createElement("button",{className:"load-button",onClick:this.props.loadItemsSamples},"Load Sample Items"))}}]),t}(n.a.Component)),C={item1:{name:"Blueberries",price:6.5,image:"../images/blueberries.jpg",description:"Blueberries are perennial flowering plants with blue\u2013 or purple\u2013colored berries.",status:!0},item2:{name:"Chocolate",price:14.5,image:"../images/chocolate.jpg",description:"Unsweetened chocolate is pure chocolate liquor, also known as bitter or baking chocolate.",status:!0},item3:{name:"Christmas Cookies",price:5.9,image:"../images/christmas-cookies.jpg",description:"Christmas biscuits are traditionally sugar cookies or biscuits cut into various shapes related to Christmas.",status:!1},item4:{name:"Cupcakes",price:3.2,image:"../images/cupcakes.jpg",description:"A cupcake is a small cake designed to serve one person, which may be baked in a small thin paper or aluminum cup.",status:!0},item5:{name:"Macarons",price:7,image:"../images/macarons.jpg",description:"Colorful, pillowy, and delicately flavored, macarons are perhaps one of the most famous and treasured French desserts.",status:!0},item6:{name:"Pears",price:8.5,image:"../images/pears.jpg",description:"Pears are one of the best fruits to eat as part of a healthful diet. Pears are full of vitamins, antioxidants, and fiber.",status:!0}},R=(a(58),function(e){function t(){var e,a;Object(l.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).myImage=n.a.createRef(),a.defaultImage="/images/default.png",a.loadImage=function(){a.myImage.current.setAttribute("src",a.defaultImage)},a.handleAddToOrder=function(){a.props.addToOrder(a.props.index)},a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.image,a=e.name,r=e.price,s=e.description,i=e.status;return n.a.createElement("li",{className:"single-item "+(i?"":"disabled")},n.a.createElement("img",{src:t||this.defaultImage,alt:a,onError:this.loadImage,ref:this.myImage}),n.a.createElement("h3",null,a," ",n.a.createElement("span",{className:"price"},h(parseInt(r)))),n.a.createElement("p",{className:"desc"},s),n.a.createElement("button",{className:"add-to-cart",disabled:!i,onClick:this.handleAddToOrder},i?"Add to Card":"SOLD OUT!"))}}]),t}(n.a.Component)),x=a(35),F=a.n(x),A=a(23),T=a.n(A),B=(a(60),T.a.initializeApp({apiKey:"AIzaSyBL7vNy9u3g0d-SiNaemwpYMELVGMm2dr4",authDomain:"marketwhale-mj.firebaseapp.com",databaseURL:"https://marketwhale-mj.firebaseio.com"})),D=F.a.createClass(B.database()),L=(a(62),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(u.a)(this,Object(p.a)(t).call(this))).state={items:{},order:{}},e.addItem=function(t){var a=Object(v.a)({},e.state.items);a["item".concat(Date.now())]=t,e.setState({items:a})},e.updateItem=function(t,a){var r=Object(v.a)({},e.state.items);r[t]=a,e.setState({items:r})},e.deleteItem=function(t){var a=Object(v.a)({},e.state.items);a[t]=null,e.setState({items:a})},e.addToOrder=function(t){var a=Object(v.a)({},e.state.order);a[t]=a[t]+1||1,e.setState({order:a})},e.deletefromOrder=function(t){var a=Object(v.a)({},e.state.order);delete a[t],e.setState({order:a})},e.loadItemsSamples=function(){e.setState({items:C})},e.foldElements=function(t){t.target.classList.toggle("folded"),e.marketWhale.current.classList.toggle("folded")},e.marketWhale=n.a.createRef(),e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params,t=localStorage.getItem(e.storeId);t&&this.setState({order:JSON.parse(t)}),this.ref=D.syncState("".concat(e.storeId,"/items"),{context:this,state:"items"})}},{key:"componentWillUnmount",value:function(){D.removeBinding(this.ref)}},{key:"componentWillUpdate",value:function(){var e=this.props.match.params.storeId;localStorage.setItem(e,JSON.stringify(this.state.order))}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{className:"fold",onClick:this.foldElements},"Fold"),n.a.createElement("button",{className:"built-by"},n.a.createElement("a",{href:"https://imsolitude.github.io/",target:"_blank",rel:"noopener noreferrer"},"Built By @codebymj")),n.a.createElement("div",{className:"market-whale",ref:this.marketWhale},n.a.createElement("div",{className:"menu"},n.a.createElement(y,{tagline:"Literally a market whale!"}),n.a.createElement("ul",{className:"list-of-items"},Object.keys(this.state.items).map(function(t){return n.a.createElement(R,{key:t,data:e.state.items[t],addToOrder:e.addToOrder,index:t})}))),n.a.createElement(I,{items:this.state.items,order:this.state.order,deletefromOrder:this.deletefromOrder}),n.a.createElement(N,{addItem:this.addItem,updateItem:this.updateItem,deleteItem:this.deleteItem,loadItemsSamples:this.loadItemsSamples,items:this.state.items,storeId:this.props.match.params.storeId})))}}]),t}(n.a.Component)),M=(a(63),function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{class:"not-found"},n.a.createElement("h1",null,"Sorry ... Page is Not Found!")))}),W=function(){return n.a.createElement(o.a,null,n.a.createElement(c.c,null,n.a.createElement(c.a,{exact:!0,path:"/",component:b}),n.a.createElement(c.a,{path:"/store/:storeId",component:L}),n.a.createElement(c.a,{component:M})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.8db246fc.chunk.js.map