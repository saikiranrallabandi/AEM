
$(document).ready(function() {
		if ($(".component-2 #textSpinner").length > 0) {
			setComponentText();
		}	
	}); 
	function setComponentText() {
		var $textSpinnerHeader = $(".component-2 #textSpinner .headingImg"); 
		var activElemIndex = $textSpinnerHeader.find(".active").index() + 1;
		if (activElemIndex == 4){
			activElemIndex = 0; 
		}
		$textSpinnerHeader.find("span").removeClass("active"); 
		$(".component-2 #textSpinner #tabContent span").removeClass("active").addClass("hidden"); 
		$textSpinnerHeader.find("span").removeClass("active"); 
		$($textSpinnerHeader.find("span").get(activElemIndex)).addClass("active"); 
		$($(".component-2 #textSpinner #tabContent span").get(activElemIndex)).addClass("active").removeClass("hidden"); 
		setTimeout(function() {
			setComponentText(); 
		},1000)
	}