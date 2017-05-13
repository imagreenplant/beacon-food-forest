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

function center_popup_onload(popup_id) {
	// List of valid hash/anchors that will pop a popup
	var valid_popup_list = [
		'materials-donation',
		'donate',
		'mailList',
		'directions',
		'calendar',
		'translate',
		'promo-video',
		'work-party-video',
		];

    if(valid_popup_list.includes(popup_id)){
    	center_popup_open(popup_id);
    }
}
// Allows a link to the page to use a hashtag to load windows such as the donation window
// e.g. http://beaconfoodforest.org#donate
document.addEventListener("DOMContentLoaded", center_popup_onload(window.location.hash.substring(1)));


// For small header logo upon scrollTo$(window).scroll(function() {

$('body').scroll(function(){
  if($('body').scrollTop() > 290){
    $('.scroll-logo').css({'display': 'block'});
  }
  if($('body').scrollTop() <= 290){
    $('.scroll-logo').css({'display': 'none'});
  }
});

