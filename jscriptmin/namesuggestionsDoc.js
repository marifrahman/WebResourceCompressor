function RemoteStateSuggestions(){if(typeof XMLHttpRequest!="undefined"){this.http=new XMLHttpRequest()}else{if(typeof ActiveXObject!="undefined"){this.http=new ActiveXObject("MSXML2.XmlHttp")}else{alert("No XMLHttpRequest object available. This functionality will not work.")}}}RemoteStateSuggestions.prototype.requestSuggestions=function(e,a){var f=this.http;if(f.readyState!=0){f.abort()}if(e.fieldid!=null){fields="";for(b=0;b<e.fieldid.length;b++){fields+="&field="+e.fieldid[b]}var k="ajaxFunctions.asp?func=current&userInput="+e.textbox.value+fields;f.open("get",k,true);f.onreadystatechange=function(){if(f.readyState==4){var p=f.responseText;var l=p.split(",");var i=new Array();var r=new Array();var m=new Array();for(b=0;b<l.length-1;b++){var n=l[b].split("#");i.push(n[0]);var q=new Array();for(j=0;j<e.fieldid.length;j++){q[e.fieldid[j]]=n[j+1]}r.push(q);var o=i[b].toLowerCase();m.push(o.indexOf(e.textbox.value.toLowerCase()))}if(e.textbox.value!=""){e.autosuggest(i,r,m,a)}}};f.send(null)}else{if(document.getElementById("limitlist")){var h=document.formAdmin.searchType;var g;var c=h.length;if(!c&&h.checked){g=h.value}for(var b=0,d=h.length;b<d;b++){if(h[b].checked){g=h[b].value}}limitList=document.getElementById("limitlist").value}var k="ajaxFunctions.asp?func=current&userInput="+e.textbox.value+"&comp="+limitList;f.open("get",k,true);f.onreadystatechange=function(){if(f.readyState==4){var q=f.responseText;var m=q.split(",");var i=new Array(0);var l=new Array(0);var n=new Array(0);for(b=0;b<m.length;b++){var o=m[b].split("#");i.push(o[0]);l.push(o[1]);var p=i[b].toLowerCase();n.push(p.indexOf(e.textbox.value.toLowerCase()))}if(e.textbox.value!=""){e.autosuggest(i,l,n,a)}}};f.send(null)}};