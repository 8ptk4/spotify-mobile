// import vanillaTilt from "https://cdn.skypack.dev/vanilla-tilt@1.7.0";

let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
let track_name_secondary = document.querySelector(".track-name-secondary");
let track_artist_secondary = document.querySelector(".track-artist-secondary");
let playpause_btn = document.querySelector(".playpause-track");
let playpause_btn_secondary = document.querySelector(".playpause-track-secondary");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");
let seek_slider = document.querySelector(".seek_slider");
let seek_slider_secondary = document.querySelector(".seek_slider_secondary"); 
let volume_slider = document.querySelector(".volume_slider"); 
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let content = document.querySelector(".content");
let mediaControllerContent = document.querySelector(".media-controller-content");
let mediaControllerSecondaryContent = document.querySelector(".media-controller-secondary");
let playlistContent = document.querySelector(".playlist-content");
let menuSong = document.querySelector(".menu-item-song");
let songsContent = document.querySelector(".songs-content");
let albumsContent = document.querySelector(".albums-content");
let track_art_secondary = document.querySelector(".track-art-secondary");

let track_index = undefined; 
let isPlaying = false; 
let updateTimer;
let activePlaylist; 
let isPaused = false;
let activePlayListName;
let testtest = [];
let curr_track = document.createElement('audio'); 


// vanillaTilt.init(document.querySelectorAll(".box"), {
//     max: 25,
//     speed: 400,
//     easing:"cubic-bezier(.03,.98,.52,.99)",
//     perspective:500,
//     transition:true
// });

  
let track_list_rock = [
    {
        name: "Fight on Your Side ",
        artist: "Crowander",
        album: "Uplifting Funband",
        image: "https://freemusicarchive.org/image?file=image%2Flw140Azt2pMF6VWELMsplbso7ArEHHEoRMDm00eB.jpeg&width=290&height=290&type=image",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/qHfkfB8SGV6KktFE055uSLNGfWw0SaIvRfc9BZln.mp3"
    },
    {
        name: "Derek Clegg Since Seventeen ",
        artist: "Derek Clegg",
        album: "The Middler",
        image: "https://freemusicarchive.org/image?file=image%2FYeXNqZoD9mcfQaZh2gwb4wYyPq6jQ8O0JsH1o4R4.jpeg&width=290&height=290&type=image",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/VDsCv2LNXUqPYWSFzbwmjKZN0BZFqgcj4SLww1ik.mp3"
    },
    {
        name: "Man Outta Town",
        artist: "Forget the Whale ",
        album: "You. Me. Talk. Now.",
        image: "https://freemusicarchive.org/image?file=image%2FRS3sOiXZshublFyfRcuCjjqjMM4SkMvdhbhyn1cO.jpeg&width=290&height=290&type=image",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/i5erhdediCtKAocVFnxBeazjuLoReEpoyNBtCZDe.mp3",
    },
    {
        name: "L'inertie du mouvement",
        artist: "Yarostan",
        album: "Yarostan",
        image: "https://freemusicarchive.org/image?file=images%2Ftracks%2FTrack_-_2019072645545028&width=290&height=290&type=track",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Ziklibrenbib/Yarostan/st/Yarostan_-_04_-_Linertie_du_mouvement.mp3",
    },
    {
        name: "Quit While You're Behind",
        artist: "Pudge",
        album: "Chippy Peas",
        image: "https://freemusicarchive.org/image?file=images%2Ftracks%2FTrack_-_20181024130746417&width=290&height=290&type=track",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Oddio_Overplay/Pudge/Chippy_Peas/Pudge_-_04_-_Quit_While_Youre_Behind.mp3",
    },
]


let track_list_country = [
    {
        name: "Who is the Strongest (ID 1314)",
        artist: "Lobo Loco",
        album: "Next Wildwestworld",
        image: "https://freemusicarchive.org/image?file=image%2F1obDCc3MLSQ07I3UAQv9tTzSe3729ekMtJdl7mRO.jpeg&width=290&height=290&type=image",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/4K9ZEbWrjOzgHVH9cL6bI4pjoKQFr6SHpkXGmgyi.mp3"
    },
    {
        name: "End of Days",
        artist: "Derek Clegg",
        album: "Random Calls",
        image: "https://freemusicarchive.org/image?file=image%2FrzYUuk0grqHQ4BMfLuso1fVivjVao0ZukO1SV5i4.jpeg&width=290&height=290&type=image",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/hoU134NmH4FpNg5LNmEzO2xTM5r6A51yftOM4nfG.mp3"
    },
    {
        name: "To Lose You",
        artist: "Derek Clegg",
        album: "Overlook The Human Race",
        image: "https://freemusicarchive.org/image?file=images%2Ftracks%2FTrack_-_2018080373347355&width=290&height=290&type=track",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/blocSonic/Derek_Clegg/Overlook_The_Human_Race_5_Year_Anniversary_Re-Release/Derek_Clegg_-_01_-_To_Lose_You.mp3",
    },
]


let track_list_dance = [
    {
        name: "I Hate It Here",
        artist: "selfpity",
        album: "I Hate It Here",
        image: "https://freemusicarchive.org/image?file=image%2FGUEkH7kNqgqOKYhPFagcPuGJxOkDeAWYE0dLgkKt.jpeg&width=290&height=290&type=image",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/maHuLUulfU2vjVAXRFCIF7jPyl0EPLQwSDp8lwL3.mp3"
    },
    {
        name: "Growing Resistance",
        artist: "Shaolin Dub",
        album: "Dual Realities ",
        image: "https://freemusicarchive.org/image?file=image%2FdCngnRd4tUsiid9fdteQRsebVomU5y51LB5pk8ZG.jpeg&width=290&height=290&type=image",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/85AI0PF7rSC1jhoaEU8oA2Zj3vKklwULMB70ZzG1.mp3"
    },
    {
        name: "MGoddess of Flowers",
        artist: "Dee Yan-Key",
        album: "Viennese Waltz",
        image: "https://freemusicarchive.org/image?file=image%2FkYZLmdbQ5Y9lcWtM9RKiafyJGhX5HUbcKaINc1pj.jpeg&width=290&height=290&type=image",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/0pEzCUonvUjf0nj6iCIIHk0X8A11X5KAclfGob91.mp3",
    },
    {
        name: "We Are One",
        artist: "Scott Holmes Music",
        album: "Media Music Mix",
        image: "https://freemusicarchive.org/image?file=image%2FTRnTNToJ7B9Shyda9OqcUw9ODDFx8lJS1D3IHVpm.jpeg&width=290&height=290&type=image",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/8rsJvWYvwFP7tLJ6VsnM1IHXsdsbAt8cLueHoxPB.mp3",
    },
]


let track_list_jazz = [
    {
        name: "Good Vibe",
        artist: "Ketsa",
        album: "Ascendance",
        image: "https://freemusicarchive.org/image?file=image%2FaoKxkNs1ETEF7eTqRIfxWyaSKNo7oSUmUH0hFktk.jpeg&width=290&height=290&type=image",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/7ZStaYrFwp3U7liEc6YGBb23GI3Uh5weBxU4T1VT.mp3"
    },
    {
        name: "Hold on",
        artist: "Dee Yan-Key",
        album: "Go Down Moses",
        image: "https://freemusicarchive.org/image?file=image%2FLhInxlaDIe1TlN6uLrcWc9blkEOMjOOL0CI8Vmn7.jpeg&width=290&height=290&type=image",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/iuoEw7F5vsfUvMT7jZsCvxg6zGz5bCHGjNI93LyF.mp3"
    },
    {
        name: "Deep Into the Nature (TP 55)",
        artist: "Till Paradiso",
        album: "Musikbrause Radio - Part 2",
        image: "https://freemusicarchive.org/image?file=image%2FQXBcxdOom39tCk4TOWFAjQSuSYXMUVaMcyUDYuqb.jpeg&width=290&height=290&type=image",
        path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/ay2bKJlMM0KFKopCoyiaJxC256ZRuKqXaOCSqPb2.mp3",
    },
]


let track_list_albums = [
    {
        album: "The Lost Files",
        image: "https://freemusicarchive.org/image?file=image%2F4Ts4Y1DHQZhk54hIybYnCyUuD7NgvEYCpCywFsog.jpeg&width=290&height=290&type=image",
        songs: [
            {
                artist: "Ketsa",
                name: "Spirit-Ache",
                image: "https://freemusicarchive.org/image?file=image%2F4Ts4Y1DHQZhk54hIybYnCyUuD7NgvEYCpCywFsog.jpeg&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/zug1Pkjgion1nDeSBv3DJQNaEJL9eCohszIV6Hpq.mp3",
            },
            {
                artist: "Ketsa",
                name: "Straight-Up",
                image: "https://freemusicarchive.org/image?file=image%2F4Ts4Y1DHQZhk54hIybYnCyUuD7NgvEYCpCywFsog.jpeg&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/uPYdVO51ukY8Dpr8g27Ct9kegldSbU4uyPjDgUgX.mp3",
            },
            {
                artist: "Ketsa",
                name: "Summer-Melody",
                image: "https://freemusicarchive.org/image?file=image%2F4Ts4Y1DHQZhk54hIybYnCyUuD7NgvEYCpCywFsog.jpeg&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/knV7qcqg9xF5XtZhVJ8A2Geb1GMVVrOHLuhJDTQ2.mp3",
            },
            {
                artist: "Ketsa",
                name: "Twilight",
                image: "https://freemusicarchive.org/image?file=image%2F4Ts4Y1DHQZhk54hIybYnCyUuD7NgvEYCpCywFsog.jpeg&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/yS8rfocSEQUaKvF6B7poIObmuUwG4fva01LIp2Zp.mp3",
            }, 
        ]
    },
    {
        album: "Fake Love",
        image: "https://freemusicarchive.org/image?file=images%2Falbums%2FMakaih_Beats_-_Fake_Love_makaihbeatsnet_-_2018120805645464.jpg&width=290&height=290&type=image",
        songs: [
            {
                artist: "Makaih Beats",
                name: "4 am",
                image: "https://freemusicarchive.org/image?file=images%2Falbums%2FMakaih_Beats_-_Fake_Love_makaihbeatsnet_-_2018120805645464.jpg&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Makaih_Beats/Fake_Love_makaihbeatsnet/Makaih_Beats_-_01_-_4_am_makaihbeatsnet.mp3",
            },
            {
                artist: "Makaih Beats",
                name: "LoveChances",
                image: "https://freemusicarchive.org/image?file=images%2Falbums%2FMakaih_Beats_-_Fake_Love_makaihbeatsnet_-_2018120805645464.jpg&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Makaih_Beats/Fake_Love_makaihbeatsnet/Makaih_Beats_-_02_-_LoveChances_makaihbeatsnet.mp3",
            },
            {
                artist: "Makaih Beats",
                name: "Fly",
                image: "https://freemusicarchive.org/image?file=images%2Falbums%2FMakaih_Beats_-_Fake_Love_makaihbeatsnet_-_2018120805645464.jpg&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Makaih_Beats/Fake_Love_makaihbeatsnet/Makaih_Beats_-_04_-_Fly__makaihbeatsnet.mp3",
            },
            {
                artist: "Makaih Beats",
                name: "Addicted",
                image: "https://freemusicarchive.org/image?file=images%2Falbums%2FMakaih_Beats_-_Fake_Love_makaihbeatsnet_-_2018120805645464.jpg&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Makaih_Beats/Fake_Love_makaihbeatsnet/Makaih_Beats_-_05_-_Addicted_makaihbeatsnet.mp3",
            },
            {
                artist: "Makaih Beats",
                name: "Waves pt. 2",
                image: "https://freemusicarchive.org/image?file=images%2Falbums%2FMakaih_Beats_-_Fake_Love_makaihbeatsnet_-_2018120805645464.jpg&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Makaih_Beats/Fake_Love_makaihbeatsnet/Makaih_Beats_-_09_-_Waves_pt_2__makaihbeatsnet.mp3",
            }, 
        ]
    },
    {
        album: "Night Walk",
        image: "https://freemusicarchive.org/image?file=image%2FduCrgDL5x9quwJWdql6cGA8yUOZDNVJsH60mogo7.jpeg&width=290&height=290&type=image",
        songs: [
            {
                artist: "Crowander",
                name: "Neon Lights",
                image: "https://freemusicarchive.org/image?file=image%2FduCrgDL5x9quwJWdql6cGA8yUOZDNVJsH60mogo7.jpeg&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/4iy3UgUmdP1fHwOqmvnuROhDYb7jnYMk441uXyDg.mp3",
            },
            {
                artist: "Crowander",
                name: "Going Underground",
                image: "https://freemusicarchive.org/image?file=image%2FduCrgDL5x9quwJWdql6cGA8yUOZDNVJsH60mogo7.jpeg&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/XnfsieouQQ6SByHCLMtH6icjTjQwQ71BQHE0TsPX.mp3",
            },
            {
                artist: "Crowander",
                name: "School Yard",
                image: "https://freemusicarchive.org/image?file=image%2FduCrgDL5x9quwJWdql6cGA8yUOZDNVJsH60mogo7.jpeg&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/3WsDebU1uvKKAP8WU1CqIWAZ6GD0O9VA1PQJQnE3.mp3",
            },
            {
                artist: "Crowander",
                name: "Stop on a Bench",
                image: "https://freemusicarchive.org/image?file=image%2FduCrgDL5x9quwJWdql6cGA8yUOZDNVJsH60mogo7.jpeg&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/M2NsuRAiF6SjyQ1pwPvMBhyaynzWznTGTGoLalk5.mp3",
            },
            {
                artist: "Crowander",
                name: "Dancing on the Sidewalk",
                image: "https://freemusicarchive.org/image?file=image%2FduCrgDL5x9quwJWdql6cGA8yUOZDNVJsH60mogo7.jpeg&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/NVOjfiBmCzv9QpSOplNudgDE5uAOhdtmnnKp2NFI.mp3",
            }
        ]
    },
    {
        album: "The Garden of Kadesh EP",
        image: "https://freemusicarchive.org/image?file=images%2Fartists%2FTri-Tachyon_-_20151120143859740.png&width=290&height=290&type=image",
        songs: [
            {
                artist: "Tri-Tachyon",
                name: "Nanophage",
                image: "https://freemusicarchive.org/image?file=images%2Fartists%2FTri-Tachyon_-_20151120143859740.png&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/XF0bdbociZnzngwOoFhoScZ1YIK0cxg4s0emcBMp.mp3",
            },
            {
                artist: "Tri-Tachyon",
                name: "Lazarski's Dream ",
                image: "https://freemusicarchive.org/image?file=images%2Fartists%2FTri-Tachyon_-_20151120143859740.png&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/v8obP8tkfyLJPuOTFChUIFYfidd7cQsB4kom0Xma.mp3",
            },
            {
                artist: "Tri-Tachyon",
                name: "The Hiss",
                image: "https://freemusicarchive.org/image?file=images%2Fartists%2FTri-Tachyon_-_20151120143859740.png&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/cIggLA3R6ujfFzrLFcNBMp4GFQX1VxxLvDzMDvqH.mp3",
            },
            {
                artist: "Tri-Tachyon",
                name: "Garden of Kadesh",
                image: "https://freemusicarchive.org/image?file=images%2Fartists%2FTri-Tachyon_-_20151120143859740.png&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/p7A4TJBoVBH7fhCgwEr3GID7E1KKZw94E9E4uk7X.mp3",
            },
            {
                artist: "Tri-Tachyon",
                name: "Tsatogo (feat. Elena Suslova)",
                image: "https://freemusicarchive.org/image?file=images%2Fartists%2FTri-Tachyon_-_20151120143859740.png&width=290&height=290&type=image",
                path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/tracks/s6DG5p0vrIjWlYXiEhPqMRpHgLch6JryFt6XqzYM.mp3",
            },
        ]
    },
]


let playlists = [
    {
        name: "Rock spellista",
        alias: "rock",
        playlist: track_list_rock,
        author: "Sven Jonsson",
    },
    {
        name: "Country spellista",
        alias: "country",
        playlist: track_list_country,
        author: "Olle Ingvarsson",
    },
    {
        name: "Dance spellista",
        alias: "dance",
        playlist: track_list_dance,
        author: "Johan Karlsson"
    },
    {
        name: "Jazz spellista",
        alias: "jazz",
        playlist: track_list_jazz,
        author: "Ingrid Pettersson"
    }
]


function loadTrack(index) { 
    clearInterval(updateTimer); 
    resetValues(); 
    track_index = index;
    curr_track.src = activePlaylist[track_index].path;
    curr_track.load(); 
    track_art.src = activePlaylist[track_index].image;
    track_art_secondary.src = activePlaylist[track_index].image;
    track_name.textContent = activePlaylist[track_index].name; 
    track_artist.textContent = activePlaylist[track_index].artist;
    track_name_secondary.textContent = activePlaylist[track_index].name; 
    track_artist_secondary.textContent = activePlaylist[track_index].artist;
    updateTimer = setInterval(seekUpdate, 1000); 
    curr_track.addEventListener("ended", nextTrack);

}

let activeRoute;


function menu(menuItem) {
    
    let menuItems = ['playlist', 'albums', 'songs']
    menuItems.map((x) => {
        let menuItemDom = document.getElementById(x);
        menuItemDom.classList.remove("menu-active");
    })



    
    switch (menuItem) {
        case "playlist":
            if (isPlaying || isPaused) {
                mediaControllerSecondaryContent.style.display = '';
            }
            
            document.getElementById(menuItem).classList.add("menu-active");

            activeRoute = "playlist";

            renderPlaylist();
            break;
        case "songs":
            if (isPlaying || isPaused) {
                mediaControllerSecondaryContent.style.display = '';
            }

            document.getElementById(menuItem).classList.add("menu-active");

            activeRoute = "songs";

            renderSongs();
            break;
        case "albums":
            if (isPlaying || isPaused)  {
                mediaControllerSecondaryContent.style.display = '';
            }

            activeRoute = "albums";
            document.getElementById(menuItem).classList.add("menu-active");

            renderAlbums();
            break;   
        case "mediaController":
            if (isPlaying || isPaused)  {
                mediaControllerSecondaryContent.style.display = 'None';
            }

            activeRoute = "mediaController";
            break;   
        default:
            break;
    }
}



function renderPlaylist() {
    playlistContent.style.display = '';

    songsContent.style.display = 'none';
    albumsContent.style.display = 'none';
    mediaControllerContent.style.display = 'none';

    playlistContent.innerHTML = '';

    playlists.map((x) => {
        playlistContent.innerHTML += `
            <div class="playlist-wrapper" onclick="activatePlaylist('${x.alias}')">
                <div class="playlist-icon">
                    <i class="material-icons playlist-icon">queue_music</i>
                </div>
                <div style="display: inline-flex; height: 40px; flex-direction: column; justify-content: center">
                    <span class="playlist-title" style="text-align: left;">${x.name}</span>
                    <span class="playlist-author">Skapad av: ${x.author}</span>
                </div>
                <div class="playlist-tracks-wrapper" style="display: inline-flex; height: 40px; flex-direction: column; justify-content: center">
                    <span class="playlist-amount">${x.playlist.length}</span>
                    <span class="playlist-tracks">låtar</span>
                </div>
            </div>
        `
    })
}



function renderSongs() {
    playlistContent.style.display = 'none';
    albumsContent.style.display = 'none';
    mediaControllerContent.style.display = 'none';

    songsContent.style.display = '';

    let dividePlaylist = activePlayListName.split(' ');

    songsContent.innerHTML = `
        <div class="currently-playing-content">
            <span class="currently-playing">Spelar från ${!activePlayListName.includes("playlist") ? "album: " + activePlayListName : "spellista: " + dividePlaylist[0] }</span>
        </div>
    `;



    activePlaylist.map((x, index) => {
        let playPauseIcon = "play_arrow";
        let activeStyle = "";
        

        if (track_index === index) {
            playPauseIcon = !isPlaying ? 'play_arrow' : 'pause';
            activeStyle = !isPlaying ? '' : 'song-wrapper-active';
        }


        songsContent.innerHTML += `
            <div class="song-wrapper" onclick="testest(${index})">
                <img class="song-wrapper-img" src="${x.image}" width="40" height="40">
                
                <i class="material-icons play-pause-track-secondary ${activeStyle}">${ playPauseIcon }</i>
                <div class="song-wrapper-secondary">
                    <span class="song-wrapper-artist">${x.artist}</span>
                    <span class="song-wrapper-name">${x.name}</span> 
                </div>            
            </div>
        `
    })
}





function testest(index) {
    mediaControllerSecondaryContent.style.display = '';

    if (!isPlaying) {
        loadTrack(index);
        playpause_btn_secondary.click();
        renderSongs();
    } else {
        if (track_index === index) {
            pauseTrack();
            // playpause_btn_secondary.click();
            renderSongs();
        } else {
            pauseTrack();
            renderSongs();
            loadTrack(index);
            playpause_btn_secondary.click();
            renderSongs()
        }
    }
}





function renderAlbums() {
    albumsContent.style.display = '';
    
    playlistContent.style.display = 'none';
    songsContent.style.display = 'none';
    mediaControllerContent.style.display = 'none';

    // console.log(track_list_albums)
    albumsContent.innerHTML = "";

    track_list_albums.map((album) => {
        
        albumsContent.innerHTML +=`
            <div class="col" onclick="activateAlbums(${JSON.stringify(album).split('"').join("&quot;")})">
                <img src="${album.image}" width="135" height="135">
                <div class="col-name">
                    ${album.album}
                </div>
            </div>`
    })
}

function activateAlbums(album) {
    menuSong.style.display = '';
    console.log(album);

    activePlayListName = album.album;
    activePlaylist = album.songs;
    document.getElementById("songs").click();

    // switch (playlist) {


    //     case "rock":
    //         activePlayListName = playlists[0].name;
    //         activePlaylist = track_list_rock;
    //         document.getElementById("songs").click();
    //         break;
    //     case "jazz":
    //         activePlayListName = playlists[3].name;
    //         activePlaylist = track_list_jazz;
    //         document.getElementById("songs").click();
    //         break;
    //     case "dance":
    //         activePlayListName = playlists[2].name;
    //         activePlaylist = track_list_dance;
    //         document.getElementById("songs").click();
    //         break;
    //     case "country":
    //         activePlayListName = playlists[1].name;
    //         activePlaylist = track_list_country;
    //         document.getElementById("songs").click();
    //         break;     
    //     default:
    //         break;
            
    // }
}



function resetValues() { 
    curr_time.textContent = "00:00"; 
    total_duration.textContent = "00:00"; 
    seek_slider.value = 0; 
    seek_slider_secondary.value = 0;
}



function playpauseTrack() { 
    if (!isPlaying) playTrack(); 
    else pauseTrack();
}

function playpauseTrackSecondary() { 
    if (!isPlaying) playTrack(); 
    else pauseTrack();

    if (activeRoute === "songs") {
        renderSongs();
    }
} 




function playTrack() { 
    curr_track.play();
    isPaused = false; 
    isPlaying = true; 

    const currSongWrapper = document.getElementsByClassName("song-wrapper");
    currSongWrapper[track_index].getElementsByTagName("i")[0].classList.add("song-wrapper-active")


    // console.log(track_index);
    // track_art_secondary.src
    playpause_btn.classList.add("song-wrapper-active");
    playpause_btn.innerHTML = 'pause';
    playpause_btn_secondary.innerHTML = 'pause';
}



function openMediaController() {
    mediaControllerContent.style.display = '';

    playlistContent.style.display = 'none';
    songsContent.style.display = 'none';
    albumsContent.style.display = 'none';

    menu("mediaController");
}


// let playlists = [
//     {
//         name: "Rock playlist",
//         alias: "rock",
//         playlist: track_list_rock,
//         author: "Sven Jonsson",
//     },
//     {
//         name: "Country playlist",
//         alias: "country",
//         playlist: track_list_country,
//         author: "Olle Ingvarsson",
//     },
//     {
//         name: "Dance playlist",
//         alias: "dance",
//         playlist: track_list_dance,
//         author: "Johan Karlsson"
//     },
//     {
//         name: "Jazz playlist",
//         alias: "jazz",
//         playlist: track_list_jazz,
//         author: "Ingrid Pettersson"
//     }
// ]


function activatePlaylist(playlist) {
    menuSong.style.display = '';

    switch (playlist) {
        case "rock":
            activePlayListName = playlists[0].name;
            activePlaylist = track_list_rock;
            document.getElementById("songs").click();
            break;
        case "jazz":
            activePlayListName = playlists[3].name;
            activePlaylist = track_list_jazz;
            document.getElementById("songs").click();
            break;
        case "dance":
            activePlayListName = playlists[2].name;
            activePlaylist = track_list_dance;
            document.getElementById("songs").click();
            break;
        case "country":
            activePlayListName = playlists[1].name;
            activePlaylist = track_list_country;
            document.getElementById("songs").click();
            break;     
        default:
            break;
    }
}



function setVolume() {
    curr_track.volume = volume_slider.value / 100;
}



function pauseTrack() { 
    curr_track.pause(); 
    isPlaying = false;
    isPaused = true;

    playpause_btn.classList.remove("song-wrapper-active");
    playpause_btn.innerHTML = 'play_arrow';
    playpause_btn_secondary.innerHTML = 'play_arrow';
}



function nextTrack() { 
    if (track_index < activePlaylist.length - 1) 
        track_index += 1; 
    else track_index = 0; 
    
    loadTrack(track_index); 
    playTrack(); 
}


    
function prevTrack() { 
    if (track_index > 0) 
        track_index -= 1; 
    else track_index = activePlaylist.length - 1;

    loadTrack(track_index); 
    playTrack(); 
}



function seekTo() {
    seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}



function seekUpdate() {
    let seekPosition = 0;

    if (!isNaN(curr_track.duration)) {
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        seek_slider_secondary.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}


function detectBrowser() {
    var ua= navigator.userAgent, tem, 
    M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE '+(tem[1] || '');
    }
    if(M[1]=== 'Chrome'){
        tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
        if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
    
    
    return M.join(' ');
}

function changeState() {
    start.state += 1;

    start.init();
}

function changeTitle(newTitle) {
    const title = document.querySelector(".style-title-content-text");

    title.innerHTML = newTitle
}

function changeNextBtn(newBtnName) {
    const nextBtn = document.querySelector(".next-arrow-text");

    nextBtn.innerHTML = newBtnName;
}

let i = 0;
let totalSections;
check = () => {
    if (++i > totalSections) {
        const nextBtn = document.querySelector(".next-page-content");
        nextBtn.style.display = 'flex';
        nextBtn.onclick = function() {
            nextBtn.style.display = 'none';    
            changeState();
        }
    }
};


let start = {
    content: document.querySelector(".content"),
    mediaPlayer: document.querySelector(".player-content"),
    stylesheet: document.getElementById("stylesheet"),
    title: document.querySelector(".style-title-content-text"),
    state: 0,

    init: function() {
        switch (this.state) {
            case 0:
                this.welcome();
                detectBrowser();
                break;
            case 1:
                this.material();
                break;
            case 2:
                this.glassmorphism();
                break;
            case 3:
                this.neumorphism();
                break;
            default:
                break;
        }
    },

    welcome: function() {
        this.mediaPlayer.style.display = 'none';
        this.content.style.display = '';

        const display = () => {
            if (detectBrowser().includes("Chrome")) {
                return true;
            } 
        }

        this.content.innerHTML = `
            <div class="information-content">
                <h1 class="information-content-title">Välkommen</h1>
                <p>Detta är ett skolarbete med tre olika design trender i fokus. Du kommer att bli guidad igenom dessa och efter varje
                svara på en survey. Då all design inte är kompatibel med alla browsers har jag valt att helt utesluta deltagare som 
                inte använder sig utav Google Chrome eller Microsoft Edge. Det är också ett stort plus i kantent om du är familiär med Spotify.</p>
                
                <div style="display: ${!display() ? "" : "none"}; width: 50%; margin: 0 auto; background: #fff; padding: 20px; border: 2px solid red">
                    <a href="https://www.google.com/intl/sv/chrome/" target="_blank">Ladda hem Google Chrome här!</a>
                </div>
                
                <button onclick="changeState()" class="information-content-button" style="margin: 30px;vertical-align:middle; display: ${display() ? "" : "none"}"><span>Starta</span></button>
            </div>
        `

        const nextBtn = document.querySelector(".next-page-content");
        nextBtn.style.display = 'none';
    },

    material: function() {
        this.mediaPlayer.style.display = '';
        this.content.style.display = 'none';
        
        const nextBtn = document.querySelector(".next-page-content");
        nextBtn.style.display = 'none';
        
        i = 0;
        totalSections = 2;
        
        const survey = document.querySelector(".survey");
        survey.innerHTML = `
            <iframe 
                id="iframe"
                src="https://docs.google.com/forms/d/e/1FAIpQLSfpG5mvGaaL-vK-dwxy8U3riM1LqkkR5D9nQBvp3__IszjiVg/viewform?embedded=true"
                onload="check()"
                referrerpolicy="no-referrer"
                width="640"
                height="100%"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
            >
                Läser in …
            </iframe>
        `

        changeNextBtn("Gå vidare till nästa design");
    },

    glassmorphism: function() {
        this.mediaPlayer.style.display = '';
        this.content.style.display = 'none';
        this.stylesheet.setAttribute("href", "glassmorphism.css");
        this.title.innerHTML = "Glassmorphism";
        
        const nextBtn = document.querySelector(".next-page-content");
        nextBtn.style.display = 'none';

        i = 0;
        totalSections = 1;

        const survey = document.querySelector(".survey");
        survey.innerHTML = `
            <iframe 
                id="iframe"
                src="https://docs.google.com/forms/d/e/1FAIpQLScOQ5RncMvkQ_9hsIkRg2nYPUt0TWxBv5P9VnkP22QPdmjYfg/viewform?embedded=true"
                onload="check()"
                referrerpolicy="no-referrer"
                width="640"
                height="100%"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
            >
                Läser in …
            </iframe>
        `

        changeNextBtn("Gå vidare till nästa design");
    },

    neumorphism: function() {
        this.mediaPlayer.style.display = '';
        this.content.style.display = 'none';
        this.stylesheet.setAttribute("href", "neumorphism.css");
        this.title.innerHTML = "Neumorphism";

        const nextBtn = document.querySelector(".next-page-content");
        nextBtn.style.display = 'none';

        i = 0;
        totalSections = 1;

        const survey = document.querySelector(".survey");
        survey.innerHTML = `
            <iframe 
                id="iframe"
                src="https://docs.google.com/forms/d/e/1FAIpQLSedWVhPSXl2787A3AVpu-j1GxrCD1OSRi2K8j9UMahNGfh-4Q/viewform?embedded=true"
                onload="check()"
                referrerpolicy="no-referrer"
                width="640"
                height="100%"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
            >
                Läser in …
            </iframe>
        `
    },
};

window.onload = start.init();