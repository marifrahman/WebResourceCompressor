var isIE=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;var isWin=(navigator.appVersion.toLowerCase().indexOf("win")!=-1)?true:false;var isOpera=(navigator.userAgent.indexOf("Opera")!=-1)?true:false;function ControlVersion(){var c;var a;var b;try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");c=a.GetVariable("$version")}catch(b){}if(!c){try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");c="WIN 6,0,21,0";a.AllowScriptAccess="always";c=a.GetVariable("$version")}catch(b){}}if(!c){try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");c=a.GetVariable("$version")}catch(b){}}if(!c){try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.3");c="WIN 3,0,18,0"}catch(b){}}if(!c){try{a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");c="WIN 2,0,0,11"}catch(b){c=-1}}return c}function GetSwfVer(){var c=-1;if(navigator.plugins!=null&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var d=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";var b=navigator.plugins["Shockwave Flash"+d].description;var a=b.split(" ");var e=a[2].split(".");var f=e[0];var g=e[1];var h=a[3];if(h==""){h=a[4]}if(h[0]=="d"){h=h.substring(1)}else{if(h[0]=="r"){h=h.substring(1);if(h.indexOf("d")>0){h=h.substring(0,h.indexOf("d"))}}}var c=f+"."+g+"."+h}}else{if(navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1){c=4}else{if(navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1){c=3}else{if(navigator.userAgent.toLowerCase().indexOf("webtv")!=-1){c=2}else{if(isIE&&isWin&&!isOpera){c=ControlVersion()}}}}}return c}function DetectFlashVer(a,b,c){versionStr=GetSwfVer();if(versionStr==-1){return false}else{if(versionStr!=0){if(isIE&&isWin&&!isOpera){tempArray=versionStr.split(" ");tempString=tempArray[1];versionArray=tempString.split(",")}else{versionArray=versionStr.split(".")}var d=versionArray[0];var e=versionArray[1];var f=versionArray[2];if(d>parseFloat(a)){return true}else{if(d==parseFloat(a)){if(e>parseFloat(b)){return true}else{if(e==parseFloat(b)){if(f>=parseFloat(c)){return true}}}}}return false}}}function AC_AddExtension(b,a){if(b.indexOf("?")!=-1){return b.replace(/\?/,a+"?")}else{return b+a}}function AC_Generateobj(c,d,a){var e="";if(isIE&&isWin&&!isOpera){e+="<object ";for(var b in c){e+=b+'="'+c[b]+'" '}e+=">";for(var b in d){e+='<param name="'+b+'" value="'+d[b]+'" /> '}e+="</object>"}else{e+="<embed ";for(var b in a){e+=b+'="'+a[b]+'" '}e+="> </embed>"}document.write(e)}function AC_FL_RunContent(){var a=AC_GetArgs(arguments,".swf","movie","clsid:d27cdb6e-ae6d-11cf-96b8-444553540000","application/x-shockwave-flash");AC_Generateobj(a.objAttrs,a.params,a.embedAttrs)}function AC_SW_RunContent(){var a=AC_GetArgs(arguments,".dcr","src","clsid:166B1BCA-3F9C-11CF-8075-444553540000",null);AC_Generateobj(a.objAttrs,a.params,a.embedAttrs)}function AC_GetArgs(a,d,h,b,f){var g=new Object();g.embedAttrs=new Object();g.params=new Object();g.objAttrs=new Object();for(var e=0;e<a.length;e=e+2){var c=a[e].toLowerCase();switch(c){case"classid":break;case"pluginspage":g.embedAttrs[a[e]]=a[e+1];break;case"src":case"movie":a[e+1]=AC_AddExtension(a[e+1],d);g.embedAttrs.src=a[e+1];g.params[h]=a[e+1];break;case"onafterupdate":case"onbeforeupdate":case"onblur":case"oncellchange":case"onclick":case"ondblClick":case"ondrag":case"ondragend":case"ondragenter":case"ondragleave":case"ondragover":case"ondrop":case"onfinish":case"onfocus":case"onhelp":case"onmousedown":case"onmouseup":case"onmouseover":case"onmousemove":case"onmouseout":case"onkeypress":case"onkeydown":case"onkeyup":case"onload":case"onlosecapture":case"onpropertychange":case"onreadystatechange":case"onrowsdelete":case"onrowenter":case"onrowexit":case"onrowsinserted":case"onstart":case"onscroll":case"onbeforeeditfocus":case"onactivate":case"onbeforedeactivate":case"ondeactivate":case"type":case"codebase":case"id":g.objAttrs[a[e]]=a[e+1];break;case"width":case"height":case"align":case"vspace":case"hspace":case"class":case"title":case"accesskey":case"name":case"tabindex":g.embedAttrs[a[e]]=g.objAttrs[a[e]]=a[e+1];break;default:g.embedAttrs[a[e]]=g.params[a[e]]=a[e+1]}}g.objAttrs.classid=b;if(f){g.embedAttrs.type=f}return g};