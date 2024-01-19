console.log("welcome in netflix");
//initialize the variables
let songIndex=0;
let audioElement =new Audio("song/1.mp3");
let masterplay = document.getElementById("masterplay");
let myprogressbar = document.getElementById("myprogressbar")
let gif = document.getElementById("gif");
let masterSongName = document.getElementById("masterSongName");
let songItems = Array.from(document.getElementsByClassName("songItem"));


let songs=[
    {songName: "rimjhim", filepath: "song/1.mp3",coverpath: "covers/4.jpg"},
    {songName: "shaam ho", filepath: "song/2.mp3",coverpath: "covers/2.jpg"},
    {songName: "mast nazro se", filepath: "song/3.mp3",coverpath: "covers/3.jpg"},
    {songName: "pyar vyar", filepath: "song/4.mp3",coverpath: "covers/4.jpg"},
    {songName: "travel", filepath: "song/5.mp3",coverpath: "covers/5.jpg"},
    {songName: "salam-e-ishq", filepath: "song/6.mp3",coverpath: "covers/6.jpg"},
    {songName: "oo antava", filepath: "song/7.mp3",coverpath: "covers/7.jpg"},
]
songItems.forEach((element,i) => {
    console.log(element, i)
    element.getElementsByTagName("img")[0].src = songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})

 
//audioElement.play();

//handle play/pause click
   
masterplay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }

    else {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})




//listen to events
audioElement.addEventListener('timeupdate',()=>{
console.log("time update");
//update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
console.log(progress);
myprogressbar.value = progress;
})

//chnage event in myprogressbar
myprogressbar.addEventListener("change",()=>{
    audioElement.currentTime = ((myprogressbar.value * audioElement.duration)/ 100);

})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemplay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");

    })
}
Array.from(document.getElementsByClassName("songItemplay")).forEach((element) =>{
    element.addEventListener("click",(e) =>{
        console.log(e.target);
        makeAllPlays();
        songIndex =parseInt(e.target.id)
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=6){
        songIndex=0;
    }
    else{
         songIndex +=1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
         songIndex -=1;
    }
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `song/${songIndex+1}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})

 
 
 