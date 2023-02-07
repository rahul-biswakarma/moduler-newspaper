function flipPageForward(pageNo) {
	document.getElementById(`page-${pageNo}`).style.display = "block";
	document.getElementById(`page-${pageNo - 1}`).style.display = "none";
}

function flipPageBackward(pageNo) {
	document.getElementById(`page-${pageNo}`).style.display = "block";
	document.getElementById(`page-${pageNo + 1}`).style.display = "none";
}
