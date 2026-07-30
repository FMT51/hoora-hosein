//const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwbp_4zKMlp_sx0lHekS-YrhFonZZ7IeiPhjfnefpULM0xYKObbTaHeaMH4bBqShKXsYw/exec";
//const successModal = document.getElementById("successModal");
//const successTitle = document.getElementById("successTitle");
//const successText = document.getElementById("successText");
//const closeSuccess = document.getElementById("closeSuccess");


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
        "https://balad.ir/p/32.308708,50.894574",
        "_blank"
    );

}

function openGoogle(){

    window.open(
        "https://www.google.com/maps/dir/?api=1&destination=32.308708,50.894574&travelmode=driving",
        "_blank"
    );

}
const scriptURL = "https://script.google.com/macros/s/AKfycbwbp_4zKMlp_sx0lHekS-YrhFonZZ7IeiPhjfnefpULM0xYKObbTaHeaMH4bBqShKXsYw/exec";

document.getElementById("guestForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const attendance = document.querySelector('input[name="attendance"]:checked');

    if (!attendance) {
        alert("لطفاً وضعیت حضور را انتخاب کنید.");
        return;
    }

    if (attendance.value === "yes") {
        if (
            document.getElementById("phone").value === "" ||
            document.getElementById("count").value === ""
        ) {
            alert("لطفاً تمام اطلاعات را کامل کنید.");
            return;
        }
    }

    fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify({
            fullName: document.getElementById("fullName").value,
            phone: document.getElementById("phone").value,
            count: document.getElementById("count").value,
            attendance: attendance.value
        })
    })
    .then(() => {
       if(attendance.value === "yes"){

   // successTitle.innerHTML = "🌹";

   // successText.innerHTML =
    "از ثبت حضور شما سپاسگزاریم.<br>مشتاق دیدار شما در جشن عروسی هستیم.";

}else{

   // successTitle.innerHTML = "❤️";

   // successText.innerHTML =
    "از اینکه پاسخ خود را ثبت کردید سپاسگزاریم.<br>امیدواریم در فرصتی دیگر دیدار کنیم.";

}

successModal.style.display = "flex";
        //document.getElementById("guestForm").reset();
    })
    .catch(() => {
        alert("خطا در ثبت اطلاعات");
    });

