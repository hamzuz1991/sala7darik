function verifform() {
    var statut = document.getElementById('inputStatut').value;
var nom = document.getElementById('inputfirstname').value;
var prenom = document.getElementById('inputlastname').value;
var doma = document.getElementById('inputselectdom').value;
var spec = document.getElementById('inputState1').value;
var adress = document.getElementById('inputAddress').value;
var gouv = document.getElementById('inputCity').value;
var codep = document.getElementById('inputZip').value;


    if ((statut == " ") || (nom == " ") ||(prenom == " ") || (doma == " ") || (spec == " ") || (adress == " ") || (gouv == " ") || (codep == " ") ||(!verifemail)|| (!verifpass) || (!veriftel)) {
        console.log("erreur");
        return false
    } else {
        mytab() ;
        return true
    }
}

function mytab() {
    var statut = document.getElementById('inputStatut').value;
var nom = document.getElementById('inputfirstname').value;
var prenom = document.getElementById('inputlastname').value;
var doma = document.getElementById('inputselectdom').value;
var spec = document.getElementById('inputState1').value;
var tel = document.getElementById('inputTel.portable').value;
var adress = document.getElementById('inputAddress').value;
var gouv = document.getElementById('inputCity').value;
var codep = document.getElementById('inputZip').value;
var password = document.getElementById('inputPassword4').value;
var tel = document.getElementById('inputTel.portable').value;
var email = document.getElementById('inputEmail4').value;
    if (statut == "client") {
        USER = {
            email: email,
            name: nom,
            lastname: prenom,
            key: password,
            Adress: adress,
            gouvernement: gouv,
            numero: tel,
            codepostal: codep,
        }

    }
    if (statut == "commercant")
        USER = {
            email: email,
            name: nom,
            lastname: prenom,
            key: password,
            Adress: adress,
            gouvernement: gouv,
            numero: tel,
            codepostal: codep,
            domain: doma,
            profession: spec,
        }
    var tuser = JSON.parse(localStorage.getItem("tab")) || [];
    if (tuser == null) {
        tuser = [];
    }
    tuser.push(USER);
    console.log(USER);
    localStorage.setItem("tab", JSON.stringify(tuser));
    console.log(tuser);

}


function badel() {
    var x = document.getElementById("comm");
    var x1 = document.getElementById("comm1");
    var x2 = document.getElementById("cmtc");
    var x3 = document.getElementById("cmtco");
    var y = document.getElementById("inputStatut").value;
    console.log(y);
    if (y == "commercant") {
        x.style.display = "block";
        x1.style.display = "block";
        x3.style.display = "block";
        x2.style.display = "none";

    } else if (y == "client") {
        x.style.display = "none";
        x1.style.display = "none";
        x3.style.display = "none";
        x2.style.display = "block";
    }
}


function domaine() {
    var dom = document.getElementById("inputselectdom").value;
    console.log(dom);
    if (dom == "Electrique") {


        console.log("gggg");
        document.getElementById("inputState1").options[0] = new Option("installation", "installation", true, false);
        document.getElementById("inputState1").options[1] = new Option("TV.reparation", "TV.reparation", true, false);
        document.getElementById("inputState1").options[2] = new Option("Praboliste", "Praboliste", true, false);
        document.getElementById("inputState1").options[3] = new Option("Reparation.electromenager", "Reparation.electromenager", true, false);
    }
    if (dom == "Planperie") {
        document.getElementById("inputState1").options[0] = new Option("canalisation", "canalisation", true, false);
        document.getElementById("inputState1").options[1] = new Option("climatisation", "climatisation", true, false);
        document.getElementById("inputState1").options[2] = new Option("chaudiere", "chaudiere", true, false);
        document.getElementById("inputState1").options[3] = new Option("Reparation.installation", "Reparation.installation", true, false);
    }
}

function verifemail() {
    var ch = document.getElementById('inputEmail4').value;
    var x = ch.indexOf("@");
    var y = ch.indexOf('.', x);
    console.log(x);

    if (x < 0) {
        document.getElementById('vemail').innerHTML = "emailincorrect";
        return false;
    }


    if ((x > 0) && (y > 0)) {
        return true
    } else if (x < 0) {
        document.getElementById('vemail').innerHTML = "emailincorrect";
        return false;
    } else {
        document.getElementById('vemail').innerHTML = "emailincorrect";
        return false;
    }
}

function verifpass() {
    var ch = document.getElementById('inputPassword4').value;
    var patt1 = /[0-9]/g;
    var patt2 = /[a-z]/g;
    var patt3 = /[A-Z]/g;
    var patt4 = /[;:,!^$ù*.]/g;
    var x = ch.indexOf(' ');
    var e = 0
    var y =  ch.test(patt1);
    ;
    console.log(t)
    var y1 = ch.test(patt2);
    console.log(y1)
    var y2 =  ch.test(patt3);
    console.log(y2)
    var y3 =  ch.test(patt4);
    console.log(y3)


    if (y.toString() =="true")

    {
        e = e + 1
        console.log(e)
    }

    if (y1.toString()=="true")

    {
        e = e + 1;
        console.log(e)
    }

    if (y2.toString()=="true") {
        e = e + 1;
        console.log(e)
    }

    if (y3.toString()=="true")

    {
        e = e + 1;
        console.log(e)
    }
    /*if (e=1){
        document.getElementById('vpass').innerHTML ="tres faible" ;
        
    }
    if (e=2){
        document.getElementById('vpass').innerHTML =" faible" ;
        
    }
    if (e=3){
        document.getElementById('vpass').innerHTML ="fort" ;
        
    } if (e=4){
        document.getElementById('vpass').innerHTML ="tres fort" ;
       
    }*/
    console.log(ch.length);
    if ((e > 3) && (ch.length > 8) && (x < 0))

    {

        return true;
    } else {
        document.getElementById('vpass').innerHTML = "votre mot de passe il faut min un lettre maj et numbre et lettre minuscule ou ^$ù*,;:! et sa taille plus que 8 caractere et pas d'epaces";
        return false;
    }



}

function veriftel() {
    var ch = document.getElementById('inputTel.portable').value;
    var n = ch.indexOf(/['0-9']/i);
    if ((n > 0) && (tel.length = 8)) {
        return true;
    } else {
        return false;
    }
}

