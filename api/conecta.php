<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$host = "localhost";
$user = "root";
$pass = "melancia";
$base = "atividades";

$conn = new mysqli($host, $user, $pass, $base);

$tsql = "SELECT Dia, Valor FROM ativo_qualquer";

$result = $conn->query($tsql);

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"dia":"'  . $rs["Dia"] . '",';
    $outp .= '"valor":"'   . $rs["Valor"]. '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>