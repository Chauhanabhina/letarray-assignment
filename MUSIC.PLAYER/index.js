let musics=
[
    {
        id:1,
        name:"kaththi-the sword",
        artist:"vishal dadlani",
        audioSrc:"audios/Kaththi - The Sword Of Destiny  Mass Bgm Ringtone-16.mp3",
        imageSrc:"images/kaththi music.jpg"
    },
    {
        id:2,
        name:"la la la",
        artist:"neha kakkar",
        audioSrc:"audios/La La La.mp3",
        imageSrc:"images/la la la image.jpg"
    },
    {
        id:3,
        name:"lamberghini",
        artist:"jassi gill meet bros",
        audioSrc:"audios/Lamborghini Chalai Janiyo.mp3",
        imageSrc:"images/lamberghini.jpg"
    },
    {
        id:4,
        name:"magic mullet",
        artist:"guru randhawa",
        audioSrc:"audios/Magic_Mullet.mp3",
        imageSrc:"images/magic mullet.png"
    },
    {
        id:5,
        name:"sakhiyan",
        artist:"manbindar",
        audioSrc:"audios/Sakhiyan_Maninder_Buttar_50f01534794245e5c8f0b79e152189e1_320.mp3",
        imageSrc:"images/sakhiyan.jpg"
    },
    {
        id:6,
        name:"ssheikh chili",
        artist:"Raftaar",
        audioSrc:"audios/Sheikh%20Chilli%20-%20Raftaar%20(DjPunjab.Com)-1.mp3",
        imageSrc:"images/sheikh chili.jpg"
    },
]


for(let i=0;i<musics.length;i++)
{
   
    let tile=document.createElement("div");
    tile.classList.add("tile");

    let thumbnail=document.createElement("div");
    thumbnail.classList.add("thumbnail");

    let img=document.createElement("img");
    img.src=musics[i].imageSrc;

    thumbnail.append(img);
    tile.append(thumbnail);

    let description=document.createElement("div");
    description.classList.add("description");

    let h2=document.createElement("h2");
    h2.append(musics[i].name);
    description.append(h2);

    let h3=document.createElement("h3");
    h3.append(musics[i].artist);
    description.append(h3);

    tile.append(description);

    tile.addEventListener("click",function(){
        playMusic(musics[i])
    });

    document.querySelector(".music-list").append(tile);

}

function playMusic(music)
{
     document.querySelector(".player").style.marginLeft="0";
     document.querySelector(".main-thumbnail-img").src=music.imageSrc;
     document.querySelector(".song-name").innerText=music.name;
     document.querySelector(".song-artist").innerText=music.artist;
     document.querySelector(".audio").src=music.audioSrc;
     document.querySelector(".audio").play();
}

function closePlayer()
{
    document.querySelector(".player").style.marginLeft="100%";
    document.querySelector(".audio").pause();
}
