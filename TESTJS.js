//Sanels gamle Booking HTML
<!doctype html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <link href='Style.css' rel='stylesheet'>
    <script type="text/javascript" src="Classes.js"></script>
    <script type="text/javascript" src="testA.js"></script>
    <title>Booking</title>
    </head>

    <body onload="isLoggedIn(); navBar()">

    <!--Navigationbars-->

    <!-- logo -->
    <img src="https://i.imgur.com/AiPTQKP.png"
style="width:13%;height:20%;float:right;padding:5px">

    <div class="NavigationBar" id="all">

    <ul>
    <!--Fælles navigationsbar-->
<li><a href="Forside.html">Forside</a></li>
<li><a href="BehandlingsTyper.html">Behandlingstyper</a></li>
<li><a href="LogIn.html">Booking</a></li>
<li><a href="omMig.html">Om mig</a></li>
<li><a href="Kontakt.html">Kontakt</a></li>
</ul>
</div>

<div class="NavigationBar" id="user">
    <ul>
    <!--Bruger navigationbar-->
<li><a href="Forside.html">Forside</a></li>
<li><a href="BehandlingsTyper.html">Behandlingstyper</a></li>
<li><a href="BookingLB.html">Booking</a></li>
<li><a href="omMig.html">Om mig</a></li>
<li><a href="Kontakt.html">Kontakt</a></li>
<!--Bruger funktioner-->
<li><a href="seTiderB.html">Se mine tider</a></li>
<li><a onClick="logOut()" href="Forside.html">Log ud</a></li>
</ul>
</div>

<div class="NavigationBar" id="adm">
    <ul>
    <!--Admin navigationbar-->
<li><a href="Forside.html">Forside</a></li>
<li><a href="BehandlingsTyper.html">Behandlingstyper</a></li>
<li><a href="BookingLB.html">Booking</a></li>
<li><a href="omMig.html">Om mig</a></li>
<li><a href="Kontakt.html">Kontakt</a></li>
<!--Admin funktioner-->
<li><a href="tilfoejTiderA.html">Tilføj tider</a></li>
<li><a href="seBooketTiderA.html">Se booket tider</a></li>
<li><a onClick="logOut()" href="Forside.html">Log ud</a></li>
</ul>
</div>

<h1>Velkommen til vores bookingside</h1>

<link rel="stylesheet" href="Calender.css" />

    <div class="date-picker">
    <div class="selected-date"></div>

    <div class="dates">
    <div class="month">
    <div class="arrows prev-mth">&lt;</div>
    <div class="mth"></div>
    <div class="arrows next-mth">&gt;</div>
    </div>

    <!-- Hvorfor virker det ikke med id -> ligemeget hvor man trykker vil den tælle op onclick="displayTime()"-->
    <div id="henrikthorn" class="days">
    <div class="day">1</div>
    <div class="day">2</div>
    <div class="day">3</div>
    <div class="day">4</div>
    <div class="day">5</div>
    <div class="day">6</div>
    <div class="day">7</div>
    </div>
    </div>

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    <table>
    <tr><td><button class="editbtn">edit</button></td></tr>
<tr><td><button class="editbtn">edit</button></td></tr>
<tr><td><button class="editbtn">edit</button></td></tr>
<tr><td><button class="editbtn">edit</button></td></tr>
</table>

<!--  Leilas tabel som popper op -> virker sku ik
<div>
<table id="hello">
    <thead>
    <tr>
    <th><b>Ledige tider</b></th>
</tr>
</thead>
<tbody id = "tbody">
    </tbody>
    <tfoot>
    </tfoot>
    </table>
    </div>
-->





<!--
    Velkommen til vores bookingside
<br/>
Vælg en dato
<input type="date" id="choosenDate" value="">
    <input type="button" value="Søg på dato" onClick="searchDate()">
    -->

    <script src="Calender.js"></script>
    <script type="text/JavaScript" src="Booking.js"></script>
    <script type="text/JavaScript" src="logIn.js"></script>
    </body>

    </html>