var i = 4;
var h = 600;

function showAddCourse(){
	var selektiert = document.forms["formtt"].elements["timetables"].selectedIndex;
	var wert = document.forms["formtt"].elements["timetables"].options[selektiert].value;
	var text = document.forms["formtt"].elements["timetables"].options[selektiert].text;
	$('#popup').append('<p class="detailsheadingpopup">Kurs hinzuf&uuml;gen</p>');
	//$('#popup').append('</br>');
	$('#popup').append('<p>zum Stundenplan: '+text);
	$('#popup').append('</p>');
	$('#popup').append('<select><option>Kurs w&auml;hlen</option>');
	$('#popup').append('</select>');
	$('#popup').append('</br>');
	$('#popup').append('</br>');
	$('#popup').append('<p>Kurs nicht dabei? Erstelle einen neuen Kurs:</p>');
	$('#popup').append('<p><a href="createCourse.html">Kurs erstellen</a></p>');
	$('#popup').append('</br>');
	$('#popup').append('<button class="close" onClick="closePopup()">Schlie&szlig;en</button>');
	//$("#popup").css('opacity', '1.0');	
	$("#popup").animate({opacity: 1});
	$("#popup").css('z-index', '3');
	$("#popup").css('pointer-events', 'auto');
}

function closePopup() {
	//$("#popup").css('opacity', '0.0');
	$("#popup").animate({opacity: 0.0});	
	$("#popup").css('pointer-events', 'none');
	$("#popup").css('z-index', '-1');
	$('#popup').empty();
};


function addCourse(){
	$('#courseadding').append('<li><label>Kurszeit '+i+': </label><input type="text" name="course'+i+'" value="HH:MM"><input type="text" name="course'+i+'1" value="HH:MM"></li>');
	var currentheight = h+26;
	console.log(currentheight);
	$('.wrapped').css("min-height", currentheight+"px");
	i = i+1;
	h = h +26;
}