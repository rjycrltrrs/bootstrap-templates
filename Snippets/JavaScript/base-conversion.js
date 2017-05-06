/**
 * Created by R-Jay Carl Torres on 4/29/2017.
 */

/**
 *
 * @param dec
 * @returns {string}
 */
function decToHex(dec) {
    var hexStr = "0123456789ABCDEF";
    var low = dec % 16;
    var high = (dec - low)/16;
    return "" + hexStr.charAt(high) + hexStr.charAt(low);
}

/**
 *
 * @param hex
 * @returns {Number}
 */
function hexToDec(hex) { return parseInt(hex,16); }

