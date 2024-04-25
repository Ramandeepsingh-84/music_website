
const music=new Audio("audio/23.mp3");
const songs=[

    {
        id:"1",
        songName: `410<br>
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster:"img/1.jfif"
    },
    {
        id:"2",
        songName: `Drippy<br>
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster:"img/2.jfif"
    },
    {
        id:"3",
        songName: `Khutti<br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster:"img/3.jfif"
    },
    {
        id:"4",
        songName: `Hint<br>
        <div class="subtitle">Karan Aujla</div>`,
        poster:"img/4.jfif"
    },
    {
        id:"5",
        songName: `Jhanjar<br>
        <div class="subtitle">Karan Aujla</div>`,
        poster:"img/5.jfif"
    },
    {
        id:"6",
        songName: `King Shit<br>
        <div class="subtitle">Shubh</div>`,
        poster:"img/6.jfif"
    },
    {
        id:"7",
        songName: `Burberry<br>
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster:"img/7.jfif"
    },
    {
        id:"8",
        songName: `These Days<br>
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster:"img/8.jfif"
    },
    {
        id:"9",
        songName: `Doctor<br>
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster:"img/9.jfif"
    },
    {
        id:"10",
        songName: `Goat<br>
        <div class="subtitle">Diljit Dosanjh</div>`,
        poster:"img/10.jfif"
    },
    {
        id:"11",
        songName: `295<br>
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster:"img/11.jfif"
    },
    {
        id:"12",
        songName: `Vaar<br>
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster:"img/12.jfif"
    },
    {
        id:"13",
        songName: `Jatt Hunde Aa<br>
        <div class="subtitle">Prem Dhillon</div>`,
        poster:"img/13.jfif"
    },
    {
        id:"14",
        songName: `Old Skool<br>
        <div class="subtitle">Prem Dhillon</div>`,
        poster:"img/14.jfif"
    },
    {
        id:"15",
        songName: `Hello<br>
        <div class="subtitle">Nirvair Pannu</div>`,
        poster:"img/15.jfif"
    },
    {
        id:"16",
        songName: `Nazran<br>
        <div class="subtitle">Nirvair Pannu</div>`,
        poster:"img/16.jfif"
    },
    {
        id:"17",
        songName: `Dhakka<br>
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster:"img/17.jfif"
    },
    {
        id:"18",
        songName: `Kath<br>
        <div class="subtitle">Arjan Dhillon</div>`,
        poster:"img/18.jfif"
    },
    {
        id:"19",
        songName: `Ilzaam<br>
        <div class="subtitle">Arjan Dhillon</div>`,
        poster:"img/19.jfif"
    },
    {
        id:"20",
        songName: `Jatti Jeone Morh<br>
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster:"img/20.jfif"
    },
    {
        id:"21",
        songName: `Brown Shortie<br>
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster:"img/21.jfif"
    },
    {
        id:"22",
        songName: `Goat<br>
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster:"img/22.jfif"
    },
    {
        id:"23",
        songName: `Pappi<br>
        <div class="subtitle">Sidhu Moose Wala</div>`,
        poster:"img/23.jfif"
    },
    // {
    //     id:"24",
    //     songName: `Jatti Jeone Morh<br>
    //     <div class="subtitle">Sidhu Moose Wala</div>`,
    //     poster:"img/20.jfif"
    // },
    // {
    //     id:"25",
    //     songName: `Jatti Jeone Morh<br>
    //     <div class="subtitle">Sidhu Moose Wala</div>`,
    //     poster:"img/20.jfif"
    // },
]


Array.from(document.getElementsByClassName('songItem')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].songName;
});

let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');

 masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})

const makeAllplays=()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground=()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background='rgb(105, 105, 105, .0)';
    })
}

let index=0;
let poster_master_play=document.getElementById('poster_master_play');
// let download_music=document.getElementById('download_music');

let title=document.getElementById('title');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        music.src=`audio/${index}.mp3`;
        

        // download_music.href=`audio/${index}.mp3`;

        poster_master_play.src=`img/${index}.jfif`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles=songs.filter((els)=>{
            return els.id==index;
        });

        songTitles.forEach(elss=>{
            let{songName}=elss;
            title.innerHTML=songName;
            // download_music.setAttribute('download',songName);
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)';
        
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})


// timer of song current time and total duration

let currentStart=document.getElementById('currentStart');
let currentEnd=document.getElementById('currentEnd');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];




music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_dur=music.duration;
    
    let min1=Math.floor(music_dur / 60);
    let sec1=Math.floor(music_dur % 60);
    // console.log(min1);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerHTML=`${min1}:${sec1}`;

    let min2=Math.floor(music_curr / 60);
    let sec2=Math.floor(music_curr % 60);

    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentStart.innerHTML=`${min2}:${sec2}`;

    
    let progressBar=parseInt((music_curr / music_dur)*100);
    seek.value=progressBar;
    // console.log(seek.value);
    let seekbar=seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left=`${seekbar}%`;
});

seek.addEventListener('change',()=>{
    music.currentTime=seek.value * music.duration / 100;
});

const next_music=()=>{
// music endeed and new start auto
// music.addEventListener('ended',()=>{
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    if(index==songs.length){
        index==0;
    }
    index++;
    music.src=`audio/${index}.mp3`;
    // download_music.href=`audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jfif`;
    music.play();
    let song_title=songs.filter((ele)=>{
        return ele.id==index;
    })
    song_title.forEach(ele=>{
        let{songName}=ele;
        title.innerHTML=songName;
        // download_music.setAttribute('download',songName);
    })
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background="rgb(105,105,170,.1)";
    makeAllplays();
    document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
    document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill');

}


const repeat_music=()=>{
    
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        index;
        music.src=`audio/${index}.mp3`;
        // download_music.href=`audio/${index}.mp3`;
        poster_master_play.src=`img/${index}.jfif`;
        music.play();
        let song_title=songs.filter((ele)=>{
            return ele.id==index;
        })
        song_title.forEach(ele=>{
            let{songName}=ele;
            title.innerHTML=songName;
            // download_music.setAttribute('download',songName);
        })
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background="rgb(105,105,170,.1)";
        makeAllplays();
        document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
        document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill');
    
}

const random_music=()=>{
    
    masterPlay.classList.add('bi-pause-fill');
    wave.classList.add('active2');
    if(index==songs.length){
        index==0;
    }
    index=Math.floor((Math.random()*songs.length)+1);
    music.src=`audio/${index}.mp3`;
    // download_music.href=`audio/${index}.mp3`;
    poster_master_play.src=`img/${index}.jfif`;
    music.play();
    let song_title=songs.filter((ele)=>{
        return ele.id==index;
    })
    song_title.forEach(ele=>{
        let{songName}=ele;
        title.innerHTML=songName;
        // download_music.setAttribute('download',songName);
    })
    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background="rgb(105,105,170,.1)";
    makeAllplays();
    document.getElementsByClassName('playListPlay')[index-1].classList.remove('bi-play-circle-fill');
    document.getElementsByClassName('playListPlay')[index-1].classList.add('bi-pause-circle-fill');

}

let shuffle=document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click',()=>{
    let a=shuffle.innerHTML;

    switch(a){
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML="repeat";
        break;
        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML="random";
        break;
        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML="next";
        break;
    }
});

music.addEventListener('ended',()=>{
    let b=shuffle.innerHTML;

    switch(b){
        case "repeat":
            repeat_music();
            break;
        case "next":
            next_music();
            break;
        case "random":
            random_music();
            break;
    }
})


let vol_icon=document.getElementById('vol_icon');
let vol=document.getElementById('vol');
let vol_bar=document.getElementsByClassName('vol_bar')[0];
let vol_dot=document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value>0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value>50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }

    let vol_a=vol.value;
    vol_bar.style.width=`${vol_a}%`;
    vol_dot.style.left=`${vol_a}%`;
    music.volume=vol_a/100;
});

let back=document.getElementById('back');
let next=document.getElementById('next');

back.addEventListener('click',()=>{
    index-=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src=`audio/${index}.mp3`;
    // download_music.href=`audio/${index}.mp3`;
        poster_master_play.src=`img/${index}.jfif`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles=songs.filter((els)=>{
            return els.id==index;
        });

        songTitles.forEach(elss=>{
            let{songName}=elss;
            title.innerHTML=songName;
            // download_music.setAttribute('download',songName);
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)';
        
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})

next.addEventListener('click',()=>{
    index++;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index=1;
    }
    music.src=`audio/${index}.mp3`;
    // download_music.href=`audio/${index}.mp3`;
        poster_master_play.src=`img/${index}.jfif`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles=songs.filter((els)=>{
            return els.id==index;
        });

        songTitles.forEach(elss=>{
            let{songName}=elss;
            title.innerHTML=songName;
            // download_music.setAttribute('download',songName);
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background='rgb(105,105,105,.1)';
        
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
})














// scroll left  right --popular songs and artists
let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_song')[0];


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft +=330;
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -=330;
});


let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let Artists_bx=document.getElementsByClassName('Artists_bx')[0];


pop_art_right.addEventListener('click',()=>{
    Artists_bx.scrollLeft +=330;
})
pop_art_left.addEventListener('click',()=>{
    Artists_bx.scrollLeft -=330;
});