function nube2Mov(){$("#nube2").animate({left:10},5e4,"linear");$("#nube2").fadeOut();nube2Back()}function nube2Back(){var e=setTimeout("$('#nube2').fadeIn(); $('#nube2').css({ left:595 }); nube2Mov();",51e3)}function nube5Mov(){$("#nube5").animate({left:980},5e4,"linear");$("#nube5").fadeOut();nube5Back()}function nube5Back(){var e=setTimeout("$('#nube5').fadeIn(); $('#nube5').css({ left:104 }); nube5Mov();",51e3)}function ave1Sel(){$("#ave1").animate({top:355},50,"linear");ave1Selback()}function ave1Selback(){$("#ave1").animate({top:375},100,"linear")}function ave2Mov(){$("#ave2").animate({top:328},2e3,"swing");var e=setTimeout("ave2MovBack();",1100)}function ave2MovBack(){$("#ave2").animate({top:288},1e3,"linear");var e=setTimeout("ave2Mov();",1100)}function familiaEntra(){$("#familia").animate({left:492},1e3);puebloEntra()}function puebloEntra(){$("#pueblo").animate({top:23},1100);var e=setTimeout("pirataEntra()",900)}function pirataEntra(){$("#pirata").animate({top:71,left:717},600)}function flor2Mov(){$("#flor2").animate({top:620},1100);var e=setTimeout("flor2MovBack()",2e3,"swing")}function flor2MovBack(){$("#flor2").animate({top:608},1100);var e=setTimeout("flor2Mov()",3e3,"swing")}function p02tx1(){$("#p02t1").fadeIn();$("#p02t2").fadeOut();$("#p02t3").fadeOut();$("#p02t4").fadeOut();$("#p02t5").fadeOut();$("#p02t6").fadeOut()}function p02tx2(){$("#p02t1").fadeOut();$("#p02t2").fadeIn();$("#p02t3").fadeOut();$("#p02t4").fadeOut();$("#p02t5").fadeOut();$("#p02t6").fadeOut()}function p02tx3(){$("#p02t1").fadeOut();$("#p02t2").fadeOut();$("#p02t3").fadeIn();$("#p02t4").fadeOut();$("#p02t5").fadeOut();$("#p02t6").fadeOut()}function p02tx4(){$("#p02t1").fadeOut();$("#p02t2").fadeOut();$("#p02t3").fadeOut();$("#p02t4").fadeIn();$("#p02t5").fadeOut();$("#p02t6").fadeOut()}function p02tx5(){$("#p02t1").fadeOut();$("#p02t2").fadeOut();$("#p02t3").fadeOut();$("#p02t4").fadeOut();$("#p02t5").fadeIn();$("#p02t6").fadeOut()}function p02tx6(){$("#p02t1").fadeOut();$("#p02t2").fadeOut();$("#p02t3").fadeOut();$("#p02t4").fadeOut();$("#p02t5").fadeOut();$("#p02t6").fadeIn()}function p05flor1down(){$("#p05f1").animate({top:611},800,"swing");var e=setTimeout("p05flor1up()",1e3,"swing")}function p05flor1up(){$("#p05f1").animate({top:601},1e3,"swing");var e=setTimeout("p05flor1down()",3e3,"swing")}function p05flor2down(){$("#p05f2").animate({top:632},1200,"swing");var e=setTimeout("p05flor2up()",800,"swing")}function p05flor2up(){$("#p05f2").animate({top:642},1e3,"swing");var e=setTimeout("p05flor2down()",4e3,"swing")}function p05flor3down(){$("#p05f3").animate({top:628},900,"swing");var e=setTimeout("p05flor3up()",1e3,"swing")}function p05flor3up(){$("#p05f3").animate({top:618},1100,"swing");var e=setTimeout("p05flor3down()",5e3,"swing")}function p05flor4down(){$("#p05f4").animate({top:604},1200,"swing");var e=setTimeout("p05flor4up()",1e3,"swing")}function p05flor4up(){$("#p05f4").animate({top:594},1e3,"swing");var e=setTimeout("p05flor4down()",6e3,"swing")}function p05flor5down(){$("#p05f5").animate({top:632},800,"swing");var e=setTimeout("p05flor5up()",3e3,"swing")}function p05flor5up(){$("#p05f5").animate({top:642},1e3,"swing");var e=setTimeout("p05flor5down()",2e3,"swing")}function p06nubeL(){$("#p06nube").animate({left:5124},14e3,"linear");var e=setTimeout("p06nubeR()",2e3,"swing")}function p06nubeR(){$("#p06nube").animate({left:5559},14e3,"linear");var e=setTimeout("p06nubeL()",2e3,"swing")}function p06tear(){$("#p06tear").animate({top:624,filter:"alpha(opacity=0)","-moz-opacity":0,"-khtml-opacity":0,opacity:0},4e3,"linear");var e=setTimeout("p06tearback()",4500,"swing")}function p06tearback(){$("#p06tear").css({top:526,filter:"alpha(opacity=100)","-moz-opacity":1,"-khtml-opacity":1,opacity:1});var e=setTimeout("p06tear()",500,"swing")}function p07zacate1(){$("#p07zacate1").animate({left:6160},2e3,"swing");var e=setTimeout("p07zacate1Back();",2100)}function p07zacate1Back(){$("#p07zacate1").animate({left:6144},2e3,"linear");var e=setTimeout("p07zacate1();",2100)}function p07zacate2(){$("#p07zacate2").animate({left:6970},2500,"swing");var e=setTimeout("p07zacate2Back();",2600)}function p07zacate2Back(){$("#p07zacate2").animate({left:6982},2500,"linear");var e=setTimeout("p07zacate2();",2600)}function p09pajaroMov(){$("#p09pajaro2").fadeOut(0);$("#p09pajaro1").fadeIn(0);$("#p09pajaro1").animate({left:9500,top:70},3500,"swing");$("#p09pajaro2").css({left:9500,top:70});var e=setTimeout("p09pajaroMovBack();",3600)}function p09pajaroMovBack(){$("#p09pajaro1").fadeOut(0);$("#p09pajaro2").fadeIn(0);$("#p09pajaro2").animate({left:8980,top:500},4500,"linear");$("#p09pajaro1").css({left:8980,top:500});var e=setTimeout("p09pajaroMov();",4600)}function p10hormigaMov(){$("#p10hormiga").animate({left:10950,top:480},2500,"swing");var e=setTimeout("p10hormigaBack();",3600)}function p10hormigaBack(){$("#p10hormiga").animate({left:10990,top:420},2500,"linear");var e=setTimeout("p10hormigaUp();",3600)}function p10hormigaUp(){$("#p10hormiga").animate({left:11040,top:480},2500,"linear");var e=setTimeout("p10hormigaMov();",3600)}function p11hormigaUp(){$("#p11hormiga").animate({top:300},1500,"swing");var e=setTimeout("p11hormigaDown();",1400)}function p11hormigaDown(){$("#p11hormiga").animate({top:350},1200,"linear");var e=setTimeout("p11hormigaUp();",2500)}function p13ojoOpen(){$("#p13ojo").fadeIn(100);var e=setTimeout("p13ojoClose()",3e3,"swing")}function p13ojoClose(){$("#p13ojo").fadeOut(500);var e=setTimeout("p13ojoOpen()",2e3,"swing")}function p14capa1a(){$("#p14capa1").fadeIn(250);var e=setTimeout("p14capa1b()",0,"swing")}function p14capa1b(){$("#p14capa1").fadeOut(280);var e=setTimeout("p14capa1a()",0,"swing")}function p14capa2a(){$("#p14capa2").fadeIn(525);var e=setTimeout("p14capa2b()",0,"swing")}function p14capa2b(){$("#p14capa2").fadeOut(510);var e=setTimeout("p14capa2a()",0,"swing")}function p14lapizlocoUp(){$("#p14lapizloco").animate({top:18},400,"swing");var e=setTimeout("p14lapizlocoDown();",500)}function p14lapizlocoDown(){$("#p14lapizloco").animate({top:28},600,"linear");var e=setTimeout("p14lapizlocoUp();",700)}function p15lapizUp(){$("#p15lapiz").animate({top:308},400,"swing");var e=setTimeout("p15lapizDown();",500)}function p15lapizDown(){$("#p15lapiz").animate({top:300},600,"linear");var e=setTimeout("p15lapizUp();",700)}function p17nube(){$("#p17nube").fadeIn(2e3);$("#p17nube").animate({left:18250},9e3,"swing");var e=setTimeout("$('#p17nube').fadeOut(); p17nubeBack();",9100)}function p17nubeBack(){$("#p17nube").fadeOut();var e=setTimeout("$('#p17nube').css({ 'left':17420, }); p17nube();",9300)}function p17nube2(){$("#p17nube2").fadeIn(2e3);$("#p17nube2").animate({left:18250},11e3,"swing");var e=setTimeout("$('#p17nube2').fadeOut(); p17nube2Back();",11100)}function p17nube2Back(){$("#p17nube2").fadeOut();var e=setTimeout("$('#p17nube2').css({ 'left':17420, }); p17nube2();",11300)}function p18olaFront(){$("#p18olaFront").animate({left:18461},1e3,"swing");var e=setTimeout("p18olaFrontBack();",1100)}function p18olaFrontBack(){$("#p18olaFront").animate({left:18431},1e3,"swing");var e=setTimeout("p18olaFront();",1100)}function p18tibu(){$("#p18tiburon").animate({bottom:-50},700,"swing");var e=setTimeout("p18tibuBack();",800)}function p18tibuBack(){$("#p18tiburon").animate({bottom:-70},700,"swing");var e=setTimeout("p18tibu();",800)}function p19barco(){$("#p19barco").animate({bottom:-5},700,"swing");var e=setTimeout("p19barcoBack();",500)}function p19barcoBack(){$("#p19barco").animate({bottom:-15},700,"swing");var e=setTimeout("p19barco();",700)}function p19olaFront(){$("#p19olaFront").animate({left:19465},1e3,"swing");var e=setTimeout("p19olaFrontBack();",1100)}function p19olaFrontBack(){$("#p19olaFront").animate({left:19415},1e3,"swing");var e=setTimeout("p19olaFront();",1100)}function p20humo1(){var e=setTimeout("$('#p20humo1').fadeIn(900), p20humo1Back();")}function p20humo1Back(){var e=setTimeout("$('#p20humo1').fadeOut(1000), p20humo1();")}function p20humo2(){var e=setTimeout("$('#p20humo2').fadeIn(600), p20humo2Back();")}function p20humo2Back(){var e=setTimeout("$('#p20humo2').fadeOut(700), p20humo2();")}function p21Close(){$("#p21Cerrados").css({display:"block"});$("#p21Abiertos").css({display:"none"});var e=setTimeout("p21Open();",200)}function p21Open(){$("#p21Abiertos").css({display:"block"});$("#p21Cerrados").css({display:"none"});var e=setTimeout("p21Close2();",200)}function p21Close2(){$("#p21Cerrados").css({display:"block"});$("#p21Abiertos").css({display:"none"});var e=setTimeout("p21Open2();",200)}function p21Open2(){$("#p21Abiertos").css({display:"block"});$("#p21Cerrados").css({display:"none"});var e=setTimeout("p21Close();",2e3)}function p22flor(){$("#p22flor").animate({top:620},1100);var e=setTimeout("p22florBack()",2e3,"swing")}function p22florBack(){$("#p22flor").animate({top:608},1100);var e=setTimeout("p22flor()",3e3,"swing")}function p22flores(){$("#p22floresGrupo").animate({top:420},700);var e=setTimeout("p22floresBack()",1e3,"swing")}function p22floresBack(){$("#p22floresGrupo").animate({top:430},900);var e=setTimeout("p22flores()",2e3,"swing")}function playAudio1(){audioElement.setAttribute("src","audioOgg/CUENTO_PUEBLO_CHICO.ogg");audioElement.setAttribute("autoplay","autoplay");$.get();audioElement.addEventListener("load",function(){audioElement.play()},true);audioElement.play();$("#playbtn1").fadeOut(100);$("#pausebtn1").fadeIn(500)}function pauseAudio1(){audioElement.pause();$("#playbtn1").fadeIn(100);$("#pausebtn1").fadeOut(500)}function playAudio2(){audioElement.setAttribute("src","audioOgg/CUENTO_CAMINO_A_LA_ESCUELA.ogg");audioElement.setAttribute("autoplay","autoplay");$.get();audioElement.addEventListener("load",function(){audioElement.play()},true);audioElement.play();$("#playbtn2").fadeOut(100);$("#pausebtn2").fadeIn(500)}function pauseAudio2(){audioElement.pause();$("#playbtn2").fadeIn(100);$("#pausebtn2").fadeOut(500)}function playAudio3(){audioElement.setAttribute("src","audioOgg/CUENTO_LA_LUZ_DE_MI_CORAZON.ogg");audioElement.setAttribute("autoplay","autoplay");$.get();audioElement.addEventListener("load",function(){audioElement.play()},true);audioElement.play();$("#playbtn3").fadeOut(100);$("#pausebtn3").fadeIn(500)}function pauseAudio3(){audioElement.pause();$("#playbtn3").fadeIn(100);$("#pausebtn3").fadeOut(500)}function playAudio4(){audioElement.setAttribute("src","audioOgg/CUENTO_SUPERTAJADOR.ogg");audioElement.setAttribute("autoplay","autoplay");$.get();audioElement.addEventListener("load",function(){audioElement.play()},true);audioElement.play();$("#playbtn4").fadeOut(100);$("#pausebtn4").fadeIn(500)}function pauseAudio4(){audioElement.pause();$("#playbtn4").fadeIn(100);$("#pausebtn4").fadeOut(500)}function playAudio5(){audioElement.setAttribute("src","audioOgg/CUENTO_VIAJE_A_BORDO_DEL_ILUSION.ogg");audioElement.setAttribute("autoplay","autoplay");$.get();audioElement.addEventListener("load",function(){audioElement.play()},true);audioElement.play();$("#playbtn5").fadeOut(100);$("#pausebtn5").fadeIn(500)}function pauseAudio5(){audioElement.pause();$("#playbtn5").fadeIn(100);$("#pausebtn5").fadeOut(500)}function playAudio6(){audioElement.setAttribute("src","audioOgg/CUENTO_EL_JARDIN_DE_DON_BETO.ogg");audioElement.setAttribute("autoplay","autoplay");$.get();audioElement.addEventListener("load",function(){audioElement.play()},true);audioElement.play();$("#playbtn6").fadeOut(100);$("#pausebtn6").fadeIn(500)}function pauseAudio6(){audioElement.pause();$("#playbtn6").fadeIn(100);$("#pausebtn6").fadeOut(500)}function loaded(){myScroll=new iScroll("wrapper",{snap:true,momentum:false,hScrollbar:false,onScrollEnd:function(){document.querySelector("#indicator > li.active").className="";document.querySelector("#indicator > li:nth-child("+(this.currPageX+1)+")").className="active"}})}function detectOrientation(){if(typeof window.onorientationchange!="undefined"){if(orientation==0){}else if(orientation==90){}else if(orientation==-90){}else if(orientation==180){}}}function zoomImg01(){$("#imgBig01").fadeIn(100);$("#zoomOutbtn1").fadeIn(500);$("#imgBig01").css({display:"block"});$("#zoomOutbtn1").css({display:"block"})}function closeZoomImg01(){$("#imgBig01").hide();$("#zoomOutbtn1").hide()}function zoomImg02(){$("#imgBig02").fadeIn(100);$("#zoomOutbtn2").fadeIn(500)}function closeZoomImg02(){$("#imgBig02").hide();$("#zoomOutbtn2").hide()}function zoomImg03(){$("#imgBig03").fadeIn(100);$("#zoomOutbtn3").fadeIn(500)}function closeZoomImg03(){$("#imgBig03").hide();$("#zoomOutbtn3").hide()}function zoomImg04(){$("#imgBig04").fadeIn(100);$("#zoomOutbtn4").fadeIn(500)}function closeZoomImg04(){$("#imgBig04").hide();$("#zoomOutbtn4").hide()}function zoomImg05(){$("#imgBig05").fadeIn(100);$("#zoomOutbtn5").fadeIn(500)}function closeZoomImg05(){$("#imgBig05").hide();$("#zoomOutbtn5").hide()}function zoomImg06(){$("#imgBig06").fadeIn(100);$("#zoomOutbtn6").fadeIn(500)}function closeZoomImg06(){$("#imgBig06").hide();$("#zoomOutbtn6").hide()}function zoomImg07(){$("#imgBig07").fadeIn(100);$("#zoomOutbtn7").fadeIn(500)}function closeZoomImg07(){$("#imgBig07").hide();$("#zoomOutbtn7").hide()}function zoomImg08(){$("#imgBig08").fadeIn(100);$("#zoomOutbtn8").fadeIn(500)}function closeZoomImg08(){$("#imgBig08").hide();$("#zoomOutbtn8").hide()}function zoomImg09(){$("#imgBig09").fadeIn(100);$("#zoomOutbtn9").fadeIn(500)}function closeZoomImg09(){$("#imgBig09").hide();$("#zoomOutbtn9").hide()}function zoomImg10(){$("#imgBig10").fadeIn(100);$("#zoomOutbtn10").fadeIn(500)}function closeZoomImg10(){$("#imgBig10").hide();$("#zoomOutbtn10").hide()}function zoomImg11(){$("#imgBig11").fadeIn(100);$("#zoomOutbtn11").fadeIn(500)}function closeZoomImg11(){$("#imgBig11").hide();$("#zoomOutbtn11").hide()}function zoomImg12(){$("#imgBig12").fadeIn(100);$("#zoomOutbtn12").fadeIn(500)}function closeZoomImg12(){$("#imgBig12").hide();$("#zoomOutbtn12").hide()}function zoomImg13(){$("#imgBig13").fadeIn(100);$("#zoomOutbtn13").fadeIn(500)}function closeZoomImg13(){$("#imgBig13").hide();$("#zoomOutbtn13").hide()}function zoomImg14(){$("#imgBig14").fadeIn(100);$("#zoomOutbtn14").fadeIn(500)}function closeZoomImg14(){$("#imgBig14").hide();$("#zoomOutbtn14").hide()}function zoomImg15(){$("#imgBig15").fadeIn(100);$("#zoomOutbtn15").fadeIn(500)}function closeZoomImg15(){$("#imgBig15").hide();$("#zoomOutbtn15").hide()}function zoomImg16(){$("#imgBig16").fadeIn(100);$("#zoomOutbtn16").fadeIn(500)}function closeZoomImg16(){$("#imgBig16").hide();$("#zoomOutbtn16").hide()}function zoomImg17(){$("#imgBig17").fadeIn(100);$("#zoomOutbtn17").fadeIn(500)}function closeZoomImg17(){$("#imgBig17").hide();$("#zoomOutbtn17").hide()}function zoomImg18(){$("#imgBig18").fadeIn(100);$("#zoomOutbtn18").fadeIn(500)}function closeZoomImg18(){$("#imgBig18").hide();$("#zoomOutbtn18").hide()}function zoomImg19(){$("#imgBig19").fadeIn(100);$("#zoomOutbtn19").fadeIn(500)}function closeZoomImg19(){$("#imgBig19").hide();$("#zoomOutbtn19").hide()}function zoomImg20(){$("#imgBig20").fadeIn(100);$("#zoomOutbtn20").fadeIn(500)}function closeZoomImg20(){$("#imgBig20").hide();$("#zoomOutbtn20").hide()}function zoomImg21(){$("#imgBig21").fadeIn(100);$("#zoomOutbtn21").fadeIn(500)}function closeZoomImg21(){$("#imgBig21").hide();$("#zoomOutbtn21").hide()}function zoomImg22(){$("#imgBig22").fadeIn(100);$("#zoomOutbtn22").fadeIn(500)}function closeZoomImg22(){$("#imgBig22").hide();$("#zoomOutbtn22").hide()}function zoomImg23(){$("#imgBig23").fadeIn(100);$("#zoomOutbtn23").fadeIn(500)}function closeZoomImg23(){$("#imgBig23").hide();$("#zoomOutbtn23").hide()}function zoomImg24(){$("#imgBig24").fadeIn(100);$("#zoomOutbtn24").fadeIn(500)}function closeZoomImg24(){$("#imgBig24").hide();$("#zoomOutbtn24").hide()}function zoomImg25(){$("#imgBig25").fadeIn(100);$("#zoomOutbtn25").fadeIn(500)}function closeZoomImg25(){$("#imgBig25").hide();$("#zoomOutbtn25").hide()}function zoomImg26(){$("#imgBig26").fadeIn(100);$("#zoomOutbtn26").fadeIn(500)}function closeZoomImg26(){$("#imgBig26").hide();$("#zoomOutbtn26").hide()}function zoomImg27(){$("#imgBig27").fadeIn(100);$("#zoomOutbtn27").fadeIn(500)}function closeZoomImg27(){$("#imgBig27").hide();$("#zoomOutbtn27").hide()}function zoomImg28(){$("#imgBig28").fadeIn(100);$("#zoomOutbtn28").fadeIn(500)}function closeZoomImg28(){$("#imgBig28").hide();$("#zoomOutbtn28").hide()}if(screen.height<800){}else{}var ua=navigator.userAgent;if(ua.indexOf("Android")>=0){var androidversion=parseFloat(ua.slice(ua.indexOf("Android")+8))}$(document).ready(function(){$("body").css({"overflow-y":"hidden"});var e=$(window).height();$("body").append("<div id='pre-load-web'><div id='imagen-load'><img src='http://preloaders.net/preloaders/359/Filling%20circles.gif'  /><br />Cargando...</div>");$("#pre-load-web").css({height:e+"px"});$("#imagen-load").css({"margin-top":e/2-30+"px"});familiaEntra();ave2Mov();nube2Mov();nube5Mov();flor2Mov();p05flor1down();p05flor2down();p05flor3down();p05flor4down();p05flor5down();p06nubeL();p06tear();p07zacate1();p07zacate2();p09pajaroMov();p10hormigaMov();p11hormigaUp();p12rotarCuchara1();p13ojoOpen();p14capa1a();p14capa2b();p14lapizlocoUp();p15lapizUp();p17nube();p17nube2();p18olaFront();p18tibu();p19barco();p19olaFront();p20humo1();p20humo2();p21Close();p22flor();p22flores()});$(window).load(function(){$("#pre-load-web").fadeOut(1e3,function(){$(this).remove();$("body").css({"overflow-y":"auto"})})});var audioElement=document.createElement("audio");audioElement.setAttribute("autoplay","autoplay");$.get();var p12rotarCuchara1=function(){$("#p12cuchara").rotate({angle:0,animateTo:-20,callback:p12rotarCuchara2})};var p12rotarCuchara2=function(){$("#p12cuchara").rotate({angle:-20,animateTo:0,callback:p12rotarCuchara1})};var audioElement=document.createElement("audio");var myScroll;document.addEventListener("DOMContentLoaded",loaded,false);detectOrientation();window.onorientationchange=detectOrientation;