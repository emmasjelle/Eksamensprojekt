<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="UTF-8">
    <link href='Style.css' rel='stylesheet'>
    <title>Login</title>
    </head>
    <body>

    <!--Navigationbars-->
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
<li><a href="LogIn.html">Booking</a></li>
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
<li><a href="LogIn.html">Booking</a></li>
<li><a href="omMig.html">Om mig</a></li>
<li><a href="Kontakt.html">Kontakt</a></li>
<!--Admin funktioner-->
<li><a href="tilfoejTiderA.html">Tilføj tider</a></li>
<li><a href="seBooketTiderA.html">Se booket tider</a></li>
<li><a onClick="logOut()" href="Forside.html">Log ud</a></li>
</ul>
</div>

<!--Log ind/Registrer side-->
<div class="Login/Register">
    <h1>Log ind</h1>

<!--Log in form-->
<form id="login" onsubmit="return validateForm()">
    <input type="text" id="userName" placeholder="Brugernavn" value=""/><br />
    <input type="password" id="userPw" placeholder="Password" value=""/><br />
    <br/>

    <!--Her referer vi til Login() funktionen-->
<input type="reset" value="Log ind" onClick="Login()">
    <br/>
    <br/>
    </form>

    <h1>Registrer</h1>

    <!--Register form  her under name og id  -->
    <form id="register">
    <input type="text" id="nm" placeholder="Vælg brugernavn" value=""/><br />
    <input type="password" id="pw" placeholder="Vælg password" value=""/><br />
    <br/>

    <!--Knappen referer til StoreUser() funktionen-->
<input type="button" value="Opret bruger" onClick="StoreUser()">
    </form>

    <!-- Her referer vi til bruger.js i js -->
    <script type="text/JavaScript" src="bruger.js"></script>
    </div>

    </body>
    </html>
