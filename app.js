/*var  pin = document.querySelector('.pon')

addEventListener('click',function () {
    pin.classList.add('jaune')
})
*/

var saisine = document.querySelector('#saisine')

saisine.focus()
/*Bon la j'avais pas trop le temps de reprendre tous
Tous les reference  1 à une xd :)
du coup les references de other j'ai copier coller
 */
other = {
    0 : "That key has no keycode",
    3 : "break",
    8 : "backspace / delete",
    9 : "tab",
    12 : 'clear',
    13 : "enter",
    16 : "shift",
    17 : "ctrl",
    18 : "alt",
    19 : "pause/break",
    20 : "caps lock",
    21 : "hangul",
    25 : "hanja",
    27 : "escape",
    28 : "conversion",
    29 : "non-conversion",
    32 : "spacebar",
    33 : "page up",
    34 : "page down",
    35 : "end",
    36 : "home",
    37 : "left arrow",
    38 : "up arrow",
    39 : "right arrow",
    40 : "down arrow",
    41 : "select",
    42 : "print",
    43 : "execute",
    44 : "Print Screen",
    45 : "insert",
    46 : "delete",
    47 : "help",

}

addEventListener('keyup',function (e) {

    var  keyC = document.getElementById("total").innerHTML= e.keyCode

    var vraiC = document.getElementById("lettres").innerHTML= String.fromCharCode(e.keyCode)
    if (keyC != other, vraiC != other) {
        document.getElementById("nice").innerHTML= "Le keyCode de "+ vraiC + " est : " + keyC

    }





})