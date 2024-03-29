LightboxOptions=Object.extend({fileLoadingImage:"images/loading.gif",fileBottomNavCloseImage:"images/closelabel.gif",overlayOpacity:0.8,animate:true,resizeSpeed:7,borderSize:10,labelImage:"Image",labelOf:"of"},window.LightboxOptions||{});var Lightbox=Class.create();Lightbox.prototype={imageArray:[],activeImage:undefined,initialize:function(){this.updateImageList();this.keyboardAction=this.keyboardAction.bindAsEventListener(this);if(LightboxOptions.resizeSpeed>10){LightboxOptions.resizeSpeed=10}if(LightboxOptions.resizeSpeed<1){LightboxOptions.resizeSpeed=1}this.resizeDuration=LightboxOptions.animate?((11-LightboxOptions.resizeSpeed)*0.15):0;this.overlayDuration=LightboxOptions.animate?0.2:0;var b=(LightboxOptions.animate?250:1)+"px";var a=$$("body")[0];a.appendChild(Builder.node("div",{id:"overlay"}));a.appendChild(Builder.node("div",{id:"lightbox"},[Builder.node("div",{id:"outerImageContainer"},Builder.node("div",{id:"imageContainer"},[Builder.node("img",{id:"lightboxImage"}),Builder.node("div",{id:"hoverNav"},[Builder.node("a",{id:"prevLink",href:"#"}),Builder.node("a",{id:"nextLink",href:"#"})]),Builder.node("div",{id:"loading"},Builder.node("a",{id:"loadingLink",href:"#"},Builder.node("img",{src:LightboxOptions.fileLoadingImage})))])),Builder.node("div",{id:"imageDataContainer"},Builder.node("div",{id:"imageData"},[Builder.node("div",{id:"imageDetails"},[Builder.node("span",{id:"caption"}),Builder.node("span",{id:"numberDisplay"})]),Builder.node("div",{id:"bottomNav"},Builder.node("a",{id:"bottomNavClose",href:"#"},Builder.node("img",{src:LightboxOptions.fileBottomNavCloseImage})))]))]));$("overlay").hide().observe("click",(function(){this.end()}).bind(this));$("lightbox").hide().observe("click",(function(d){if(d.element().id=="lightbox"){this.end()}}).bind(this));$("outerImageContainer").setStyle({width:b,height:b});$("prevLink").observe("click",(function(d){d.stop();this.changeImage(this.activeImage-1)}).bindAsEventListener(this));$("nextLink").observe("click",(function(d){d.stop();this.changeImage(this.activeImage+1)}).bindAsEventListener(this));$("loadingLink").observe("click",(function(d){d.stop();this.end()}).bind(this));$("bottomNavClose").observe("click",(function(d){d.stop();this.end()}).bind(this));var c=this;(function(){var d="overlay lightbox outerImageContainer imageContainer lightboxImage hoverNav prevLink nextLink loading loadingLink imageDataContainer imageData imageDetails caption numberDisplay bottomNav bottomNavClose";$w(d).each(function(e){c[e]=$(e)})}).defer()},updateImageList:function(){this.updateImageList=Prototype.emptyFunction;document.observe("click",(function(a){var b=a.findElement("a[rel^=lightbox]")||a.findElement("area[rel^=lightbox]");if(b){a.stop();this.start(b)}}).bind(this))},start:function(c){$$("select","object","embed").each(function(g){g.style.visibility="hidden"});var b=this.getPageSize();$("overlay").setStyle({width:b[0]+"px",height:b[1]+"px"});new Effect.Appear(this.overlay,{duration:this.overlayDuration,from:0,to:LightboxOptions.overlayOpacity});this.imageArray=[];var d=0;if((c.rel=="lightbox")){this.imageArray.push([c.href,c.title])}else{this.imageArray=$$(c.tagName+'[href][rel="'+c.rel+'"]').collect(function(g){return[g.href,g.title]}).uniq();while(this.imageArray[d][0]!=c.href){d++}}var a=document.viewport.getScrollOffsets();var f=a[1]+(document.viewport.getHeight()/16);var e=a[0];this.lightbox.setStyle({top:f+"px",left:e+"px"}).show();this.changeImage(d)},changeImage:function(a){this.activeImage=a;if(LightboxOptions.animate){this.loading.show()}this.lightboxImage.hide();this.hoverNav.hide();this.prevLink.hide();this.nextLink.hide();this.imageDataContainer.setStyle({opacity:0.0001});this.numberDisplay.hide();var b=new Image();b.onload=(function(){this.lightboxImage.src=this.imageArray[this.activeImage][0];this.imageArray[this.activeImage][2]=b.width;this.imageArray[this.activeImage][3]=b.height;this.adjustImageSize()}).bind(this);b.src=this.imageArray[this.activeImage][0]},adjustImageSize:function(){imgWidth=this.imageArray[this.activeImage][2];imgHeight=this.imageArray[this.activeImage][3];var a=this.getPageSize();var b=imgWidth/imgHeight;var e=a[2]/a[3];if(b>e){var d=a[2]-(LightboxOptions.borderSize*4)-(LightboxOptions.borderSize*2);var c=Math.round(d/b)}else{var c=a[3]-(LightboxOptions.borderSize*5)-(a[3]/15)-LightboxOptions.borderSize;var d=Math.round(c*b)}if(imgWidth>d||imgHeight>c){imgWidth=d;imgHeight=c}Element.setStyle("lightboxImage",{width:imgWidth+"px"});this.resizeImageContainer(imgWidth,imgHeight)},resizeImageContainer:function(e,d){var h=this.outerImageContainer.getWidth();var b=this.outerImageContainer.getHeight();var i=(e+LightboxOptions.borderSize*2);var c=(d+LightboxOptions.borderSize*2);var j=(i/h)*100;var k=(c/b)*100;var g=h-i;var a=b-c;if(a!=0){new Effect.Scale(this.outerImageContainer,k,{scaleX:false,duration:this.resizeDuration,queue:"front"})}if(g!=0){new Effect.Scale(this.outerImageContainer,j,{scaleY:false,duration:this.resizeDuration,delay:this.resizeDuration})}var f=0;if((a==0)&&(g==0)){f=100;if(Prototype.Browser.IE){f=250}}(function(){this.prevLink.setStyle({height:d+"px"});this.nextLink.setStyle({height:d+"px"});this.imageDataContainer.setStyle({width:i+"px"});this.showImage()}).bind(this).delay(f/1000)},showImage:function(){this.loading.hide();new Effect.Appear(this.lightboxImage,{duration:this.resizeDuration,queue:"end",afterFinish:(function(){this.updateDetails()}).bind(this)});this.preloadNeighborImages()},updateDetails:function(){if(this.imageArray[this.activeImage][1]!=""){this.caption.update(this.imageArray[this.activeImage][1]).show()}if(this.imageArray.length>1){this.numberDisplay.update(LightboxOptions.labelImage+" "+(this.activeImage+1)+" "+LightboxOptions.labelOf+"  "+this.imageArray.length).show()}new Effect.Parallel([new Effect.SlideDown(this.imageDataContainer,{sync:true,duration:this.resizeDuration,from:0,to:1}),new Effect.Appear(this.imageDataContainer,{sync:true,duration:this.resizeDuration})],{duration:this.resizeDuration,afterFinish:(function(){var a=this.getPageSize();this.overlay.setStyle({height:a[1]+"px"});this.updateNav()}).bind(this)})},updateNav:function(){this.hoverNav.show();if(this.activeImage>0){this.prevLink.show()}if(this.activeImage<(this.imageArray.length-1)){this.nextLink.show()}this.enableKeyboardNav()},enableKeyboardNav:function(){document.observe("keydown",this.keyboardAction)},disableKeyboardNav:function(){document.stopObserving("keydown",this.keyboardAction)},keyboardAction:function(b){var d=b.keyCode;var a;if(b.DOM_VK_ESCAPE){a=b.DOM_VK_ESCAPE}else{a=27}var c=String.fromCharCode(d).toLowerCase();if(c.match(/x|o|c/)||(d==a)){this.end()}else{if((c=="p")||(d==37)){if(this.activeImage!=0){this.disableKeyboardNav();this.changeImage(this.activeImage-1)}}else{if((c=="n")||(d==39)){if(this.activeImage!=(this.imageArray.length-1)){this.disableKeyboardNav();this.changeImage(this.activeImage+1)}}}}},preloadNeighborImages:function(){var a,b;if(this.imageArray.length>this.activeImage+1){a=new Image();a.src=this.imageArray[this.activeImage+1][0]}if(this.activeImage>0){b=new Image();b.src=this.imageArray[this.activeImage-1][0]}},end:function(){this.disableKeyboardNav();this.lightbox.hide();new Effect.Fade(this.overlay,{duration:this.overlayDuration});$$("select","object","embed").each(function(a){a.style.visibility="visible"})},getPageSize:function(){var c,d;if(window.innerHeight&&window.scrollMaxY){c=window.innerWidth+window.scrollMaxX;d=window.innerHeight+window.scrollMaxY}else{if(document.body.scrollHeight>document.body.offsetHeight){c=document.body.scrollWidth;d=document.body.scrollHeight}else{c=document.body.offsetWidth;d=document.body.offsetHeight}}var b,a;if(self.innerHeight){if(document.documentElement.clientWidth){b=document.documentElement.clientWidth}else{b=self.innerWidth}a=self.innerHeight}else{if(document.documentElement&&document.documentElement.clientHeight){b=document.documentElement.clientWidth;a=document.documentElement.clientHeight}else{if(document.body){b=document.body.clientWidth;a=document.body.clientHeight}}}if(d<a){pageHeight=a}else{pageHeight=d}if(c<b){pageWidth=c}else{pageWidth=b}return[pageWidth,pageHeight,b,a]}};document.observe("dom:loaded",function(){new Lightbox()});