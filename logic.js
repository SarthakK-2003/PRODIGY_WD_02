let [ms, s, m, h] = [0, 0, 0, 0];
let timeRef = document.querySelector(".time");
let int = null;


// to start the stopwatch
document.getElementById("stime").addEventListener("click", () => {
    if(int !== null) {
        clearInterval(int);
    }
    int = setInterval(dispTime, 10);
});

// to pause the stopwatch
document.getElementById("ptime").addEventListener("click", () => {
    clearInterval(int);
});

// to reset the stopwatch
document.getElementById("rtime").addEventListener("click", () => {
    clearInterval(int);
    [ms, s, m, h] = [0, 0, 0, 0];
    timeRef.innerHTML = "00 : 00 : 00 : 000 ";
}); 

// for displaying the time
function dispTime() {
    ms += 10;
    if(ms == 1000) {
        ms = 0;
        s++;
        if(s == 60) {
            s = 0;
            m++;
            if(m == 60) {
                m = 0;
                h++;
            }
        }
    }

    let hrs = h < 10 ? "0" + h : h;
    let min = m < 10 ? "0" + m : m;
    let sec = s < 10 ? "0" + s : s;
    let msec = ms < 10 ? "00" + ms : ms < 100 ? "0" + ms : ms;

    timeRef.innerHTML = `${hrs} : ${min} : ${sec} : ${msec}`;

}
