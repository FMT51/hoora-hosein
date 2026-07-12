const env = document.getElementById("env");
const landing = document.getElementById("landing");
const invite = document.getElementById("invite");

const galleryPage = document.getElementById("galleryPage");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

let isPlaying = false;

for(let i=0;i<35;i++){

    const p = document.createElement("div");

    p.className = "particle";


    p.innerHTML = i % 2 ? "🌸" : "✦";

    p.style.position = "fixed";
    p.style.left = Math.random()*100 + "vw";
    p.style.top = "-20px";

    document.body.appendChild(p);
}

env.onclick = function(){

    env.classList.add("open");

    setTimeout(()=>{

        landing.style.display="none";
        invite.style.display="block";

        music.play()
.then(() => {
    console.log("MUSIC OK");
})
.catch(err => {
    console.error("MUSIC ERROR:", err);
});

        isPlaying=true;
document.body.style.overflow="auto"
        music.play().catch(()=>{});

        musicBtn.classList.add("music-playing");

    },1700);
};

musicBtn.onclick = function(){

    if(music.paused){

        music.play();

        musicBtn.classList.add("spin");

    }else{

        music.pause();

        musicBtn.classList.remove("spin");

    }
};


function showGallery(){

    invite.style.display="none";

    galleryPage.style.display="block";
}

function backHome(){

    galleryPage.style.display="none";

    invite.style.display="block";
}

const target = new Date("2026-08-16T18:00:00");

setInterval(()=>{

    let x = target - new Date();


    if(x < 0) return;

    document.getElementById("d").innerText =
        Math.floor(x/86400000);

    document.getElementById("h").innerText =
        Math.floor(x/3600000)%24;

    document.getElementById("m").innerText =
        Math.floor(x/60000)%60;

    document.getElementById("s").innerText =
        Math.floor(x/1000)%60;

},1000);
const seal = document.getElementById("seal");

env.onclick = function(){

    seal.classList.add("break");

    setTimeout(()=>{

        env.classList.add("open");

    },700);

    setTimeout(()=>{

        landing.style.display="none";

        invite.style.display="block";

        music.play().catch(()=>{});

        musicBtn.classList.add("spin");

    },2200);

};
musicBtn.addEventListener("click",()=>{

    if(isPlaying){

        music.pause();

        musicBtn.classList.remove("music-playing");

    }else{
console.log(document.getElementById("bgMusic"));
        music.play();

        musicBtn.classList.add("music-playing");

    }

    isPlaying = !isPlaying;

});
// جلوگیری از کلیک راست
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
});

// جلوگیری از Drag عکس
document.querySelectorAll("img").forEach(img=>{
    img.addEventListener("dragstart", e=>{
        e.preventDefault();
    });
});
function showMapModal(){

    document.getElementById("mapModal").style.display="flex";

}

function closeMap(){

    document.getElementById("mapModal").style.display="none";

}

function openBalad(){

    window.open(
    "https://balad.ir/search/%D8%B4%D9%87%D8%B1%DA%A9%D8%B1%D8%AF%D8%8C%20%D9%85%DB%8C%D8%AF%D8%A7%D9%86%20%D9%85%D8%B9%D9%84%D9%85%D8%8C%20%D8%A8%D9%84%D9%88%D8%A7%D8%B1%20%D8%A7%D9%85%D8%A7%D9%85%20%D8%B1%D8%B6%D8%A7%D8%8C%20%D9%86%D8%A8%D8%B4%20%DA%A9%D9%88%DA%86%D9%87%20109",
    "_blank");

}

function openNeshan(){

    window.open(
    "https://neshan.org/maps/search/شهرکرد میدان معلم بلوار امام رضا نبش کوچه ۱۰۹",
    "_blank");

}

function openGoogle(){

    window.open(
    "https://maps.app.goo.gl/6tyickaU7pEntn8S8",
    "_blank");

}
