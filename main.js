const sec = document.querySelector(".secs");
const min = document.querySelector(".min");
const hours = document.querySelector(".hours");

function tiktak() {
    let seconds = new Date().getSeconds();
    let minutes = new Date().getMinutes();
    let hour = new Date().getHours();

    sec.style.transform = `rotate(${180 + (seconds * 6)}deg)`;
    min.style.transform = `rotate(${180 + (minutes * 6)}deg)`;
    hours.style.transform = `rotate(${180 + (hour * 30)}deg)`; // Hour hand rotates slower

    console.log(seconds, minutes, hour);
}

setInterval(tiktak, 1000);
