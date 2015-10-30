<!DOCTYPE html>
<html>
    <head>
        <title>Generador series</title>
    </head>
    <body>
        <form action="comprueba.php" method="POST">
            <table>
                <?php
                    include "vistas/series.php"
                ?>
            </table>
            <br>
            <input type="SUBMIT" value="Comprobar" name="botonenvio">
        </form>
    </body>
</html>