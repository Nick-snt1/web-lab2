<?php

session_start();

if (isset($_SESSION['data'])) {
    echo json_encode($_SESSION['data'], JSON_FORCE_OBJECT);
}

?>