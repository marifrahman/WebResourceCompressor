function RemoteStateSuggestions(){if(typeof XMLHttpRequest!="undefined"){this.http=new XMLHttpRequest()}else{if(typeof ActiveXObject!="undefined"){this.http=new ActiveXObject("MSXML2.XmlHttp")}else{alert("No XMLHttpRequest object available. This functionality will not work.")}}}RemoteStateSuggestions.prototype.requestSuggestions=function(b,a){var c=this.http;if(c.readyState!=0){c.abort()}if(b.fieldid!=null){fields="";for(i=0;i<b.fieldid.length;i++){fields+="&field="+b.fieldid[i]}var d="ajaxFunctions.asp?func="+b.func+"&userInput="+encodeURIComponent(b.textbox.value)+fields;c.open("get",d,true);c.onreadystatechange=function(){if(c.readyState==4){var l=c.responseText;var f=l.split(",");var e=new Array();var n=new Array();var g=new Array();for(i=0;i<f.length-1;i++){var h=f[i].split("#");e.push(h[0]);var m=new Array();for(j=0;j<b.fieldid.length;j++){m[b.fieldid[j]]=h[j+1]}n.push(m);var k=e[i].toLowerCase();g.push(k.indexOf(b.textbox.value.toLowerCase()))}if(b.textbox.value!=""){b.autosuggest(e,n,g,a)}}};c.send(null)}else{if(document.getElementById("limitlist")){limitList=document.getElementById("limitlist").value}var d="ajaxFunctions.asp?func=nameSearch&userInput="+b.textbox.value+"&comp="+limitList;c.open("get",d,true);c.onreadystatechange=function(){if(c.readyState==4){var m=c.responseText;var g=m.split(",");var e=new Array(0);var f=new Array(0);var h=new Array(0);for(i=0;i<g.length;i++){var k=g[i].split("#");e.push(k[0]);f.push(k[1]);var l=e[i].toLowerCase();h.push(l.indexOf(b.textbox.value.toLowerCase()))}if(b.textbox.value!=""){b.autosuggest(e,f,h,a)}}};c.send(null)}};