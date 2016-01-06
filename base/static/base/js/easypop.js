function center_popup_open (id) {
    window.scrollTo(0, 0);
    document.getElementById(id).style.display = 'block';
    document.getElementById('fade').style.display = 'block';
}

function center_popup_close (id) {
    document.getElementById(id).style.display = 'none';
    document.getElementById('fade').style.display = 'none';
}