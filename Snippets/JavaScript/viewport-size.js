/**
 * Created by R-Jay Carl Torres on 4/29/2017.
 */

/**
 * Get Viewport Size in Width
 * @returns {*}
 */
function getViewportWidth() {
    return window.innerWidth ? window.innerWidth : document.body && document.body.offsetWidth ? document.body.offsetWidth : 0;
}


/**
 * Get Viewport Size in Height
 * @returns {*}
 */
function getViewportHeight() {
    return window.innerHeight ? window.innerHeight : document.body && document.body.offsetHeight ? document.body.offsetHeight : 0;
}