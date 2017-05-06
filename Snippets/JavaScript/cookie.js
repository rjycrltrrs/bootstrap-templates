/**
 * Created by R-Jay Carl Torres on 4/29/2017.
 */

/**
 *
 * @param cookieName
 * @param cookieValue
 * @param expdays
 */
function setCookie(cookieName, cookieValue, expdays) {
    var d = new Date();
    d.setTime(d.getTime() + (expdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + "; " + expires;
}

/**
 *
 * @param cookieName
 * @returns {*}
 */
function getCookie(cookieName) {
    var name = cookieName + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)===' ') c = c.substring(1);
        if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
    }
    return "";
}


/**
 *
 */
function checkCookie() {
    var username = getCookie("username");
    if (username !== "") {
        alert("Welcome: " + username);
    } else {
        username = prompt("Please enter your user name:", "");
        if (username !== "" && username !== null) {
            setCookie("username", username, 365);
        }
    }
}