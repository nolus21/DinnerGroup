<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!--finish description!!!!!-->
<meta name="description" content="Dinner Group is a collective of people working across..." />
<title>Dinner Group</title>
<link rel="stylesheet" href="/css/styles.css" media="screen">
<link rel="stylesheet" href="/css/stylesprint.css" media="print">
<link rel="shortcut icon" href="/favicon.ico">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<script src="/js/jquery.js"></script>
<script src="/js/functions.search.js"></script>
<script src="/js/lazyload.js"></script>
<script>
var lazyLoadInstance = new LazyLoad({
elements_selector: ".lazy",
threshold: 1000
});
</script>
</head>

<body>
   
<!-- Top bar-->
<header>
<nav>
<ul>
<li class="active"><a href="/">Space</a></li>
<li><a href="/index/">Database</a></li>
<li id="searchlink">Search</li>
</ul>
</nav>

<div id="about">
<a href="/about/">About</a>
</div>

<!-- Top bar-->
<!-- replace with dinnergroup.dk-->
<form method="post" action="https://www.atlasofplaces.com/"  >
<div class='hiddenFields'>
<input type="hidden" name="ACT" value="24" />
<input type="hidden" name="RES" value="" />
<input type="hidden" name="meta" value="wYKi3byXrzvYznY0q/JNYcjQayb385sn3yBZevjp+z3pIQ7FUwr3G70hLByitZdqObPgZ7CeEYeWQklR7+Pjt+NkHwvt0iKBYBCMgtEO857OvNsnyZIMKFu6iknVGMhiCjDDjPGvjHJHYi7+kJlGrlOg1D6MjvF8RJEGqzVVnk/o57BZ4bo0ai93UVPxTj9fSE8EnaYmPY87xJCy0E1Q6z+rWFT0sBowCClGSron5PD0YsxVdjI1aJGp8/tDDNZ+MhNTrvf2VJbvfQipO+mdGVbZMmnXlo2af12BwZND0uXOkFJUgcNoyvfUlSPaWyH7nwyj3b7eAscgLWpyLXa1sctGPm+TX5/DKFFBjWhyyaPbvEgnXrjBKtLWkmY5CKwYbWq5fF1lkgye0vK6N0KuuA3qidb6P8sv5JQN1BfeyPhFMlFJgQoqbCnklKxJ667T" />
<input type="hidden" name="site_id" value="1" />
<input type="hidden" name="csrf_token" value="0d54e0ef5582d02a78514004f1fb6a952852bc4f" />
</div>

<!-- search bar-->
<input type="text" autocomplete="off" placeholder="Type and press enter to search" name="keywords" id="search" value="">
</form>
</header>

<!-- develop strategy !!!!!!!!!!!!-->
<!-- develop strategy !!!!!!!!!!!!-->
<!-- develop strategy !!!!!!!!!!!!-->
<!-- develop strategy !!!!!!!!!!!!-->
<!-- develop strategy !!!!!!!!!!!!-->


<!-- intro -->
<section id="intro">
<?php include 'intro.php';?>
</section>





<!-- main section comes here -->
<!-- main section comes here -->
<!-- main section comes here -->
<!-- main section comes here -->



<section id="main" class="overview">
    
  
 
<!--these are tests for connecting to javascript DOM 
    <a>
        <popup-info></popup-info>
        <script src= "popup.js"></script>
    </a>
    <a>
        <aleppo-1></aleppo-1>
        <script src= "Aleppo1.js"></script>
    </a>
-->


        <?php include 'projects\architecture\uwdziedziniec\uwdziedziniec.php';?>
        <?php include 'projects\spatialstrategies\aleppo\aleppo1.php';?>
        <?php include 'projects\architecture\wyspianski\wyspianski.php';?>
        <?php include 'projects\research\shenzen\shenzen.php';?>
 

        <?php include 'projects\architecture\smichov\smichov.php';?>
        <?php include 'projects\architecture\kladkapoznan\kladkapoznan.php';?>
        <?php include 'projects\architecture\skylense\skylense.php';?>
        <?php include 'projects\architecture\opole\opole.php';?>
      



        <?php include 'projects\spatialstrategies\forest\forest.php';?>
        <?php include 'projects\spatialstrategies\coast\coast.php';?>
        <?php include 'projects\spatialstrategies\aleppo\aleppo_pub.php';?>
        <?php include 'projects\art\art1.php';?>
        <?php include 'projects\research\smartcity\smart_city1.php';?>


</section>

<script>
if (lazyLoadInstance) {lazyLoadInstance.update();}
</script>

</body>
</html>