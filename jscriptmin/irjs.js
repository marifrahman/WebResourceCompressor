function GetXmlHttpObject(b){var c=null;if(navigator.userAgent.indexOf("MSIE")>=0){var d="Msxml2.XMLHTTP";if(navigator.appVersion.indexOf("MSIE 5.5")>=0){d="Microsoft.XMLHTTP"}try{c=new ActiveXObject(d);c.onreadystatechange=b;return c}catch(a){alert("Error. Scripting for ActiveX might be disabled");return}}if(navigator.userAgent.indexOf("Mozilla")>=0){c=new XMLHttpRequest();c.onload=b;c.onerror=b;return c}}function addOption(c,b,d){var a=document.createElement("OPTION");a.value=c;a.text=b;$(d).options.add(a,1)}function setDDLValue(a,b){for(i=0;i<a.options.length;i++){if(a.options[i].value==b){a.options[i].selected=true;return}}}function setDDLText(a,b){for(i=0;i<a.options.length;i++){if(a.options[i].text==b){a.options[i].selected=true;return}}}function getDDLSelectedText(a,b){if(a!=null){for(i=0;i<a.options.length;i++){if(a.options[i].value==b){return a.options[i].text}}}}function checkFileExt(b){var c=b.lastIndexOf(".");var a=b.substring(c,b.length);if(a.toUpperCase()!=".JPG"&&a.toUpperCase()!=".JPEG"&&a.toUpperCase()!=".BMP"&&a.toUpperCase()!=".WAV"&&a.toUpperCase()!=".MPEG"&&a.toUpperCase()!=".MPG"&&a.toUpperCase()!=".AVI"&&a.toUpperCase()!=".GIF"&&a.toUpperCase()!=".FLV"&&a.toUpperCase()!=".PDF"&&a.toUpperCase()!=".DOC"&&a.toUpperCase()!=".DOCX"&&a.toUpperCase()!=".XLS"&&a.toUpperCase()!=".XLSX"&&a.toUpperCase()!=".PNG"){alert("Image or Video file must be either PDF, JPG, BMP, GIF, PNG, WAV, MPEG, AVI, DOC(X) and XLS(X) Format");return false}return true}function hideObject(a){if($(a)!=null){$(a).style.display="none";$(a).style.visibility="hidden"}}function showObject(a){if($(a)!=null){$(a).style.display="";$(a).style.visibility="visible"}}function swapControl(b,a){$(b).style.visibility="visible";$(b).style.display="inline";$(a).style.visibility="hidden";$(a).style.display="none"}function createCookie(d,e,b){if(b){var a=new Date();a.setTime(a.getTime()+(b*24*60*60*1000));var c="; expires="+a.toGMTString()}else{var c=""}document.cookie=d+"="+e+c+"; path=/"}function readCookie(e){var f=e+"=";var b=document.cookie.split(";");for(var d=0;d<b.length;d++){var a=b[d];while(a.charAt(0)==" "){a=a.substring(1,a.length)}if(a.indexOf(f)==0){return a.substring(f.length,a.length)}}return null}function eraseCookie(a){createCookie(a,"",-1)}function showLoading(a){$(a).innerHTML='<table width="650" style="margin-top:15px"><tr><td align="center"><img src="images/ajax-loader.gif"> Loading...</td></tr></table>'}function showProcess(a){$("dvProgress").style.display="block";if(a!=""){$("h2ProgressMsg").innerHTML=a}}function hideProcess(a){$("dvProgress").style.display="none"}function fileUpload(form,action_url,div_id,jscript){var iframe=document.createElement("iframe");iframe.setAttribute("id","upload_iframe");iframe.setAttribute("name","upload_iframe");iframe.setAttribute("width","500");iframe.setAttribute("height","100");iframe.setAttribute("border","0");iframe.setAttribute("style","width: 500; height: 100; border: none;");form.parentNode.appendChild(iframe);window.frames.upload_iframe.name="upload_iframe";iframeId=document.getElementById("upload_iframe");var eventHandler=function(){if(iframeId.detachEvent){iframeId.detachEvent("onload",eventHandler)}else{iframeId.removeEventListener("load",eventHandler,false)}if(iframeId.contentDocument){content=iframeId.contentDocument.body.innerHTML}else{if(iframeId.contentWindow){content=iframeId.contentWindow.document.body.innerHTML}else{if(iframeId.document){content=iframeId.document.body.innerHTML}}}if(jscript==null){document.getElementById(div_id).innerHTML=content}else{eval(jscript+"()")}setTimeout("iframeId.parentNode.removeChild(iframeId)",100)};if(iframeId.addEventListener){iframeId.addEventListener("load",eventHandler,true)}if(iframeId.attachEvent){iframeId.attachEvent("onload",eventHandler)}form.setAttribute("target","upload_iframe");form.setAttribute("action",action_url);form.setAttribute("method","post");form.setAttribute("enctype","multipart/form-data");form.setAttribute("encoding","multipart/form-data");form.submit();document.getElementById(div_id).innerHTML='Uploading...<img src="/ripremium/ir3/images/ajaxloader_lite.gif">'}function $RF(b,c){if($(b).type&&$(b).type.toLowerCase()=="radio"){var c=$(b).name;var b=$(b).form}else{if($(b).tagName.toLowerCase()!="form"){return false}}var a=$(b).getInputs("radio",c).find(function(d){return d.checked});return(a)?$F(a):null}function toggleTR(c,b){var d=$(b).style.display;if(d=="none"){c.src="newimages/arrow-up.png";c.title="close";if(b=="step11sub2sub"){$("step11sub2sub").style.display=""}else{Effect.BlindDown(b,{duration:1})}try{if($("incidentId").value!=""){ir_addExpandedId($("incidentId").value+"_tabstate",b)}if(b=="step11sub2sub"){try{$("bodyDiv").style.display=""}catch(a){}}}catch(a){}}else{c.src="newimages/arrow-down.png";c.title="open";$(b).style.display="none";try{if($("incidentId").value!=""){ir_delExpandedId($("incidentId").value+"_tabstate",b)}if(b=="step11sub2sub"){try{$("bodyDiv").style.display="none"}catch(a){}}}catch(a){}}}function chageIcon(b,d){try{var c=$(b);if(d=="open"){c.src="newimages/arrow-up.png";c.title="close"}else{c.src="newimages/arrow-down.png";c.title="open"}}catch(a){}}function moveSection(c,b){if(typeof c!="undefined"){if(c=="step11sub2sub"){$("bodyDiv").style.display="none";new Effect.BlindUp(c,{duration:0.8})}else{new Effect.BlindUp(c,{duration:1.3})}if(c=="step11sub4sub"){try{$("stepInjuryReportSubIcon").src="newimages/arrow-down.png";$("stepInjuryReportSubIcon").title="close"}catch(a){}}else{chageIcon(c+"Icon","close")}try{if($("incidentId").value!=""){ir_delExpandedId($("incidentId").value+"_tabstate",c)}}catch(a){}}if(typeof b!="undefined"){if(b=="step11sub2sub"){$("step11sub2sub").style.display="";$("bodyDiv").style.display=""}else{var d=$(b).style.display;if(d=="none"){new Effect.BlindDown(b,{duration:1.3})}}if(b=="step11sub1sub"||b=="step11sub2sub"){$("stepInjuryReportSub").style.display="";try{chageIcon("stepInjuryReportSubIcon","open");if(b=="step11sub1sub"){chageIcon("step11sub1subIcon","open")}if(b=="step11sub2sub"){chageIcon("step11sub2subIcon","open")}if(b=="step11sub4sub"){chageIcon("step11sub4subIcon","open")}}catch(a){}}else{chageIcon(b+"Icon","open")}try{if($("incidentId").value!=""){ir_addExpandedId($("incidentId").value+"_tabstate",b)}}catch(a){}}}function ir_setCookie(b,d,a){if(d==null){return}var c=d;if(c!=""){c=escape(c)}document.cookie=escape(b)+"="+c+(a?"; expires="+a:"")+";path=/"}function ir_getCookie(e){if(document.cookie){var b=document.cookie.split(";");var a=null;for(var d=0;d<b.length;d++){a=b[d].split("=");if(unescape(a[0].replace(/\s*/gi,""))==e){return(a.length>1?unescape(a[1]):"")}}}return""}function ir_removeCookie(a){ir_setCookie(a,"-1","Fri, 31 Dec 1999 23:59:59 GMT;")}function ir_addExpandedId(a,b){var c=ir_getCookie(a);if(c==""){c="/"+b+"/"}else{if(c.indexOf("/"+b+"/")==-1){c=c+b+"/"}}ir_setCookie(a,c)}function ir_delExpandedId(b,c){var e=ir_getCookie(b);var a=e.indexOf("/"+c+"/");var d=new RegExp("/"+c,"gi");if(a>-1){e=e.replace(d,"");if(e=="/"){e=""}}ir_setCookie(b,e)}function ir_maintainNodeState(h){var d=ir_getCookie(h+"_tabstate");if(d!=""){var a=d.split("/");var g=null;for(var f=0;f<a.length;f++){if(a[f]!=""){try{if(a[f]=="step11sub2sub"){$("step11sub2sub").style.display="";$("bodyDiv").style.display=""}else{$(a[f]).style.display=""}chageIcon(a[f]+"Icon","open")}catch(c){}try{if($("showInjuryReport").value=="True"){if(a[f]=="step11sub1sub"||a[f]=="step11sub2sub"||a[f]=="step11sub4sub"){$("stepInjuryReportSub").style.display="";chageIcon(a[f]+"Icon","open")}}else{$("stepInjuryReportSub").style.display="none"}}catch(b){}}}}}function resetTabState(a){ir_removeCookie(iID+"_tabstate")}function getPageSize(){var c,d;if(window.innerHeight&&window.scrollMaxY){c=window.innerWidth+window.scrollMaxX;d=window.innerHeight+window.scrollMaxY}else{if(document.body.scrollHeight>document.body.offsetHeight){c=document.body.scrollWidth;d=document.body.scrollHeight}else{c=document.body.offsetWidth;d=document.body.offsetHeight}}var b,a;if(self.innerHeight){if(document.documentElement.clientWidth){b=document.documentElement.clientWidth}else{b=self.innerWidth}a=self.innerHeight}else{if(document.documentElement&&document.documentElement.clientHeight){b=document.documentElement.clientWidth;a=document.documentElement.clientHeight}else{if(document.body){b=document.body.clientWidth;a=document.body.clientHeight}}}if(d<a){pageHeight=a}else{pageHeight=d}if(c<b){pageWidth=c}else{pageWidth=b}return[pageWidth,pageHeight,b,a]}function fixName(b){val=b.value;newVal="";val=val.split(" ");for(var a=0;a<val.length;a++){newVal+=val[a].substr(0,1).toUpperCase();var d=val[a].substr(1,val[a].length).toLowerCase();if((val[a].substr(0,2).toUpperCase()=="MC")){d=d.substr(0,1)+d.substr(1,1).toUpperCase()+d.substr(2,d.length);newVal+=d}else{if(val[a].substr(0,3).toUpperCase()=="MAC"){d=d.substr(0,2)+d.substr(2,1).toUpperCase()+d.substr(3,d.length);newVal+=d}else{if(val[a].indexOf("-")>0){newVal+=d.substr(0,d.indexOf("-"))+"-"+d.substr(d.indexOf("-")+1,1).toUpperCase()+d.substr(d.indexOf("-")+2,d.length)}else{if(val[a].indexOf("'")>0){newVal+=d.substr(0,d.indexOf("'"))+"'"+d.substr(d.indexOf("'")+1,1).toUpperCase()+d.substr(d.indexOf("'")+2,d.length)}else{newVal+=d+" "}}}}}b.value=newVal};