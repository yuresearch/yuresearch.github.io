
function getLastModifiedDate(){
	var d = new Date(document.lastModified),
		month = '' + (d.getMonth() + 1),
		day = '' + d.getDate(),
		year = d.getFullYear();

	if (month.length < 2) month = '0' + month;
	if (day.length < 2) day = '0' + day;
	var date = [month, day, year].join('-');
	document.write("<i>last update: " + date +"</i>");
}


document.getElementById("myFooter").innerHTML =
	"<footer class='site-footer'>"
	+"<div class='wrapper'>"
	+"<div class='footer-col-wrapper'>"
	+"<div class='footer-col'>"
	+"<ul class='contact-list'>"
	+"<li>"
	+"Cunjiang Yu"
	+"</li>"
	+"<li><a href='http://www.me.uh.edu/'"
	+"target='_blank'>Department of Mechanical Engineering</a></li>"
	+"<li>Cullen College of Engineering</li>"
	+"<li>University of Houston</li>"
	+"<li>Office: N206, Engineering Building 1</li>"
	+"<li>Email: cyu15@uh.edu</li>"
	+"<li>Phone No.:713-743-4487</li>"
	+"</ul>"
	+"</div>"
	+"<div class='footer-col'>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</footer>";
