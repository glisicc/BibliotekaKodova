<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- ---- custom css link ----- -->
    <link rel="stylesheet" href="css/style.css">
    <!-- ---- font links ---- -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
    <!-- --- bootstrap ---- -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <!-- --- slider link --- -->
    <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css"/>
    <title>Document</title>
</head>
<body>
<!-- ------  left side -------- -->
    <?php include 'left-side.php' ?>
    
<section class="right-side">
    <!-- ---- header ----- -->
    <?php include 'header.php' ?>
    <!-- ----  content ------ -->
    <!-- ----  content ------ -->
    <!-- ----  content ------ -->

    <!-- ----- first slider ------ -->
    <?php include './modules/sliders/first-slider.php' ?>    
    <!-- ------ news slider ------ -->       
    <?php include './modules/sliders/news-slider.php' ?>
    <?php include './modules/sliders/news-slider.php' ?>
    <!-- --- red block --- -->
    <?php include './modules/blocks/red-block.php' ?>
    <!-- --- links block --- -->
    <?php include './modules/blocks/links.php' ?>
    <!-- --- single out block --- -->
    <?php include './modules/blocks/single-out.php' ?>

    <!-- ----  END content ------ -->
    <!-- ----  END content ------ -->
    <!-- ----  END content ------ -->

    <!-- --- FOOTER--- -->
    <?php include 'footer.php' ?>
    <!-- ------ END FOOTER ------ -->
</section>

<script>
    var navLinks = document.getElementById("navLinks");
    function showMenu(event){
        navLinks.style.top = "0";
    }
    function hideMenu(){
        navLinks.style.right = "-200px";
    }
</script>
 
<script
  src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>

<!-- JavaScript for Toggle menu -->
<script>
    var navLinks = document.getElementById("navLinks");
    function showMenu(){
        navLinks.style.left = "0";
        navLinks.style.width = "100vh";
    }
    function hideMenu(){
        navLinks.style.left = "-200px";
        navLinks.style.width = "0";
    }
</script>
</body>
</html>
