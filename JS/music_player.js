const musicImage = document.getElementById("cover");
const musicName = document.getElementById("name");
const musicArtist = document.getElementById("artist");

const musicSlider = document.getElementById("music-slider");

const playPauseButton = document.getElementById("playpause-music");
const prevMusicButton = document.getElementById("prev-music");
const nextMusicButton = document.getElementById("next-music");

const musicShuffle = document.getElementById("shuffle-music");
const musicRepeat = document.getElementById("repeat-music");

const music = [
    {
        image: "images/music_cover/nanairo_symphony.jpg",
        name: "Nanairo Symphony",
        artist: "Coalamode",
        audio: "music/COALAMODE. - Nanairo Symphony.mp3"
    },
    {
        image: "images/music_cover/odoriko_cover.jpg",
        name: "踊り子 (cover by DAZBEE)",
        artist: "Vaundy",
        audio: "music/踊り子OdorikoVaundyDAZBEE (cover).mp3"
    },
    {
        image: "images/music_cover/mang_chủng.jpg",
        name: "芒种",
        artist: "音阙诗听, 赵方婧",
        audio: "music/芒种音阙诗听-赵方婧 官方高画质.mp3"
    },
    {
        image: "images/music_cover/zezé.jpg",
        name: "Zezé [제제]",
        artist: "IU",
        audio: "music/[아이유] IU _ Zezé [제제] [Acoustic Version].mp3"
    },

];

const audio = document.createElement("audio");
let currentMusicIndex = 0;
let shuffleOn = false;
updateMusic();


const next = 1;
const prev = -1;

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */

// shuffle helper function
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
        
}

prevMusicButton.addEventListener("click", function() {
    if (shuffleOn){
        currentMusicIndex = shuffle(a);
    }
    currentMusicIndex--;
    updateMusic();
});

nextMusicButton.addEventListener("click", function(){
    if (shuffleOn){
    currentMusicIndex = shuffle(a);
    }
    currentMusicIndex++;
    updateMusic();
});

playPauseButton.addEventListener("click", function() {
    if (!audio.paused) {
        audio.pause();
        playPauseButton.classList.remove("fa-circle-pause");
        playPauseButton.classList.add("fa-circle-play");
        
    }
    else{
        audio.play();
        playPauseButton.classList.remove("fa-circle-play");
        playPauseButton.classList.add("fa-circle-pause");
    }
   
});

audio.addEventListener("ended", function() {
    if(shuffleOn) {
        currentMusicIndex = shuffle(a);   
    }else {
        currentMusicIndex = (currentMusicIndex + 1) % music.length;
    }
    nextMusicButton.click();
});

musicRepeat.addEventListener("click", function() {
    audio.loop = !audio.loop;
    musicRepeat.classList.toggle("active");

    // turn off musicShuffle
    shuffleOn = false;
    musicShuffle.classList.remove("active");

});

musicShuffle.addEventListener("click", function() {
    shuffleOn = !shuffleOn;
    musicShuffle.classList.toggle("active");

    // turn off musicRepeat
    audio.loop = false;
    musicRepeat.classList.remove("active");


})

window.addEventListener("load", function() {
    audio.pause();
    audio.currentTime = 0;
})

function updateMusic() {
    const music_ = music[currentMusicIndex];
    musicImage.src = music_.image;
    musicName.innerText = music_.name;
    musicArtist.innerText = music_.artist;

    audio.src = music_.audio;
    audio.play();

    audio.onloadeddata = function(){
        musicSlider.value = 0;
        musicSlider.max = audio.duration;
    }
}

musicSlider.addEventListener("change", function() {
    audio.currentTime = musicSlider.value;
});

  function moveSlider() {
    musicSlider.value = audio.currentTime;
};

  setInterval(moveSlider, 1000);



