var audioElement = document.createElement('audio');
audioElement.setAttribute('autoplay', 'autoplay');
$.get();

function nube2Mov() {
	$("#nube2").animate( {
		'left':10,
	},50000, 'linear' );
	$('#nube2').fadeOut();
	nube2Back();
}
function nube2Back() {
	var tnube2back = setTimeout("$('#nube2').fadeIn(); $('#nube2').css({ left:595 }); nube2Mov();", 51000);
}

function nube5Mov() {
	$("#nube5").animate( {
		'left':980,
	},50000, 'linear' );
	$('#nube5').fadeOut();
	nube5Back();
}
function nube5Back() {
	var tnube5back = setTimeout("$('#nube5').fadeIn(); $('#nube5').css({ left:104 }); nube5Mov();",51000);
}

function ave1Sel() {
	$("#ave1").animate( {
		'top':355,
	},50, 'linear' );
	 ave1Selback();
}
function ave1Selback() {
	$("#ave1").animate( {
		'top':375,
	},100, 'linear' );
}

function ave2Mov() {
	$("#ave2").animate( {
		'top':328,
	},2000, 'swing' );
	var tave2 = setTimeout("ave2MovBack();", 1100);
}
function ave2MovBack() {
	$("#ave2").animate( {
		'top':288,
	},1000, 'linear' );
	var tave2bk = setTimeout("ave2Mov();", 1100);
}

function familiaEntra() {
	$("#familia").animate( {
		'left':492,
	},1000 );
	puebloEntra();
}

function puebloEntra() {
	$("#pueblo").animate( {
		'top':23,
	},1100 );
	var t1 = setTimeout("pirataEntra()",900);
}

function pirataEntra() {
	$("#pirata").animate( {
		'top':71,
		'left':717,
	},600 );
}

function flor2Mov() {
	$("#flor2").animate( {
		'top':620,
	},1100 );
	var tflor = setTimeout("flor2MovBack()",2000, 'swing');
}
function flor2MovBack() {
	$("#flor2").animate( {
		'top':608,
	},1100 );
	var tflor = setTimeout("flor2Mov()",3000, 'swing');
}

/*
function p02tx1() {
	$("#p02t1").fadeIn();
	$("#p02t2").fadeOut();
	$("#p02t3").fadeOut();
	$("#p02t4").fadeOut();
	$("#p02t5").fadeOut();
	$("#p02t6").fadeOut();
}
function p02tx2() {
	$("#p02t1").fadeOut();
	$("#p02t2").fadeIn();
	$("#p02t3").fadeOut();
	$("#p02t4").fadeOut();
	$("#p02t5").fadeOut();
	$("#p02t6").fadeOut();
}
function p02tx3() {
	$("#p02t1").fadeOut();
	$("#p02t2").fadeOut();
	$("#p02t3").fadeIn();
	$("#p02t4").fadeOut();
	$("#p02t5").fadeOut();
	$("#p02t6").fadeOut();
}
function p02tx4() {
	$("#p02t1").fadeOut();
	$("#p02t2").fadeOut();
	$("#p02t3").fadeOut();
	$("#p02t4").fadeIn();
	$("#p02t5").fadeOut();
	$("#p02t6").fadeOut();
}
function p02tx5() {
	$("#p02t1").fadeOut();
	$("#p02t2").fadeOut();
	$("#p02t3").fadeOut();
	$("#p02t4").fadeOut();
	$("#p02t5").fadeIn();
	$("#p02t6").fadeOut();
}
function p02tx6() {
	$("#p02t1").fadeOut();
	$("#p02t2").fadeOut();
	$("#p02t3").fadeOut();
	$("#p02t4").fadeOut();
	$("#p02t5").fadeOut();
	$("#p02t6").fadeIn();
}*/

function p05flor1down() {
	$("#p05f1").animate( {
		'top':611,
	},800, 'swing' );
	var tflor5_1 = setTimeout("p05flor1up()",1000, 'swing');
}
function p05flor1up() {
	$("#p05f1").animate( {
		'top':601,
	},1000, 'swing' );
	var tflor5_1 = setTimeout("p05flor1down()",3000, 'swing');
}

function p05flor2down() {
	$("#p05f2").animate( {
		'top':632,
	},1200, 'swing' );
	var tflor5_2 = setTimeout("p05flor2up()",800, 'swing');
}
function p05flor2up() {
	$("#p05f2").animate( {
		'top':642,
	},1000, 'swing' );
	var tflor5_2 = setTimeout("p05flor2down()",4000, 'swing');
}

function p05flor3down() {
	$("#p05f3").animate( {
		'top':628,
	},900, 'swing' );
	var tflor5_3 = setTimeout("p05flor3up()",1000, 'swing');
}
function p05flor3up() {
	$("#p05f3").animate( {
		'top':618,
	},1100, 'swing' );
	var tflor5_3 = setTimeout("p05flor3down()",5000, 'swing');
}

function p05flor4down() {
	$("#p05f4").animate( {
		'top':604,
	},1200, 'swing' );
	var tflor5_4 = setTimeout("p05flor4up()",1000, 'swing');
}
function p05flor4up() {
	$("#p05f4").animate( {
		'top':594,
	},1000, 'swing' );
	var tflor5_4 = setTimeout("p05flor4down()",6000, 'swing');
}

function p05flor5down() {
	$("#p05f5").animate( {
		'top':632,
	},800, 'swing' );
	var tflor5_5 = setTimeout("p05flor5up()",3000, 'swing');
}
function p05flor5up() {
	$("#p05f5").animate( {
		'top':642,
	},1000, 'swing' );
	var tflor5_5 = setTimeout("p05flor5down()",2000, 'swing');
}

function p06nubeL() {
	$("#p06nube").animate( {
		'left':5124,
	},14000, 'linear' );
	var t6nube = setTimeout("p06nubeR()",2000, 'swing');
}
function p06nubeR() {
	$("#p06nube").animate( {
		'left':5559,
	},14000, 'linear' );
	var t6nube = setTimeout("p06nubeL()",2000, 'swing');
}

function p06tear() {
	$("#p06tear").animate( {
		'top':624,
		'filter':'alpha(opacity=0)',
		'-moz-opacity':0,
		'-khtml-opacity':0,
		'opacity':0,
	},4000, 'linear' );
	var t6tear = setTimeout("p06tearback()",4500, 'swing');
}
function p06tearback() {
	$("#p06tear").css( {
		'top':526,
		'filter':'alpha(opacity=100)',
		'-moz-opacity':1,
		'-khtml-opacity':1,
		'opacity':1,
	});
	var t6tear = setTimeout("p06tear()",500, 'swing');
}

function p07zacate1() {
	$("#p07zacate1").animate( {
		'left':6160,
	},2000, 'swing' );
	var t07 = setTimeout("p07zacate1Back();", 2100);
}
function p07zacate1Back() {
	$("#p07zacate1").animate( {
		'left':6144,
	},2000, 'linear' );
	var t07bk = setTimeout("p07zacate1();", 2100);
}

function p07zacate2() {
	$("#p07zacate2").animate( {
		'left':6970,
	},2500, 'swing' );
	var t08 = setTimeout("p07zacate2Back();", 2600);
}
function p07zacate2Back() {
	$("#p07zacate2").animate( {
		'left':6982,
	},2500, 'linear' );
	var t08bk = setTimeout("p07zacate2();", 2600);
}

function p09pajaroMov() {
	$("#p09pajaro2").fadeOut(0);
	$("#p09pajaro1").fadeIn(0);
	$("#p09pajaro1").animate( {
		'left':9500,
		'top':70,
	},3500, 'swing' );
	$("#p09pajaro2").css( {
		'left':9500,
		'top':70,
	});
	var t09 = setTimeout("p09pajaroMovBack();", 3600);
	
	//clearTimeout(t09);
}
function p09pajaroMovBack() {
	$("#p09pajaro1").fadeOut(0);
	$("#p09pajaro2").fadeIn(0);
	$("#p09pajaro2").animate( {
		'left':8980,
		'top':500,
	},4500, 'linear' );
	$("#p09pajaro1").css( {
		'left':8980,
		'top':500,
	});
	var t09bk = setTimeout("p09pajaroMov();", 4600);
	//var t09bk = setTimeout("$('#p09pajaro1').fadeIn(); $('#p09pajaro1').css({ left:8980, top:500 }); p09pajaroMov();",2700);
	
	//clearTimeout(t09bk);
}

function p10hormigaMov() {
	$("#p10hormiga").animate( {
		'left':10950,
		'top':480,
	},2500, 'swing' );
	var t10 = setTimeout("p10hormigaBack();", 3600);
}
function p10hormigaBack() {
	$("#p10hormiga").animate( {
		'left':10990,
		'top':420,
	},2500, 'linear' );
	var t10bk = setTimeout("p10hormigaUp();", 3600);
}
function p10hormigaUp() {
	$("#p10hormiga").animate( {
		'left':11040,
		'top':480,
	},2500, 'linear' );
	var t10up = setTimeout("p10hormigaMov();", 3600);
}

function p11hormigaUp() {
	$("#p11hormiga").animate( {
		'top':300,
	},1500, 'swing' );
	var t11up = setTimeout("p11hormigaDown();", 1400);
}
function p11hormigaDown() {
	$("#p11hormiga").animate( {
		'top':350,
	},1200, 'linear' );
	var t11dwn = setTimeout("p11hormigaUp();", 2500);
}

var p12rotarCuchara1 = function (){
	$("#p12cuchara").rotate({
    	angle:0, 
		animateTo:-20, 
		callback: p12rotarCuchara2
	});
}
var p12rotarCuchara2 = function (){
	$("#p12cuchara").rotate({
    	angle:-20, 
		animateTo:0, 
		callback: p12rotarCuchara1
	});
}

function p13ojoOpen() {
	$("#p13ojo").fadeIn(100);
	var t13open = setTimeout("p13ojoClose()",3000, 'swing');
}
function p13ojoClose() {
	$("#p13ojo").fadeOut(500);
	var t13close = setTimeout("p13ojoOpen()",2000, 'swing');
}

function p14capa1a() {
	$("#p14capa1").fadeIn(250);
	var t14capa1 = setTimeout("p14capa1b()",0, 'swing');
}
function p14capa1b() {
	$("#p14capa1").fadeOut(280);
	var t14capa2 = setTimeout("p14capa1a()",0, 'swing');
}
function p14capa2a() {
	$("#p14capa2").fadeIn(525);
	var t14capa2 = setTimeout("p14capa2b()",0, 'swing');
}
function p14capa2b() {
	$("#p14capa2").fadeOut(510);
	var t14capa1 = setTimeout("p14capa2a()",0, 'swing');
}

function p14lapizlocoUp() {
	$("#p14lapizloco").animate( {
		'top':18,
	},400, 'swing' );
	var t14up = setTimeout("p14lapizlocoDown();", 500);
}
function p14lapizlocoDown() {
	$("#p14lapizloco").animate( {
		'top':28,
	},600, 'linear' );
	var t14dwn = setTimeout("p14lapizlocoUp();", 700);
}

function p15lapizUp() {
	$("#p15lapiz").animate( {
		'top':308,
	},400, 'swing' );
	var t15up = setTimeout("p15lapizDown();", 500);
}
function p15lapizDown() {
	$("#p15lapiz").animate( {
		'top':300,
	},600, 'linear' );
	var t15dwn = setTimeout("p15lapizUp();", 700);
}

function p17nube() {
	$("#p17nube").fadeIn(2000);
	//var t17nube2 = setTimeout("$('#p17nube').fadeOut(); p17nubeBack();", 2100);
	$("#p17nube").animate( {
		'left':18250,
	},9000, 'swing' );
	var t17nube = setTimeout("$('#p17nube').fadeOut(); p17nubeBack();", 9100);
}
function p17nubeBack() {
	$('#p17nube').fadeOut();
	var t17nubebk = setTimeout("$('#p17nube').css({ 'left':17420, }); p17nube();", 9300);
}

function p17nube2() {
	$("#p17nube2").fadeIn(2000);
	$("#p17nube2").animate( {
		'left':18250,
	},11000, 'swing' );
	var t17nube2 = setTimeout("$('#p17nube2').fadeOut(); p17nube2Back();", 11100);
}
function p17nube2Back() {
	$('#p17nube2').fadeOut();
	var t17nube2bk = setTimeout("$('#p17nube2').css({ 'left':17420, }); p17nube2();", 11300);
}

function p18olaFront() {
	$("#p18olaFront").animate( {
		'left':18461,
	},1000, 'swing' );
	var t18ola1 = setTimeout("p18olaFrontBack();", 1100);
}
function p18olaFrontBack() {
	$("#p18olaFront").animate( {
		'left':18431,
	},1000, 'swing' );
	var t18ola2 = setTimeout("p18olaFront();", 1100);
}

function p18tibu() {
	$("#p18tiburon").animate( {
		'bottom':-50,
	},700, 'swing' );
	var t18ola1 = setTimeout("p18tibuBack();", 800);
}
function p18tibuBack() {
	$("#p18tiburon").animate( {
		'bottom':-70,
	},700, 'swing' );
	var t18ola2 = setTimeout("p18tibu();", 800);
}

function p19barco() {
	$("#p19barco").animate( {
		'bottom':-5,
	},700, 'swing' );
	var t19barco1 = setTimeout("p19barcoBack();", 500);
}
function p19barcoBack() {
	$("#p19barco").animate( {
		'bottom':-15,
	},700, 'swing' );
	var t19barco2 = setTimeout("p19barco();",700);
}

function p19olaFront() {
	$("#p19olaFront").animate( {
		'left':19465,
	},1000, 'swing' );
	var t19ola1 = setTimeout("p19olaFrontBack();", 1100);
}
function p19olaFrontBack() {
	$("#p19olaFront").animate( {
		'left':19415,
	},1000, 'swing' );
	var t19ola2 = setTimeout("p19olaFront();", 1100);
}

function p20humo1() {
	var t20humo1 = setTimeout("$('#p20humo1').fadeIn(900), p20humo1Back();");
}
function p20humo1Back() {
	var t20humo2 = setTimeout("$('#p20humo1').fadeOut(1000), p20humo1();");
}

function p20humo2() {
	var t20humo3 = setTimeout("$('#p20humo2').fadeIn(600), p20humo2Back();");
}
function p20humo2Back() {
	var t20humo4 = setTimeout("$('#p20humo2').fadeOut(700), p20humo2();");
}

function p21Close() {
	$("#p21Cerrados").css( {
		'display':'block',
	});
	$("#p21Abiertos").css( {
		'display':'none',
	});
	var t21a = setTimeout("p21Open();", 200);
}
function p21Open() {
	$("#p21Abiertos").css( {
		'display':'block',
	});
	$("#p21Cerrados").css( {
		'display':'none',
	});
	var t21b = setTimeout("p21Close2();", 200);
}
function p21Close2() {
	$("#p21Cerrados").css( {
		'display':'block',
	});
	$("#p21Abiertos").css( {
		'display':'none',
	});
	var t21c = setTimeout("p21Open2();", 200);
}
function p21Open2() {
	$("#p21Abiertos").css( {
		'display':'block',
	});
	$("#p21Cerrados").css( {
		'display':'none',
	});
	var t21d = setTimeout("p21Close();", 2000);
}

function p22flor() {
	$("#p22flor").animate( {
		'top':620,
	},1100 );
	var t22flor = setTimeout("p22florBack()",2000, 'swing');
}
function p22florBack() {
	$("#p22flor").animate( {
		'top':608,
	},1100 );
	var t22flor = setTimeout("p22flor()",3000, 'swing');
}

function p22flores() {
	$("#p22floresGrupo").animate( {
		'top':420,
	},700 );
	var t22flores = setTimeout("p22floresBack()",1000, 'swing');
}
function p22floresBack() {
	$("#p22floresGrupo").animate( {
		'top':430,
	},900 );
	var t22flores = setTimeout("p22flores()",2000, 'swing');
}

/* audio */
var audioElement = document.createElement('audio');
//$.get();
/*audioElement.addEventListener("load", function() {
	audioElement.play();
}, true);

$('.playbtn').click(function() {
	audioElement.play();
});
$('.pausebtn').click(function() {
	audioElement.pause();
});*/

function playAudio1() {
	/* ogg no funciona para iOS */
	audioElement.setAttribute('src', 'audio/CUENTO_PUEBLO_CHICO.mp3');
	
	audioElement.setAttribute('autoplay', 'autoplay');
	$.get();
	audioElement.addEventListener("load", function() {
		audioElement.play();
	}, true);
	audioElement.play();
	
	$("#playbtn1").fadeOut(100);
	$("#pausebtn1").fadeIn(500);
}
function pauseAudio1() {
	audioElement.pause();
	$("#playbtn1").fadeIn(100);
	$("#pausebtn1").fadeOut(500);
}

function playAudio2() {
	/* ogg no funciona para iOS */
	audioElement.setAttribute('src', 'audio/CUENTO_CAMINO_A_LA_ESCUELA.mp3');
	
	audioElement.setAttribute('autoplay', 'autoplay');
	$.get();
	audioElement.addEventListener("load", function() {
		audioElement.play();
	}, true);
	audioElement.play();
	
	$("#playbtn2").fadeOut(100);
	$("#pausebtn2").fadeIn(500);
}
function pauseAudio2() {
	audioElement.pause();
	$("#playbtn2").fadeIn(100);
	$("#pausebtn2").fadeOut(500);
}

function playAudio3() {
	/* ogg no funciona para iOS */
	audioElement.setAttribute('src', 'audio/CUENTO_LA_LUZ_DE_MI_CORAZON.mp3');
	
	audioElement.setAttribute('autoplay', 'autoplay');
	$.get();
	audioElement.addEventListener("load", function() {
		audioElement.play();
	}, true);
	audioElement.play();
	
	$("#playbtn3").fadeOut(100);
	$("#pausebtn3").fadeIn(500);
}
function pauseAudio3() {
	audioElement.pause();
	$("#playbtn3").fadeIn(100);
	$("#pausebtn3").fadeOut(500);
}

function playAudio4() {
	/* ogg no funciona para iOS */
	audioElement.setAttribute('src', 'audio/CUENTO_SUPERTAJADOR.mp3');
	
	audioElement.setAttribute('autoplay', 'autoplay');
	$.get();
	audioElement.addEventListener("load", function() {
		audioElement.play();
	}, true);
	audioElement.play();
	
	$("#playbtn4").fadeOut(100);
	$("#pausebtn4").fadeIn(500);
}
function pauseAudio4() {
	audioElement.pause();
	$("#playbtn4").fadeIn(100);
	$("#pausebtn4").fadeOut(500);
}

function playAudio5() {
	/* ogg no funciona para iOS */
	audioElement.setAttribute('src', 'audio/CUENTO_VIAJE_A_BORDO_DEL_ILUSION.mp3');
	
	audioElement.setAttribute('autoplay', 'autoplay');
	$.get();
	audioElement.addEventListener("load", function() {
		audioElement.play();
	}, true);
	audioElement.play();
	
	$("#playbtn5").fadeOut(100);
	$("#pausebtn5").fadeIn(500);
}
function pauseAudio5() {
	audioElement.pause();
	$("#playbtn5").fadeIn(100);
	$("#pausebtn5").fadeOut(500);
}

function playAudio6() {
	/* ogg no funciona para iOS */
	audioElement.setAttribute('src', 'audio/CUENTO_EL_JARDIN_DE_DON_BETO.mp3');
	
	audioElement.setAttribute('autoplay', 'autoplay');
	$.get();
	audioElement.addEventListener("load", function() {
		audioElement.play();
	}, true);
	audioElement.play();
	
	$("#playbtn6").fadeOut(100);
	$("#pausebtn6").fadeIn(500);
}
function pauseAudio6() {
	audioElement.pause();
	$("#playbtn6").fadeIn(100);
	$("#pausebtn6").fadeOut(500);
}
/* fin audio */

/* touch scroll - slider */
var myScroll;
function loaded() {
	myScroll = new iScroll('wrapper', {
		snap: true,
		momentum: false,
		hScrollbar: false,
		onScrollEnd: function () {
			document.querySelector('#indicator > li.active').className = '';
			document.querySelector('#indicator > li:nth-child(' + (this.currPageX+1) + ')').className = 'active';
		}
	 });
}
document.addEventListener('DOMContentLoaded', loaded, false);
/* fin touch scroll - slider */


detectOrientation();
window.onorientationchange = detectOrientation;
function detectOrientation(){
	if(typeof window.onorientationchange != 'undefined'){
		if ( orientation == 0 ) {
			 //Do Something In Portrait Mode
			 //alert('0');
		}
		else if ( orientation == 90 ) {
			 //Do Something In Landscape Mode
			 //alert('90');
		}
		else if ( orientation == -90 ) {
			 //Do Something In Landscape Mode
			 //alert('-90');
		}
		else if ( orientation == 180 ) {
			 //Do Something In Landscape Mode
			 //alert('180');
		}
	}
}/* fin detectOrientation */



//if (alert('Page: ' + page);) {}


$(document).ready(function() {
	
	familiaEntra();
	ave2Mov();
	nube2Mov();
	nube5Mov();
	//ave1Mov();
	flor2Mov();
	
	/*
	p05flor1down();
	p05flor2down();
	p05flor3down();
	p05flor4down();
	p05flor5down();
	
	p06nubeL();*/
	p06tear();
	
	/*
	//p07nubeMov();
	p07zacate1();
	p07zacate2();*/
	
	p09pajaroMov();
	
	/*p10hormigaMov();
	
	p11hormigaUp();
	
	p12rotarCuchara1();*/
	
	p13ojoOpen();
	
	p14capa1a();
	p14capa2b();
	
	/*p14lapizlocoUp();
	
	p15lapizUp();*/
	
	p17nube();
	p17nube2();
	
	p18olaFront();
	p18tibu();
	
	p19barco();
	p19olaFront();
	
	/*p20humo1();
	p20humo2();*/
	
	//p21Close();
	
	/*p22flor();
	p22flores();*/
	
	//pantallacompleta();
	//openFullWin();
	//window.open("this","","fullscreen=yes,scrollbars=1,resizable=1");
	
	//var tnube2go = setTimeout(nube2Mov(),1000);
	//var tnube5go = setTimeout(nube5Mov(),1000);
});/* fin ready */



/*function pantallacompleta () {
	var opciones=("toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, fullscreen=yes");
	window.open(pagina,"",opciones);
}*/
/*function openFullWin_cn(){
	//window.open("cn/flash/pop.htm#end","","fullscreen=yes,scrollbars=1,resizable=1")
	window.open("index.html","","fullscreen=yes,scrollbars=1,resizable=1");
}
function openFullWin(){
	//window.open("en/flash/pop.htm#end","","fullscreen=yes,scrollbars=1,resizable=1")
	window.open("index.html","","fullscreen=yes,scrollbars=1,resizable=1")
}*/
//openFullWin();