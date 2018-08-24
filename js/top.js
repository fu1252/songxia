var topCtl={};
window.onunload = function () {};

$(document).ready(function(){
	topCtl.init();
});

topCtl.init=function(){
	var interval=5000;
	var selectedNo=0;
	var timer;
	var imgArray=new Array();
	var imgNum;
	$("#mainvisual li").each(function(){
		imgArray[imgArray.length]=$(this);
	});
	imgNum=imgArray.length;
	
	function imgSelect(num){
		selectedNo=num;
		for(var i=0;i<imgNum;i++){
			if(i==num-1){
				imgArray[i].fadeIn(1200);
			}else{
				if(imgArray[i].css("display")!="none"){
					imgArray[i].fadeOut(1200);
				}
			}
		}
	}
	function loop(){
		var targetNo=selectedNo+1;
		if(targetNo>imgNum){
			targetNo=1;
		}
		imgSelect(targetNo);
	}
	
	if(imgNum>1){
		timer=setInterval(loop,interval);
	}
	imgSelect(1);
	
	
	/*$.ajax({
        type: "GET",
        url: "musicxml.php",
        dataType: "xml",
        success: musicinfoSet,
		error: function(){
    	   // alert("xml load error");
	    }
    });*/
	
	function musicinfoSet(xml){
		$("#top-musicinformation dd").html("<ul></ul>");
		var num=$(xml).find("kiji").length;
		if(num>3){
			num=3;
		}
		
		for(var i=0;i<num;i++){
			var targetXML=$(xml).find("kiji").eq(i);
			var addTag='<li><a href="'+targetXML.find("link_url").text()+'">'+targetXML.find("date").text()+'<br />'+targetXML.find("title").text()+'</a></li>';
			$("#top-musicinformation dd ul").append(addTag);
		}
		
	}
	
}