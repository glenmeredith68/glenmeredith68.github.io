windchill = () => {
    let temp = parseFloat(document.getElementById('currenttemp').innerHTML);
    let windspeed = parseFloat(document.getElementById('windspeed').innerHTML);
    let chilltemp, roundtemp;
    if (temp <= 60) {
        chilltemp = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(windspeed, .16)) + (0.4275 * temp * Math.pow(windspeed, .16));
        roundtemp = Math.round(chilltemp * 100) / 100;
     
    } else {
         roundtemp = temp}
    document.getElementById('windchill').innerHTML = roundtemp;
}
windchill();