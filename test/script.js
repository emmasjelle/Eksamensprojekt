function test() {
    //Henter teksten fra paragraffen
    var x = document.getElementById('denGrimme').innerHTML;
    let f = 0;
    //Find antallet af '.' i tekststykket - i mit teksstykke er der fx 2
    let punktum = x.split('.').length-1;
    //Teksten splittes op i dele adskilt af punktum
    var y = x.split('.',1000);
    document.getElementById('denGrimme').innerHTML = y[0]+y[1];

    let g = document.createElement('p');
    var text = document.createTextNode(y[0]);
    g.appendChild(text);

    var k = document.getElementsByClassName('tekstboks');
    k.appendChild(g);
}