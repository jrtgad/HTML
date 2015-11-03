<?php

for ($i = 0; $i < 5; $i++) {
    $aux       = rand(1, 9);
    $operacion = rand(0, 1);
    $razon     = rand(1, 9);
    $cont = 0;
    
    echo "<tr>";

    //$operacion = 1 suma, 0 multiplica
    
    if ($operacion) {
        while ($cont < 5) {
            for ($j = 0; $j < 5; $j++) {
                $series[$i][$j] = $aux;
                echo "<td name=\"series[$i][$j]\">" . $aux . "</td>";
                echo "<input type=hidden ";
                $aux += $razon;
                $cont++;
            }
            echo "<td><input type=text name=\"series[$i][5]\"></td>";
        }
    } else {
        while ($cont < 4) {
            for ($j = 0; $j < 4; $j++) {
                $series[$i][$j] = $aux;
                echo "<td name=\"series[$i][$j]\">" . $aux . "</td>";
                $aux *= $razon;
                $cont++;
            }
            echo "<td><input type=text name=\"series[$i][5]\"></td>";
        }
    }
    echo "</tr>";
}
?>