<?php
/**
 * Created by R-Jay Carl Torres
 * Date: 4/29/2017
 * Time: 9:17 PM
 */

/**
 * @param $string
 * @param string $charset
 * @return mixed
 */
function create_slug($string, $charset = 'utf-8'){

    // convert accented characters to entities
    $string = htmlentities($string, ENT_NOQUOTES, $charset, false);

    // strip unwanted parts of entities to leave unaccented character
    $string = preg_replace('~&([A-za-z])(?:acute|cedil|caron|circ|grave|orn|ring|slash|th|tilde|uml);~',
        '\1', $string);

    $string = preg_replace('~&([A-za-z]{2})(?:lig);~', '\1', $string);

    // remove other entities
    $string = preg_replace('~&[^;]+;~', '', $string);

    // replace spaces and illegal characters with hyphens
    return preg_replace('~[\s!*\'();:@&=+$,/?%#[\]]+~', '-', $string);
}

//returns 'This-is-a-sample-test'
echo create_slug("This is a sample test")."<br>";

// returns 'L-ete-est-la-e'
echo create_slug("L'été? est là &amp; &eacute;");