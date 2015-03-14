function url(name) {
	if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search)) {
		return decodeURIComponent(name[1]);
	}
}
var temp = "";
window.changeIntro = url("changeIntro");
window.changeIntro2 = url("changeIntro2");
window.rawTime = url("time");
window.category = url("category");
window.time = "";
if (rawTime == "oneHr"){
	time = "one hour or less";
}
else if (rawTime == "fewHrs"){
	time = "a few hours";
}
else if (rawTime == "oneDay"){
	time = "around a day";
}
else if (rawTime == "oneWk"){
	time = "around a week";
}

function introChanger(){
	if (changeIntro == "true"){
		$(".introMessage").html("You have " + time +". <br>What category of activity would you like?");
	}
	if (changeIntro2 == "true"){
		var temp = "";
		//the following changes the output for category types that won't work gramatically when plugged into "List of [category] activities that take [time]."
		if (category == "academics"){
			temp = "academic";
		}
		else if (category == "diy"){
			temp = "DIY";
		}
		else if (category == "physicalActivity"){
			temp = "physical";
		}
		else if (category == "technology"){
			temp = "technology related";
		}
		else if (category == "misc"){
			temp = "uncategorized";
		}
		else{
			temp = category;	
		}
		$(".introMessage").html("List of " + temp +" activities that take " + time + ":");
	}
	//using '== "true"' instead of '=== "true"' because I can't set query string parameter values to true boolean
}

function titleChanger(){
	var temp = "";
	var temp2 = false;
	if (rawTime != undefined){
		temp = rawTime;
		temp2 = true;
	}
	if (category != undefined){
		temp = temp + " " + category;
	}
	if (temp2 === true){
		$("title").html("lazed [" + temp + "]");
	}
}

function editTimeLinks(){
	//var temp = "";
	//temp = $("#academics").attr("onclick");
	$("#academics").attr("onclick", "window.location = 'list.html?changeIntro2=true&category=academics&time=" + rawTime + "'");
	//temp = $("#cooking").attr("onclick");
	$("#cooking").attr("onclick", "window.location = 'list.html?changeIntro2=true&category=cooking&time=" + rawTime + "'");
	//temp = $("#diy").attr("onclick");
	$("#diy").attr("onclick", "window.location = 'list.html?changeIntro2=true&category=diy&time=" + rawTime + "'");
	//temp = $("#physicalActivity").attr("onclick");
	$("#physicalActivity").attr("onclick", "window.location = 'list.html?changeIntro2=true&category=physicalActivity&time=" + rawTime + "'");
	//temp = $("#technology").attr("onclick");
	$("#technology").attr("onclick", "window.location = 'list.html?changeIntro2=true&category=technology&time=" + rawTime + "'");
	//temp = $("#misc").attr("onclick");
	$("#misc").attr("onclick", "window.location = 'list.html?changeIntro2=true&category=misc&time=" + rawTime + "'");
}

document.addEventListener('DOMContentLoaded', function () {
    introChanger();
	titleChanger();
	editTimeLinks();
});