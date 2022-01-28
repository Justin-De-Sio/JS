<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="UTF-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="stylesheet" href="style.css">
   <title>Calculatrice</title>
</head>

<body>
   <div class="app">
      <h3 id="result"></h3>

      <?php
      foreach (str_split('9874563210.+-*/') as $i)
         echo "<button class='btn' id='$i'>$i</button>";
      ?>
      <button id="equal">=</button>
      <button id="clear">C</button>
   </div>

   <script src="index.js">

   </script>
</body>

</html>