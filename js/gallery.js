contentsHeight=$(window).height();
var galleryCtl={};
window.onunload = function () {};

$(document).ready(function(){
	galleryCtl.init();
});

galleryCtl.init=function(){
	var detailShowFlg=false;
	var bgWide=536;
	var detailTop=0;
	var detailLeft=0;
	$("#detailbg img").css("width","1px").css("height","1px");
	$("#detailbg").css("margin-left",bgWide/2+"px").css("margin-top",bgWide/2+"px");
	
	function thumbSet(){
		$("#photoList li").each(function(){
			var imgPath=$(this).find("a").attr("data-img");
			$(this).click(function(){
				detailShow(imgPath,$(this).offset().top,$(this).offset().left);
				return false;
			});
			$(this).find("img").fadeOut(0).attr("src",imgPath)
				.load(function(){
					
					$(this).fadeIn(400);
				}
			);
		});	
	}
	
	
	
	
	
	$("#detailClose").click(function(){
		detailClose();
		return false;
	});
	
	function detailShow(str,itemTop,itemLeft){
		var delaytime=1;
		if(!detailShowFlg){
			detailTop=Math.floor(contentsHeight-bgWide)/2-180;
			detailLeft=85;
			var showTweenTime=350;
			$("#photoDetail").fadeIn(0);
			$("#photoDetail")
				.css("top",itemTop-190-5-bgWide*0.5+"px").css("left",itemLeft-$("#photoList").offset().left-5-bgWide*0.5+"px")
				.animate({left:detailLeft,top:detailTop},showTweenTime,"easeInOutCubic");
			delaytime=280;
			$("#detailbg").animate({marginLeft:0,marginTop:0},showTweenTime,"easeInOutCubic");
			$("#detailbg img").stop().css("width","130px").css("height","190px").animate({width:536,height:536},showTweenTime,"easeInOutCubic");
			$("#detailClose").css("display","block");
			$("#detailClose a").css("margin-top","-18px").delay(600).animate({marginTop:12},600,"easeOutQuint");
		}
		detailShowFlg=true;
		$("#detailImg").html("");
		$("#detailImg").append("<img>");
		
		setTimeout(function(){
			$("#detailImg img").attr("src",str)
				.load(function(){
					imgSet();
				}
			);
		},delaytime);
	}
	function imgSet(){
		var detailImg=$("#detailImg img");
		if(detailImg.width()>bgWide-16){
			detailImg.css("width",bgWide-16+"px");
		}
		var targetTop=Math.floor((bgWide-detailImg.height())/2);
		var targetLeft=Math.floor((bgWide-detailImg.width())/2);
		$("#detailImg").css("top",targetTop+"px").css("left",targetLeft+"px");
		detailImg.fadeIn(900);
	}
	
	
	function detailClose(){
		detailShowFlg=false;
		$("#detailImg").html("");
		$("#detailClose").css("display","none");
		$("#detailbg").animate({marginLeft:bgWide/2,marginTop:bgWide/2},300,"easeOutQuint");
		$("#detailbg img").animate({width:0,height:0},300,"easeOutQuint");
		$("#photoDetail").delay(100).fadeOut(100);
	}
	
	thumbSet();
	
}