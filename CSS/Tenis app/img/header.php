<?php 
// $root =  $_SERVER['DOCUMENT_ROOT']; 
$root =  "ds"; 
$root .=  "/lokomotiva4"; 
$url =  $_SERVER['SERVER_NAME'];; 
  
require "db.php";

$stara = isset($_GET["s"]);
if (!$stara) echo '<link rel="stylesheet" type="text/css" href="lokomotiva1.css">';
if ($stara) {
	$q = sprintf(" ID = %d", $_GET["s"]);
} else {
	$q = " tekuca = 1";
}
$row =  mysql_fetch_assoc(mysql_query("select id, opis from sezona where" . $q));
$opis = $row["opis"];


?>
<html>
<head>
<link rel="stylesheet" href="<?php  $root ?>/pure060.css">
<link rel="stylesheet" type="text/css" href="<?php $root ?>/lokomotiva.css">
<link rel="stylesheet" href="<?php  $root ?>/css/style.css" />


<link rel="stylesheet" href="<?php $root ?>/pure060.css">
<link rel="stylesheet" type="text/css" href="<?php $root ?>/lokomotiva.css">
<link rel="stylesheet" href="<?php $root ?>/stat/grid.css" type="text/css">

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="Content-Language" content="sr">
<!-- <meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="viewport" content="width=400, initial-scale=1, user-scalable=no"> -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>TK Lokomotiva Liga</title>

</head>
<body lang=SR>

<header class="header">
	<div class="row header__row">
	<div class="col-1-of-2">
		<div class="header__logo-box">
		<a href="/index.php">
		<img src="<?php $root ?>/img/logo.png" alt="Logo" class="header__logo" />
		</a>
		</div>
	</div>
	<div class="col-1-of-2">
	<div class="navigation">
            <ul>
              <li class="nav-item">
                <a href="<?php $url ?>/index.php"> Tabela</a>
              </li>
              <li class="nav-item">
                <a href="<?php $url ?>/stat/index.php">Mečevi</a>
              </li>
              <li class="nav-item">
                <a href="#"> Singl Sezone </a>

                <div class="sub-menu">
                  <ul>
					  <?php
				  		$qry =  mysql_query("select id, opis, tekuca from sezona order by ID desc");
						while ($row =  mysql_fetch_assoc($qry)) {
								echo"
								<li>
									<a href='https://".$url."/index.php?s=" . $row['id'] . "'>" . $row['opis'] . "</a>
								</li>
								";							
						}
						?>
                  </ul>
                </div>
              </li>
              <li class="nav-item">
                <a href="#"> Dubl sezone </a>
                <div class="sub-menu">
                  <ul>
					  <?php
					  $dubl =  mysql_query("select id, opis, tekuca from dublsezona order by ID desc");
					  while ($rowDubl =  mysql_fetch_assoc($dubl)) {
						echo"
						<li>
							<a href='https://".$url."/dubl.php?s=" . $rowDubl['id'] . "'>" . $rowDubl['opis'] . "</a>
						</li>
						";
					  }
					//   mysql_close();
					  ?>
                  </ul>
				  
              </li>
            </ul>
			<div class="hamburger">
					<span class="bar"></span>
					<span class="bar"></span>
					<span class="bar"></span>
				   </div>
                </div>
          </div>
	</div>
	</div>
</header>

<script>
	const burger = document.querySelector(".hamburger");
	const menu = document.querySelector(".navigation");
	const menuItem = document.querySelectorAll(".nav-item");
	burger.addEventListener("click", () => {
		if(menu.classList.contains("active")){
			menu.style.right = "-100%";
			burger.classList.remove("active");
			menu.classList.remove("active");
		}else{
			burger.classList.add("active");
			menu.style.right = "0";
			menu.classList.add("active");
		}
	});
	menuItem.forEach((item) => {
    item.addEventListener("click", function(){
		let subItem = item.querySelector(".sub-menu")
		if (subItem) {
			if(subItem.classList.contains("active")){
				subItem.classList.remove("active");
			}else{
				subItem.classList.add("active");
			}
		}
  })});
  const href = window.location.href;
  if (href.includes("index.php")){
	menuItem[0].classList.add("active");
  	}
  if (href.includes("stat")){
	menuItem[1].classList.add("active");
	menuItem[0].classList.remove("active");
	}
  if (href.includes("index.php?s=")){
	menuItem[2].classList.add("active");
	menuItem[0].classList.remove("active");
	}
  if (href.includes("dubl")){
	menuItem[3].classList.add("active");
	}
</script>