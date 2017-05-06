/**
 * Created by R-Jay Carl Torres on 4/29/2017.
 */

/**
 *
 * @param t Celsius temperature
 * @returns {number} Fahrenheit temperature
 */
function celsiusToFahrenheit(t) { return (212-32)/100 * t + 32; }

/**
 *
 * @param t Fahrenheit temperature
 * @returns {number} Celsius temperature
 */
function fahrenheitToCelsius(t) { return 100/(212-32) * (t - 32); }

