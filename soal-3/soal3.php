<?php

// logs user yang online dan offlines
$logs = [
    ["user" => "andi", "action" => "login"],
    ["user" => "budi", "action" => "login"],
    ["user" => "andi", "action" => "logout"],
    ["user" => "citra", "action" => "login"]
];

function getActiveUsers($logs){
    $status = [];
    foreach ($logs as $log){
        $status[$log['user']] = $log['action'];
    }

    $activeUsers = [];
    foreach ($status as $user => $action){
        if ($action === 'login'){
            $activeUsers[] = $user;
        }
    }

    return $activeUsers;
}

print_r(getActiveUsers($logs));
?>