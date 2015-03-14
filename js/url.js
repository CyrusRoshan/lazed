function url(name) {
	if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(location.search)) {
		return decodeURIComponent(name[1]);
	}
}
var temp = "";
window.changeIntro = url("changeIntro");
window.rawTime = url("time");
window.category = url("category");
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
	$("#academics").attr("onclick", "window.location = 'list.html?category=academics&time=" + rawTime + "'");
	//temp = $("#cooking").attr("onclick");
	$("#cooking").attr("onclick", "window.location = 'list.html?category=cooking&time=" + rawTime + "'");
	//temp = $("#diy").attr("onclick");
	$("#diy").attr("onclick", "window.location = 'list.html?category=diy&time=" + rawTime + "'");
	//temp = $("#physicalActivity").attr("onclick");
	$("#physicalActivity").attr("onclick", "window.location = 'list.html?category=physicalActivity&time=" + rawTime + "'");
	//temp = $("#technology").attr("onclick");
	$("#technology").attr("onclick", "window.location = 'list.html?category=technology&time=" + rawTime + "'");
	//temp = $("#misc").attr("onclick");
	$("#misc").attr("onclick", "window.location = 'list.html?category=misc&time=" + rawTime + "'");
}

document.addEventListener('DOMContentLoaded', function () {
    introChanger();
	titleChanger();
	editTimeLinks();
});