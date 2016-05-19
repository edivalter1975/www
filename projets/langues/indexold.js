// (function(){
	
	var iframe = document.querySelector("iframe");

	iframe.onload = function(){  
	  
	  
		window.onresize = iframe.style.height;
		this.style.height=this.contentDocument.body.scrollHeight + 200 +'px';
		height = "initial";
		height = iframe.contentDocument.body.scrollHeight;
	}
	
	$('#btn_iframe').click(function () {
        $('.viewport').fadeToggle(true);
    });
			
	
// })(); 


