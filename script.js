setInterval(show_clock, 1000);

function show_clock(){
    // analog constants
    const hour = document.getElementsByClassName('hour')[0];
    const minute = document.getElementsByClassName('minute')[0];
    const second = document.getElementsByClassName('second')[0];

    // digital constants
    const hr = document.getElementsByClassName('hr')[0];
    const m = document.getElementsByClassName('m')[0];
    const s = document.getElementsByClassName('s')[0];

    // date variable
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hour.style.transform = `rotate(${30*hours+minute/2}deg)`;
    minute.style.transform = `rotate(${6*minutes}deg)`;
    second.style.transform = `rotate(${6*seconds}deg)`;

    hr.getElementsByTagName('span')[0].innerHTML = hours;
    m.getElementsByTagName('span')[0].innerHTML = minutes;
    s.getElementsByTagName('span')[0].innerHTML = seconds;
}