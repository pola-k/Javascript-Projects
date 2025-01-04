const progress_bar = document.getElementById("progress")
const song = document.getElementById("song")
const play_btn = document.getElementById("play_btn")
const next_btn = document.getElementById("next_btn")
const prev_btn = document.getElementById("prev_btn")
const song_title = document.getElementById("title")
const artist_name = document.getElementById("name")
const image = document.getElementById("image") 

let current_song_index = 0 

song_list = [
    {
        title: "Go!",
        artist: "NEFFEX",
        img: "media/artworks-xG0kidAjcMyX2PsG-6uET7Q-t1080x1080.jpg",
        audio: "media/Go! - NEFFEX.mp3"
    },
    {
        title: "Downers at Dusk",
        artist: "Talha Anjum, Umair",
        img: "media/downers_at_dusk.jpeg",
        audio: "media/Downers At Dusk(KoshalWorld.Com).mp3"
    }
]

total_songs = song_list.length

song.onloadedmetadata = function()
{
    progress_bar.max = song.duration
    progress_bar.value = song.currentTime
}

play_btn.addEventListener("click" , function()
{
    if (song.paused) 
        {
            song.play()
            play_btn.innerHTML = `<i class="fa-solid fa-pause"></i>`
        } 
        else 
        {
            song.pause();
            play_btn.innerHTML = `<i class="fa-solid fa-play"></i>`
        }
})

if(song.play())
{
    setInterval(() => 
    {
        progress_bar.value = song.currentTime
    }, 500);
}

progress_bar.onchange = function()
{
    song.play()
    song.currentTime = progress_bar.value
    play_btn.innerHTML = `<i class="fa-solid fa-pause"></i>`
}

function updatePlayer(index) 
{
    const song_details = song_list[index]
    song_title.textContent = song_details.title
    artist_name.textContent = song_details.artist
    image.src = song_details.img
    song.src = song_details.audio
    song.load()
    play_btn.innerHTML = `<i class="fa-solid fa-pause"></i>`
    song.play()
}

next_btn.addEventListener("click", function () 
{
    current_song_index = (current_song_index + 1) % total_songs
    updatePlayer(current_song_index)
});

back_btn.addEventListener("click", function () 
{
    current_song_index = (current_song_index - 1 + total_songs) % total_songs
    updatePlayer(current_song_index)
});