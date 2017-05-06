<?php
/**
 * Created by R-Jay Carl Torres
 * Date: 4/29/2017
 * Time: 9:15 PM
 */

/**
 * @param $strMyDate
 * @param $strCurrentFormat
 * @param $strNewFormat
 * @return false|string
 */
function changeDateFormat($strMyDate,$strCurrentFormat,$strNewFormat){
    $date = date_parse_from_format($strCurrentFormat,$strMyDate);

    return date(
        $strNewFormat,
        mktime($date['hour'],
            $date['minute'],
            $date['second'],
            $date['month'],
            $date['day'],
            $date['year']
        )
    );
}

//Output: 02-12-2015 , d: day, m: month, Y: year
echo changeDateFormat("2015-12-02","Y-m-d", "d-m-Y");