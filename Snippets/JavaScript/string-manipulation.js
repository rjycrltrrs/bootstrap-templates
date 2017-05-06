/**
 * Created by R-Jay Carl Torres on 4/29/2017.
 */

/**
 *
 * @param inputString
 * @returns {string}
 */
function stringToUppercase(inputString) {
    return inputString.toUpperCase();
}


/**
 *
 * @param inputString
 * @returns {string}
 */
function stringToLowercase(inputString) {
    return inputString.toLowerCase();
}


/**
 *
 * @param string
 * @returns {*}
 */
function capitalizeWords(string) {

    var tmpStr, tmpChar, preString, postString;

    tmpStr = string.toLowerCase();
    stringLen = tmpStr.length;

    if (stringLen > 0) {

        for (i = 0; i < stringLen; i++){

            if (i === 0){

                tmpChar = tmpStr.substring(0,1).toUpperCase();
                postString = tmpStr.substring(1,stringLen);
                tmpStr = tmpChar + postString;

            } else {

                tmpChar = tmpStr.substring(i,i+1);

                if (tmpChar === " " && i < (stringLen-1)) {

                    tmpChar = tmpStr.substring(i+1,i+2).toUpperCase();
                    preString = tmpStr.substring(0,i+1);
                    postString = tmpStr.substring(i+2,stringLen);
                    tmpStr = preString + tmpChar + postString;

                }

            }

        }

    }

    return tmpStr;

}


/**
 *
 * @param inputString
 * @param checkString
 * @returns {Number|number}
 */
function checkForCharacters(inputString, checkString) {
    return inputString.indexOf(checkString);
}


/**
 *
 * @param inputString
 * @returns {Number}
 */
function howManyWords(inputString) {
    return inputString.split(' ').length;
}


/**
 *
 * @param inputString
 */
function htmlEncodeString (inputString) {
    return escape(inputString);
}


/**
 *
 * @param inputString
 */
function htmlUnencodeString (inputString) {
    return unescape(inputString);
}


/**
 *
 * @param inputString
 * @returns {boolean}
 */
function isNotaNumber (inputString) {
    return isNaN(inputString);
}


/**
 *
 * @param inputString
 * @returns {boolean}
 */
function isNumberFloat(inputString) {
    return (!isNaN(parseFloat(inputString)));
}


/**
 *
 * @param inputString
 * @param inputLength
 * @returns {boolean}
 */
function minLength(inputString,inputLength) {
    return (inputString.length <= inputLength);
}


/**
 *
 * @param inputString
 * @param inputLength
 * @returns {boolean}
 */
function maxLength(inputString,inputLength){
    return(inputString.length >= inputLength);
}


/**
 *
 * @param inputString
 * @returns {boolean}
 */
function noNumbers(inputString) {
    var searchForNumbers = /\d/;
    return !searchForNumbers.test(inputString);
}


/**
 *
 * @param inputNumber
 * @param base
 * @returns {string}
 */
function numberToString(inputNumber,base) {
    var prefix = '';
    if (!base) base = 10;
    if (base=8) prefix = '0';
    if (base=16) prefix = '0x';
    return (prefix + inputNumber.toString(base));
}


/**
 *
 * @param inputString
 * @returns {boolean}
 */
function onlyNumbers(inputString) {
    var searchForNonNumbers = /\D+/;
    return (!searchForNonNumbers.test(inputString));
}


/**
 *
 * @param string
 * @returns {string}
 */
function removeExtraSpaces(string) {
    var returnString = "";
    var stringArray = string.split(" ");

    for(var i = 0; i < stringArray.length; i++) if (stringArray[i] !== "") {
        returnString += i === stringArray.length - 1 ? stringArray[i] : stringArray[i] + " ";
    }
    return returnString;
}


/**
 *
 * @param inputString
 * @returns {*}
 */
function removeLeadingAndTrailingWhitespace(inputString){
    if (typeof inputString === "string") {
        var firstNonWhite = inputString.search(/\S/);

        if (firstNonWhite !== -1) {
            for (var i=inputString.length-1; i >= 0; i--) {
                if (inputString.charAt(i).search(/\S/) !== -1) {
                    inputString = inputString.substring(firstNonWhite, i+1);
                    break;
                }
            }
        }
    }

    return inputString;
}


/**
 *
 * @param inputString
 * @returns {*}
 */
function removeLeadingWhitespace(inputString) {
    if (typeof inputString === "string") {
        var firstNonWhite = inputString.search(/\S/);

        if (firstNonWhite !== -1)
            inputString = inputString.substring(firstNonWhite);
    }
    return inputString;

}


/**
 *
 * @param inputString
 * @returns {*}
 */
function removeTrailingWhitespace(inputString) {
    if (typeof inputString === "string") {
        for (var i=inputString.length-1; i >= 0; i--) {
            if (inputString.charAt(i).search(/\S/) !== -1) {
                inputString = inputString.substring(0, i+1);
                break;
            }
        }
    }
    return inputString;
}


/**
 *
 * @param conversionString
 * @param inChar
 * @param outChar
 * @returns {Array}
 */
function replaceCharacters(conversionString,inChar,outChar) {
    var convertedString = conversionString.split(inChar);
    convertedString = convertedString.join(outChar);
    return convertedString;

}


/**
 *
 * @param inputString
 */
function stringLength(inputString) {
    return inputString.length;
}


/**
 *
 * @param inputString
 * @returns {Number}
 */
function stringToFloat (inputString) {
    return parseFloat(inputString);
}


/**
 *
 * @param inputString
 * @returns {Number}
 */
function stringToInteger (inputString) {
    return parseInt(inputString);
}


/**
 *
 * @param inputString
 * @param wrapLength
 * @param delimiter
 * @returns {string}
 */
function wrapString(inputString,wrapLength,delimiter) {
    if (!delimiter) delimiter = '\n';
    if (!wrapLength) wrapLength = inputString.length;
    var buildString = '';

    for (i = 0; i < inputString.length; i+=wrapLength) {
        buildString += inputString.slice(i,i+wrapLength) + delimiter;
    }

    return buildString.slice(0,(buildString.length - delimiter.length));
}