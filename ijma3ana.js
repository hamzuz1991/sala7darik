function verifform() {
   

    var nom = document.getElementById('inputfirstname').value;
    var prenom = document.getElementById('inputlastname').value;
    console.log(prenom);
    var doma = document.getElementById('inputselectdom').value;
    var spec = document.getElementById('inputState1').value;
    var adress = document.getElementById('inputAddress').value;
    var gouv = document.getElementById('inputCity').value;
    var codep = document.getElementById('inputZip').value;
    var x = document.getElementById("login");
    var x1 = document.getElementById("login1");
    var y = document.getElementById("save");



    if ( (nom == "") || (prenom == "") || (doma == "") || (spec == "") || (adress == "") || (gouv == "") || (codep == "") || (!verifemail) || (!verifpass) || (!veriftel)) {
        console.log("erreur");
        document.getElementById('sign').innerHTML = "ereue";
        return false
    } else {
        x.style.display = "none";
        x1.style.display = "none";
        y.style.display = "none";
        document.getElementById('logcom').innerHTML = "vous pouver utuliser notre site comme un commerct e notre site";
        document.getElementById('logcol').innerHTML = "vous pouver reservez sur notre site";
        mytab();
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
    if (statut == "client")
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
       
        var x1 = document.getElementById("comm1");
        var x2 = document.getElementById("comm");
    
        
            x1.style.display = "none";
           
            x2.style.display = "none";

      
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
    


        if (patt1.test(ch).toString()== "true") {
            console.log(patt1.test(ch).toString())
            e = e + 1
            console.log(e)
        }

        if (patt2.test(ch).toString()  == "true") {
            e = e + 1;
            console.log(e)
        }

        if ( patt3.test(ch).toString()  == "true") {
            e = e + 1;
            console.log(e)
        }

        if (patt4.test(ch).toString() == "true") {
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
        if ((e > 2) && (ch.length > 8) && (x < 0)) {

            return true;
        } else {
            document.getElementById('vpass').innerHTML = "votre mot de passe il faut min un lettre maj et numbre et lettre minuscule ou ^$ù*,;:! et sa taille plus que 8 caractere et pas d'epaces";
            return false;
        }



    }

    function veriftel() 
    {
        var ch = document.getElementById('inputTel.portable').value;
        var n = ch.indexOf(/['0-9']/i);
        if ((n > 0) && (tel.length = 8)) {
            return true;
        } else {
            return false;
        }
    }

