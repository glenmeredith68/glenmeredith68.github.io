// window.addEventListener('load', () => {
//     const hambutton = document.querySelector('.ham');
//     const mainnav = document.querySelector('#navigation');

//     hambutton.addEventListener('click', () => {
//         mainnav.classList.toggle('responsive')
//     }, false);
// });

function toggleMenu() {
    document.getElementsByClassName('navigation')[0].classList.toggle('responsive');
}

window.onresize = () => {
    if (window.innerWidth > 760) document.getElementsByClassName('navigation')[0].classList.remove('responsive')
};

function getDate() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    if (month == 0) {
        month = 'January'
    }
    if (month == 1) {
        month = 'February'
    }
    if (month == 2) {
        month = 'March'
    }
    if (month == 3) {
        month = 'April'
    }
    if (month == 4) {
        month = 'May'
    }
    if (month == 5) {
        month = 'June'
    }
    if (month == 6) {
        month = 'July'
    }
    if (month == 7) {
        month = 'August'
    }
    if (month == 8) {
        month = 'September'
    }
    if (month == 9) {
        month = 'October'
    }
    if (month == 10) {
        month = 'November'
    }
    if (month == 11) {
        month = 'December'
    }
    let dayOfMonth = new Date().getDate();
    let weekdayNumber = new Date().getDay();
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var weekday = daysOfWeek[weekdayNumber]
    document.getElementById("outputspan").innerHTML = weekday + ", " + dayOfMonth + " " + month + " " + year;
    return weekday;
}
getDate();

function pancakeBanner() {
    let weekday = getDate();
    if (weekday == 'Friday') {
        document.getElementsByClassName('pancakegrid')[0].style.display = 'grid';
    }
}
pancakeBanner();

// windchill = () => {
//     let temp = parseFloat(document.getElementById('currenttemp').innerHTML);
//     let windspeed = parseFloat(document.getElementById('windspeed').innerHTML);
//     let chilltemp, roundtemp;
//     if (temp <= 60) {
//         chilltemp = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, .16)) + (0.4275 * temp * Math.pow(windspeed, .16));
//         roundtemp = Math.round(chilltemp * 100) / 100;
     
//     } else {
//          roundtemp = temp}
//     document.getElementById('windchill').innerHTML = roundtemp;
// }
// windchill();