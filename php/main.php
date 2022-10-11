<?php

function validate($x, $y, $r) {
    return isset($x) && isset($y) && isset($r) && is_numeric($x) && is_numeric($r) && is_numeric($y) && $y >= -5 && $y <= 5; 
}

function hitTriangle($x, $y, $r) {
    return $x >= 0 && $y >= 0 && $x + $y <= $r;
}

function hitSquare($x, $y, $r) {
    return $x >= 0 && $y <= 0 && $x <= $r && $y <= $r;
}

function hitCircle($x, $y, $r) {
    return $x <= 0 && $y >= 0 && sqrt($x**2 + $y**2) <= $r;
}

$start_time = microtime(true);
$x = $_GET["x"];
$y = $_GET["y"];
$r = $_GET["r"];


if (!validate($x, $y, $r)) {
    http_response_code(400);
} else {
    $time = time();
    $hit = hitTriangle($x, $y, $r) || hitSquare($x, $y, $r) || hitCircle($x, $y, $r) ? "Hit" : "Miss" ;
    $exec_time = microtime(true) - $start_time;

    $data = '{' .
        "\"x\":\"$x\"," .
        "\"y\":\"$y\"," .
        "\"r\":\"$r\"," .
        "\"curtime\":\"$time\"," .
        "\"exectime\":\"$exec_time\"," .
        "\"hit\":\"$hit\"" .
    "}";

    echo $data;
}

?>
