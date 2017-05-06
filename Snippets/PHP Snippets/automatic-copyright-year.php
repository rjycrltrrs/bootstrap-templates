<?php
/**
 * Created by  R-Jay Carl Torres
 * Date: 4/29/2017
 * Time: 9:10 PM
 */

/**
 * No argument required for current year.
 * Otherwise, pass start year as a 4-digit value.
 * @param null $startYear
 */
function auto_copyright($startYear = null) {
    $thisYear = date('Y');  // get this year as 4-digit value
    if (!is_numeric($startYear)) {
        $year = $thisYear; // use this year as default
    } else {
        $year = intval($startYear);
    }
    if ($year == $thisYear || $year > $thisYear) { // $year cannot be greater than this year - if it is then echo only current year
        echo "&copy; $thisYear"; // display single year
    } else {
        echo "&copy; $year&ndash;$thisYear"; // display range of years
    }
}
 ?>

<?php auto_copyright(); // Current year?>

<?php auto_copyright(2010);  // 2010 - Current ?>