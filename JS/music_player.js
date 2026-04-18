const musicImage = document.getElementById("cover");
const musicName = document.getElementById("name");
const musicArtist = document.getElementById("artist");

const musicSlider = document.getElementById("music-slider");

const playPauseButton = document.getElementById("playpause-music");
const prevMusicButton = document.getElementById("prev-music");
const nextMusicButton = document.getElementById("next-music");

const music = [
    {
        image: "images/music_cover/nanairo_symphony.jpg",
        name: "Nanairo Symphony",
        artist: "Coalamode",
        audio: "/music/COALAMODE. - Nanairo Symphony.mp3"
    },
    {
        image: "images/music_cover/odoriko_cover.jpg",
        name: "踊り子 (cover by DAZBEE)",
        artist: "Vaundy",
        audio: "music/踊り子OdorikoVaundyDAZBEE (cover).mp3"
    },
    {
        image: "images/music_cover/mang_chủng.jpg",
        name: "<<芒种>>音阙诗听-赵方婧 官方高画质.mp3",
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
updateMusic();

prevMusicButton.addEventListener("click", function() {
    if(currentMusicIndex == 0){ 
        return;
    }
    currentMusicIndex--;
    updateMusic();
});

nextMusicButton.addEventListener("click", function(){
    if(currentMusicIndex == music.length - 1) {
        return;
    }
    currentMusicIndex++;
    updateMusic();
});

playPauseButton.addEventListener("click", function() {
    if (!audio.paused) {
        audio.pause();
    }
    else{
        audio.play();
    }
   
});

function updateMusic() {
    const music_ = music[currentMusicIndex];
    musicImage.src = music_.image;
    musicName.innerText = music_.name;
    musicArtist.innerText = music_.artist;

    audio.src = music_.audio;
    audio.play();
  };

