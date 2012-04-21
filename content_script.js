var PAUSE = false;
var songs=$(".play");
var length=songs.length;
var indexes = new Array(length);
for (var i=0; i<length; i++){
    indexes[i]=i;
}
function do_play(){
    if(indexes.length > 0 && !PAUSE){
        console.log(indexes.length);
        var ran = Math.floor(Math.random()*indexes.length);
        console.log(ran);
        var song_num=indexes[ran];
        var play = songs[song_num];
        console.log(play);
        var song_length = $(play).parent().find(".duration").text();
        console.log(song_length);
        indexes.splice(ran,1);
        var song_min = parseInt(song_length);
        var song_sec = (parseFloat(song_length)-song_min)*100;
        var secs = song_sec + song_min*60;
        console.log(secs);
        setTimeout(do_play, secs*1000);
        $(play).click();
    }
    else if (PAUSE){
	console.log('paused');
    }
    else {
        alert('done');
    }
}

function create_shuffle_icons(){
    var tabs = $("#user-tabs");
    var el = document.createElement('div');
    $(el).html("<a class='shuffle'>**Shuffle**</a><br>");
    $(tabs).append(el);
}

function go_to_next_page_if_possible(){
    var next_page_el = $(".next_page");
    if (next_page_el){
	document.location.href = $(next_page_el).attr('href');
    }
    else{
	console.log('no more songs dog');
    }
}

create_shuffle_icons();
do_play();

$(".shuffle-soundcloud").click(function(){
    PAUSE = false;
    do_play();
});

$(".shuffle").click(function(){
    PAUSE = false;
    do_play();
});