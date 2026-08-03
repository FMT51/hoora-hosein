const scriptURL = "https://script.google.com/macros/s/AKfycbwbp_4zKMlp_sx0lHekS-YrhFonZZ7IeiPhjfnefpULM0xYKObbTaHeaMH4bBqShKXsYw/exec";

const env = document.getElementById("env");
const landing = document.getElementById("landing");
const invite = document.getElementById("invite");

const galleryPage = document.getElementById("galleryPage");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const seal = document.getElementById("seal");

let isPlaying = false;


/* ---------- Particles ---------- */

for (let i = 0; i < 35; i++) {

    const p = document.createElement("div");

    p.className = "particle";

    p.innerHTML = i % 2 ? "🌸" : "✦";

    p.style.position = "fixed";
    p.style.left = Math.random() * 100 + "vw";
    p.style.top = "-20px";

    document.body.appendChild(p);
}


/* ---------- Envelope ---------- */

if (env) {

    env.onclick = function () {

        if (env.classList.contains("open")) return;

        if (seal) {
            seal.classList.add("break");
        }

        setTimeout(() => {
            env.classList.add("open");
        }, 700);

        setTimeout(() => {

            if (landing) {
                landing.style.display = "none";
            }

            if (invite) {
                invite.style.display = "block";
            }

            document.body.style.overflow = "auto";

            if (music) {
                music.play().catch(() => {});
            }

            isPlaying = true;

            if (musicBtn) {
                musicBtn.classList.add("music-

playing");
            }

        }, 2200);

    };

}
/* ---------- Music Button ---------- */

if (musicBtn) {

    musicBtn.onclick = function () {

        if (!music) return;

        if (music.paused) {

            music.play().catch(() => {});
            musicBtn.classList.add("music-playing");

            isPlaying = true;

        } else {

            music.pause();
            musicBtn.classList.remove("music-playing");
            isPlaying = false;

        }

    };

}


/* ---------- Gallery ---------- */

function showGallery() {

    if (invite) invite.style.display = "none";


    if (galleryPage) galleryPage.style.display = "block";

}

function backHome() {

    if (galleryPage) galleryPage.style.display = "none";

    if (invite) invite.style.display = "block";

}


/* ---------- Countdown ---------- */

const target = new Date("2026-08-16T18:00:00");

setInterval(() => {

    let x = target - new Date();

    if (x < 0) return;

    document.getElementById("d").innerText = Math.floor(x / 86400000);

    document.getElementById("h").innerText = Math.floor(x / 3600000) % 24;

    document.getElementById("m").innerText = Math.floor(x / 60000) % 60;

    document.getElementById("s").innerText = Math.floor(x / 1000) % 60;

}, 1000);
const seal = 

document.getElementById("seal");

env.onclick = function () {

    if (env.classList.contains("open")) return;

    if (seal) {
        seal.classList.add("break");
    }

    setTimeout(() => {
        env.classList.add("open");
    }, 700);

    setTimeout(() => {

        landing.style.display = "none";
        invite.style.display = "block";

        document.body.style.overflow = "auto";

        music.play().catch(() => {});

        isPlaying = true;

        musicBtn.classList.add("music-playing");

    }, 2200);

};
musicBtn.onclick = function () {

    if (music.paused) {

        music.play().catch(() => {});

        musicBtn.classList.add("music-playing");

        isPlaying = true;

    } else {

        music.pause();

        musicBtn.classList.remove("music-playing");

        isPlaying = false;

    }

};


// جلوگیری از کلیک چندباره روی موزیک
music.addEventListener("ended", () => {

    musicBtn.classList.remove("music-playing");

    isPlaying = false;


});
const scriptURL = "https://script.google.com/macros/s/AKfycbwbp_4zKMlp_sx0lHekS-YrhFonZZ7IeiPhjfnefpULM0xYKObbTaHeaMH4bBqShKXsYw/exec";

const successModal = document.getElementById("successModal");
const successTitle = document.getElementById("successTitle");
const successText = document.getElementById("successText");
const closeSuccess = document.getElementById("closeSuccess");

if (closeSuccess) {
    closeSuccess.onclick = () => {

        successModal.style.display = "none";
    };
}

document.getElementById("guestForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const attendance = document.querySelector('input[name="attendance"]:checked');

    if (!attendance) {
        alert("لطفاً وضعیت حضور را انتخاب کنید.");
        return;
    }

    if (attendance.value === "yes") {

        if (

            document.getElementById("fullName").value.trim() === "" ||
            document.getElementById("phone").value.trim() === "" ||
            document.getElementById("count").value.trim() === ""
        ) {
            alert("لطفاً تمام اطلاعات را کامل کنید.");
            return;
        }

    } else {

        if (document.getElementById("fullName").value.trim() === "") {
            alert("لطفاً نام و نام خانوادگی را وارد کنید.");

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

        if (attendance.value === "yes") {

            successTitle.innerHTML = "🌹";

            successText.innerHTML =
                "از ثبت حضور شما سپاسگزاریم.<br>مشتاق دیدار شما در جشن عروسی هستیم.";

        } else {

            successTitle.innerHTML = "❤️";

            successText.innerHTML =
                "از اینکه پاسخ خود را ثبت کردید سپاسگزاریم.<br>امیدواریم در فرصتی دیگر دیدار کنیم.";

        }

        successModal.style.display = "flex";

        document.getElementById("guestForm").reset();

    })

    .catch(() => {

        alert("خطا در ثبت اطلاعات");

    });

});

