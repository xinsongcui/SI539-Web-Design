
var video = document.getElementById("player1");


window.addEventListener("load", function() {
	console.log("Good job opening the window");
	
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = document.querySelector("#slider").value+"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate = video.playbackRate - 0.05;
	console.log("Slow down " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate = video.playbackRate + 0.05;
	console.log("Speed up " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Pause Video");
	let time = video.currentTime;
	if (time + 15 > video.duration) {
		video.currentTime = 0;
		console.log(video.currentTime);
	}
	else{
		video.currentTime = video.currentTime + 15;
		console.log(video.currentTime);
	}
	if(video.paused){
		video.play();
	}
});

document.querySelector("#mute").addEventListener("click", function() {
    video.muted = !video.muted;
	document.querySelector("#mute").innerHTML = video.muted? "Unmute" : "Mute";
});

document.querySelector("#slider").addEventListener("change", function() {
	document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = this.value/100;
});

document.querySelector("#vintage").addEventListener("click", function() {
    video.className = "oldSchool"
	console.log("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.className = "video"
	console.log("original");
});
