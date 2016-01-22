function center_popup_open(id) {
    window.scrollTo(0, 0);
    document.getElementById(id).style.display = 'block';
    document.getElementById('fade').style.display = 'block';
}

function center_popup_close() {
	var all_center_popups = document.getElementsByClassName('center-popup');

	for (var i = all_center_popups.length - 1; i >= 0; i--) {
		all_center_popups[i].style.display = "none";
	};

    document.getElementById('fade').style.display = 'none';
}

function center_popup_onload() {
	if(window.location.hash === '#materials-donation'){
		center_popup_open('materials-donation');
	}
}