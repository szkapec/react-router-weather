(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],[,,function(e,a,t){e.exports=t.p+"static/media/002-cloudy-13.2776a530.svg"},,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/009-rain-26.a776a801.svg"},,function(e,a,t){e.exports=t.p+"static/media/013-sun-8.c88df3f7.svg"},,,function(e,a,t){e.exports=t.p+"static/media/017-thermometer-7.b2a58d9d.svg"},function(e,a,t){e.exports=t.p+"static/media/024-thermometer-5.61d0be69.svg"},,,,,function(e,a,t){e.exports=t.p+"static/media/003-snow-8.a57b7ecd.svg"},function(e,a,t){e.exports=t.p+"static/media/014-cloud-8.0c9f38dc.svg"},function(e,a,t){e.exports=t.p+"static/media/092-snowflake.51bbef33.svg"},,function(e,a,t){},,,function(e,a,t){e.exports=t.p+"static/media/102-smartphone.e4143c2f.svg"},,,function(e,a,t){e.exports=t.p+"static/media/027-wind-sign.edf700e9.svg"},function(e,a,t){e.exports=t(49)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),l=t(28),s=t.n(l),c=(t(26),t(5)),r=t(6),m=t(8),o=t(7),d=t(9),u=t(3),p=t(14),g=(t(38),function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(i)))).state={wartosc:0},t.licz=function(){var e=document.querySelector("#currentValue"),a=document.querySelector("#defaultSlider");a.addEventListener("change",(function(){e.innerHTML=a.value,t.props.onSubmit(a.value),t.setState({wartosc:a.value})}))},t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.licz()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{id:"main"},i.a.createElement("input",{id:"defaultSlider",type:"range",min:"0",max:"24"}),i.a.createElement("div",{className:"suwak__div"},i.a.createElement("div",{className:"suwak_zegar"},"0:00")),i.a.createElement("div",{className:"suwak__div3"},i.a.createElement("div",{className:"suwak_zegar"},"3:00")),i.a.createElement("div",{className:"suwak__div6"},i.a.createElement("div",{className:"suwak_zegar"},"6:00")),i.a.createElement("div",{className:"suwak__div9"},i.a.createElement("div",{className:"suwak_zegar"},"9:00")),i.a.createElement("div",{className:"suwak__div12"},i.a.createElement("div",{className:"suwak_zegar"},"12:00")),i.a.createElement("div",{className:"suwak__div15"},i.a.createElement("div",{className:"suwak_zegar"},"15:00")),i.a.createElement("div",{className:"suwak__div18"},i.a.createElement("div",{className:"suwak_zegar"},"18:00")),i.a.createElement("div",{className:"suwak__div21"},i.a.createElement("div",{className:"suwak_zegar"},"21:00")),i.a.createElement("div",{className:"suwak__div0"},i.a.createElement("div",{className:"suwak_zegar"})),i.a.createElement("span",{id:"currentValue"})," ",i.a.createElement("u",{className:"currentValue"},":00")))}}]),a}(i.a.Component)),v=(t(39),t(2)),h=t.n(v),E=t(11),w=t.n(E),f=t(13),z=t.n(f),N=function(e){var a=e.props,t=a.tempA,n=a.wilgotnoscA,l=a.opadyA,s=a.wiatrA,c=a.ktoraGodzinaA,r=a.cityA,m=a.tempB,o=a.wilgotnoscB,d=a.opadyB,u=a.wiatrB,p=a.ktoraGodzinaB,g=a.tempC,v=a.wilgotnoscC,E=a.opadyC,f=a.wiatrC,N=a.ktoraGodzinaC,b=a.tempD,y=a.wilgotnoscD,_=a.opadyD,k=a.wiatrD,I=a.godzinaD;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"wyswietl__miasto"},r?"Miasto: ".concat(r):null),i.a.createElement("div",{className:"wyswietl__grid"},i.a.createElement("div",{className:"wyswietl__pierwszy"},i.a.createElement("div",null,c?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Godzina: "),c):null),i.a.createElement("div",null,t?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Temp: "),t):null),i.a.createElement("div",null,n?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Wilgotno\u015b\u0107: "),n,"%"):null),i.a.createElement("div",null,l?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Opady: "),l,"%"):null),i.a.createElement("div",null,s?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Wiatr: "),10*s," km/h"):null)),i.a.createElement("div",{className:"wyswietl__drugi"},i.a.createElement("div",null,p?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Godzina: "),p):null),i.a.createElement("div",null,m?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Temp: "),m):null),i.a.createElement("div",null,o?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Wilgotno\u015b\u0107: "),o,"%"):null),i.a.createElement("div",null,d?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Opady: "),d,"%"):null),i.a.createElement("div",null,u?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Wiatr: "),10*u," km/h"):null)),i.a.createElement("div",{className:"wyswietl__trzeci"},i.a.createElement("div",null,N?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Godzina: "),N):null),i.a.createElement("div",null,g?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Temp: "),g):null),i.a.createElement("div",null,v?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Wilgotno\u015b\u0107: "),v,"%"):null),i.a.createElement("div",null,E?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Opady: "),E,"%"):null),i.a.createElement("div",null,f?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Wiatr: "),10*f," km/h"):null))),i.a.createElement("div",{className:"wyswietl__kreska"}),b?i.a.createElement("div",{className:"wyswietl_pogodaGodzinowa",style:{display:"grid"}},i.a.createElement("div",{style:{gridArea:"1/1/4/2"}},y?_>75?i.a.createElement("img",{className:"wyswietl_img",src:w.a,alt:"deszcz"}):_<40?i.a.createElement("img",{className:"wyswietl_img",src:z.a,alt:"slonecznie"}):i.a.createElement("img",{className:"wyswietl_img",src:h.a,alt:"przejasnienia"}):null),i.a.createElement("div",null,b?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Temperatura: "),b,"\xb0C"):null),i.a.createElement("div",null,y?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Wilgotno\u015b\u0107: "),y,"%"):null),i.a.createElement("div",null,_?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Deszcz: "),_,"%"):null),i.a.createElement("div",null,I?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Godzina: "),I.substring(11,16)):null),i.a.createElement("div",null,k?i.a.createElement("div",null,i.a.createElement("span",{className:"pogrubienie"},"Wiatr: "),10*k," km/h"):null)):i.a.createElement("div",{style:{margin:"20px 20px 20px",fontWeight:"700"}},"Sprawdz pogod\u0119 co trzy godziny!"))},b=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(i)))).state={wartoscSuwaka:"",flaga:!1,miasto:"Lublin",tempA:"",wilgotnoscA:"",opadyA:"",wiatrA:"",ktoraGodzinaA:"",cityA:"",wilgotnoscB:"",opadyB:"",wiatrB:"",ktoraGodzinaB:"",wilgotnoscC:"",opadyC:"",wiatrC:"",ktoraGodzinaC:"",tempD:"",godzinaD:"",wiatrD:"",opadyD:"",wilgotnoscD:""},t.changeInput=function(e){t.setState({miasto:e.target.value})},t.sprawdzWartoscSuwaka=function(e){t.setState({wartoscSuwaka:e})},t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"componentDidUpdate",value:function(e,a){var t=this;if(!(this.state.miasto.length<3)&&(a.miasto!==this.state.miasto||a.wartoscSuwaka!==this.state.wartoscSuwaka)){var n="http://api.openweathermap.org/data/2.5/forecast?q=".concat(this.state.miasto,"&appid=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric");fetch(n).then((function(e){if(e.ok)return e;throw Error("Blad")})).then((function(e){return e.json()})).then((function(e){for(var a=e.list[0].dt_txt.substring(11,19),n=e.list[1].dt_txt.substring(11,19),i=e.list[2].dt_txt.substring(11,19),l=0;l<15;l++)if(e.list[l]){var s=e.list[l].dt_txt.substring(11,13);24==t.state.wartoscSuwaka&&t.setState({wartoscSuwaka:"00"}),s!==t.state.wartoscSuwaka&&s!==0+t.state.wartoscSuwaka||t.setState({tempD:e.list[l].main.temp,godzinaD:e.list[l].dt_txt,wilgotnoscD:e.list[l].main.humidity,opadyD:e.list[l].clouds.all,wiatrD:e.list[l].wind.speed})}t.setState({flaga:!1,tempA:e.list[0].main.temp,wilgotnoscA:e.list[0].main.humidity,opadyA:e.list[0].clouds.all,wiatrA:e.list[0].wind.speed,ktoraGodzinaA:a,cityA:e.city.name,tempB:e.list[1].main.temp,wilgotnoscB:e.list[1].main.humidity,opadyB:e.list[1].clouds.all,wiatrB:e.list[1].wind.speed,ktoraGodzinaB:n,tempC:e.list[1].main.temp,wilgotnoscC:e.list[1].main.humidity,opadyC:e.list[1].clouds.all,wiatrC:e.list[1].wind.speed,ktoraGodzinaC:i})})).catch((function(e){console.log(e+"error"),t.setState({flaga:!0,tempA:"",wilgotnoscA:"",opadyA:"",wiatrA:"",ktoraGodzinaA:"",cityA:"",tempB:"",wilgotnoscB:"",opadyB:"",wiatrB:"",ktoraGodzinaB:"",tempC:"",wilgotnoscC:"",opadyC:"",wiatrC:"",ktoraGodzinaC:""})}))}}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"ViewCurrent_input__miasto"},"Podaj miasto: ",i.a.createElement("input",{className:"ViewCurrent_input__miasto_text",onChange:this.changeInput,type:"text",placeholder:"wpisz miasto"})),i.a.createElement("div",null,this.state.opadyA?i.a.createElement(N,{props:this.state}):this.state.miasto.length>4&&"Lublin"!=this.state.miasto?i.a.createElement("div",{className:"ViewCurrent_wyswietlenieWarunkowe"},"Trwa Wyszukiwanie..."):null,this.state.opadyA?i.a.createElement(g,{onSubmit:this.sprawdzWartoscSuwaka}):null))}}]),a}(i.a.Component),y=t(29),_=t.n(y),k=(t(40),function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"100px repeat(2,1fr)",gridTemplateRows:"repeat(2,80px)",backgroundColor:"#1B4778"}},i.a.createElement("div",{style:{gridArea:"1/1/3/2",backgroundColor:"#1B4778",borderLeft:"3px solid #1B4778"}},i.a.createElement("img",{alt:"stopnie",style:{width:"80px",marginTop:"40px"},src:_.a})),i.a.createElement("div",{style:{gridArea:"1/2/2/3",marginLeft:"30px",textAlign:"center",marginTop:"20px"}},"MP 10",i.a.createElement("p",{style:{fontWeight:"600"}},"13% normy")),i.a.createElement("div",{style:{gridArea:"2/2/3/3",marginLeft:"30px",textAlign:"center"}},"PM 2.5:",i.a.createElement("p",{style:{fontWeight:"600"}},"19% normy")),i.a.createElement("div",{style:{gridArea:"1/3/3/4",marginTop:"40px",textAlign:"center"}},"Jako\u015b\u0107 powietrza:",i.a.createElement("p",{style:{fontWeight:"600"}},"Bardzo dobra"))),i.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gridTemplateRows:"60px"}},i.a.createElement("button",{className:"hoverr",style:{border:" 10px solid #1B4778",backgroundColor:"rgb(66, 124, 191)"}},i.a.createElement(u.b,{className:"navigationItemLink2",id:"pierwszy",to:"pogoda-aktualna"},"Aktualna pogoda")),i.a.createElement("button",{className:"hoverr",style:{border:" 10px solid #1B4778",backgroundColor:"rgb(66, 124, 191)"}},i.a.createElement(u.b,{className:"navigationItemLink2",to:"/pogoda"},"Pogoda godzinowa")),i.a.createElement("button",{className:"hoverr",style:{border:" 10px solid #1B4778",backgroundColor:"rgb(66, 124, 191)"}},i.a.createElement(u.b,{className:"navigationItemLink2",to:"/pogoda-5-dni"},"Pogoda na 5 dni"))))}),I=t(16),P=t.n(I),S=t(17),x=t.n(S),C=(t(46),["https://api.openweathermap.org/data/2.5/weather?q=wroclaw&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric","https://api.openweathermap.org/data/2.5/weather?q=gdansk&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric","https://api.openweathermap.org/data/2.5/weather?q=zakopane&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric","https://api.openweathermap.org/data/2.5/weather?q=Poznan&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric"]),A=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(i)))).state={miasto:"",temperatura:"",wilgotnosc:"",fetchG:[],fetchZ:[],fetchW:[],fetchL:[]},t.wykonajA=function(){C.map((function(e){fetch(e).then((function(e){if(e.ok)return e;throw Error("B\u0142ad")})).then((function(e){return e.json()})).then((function(e){"Wroc\u0142aw"===e.name&&t.setState({fetchW:e}),"Gda\u0144sk"===e.name&&t.setState({fetchG:e}),"Zakopane"===e.name&&t.setState({fetchZ:e}),"Pozna\u0144"===e.name?t.setState({fetchL:e}):console.log("blad")}))}))},t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"componentWillMount",value:function(){this.wykonajA()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"viewPogodaMiejscowa"},i.a.createElement("div",{className:"viewPogoda__div opis"},"Miasto"),i.a.createElement("div",{className:"opis"},"Max \xb0C"),i.a.createElement("div",null),i.a.createElement("div",{className:"opis"},"Min \xb0C"),i.a.createElement("div",null),i.a.createElement("div",{style:{borderTop:"1px solid black"}},i.a.createElement("div",{className:"viewPogoda__div"},this.state.fetchW.name)),i.a.createElement("div",{style:{borderTop:"1px solid black"}},i.a.createElement("div",null,this.state.fetchW.name?this.state.fetchW.main.temp_max:null,"\xb0C")),i.a.createElement("div",{className:"ViewPogodaImagesDiv"},this.state.fetchW.name?this.state.fetchW.main.humidity<70?i.a.createElement("img",{className:"viewPogodaImages",alt:"przejasnieniaaa",src:h.a}):this.state.fetchW.main.humidity>70&&this.state.fetchW.clouds.all>70?i.a.createElement("img",{className:"viewPogodaImages",alt:"deszcz",src:w.a}):this.state.fetchW.clouds.all<40?i.a.createElement("img",{className:"viewPogodaImages",alt:"deszcz",src:z.a}):i.a.createElement("img",{className:"viewPogodaImages",alt:"przejsanienia",src:h.a}):null),i.a.createElement("div",{style:{borderTop:"1px solid black"}},i.a.createElement("div",null,this.state.fetchW.name?this.state.fetchW.main.temp_min:null,"\xb0C ")),i.a.createElement("div",{className:"ViewPogodaImagesDiv"},this.state.fetchW.name?this.state.fetchW.main.temp_min<0?i.a.createElement("img",{className:"viewPogodaImages",alt:"mroz",src:P.a}):i.a.createElement("img",{className:"viewPogodaImages",alt:"dodatnia",src:x.a}):null),i.a.createElement("div",{style:{borderTop:"1px solid black"}},i.a.createElement("div",{className:"viewPogoda__div"},this.state.fetchZ.name)),i.a.createElement("div",{style:{borderTop:"1px solid black"}},i.a.createElement("div",null,this.state.fetchZ.name?this.state.fetchZ.main.temp_max:null,"\xb0C")," "),i.a.createElement("div",{className:"ViewPogodaImagesDiv"},this.state.fetchZ.name?this.state.fetchZ.main.humidity<70?i.a.createElement("img",{alt:"przejasnienia",className:"viewPogodaImages",src:h.a}):this.state.fetchZ.main.humidity>70&&this.state.fetchZ.clouds.all>70?i.a.createElement("img",{className:"viewPogodaImages",alt:"deszcz",src:w.a}):this.state.fetchZ.clouds.all<40?i.a.createElement("img",{className:"viewPogodaImages",alt:"slonce",src:z.a}):i.a.createElement("img",{alt:"przejasnienia",src:h.a}):null),i.a.createElement("div",{style:{borderTop:"1px solid black"}},i.a.createElement("div",null,this.state.fetchZ.name?this.state.fetchZ.main.temp_min:null,"\xb0C")," "),i.a.createElement("div",{className:"ViewPogodaImagesDiv"},this.state.fetchZ.name?this.state.fetchZ.main.temp_min<0?i.a.createElement("img",{alt:"mroz",className:"viewPogodaImages",src:P.a}):i.a.createElement("img",{className:"viewPogodaImages",alt:"dodatnia",src:x.a}):null),i.a.createElement("div",{style:{borderTop:"1px solid black"}},i.a.createElement("div",{className:"viewPogoda__div"},this.state.fetchG.name)),i.a.createElement("div",{style:{borderTop:"1px solid black"}},i.a.createElement("div",null,this.state.fetchG.name?this.state.fetchG.main.temp_max:null,"\xb0C")," "),i.a.createElement("div",{className:"ViewPogodaImagesDiv"},this.state.fetchG.name?this.state.fetchG.main.humidity<70?i.a.createElement("img",{alt:"przejasnienia",className:"viewPogodaImages",src:h.a}):this.state.fetchG.main.humidity>70&&this.state.fetchG.clouds.all>70?i.a.createElement("img",{className:"viewPogodaImages",alt:"deszcz",src:w.a}):this.state.fetchG.clouds.all<40?i.a.createElement("img",{className:"viewPogodaImages",alt:"slonce",src:z.a}):i.a.createElement("img",{className:"viewPogodaImages",alt:"tezchyba",lassName:"viewPogodaImages",src:h.a}):null),i.a.createElement("div",{style:{borderTop:"1px solid black"}},i.a.createElement("div",null,this.state.fetchG.name?this.state.fetchG.main.temp_min:null,"\xb0C")," "),i.a.createElement("div",{className:"ViewPogodaImagesDiv"},this.state.fetchG.name?this.state.fetchG.main.temp_min<0?i.a.createElement("img",{alt:"mroz",className:"viewPogodaImages",src:P.a}):i.a.createElement("img",{alt:"dodatnia",className:"viewPogodaImages",src:x.a}):null),i.a.createElement("div",{style:{borderTop:"1px solid black"}},i.a.createElement("div",{className:"viewPogoda__div"},this.state.fetchL.name)),i.a.createElement("div",{style:{borderTop:"1px solid black"}},i.a.createElement("div",null,this.state.fetchL.name?this.state.fetchL.main.temp_max:null,"\xb0C")," "),i.a.createElement("div",{className:"ViewPogodaImagesDiv"},this.state.fetchL.name?this.state.fetchL.main.humidity<70?i.a.createElement("img",{alt:"przejasnienia",className:"viewPogodaImages",src:h.a}):this.state.fetchL.main.humidity>70&&this.state.fetchL.clouds.all>70?i.a.createElement("img",{className:"viewPogodaImages",alt:"deszcz",src:w.a}):this.state.fetchL.clouds.all<40?i.a.createElement("img",{alt:"slonce",className:"viewPogodaImages",src:z.a}):i.a.createElement("img",{alt:"przejasnienia",className:"viewPogodaImages",src:h.a}):null),i.a.createElement("div",{style:{borderTop:"1px solid black"}},i.a.createElement("div",null,this.state.fetchL.name?this.state.fetchL.main.temp_min:null,"\xb0C")," "),i.a.createElement("div",{className:"ViewPogodaImagesDiv"},this.state.fetchL.name?this.state.fetchL.main.temp_min<0?i.a.createElement("img",{alt:"mroz",className:"viewPogodaImages",src:P.a}):i.a.createElement("img",{alt:"dodatniatemp",className:"viewPogodaImages",src:x.a}):null)))}}]),a}(i.a.Component),j=t(22),L=t.n(j),V=t(32),D=t.n(V),O=t(23),W=t.n(O),G=t(24),B=t.n(G),T=(t(47),"https://api.openweathermap.org/data/2.5/weather?q=Warszawa&APPID=8c0ca88fe2b8fe6d6c954e8c13f95f86&units=metric"),M=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),s=0;s<n;s++)l[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(l)))).state={value:"",date:"",miasto:"Lublin",wschod:"",zachod:"",temperatura:"",wilgotnosc:"",wiatr:"",error:!1,zachmurzenie:"",dzien:"",miesiac:"",rok:"",godzina:"",minuta:"",czas:"",cisnienie:""},t.sprawdz=function(){if(t.state.wilgotnosc>70){if(t.state.temperatura>0)return i.a.createElement("div",{className:"ViewStart__img"},i.a.createElement("img",{className:"ViewStart__img1",src:w.a,alt:w.a}),i.a.createElement("p",null,"Deszcz"));if(t.state.temperatura<=0)return i.a.createElement("div",{className:"ViewStart__img"},i.a.createElement("img",{className:"ViewStart__img1",src:L.a,alt:L.a}),i.a.createElement("p",null,"Snieg"))}else{if(t.state.zachmurzenie>70)return i.a.createElement("div",{className:"ViewStart__img"},i.a.createElement("img",{className:"ViewStart__img1",src:W.a,alt:W.a}),i.a.createElement("p",null,"Zachmurzone"));if(t.state.zachmurzenie<70&&t.state.zachmurzenie>40)return i.a.createElement("div",{className:"ViewStart__img"},i.a.createElement("img",{className:"ViewStart__img1",src:h.a,alt:"przejasnienia"}),i.a.createElement("p",null,"Liczne przejasnienia"));if(t.state.zachmurzenie<=40)return i.a.createElement("div",{className:"ViewStart__img"},i.a.createElement("img",{className:"ViewStart__img1",src:z.a,alt:"slonce"}),i.a.createElement("p",null,"S\u0142onecznie"))}},t.wiatr=function(){if(t.state.wiatr>60)return i.a.createElement("div",{className:" ViewStart__img ViewStart__imgAlert"},i.a.createElement("img",{className:"ViewStart__img1",src:D.a,alt:"wiatr"}),i.a.createElement("p",null,"Uwaga silny wiatr!"))},t.temperatura=function(){return t.state.temperatura>0?i.a.createElement("div",{className:"ViewStart__img"},i.a.createElement("img",{className:"ViewStart__img1",src:x.a,alt:"dodatniaTemp"}),i.a.createElement("p",null,"Dodatnia temperatura")):t.state.temperatura<=0?i.a.createElement("div",{className:"ViewStart__img"},i.a.createElement("img",{className:"ViewStart__img1",src:P.a,alt:"mroz"}),i.a.createElement("p",null,"Mr\xf3z")):void 0},t.polaczenie=function(){fetch(T).then((function(e){if(e.ok)return e;throw Error("B\u0142ad")})).then((function(e){return e.json()})).then((function(e){var a=new Date,n=a.getDate(),i=a.getMonth(),l=a.getFullYear(),s=a.getHours(),c=a.getMinutes(),r=(new Date).toLocaleString();t.setState((function(a){return{error:!1,date:r,miasto:e.name,wschod:e.sys.sunrise,zachod:e.sys.sunset,temperatura:e.main.temp,cisnienie:e.main.pressure,wilgotnosc:e.main.humidity,wiatr:e.wind.speed,zachmurzenie:e.clouds.all,dzien:n,miesiac:i,rok:l,godzina:s,minuta:c,czas:r}}))}))},t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.polaczenie()}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",{className:"ViewStart__h1"},i.a.createElement("img",{className:"viewStart_sniezka",src:B.a})," Witam na stronie poswi\u0119conej pogodzie ",i.a.createElement("img",{className:"viewStart_sniezka1",src:B.a})),i.a.createElement("h2",{className:"ViewStart__h2"},"Nie chcesz zmokn\u0105c? ",i.a.createElement("span",null,"sprawdz pogod\u0119!")),i.a.createElement("div",{className:"ViewStart__pogoda"},"Pogoda teraz-dzisiaj godz:",this.state.godzina<10?0+this.state.godzina:this.state.godzina,":",this.state.minuta<10?0+this.state.minuta:this.state.minuta),i.a.createElement("div",{className:"ViewStart_city"},this.state.miasto),i.a.createElement("div",{className:"ViewStart__temp"},i.a.createElement("div",null,"Temperatura",i.a.createElement("p",null,this.state.temperatura,"\xb0C")),i.a.createElement("div",null,"Wiatr: ",i.a.createElement("p",null,10*this.state.wiatr," km/s")),i.a.createElement("div",null,"Ci\u015bnienie ",i.a.createElement("p",null,this.state.cisnienie,"hPa"))),i.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(10*this.state.wiatr>60?3:2,",1fr)")},className:"ViewStart__img"},this.sprawdz(),this.temperatura(),this.wiatr()),i.a.createElement(k,null),i.a.createElement(A,null))}}]),a}(i.a.Component),Z=(t(48),function(){return i.a.createElement("nav",null,i.a.createElement("ul",{className:"nawigationWrapper"},i.a.createElement("li",{className:"navigationItem"},i.a.createElement(u.b,{exact:!0,activeClassName:"navigationItemLinkActive",className:"navigationItemLink",to:"/"},"Start")),i.a.createElement("li",{className:"navigationItem"},i.a.createElement(u.b,{activeClassName:"navigationItemLinkActive",className:"navigationItemLink",to:"/pogoda"},"Pogoda godzinowa")),i.a.createElement("li",{className:"navigationItem"},i.a.createElement(u.b,{activeClassName:"navigationItemLinkActive",className:"navigationItemLink",to:"/pogoda-5-dni"},"Prognoza na 5 dni")),i.a.createElement("li",{className:"navigationItem"},i.a.createElement(u.b,{activeClassName:"navigationItemLinkActive",className:"navigationItemLink",to:"/zanieczyszczenia"},"Zanieczyszczenia")),i.a.createElement("li",{className:"navigationItem"},i.a.createElement(u.b,{activeClassName:"navigationItemLinkActive",className:"navigationItemLink",to:"/mapa-pogody"},"Mapa pogody")),i.a.createElement("li",{className:"navigationItem"},i.a.createElement(u.b,{activeClassName:"navigationItemLinkActive",className:"navigationItemLink",to:"/contact"},"Kontakt"))))}),F=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"View5day"))},q=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(i)))).state={wartosc:"lublin"},t.changeOption=function(e){console.log(e.target.value),t.setState({wartosc:e.target.value})},t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"componentDidUpdate",value:function(){fetch("http://api.gios.gov.pl/pjp-api/rest/station/findAll").then((function(e){if(e.ok)return e;throw Error("blad zanieczyszczenie")})).then((function(e){return e.json()})).then((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,"Sprawdz zanieczyszczenia dla danego wojewodztwa"),i.a.createElement("select",{onChange:this.changeOption,style:{margin:"15px",border:"1px solid black"},name:"nazwa"},i.a.createElement("option",{value:"Lublin"},"Lubelskie"),i.a.createElement("option",{value:"Mazovia"},"mazowieckie"),i.a.createElement("option",{value:"Kujawsko-Pomorskie"},"Kujawsko-pomorskie")))}}]),a}(i.a.Component),J=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"ViewContact"))},K=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"ViewMap"),i.a.createElement("div",null,i.a.createElement("img",{src:"https://tile.openweathermap.org/map/precipitation/1/1/1.png?appid=8c0ca88fe2b8fe6d6c954e8c13f95f86"})," 1/1/1"),i.a.createElement("div",null,i.a.createElement("img",{src:"https://tile.openweathermap.org/map/precipitation/1/1/0.png?appid=8c0ca88fe2b8fe6d6c954e8c13f95f86"})," 1/1/0"),i.a.createElement("div",null,i.a.createElement("img",{src:"https://tile.openweathermap.org/map/precipitation/1/0/0.png?appid=8c0ca88fe2b8fe6d6c954e8c13f95f86"})," 1/0/0"),i.a.createElement("div",null,i.a.createElement("img",{src:"https://tile.openweathermap.org/map/precipitation/0/0/0.png?appid=8c0ca88fe2b8fe6d6c954e8c13f95f86"})," 0/0/0"),i.a.createElement("div",null,i.a.createElement("img",{src:"https://tile.openweathermap.org/map/precipitation/1/0/1.png?appid=8c0ca88fe2b8fe6d6c954e8c13f95f86"})," 1/0/1"))},U=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(i)))).state={},t}return Object(d.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{basename:"/"},i.a.createElement(Z,null),i.a.createElement(p.c,null,i.a.createElement(p.a,{exact:!0,path:"/",component:M}),i.a.createElement(p.a,{path:"/pogoda",component:b}),i.a.createElement(p.a,{path:"/pogoda-5-dni",component:F}),i.a.createElement(p.a,{path:"/zanieczyszczenia",component:q}),i.a.createElement(p.a,{path:"/mapa-pogody",component:K}),i.a.createElement(p.a,{path:"/contact",component:J})),this.state.isModalOpen&&i.a.createElement(i.a.Fragment,null)))}}]),a}(i.a.Component);s.a.render(i.a.createElement(U,null),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.e2ba6d22.chunk.js.map