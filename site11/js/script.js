$(document).on('ready', function() {

	var open = $("#menu"),
		fixed = $(".fixed-hide");
		menuBool = false;
	fixed.hide();

	open.on('click', () => {
		if (menuBool == false) {
			fixed.show();
			menuBool = true;
		} 
		else if (menuBool == true) {
			fixed.hide();
			menuBool = false;
		}
	});
});