<?php

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    $entityBody = file_get_contents('php://input');
    file_put_contents('api.json', $entityBody);
}