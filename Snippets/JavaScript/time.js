/**
 * Created by R-Jay Carl Torres on 4/29/2017.
 */


/**
 *
 * @param hrs
 * @returns {number}
 */
function hoursToMinutes(hrs) { return hrs*=60; }


/**
 *
 * @param hrs
 * @returns {number}
 */
function hoursToSeconds(hrs) { return hrs*=3600; }


/**
 *
 * @param min
 * @returns {string}
 */
function minutesToHours(min) {
    var hrs = Math.floor(min/60);
    min = min % 60;
    if(min<10) min = "0" + min;
    return hrs + ":" + min;
}


/**
 *
 * @param min
 * @returns {number}
 */
function minutesToSeconds(min) { return min*=60; }


/**
 *
 * @param sec
 * @returns {string}
 */
function secondsToHours(sec) {
    var hrs = Math.floor(sec/3600);
    var min = Math.floor((sec%3600)/60);
    sec = sec % 60;
    if(sec<10) sec = "0" + sec;
    if(min<10) min = "0" + min;
    return hrs + ":" + min + ":" + sec;
}


/**
 *
 * @param sec
 * @returns {string}
 */
function secondsToMinutes(sec) {
    var min = Math.floor(sec/60);
    sec = sec % 60;
    if(sec<10) sec = "0" + sec;
    if(min<10) min = "0" + min;
    return min + ":" + sec;
}