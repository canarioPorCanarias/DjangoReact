"use strict";(self.webpackChunkfrontend_tienda=self.webpackChunkfrontend_tienda||[]).push([[176],{48176:function(e,a,i){i.r(a),i.d(a,{UserForm:function(){return P},default:function(){return A}});var s=i(70885),l=i(72791),n=i(69482),r=i(16871),o=i(87203),t=i(80184);function c(e){var a=e.product,i=(0,l.useContext)(o.A),n=i.onAdd,r=i.onRemove,c=i.removeFromCart,d=(0,l.useState)(a.qty),u=(0,s.Z)(d,2),x=u[0],h=u[1],m=(0,l.useState)(0),j=(0,s.Z)(m,2),p=j[0],v=j[1];(0,l.useEffect)((function(){v(x*a.price)}),[x]);return(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{style:{width:"400px"},children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-sm-4 ",children:(0,t.jsx)("img",{src:a.img,height:106,width:106,alt:""})}),(0,t.jsx)("div",{className:"col",children:(0,t.jsx)("p",{className:"d-inline w-50 text-wrap h-100",children:a.name})})]})}),(0,t.jsxs)("td",{children:["Precio: ",a.price," \u20ac"]}),(0,t.jsxs)("td",{children:[(0,t.jsx)("input",{type:"button",onClick:function(e){x>1&&(h(Number(x)-1),r(a))},className:"d-inline btn btn-secondary px-2 py-1 mx-1",value:"-"}),(0,t.jsx)("input",{type:"text",onChange:function(e){e.target.value>0&&e.target.value<100?(h(e.target.value),n(a)):e.target.value>100?h(99):e.target.value<0&&h(1)},value:x,className:"input-group-text d-inline p-1",size:1}),(0,t.jsx)("input",{type:"button",onClick:function(e){100!==x&&(h(+x+1),n(a))},className:"d-inline btn btn-secondary px-2 py-1 mx-1",value:"+"})]}),(0,t.jsxs)("td",{children:["Total: ",p," \u20ac"]}),(0,t.jsx)("td",{children:(0,t.jsx)("i",{className:"fas fa-times p-2",onClick:function(){c(a)}})})]})}function d(e){var a=e.nextStep,i=(0,l.useState)([]),n=(0,s.Z)(i,2),r=n[0],d=n[1],u=(0,l.useState)(0),x=(0,s.Z)(u,2),h=x[0],m=x[1],j=(0,l.useContext)(o.A).getTotalPrice;return(0,l.useEffect)((function(){d(JSON.parse(localStorage.getItem("cart")))}),[]),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsxs)("div",{className:"col-sm-8",children:[(0,t.jsx)("h4",{children:"Articulos"}),(0,t.jsxs)("table",{className:"table",children:[(0,t.jsx)("thead",{className:"table-secondary text-uppercase",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{scope:"col",children:"articulo"}),(0,t.jsx)("th",{scope:"col",children:"precio"}),(0,t.jsx)("th",{scope:"col",children:"unidades"}),(0,t.jsx)("th",{scope:"col",children:"total"}),(0,t.jsx)("th",{scope:"col"})]})}),(0,t.jsx)("tbody",{children:r.map((function(e,a){return(0,t.jsx)(c,{product:e,final:{FinalPrice:h,setFinalPrice:m}},a)}))})]})]}),(0,t.jsxs)("div",{className:"col-sm mt-2",children:[(0,t.jsxs)("div",{className:" border p-2",children:[(0,t.jsx)("p",{children:"Dale a realizar pedido para terminal la compra"}),(0,t.jsx)("input",{className:"form-check-input ms-2 mt-1 ",type:"checkbox",value:""}),(0,t.jsx)("div",{className:"d-inline ms-3",children:"Pedido Rapido +20$"}),(0,t.jsx)("hr",{}),(0,t.jsxs)("div",{className:"text-uppercase",children:["total: ",j()," $"]})]}),(0,t.jsx)("button",{className:"btn btn-warning w-100 mt-2",onClick:a,children:"Proceder a comprar"})]})]})}function u(e){var a=e.setRegaloText,i=(0,l.useState)(!0),n=(0,s.Z)(i,2),r=n[0],o=n[1];return(0,t.jsxs)("div",{className:"w-50 mx-auto",children:[(0,t.jsx)("div",{className:"h5 text-center",children:"Opciones de entrega"}),(0,t.jsx)("div",{className:"bg-warning",children:(0,t.jsxs)("div",{className:"p-2",children:[(0,t.jsx)("div",{className:"",children:"Regalo:"}),(0,t.jsxs)("div",{className:"py-1",children:[(0,t.jsx)("input",{type:"checkbox",className:"me-2",id:"regalo",onChange:function(){return o(!r)}}),(0,t.jsx)("label",{htmlFor:"regalo",children:"Envolver para regalo 2$"})]}),(0,t.jsx)("br",{}),(0,t.jsx)("textarea",{name:"",id:"",className:"form-control",placeholder:"Mensage",defaultValue:"",onChange:function(e){return a(e.target.value)},disabled:r})]})}),(0,t.jsx)("hr",{}),(0,t.jsx)("div",{className:"",children:(0,t.jsx)("div",{className:"",children:"Coste de envio 10$"})})]})}function x(e){var a=e.setfromData,i=e.form,s=(0,l.useRef)(),n=(0,l.useRef)(),r=(0,l.useRef)(),o=(0,l.useRef)(),c=(0,l.useRef)(),d=(0,l.useRef)(),u=(0,l.useRef)(),x=(0,l.useRef)(),h=(0,l.useRef)(),m=function(e){a({Nombre:s.current.value,Apellidos:n.current.value,Movil:r.current.value,DNI:o.current.value,Calle:c.current.value,pais:d.current.value,Codigo:u.current.value,Poblacion:x.current.value,Provincia:h.current.value})};return(0,t.jsxs)("div",{className:"container-fluid",children:[(0,t.jsx)("div",{className:"h1 text-center",children:"Direccion de envio: "}),(0,t.jsxs)("form",{className:"container-fluid mx-auto w-50 ",onChange:m,children:[(0,t.jsxs)("div",{className:"row mx-auto ",children:[(0,t.jsx)("div",{className:"h5",children:"Datos Personales"}),(0,t.jsxs)("div",{className:"row mb-2",children:[(0,t.jsx)("div",{className:"col",children:(0,t.jsxs)("div",{className:"form-floating",children:[(0,t.jsx)("input",{type:"text",className:"form-control",id:"Nombre",placeholder:" ",ref:s,value:i.Nombre,onChange:m}),(0,t.jsx)("label",{htmlFor:"Nombre",children:"Nombre: "})]})}),(0,t.jsx)("div",{className:"col",children:(0,t.jsxs)("div",{className:"form-floating",children:[(0,t.jsx)("input",{type:"text",className:"form-control",id:"Apellidos",placeholder:" ",ref:n,value:i.Apellidos,onChange:m}),(0,t.jsx)("label",{htmlFor:"Apellidos",children:"Apelldios: "})]})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col",children:(0,t.jsxs)("div",{className:"form-floating",children:[(0,t.jsx)("input",{type:"text",className:"form-control",id:"DNI",placeholder:" ",ref:o,value:i.DNI,onChange:m}),(0,t.jsx)("label",{htmlFor:"DNI",children:"DNI: "})]})}),(0,t.jsx)("div",{className:"col",children:(0,t.jsxs)("div",{className:"form-floating",children:[(0,t.jsx)("input",{type:"tel",className:"form-control",id:"MOVIL",placeholder:" ",ref:r,value:i.Movil,onChange:m}),(0,t.jsx)("label",{htmlFor:"MOVIL",children:"Movil: "})]})})]})]}),(0,t.jsxs)("div",{className:"row mx-auto my-2",children:[(0,t.jsx)("div",{className:"h5",children:"Direccion de envio"}),(0,t.jsxs)("div",{className:"form-floating",children:[(0,t.jsx)("input",{type:"text",className:"form-control",id:"calle",placeholder:" ",ref:c,value:i.Calle,onChange:m}),(0,t.jsx)("label",{htmlFor:"calle",className:"ps-4",children:" Calle: "})]})]}),(0,t.jsxs)("div",{className:"row mx-auto",children:[(0,t.jsxs)("div",{className:"row mb-2",children:[(0,t.jsx)("div",{className:"col",children:(0,t.jsxs)("select",{className:"form-select p-3",id:"pais",ref:d,value:i.pais,onChange:m,children:[(0,t.jsx)("option",{value:"a",disabled:!0,className:"text-muted",children:"Pais"}),(0,t.jsx)("option",{value:"Alemania",children:"Alemania"}),(0,t.jsx)("option",{value:"Andorra",children:"Andorra"}),(0,t.jsx)("option",{value:"Austria",children:"Austria"}),(0,t.jsx)("option",{value:"Belgica",children:"Belgica"}),(0,t.jsx)("option",{value:"Bulgaria",children:"Bulgaria"}),(0,t.jsx)("option",{value:"Chipre",children:"Chipre"}),(0,t.jsx)("option",{value:"Croacia",children:"Croacia"}),(0,t.jsx)("option",{value:"Dinamarca",children:"Dinamarca"}),(0,t.jsx)("option",{value:"Eslovaquia",children:"Eslovaquia"}),(0,t.jsx)("option",{value:"Eslovenia",children:"Eslovenia"}),(0,t.jsx)("option",{value:"Espana",children:"Espana"}),(0,t.jsx)("option",{value:"Estonia",children:"Estonia"}),(0,t.jsx)("option",{value:"Finlandia",children:"Finlandia"}),(0,t.jsx)("option",{value:"Francia",children:"Francia"}),(0,t.jsx)("option",{value:"Grecia",children:"Grecia"}),(0,t.jsx)("option",{value:"Hungria",children:"Hungria"}),(0,t.jsx)("option",{value:"Irlanda",children:"Irlanda"}),(0,t.jsx)("option",{value:"Italia",children:"Italia"}),(0,t.jsx)("option",{value:"Letonia",children:"Letonia"}),(0,t.jsx)("option",{value:"Lituania",children:"Lituania"}),(0,t.jsx)("option",{value:"Luxemburgo",children:"Luxemburgo"}),(0,t.jsx)("option",{value:"Malta",children:"Malta"}),(0,t.jsx)("option",{value:"Paises Bajos",children:"Paises Bajos"}),(0,t.jsx)("option",{value:"Polonia",children:"Polonia"}),(0,t.jsx)("option",{value:"Portugal",children:"Portugal"}),(0,t.jsx)("option",{value:"Reino Unido",children:"Reino Unido"}),(0,t.jsx)("option",{value:"Suecia",children:"Suecia"})]})}),(0,t.jsx)("div",{className:"col",children:(0,t.jsxs)("div",{className:"form-floating",children:[(0,t.jsx)("input",{type:"number",max:99999,min:1e4,maxLength:5,className:"form-control",id:"Codigo",placeholder:" ",ref:u,value:i.Codigo,onChange:m}),(0,t.jsx)("label",{htmlFor:"Codigo",children:"Codigo Postal: "})]})})]}),(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col",children:(0,t.jsxs)("div",{className:"form-floating",children:[(0,t.jsx)("input",{type:"text",className:"form-control",id:"Poblacion",placeholder:" ",ref:x,value:i.Poblacion,onChange:m}),(0,t.jsx)("label",{htmlFor:"Poblacion",children:"Poblacion: "})]})}),(0,t.jsx)("div",{className:"col",children:(0,t.jsxs)("select",{className:"form-select p-3",id:"Provincia",ref:h,value:i.Provincia,onChange:m,children:[(0,t.jsx)("option",{value:"a",disabled:!0,className:"text-muted",children:"Provincia"}),"Espana"==i.pais?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("option",{value:"A Coruna",children:"A Coruna"}),(0,t.jsx)("option",{value:"Alava",children:"Alava"}),(0,t.jsx)("option",{value:"Albacete",children:"Albacete"}),(0,t.jsx)("option",{value:"Alicante",children:"Alicante"}),(0,t.jsx)("option",{value:"Almeria",children:"Almeria"}),(0,t.jsx)("option",{value:"Asturias",children:"Asturias"}),(0,t.jsx)("option",{value:"Avila",children:"Avila"}),(0,t.jsx)("option",{value:"Badajoz",children:"Badajoz"}),(0,t.jsx)("option",{value:"Baleares",children:"Baleares"}),(0,t.jsx)("option",{value:"Barcelona",children:"Barcelona"}),(0,t.jsx)("option",{value:"Burgos",children:"Burgos"}),(0,t.jsx)("option",{value:"Caceres",children:"Caceres"}),(0,t.jsx)("option",{value:"Cadiz",children:"Cadiz"}),(0,t.jsx)("option",{value:"Cantabria",children:"Cantabria"}),(0,t.jsx)("option",{value:"Castellon",children:"Castellon"}),(0,t.jsx)("option",{value:"Ceuta",children:"Ceuta"}),(0,t.jsx)("option",{value:"Ciudad",children:"Ciudad Real"}),(0,t.jsx)("option",{value:"Cordoba",children:"Cordoba"}),(0,t.jsx)("option",{value:"Cuenca",children:"Cuenca"}),(0,t.jsx)("option",{value:"Girona",children:"Girona"}),(0,t.jsx)("option",{value:"Granada",children:"Granada"}),(0,t.jsx)("option",{value:"Guadalajara",children:"Guadalajara"}),(0,t.jsx)("option",{value:"Guipuzcoa",children:"Guipuzcoa"}),(0,t.jsx)("option",{value:"Huelva",children:"Huelva"}),(0,t.jsx)("option",{value:"Huesca",children:"Huesca"}),(0,t.jsx)("option",{value:"Jaen",children:"Jaen"}),(0,t.jsx)("option",{value:"La",children:"La Rioja"}),(0,t.jsx)("option",{value:"Las",children:"Las Palmas"}),(0,t.jsx)("option",{value:"Leon",children:"Leon"}),(0,t.jsx)("option",{value:"Lleida",children:"Lleida"}),(0,t.jsx)("option",{value:"Lugo",children:"Lugo"}),(0,t.jsx)("option",{value:"Madrid",children:"Madrid"}),(0,t.jsx)("option",{value:"Malaga",children:"Malaga"}),(0,t.jsx)("option",{value:"Melilla",children:"Melilla"}),(0,t.jsx)("option",{value:"Murcia",children:"Murcia"}),(0,t.jsx)("option",{value:"Navarra",children:"Navarra"}),(0,t.jsx)("option",{value:"Ourense",children:"Ourense"}),(0,t.jsx)("option",{value:"Palencia",children:"Palencia"}),(0,t.jsx)("option",{value:"Pontevedra",children:"Pontevedra"}),(0,t.jsx)("option",{value:"Salamanca",children:"Salamanca"}),(0,t.jsx)("option",{value:"Segovia",children:"Segovia"}),(0,t.jsx)("option",{value:"Sevilla",children:"Sevilla"}),(0,t.jsx)("option",{value:"Soria",children:"Soria"}),(0,t.jsx)("option",{value:"Tarragona",children:"Tarragona"}),(0,t.jsx)("option",{value:"Tenerife",children:"Tenerife"}),(0,t.jsx)("option",{value:"Teruel",children:"Teruel"}),(0,t.jsx)("option",{value:"Toledo",children:"Toledo"}),(0,t.jsx)("option",{value:"Valencia",children:"Valencia"}),(0,t.jsx)("option",{value:"Valladolid",children:"Valladolid"}),(0,t.jsx)("option",{value:"Vizcaya",children:"Vizcaya"}),(0,t.jsx)("option",{value:"Zamora",children:"Zamora"}),(0,t.jsx)("option",{value:"Zaragoza",children:"Zaragoza"})]}):(0,t.jsxs)("option",{children:[" ",i.pais]})]})})]})]})]})]})}function h(){return(0,t.jsxs)("div",{className:"w-50 mx-auto mt-4",children:[(0,t.jsx)("h4",{className:"text-center",children:"Payment "}),(0,t.jsx)("div",{className:"",children:(0,t.jsxs)("div",{className:"list-group",children:[(0,t.jsxs)("label",{className:"list-group-item",children:[(0,t.jsx)("input",{className:"form-check-input me-1",type:"radio",value:"",name:"coin",defaultChecked:!0}),"Ethereum  ",(0,t.jsx)("img",{src:i(20353),width:30,height:30,alt:""})]}),(0,t.jsxs)("label",{className:"list-group-item",children:[(0,t.jsx)("input",{className:"form-check-input me-1",disabled:!0,type:"radio",value:"",name:"coin"}),"Bitcoin ",(0,t.jsx)("img",{src:i(39765),width:30,height:30,alt:""}),(0,t.jsx)("span",{className:"text-muted ms-3",children:"Unaviable at the moment"})]}),(0,t.jsxs)("label",{className:"list-group-item",children:[(0,t.jsx)("input",{className:"form-check-input me-1",disabled:!0,type:"radio",value:"",name:"coin"}),"BitcoinCash ",(0,t.jsx)("img",{src:i(49231),width:30,height:30,alt:""}),(0,t.jsx)("span",{className:"text-muted ms-3",children:"Unaviable at the moment"})]}),(0,t.jsxs)("label",{className:"list-group-item",children:[(0,t.jsx)("input",{className:"form-check-input me-1",disabled:!0,type:"radio",value:"",name:"coin"}),"Monero  ",(0,t.jsx)("img",{src:i(12938),width:30,height:30,alt:""}),(0,t.jsx)("span",{className:"text-muted ms-3",children:"Unaviable at the moment"})]})]})})]})}var m=i(15861),j=i(87757),p=i.n(j);function v(e){var a=e.form,r=e.RegaloText,c=(0,l.useContext)(o.A).getTotalPrice,d=(0,l.useState)(0),u=(0,s.Z)(d,2),x=u[0],h=u[1],j=(0,n.x)(),v=function(){var e=(0,m.Z)(p().mark((function e(){var a,i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={address:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"},e.next=3,j.token.getTokenPrice(a);case 3:i=e.sent,h((c()/i.usdPrice).toFixed(6));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){x||v()}),[]),(0,t.jsx)("div",{children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"col",children:[(0,t.jsxs)("div",{className:"row border-bottom border-secondary mb-4 mt-2",children:[(0,t.jsx)("h5",{children:"Direccion De envio"}),(0,t.jsxs)("div",{className:"",children:[a.Nombre," ",a.Apellidos]}),(0,t.jsxs)("div",{className:"",children:[a.Calle," ",a.Codigo," ",a.Poblacion," ",a.Provincia," ",a.pais]})]}),(0,t.jsxs)("div",{className:"row border-bottom border-secondary mb-4",children:[(0,t.jsx)("h5",{children:"Direccion De Facturacion"}),(0,t.jsxs)("div",{className:"",children:[a.Nombre," ",a.Apellidos]}),(0,t.jsxs)("div",{className:"",children:[a.Calle," ",a.Codigo,"  ",a.Poblacion," ",a.Provincia," ",a.pais]})]}),(0,t.jsxs)("div",{className:"row border-bottom border-secondary mb-4",children:[(0,t.jsx)("h5",{children:"Metodo de pago"}),(0,t.jsxs)("div",{className:"",children:[(0,t.jsxs)("div",{className:"",children:["Moneda de pago: ETH ",(0,t.jsx)("img",{src:i(20353),className:"mb-4",height:20,width:20,alt:""})]}),(0,t.jsxs)("div",{className:"",children:["Euros: ",c(),"$"]}),(0,t.jsxs)("div",{className:"",children:["Eth: ",x," ",(0,t.jsx)("img",{src:i(20353),className:"mb-4",height:20,width:20,alt:""})]})]})]}),(0,t.jsxs)("div",{className:"row border-bottom border-secondary mb-4",children:[(0,t.jsx)("h5",{children:"Opcion de regalo"}),(0,t.jsxs)("div",{className:"",children:[(0,t.jsx)("span",{className:"d-block",children:"texto:"}),(0,t.jsx)("textarea",{disabled:!0,style:{resize:"none"},value:r})]})]})]})})})}function f(e){var a=e.Step,i=e.nextStep,s=e.setfromData,l=e.form,n=e.RegaloText,r=e.setRegaloText;switch(a){case 1:return(0,t.jsx)(d,{nextStep:i});case 2:return(0,t.jsx)(x,{setfromData:s,form:l});case 3:return(0,t.jsx)(u,{setRegaloText:r});case 4:return(0,t.jsx)(h,{});case 5:return(0,t.jsx)(v,{form:l,RegaloText:n});default:return(0,t.jsx)("div",{className:"",children:"123"})}}var N=i(74569),b=i.n(N),g=i(59455),C=i(21830),y=i.n(C);function w(e){var a=e.price,i=e.text,s=(0,l.useContext)(o.A),c=s.cartItems,d=s.clearCart,u=(0,n.Nr)(),x=u.Moralis,h=u.isAuthenticated,m=u.account,j=(0,r.s0)(),p=(0,n.py)({type:"native",amount:x.Units.ETH(a),receiver:"0x18Ac030B5A633f2b79c79233E732878f88A9e28C"}),v=p.fetch,f=p.isFetching;return h&&m?(0,t.jsx)("button",{onClick:function(){v().then((function(e){var s=e.hash,l=m,n=JSON.stringify(c);b().post(g.T+"orders",{hash:s,ethAdress:l,cart:n,price:a,text:i}).then((function(){y().fire({titleText:"Order Completed",text:"Your order has been made",icon:"success"}),d(),setTimeout((function(){j("/")}),3e3)}))})).catch((function(){y().fire("Error","Error with the order","warning")}))},disabled:f,className:"btn btn-warning btn-lg w-25",children:"Terminal Compra"}):(0,t.jsx)("h1",{children:"no account"})}function P(){var e=(0,l.useState)(1),a=(0,s.Z)(e,2),c=a[0],d=a[1],u=(0,l.useState)(20),x=(0,s.Z)(u,2),h=x[0],m=x[1],j=(0,r.s0)(),p=(0,l.useContext)(o.A).getTotalPrice,v=(0,l.useState)(0),N=(0,s.Z)(v,2),b=N[0],g=N[1],C=(0,n.x)(),y=(0,l.useState)({Nombre:"",Apellidos:"",Movil:"",DNI:"",Calle:"",pais:"",Codigo:"",Poblacion:"",Provincia:""}),P=(0,s.Z)(y,2),A=P[0],S=P[1],k=(0,l.useState)(""),T=(0,s.Z)(k,2),R=T[0],E=T[1],M=function(){c<5&&(d(c+1),m(h+20))},F=function(){c>1&&(m(h-20),d(c-1))};return(0,l.useEffect)((function(){C.token.getTokenPrice({address:"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"}).then((function(e){g((p()/e.usdPrice).toFixed(6))}))}),[]),(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("header",{className:"mb-5",children:(0,t.jsx)("img",{src:i(27442),alt:"",className:"img-fluid",onClick:function(){j("/")}})}),(0,t.jsx)("div",{className:"progress",children:(0,t.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:h+"%"},"aria-valuenow":h,"aria-valuemin":"0","aria-valuemax":"100"})}),(0,t.jsx)(f,{nextStep:M,form:A,RegaloText:R,setfromData:S,setRegaloText:E,Step:c}),1!==c&&5!==c&&(0,t.jsxs)("div",{className:"w-50 mx-auto d-flex justify-content-between mt-3",children:[(0,t.jsx)("button",{className:"btn btn-primary px-5 py-3",onClick:F,children:"Back"}),(0,t.jsx)("button",{className:"btn btn-primary px-5 py-3",onClick:M,children:"Next"})]}),5===c&&(0,t.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,t.jsx)("button",{className:"btn btn-primary btn-lg w-25",onClick:F,children:"Back"}),(0,t.jsx)(w,{price:b,text:R})]})]})}var A=P},12938:function(e,a,i){e.exports=i.p+"static/media/Monero.26719489d90f2e304ca0.png"},39765:function(e,a,i){e.exports=i.p+"static/media/btc.0b9123627d13f41b0125.png"},49231:function(e,a,i){e.exports=i.p+"static/media/btcCash.fac5d2e4be8940ecbb3b.png"},20353:function(e,a,i){e.exports=i.p+"static/media/eth.6245256acd18182b6571.png"}}]);
//# sourceMappingURL=176.79c7f26b.chunk.js.map