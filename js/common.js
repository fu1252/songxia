var contentsHeight;

var commonCtl={};
window.onunload = function () {};

$(document).ready(function(){
	commonCtl.init();
});

commonCtl.init=function(){
	function resize(){
		contentsHeight=$(window).height();
		if(contentsHeight<$("#side").height()+258){
			contentsHeight=$("#side").height()+258;
			$(".sub footer").attr("style","");
		}else{
			$(".sub footer").css("position","fixed").css("bottom","8px").css("width","100%");
		}
		$(".sub #main").css("height",(contentsHeight-258)+"px");
		$(".pageload #main iframe").css("height",(contentsHeight-258)+"px");
	}
	$(window).bind("resize", resize);
	resize();
}


function IEChk(){
	var ver=0;
	var userAgent = window.navigator.userAgent.toLowerCase();
	var appVersion = window.navigator.appVersion.toLowerCase();	
	if (userAgent.indexOf("msie") != -1) {
		if (appVersion.indexOf("msie 6.") != -1) {
			ver=6;
		}else if (appVersion.indexOf("msie 7.") != -1) {
			ver=7;
		}else if (appVersion.indexOf("msie 8.") != -1) {
			ver=8;
		}else{
			ver=9; //othercase is regarded as IE9
		}
		
	}else{
		ver =9999;
	}
	return ver;
}