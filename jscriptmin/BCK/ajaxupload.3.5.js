(function(){var c=document,o=window;function f(d){if(typeof d=="string"){d=c.getElementById(d)}return d}function b(d,r,q){if(o.addEventListener){d.addEventListener(r,q,false)}else{if(o.attachEvent){var p=function(){q.call(d,o.event)};d.attachEvent("on"+r,p)}}}var n=function(){var d=c.createElement("div");return function(q){d.innerHTML=q;var p=d.childNodes[0];d.removeChild(p);return p}}();function l(p,d){return p.className.match(new RegExp("(\\s|^)"+d+"(\\s|$)"))}function a(p,d){if(!l(p,d)){p.className+=" "+d}}function m(p,d){var q=new RegExp("(\\s|^)"+d+"(\\s|$)");p.className=p.className.replace(q," ")}if(document.documentElement.getBoundingClientRect){var j=function(v){var q=v.getBoundingClientRect(),t=v.ownerDocument,d=t.body,u=t.documentElement,s=u.clientTop||d.clientTop||0,r=u.clientLeft||d.clientLeft||0,y=1;if(d.getBoundingClientRect){var p=d.getBoundingClientRect();y=(p.right-p.left)/d.clientWidth}if(y>1){s=0;r=0}var x=q.top/y+(window.pageYOffset||u&&u.scrollTop/y||d.scrollTop/y)-s,w=q.left/y+(window.pageXOffset||u&&u.scrollLeft/y||d.scrollLeft/y)-r;return{top:x,left:w}}}else{var j=function(d){if(o.jQuery){return jQuery(d).offset()}var q=0,p=0;do{q+=d.offsetTop||0;p+=d.offsetLeft||0}while(d=d.offsetParent);return{left:p,top:q}}}function g(p){var q,s,t,d;var r=j(p);q=r.left;t=r.top;s=q+p.offsetWidth;d=t+p.offsetHeight;return{left:q,right:s,top:t,bottom:d}}function i(q){if(!q.pageX&&q.clientX){var r=1;var d=document.body;if(d.getBoundingClientRect){var p=d.getBoundingClientRect();r=(p.right-p.left)/d.clientWidth}return{x:q.clientX/r+c.body.scrollLeft+c.documentElement.scrollLeft,y:q.clientY/r+c.body.scrollTop+c.documentElement.scrollTop}}return{x:q.pageX,y:q.pageY}}var k=function(){var d=0;return function(){return"ValumsAjaxUpload"+d++}}();function e(d){return d.replace(/.*(\/|\\)/,"")}function h(d){return(/[.]/.exec(d))?/[^.]+$/.exec(d.toLowerCase()):""}Ajax_upload=AjaxUpload=function(d,q){if(d.jquery){d=d[0]}else{if(typeof d=="string"&&/^#.*/.test(d)){d=d.slice(1)}}d=f(d);this._input=null;this._button=d;this._disabled=false;this._submitting=false;this._justClicked=false;this._parentDialog=c.body;if(window.jQuery&&jQuery.ui&&jQuery.ui.dialog){var r=jQuery(this._button).parents(".ui-dialog");if(r.length){this._parentDialog=r[0]}}this._settings={action:"upload.php",name:"userfile",data:{},autoSubmit:true,responseType:false,onChange:function(t,s){},onSubmit:function(t,s){},onComplete:function(s,t){}};for(var p in q){this._settings[p]=q[p]}this._createInput();this._rerouteClicks()};AjaxUpload.prototype={setData:function(d){this._settings.data=d},disable:function(){this._disabled=true},enable:function(){this._disabled=false},destroy:function(){if(this._input){if(this._input.parentNode){this._input.parentNode.removeChild(this._input)}this._input=null}},_createInput:function(){var q=this;var p=c.createElement("input");p.setAttribute("type","file");p.setAttribute("name",this._settings.name);var r={position:"absolute",margin:"-5px 0 0 -175px",padding:0,width:"220px",height:"30px",fontSize:"14px",opacity:0,cursor:"pointer",display:"none",zIndex:2147483583};for(var d in r){p.style[d]=r[d]}if(!(p.style.opacity==="0")){p.style.filter="alpha(opacity=0)"}this._parentDialog.appendChild(p);b(p,"change",function(){var s=e(this.value);if(q._settings.onChange.call(q,s,h(s))==false){return}if(q._settings.autoSubmit){q.submit()}});b(p,"click",function(){q.justClicked=true;setTimeout(function(){q.justClicked=false},3000)});this._input=p},_rerouteClicks:function(){var r=this;var d,p={top:0,left:0},q=false;b(r._button,"mouseover",function(s){if(!r._input||q){return}q=true;d=g(r._button);if(r._parentDialog!=c.body){p=j(r._parentDialog)}});b(document,"mousemove",function(t){var u=r._input;if(!u||!q){return}if(r._disabled){m(r._button,"hover");u.style.display="none";return}var s=i(t);if((s.x>=d.left)&&(s.x<=d.right)&&(s.y>=d.top)&&(s.y<=d.bottom)){u.style.top=s.y-p.top+"px";u.style.left=s.x-p.left+"px";u.style.display="block";a(r._button,"hover")}else{q=false;if(!r.justClicked){u.style.display="none"}m(r._button,"hover")}})},_createIframe:function(){var d=k();var p=n('<iframe src="javascript:false;" name="'+d+'" />');p.id=d;p.style.display="none";c.body.appendChild(p);return p},submit:function(){var r=this,s=this._settings;if(this._input.value===""){return}var d=e(this._input.value);if(!(s.onSubmit.call(this,d,h(d))==false)){var q=this._createIframe();var p=this._createForm(q);p.appendChild(this._input);p.submit();c.body.removeChild(p);p=null;this._input=null;this._createInput();var t=false;b(q,"load",function(v){if(q.src=="javascript:'%3Chtml%3E%3C/html%3E';"||q.src=="javascript:'<html></html>';"){if(t){setTimeout(function(){c.body.removeChild(q)},0)}return}var u=q.contentDocument?q.contentDocument:frames[q.id].document;if(u.readyState&&u.readyState!="complete"){return}if(u.body&&u.body.innerHTML=="false"){return}var w;if(u.XMLDocument){w=u.XMLDocument}else{if(u.body){w=u.body.innerHTML;if(s.responseType&&s.responseType.toLowerCase()=="json"){if(u.body.firstChild&&u.body.firstChild.nodeName.toUpperCase()=="PRE"){w=u.body.firstChild.firstChild.nodeValue}if(w){w=window["eval"]("("+w+")")}else{w={}}}}else{var w=u}}s.onComplete.call(r,d,w);t=true;q.src="javascript:'<html></html>';"})}else{c.body.removeChild(this._input);this._input=null;this._createInput()}},_createForm:function(q){var s=this._settings;var p=n('<form method="post" enctype="multipart/form-data"></form>');p.style.display="none";p.action=s.action;p.target=q.name;c.body.appendChild(p);for(var r in s.data){var d=c.createElement("input");d.type="hidden";d.name=r;d.value=s.data[r];p.appendChild(d)}return p}}})();