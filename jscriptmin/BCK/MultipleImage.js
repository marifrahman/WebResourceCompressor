var fadebgcolor="white";var fadearray=new Array();var fadeclear=new Array();var dom=(document.getElementById);var iebrowser=document.all;function fadeshow(g,e,d,a,b,f,c){this.pausecheck=f;this.mouseovercheck=0;this.delay=b;this.degree=10;this.curimageindex=0;this.nextimageindex=1;fadearray[fadearray.length]=this;this.slideshowid=fadearray.length-1;this.canvasbase="canvas"+this.slideshowid;this.curcanvas=this.canvasbase+"_0";if(typeof c!="undefined"){g.sort(function(){return 0.5-Math.random()})}this.theimages=g;this.imageborder=parseInt(a);this.postimages=new Array();for(p=0;p<g.length;p++){this.postimages[p]=new Image();this.postimages[p].src=g[p][0]}var e=e+this.imageborder*2;var d=d+this.imageborder*2;if(iebrowser&&dom||dom){document.write('<div id="master'+this.slideshowid+'" style="position:relative;width:'+e+"px;height:"+d+'px;overflow:hidden;"><div id="'+this.canvasbase+'_0" style="position:absolute;width:'+e+"px;height:"+d+"px;top:0;left:0;filter:progid:DXImageTransform.Microsoft.alpha(opacity=10);opacity:0.1;-moz-opacity:0.1;-khtml-opacity:0.1;background-color:"+fadebgcolor+'"></div><div id="'+this.canvasbase+'_1" style="position:absolute;width:'+e+"px;height:"+d+"px;top:0;left:0;filter:progid:DXImageTransform.Microsoft.alpha(opacity=10);opacity:0.1;-moz-opacity:0.1;-khtml-opacity:0.1;background-color:"+fadebgcolor+'"></div></div>')}else{document.write('<div><img name="defaultslide'+this.slideshowid+'" src="'+this.postimages[0].src+'"></div>')}if(iebrowser&&dom||dom){this.startit()}else{this.curimageindex++;setInterval("fadearray["+this.slideshowid+"].rotateimage()",this.delay)}}function fadepic(a){if(a.degree<100){a.degree+=10;if(a.tempobj.filters&&a.tempobj.filters[0]){if(typeof a.tempobj.filters[0].opacity=="number"){a.tempobj.filters[0].opacity=a.degree}else{a.tempobj.style.filter="alpha(opacity="+a.degree+")"}}else{if(a.tempobj.style.MozOpacity){a.tempobj.style.MozOpacity=a.degree/101}else{if(a.tempobj.style.KhtmlOpacity){a.tempobj.style.KhtmlOpacity=a.degree/100}else{if(a.tempobj.style.opacity&&!a.tempobj.filters){a.tempobj.style.opacity=a.degree/101}}}}}else{clearInterval(fadeclear[a.slideshowid]);a.nextcanvas=(a.curcanvas==a.canvasbase+"_0")?a.canvasbase+"_0":a.canvasbase+"_1";a.tempobj=iebrowser?iebrowser[a.nextcanvas]:document.getElementById(a.nextcanvas);a.populateslide(a.tempobj,a.nextimageindex);a.nextimageindex=(a.nextimageindex<a.postimages.length-1)?a.nextimageindex+1:0;setTimeout("fadearray["+a.slideshowid+"].rotateimage()",a.delay)}}fadeshow.prototype.populateslide=function(b,a){var c="";if(this.theimages[a][1]!=""){c='<a href="'+this.theimages[a][1]+'" target="'+this.theimages[a][2]+'">'}c+='<img src="'+this.postimages[a].src+'" border="'+this.imageborder+'px">';if(this.theimages[a][1]!=""){c+="</a>"}b.innerHTML=c};fadeshow.prototype.rotateimage=function(){if(this.pausecheck==1){var a=this}if(this.mouseovercheck==1){setTimeout(function(){a.rotateimage()},100)}else{if(iebrowser&&dom||dom){this.resetit();var b=this.tempobj=iebrowser?iebrowser[this.curcanvas]:document.getElementById(this.curcanvas);b.style.zIndex++;fadeclear[this.slideshowid]=setInterval("fadepic(fadearray["+this.slideshowid+"])",50);this.curcanvas=(this.curcanvas==this.canvasbase+"_0")?this.canvasbase+"_1":this.canvasbase+"_0"}else{var c=document.images["defaultslide"+this.slideshowid];c.src=this.postimages[this.curimageindex].src}}this.curimageindex=(this.curimageindex<this.postimages.length-1)?this.curimageindex+1:0};fadeshow.prototype.resetit=function(){this.degree=10;var a=iebrowser?iebrowser[this.curcanvas]:document.getElementById(this.curcanvas);if(a.filters&&a.filters[0]){if(typeof a.filters[0].opacity=="number"){a.filters(0).opacity=this.degree}else{a.style.filter="alpha(opacity="+this.degree+")"}}else{if(a.style.MozOpacity){a.style.MozOpacity=this.degree/101}else{if(a.style.KhtmlOpacity){a.style.KhtmlOpacity=this.degree/100}else{if(a.style.opacity&&!a.filters){a.style.opacity=this.degree/101}}}}};fadeshow.prototype.startit=function(){var b=iebrowser?iebrowser[this.curcanvas]:document.getElementById(this.curcanvas);this.populateslide(b,this.curimageindex);if(this.pausecheck==1){var a=this;var c=iebrowser?iebrowser["master"+this.slideshowid]:document.getElementById("master"+this.slideshowid);c.onmouseover=function(){a.mouseovercheck=1};c.onmouseout=function(){a.mouseovercheck=0}}this.rotateimage()};