function showAllSections(){for(var a=0;a<panels.length;a++){if(panels[a][1]=="0"){$(panels[a][0]).style.display=""}}}function lastButton(){var c;var a;var b=-1;for(i=panels.length-1;i>=0;i--){c=$(panels[i][0]);if(c.style.display==""){a=c.getElementsByTagName("input");if(b==-1){b=i}for(j=0;j<a.length;j++){if(a[j].id.indexOf("btnNext")!=-1){if(i==b){a[j].value="Review"}else{a[j].value="Next"}break}}}}}function toggleSection(a,d){var c=document.getElementById(d);var b=c.getElementsByTagName("div");b[2].id="sub"+d;if(b[2].style.display==""){b[2].style.display="none";a.src="img/arrow-down.png"}else{Effect.BlindDown(b[2].id,{duration:1});a.src="img/arrow-up.png"}}function closeSection(d){var c=document.getElementById(d);var a=c.getElementsByTagName("div");var b=c.getElementsByTagName("img");a[2].id="sub"+d;a[2].style.display="none";b[0].src="img/arrow-down.png"}function openSection(e){var d=$(e);if(!d){return}var a=d.getElementsByTagName("div");var c=d.getElementsByTagName("img");var b;a[2].id="sub"+e;for(i=0;i<panels.length;i++){if(panels[i][0]==e){b=i;break}}if(panels[b][1]==1){if(d.parentNode.style.display=="none"){d.parentNode.style.display=""}}if(a[2].style.display=="none"){Effect.BlindDown(a[2].id,{duration:1});c[0].src="img/arrow-up.png"}}function nextClick(c,f){var d=0;var e=0;var b=c;var a="";if(f.value=="Send Notification"){doAction(c);return}if(f!=null){a=f.value;f.value="Saving..."}if(doAction(c)){for(i=0;i<panels.length;i++){if(panels[i][0]==c){d=i;break}}if((d+1)<(panels.length)){for(i=d+1;i<panels.length;i++){if($(panels[i][0])!=undefined&&$(panels[i][0]).style.display==""){e=i;break}}}if(panels[d][1]=="1"){for(i=d-1;i>=0;i--){if(panels[i][1]=="0"){b=panels[i][0];break}}}if(panels[e][1]=="0"){if(panels[d][1]=="1"){closeSection(c)}closeSection(b)}else{closeSection(c)}if(e!=0){openSection(panels[e][0])}else{review()}if(panels[e][1]=="0"&&($(panels[e][0]).attributes.IsEmpty==undefined||$(panels[e][0]).attributes.IsEmpty.value=="true")){if((e+1)<(panels.length-1)){if(panels[e+1][1]=="1"){openSection(panels[e+1][0])}}}}if(f!=null){f.value=a}}function prevClick(b){closeSection(b);var c;var e;var f;var a=b;var d;closeSection(b);for(i=0;i<panels.length;i++){if(panels[i][0]==b){c=i;break}}if(panels[c][1]=="1"){if(panels[c-1][1]=="1"){openSection(panels[c-1][0])}else{c=c-1;closeSection(panels[c][0])}}if(panels[c][1]=="0"){for(i=c-1;i>=0;i--){if($(panels[i][0])!=undefined&&$(panels[i][0]).style.display==""&&panels[i][1]=="0"){e=i;openSection(panels[e][0]);break}}for(i=c;i>e;i--){if(panels[i][1]=="1"){openSection(panels[i][0]);break}}}}function addPerson(a){myLightWindow.activateWindow({href:"Person.aspx?incidentid="+hdIncidentId.value+"&onclose=bindStaffLists&listid="+a,title:"Add New Person",type:"external",width:500,height:400})}function addExternalFirstAid(a){myLightWindow.activateWindow({href:"Person.aspx?incidentid="+hdIncidentId.value+"&onclose=bindStaffLists&firstaid=1&listid="+a,title:"Add New First Aid Staff",type:"external",width:500,height:250})}function kraft_AddPerson(a){myLightWindow.activateWindow({href:"Person.aspx?incidentid="+hdIncidentId.value+"&onclose=bindStaffLists&listid="+a,title:"",type:"external",width:500,height:400})}function kraft_AddFirstAidPerson(a){myLightWindow.activateWindow({href:"FirstAidPersonnel.aspx?incidentid="+hdIncidentId.value+"&onclose=bindFirstAidList&listid="+a,title:"",type:"external",width:440,height:250})}function kraft_AddHospital(a){myLightWindow.activateWindow({href:"Hospital.aspx?incidentid="+hdIncidentId.value+"&onclose=kraft_BindHospitalList&listid="+a,title:"",type:"external",width:440,height:100})}function kraft_AddMedicalProvider(a){myLightWindow.activateWindow({href:"MedicalProvider.aspx?incidentid="+hdIncidentId.value+"&onclose=kraft_BindMedicalProviderList&listid="+a,title:"",type:"external",width:440,height:100})}function listSelect(c,d){myLightWindow.deactivate();if($(c).nodeName.toLowerCase()=="select"){for(b=0;b<$(c).options.length;b++){if($(c).options[b].value.toLowerCase()==d.toLowerCase()){$(c).options.selectedIndex=b;break}}}else{var a=$(c).getElementsByTagName("table")[0];for(var b=0;b<a.rows.length;b++){if(d.toLowerCase()==a.rows[b].cells[0].getElementsByTagName("input")[0].value.toLowerCase()){a.rows[b].cells[0].getElementsByTagName("input")[0].click()}}}}function renumberSections(){var c;var d;var a=1;var b;for(i=0;i<panels.length;i++){if(i<panels.length){if($(panels[i][0]).style!=undefined&&$(panels[i][0]).style.display==""){c=$(panels[i][0]).getElementsByTagName("span");for(j=0;j<c.length;j++){if(c[j].id.indexOf("lblControlCount")!=-1){if(panels[i][1]!="1"){$(c[j].id).innerHTML=a}else{$(c[j].id).innerHTML=a-1}}}if(panels[i][1]!="1"){a++}}}}}function arrayToCAList(a){var c=[];for(var b=1;b<a.length;b++){c.push('<tr><td style="padding-bottom:0px;" ><input type="checkbox" value="'+a[b][1]+'"  onclick=checkCASelect(this); /></td><td style="padding-bottom:0px;">'+a[b][0]+"</td></tr>")}return c}function populateCAStaffList(c,a){var b=$(c);b.update("<table id=tblCAStaff_"+c+"><tbody>"+a.join("")+"</tbody></table>")}function searchCAStaff(c,f){var b=f.parentNode.parentNode.getElementsByTagName("div");var a;for(var d=0;b.length;d++){if(b[d].id.indexOf("dvCAStaff")!=-1){a=b[d].getElementsByTagName("table")[0];for(var e=0;e<a.rows.length;e++){if(a.rows[e].cells[1].innerHTML.toLowerCase().indexOf(f.value.toLowerCase())==-1){a.rows[e].style.display="none"}else{a.rows[e].style.display=""}}break}}}function initCASearch(a){if(a.value=="Type to search"){a.value="";a.style.color="#000000";a.style.fontStyle=""}}Array.prototype.myUcase=function(){for(i=0;i<this.length;i++){this[i]="<option value ='"+this[i][1]+"' >"+this[i][0]+"</option>"}};function arrayToOptionList(a){var b=[];for(i=0;i<a.length;i++){b.push("<option value ='"+a[i][1]+"' >"+a[i][0]+"</option>")}return b.join("")}function populateList(d,a,b){var c=$(d);var f="";if(c.options.selectedIndex>0){f=c.options[c.options.selectedIndex].value}var e="";if(!b){e=J("#"+d+"").html(a)}else{e=b.clone(true);J(e).attr("id",d);J("#"+d+"").replaceWith(e)}if(f!=""){for(i=0;i<c.options.length;i++){if(c.options[i].value==f){c.options.selectedIndex=i;break}}}return e}function findNodeTree(b,c){var a;if(b.tagName.toLowerCase()!=c.toLowerCase()){a=findNodeTree(b.parentNode,c)}else{a=b}return a}function removeCorrectiveAction(a,b){var c="";var e=findNodeTree(b,"table");var d=findNodeTree(b,"tr").rowIndex;c+="&caid="+a;if(confirm("Delete this corrective action? Click OK to confirm")){new Ajax.Request("ajax/CorrectiveActions.aspx?incidentid="+hdIncidentId.value+"&action=delete",{method:"post",parameters:c,onSuccess:function(f){if(f.responseText==""){e.deleteRow(d+1);e.deleteRow(d);if(e.rows.length==1){e.deleteRow(0)}}},onFailure:function(f){document.clear();document.write(f.responseText)}})}}function loadCorrectiveActions(b,d){var c="";var a=$(b);var e=0;if(d!=null){e=d;c+="&rootCauseId="+e}new Ajax.Request("ajax/CorrectiveActions.aspx?incidentid="+hdIncidentId.value+"&action=getList",{method:"post",parameters:c,onSuccess:function(f){a.innerHTML=f.responseText},onFailure:function(f){document.clear();document.write(f.responseText)}})}function selectTD(d){var b=$("tcLikelihood").getElementsByTagName("input");var e=$("tcSeverity").getElementsByTagName("input");var c="";var f="";var a=dvRiskMatrix.getElementsByTagName("td");var g;if(hdIncidentId.value!=0){for(i=0;i<b.length;i++){if(b[i].checked){c=b[i].value;break}}for(i=0;i<e.length;i++){if(e[i].checked){f=e[i].value;break}}if(c!=""&&f!=""){for(i=0;i<a.length;i++){if(a[i].id.indexOf("matrix")!=-1){a[i].style.borderColor=a[i].style.backgroundColor}}for(i=0;i<a.length;i++){if(a[i].id.indexOf("matrix")!=-1){g=a[i].id.split("_");if(g[g.length-2]==f&&g[g.length-1]==c){a[i].style.borderColor="#000000"}}}if(hdIncidentId.value!=0){saveMatrix(c,f,hdIncidentId.value)}}$("riskMatrixIdError").style.display="none";saveMatrix(c,f,hdIncidentId.value);$("riskMatrixError").style.display="none"}else{if(d!=null){$("riskMatrixIdError").style.display=""}}}function ddlSelectValue(c,d){var b=$(c);for(var a=0;a<b.options.length;a++){if(b.options[a].value==d){b.options[a].selected=true;break}}};