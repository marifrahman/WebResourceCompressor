var popup_req=false;var popup_script=false;var in_alertcount=0;function new_popup(){this.agent_name=navigator.userAgent.toLowerCase();this.is_ie=((this.agent_name.indexOf("msie")!=-1)&&(this.agent_name.indexOf("opera")==-1));this.is_gecko=navigator.product;this.position_x=0;this.position_y=0;this.ajax_url="";this.dlg_bg=document.getElementById("dialogbackgroundlayer");this.dlg=document.getElementById("dialoglayer");this.msg=document.getElementById("message");this.dlg_bg.style.left="0px";this.dlg_bg.style.top="0px";this.dlg_bg.style.width="100%";this.dlg_bg.style.background="#000";this.dlg_bg.style.opacity=(50/100);this.dlg_bg.style.MozOpacity=(50/100);this.dlg_bg.style.KhtmlOpacity=(50/100);this.dlg_bg.style.filter="alpha(opacity=50)";this.dialog_open=function(url,w_width,w_height,run_script){var height=document.body.clientHeight;if(!w_height){w_height=170}if(this.is_gecko){height+=10}this.dlg_bg.style.height=height+"px";this.dlg_bg.style.display="";this.dlg.style.left="50%";this.dlg.style.top=w_height+"px";this.dlg.style.marginLeft=w_width/2*-1+"px";if(run_script){popup_script=run_script}else{popup_script=false}this.load(url);this.dlg.style.display=""};this.dialog_close=function(){this.dlg_bg.style.display="none";this.dlg.style.display="none"};this.in_alert=function(message){this.msg.innerHTML=message;this.msg.style.display="";window.setTimeout(this.in_alert_hidden,2000);in_alertcount++};this.in_alert_hidden=function(){in_alertcount--;if(!in_alertcount){document.getElementById("message").style.display="none"}};this.load=function(url){popup_req=false;if(window.XMLHttpRequest){try{popup_req=new XMLHttpRequest()}catch(e){popup_req=false}}else{if(window.ActiveXObject){try{popup_req=new ActiveXObject("Msxml2.XMLHTTP")}catch(e){try{this.req=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){popup_req=false}}}}if(popup_req){popup_req.onreadystatechange=this.processPopup;popup_req.open("GET",url,true);popup_req.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");popup_req.send("")}};this.processPopup=function(){var obj=document.getElementById("dialoglayer");if(popup_req.readyState==4){obj.innerHTML=popup_req.responseText;if(popup_script){eval(popup_script)}}}};