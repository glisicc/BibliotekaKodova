<html>
<head>
<link rel="stylesheet" href="pure060.css">
<link rel="stylesheet" type="text/css" href="lokomotiva.css">
<link rel="stylesheet" href="/css/style.css" />
<?php
	$stara = isset($_GET["s"]);
	if (!$stara) echo '<link rel="stylesheet" type="text/css" href="lokomotiva1.css">';
?>
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
		<img src="./img/logo.png" alt="Logo" class="header__logo" />
		</a>
		</div>
	</div>
	<div class="col-1-of-2">
	<div class="navigation">
            <ul>
              <li class="active">
                <a href="/index.php"> Tabela</a>
              </li>
              <li>
                <a href="stat/index.php">Mečevi</a>
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-user" aria-hidden="true"></i> Sezona - <?php echo $opis ?>
                </a>

                <div class="sub-menu">
                  <ul>
					  <?php
				  		$qry =  mysql_query("select id, opis, tekuca from sezona order by ID desc");
						while ($row =  mysql_fetch_assoc($qry)) {
								echo"
								<li>
									<a href='index.php?s=" . $row['id'] . "'>" . $row['opis'] . "</a>
								</li>
								";							
						}
						?>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-user" aria-hidden="true"></i> Dubl sezone
                </a>
                <div class="sub-menu">
                  <ul>
					  <?php
					  $dubl =  mysql_query("select id, opis, tekuca from sezona order by ID desc");
					  while ($rowDubl =  mysql_fetch_assoc($dubl)) {
						echo"
						<li>
							<a href='index.php?s=" . $rowDubl['id'] . "'>" . $rowDubl['opis'] . "</a>
						</li>
						";
					  }
					//   mysql_close();
					  ?>
				  		
                  </ul>
                </div>
              </li>
            </ul>
          </div>
	</div>
	</div>
</header>